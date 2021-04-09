const USER = 'USER';

export function getUser(){
    const user = localStorage.getItem(USER);
    if (!user) return {};
    return JSON.parse(user);
}

export function setUser(user){
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

//send a quest id from the URL (dragon, monster, treasure) and the user's
//choice to the quest
export function updateUserChoice(questId, choice){
    const user = getUser();
    //update local storage (user) with the data from choice
    user.hp += choice.hp;
    user.gold += choice.gold;
}