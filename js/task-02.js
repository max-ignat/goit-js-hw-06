const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');


const createIngredient = ingredient => {
const newEl = document.createElement('li');
newEl.textContent = ingredient;
newEl.classList.add('item');
newEl.classList.add('item');
return newEl;
}

const ingredientList = ingredients.map(ingredient => createIngredient(ingredient));


ingredientsEl.append(...ingredientList);