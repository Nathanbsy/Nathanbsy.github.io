
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