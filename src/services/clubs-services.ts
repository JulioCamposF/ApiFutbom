import { findAllClubs } from "../repositories/club-repository";
import { ok } from "../utils/http-helper"

//a services chama a repositors
export const getClubServices = async ()=>{
    const data= await findAllClubs();

    const response = ok(data);
    return response;
}