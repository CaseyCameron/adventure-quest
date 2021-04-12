import { setUser } from './data/local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = new FormData(form);
    //Get the input from user-name and user-class inputs
    const userName = userData.get('user-name');
    const userClass = userData.get('user-class');
    //const classImage = userData.get('class-image');

    const initUser = {
        hp: 35,
        gold: 0, 
        name: userName,
        class: userClass,
        //classImage: classImage.src,
        completed: {}
    };

    //set the initialized user into local storage
    setUser(initUser);
    //after submit send user to the map page
    window.location = './map/index.html';
});
