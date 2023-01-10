import {nanoid} from 'nanoid';
import './main.css';

const passwordBtnEl = document.getElementById('passwordBtn');
const displayPasswordEl = document.getElementById('passwordEl');

passwordBtnEl.addEventListener('click', () => {
    displayPasswordEl.textContent = nanoid();
});
