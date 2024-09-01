const RecipeModel = require("../models/recipe")

const recipecreate = async (req,res)=>{
    const {name , ingredients , instructions , imageUrl , cookingTime , recipeOwner} = req.body

    const  newRecipe = new RecipeModel({name , ingredients , instructions , imageUrl , cookingTime , recipeOwner})
    console.log(req.body.recipeOwner)
    await newRecipe.save()
    return res.json(newRecipe)

}


module.exports = {recipecreate}