/*------------>JS efecto typing titulo*/
const div = document.querySelector(".main_tittle")
 texto = "Cho Gi Seok";

 function efectoTextTyping(elemento,texto,i = 0){
    elemento.textContent += texto[i];

    if (i == texto.length -1) return;

    setTimeout(() => efectoTextTyping(div,texto,i+1), 100);    
 }

 efectoTextTyping(div, texto)



/*------------>JS boton BackToTheTop*/
const myButton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    }

    else {
        myButton.style.display = "none";
    }
}

myButton.addEventListener('click', () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})