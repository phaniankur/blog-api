const mongoose = require('mongoose')

const welcomeFormSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
        
    },
    lName:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Welcome Form", welcomeFormSchema)