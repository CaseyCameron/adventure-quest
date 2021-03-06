import { getUser } from './data/local-storage-utils.js';

export function findById(array, id){
    return array.find(item => item.id === id);
}

export function renderHeader(){
    const header = document.querySelector('header');
    const user = getUser();

    const title = document.createElement('h1');
    title.textContent = 'Adventure Quest';

    const classImage = document.createElement('img');
    classImage.src = `../assets/avatars/${user.class}.png`;
    classImage.classList.add('header-img');

    const profileDiv = document.createElement('div');
    profileDiv.classList.add('header-player-info');
    const className = capitalizeClass(user.class);
    profileDiv.textContent = `Name: ${user.name}, Class: ${className}, HP: ${user.hp}, GP: ${user.gold}`;
    header.append(title, classImage, profileDiv);
}

export function renderChoiceResult(hideClass, showClass){
    hideClass.style.display = 'none';
    showClass.style.display = 'flex';
}

function capitalizeClass(className){
    return className.charAt(0).toUpperCase() + className.slice(1);
}