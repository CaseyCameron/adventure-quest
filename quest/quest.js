import { findById, renderHeader, renderChoiceResult } from '../utils.js';
import quests from '../data/data.js';
import { updateUserData } from '../data/local-storage-utils.js';

renderHeader();

const section = document.querySelector('section');
const content = document.querySelector('content');
const urlParams = new URLSearchParams(window.location.search);
const questId = urlParams.get('id');
const quest = findById(quests, questId); //find our quest in data.js 

const questTitle = document.createElement('h1');
const questImage = document.createElement('img');
const questDescription = document.createElement('p');

questTitle.textContent = quest.title;
questImage.src = `../assets/quests/${quest.image}`;
questDescription.textContent = quest.description;

const questForm = document.createElement('form');
for (let choice of quest.choices){ //populate a form, entry for each quest
    const label = document.createElement('label');
    const radioQuestChoice = document.createElement('input');
    radioQuestChoice.type = 'radio';
    radioQuestChoice.name = 'choice';
    radioQuestChoice.value = choice.id; //the choice id stored
    label.append(choice.description, radioQuestChoice); //the choice description printed out
    questForm.append(label);
}

const button = document.createElement('button');
button.textContent = 'Go';
questForm.append(button);

const questResult = document.createElement('result');

//update user data and return to map or results
questForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(questForm);  //grab the form data from questForm above
    const choiceId = formData.get('choice');  //grab the selected choice
    const userChoice = findById(quest.choices, choiceId); //store matching choice from quests

    updateUserData(questId, userChoice);
    renderChoiceResult(section, content, returnButton);
    questResult.style = 'font-weight: bolder;';
    questResult.textContent = userChoice.result;
});

const returnButton = document.createElement('button');
returnButton.textContent = 'Venture forth!';
returnButton.addEventListener('click', () => {
    window.location = '../map';
});

section.append(questTitle, questImage, questDescription, questForm);
content.append(questResult, returnButton);