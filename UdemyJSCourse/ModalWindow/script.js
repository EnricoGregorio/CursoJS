'use strict';

// As duas classes q vão aparecer/sumir, o botão de 'fechar' e os três botões com a mesma classe ('show-modal').
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Função para mostrar e função para esconder as classes 'modal' e 'overlay'.
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Evento de click nos botões da Janela Modal.
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// Evento que fechará a janela pelo Overlay e evento que fechará a janela pelo botão de fechar.
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

// Evento para fechar a janela com alguma tecla pressionada.
document.addEventListener('keydown', function (e) {
    // Quando a tecla 'Esc' for pressionada e quando a janela estiver aberta, feche-a.
    if (e.code === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
