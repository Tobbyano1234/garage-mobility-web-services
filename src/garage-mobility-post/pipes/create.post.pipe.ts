import { PostModel } from "../../garage-mobility-entities";
import { CreatePostDTO } from "../DTOs/CreatePostDTO";
import httpStatus from "http-status";

export const CreatePostPipe = async (CreatePostDTO: CreatePostDTO) => {
    const { title, content, author } = CreatePostDTO;
    const postExist = await PostModel.findOne({ title }).lean();
    if (postExist) return { status: httpStatus.CONFLICT, message: `Post with ${title} already exist`, data: null, hookData: null };
    const newPost = await PostModel.create({ title, content, author });
    return { status: httpStatus.CREATED, message: `Post created successfully`, data: newPost, hookData: newPost };
};