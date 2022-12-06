import type { Entity } from "./fetchedDataTypes";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchData = async <T>(endpoint:Entity): Promise<T | []> => {
    try{
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();

    return data;
    }
    catch{
        return [];
    }
};