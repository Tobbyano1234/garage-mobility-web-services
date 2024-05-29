import { PostModel } from "../../garage-mobility-entities";
import { GetAllPostsDTO, GetSinglePostDTO } from "../DTOs";
import httpStatus from "http-status";

export const GetSinglePostByIDPipe = async (GetSinglePostDTO: GetSinglePostDTO) => {
    const { postID } = GetSinglePostDTO;
    const blogExist = await PostModel.findById(postID).lean();
    if (!blogExist) return { status: httpStatus.NOT_FOUND, message: `Post not found`, data: null, hookData: null };
    return { status: httpStatus.OK, message: `Post fetched successfully`, data: blogExist, hookData: blogExist };
};

export const GetAllPostsPipe = async () => {
    const blogs = await PostModel.find().lean();
    const message = blogs.length === 0 ? `No post yet` : `Posts fetched successfully`;
    return { status: httpStatus.OK, message, data: blogs, hookData: blogs };
};

export const GetAllPostsByAuthorPipe = async (GetAllPostsDTO: GetAllPostsDTO) => {
    const { author } = GetAllPostsDTO;
    const blogs = await PostModel.find({ author }).lean();
    const message = blogs.length === 0 ? `No post yet` : `Posts fetched successfully`;
    return { status: httpStatus.OK, message, data: blogs, hookData: blogs };
};