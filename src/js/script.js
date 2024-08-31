let menuMobile = document.getElementById("menuHamburguer");
let botao = document.getElementById("botaaao");

function menuVis() {
    botao.classList.toggle("ativar");
    if(menuMobile.classList.contains("invisivel")) {
        menuMobile.classList.remove("invisivel");
        menuMobile.classList.add("visivel");
    } else {
        menuMobile.classList.remove("visivel");
        menuMobile.classList.add("invisivel");
    }
}

// Pre loader do site

let  elem_preloader = document.getElementById("preloader");
let  elem_loader = document.getElementById("loader");
let  elem_h1 = document.getElementById("h1pre");
let  elem_h2 = document.getElementById("h2pre");
let  elem_bola = document.getElementById("efeito-carregamento");


setTimeout(function() {
    elem_preloader.classList.remove("preloader");
    elem_h2.style.display = "none";
    elem_h1.style.display = "none";
    elem_bola.style.display = "none";
}, 2800);