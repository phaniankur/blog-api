const router = require('express').Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

//Register
router.post('/register', async (req, res) =>{
    try{

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save()
        res.status(200).json(user)
        console.log(res.json(user))
    } catch(err){
        res.status(500).json
    }
})

//Login
router.post("/login", async (req, res) => {
    try {
      const username = req.body.username
      const user = await User.findOne({ username });
      !user && res.status(400).json("Invalid username!");

      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Invalid password!");

      const { password, ...others } = user._doc;

      const accessToken= jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)

     return res.status(200).json({...others, token: accessToken});
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router