import * as usersService from "./users-service";

const BASE_URL = "/api/users";

export async function signUp(userData){
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // fetch requires data payloads to be stringified
        // and assigned to a body property on the options object
        body: JSON.stringify(userData)
    });

    if(res.ok){
        return res.json();
    } else {
        console.log()
        throw new Error("Invalid Sign Up");
    }
};


export async function login(cred){
    return sendRequest(`${BASE_URL}/login`, "POST", cred);
};


// helper function to keep things DRY //
export async function sendRequest(url, method="GET", payload=null){
    const options = { method };
    if(payload){
        options.headers = { "Content-Type" : "application/json" };
        options.body = JSON.stringify(payload);
    };

    const token = usersService.getToken();
    if(token){
        // ensuring header object exists
        options.headers = options.headers || {};
        // Adding token to an Authorization header
        // Prefacing with 'Bearer' is recommened in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
    };
 
    console.log("helper function options", options);

    const res = await fetch(url, options);
    if(res.ok) return res.json();
    throw new Error("Bad Request");
};


export function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`);
};