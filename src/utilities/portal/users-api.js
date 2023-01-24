const BASE_URL = "/api/users";

export async function signUp(userData){
    console.log("curr @ user-api.js signUp ->")
    // console.log("user-api.js signUp", JSON.stringify(userData));

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
        console.log("res.okay");
        return res.json();
    } else{
        throw new Error("post-res users-api.js - Invalid Sign Up");
    }
};