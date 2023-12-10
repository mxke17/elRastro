"use server";

import { NewBidJSON } from "./bid";
import { Post } from "./fetch";

const PATH = "pujas";

export async function CreateNewBid(bid: NewBidJSON) {
    return await Post(PATH, bid);
}