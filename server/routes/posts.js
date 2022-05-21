const router = require('express').Router();
const Post = require('../models/Post')
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
    const newPost = new Post({
            title: req.body.title,
            desc: req.body.desc,
            photo: req.body.photo
        })
        newPost.save()
        res.status(200).json(
            newPost
        )
    }catch(err){
        res.json(err)
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
        res.status(200).json("Post deleted");

    } catch(err){
        res.status(500).json(err);
    }

})
module.exports = router;

