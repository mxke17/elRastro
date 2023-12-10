"use server";

import { NewAuctionJSON } from "./auctions";
import { Post } from "./fetch";

const PATH = "subastas";

export async function CreateNewAuction(auction: NewAuctionJSON) {
    return await Post(PATH, auction);
}