const ul = document.getElementById("categories");
const categories = ul.children;
console.log(`Number of categories: ${categories.length}`);
const name_Cat = document.querySelectorAll("h2");
name_Cat.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  const ul_cat = element.nextElementSibling;
  console.log(`Elements: ${ul_cat.children.length}`);
});
