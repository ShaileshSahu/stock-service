import Joi from 'joi';


const BlogValidatorSchema = {
    create: Joi.object({
        title: Joi.string().min(5).required(),
        description: Joi.string().required()
    }),

    detail: Joi.object({
        id: Joi.string().required(),
    }),

    updateStatus: Joi.object({
        isActive: Joi.string().valid('active', 'inactive', 'delete').required()
    }),

    updateBlog: Joi.object({
        title: Joi.string().min(5),
        description: Joi.string()
    }),
};

export default BlogValidatorSchema;