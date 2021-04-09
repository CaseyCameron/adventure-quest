import { findById } from '../utils.js';
import quests from '../data/data.js';
import { getUser, updateUserData } from '../data/local-storage-utils.js';

const section = document.querySelector('section');
const urlParams = new URLSearchParams(window.location.search);
const questId = urlParams.get('id');
quest = findById(quests, questId); //find our quest in data.js
console.log(quest);

const questImage = document.createElement('img');
const questTitle = document.createElement('h1');
questImage.src = `../assets/quests/$questImage.image}`;
questTitle.textContent = quest.title;

const questForm = document.createElement('form');
for (let choice of quest.choices){ //populate a form, entry for each quest
    const label = document.createElement('label');
    const radioQuestChoice = document.createElement('input');
    radioQuestChoice.type = 'radio';
    radioQuestChoice.name = 'choice';
    radioQuestChoice.value = choice.id; //the choice id stored
    label.append(choice.description, radio); //the choice description printed out
    questForm.append(label);
}


section.append(questTitle, questImage, questForm);