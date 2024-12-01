let botao = document.querySelector(".botaosom")
let video = document.querySelector(".Video")

let Botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

botao.addEventListener("click",ligasom)
video.addEventListener("click",desligasom)

function ligasom(){
    video.muted = false;
}

function desligasom(){
    video.muted = true
}

Botao.addEventListener("click",MostrarModal)
modal.addEventListener("click",EsconderModal)

function MostrarModal(){
    modal.style.display = ("block")
}

function EsconderModal(){
    modal.style.display = ("none")
}




