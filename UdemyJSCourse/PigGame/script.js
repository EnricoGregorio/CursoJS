'use strict';
// Os elementos necessários.
// Jogadores.
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
// Pontos máximos de cada um.
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
// Pontos atuais de cada um.
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');
// O dado.
const imgDice = document.querySelector('.dice');
// E os botões "Rolar dado", "Segurar" e "Novo Jogo", respectivamente.
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
// Variáveis para armazenar as pontuações máximas, o ponto atual, o player atual e se o jogo está rodando, respectivamente.
let scores, currentScore, activePlayer, playing;
// Função de inicialização.
function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
    currentP1.textContent = 0;
    currentP2.textContent = 0;
    imgDice.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
}
// Iniciar um novo jogo.
init();
// Função para zerar a pontuação atual e trocar de jogador.
function switchPlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}
// Gerar número entre 1 a 6, mostrar o dado certo e verificar se o número gerado é 1.
btnRollDice.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        imgDice.classList.remove('hidden');
        imgDice.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});
// Guardar a pontuação máxima no índex q corresponde ao jogador, mostrar essa mesma pontuação e verificar se o jogador atual venceu.
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            imgDice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});
// Começar um novo jogo.
btnNewGame.addEventListener('click', init);