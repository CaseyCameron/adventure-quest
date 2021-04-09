import { getUser, setUser } from '../data/local-storage-utils.js';

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