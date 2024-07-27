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

let trilho = document.getElementById('trilho')
let nav = document.getElementById('nav')
let sec1 = document.getElementById('sec1')
let body = document.querySelector('body')
let menu = document.getElementById('section_menu')
let reserva = document.getElementById('section_reserva')
let local = document.getElementById('local')

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    nav.classList.toggle('dark')
    sec1.classList.toggle('dark')
    body.classList.toggle('dark')
    menu.classList.toggle('dark')
    local.classList.toggle('dark')
    reserva.classList.toggle('dark')

})