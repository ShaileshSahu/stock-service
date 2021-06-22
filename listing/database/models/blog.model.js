import mongoose from 'mongoose';

 const blogSchema = mongoose.Schema({

    _id: {
        type: mongoose.ObjectId,
    },

    title: {
        type: String,
        required: true,
        minLength: 7
    },

    description:{
        type: String
    },

    isActive: {
        type: String,
        enum: ['active','inactive','deleted'],
        default: 'active'
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }
 });

 export const Blogs = mongoose.model('blogs', blogSchema);