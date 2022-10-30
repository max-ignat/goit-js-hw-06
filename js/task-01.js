const numOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numOfCategories.length);

numOfCategories.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
})