'use strict';

const elements = document.querySelectorAll('li.item');
console.log(`Number of categories: ${elements.length}`);

const categories = document.querySelectorAll('h2');
categories.forEach(category => {
  const categoryName = category.textContent;
    console.log(`Category: ${ categoryName }`);
    const categoryItems = category.nextElementSibling.querySelectorAll('li');
    console.log(`Elements: ${ categoryItems.length }`);
});