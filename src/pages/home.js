import axios from "axios";
import { useEffect, useState } from "react";

function HOME() {
  let [allrecipes, setallrecipe] = useState([]);
  useEffect(() => {
    try {
      async function fetchdata() {
        const allrecipe = await axios.get("http://localhost:8000/");
        console.log(allrecipe.data);
        setallrecipe(allrecipe.data);
      }
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div id="main">
      {allrecipes.map((recipe) => (
        <div class="card">
          <img src={recipe.imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Recipe name : {recipe.name}</h5>
          </div>
          <ul class="list-group">
            <li class="list-group-item">Ingredients : {recipe.ingredients}</li>
            <li class="list-group-item">Instructions : {recipe.instructions}</li>
            <li class="list-group-item">Cooking time : {recipe.cookingTime} hrs</li>
          </ul>
        </div>
        
      ))}
    </div>
  );
}

export default HOME;
