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
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quest/?id=${quest.id}`;
    mapSection.append(anchorTag);
}