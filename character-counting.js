function countCharacters(str) {
  var result = {
  };
  // var str = str.split(" ").join("");
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
        if (char == ' ') {
          //result[char];
        } else if (result[char] == undefined) {
          result[char] = [i];
        } else {
          result[char].push(i);
        }
    }
  return result;
}
console.log(countCharacters("lighthouse in the house"));