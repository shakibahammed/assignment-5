// search Button Part 
const buttonClick = ()=>{
    const search_text =document.getElementById("searchFild").value;
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_text}`
    fetch (url)
    .then (res =>res.json())
    .then (data => mealDisplay(data.meals))
}
  
const mealDisplay = foodItems =>{
    const foodFild =document.getElementById("FoodDetails");
    foodItems.forEach( foodItem => {

        const foodImg =document.createElement("div");
        foodImg.className = 'itemName'

        const foodName =document.createElement("h3");
        foodImg.innerHTML = `
         <img onclick="ingredientPart(${foodItem.idMeal}) " src="${foodItem.strMealThumb}" >
         <h3>${foodItem.strMeal} </h3>

        `
        foodImg.appendChild(foodName);
         FoodDetails.appendChild(foodImg);
   
    })

   
}

// ingredientPart solving
const ingredientPart =(id) => {
const ingredientApi =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
fetch(ingredientApi)
.then (res => res.json())
.then (data => { 
    const meal = data.meals[0];

    document.getElementById("ingredientPart").innerHTML=  `
    <img class="show-image" src="${meal.strMealThumb}" >
    <h3>${meal.strMeal} </h3>
    <h4> ${meal.strIngredient1}</h4>
    <h4> ${meal.strIngredient2}</h4>
    <h4> ${meal.strIngredient3}</h4>
    <h4> ${meal.strIngredient4}</h4>
    <h4> ${meal.strIngredient5}</h4>
    <h4> ${meal.strIngredient6}</h4>
    <h4> ${meal.strIngredient7}</h4>
    <h4> ${meal.strIngredient8}</h4>
    <h4> ${meal.strIngredient9}</h4>
    `
})

}   

