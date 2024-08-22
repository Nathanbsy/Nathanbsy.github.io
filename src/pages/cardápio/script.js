
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

document.getElementById('btn1').addEventListener('click', function() {
    var texto = document.getElementById('div1');
    if (texto.classList.contains('mostrar')) {
        texto.classList.remove('mostrar');
        this.textContent = 'Mostrar Texto';
    } else {
        texto.classList.add('mostrar');
        this.textContent = 'Ocultar Texto';
    }
});
document.getElementById('btn2').addEventListener('click', function() {
    var texto = document.getElementById('div2');
    if (texto.classList.contains('mostrar')) {
        texto.classList.remove('mostrar');
        this.textContent = 'Mostrar Texto';
    } else {
        texto.classList.add('mostrar');
        this.textContent = 'Ocultar Texto';
    }
});
document.getElementById('btn3').addEventListener('click', function() {
    var texto = document.getElementById('div3');
    if (texto.classList.contains('mostrar')) {
        texto.classList.remove('mostrar');
        this.textContent = 'Mostrar Texto';
    } else {
        texto.classList.add('mostrar');
        this.textContent = 'Ocultar Texto';
    }
});


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach( (element) => myObserver.observe(element))

window.addEventListener("scroll", function() {
    let btnsubir = this.document.querySelector('#btntop');
    if (window.scrollY > 300) {
        btntop.classList.add('botao_subir');
    } else {
        btntop.classList.remove('botao_subir');
    }
});
