// Aula 05 - 11/06/2021
// Microdesafio - Lista de compras brownie 

let produtos = ["nescau", "margarina", "farinha", "chocolate em pó", "ovos", "baunilha"];

console.log("O 'join' serve para configurar o Array em textos");
console.log(produtos.join(' '));

console.log("O 'pop' serve para excluir o último item do Array");
produtos.pop();
console.log(produtos);

console.log("O 'push' serve para adicionar um item no final do Array");
produtos.push("açúcar");
console.log(produtos);

console.log("O 'shift' serve para excluir o primeiro item do Array");
produtos.shift();
console.log(produtos);

console.log("O 'unshift' serve para adicionar um item no início do Array");
produtos.unshif("nozes");
console.log(produtos);