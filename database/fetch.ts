import { error } from "console";

const backendUri = process.env["BACKEND_URI"] as string;
if(!backendUri) {
    error("You need to specify BACKEND_URI in .env");
}

export async function Get(path: string) {
    return await fetch(backendUri + path);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function Post(path: string, data: any) {
    console.log(data);
    await fetch(backendUri + path, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });
}