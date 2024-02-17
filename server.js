const express =  require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://test1234:test1234@cluster0.v9lpw.mongodb.net/user-express')
.then(() => {
    const app = express()
    app.use(express.json())
    app.use('/api', routes)
    app.listen(3000, () => console.log('connected to database successfully'))
})
.catch((error) => console.log(error) )