import logic from './index.js';

let nameInput = document.getElementById('nameInput');
let button = document.getElementById('submitButton')

button.addEventListener('click', () =>  {
    playerName.textContent = nameInput.value;
})