import {error} from '@src/helpers';
import { CONSTANT } from '@src/constant/main.constant';
export const validator = (schema, property) => {
    return (async (req,res,next) => {
        try {
            const body = req[property];
            if (!body) next();
            const result = schema.validate(body);
            console.log('---- result of validation', result);
            if(result.error == null) next();
            else {
                const { details } = result.error; 
                const message = details.map(i => i.message).join(',');
                const errorPayload = {...CONSTANT.ERROR.VALIDATION_ERROR,...{data:message} };
                return error(errorPayload, res);
            }    
        } catch (error) {
            console.log('--- error are printing ---', error);
            return error({},res);
        }
    });
}

