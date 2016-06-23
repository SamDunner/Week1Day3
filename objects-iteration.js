for (var i = 0; i < 10; i++) {
  // iterating over an array
  console.log(someArray[i]);
}
//can't iterate objects with a for-loop (need a for...in loop)

var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}