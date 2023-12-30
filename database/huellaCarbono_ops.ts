"use server";

import { Post } from "./fetch";

const PATH = "mapa/huellaCarbono/calculate";

export async function calcularHuellaCarbono(origin:string, destination:string) {

    const data = await Post(PATH, {adressFrom : origin,
    adressTo : destination,
    model : "7268a9b7-17e8-4c8d-acca-57059252afe9"});
    const json = await data.json();
    console.log(json.data);
    return await json;
}    