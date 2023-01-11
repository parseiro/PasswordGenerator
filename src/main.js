import {nanoid} from 'nanoid';
import copy from 'clipboard-copy';
import './main.css';

const passwordBtnEl = document.getElementById('passwordBtn');
const displayPasswordEl = document.getElementById('passwordEl');

passwordBtnEl.addEventListener('click', () => {
    const password = nanoid();
    displayPasswordEl.textContent = password;
    copy(password);
    alert('Copiado para a área de transferência!');
});
