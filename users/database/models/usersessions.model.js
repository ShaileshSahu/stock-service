import mongoose from 'mongoose';

const userSessionSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    expireAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    uuid: {
        type: String
    },
    
    updateAt: {
        type: Date,
        default: Date.now()
    },

    userAgent: {
        type: String
    },

    country: {
        type: String
    },

    ipAddress: {
        type: String
    }
});

userSessionSchema.index({_id:1, userId: 1});
export const UserSessions = mongoose.model('UserSessions', userSessionSchema)