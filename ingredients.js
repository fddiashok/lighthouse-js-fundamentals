const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let index = 0;
while(index < ingredients.length){
  console.log(ingredients[index]);
  index ++ ;
}
for(index ; index < ingredients.length ; index ++){
  console.log(ingredients[index]);
}
for(let index = ingredients.length-1 ; index >= 0; index --){
  console.log(ingredients[index]);
}