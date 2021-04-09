import { getUser, setUser, updateUserData } from '../data/local-storage-utils.js';

const test = QUnit.test;

test('gets the user from local storage', (expect) => {
    const expected = {
        pickles: 'yes',
        apples: 'no',
        bats: true,
        randObject: {}
    };
    
    const testObject = JSON.stringify(expected);

    localStorage.setItem('USER', testObject);

    const actual = getUser();

    expect.deepEqual(actual, expected);
});

test('sets the user to local storage', (expect) => {
    const expected = {
        pickles: 'yes',
        apples: 'no',
        bats: true,
        randObject: {}
    };
    
    setUser(expected);
    const temp = localStorage.getItem('USER');
    const actual = JSON.parse(temp);

    expect.deepEqual(actual, expected);
});

test('increments and changes the user object', (expect) => {
    const user = {
        hp: 35,
        gold: 100,
        name: 'Arvo',
        class: 'Warrior',
        completed: {},
    };

    const temp = JSON.stringify(user);
    localStorage.setItem('USER', temp);

    const choice = {
        hp: -35,
        gold: 15
    };

    const expected = {
        hp: 0,
        gold: 115,
        name: 'Arvo',
        class: 'Warrior',
        completed: { dragon: true }
    };
    
    updateUserData('dragon', choice);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, expected);
});
