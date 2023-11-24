import { error } from "console";

const backendUri = process.env["BACKEND_URI"] as string;
if(!backendUri) {
    error("You need to specify BACKEND_URI in .env");
}

export async function Get(path: string) {
    return await fetch(backendUri + path);
}