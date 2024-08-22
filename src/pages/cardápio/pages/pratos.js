
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
