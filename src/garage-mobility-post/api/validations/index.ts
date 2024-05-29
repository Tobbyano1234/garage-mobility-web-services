import { Joi } from 'celebrate';

export default {
    createPost: {
        body: Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(),
            author: Joi.string().required(),
        })
    },
    updatePost: {
        body: Joi.object({
            title: Joi.string().optional(),
            content: Joi.string().optional()
        }),
        params: Joi.object({
            postID: Joi.string().required(),
        })
    },
    getSinglePost: {
        params: Joi.object({
            postID: Joi.string().required(),
        })
    },
    deletePost: {
        params: Joi.object({
            postID: Joi.string().required(),
        })
    }
}