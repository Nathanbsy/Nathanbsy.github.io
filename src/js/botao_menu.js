function verMais(){
    var maisTexto=document.getElementById("vermais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(maisTexto.style.display === "none"){
        maisTexto.style.display="flex";
        btnLeiaMais.innerHTML="LEIA MENOS";

    } else {
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="LEIA MAIS";
    }
}

let trilho = document.getElementById("trilho");
let nav = document.getElementById("nav");
let sec1 = document.getElementById("sec1");
let body = document.querySelector("body");
let menu = document.getElementById("section_menu");
let reserva = document.getElementById("section_reserva");
let local = document.getElementById("local");
let linhas = document.getElementById("tachovendohamburguer3");
let fundoH = document.getElementById("menuHamburguer");
let listaH = document.getElementById("listaH");
let listaFooter = document.querySelectorAll("#listaFooter");
let textoFormulario = document.getElementById("form_reserva");
let footerdark = document.querySelectorAll(".titulos_footer");
let botaoMenu = document.getElementById("btnLeiaMais");

trilho.addEventListener("click", () => {
    let i = 0;
    while (i < 2) {
        listaFooter[i].classList.toggle("numero");
        i = i + 1;
    }

    trilho.classList.toggle("dark");
    nav.classList.toggle("dark");
    sec1.classList.toggle("dark");
    body.classList.toggle("dark");
    menu.classList.toggle("dark");
    local.classList.toggle("dark");
    reserva.classList.toggle("dark");
    linhas.classList.toggle("preto");
    fundoH.classList.toggle("muda");
    listaH.classList.toggle("muda2");
    botaoMenu.classList.toggle("dark");
});