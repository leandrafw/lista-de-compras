// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

let numeros = [5, 10, 15, 20, 30];
function divisor (array) {
    let soma = array.reduce((acumuldor, numeroatual) => acumuldor + numeroatual)
    let divisao = array.map(n => n / soma)
    console.log(soma);
    return divisao;
}
console.log(divisor(numeros));

// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let numeroseLetras = ['pão', 'oi', 'biscoito', 'bolo', 8, 'computador', 'fone de ouvido', 'celular'];
function retornar(array) {
    array.filter(itens => {
       let numero = array.filter(item => typeof item === 'number')
       if (itens.length > numero) {
           console.log(itens);
        }
    })
}
retornar(numeroseLetras);

// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

let alunos = [{ nome: 'Lucas', nota: 9 }, { nome: 'Leandra', nota: 10 }, { nome: 'Jubileu', nota: 6 }, { nome: 'Fernanda', nota: 3 }, { nome: 'Peter', nota: 8 }, { nome: 'Amanda', nota: 1 }]
function ordenarPorNome(array) {
    nomes = [];
    for (let i = 0; i < array.length; i++) {
        nomes.push(array[i].nome)
    }
    return nomes.sort();
}
console.log(ordenarPorNome(alunos));
function ordenarPorNota(array) {
    notas = [];
    for (let i = 0; i < array.length; i++) {
        notas.push(array[i].nota)
    }
    return notas.sort((a, b) => a - b);
}
console.log(ordenarPorNota(alunos));