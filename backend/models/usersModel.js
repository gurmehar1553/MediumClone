const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Posts'
        }
    ],
    followers:Number,
    following:Number
})

const Users = mongoose.model('Users', usersSchema);

module.exports = Users