import axios from "axios";
import { useEffect, useState } from "react";

function MYRECIPE() {
  let [recipebyId, setrecipeByid] = useState([]);
  let userId = window.localStorage.getItem("userId");
  useEffect(() => {
    const fetchrecipe = async () => {
      const myrecipe = await axios.get(
        `http://localhost:8000/myrecipe/${userId}`
      );
      console.log(myrecipe.data);
      setrecipeByid(myrecipe.data);
    };
    fetchrecipe();
  }, []);
  

  const deletehandeler = async(recipeId)=>{
    
    try{
     const respond = await axios.delete(`http://localhost:8000/myrecipe/${recipeId}`)
       console.log(respond.data)
    }catch(error){
     console.log(error)
    }
    
}
  return (
    <div id="main">
      {recipebyId.map((recipe) => (
        <div key={recipe._id} class="card">
          <img src={recipe.imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Recipe name : {recipe.name}</h5>
          </div>
          <ul class="list-group">
            <li class="list-group-item">Ingredients : {recipe.ingredients}</li>
            <li class="list-group-item">Instructions : {recipe.instructions}</li>
            <li class="list-group-item">Cooking time : {recipe.cookingTime} hrs</li>
          </ul>
          <button type="submit" class="btn btn-primary" onClick={()=>deletehandeler(recipe._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MYRECIPE;
