let {mins, maxs, twiceAsOld, repeatStr, boolToWord, makeNegative, reverseWords, hero, solution, replace, disemvowel} = require('../src/index');
let assert = require('assert');

//FINDING THE MAX AND MIN OF THE NUMBERS
// describe ('find the min and max of the numbers', function(){
//     it('examples', function(){
//         let result = mins([-52, 56, 30, 29, -54, 0, -110]);
//         assert.strictEqual(result, -110);
//     })
//     it('examples', function(){
//         let result = mins([42, 54, 65, 87, 0]);
//         assert.strictEqual(result, 0);
//     })

//     it('examples', function(){
//         let result = maxs([4,6,2,1,9,63,-134,566]);
//         assert.strictEqual(result, 566);
//     })
// })

//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// describe ('calculate the age of the father and son', function(){
//     it('examples', function(){
//         let result = twiceAsOld(36,7);
//         assert.strictEqual(result, 22);
//     })
//     it('examples', function(){
//         let result = twiceAsOld(55,30);
//         assert.strictEqual(result, 5);
//     })
// })

//should return string with the given exact number
// describe ('repeat the string by the exact given number', function(){
//     it('basic test should return 3 hashes', function(){
//         let result = repeatStr(3, "*")
//         assert.strictEqual(result, "***")
//     })
//     it('basic test number 2 should return ha with space', function(){
//         let result = repeatStr(2, "ha ")
//         assert.strictEqual(result, "ha ha ")
//     })
// })

//should retutn string yes/no
// describe ('return the boolean to a string yes/no ', function(){
//     it('should return yes', function(){
//         let result = boolToWord((true))
//         assert.strictEqual(result, "Yes")
//     })
//     it('should return no', function(){
//         let result = boolToWord((false))
//         assert.strictEqual(result, "No")
//     })
// })

//return the number to number 
// describe ('return the number to negative if negative should retutn negative', function(){
//     it('should negative', function(){
//         let result = makeNegative(42)
//         assert.strictEqual(result, -42)
//     })
//     it('should return negative given a negative number', function(){
//         let result = makeNegative(-9)
//         assert.strictEqual(result, -9)
//     })
// })

//should return the given string to reversed
// describe ('return the string given to reversed word', function(){
//     it('should return reveresed word', function(){
//         let result = reverseWords("hello world!")
//         assert.strictEqual(result, "world! hello")
//     })
//     it('should return reveresed word', function(){
//         let result = reverseWords("yoda doesn't speak like this")
//         assert.strictEqual(result, "this like speak doesn't yoda")
//     })
//     it('should return one word only', function(){
//         let result = reverseWords("foobar")
//         assert.strictEqual(result, "foobar")
//     })
// })

//if even return true, if odd return false
// describe ('if even return tru, if odd return false', function(){
//     it('should return true', function(){
//         let result = hero(10, 5)
//         assert.strictEqual(result, true)
//     })
//     it('should return false', function(){
//         let result = hero(0, 1)
//         assert.strictEqual(result, false)
//     })
//     it('should return true', function(){
//         let result = hero(1500, 751)
//         assert.strictEqual(result, false)
//     })
// })

//mutiples of 3 and 5
// describe ('mutiples of 3 and 5', function(){
//     it('basic test', function(){
//         let result = solution(10, 23)
//         assert.strictEqual(result, 23)
//     })
// })

//return ! if the letters are vowel
// describe ('return ! if the letters are vowel', function(){
//     it('should return one !', function(){
//         let result = replace("Hi!")
//         assert.strictEqual(result, "H!!")
//     })
//     it('should return five !', function(){
//         let result = replace("aeiou")
//         assert.strictEqual(result, "!!!!!")
//     })
//     it('should return two !', function(){
//         let result = replace("ABCDE")
//         assert.strictEqual(result, "!BCD!")
//     })
// })

//function that takes a string and return a new string with all vowels removed.
describe ('function that takes a string and return a new string with all vowels removed.', function(){
    it('basic test', function(){
        let result = disemvowel("This website is for losers LOL!")
        assert.strictEqual(result, "Ths wbst s fr lsrs LL!")
    })
})