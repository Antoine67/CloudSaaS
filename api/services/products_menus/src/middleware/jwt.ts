
import * as express from 'express';
import * as jwt from "jsonwebtoken";


export default function jwtDecrypt(req: express.Request) : any { 

    const token = req.headers["x-access-token"] as string;

    return jwt.verify(token, "@ceseat-auth")

}

