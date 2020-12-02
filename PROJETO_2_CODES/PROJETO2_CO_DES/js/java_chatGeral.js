/* Salva nome da pessoa que vai conversar */
document.addEventListener('DOMContentLoaded', function() {

    chats = document.querySelectorAll('.row_chat');

    for (chat of chats) {

        chat.addEventListener('click', function(event) {

            // Obtém o elemento que foi clicado. Não podemos
            // usar a variável "a" diretamente aqui dentro,
            // pois o valor dela muda ao longo do loop.
            t = event.currentTarget;
            p = t.querySelector('p');
            localStorage.setItem('nome', p.innerHTML);
            console.log(localStorage.getItem('nome'));

        })

    }

})