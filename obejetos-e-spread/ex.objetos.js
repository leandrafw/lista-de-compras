// Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).

//Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

function Restaurante(nome, cardápio){
    this.nome = nome;
    this.cardápio = cardápio;
    this.entrada = function(){
        let ultimoElemento = this.cardápio.pop()
        let opcao = this.cardápio.shift()
        if (opcao.toLowerCase() === 'lasanha à bolonhesa') {
            mensagem = 'com carne'
        } else {
            mensagem = 'sem carne'}
        return `Olá, seja bem vindo ao ${this.nome}. Entre as opções do cardápio ${mensagem} temos ${this.cardápio.join(', ')} e ${ultimoElemento}.`;
}
}

let restaurant1 = new Restaurante('Comida Boa', [ 'lasanha à bolonhesa', 'risotto de filé mingnon', 'batata recheada com bacon', 'macarrão à carbonara']);
let restaurant2 = new Restaurante('Comida Boa', ['lasanha de beringela', 'risotto de shitake', 'batata recheada com lentilha', 'macarrão com espinafre']);

console.log(restaurant1.entrada());
console.log(restaurant2.entrada());