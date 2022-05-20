const router = require('express').Router();
const Post = require('../models/Post')

//post a blog
router.post('/postblog', async (req, res)=>{
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
    console.log("POST API Triggered")
    }catch(err){
        res.json(err)
    }

})

//get All Blogs
router.get('/getallblog', async (req, res)=>{
    const allPosts = await Post.find({}).sort({_id:-1})
    res.status(200).json(
        allPosts
    )
console.log("GET API Triggered")
})
module.exports = router;