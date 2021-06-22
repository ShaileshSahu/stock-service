import Joi from 'joi';

const CoronaValidator = {
    list: Joi.object({
        page: Joi.string().allow('').allow(null),
        limit: Joi.string().allow('').allow(null),
        search: Joi.string().allow('').allow(null).optional(),
        sortType: Joi.string().allow(1, -1, null, '').optional(),
        sortName: Joi.string().allow('').allow(null),
        fromDate: Joi.string().allow('').allow(null).optional(),
        toDate: Joi.string().allow('').allow(null).optional(),
    })
};

export default CoronaValidator;