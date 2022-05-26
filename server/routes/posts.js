const router = require('express').Router();
const jwt = require('jsonwebtoken')

const Post = require('../models/Post')
const User = require('../models/User')
const authToken = require('../config/middleware')

//get All Blogs
router.get('/getallblog', async (req, res)=>{
    try{
        const allPosts = await Post.find({}).sort({_id:-1})

    res.status(200).json(
        allPosts
    )
    } catch(err){
        res.json(err)
    }
})

//post a blog
router.post('/postblog',authToken, async (req, res)=>{
    try{

        const usertoken = req.headers.authorization;
        const token = usertoken.split(' ')[1]
        const decode = jwt.decode(token)

        const newPost = new Post({
            title: req.body.title,
            desc: req.body.desc,
            photo: req.body.photo,
            username: decode
        })
        newPost.save()

        res.status(200).json(
            {success: true,
            newPost
        }
        )
    }catch(err){
        res.json({...err, success: false})
    }

})

router.post('/editblog',authToken, async (req, res)=>{
    try{
        const { id, title, desc } = req.body;
        await Post.findByIdAndUpdate(id, {
            title, desc},
            {new: true}
   )
        res.status(200).json(
            {message: "post updated"}
        )

    }catch(err){
        res.json(err)
    }

})


//delete post
router.delete('/deleteblog/:id',authToken, async (req, res)=>{
    try{
        // const post = await Post.findbyId(req.params.id)
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Post deleted",
        success: true
    });

    } catch(err){
        res.status(500).json(err);
    }

})
module.exports = router;

