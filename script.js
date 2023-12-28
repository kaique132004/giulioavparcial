//Kaique Cristiano Barbosa | RGM: 5933123501

// Definição das variáveis
let maxTentativas = 0;
let tentativas = 1;
let numeroSecreto;
let numerosDigitados = [];

// Elementos do DOM
const CriarJogo = document.getElementById('btnCriarJogo');
const dificuldade = document.getElementsByName('dificuldade');
const envPalpite = document.getElementById('btnEnviarPalpite');
const saida = document.getElementById('saida');
const entrada = document.getElementById('entrada');
const palpites = document.getElementById('palpites');
const blocoInicial = document.getElementById('blocoInicial');
const blocoJogo = document.getElementById('blocoJogo');

function ocultarBloco(bloco) {
    bloco.style.display = 'none';
}

function mostrarBloco(bloco) {
    bloco.style.display = 'block';
}

function ajustarDificuldade() {
    ocultarBloco(blocoJogo);
    let dificuldade_level;
    for (let i = 0; i < dificuldade.length; i++) {
        if (dificuldade[i].checked) {
            dificuldade_level = dificuldade[i].value;
            break;
        }
    }
    if (dificuldade_level === 'facil') {
        maxTentativas = 10;
    } else if (dificuldade_level === 'medio') {
        maxTentativas = 7;
    } else if (dificuldade_level === 'dificil') {
        maxTentativas = 5;
    }
}

function novoJogo() {
    ajustarDificuldade();
    if (maxTentativas > 0) {
        tentativas = 0;
        numeroSecreto = Math.floor(Math.random() * 100);
        saida.innerText = 'Jogo Iniciado';
        mostrarBloco(blocoJogo);
        ocultarBloco(blocoInicial);
    } else {
        alert('Selecione uma dificuldade');
    }
}

function avaliaPalpite() {
    if (tentativas < maxTentativas) {
        if (entrada.value < numeroSecreto) {
            saida.innerText = 'O número secreto é maior.';
        } else if (entrada.value > numeroSecreto) {
            saida.innerText = 'O número secreto é menor';
        } else if (entrada.value == numeroSecreto) {
            saida.innerText = `Parabéns, você acertou o número secreto que é ${numeroSecreto}, em ${tentativas} tentativas`;
            envPalpite.innerText = 'Reiniciar';
            envPalpite.removeEventListener('click', avaliaPalpite);
            envPalpite.addEventListener('click', reiniciar);
        }
        tentativas++;
        numerosDigitados.push(entrada.value);
    } else {
        saida.innerText = `Infelizmente você não acertou o número secreto que era ${numeroSecreto}.`;
        envPalpite.innerText = 'Reiniciar';
        envPalpite.removeEventListener('click', avaliaPalpite);
        envPalpite.addEventListener('click', reiniciar);
    }
    palpites.innerText = `Palpites: ${numerosDigitados}, tentativas: ${tentativas}`;
}

function reiniciar() {
    location.reload();
}

CriarJogo.addEventListener('click', novoJogo);
envPalpite.addEventListener('click', avaliaPalpite);
