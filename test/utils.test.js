// IMPORT MODULES under test here:
import { findById } from '../utils.js';

const test = QUnit.test;

test('finds the right item in an array', (expect) => {
    const array = [
        { id: 'dragon', type: 'encounter' },
        { id: 'monster', type: 'encounter' }
    ];
    const expected = { id: 'monster', type: 'encounter' };
    
    const actual = findById(array, 'monster');
    expect.deepEqual(actual, expected);
});
