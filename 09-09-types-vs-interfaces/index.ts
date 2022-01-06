type Sex = 'male' | 'female'

interface Animal {
  sex: Sex
  hungry: boolean
  age: number
}


interface Mammel extends Animal {
  weaned: boolean
}

const animal: Mammel = {
  hungry: false,
  weaned: true,
  sex: 'male',
  age: 6
}


type Person = Mammel & {
  name: string
}

const person: Person = {
  name: 'Lucas',
  hungry: false,
  weaned: true,
  sex: 'male',
  age: 6
}


interface Greet {
  (name: string): string
}
const greet: Greet = name => `Hello, ${name}`

type GreetMethod = (name: string) => string
const greetMethod: GreetMethod = name => `Hello, ${name}`

