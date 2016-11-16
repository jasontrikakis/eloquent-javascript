data = require('./ancestry-data');

ancestry = JSON.parse(data);

function average(array) {
  function plus(a, b) {
    return a + b;
  };
  return array.reduce(plus) / array.length;
};

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDiff = [];

ancestry.forEach(function(person) {
  if (byName[person.mother]) {
    ageDiff.push(Math.abs((byName[person.mother].born - person.born)));
  };
});

console.log(average(ageDiff));
