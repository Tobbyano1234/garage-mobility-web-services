import { PostController } from '../controllers';
import { baseRouter, baseValidation } from '../../../garage-mobility-shared/api';
import postValidation from '../validations/index';

const { POST, GET, PUT, DELETE, router } = baseRouter();

POST('/', [baseValidation(postValidation.createPost), PostController.createPost]);
PUT('/:postID', [baseValidation(postValidation.updatePost), PostController.updatePost]);
GET('/:postID', [baseValidation(postValidation.getSinglePost), PostController.getSinglePostByID]);
GET('/', [PostController.getAllPosts]);
DELETE('/:postID', [baseValidation(postValidation.deletePost), PostController.deletePost]);

export default router;
