import quests from '../data/data.js';

const mapSection = document.querySelector('section');

for (let quest of quests){
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quest/?id=${quest.id}`;
    mapSection.append(anchorTag);
}