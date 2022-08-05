const Person = require('../methods/person');

describe('Person', () => {
    test('It is same person: ', () => {
        const tom = new Person('Tom', 23);
        expect(tom).toBe(tom);
    });
    test('different persons: ', () => {
        const tom = new Person('Tom', 23);
        const john = new Person('John', 24);
        expect(tom).not.toBe(john);
    });
    test('different persons with the same data', () => {
        const tom = new Person('Tom', 23);
        const tom2 = new Person('Tom', 23);
        expect(tom).not.toBe(tom2);
    });
});
