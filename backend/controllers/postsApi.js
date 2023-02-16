const postsRouter = require('express').Router()
const Posts = require('../models/postsModel');
const Users=require('../models/usersModel');


postsRouter.get('/',async (req, res) => {
    const post = await Posts.find();
    res.json({post})

})
postsRouter.get('/:id',async (req, res) => {
    const {id} = req.params

    const post = await Posts.findById(id);
    res.json({post})

})
postsRouter.get('/:author',async (req, res) => {
    const {author} = req.params

    const post = await Posts.find({author});
    res.json({post})

})


postsRouter.post('/compose',async (req, res) => {

    const author = req.body.author
    const authorID = await Users.findById(author)
    const newPost = await new Posts({...req.body,author:authorID._id, likes:0})
    await newPost.save()

    authorID.posts.push(newPost._id)
    await authorID.save()
    res.json({newPost})

})
postsRouter.post('/like/:id',async (req, res) => {

    const {id} = req.params.id
    const reqPost = await Posts.findById(id)
    const newPost = {...reqPost, likes: reqPost.likes+1}
    await newPost.save()
    res.json({newPost})

})

module.exports = postsRouter