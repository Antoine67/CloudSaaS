import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { Card, CardCreationParams } from "../model/card";
import { UsersService } from "../services/user.service";
import {Tags} from 'tsoa';


export class CardsService {

  public async createCard(id: string, requestBody: CardCreationParams): Promise<boolean> {

    const card = new Card()
    for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            card[key] = value;
        }
    }

    //Validade if the parameters are ok
    const errors = await validate(card);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
    
    const cardRepository = getRepository(Card);
    var returnUser = await new UsersService().get(id);
    if(returnUser != null){
        try {
            card.user = returnUser;
            await cardRepository.save(card);
        } catch (e) {
            console.log(e);
            return;
        }
    }
  
    //If all ok, send 201 response
    console.log("Card created");
  }

  public async getAllCards(id: string): Promise<any> {
    //Get the card from database
    const cardRepository = getRepository(Card);
    
    try {
        const cards = await cardRepository
            .createQueryBuilder("card")
            .leftJoinAndSelect("card.user", "user")
            .where("user.id = :id", { id: id })
            .getMany();
        
        return cards
    } catch (error) {
        console.log(error);
    }
  }

  public async getCard(id: string, id_2: string): Promise<any> {
    //Get the card from database
    const cardRepository = getRepository(Card);
    
    try {
        const card = await cardRepository
            .createQueryBuilder("card")
            .leftJoinAndSelect("card.user", "user")
            .where("user.id = :id", { id: id })
            .where("card.id = :id", { id: id_2 })
            .getOne();
        if(card != null){
            return card;
        }
        else{
            console.log("Wrong card id or wrond user id");
        }
      
    } catch (error) {
        console.log(error);
    }
  }

  public async deleteCard(id: string, id_2: string): Promise<void> {
    const cardRepository = getRepository(Card);
    try {
        const card = await cardRepository
            .createQueryBuilder("card")
            .leftJoinAndSelect("card.user", "user")
            .where("user.id = :id", { id: id })
            .where("card.id = :id", { id: id_2 })
            .getOne();
        if(card != null){
            cardRepository.delete(id_2);
        }
        else{
            console.log("Wrong card id or wrond user id");
        }
    } catch (error) {
        console.log(error);
    }
  }
}