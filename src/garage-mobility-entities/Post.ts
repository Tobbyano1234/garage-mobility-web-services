import { Document, Schema, model } from "mongoose";
import { ModelNames } from "./models.names";

export class Post extends Document {
    title: string;
    content: string;
    author: string;
};

const PostSchema = new Schema<Post>({
    title: { type: String, required: true, index: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
},
    { timestamps: true },
);

export const PostModel = model<Post>(ModelNames.POST, PostSchema);
