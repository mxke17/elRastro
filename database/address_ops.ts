"use server";

import {  } from "postcss";
import {  AddressJSONUpdate } from "./address";
import { Put } from "./fetch";

const PATH = "direcciones";

export async function UpdateAddress(addressId:string, address: AddressJSONUpdate) {


     (await Put(`${PATH}/${addressId}`, address));

    
}