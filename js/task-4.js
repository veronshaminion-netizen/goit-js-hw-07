'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (event.currentTarget.email.value.trim() === '' || event.currentTarget.password.value.trim() === '') {
        alert(`All form fields must be filled in`);
        return;
    }
    
    const formData = new FormData(event.target);
  console.log(formData.get('email')); 
  console.log(formData.get('password'));

  form.reset();
});
