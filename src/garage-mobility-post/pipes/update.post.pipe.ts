import { PostModel } from "../../garage-mobility-entities";
import { UpdatePostDTO } from "../DTOs";
import httpStatus from "http-status";

export const UpdatePostPipe = async (UpdatePostDTO: UpdatePostDTO) => {
    const { postID, title, content } = UpdatePostDTO;
    const post = await PostModel.findById(postID).lean();
    if (!post) return { status: httpStatus.NOT_FOUND, message: `Post not found`, data: null, hookData: null };
    const updatedPost = await PostModel.findByIdAndUpdate(post._id, { title, content }, { new: true });
    return { status: httpStatus.OK, message: `Post updated successfully`, data: updatedPost, hookData: updatedPost };
};