import { CreatePostDTO, DeletePostDTO, GetAllPostsDTO, GetSinglePostDTO, UpdatePostDTO, } from "./DTOs";


export type Post = {
  DTO:
  | ['basic', CreatePostDTO]
  | ['update', UpdatePostDTO]
  | ['single', GetSinglePostDTO]
  | ['all']
  | ['delete', DeletePostDTO];
  onSuccess: (...args: any[]) => any;
}

