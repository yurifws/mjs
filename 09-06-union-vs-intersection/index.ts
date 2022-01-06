type Cpf = string | number

//Union
function findPerson(cpf: Cpf) {
  if(typeof cpf === 'string'){
    return cpf.toUpperCase()
  }
  return cpf.toFixed(2)
}

findPerson('123')
findPerson(123)


type Animal = { sex: 'male' | 'female' }
type Human = { hungry: boolean }

//Intersection
type Person = Animal & Human

function getPersonStatus(person: Person) {
  return person.hungry
}
