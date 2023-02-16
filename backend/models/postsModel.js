const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    heading: String,
    content: String,
    author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
    likes: Number,
})

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts