"use server";

import { NewAuctionJSON } from "./auctions";
import { Post, PostFormData } from "./fetch";

const PATH = "subastas";

export async function CreateNewAuction(auction: NewAuctionJSON) {
    return await Post(PATH, auction);
}


export async function NewAuctionFromForm(formData: FormData, user: string) {
    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");
    const date = formData.get("date");
    const picture = formData.get("picture") as File;

    if(!title || !description || !price || !date || !picture) {
        return;
    }

    const imageFormData = new FormData();
    imageFormData.set("file", picture);

    const imageResponse = await PostFormData("imagenes", imageFormData);
    if(imageResponse.status !== 200) {
        return;
    }

    const imageResponseJson = await imageResponse.json();
    const url = imageResponseJson.imageUrl;

    const auctionResponse = await CreateNewAuction({
        Titulo: title as string,
        Descripcion: description as string,
        "Fecha limite": new Date(date as string),
        "Precio partida": parseInt(price as string),
        Foto: url,
        Subastador: user
    });

    return await auctionResponse.json();
}