//Chat Específico
document.addEventListener('DOMContentLoaded', function() {

    send = document.querySelector('.send');

    show = document.querySelectorAll('.show');

    var i, i=0;

    function resposta (i){
        if (i==0){
            show[1].style.display = 'flex';
            show[2].style.display = 'flex';
        }
        else if (i==3){
            show[4].style.display = 'flex';
            show[5].style.display = 'flex';
        }
    }

    send.addEventListener('click', function(event) {
        console.log(i);
        show[i].style.display = 'flex';
        resposta(i)
        i = i+3;
    })

})

document.addEventListener('DOMContentLoaded', function() {
    //console.log(nome)
    console.log(localStorage.getItem('nome'))
    chat_names = document.querySelectorAll('.chat_name')
    for(i of chat_names){
        i.innerHTML = localStorage.getItem('nome')
}
})



//Chat Geral
document.addEventListener('DOMContentLoaded', function() {
    //console.log(nome)
    console.log(localStorage.getItem('nome'))
    nome_reuniao = document.querySelectorAll('.nome_reuniao')
    nome_reuniao.innerHTML = localStorage.getItem('nome')
})

//Arrumar
document.addEventListener('DOMContentLoaded', function() {
    click = document.querySelector(".click")

    click.addEventListener("click", function(event){
        gambiarra = true
        localStorage.getItem("gambiarra")
    })
})