document.addEventListener('DOMContentLoaded', function() {
    nova_reuniao = document.querySelector(".nova_reuniao")

    j = localStorage.getItem("gambiarra")
    console.log(localStorage.getItem("gambiarra"))
    console.log(1)
    if ( j ){
        nova_reuniao.style.display = "flex";
        console.log(1)
    }
})

document.addEventListener('DOMContentLoaded', function() {
    console.log(localStorage.getItem('nome'))
    nome_reuniao = document.querySelectorAll('.nome_reuniao')
    nome_reuniao.innerHTML = localStorage.getItem('nome')
})