"use server";

import { NewChatJSON } from "./chats";
import { Post } from "./fetch";

const PATH = "chats";

export async function CreateNewChat(chat: NewChatJSON) {
    return await Post(PATH, chat);
}    