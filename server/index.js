const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const welFormRoute = require('./routes/welcomeFormRoute')
const PORT = 5000
//https://www.youtube.com/watch?v=OML9f6LXUUs&list=PLFkpmOr2MwftIV51JuTOdbQprTJcJsf5q&index=28&t=2994s
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL,
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("db connected"))
.catch(err=> console.log(err))


app.use('/api/auth', authRoute);
app.use('/api/', postRoute, welFormRoute);
// app.use('/api/', welFormRoute);

app.use("/new", (req, res) =>{
    console.log("new url route")
})
app.listen(PORT, ()=>{
    console.log('Backend Running... on PORT', PORT)
})