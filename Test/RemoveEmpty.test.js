const removeEmpty = require('../Exercises/Array Filter/RemoveEmpty')

test('Removes empty strings from input array and returns a new array', () => {
    expect(removeEmpty(['','', 'Movement', '', 'Striker'])).toEqual(['Movement','Striker'])
})