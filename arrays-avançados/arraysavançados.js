//1- Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numeroPar = [2,4,6,8,10,12,14,16];
let numeroImpar = numeroPar.map(
  function(n){
    return n + 1;
});
console.log(numeroImpar);

//2- Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Marcos', 'Maria', 'Manoela', 'Maria', 'Marcelo', 'Maria'];
let maria = nomes.filter(
    function(nome){
         if(nome === 'Maria') return nome;
});
console.log(maria);

//3- Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [1,2,6,8,9,14];
let devolve = numeros.reduce(
  (n1, n2) => {
    return n1 + ' - ' + n2;}
);
console.log(devolve);

//5- Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animal = ['raposa','onça','chinchila','baleia','borboleta'];

let frase = animal.forEach(
  animais => console.log("O animal é", animais)
);