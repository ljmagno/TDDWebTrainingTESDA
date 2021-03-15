let {mins, maxs} = require('../src/index');

let assert = require('assert');


describe ('find the min of the numbers', function(){
    it('examples', function(){
        let result = mins([-52, 56, 30, 29, -54, 0, -110]);
        assert.strictEqual(result, -110);
    })
    it('examples', function(){
        let result = mins([42, 54, 65, 87, 0]);
        assert.strictEqual(result, 0);
    })

    it('examples', function(){
        let result = maxs([4,6,2,1,9,63,-134,566]);
        assert.strictEqual(result, 566);
    })
})
