import { Request } from 'express';

import { BaseController } from "../../..//garage-mobility-shared/api";
import { PostModule } from '../../../garage-mobility-post/modules/post.module';
import { CreatePostDTO, DeletePostDTO, GetSinglePostDTO, UpdatePostDTO } from '../../../garage-mobility-post/DTOs';
import { toObjectId } from '../../../garage-mobility-shared/helpers/validateToObjectId';

export class PostController {
  static createPost = BaseController(async (request: Request) => {
    const CreatePostDTO = request.body as CreatePostDTO;
    const { status, message, data } = (await PostModule({ DTO: ["basic", CreatePostDTO], onSuccess: ()=>{}}))!;
    return { status, message, data };
  });
  
  static updatePost = BaseController(async (request: Request) => {
    const UpdatePostDTO = request.body as UpdatePostDTO;
    UpdatePostDTO.postID = toObjectId(request.params.postID);
    const { status, message, data } = (await PostModule({ DTO: ["update", UpdatePostDTO], onSuccess: ()=>{}}))!;
    return { status, message, data };
  });

  static getSinglePostByID = BaseController(async (request: Request) => {
    const GetSinglePostDTO = {} as GetSinglePostDTO;
    GetSinglePostDTO.postID = toObjectId(request.params.postID);
    const { status, message, data } = (await PostModule({ DTO: ["single", GetSinglePostDTO], onSuccess: ()=>{}}))!;
    return { status, message, data };
  });

  static getAllPosts = BaseController(async (request: Request) => {
    const { status, message, data } = (await PostModule({ DTO: ["all"], onSuccess: ()=>{}}))!;
    return { status, message, data };
  });

  static deletePost = BaseController(async (request: Request) => {
    const DeletePostDTO = {} as DeletePostDTO;
    DeletePostDTO.postID = toObjectId(request.params.postID);
    const { status, message, data } = (await PostModule({ DTO: ["delete", DeletePostDTO], onSuccess: ()=>{}}))!;
    return { status, message, data };
  });
}
