import * as express from 'express';
const router = express.Router();
import {error,success, validator} from '@src/helpers';
import {Validator, CONSTANT } from '@src/constant';
import TodoController from './todo.controller';
import TodoValidator from './todo.validator';


router.get('/', validator(Validator.list, CONSTANT. REQ_TYPE.QUERY), async (req,res) => {
    try {
        const { search, fromDate,toDate, status, taskStatus, } = req.query;
        const result = await TodoController.list({ search, fromDate, toDate, status, taskStatus });
        return success(result,res);
    } catch(er){
        console.log('error in to the system', er);
        return error(err,res);
    }


});

router.post('/', validator(TodoValidator.create, CONSTANT.REQ_TYPE.BODY), async (req,res) => {
    try {
        const {todo, description, priority, startTime,endTime, docs} = req.body;
        const result = await TodoController.createTodo({todo, description, priority, startTime, endTime,docs});
        return success(result,res);
    } catch(err){
        return error(err, res);
    }
});

router.put('/:id', validator(TodoValidator.update, CONSTANT.REQ_TYPE.PARAMS), async (req,res)=> {
    try {
        const {todo, description, priority, startTime, endTime, status, taskStatus,docs } = req.body;
        const result = TodoController.updateTodo({todo, description, priority, startTime, endTime, status, taskStatus, docs, id: req.params.id});
        return success(result, res);
    } catch (err) {
        return error(err,res);
    }

});

export default router;