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
export function updateUserData(questId, choice){
    const user = getUser();
    user.hp += choice.hp;
    user.gold += choice.gold;
    user.completed[questId] = true; //adds to the user objected created in app.js
    setUser(user);
}