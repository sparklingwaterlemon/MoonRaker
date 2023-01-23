import { Await } from "react-router-dom";
import * as usersAPI from "./users-api";

export async function signUp(userData){
    try{
        console.log("curr @ user-service.js signUp -> ");
        const token = await usersAPI.signUp(userData)
        console.log("<- user-service.js \\ user-api.js")
        return token;
    } catch{
        throw new Error("user-service.js - Invalid Sign Up")
    };
};