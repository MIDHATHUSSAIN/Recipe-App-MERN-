function FROMRECIPE({
  name,
  setname,
  ingredients,
  setingredients,
  instructions,
  setinstructions,
  imageUrl,
  setimageUrl,
  cookingTime,
  setcookingTime,
  onSubmit,
}) {
  return (
    <div>
      <div id="main">
      <form onSubmit={onSubmit} id='myform'>
        <h2>CREATE RECIPE</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Recipe Name</label>
          <input
            value={name}
            type="text"
            class="form-control"
            onChange={(e) => setname(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div><br/>
        <div class="form-group">
          <label for="exampleInputPassword1">Ingredients</label>
          <input
            value={ingredients}
            type="text"
            class="form-control"
            onChange={(e) => setingredients(e.target.value)}
            id="exampleInputPassword1"
          />
        </div><br/>
        <div class="form-group">
          <label for="exampleInputPassword">Instructions</label>
          <input
            value={instructions}
            type="text"
            class="form-control"
            onChange={(e) => setinstructions(e.target.value)}
            id="exampleInputPassword"
          />
        </div><br/>
        <div class="form-group">
          <label for="exampleInputPasswor">Image URL</label>
          <input
            value={imageUrl}
            type="text"
            class="form-control"
            onChange={(e) => setimageUrl(e.target.value)}
            id="exampleInputPasswor"
          />
        </div><br/>
        <div class="form-group">
          <label for="exampleInputPasswo">Cooking Time</label>
          <input
            value={cookingTime}
            type="number"
            class="form-control"
            onChange={(e) => setcookingTime(e.target.value)}
            id="exampleInputPasswo"
          />
        </div><br/>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      
    </div>
  );
}

export default FROMRECIPE;
