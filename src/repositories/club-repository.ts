import { ClubModel } from "../models/ClubModel";
import fs from "fs/promises";

//repository é a camada que cuida da comunicação entre elementos 
//sendo assim ele pode direcionar de onde esta tirando  exemplo abaixo 
//estava fixo , vamos pegar do arquivo json agora

/*
const database=[
    {id:1,
     name:"Real Madrid"} 
 ]
export const findAllClubs = async():Promise<ClubModel[]>=>{

return data}

*/

export const findAllClubs = async():Promise<ClubModel[]>=>{
    const data = await fs.readFile("./src/data/clubs.json","utf-8")
    const clubs : ClubModel[] = JSON.parse(data);
    return clubs;
}  