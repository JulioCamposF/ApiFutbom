import {Request,Response} from "express";
import { getPlayerByIdService, getPlayerService,createPlayerService, deletePlayerService, updatePlayerService } from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { statisticsModel } from "../models/Statistic-model";



//controller 
export const getPlayer = async(req:Request,res:Response)=>{
    const httpResponse =await getPlayerService();


    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async(req:Request , res:Response)=>{
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async(req:Request,res:Response)=>{
    const bodyValue = req.body
    const httpResponse = await createPlayerService(bodyValue);
  
   if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);
   }else{
    const response = await noContent()
    res.status(response.statusCode).json(response.body)
   }

}

export const deletePlayer = async(req:Request,res:Response)=>{
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const updatePlayer = async(req:Request,res:Response)=>{
   //vamos recuperar a rota e alguns da rota
    const id = parseInt(req.params.id)
    const bodyValeu:statisticsModel = req.body;
    const httpResponse = await updatePlayerService(id,bodyValeu);

    res.status(httpResponse.statusCode).json(httpResponse.body);


};