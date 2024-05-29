import { ObjectId } from "mongodb";

export type UpdatePostDTO = {
    postID: ObjectId;
    title: string;
    content: string;
};
