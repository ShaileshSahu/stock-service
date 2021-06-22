import mongoose from 'mongoose';

const coronaSchema = mongoose.Schema({

    _id: {
        type: mongoose.ObjectId,
    },

    location: {
        type: String
    },


    new_cases: {
        type: Number,
        default: 0
    },

    new_deaths: {
        type: Number,
        default: 0
    },

    total_cases: {
        type: Number,
        default: 0
    },

    weekly_cases: {
        type: Number,
        default: 0
    },


    weekly_death: {
        type: Number,
        default: 0
    },

    biweekly_cases: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    date: {
        type: Date
    }
});
coronaSchema.index({
    id: 1,
    "$**": "text"
});
export const Corona = mongoose.model('coronas', coronaSchema);