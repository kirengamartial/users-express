const express = require('express')
const Users = require('./Models/users')
const router = express.Router()

router.get('/users', async(req, res) => {
    const data = await Users.find()
    res.send(data)
})

router.post('/users', async(req, res) => {
    const user = new Users({
        First_name: req.body.First_name,
        Last_name: req.body.Last_name,
        age: req.body.age,
    })
    await user.save()
    res.send(user)
})

router.get('/users/:id', async(req,res)=> {
  try {
    const user = await Users.findOne({_id: req.params.id})
    res.send(user)
  } catch (error) {
    res.status(404)
    res.send({ error: "User doesn't exist!" })
  }
})

router.patch('/users/:id', async(req, res ) => {
    try {
        const user = await Users.findOne({_id: req.params.id})

        if(req.body.First_name) {
            user.First_name = req.body.First_name
        }
    
        if(req.body.Last_name) {
            user.Last_name = req.body.Last_name
        }
    
        if(req.body.age) {
            user.age = req.body.age
        }
    
     await user.save()
    
     res.send(user)
    } catch (error) {
        res.status(404)
        res.send({ error: "User doesn't exist!" })
    }
})
router.delete('/users/:id', async(req, res) => {
    try {
    await Users.deleteOne({_id: req.params.id})
    res.status(204).send()
    
    } catch (error) {
        res.status(404)
        res.send({ error: "User doesn't exist!" })
    }
   
})

module.exports = router