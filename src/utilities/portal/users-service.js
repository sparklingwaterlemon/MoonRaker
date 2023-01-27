import * as usersAPI from "./users-api";

export async function signUp(userData){
    try{
        // console.log("curr @ user-service.js signUp -> ");
        const token = await usersAPI.signUp(userData)
        // console.log("<- curr @ user-service.js \\ user-api.js")
        localStorage.setItem('token', token);
        return getUser();
    } catch{
        throw new Error("user-service.js - Invalid Sign Up")
    };
};

export function getToken(){
    const token = localStorage.getItem('token');

    // getItem returns null if there's no string
    // checking if no token or if expired
    if(!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp < Date.now() / 1000){
        localStorage.removeItem('token');
        return null;
    };
    return token;
};

// separating retreiving token vs passing along user
export function getUser(){
    const token = getToken();
    // if token is valid
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};


export async function login(cred){
    console.log("@ user-service.js -> user-api.js")
    const token = await usersAPI.login(cred);
    console.log("<- @ SignInForm \\ users-service.js ")
    return token
};