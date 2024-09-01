import axios from "axios";
import FROMRECIPE from "./recipeForm";
import { useState } from "react";

function SAVEFORM (){
    let [name,setname] = useState("")
    let [ingredients,setingredients] = useState("")
    let [instructions,setinstructions] = useState("")
    let [imageUrl,setimageUrl] = useState("")
    let [cookingTime ,setcookingTime] = useState(0)
    let recipeOwner = window.localStorage.getItem("userId");
   
    async function onSubmit (e){
        e.preventDefault()
        try{
            console.log(name,ingredients,instructions,imageUrl,cookingTime)
         await axios.post('http://localhost:8000/create-recipe',{name,ingredients,instructions,imageUrl,cookingTime,recipeOwner})
         setname("")
         setingredients("")
         setinstructions("")
         setimageUrl("")
         setcookingTime(0)
          
        }catch(error){
            console.log(error)
        }
    
    }
    return(
        <div>
           <FROMRECIPE
           name = {name} 
           setname={setname}
           ingredients = {ingredients}
           setingredients={setingredients}
           instructions = {instructions}
           setinstructions={setinstructions}
           imageUrl = {imageUrl}
           setimageUrl={setimageUrl}
           cookingTime = {cookingTime}
           setcookingTime={setcookingTime}
           onSubmit= {onSubmit}
           ></FROMRECIPE>
        </div>
    )
}

export default SAVEFORM;