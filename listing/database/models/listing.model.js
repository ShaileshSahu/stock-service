import mongoose, {
    mongo
} from 'mongoose';

const listingSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        default: mongoose.Types.ObjectId()
    },

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    docs: [{
        url: {
            type: String
        },
        type: {
            type: String
        }
    }],

    userId: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export const ListingModel = mongoose.model('Listings', listingSchema);