import { PostModel } from "../../garage-mobility-entities";
import { DeletePostDTO } from "../DTOs";
import httpStatus from "http-status";

export const DeletePostPipe = async (DeletePostDTO: DeletePostDTO) => {
    const { postID } = DeletePostDTO;
    const post = await PostModel.findById(postID).lean();
    if (!post) return { status: httpStatus.NOT_FOUND, message: `Post not found`, data: null, hookData: null };
    await PostModel.findByIdAndDelete(post._id);
    return { status: httpStatus.NO_CONTENT, message: `Post deleted successfully`, data: null, hookData: null };
};