const fn = require('../Exercises/Array Map/RunOnEach')

test('Input function should take each item in input array as a parameter and make changes',  () => {
    expect(fn([9,8,999,9999], (e) => {
        return e % 9
    })).toEqual([0,8,0,0])
})