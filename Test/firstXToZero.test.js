const { expect} = require('@jest/globals')
const firstXToZero = require('../Exercises/Array Map/firstXToZero')


test('Changes values with index less than input number to 0', () => {
    expect(firstXToZero([1,2,3,4,5], 2)).toStrictEqual([0,0,3,4,5])
})

