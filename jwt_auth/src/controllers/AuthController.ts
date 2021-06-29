import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";
import {getConnection,getManager} from "typeorm";

import { User } from "../entity/user";
import config from "../config/config";
import { Role } from "../entity/role";
import { Employee } from "../entity/employee";

class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { email, password, roleIdentifier  } = req.body;
    if (!(email && password && roleIdentifier)) {
      res.status(400).send();
      return;
    }

    //Get user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({where : { email: email }});
    } catch (error) {
      res.status(401).send({message: "Invalid user"});
      return;
    }

     

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send({message: "Invalid password"});
      return;
    }

    console.log(user);

    //Check if role match
    if (user.role && user.role.identifier != roleIdentifier) {
      //console.log(`error role: '${user.role.identifier}' '${roleIdentifier}'`)
      res.status(401).send({message: "Invalid role"});
      return;
    }


    const rawData = await getManager().query(`SELECT * FROM Employee WHERE userId = $1`, [user.id]);
    const rawData2 = await getManager().query(`SELECT * FROM Employee`);

    console.log("raw", user.id);
    console.log("raw", rawData);
    console.log("raw", rawData2);
    //Sign JWT, valid for 1 hour
    let restaurantId = null;

    const token = jwt.sign(
      { userId: user.id, username: user.username, roleIdentifier: user.role.identifier, restaurantId:  restaurantId},
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send({accessToken: token});
  };

  static register = async (req: Request, res: Response) => {
    //Get parameters from the body
    let { email, password, username, roleIdentifier } = req.body;
    let user = new User();
    user.email = email;
    user.password = password;
    user.username = username;
    
    let roleObj;
    const roleRepository = getRepository(Role);
    try {
      roleObj = await roleRepository.findOneOrFail({where : { identifier: roleIdentifier }});
    } catch (e) {
      console.log("error role: ", roleIdentifier )
      res.status(401).send({message:"Failed to find associated role"});
      return;
    }
    
    user.role = roleObj;

    user.suspended = false;
    user.notification = true;

    console.log("ROLE", roleObj);
    console.log("USER", user);

    //Validade if the parameters are ok
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Hash the password, to securely store on DB
    user.hashPassword();

    //Try to save. If fails, the username is already in use
    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      //console.log(e)
      res.status(409).send({message:"Failed to create user"});
      return;
    }

    //If all ok, send 201 response
    res.status(201).send({message:"User created"});
  };

  static changePassword = async (req: Request, res: Response) => {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send();
      return;
    }

    //Validate de model (password lenght)
    user.password = newPassword;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
    //Hash the new password and save
    user.hashPassword();
    userRepository.save(user);

    res.status(204).send();
  };
}
export default AuthController;
