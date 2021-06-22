import * as Joi from 'joi';
const TodoValidator = {
    create: Joi.object({
        todo: Joi.string().required(),
        description:Joi.string().optional().allow('').allow(null),
        priority: Joi.string().required(),
        startTime: Joi.number().optional(),
        endTime: Joi.number().optional(),
        docs: Joi.any().optional()
    }),

    update: Joi.object({
        id: Joi.string().required()
    })
};
export default TodoValidator;