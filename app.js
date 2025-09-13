// dando boas vindas e criando variaveis
alert("Boas vindas ao jogo do numero secreto!");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute nao for igual ao numSec
while (chute != numeroSecreto) {
    chute = parseInt(prompt(`Escolha um número de 1 a ${numeroMaximo}`));

// se o chute for igual ao numero secreto
    if (chute == numeroSecreto) { 
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
//tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}`);
//} else {
//if (tentativas > 1) {
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//} else {
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com apenas ${tentativas} tentativa!`);
//}