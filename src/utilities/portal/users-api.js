const BASE_URL = "/api/users";

export async function signUp(userData){
    // console.log("curr @ user-api.js signUp ->")

    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // fetch requires data payloads to be stringified
        // and assigned to a body property on the options object
        body: JSON.stringify(userData)
    });

    // to check if request was succesful
    // fetch method will not raise error unless there's a network failure
    // res.ok property to see if server returned a successful response
    if (res.ok){
        // console.log("res.ok");
        return res.json();
    } else{
        throw new Error("post-res users-api.js - Invalid Sign Up");
    }
};




export async function login(cred){
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(cred)
    });

    if (res.ok){
        return res.json();
    } else{
        throw new Error("users-api.js - Invalid Sign In");
    }
};