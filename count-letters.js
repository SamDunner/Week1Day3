function countLetters(str) {
  var result = {
  };
  var str = str.split(" ").join("");
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
        if (result[char] == undefined) {
          result[char] = 1;
        } else {
          result[char] += 1;
        }
    }
  return result;
}
console.log(countLetters("lighthouse in the house"));
// have string
// pass string to function
// function has object where as encounters new letter, assigns new key for letter, subsequent letters are adding as objects to the letter key
// loops through to achieve this