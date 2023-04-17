const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEL = document.getElementById("ingredients")
// const fragment = document.createDocumentFragment();
// for (const ingredient of ingredients) {
//   const liEL = document.createElement("LI")
//   liEL.classList.add('item')
//   liEL.textContent = ingredient
//   fragment.appendChild(liEL)
// }
// ulEL.appendChild(fragment)
ingredients.map((ingredient) => {
  const liEL = document.createElement("LI")
  liEL.classList.add('item')
  liEL.textContent = ingredient
  ulEL.append(liEL)
})