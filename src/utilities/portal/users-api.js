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
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(cred)
    });

    if (res.ok){
        return res.json();
    } else{
        throw new Error("Error Logging In");
    }
};