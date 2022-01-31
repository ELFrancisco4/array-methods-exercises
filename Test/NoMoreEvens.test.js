const fn = require('../Exercises/Array Filter/NoMoreEvens')

test('Returns a new array containing only odd numbers', () => {
    expect(fn([2,4,5,6,7,8,9])).toEqual([5,7,9])
})