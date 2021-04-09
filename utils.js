import { getUser } from '../data/local-storage-utils.js';

export function findById(array, id){
    return array.find(item => item.id === id);
}

export function renderHeader(){
    const header = document.querySelector('header');
    const user = getUser();

    const profileDiv = document.createElement('div');
    profileDiv.textContent = `Name: ${user.name}, Class: ${user.class}, HP: ${user.hp}, GP: ${user.gold}`;
    header.appendChild(profileDiv);
}