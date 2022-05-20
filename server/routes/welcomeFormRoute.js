const router = require('express').Router();
const welcomeForm = require('../models/welcomeForm')

router.post('/welcomeForm', async (req, res)=>{
    const newForm = new welcomeForm({
        fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email
    })
    newForm.save()
    res.status(200).json(
        newForm
    )
console.log("Form API Triggered")
})
router.get('/welcomeForm', async (req, res)=>{

    const newForm = await welcomeForm.find({})
    console.log(res.data)
    res.status(200).json(newForm)
    // console.log('GET Triggered')
})
module.exports = router;