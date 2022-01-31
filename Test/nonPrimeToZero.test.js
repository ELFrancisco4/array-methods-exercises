const { expect } = require('@jest/globals')
const fn = require('../Exercises/Array Map/nonPrimeToZero')


test('Non prime numbers in input array are returned as 0 in a new array', () => {
    expect(fn([2,4,5,7,9,2])).toEqual([2,0,5,7,0,2])

})