const btnCriarJogo = document.getElementById("btnCriarJogo");
const entrada = document.getElementById("entrada");
const btnEnviarPalpite = document.getElementById("btnEnviarPalpite");
const saida = document.getElementById("saida");
const palpites = document.getElementById("palpites");
const radioButtons = document.querySelectorAll('input[name="dificuldade"]');

let maxTentativas;
let numSecreto;
let tentativas;
let numerosDigitados = [];

btnCriarJogo.addEventListener('click', ajustaDificuldade);

function ajustaDificuldade() {
    let nivelSelecionado;

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            nivelSelecionado = radioButton.value;
            break;
        }
    }

    if (nivelSelecionado === "facil") {
        maxTentativas = 10;
    } else if (nivelSelecionado === "medio") {
        maxTentativas = 7;
    } else if (nivelSelecionado === "dificil") {
        maxTentativas = 5;
    }

    novoJogo();
    saida.innerText = "Jogo iniciado";
}

function novoJogo() {
    numerosDigitados = [];
    tentativas = 1;
    numSecreto = Math.floor(Math.random() * 100);
    console.log(numSecreto)
}

function avaliaPalpite() {
    if (entrada.value == numSecreto) {
        numerosDigitados.push(entrada.value);
        saida.innerText = `Parabéns você acertou o número secreto que é ${numSecreto} em ${tentativas} tentativas. \n os números digitados foram ${numerosDigitados}`;
    } else if (entrada.value < numSecreto) {
        numerosDigitados.push(entrada.value);
        saida.innerText = `Você errou, o número secreto é maior que ${entrada.value}.`;
        tentativas++;
    } else if (entrada.value > numSecreto) {
        numerosDigitados.push(entrada.value);
        saida.innerText = `Você errou, o número secreto é menor que ${entrada.value}.`;
        tentativas++;
    }
}

btnEnviarPalpite.addEventListener("click", function () {
    if (tentativas < maxTentativas) {
        avaliaPalpite();
    } else {
        saida.innerText = `Você já usou todas as tentativas. Inicie um novo jogo.`;
    }
});

