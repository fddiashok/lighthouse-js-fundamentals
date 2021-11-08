const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  for (let i = 0; i < recipes.length; i++) {
    let item = recipes[i]['ingredients'];
    if ((bakeryA.includes(item[0]) || bakeryA.includes(item[1]))
      && (bakeryB.includes(item[0]) || bakeryB.includes(item[1]))) {
      return recipes[i]['name'];

    }
  }

}

bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
bakeryB = ['milk', 'butter', 'cream cheese'];
recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));