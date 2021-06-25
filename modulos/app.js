const Pessoa = require('./loja/loja');

let busca1 = new Pessoa('Mago', 'M', 'preta');
let busca2 = new Pessoa('Letícia', 'P', 'branca');
let busca3 = new Pessoa('Sasha', 'P', 'dourada');

console.log(busca1.client());
console.log(busca2.client());
console.log(busca3.client());