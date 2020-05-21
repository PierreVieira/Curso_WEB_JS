// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //O objeto foi congelado

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
console.log(pessoa)