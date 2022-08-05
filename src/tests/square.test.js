const square = require('../methods/square');

describe('Sum', () => {
    test('sum, of 2', () => {
        expect(square(2)).toBe(4);
    });
});
