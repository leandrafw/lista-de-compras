// Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

let numerosPrimos = [1, 2, 3, 5 , 7, 11, 13];
let numeros = [...numerosPrimos, 17, 19, 23, 29, 31];
console.log(numeros); 

// Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.

function maiorNumero(numero){
  return Math.min(...numero)
}
console.log(maiorNumero(numeros));

// Outro exemplo

let numerosAleatorios = [133, 110, 111,	131, 92,	140,	114,	122,	117, 120]
let numbers = [...numerosAleatorios,  82,	140,	113,	91, 79,	113,	128,	96,	113]
console.log(maiorNumero(numbers));