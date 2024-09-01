const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const {router} = require('./routes/route.js')
const {Router} = require('./routes/recipe.route.js')
const {homeRouter} = require('./routes/homepage.js')
const {myRouter} = require('./routes/mtRecipe.js')


const port =  process.env.Process || 8000

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/Recipe').then(()=>{
    console.log("database is connect")
}).catch((error)=>{
    console.log(`error ${error}`)
})

app.use('/auth',router)
app.use('/create-recipe',Router)
app.use('/',homeRouter)
app.use('/myrecipe',myRouter)

app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log(`server is running on ${port}`)
    }

})