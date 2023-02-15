import * as usersService from "./users-service";

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

    // console.log("helper function options", options);
    // console.log("url", url)
    
    const res = await fetch(url, options);

    if(res.ok) return res.json();
    
    throw new Error("Bad Request");
};
