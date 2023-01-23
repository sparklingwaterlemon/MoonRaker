export async function signUp(userData){
    console.log("curr @ user-api.js signUp ->")
    console.log("user-api.js signUp", userData)
    return userData
    // const BASE_URL = "/api/users";

    // const res = await fetch(BASE_URL, {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     // fetch requires data payloads to be stringified
    //     // and assigned to a body property on the options object
    //     body: JSON.stringify(userData)
    // });
    // check if request was succesful
    // if (res.ok){
    //     return res.json();
    // } else{
    //     throw new Error("Invalid Sign Up");
    // }
};