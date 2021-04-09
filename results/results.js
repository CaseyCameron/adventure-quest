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

if (hpStatus !== 'dead'){
    section.textContent = `${aliveGoldMessages[goldStatus]}. ${hpMessages[hpStatus]}`;
} else {
    section.textContent = `${deadGoldMessages[goldStatus]}. ${hpMessages[hpStatus]}`;
}