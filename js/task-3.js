'use strict';

const input = document.querySelector('#name-input');
const button = document.querySelector('#name-output');

const handleInput = event => {
  button.textContent = event.currentTarget.value.trim() === '' ? 'Anonymous' : event.currentTarget.value;
}

input.addEventListener('input', handleInput);