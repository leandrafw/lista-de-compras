function Pessoa(nome,medida,preferencia) {
  this.nome = nome;
  this.medida = medida;
  this.preferencia = preferencia;
  this.client = function(){
    return `Olá, me chamo ${this.nome}. Uso ${this.medida} e procuro uma blusa ${this.preferencia}.`;
}
}
module.exports = Pessoa;










/*let tamanho = (P, M, G) => {}
let cores = (branca, preta, roxa) => {}*/