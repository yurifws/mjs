

type Person = {
  name: string
  age: number
  contacts?: string[] // é igual a contacts: string[] | undefined
  isAlive: boolean
} 
const person: Person = {
  name: 'Lucas',
  age: 22,
  contacts: [
    'lucas@algaworks.com'
  ],
  isAlive: true
}


const person2: {
  name: string
  age: number
  contacts: string[]
  isAlive: boolean
} = {
  name: 'Lucas',
  age: 22,
  contacts: [
    'lucas@algaworks.com'
  ],
  isAlive: true
}

