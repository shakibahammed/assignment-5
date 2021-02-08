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
console.log(foodItem)
        const foodImg =document.createElement("div");
        foodImg.className = 'itemName'

        const foodName =document.createElement("h3");
        foodImg.innerHTML = `
         <img src="${foodItem.strMealThumb}" >
         <h3>${foodItem.strMeal} </h3>

         <button>Detials</button>
        `
        foodImg.appendChild(foodName);
         FoodDetails.appendChild(foodImg);
   
    })
     

}
