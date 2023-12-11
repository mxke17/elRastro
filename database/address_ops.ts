"use server";

import { NewAddressJSON } from "./address";
import { Post } from "./fetch";

const PATH = "direcciones";

export async function CreateNewAddress(address: NewAddressJSON) {
    return await Post(PATH, address);
}