import { ObjectId } from "mongodb";

export type GetSinglePostDTO = {
    postID: ObjectId
};

export type GetAllPostsDTO = {
    author: string; // this should be id for better query.
};
