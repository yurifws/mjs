//type Person = {
//  name: string
//  age: number
//}
interface Animal {
  sex: 'male' | 'female'
}

interface Human extends Animal {
  name: string
  age: number
}

// adiciona atributos
//interface Person {
//  sex: 'male' | 'female'
//}


const person: Human = {
  name: 'Lucas',
  age: 22,
  sex: 'male'

}