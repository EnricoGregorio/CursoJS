'use strict';

// O número aleatoriamente gerado
let secretNumber = Math.floor(Math.random() * 20) + 1;

// A pontuação inicial
let score = 20;

// Valor inicial da maior pontuação.
let highscore = 0;

function VerifyNumber(number) {
    // Enquanto a pontuação ainda não zerou.
    if (score > 1) {

        // Quando o número inserido não está entre 1 e 20.
        if (!number || number > 20) {
            document.querySelector('.message').textContent = '⛔ Número Inválido!';
            score--;
            document.querySelector('.score').textContent = score;

            // Quando o número inserido é maior ao correto.
        } else if (number > secretNumber) {
            document.querySelector('.message').textContent = '📉 Muito Alto!';
            score--;
            document.querySelector('.score').textContent = score;

            // Quando o número inserido é menor ao correto.
        } else if (number < secretNumber) {
            document.querySelector('.message').textContent = '📈 Muito Baixo!';
            score--;
            document.querySelector('.score').textContent = score;

            // Quando o número inserido é o correto.
        } else {
            document.querySelector('.message').textContent = '🎉 Número Correto!';
            document.querySelector('body').style.backgroundColor = '#0e8f48';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';

            // Quando a pontuação atual é maior do que a mais alta já registrada.
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }

        // Quando a pontuação chega a zero.
    } else {
        document.querySelector('.message').textContent = '💥 Você Perdeu!';
        document.querySelector('.score').textContent = 0;
    }
}

// Evento de click no botão 'Verificar!'.
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    VerifyNumber(guess);
});

// Evento de click no botão 'Recomeçar!'.
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Comece a advinhar...';
});

// Mesmos eventos, mas agora acontecem quando a tecla Enter ou R são pressionadas.
document.addEventListener('keydown', (event) => {
    let code = event.code;
    if (code === 'Enter') {
        const guess = Number(document.querySelector('.guess').value);
        VerifyNumber(guess);
    } else if (code === 'KeyR') {
        score = 20;
        secretNumber = Math.floor(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Comece a advinhar...';
    }
}, false);