const express = require('express')
const  homeRouter  =  express.Router();
const RecipeModel = require("../models/recipe")

homeRouter.get('/',async(req,res)=>{
    try{
        const respond = await RecipeModel.find({})
        return res.json(respond)

    }catch(error){
        return res.json(error)
    }

})

module.exports = {homeRouter}