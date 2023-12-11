"use server";

import {  } from "postcss";
import {  AddressJSONUpdate } from "./address";
import { Put } from "./fetch";

const PATH = "direcciones";

export async function UpdateAddress(address: AddressJSONUpdate) {
    console.log("Updating address");
    console.log(address);
    const response = (await Put(`${PATH}/${address.ID}`, address));
    console.log(response.status);
    
}