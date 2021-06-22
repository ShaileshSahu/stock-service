import TodoModel from '@database/models/todo.model';
import {responseMerge} from '@src/helpers';
import {CONSTANT} from '@src/constant';
import mongoose from 'mongoose';
class TodoController {

    constructor(){

    } // left empty 

    async  list({ fromDate, toDate, search, status, taskStatus}) {
        try {
                const query = { status: 'active' };

                if (fromDate && toDate) {
                    query.createdAt = {
                        $gt: fromDate,
                        $lt: toDate
                    };
                } else if (toDate) {
                    query.createdAt = {
                        $lt: toDate
                    };
                } else if (fromDate) {
                    query.createdAt = {
                        $gt: fromDate
                    };
                }
    
                if (search) {
                    const reg = new RegExp(search, 'i');
                    query.todo = {
                        $regex: reg
                    };
                }

                status && ( query.status = status );
                taskStatus && (query.taskStatus = taskStatus );
                const data = await TodoModel.find(query).sort({createdAt: -1 });
                return responseMerge(CONSTANT.SUCCESS.LIST, {data});

        } catch (err) {
            console.log('error during fetching the list of todos', err);
            return Promise.reject();
        }

    }


    async createTodo({todo, description, priority, startTime,endTime, docs}) {
        try {
            const todoObj = Object.assign({ _id: mongoose.Types.ObjectId()}, 
                todo  && {todo},
                description && {description},
                priority && {priority},
                startTime && {startTime},
                endTime && {endTime},
                docs && {docs}
            );
            await TodoModel.create(todoObj);
            return {};
        } catch (err){
            console.log('error during the create todos',err);
            return Promise.reject();
        }
    }


    async updateTodo({todo, description, priority, startTime,endTime, docs, status, taskStatus,id}) {
        try {
            const todoObj = Object.assign({}, 
                todo  && {todo},
                description && {description},
                priority && {priority},
                startTime && {startTime},
                endTime && {endTime},
                docs && {docs},
                taskStatus && {taskStatus},
                status && {status}
            );
            await TodoModel.update({_id:id}, todoObj);
            return {};
        } catch (err){
            console.log('error during the create todos',err);
            return Promise.reject();
        }
    }

}

const todoController = new TodoController();
export default todoController;