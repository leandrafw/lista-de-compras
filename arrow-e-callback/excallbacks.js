// Aula 07 - 17/06/2021
// microdesafio callback
let acaoCarro = (callback) => {
console.log("o carro " + callback);
}
let andar = () => {
    return "está andando"

}
let parar = () => {
    return "parou"

}
acaoCarro(andar());
acaoCarro(parar());