"use server";

import { Bid, NewBidJSON } from "./bid";
import { Post } from "./fetch";

const PATH = "pujas";

export async function CreateNewBid(auction: NewBidJSON) {
    return await Post(PATH, Bid);
}