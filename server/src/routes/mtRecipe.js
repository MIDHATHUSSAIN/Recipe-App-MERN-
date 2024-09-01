const express = require('express')
const  myRouter  =  express.Router();
const RecipeModel = require("../models/recipe")

myRouter.get('/:id',async(req,res)=>{
    try{
       
        const userId = req.params.id
        const findrecipe = await RecipeModel.find({recipeOwner:userId})
        return res.json(findrecipe)

    }catch(error){
        return res.json(error)
    }

})

myRouter.patch('/:id',async(req,res)=>{
    try{
        const recipeId = req.params.id
        const updatedREcepie = req.body
        const abc = await RecipeModel.findByIdAndUpdate(recipeId,updatedREcepie)
        console.log(abc)
        return res.json(abc)
    }catch(error){
        console.log(error)
    }
})

myRouter.delete('/:id',async(req,res)=>{
    try{
        const recipeId = req.params.id
        await RecipeModel.findByIdAndDelete(recipeId)
        return res.json({message: "recipe delete"})

    }catch(error){
        console.log(error)
    }
})

module.exports = {myRouter};