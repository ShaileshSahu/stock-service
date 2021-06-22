import mongoose, { Mongoose } from 'mongoose';
const userSchema = new mongoose.Schema({
 _id: {
    type: mongoose.ObjectId
 },

 email: {
     type: String,
     lowercase: true,
     required: true,
     trim: true,
 },

 password: {
     type: String,
     required: true,
     minLength: 8
 },

 userName: {
     type: String
 },

 createdAt: {
     type: Date,
     default: Date.now
 },

 updatedAt: {
     type: Date,
     default: Date.now
 },

 mobile_number: {
     type: Number
 },

 docs: {
     url: {
         type: String
     },
     type: {
         type: String,
         enum: ['jpg', 'png', 'pdf']
     }
 },

 isActive: {
     type: String,
     enum: ['Active','Inactive','Deleted'],
     default: 'Active'
 }
});

userSchema.index({_id:1, email:1, userName: 1 });
export const Users = mongoose.model('Users', userSchema);