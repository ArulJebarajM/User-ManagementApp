const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
}, {
      timestamps: true 
});

const User = mongoose.model('User', userSchema);
module.exports = User;

             
    