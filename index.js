// Add answers here
function nameOfCity(NewYork, newark, London) {}
// 2:
function isDivisible(number) {
  return number % 100 === 0;
}
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

// 3:
let weather = "isRaining";
console.log(
  weather == "isRaining"
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home"
);
// ------------------------------------------------------
// 4:

// 5:

// ------------------------------------------------------

// 6:
function powerOf() {}

console.log(Math.pow(3, 3));
console.log(Math.pow(4, 4));

// 7:
function vowelCount(str1) {
  let vowel_list = "aeiouAEIOU";
  let vcount = 0;

  for (let i = 0; i < str1.length; i++) {
    if (vowel_list.indexOf(str1[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));

// ----------------------------------------------------
// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
