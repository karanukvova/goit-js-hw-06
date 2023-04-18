const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEL = document.getElementById("ingredients")
const newList = [...ingredients].map((ingredient) => {
  const liEL = document.createElement("Li")
  liEL.classList.add('item')
  liEL.textContent = ingredient
  return liEL
})
ulEL.append(...newList)