## FIRST STEP
1) copy down images for
    - class icons
    - map
    - quest images
2) copy down data models for
    - monsters, dragon, treasure
    - the above contains the id name, title of quest, map link location data, bkg img, description, 3 choices with id names, descriptions, and results, and state chages (hp, gold)
    - Quests object (or array?)
3) create utils.js with FindById

## HTML
0) Keep in mind the Quest and Results page header should have
    - username, userclass, hp, gold
1) Sign up page
    - from with username and class selection
    - so a <form><label>Class:<input name="user-class" /></label>
    <label>Name: <input name="name" /></label>
    <button>Go Forth and Adventure!</button>
    - submit button
    - link it to app.js
2) Map
    - make an empty section to auto generate the map
    - link it to map.js, update styles
3) Quest
    - Make an empty section to display quest stuff. 
    - link it to quest.js, update styles
4) Results
    - Make an empty section to display generated results
    - link to results.js, update styles


## Sign up page (local-storage-utils)
Overview: put username and class into local storage
1) needs a const USER = 'USER' to create the local storage string
2) needs a getUser function
    - const user = localStorage.getitem(USER) grab the local storage item USER
    - if not true return empty object
    - if true JSON parse it
3) needs: setUser so it can grab the parsed object, string it, and set it in local storage
4) needs a updateUserGivenChoice(questId, choice)
    - getUser() get the object in local storage
    - increment user.hp
    - increment user.gold
    - user.complete[questId] = true; --this questId is from the URL
    - setUser(user) aka string it and set in local storage

## Sign up page part 2 (app.js)
1) get setUser
2) create a form with doc.qSelector('form')
3) add submit button with form.addEventListener('submit', (event) =>)
    {event.preventDefault()}
4) make a new form with const data = new FormData(form)
    - const name = data.get('name') --get the name from whatever is entered?
    - const userClass = data.get('user-class')
5) create a user object to store ={
    hp: 235,
    gold: 0,
    name: name,
    class: userClass,
    completed {}
}
6) setUser(user) (string it and send to local storage)
7) window.location = './map'
8) add a race to choose

## Quest page
1) needs:
    - findById
    - quests object
    - updateUserData
    - getUser
2) Grab the section element
3) Grab the URLSearchParam from window.location.search (search bar)
4) Grab the questId from the URLSearchParam (variable.get('id'))
    - this nabs the id after the ? in the url
5) Get the quests object via findById(quests, questId)
6) Create some more HTML elements (image var, h2 var for title)
    - assign the img.sr = `../assets/quests/${quest.image var}` 
    - set the header textContent to the quest's title
7) Create a from element and generate the form
    - const form = document.createEle('form')
    - for loop through the quest object for (let choice of quest.choices)
    - create a const label doc.createEle('label') to house the form
    - looping through gets the 3 choices inside of the quest object so we can generate the html and more
    - make radio inputs for each choice
    const radio = doc.createEle('input')
    radio.type = 'radio'
    radio.name = 'choice'
    radio.value = choice.id (I believe this is the id name of each avail choice, like negotiate, fight, run))
    - label.append(choice.description, radio) what's this?
    - form.append(label)
8) create a button --- button = doc.createEle('button')
    -assign the button textContent to submit
    -append the button to the form
    -addEventListener('submit', (event) => { event.preventDefault()}) to stop archaic behavior
    - Generate the form with const formData = new FormData(form)
    - grab the choiceId that was selected 
        - const choiceId = formData.get('choice')
    - Correlate the user choice with the choice data in the object
         - const choice = findById(quest.choices, choiceId) passes the choice object inside of Quest object, sends the choice the user selected
    - updateUserGivenChoice(questId, choice) Updates the states in local storage like user hp, gold, quest completion bool
    - send the user an alert but eventually a description of what happens. Alert = alert(JSON.stringify(getUser(), true, 2)); //some magic at the end there
    - redirect user to map with window.location = '../map'
9) append this stuff to the html section
    - section.append(h2, image, form)
10) render the header

## Quest Page 2
1) Setup the generated HTML so it can be hidden with a function on button click
    - hide title, img, description, radio, Go button
    - need to link it to css
2) Setup a new button that is hidden at start but is revealed on button click
    - display questResult.textContent.
    - display a new button that returns to map
    - need to link them to css
3) make the hide stuff function in utils.js

## Maps page
1) import quests
2) get access to the section to house the map const section = doc.qSelector('section')
3) for loop that for each quest in quests
    - const anchorTag = document.createEl('a') (#anchors)
    - anchorTag.textContent = quest.title (how is it getting the title? It doesn't live in quests it lives in the monster, dragon, and treasure object -- quests stores those objects)
    - anchorTag.href = `../quest/?=${quest.id}`  this takes the quest.id and sticks it in the url
    - append these links to the page with section.append(anchorTag)
4) onLoad check for questsCompleteCheck and player is alive
    - get the user
    - if user.hp <= 0 OR questsCompleteCheck is true
        - redirect to results
5) render the header

## Results page
1) render the header
2) get the user
3) if user.gold < 15 goldStatus is poor
    - under 40 goldStatus is modest
    - over 40 goldStatus is rich
4) if user.health is <=0 user is dead
    - under 15 hp user is frail
    - over 35 hp user is healthy
5) get the section element (should be empty)
6) if user is alive
    - use `${aliveGoldMessages[goldStatus]}. ${hpMessages[hpStatus]}`
    -else use  `${deadGoldMessages[goldStatus]}. ${hpMessages[hpStatus]}`
    -set the section.textContent to this
7) add a play again button
    - create a button
    - add an event listener
    - clear localStorage
    - redirect to '../'




## Local storage utils
1) questsCompleteCheck
    - getUser out of storage so we can check quests
    - for quest of quests
        - if the user has not completed the quests return false
        - use the quest.id under the completed key of the user object
    - otherwise return true