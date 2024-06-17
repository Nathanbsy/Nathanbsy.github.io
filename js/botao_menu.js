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