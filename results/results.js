import { getUser } from '../data/local-storage-utils.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from './end-game-messages.js';
import { renderHeader } from '../utils.js';

renderHeader();

const user = getUser();

let goldStatus = ''; 

if (user.gold < 15){
    goldStatus = 'poor';
} else if (user.gold < 40){
    goldStatus = 'modest';
} else {
    goldStatus = 'rich';
}

let hpStatus = '';

if (user.hp <= 0){
    hpStatus = 'dead';
} else if (user.hp < 15){
    hpStatus = 'frail';
} else {
    hpStatus = 'healthy';
}

const section = document.querySelector('section');
section.style = 'font-weight: bolder;';
const button = document.createElement('button');
button.textContent = 'Play again?';

if (hpStatus !== 'dead'){
    section.textContent = `${hpMessages[hpStatus]}. ${aliveGoldMessages[goldStatus]}.`;
} else {
    section.textContent = `${hpMessages[hpStatus]}. ${deadGoldMessages[goldStatus]}.`;
}

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});

section.append(button);