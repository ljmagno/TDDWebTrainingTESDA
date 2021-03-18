function mins(list){
    return Math.min.apply(Math, list);
}
function maxs(list){
    return Math.max.apply(Math, list);
}
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld*2)-dadYearsOld);
}
function repeatStr (n, str) {
    return str.repeat(n)
}
function boolToWord(bool){
    if(bool){
      return "Yes";
    }else{
      return "No";
    }
}
function makeNegative(num) {
    if (num === 0) return 0;
    return -Math.abs(num);
}
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}
function hero(bullets, dragons){
    if(bullets / 2 >= dragons){
      return true;
    }else{
      return false;
    }
}
function solution(number){
    let res = 0;
    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        res += i;
      }
    }
    return res;
}
function replace(s){
    return s.replace(/[aeiou]/gi, "!")
}
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "");

}
module.exports = {
    mins,
    maxs,
    twiceAsOld,
    repeatStr,
    boolToWord,
    makeNegative,
    reverseWords,
    hero,
    solution,
    replace,
    disemvowel
};