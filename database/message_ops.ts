"use server";

import { Post } from "./fetch";
import { NewMessageJSON } from "./messages";

const PATH = "messages";

export async function CreateNewMessage(message: NewMessageJSON) {
    return await Post(PATH, message);
}    