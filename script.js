
const dificuldade = document.getElementById("dificuldade")
const btnCriarJogo = document.getElementById("btnCriarJogo")
btnCriarJogo.addEventListener('click', ajustaDificuldade());


let maxTentativas = 0;
let nivelSelecionado;

function ajustaDificuldade() {
    let nivelSelecionado = dificuldade;
    if (nivelSelecionado === "facil") {
        maxTentativas = 10;
    } else if (nivelSelecionado === "medio") {
        maxTentativas = 7;
    } else if (nivelSelecionado === "dificil") {
        maxTentativas = 5;
    }
}
if (nivelSelecionado === "Fácil") {
    maxTentativas = 10;
} else if (nivelSelecionado === "Médio") {
    maxTentativas = 7;
} else if (nivelSelecionado === "Difícil") {
    maxTentativas = 5;
}

if (maxTentativas > 0) {
    novoJogo();
} else {
    alert("Selecione um nível de dificuldade.");
}


let numSecreto;
let tentativas;

function novoJogo() {
    tentativas = 0;
    numSecreto = Math.floor(Math.random() * 100);
}

novoJogo();

let numerosDigitados = [];

const entrada = document.getElementById("entrada");
const btnEnviarPalpite = document.getElementById("btnEnviarPalpite");
const saida = document.getElementById("saida");
avaliaPalpite = () => {
    
    if (entrada.value == numSecreto) {
        numerosDigitados.push(entrada.value);
        saida.innerText = `Parabéns você acertou o numero secreto que é ${numSecreto} em ${tentativas} tentativas.`;
    } else if (entrada.value < numSecreto) {
        numerosDigitados.push(entrada.value);
        saida.innerText = `Você errou o numero secreto é maior que ${entrada.value}.`;
        tentativas++;
    }
    else if (entrada.value > numSecreto) {
        numerosDigitados.push(entrada.value);
        saida.innerText = `Você errou o numero secreto é menor que ${entrada.value}.`;
        tentativas++;
    }
}

btnEnviarPalpite.addEventListener("click", function () {
    avaliaPalpite();
});

let palpites = document.getElementById("palpites");
palpites = innerText = `Você digitou os seguintes números: ${numerosDigitados} em ${tentativas} tentativas.`;

