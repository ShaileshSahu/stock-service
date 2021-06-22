import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({

    _id: {
        type: mongoose.ObjectId,
        default: mongoose.Types.ObjectId()
    },

    todo: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: false,
        trime: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    },
    docs: [{
        type: {
            type: String,
            enum: ['png', 'jpg','jpeg', 'pdf', 'doc', 'docx']
        },
        url: {
            type: String
        }
    }],

    startTime: {
        type: Number
    },

    endTime: {
        type: Number
    },

    priority: {
        type: String,
        enum: ['high','low','medium'],
        required: true
    },

    taskStatus: {
        type: String,
        enum: ['complete','pending', 'processing'],
        default: 'pending'
    },

    status: {
        type: String,
        enum: ['active','deleted', 'draft'],
        default: 'active'
    }
});

TodoSchema.index({_id: 1, todo: 1, status: 1});
const TodoModel = mongoose.model('Todo', TodoSchema);
export default TodoModel;