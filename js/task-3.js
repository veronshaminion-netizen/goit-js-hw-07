'use strict';

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  const value = input.value.trim();
  if (value) {
    const listItem = document.createElement('li');
    listItem.textContent = value;
    list.appendChild(listItem);
    input.value = '';
  }
});