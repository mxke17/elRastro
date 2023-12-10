"use server";


import { Post } from "./fetch";
import { NewReviewJSON } from "./reviews";

const PATH = "reviews";

export async function CreateNewReview(review: NewReviewJSON) {
    return await Post(PATH, review);
}