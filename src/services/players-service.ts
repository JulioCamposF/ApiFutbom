import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { deleteOnePlayer, findAllPlayers,findAndModifyPlayer,findPlayerById, insertPlayer } from "../repositories/players-repository";
import { noContent, ok ,badRequest, created} from "../utils/http-helper";
import { statisticsModel } from "../models/Statistic-model";

export const getPlayerService = async()=>{
   
   const data=await findAllPlayers();
   let response = null;

   if(data){
    response = await ok(data)
   }else
   response = await noContent ()
    return response;
}

export const getPlayerByIdService = async (id:number)=>{
    //pedir para o repositorio de dados
    const data = await findPlayerById(id);
    let response=null;


   if(data){
    response=ok(data);
   }else{
    response = noContent()
   }

   return response;
};


export const createPlayerService = async (player:PlayerModel)=>{

    let response=null;


    //verifica se esta vazio
    if(Object.keys(player).length!=0){
        await insertPlayer(player);
        response = created()
    }else{
        response = badRequest();
    }

    return response;
};

export const deletePlayerService = async (id:number) =>{
    let response=null;
    const isDeleted = await deleteOnePlayer(id);
    await deleteOnePlayer(id);

    if(isDeleted){
        response =await ok({message:"Deleted"})
    }else{
        response =await badRequest()
    }

    return response

}

export const updatePlayerService = async(id:number,statistics:statisticsModel)=>{
    const data = await findAndModifyPlayer(id,statistics);

    let response = null;

    if(Object.keys(data).length===0){
        response = await badRequest();
    }else{
        response=await ok(data);
    }


    response = await ok(data);
    return response;
}






