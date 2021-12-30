var person1 = {
  name: 'Yuri',
  age: 27
}

var person2 = {
  name: 'Cecilia',
  age: 29
}

var person3 = {
  name: 'Matheus',
  age: 27
}

var list = [person1, person2, person3]

for (var person of list) {
  console.log(person)
}