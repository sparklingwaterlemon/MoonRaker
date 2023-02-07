import * as usersAPI from "./users-api";

export async function signUp(userData){
    try{
        const token = await usersAPI.signUp(userData)
        localStorage.setItem('token', token);
        return getUser();
    } catch(err){
        throw new Error(err.message);
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
    const token = await usersAPI.login(cred);
    localStorage.setItem('token', token)
    return getUser();
};

export async function logOut(){
    localStorage.removeItem('token');
};