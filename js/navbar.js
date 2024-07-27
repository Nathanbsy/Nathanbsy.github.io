
window.addEventListener("scroll", function() {
    let nav = this.document.querySelector('#nav');
    let imagem = this.document.querySelector('#imgnavbar');
    
    if (window.scrollY > 0) {
        nav.style.background = "black";
    } else {
        nav.style.background = "";
    }
});
