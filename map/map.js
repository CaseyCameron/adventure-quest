import quests from '../data/data.js';
import { renderHeader } from '../utils.js';
import { getUser, questsCompleteCheck } from '../data/local-storage-utils.js';

renderHeader();

const user = getUser();

if (user.hp <= 0 || questsCompleteCheck()){
    window.location = '../results';
}

const mapSection = document.querySelector('section');

for (let quest of quests){
    let elementTag = null;
    if (user.completed[quest.id]){
        elementTag = document.createElement('span');
        elementTag.textContent = 'Complete: ' + quest.title;
    } else {
        elementTag = document.createElement('a');
        elementTag.textContent = quest.title;
    }  
    
    elementTag.href = `../quest/?id=${quest.id}`;
    elementTag.classList.add('quest');
    elementTag.style = `top: ${quest.map.top}; left: ${quest.map.left};`;
    mapSection.append(elementTag);
}