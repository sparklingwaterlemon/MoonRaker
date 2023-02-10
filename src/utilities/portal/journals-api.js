import { sendRequest } from "./helper-function";

const BASE_URL = '/api/journal';

export function addEntry(newEntry){
    return sendRequest(`${BASE_URL}/add`, "POST", newEntry )
};

export function getAll(){
    return sendRequest(BASE_URL)
};

export function update(updatedEntry){
    return sendRequest(`${BASE_URL}/update`, "PUT", updatedEntry)
};

