let boton=document.getElementById("boton");
let boton2=document.getElementById("boton2");
let img1=document.getElementById("foto1");
let titulo1=document.getElementById("titulo1");
let audio1=document.getElementById("audio1");
let img2=document.getElementById("foto2");
let titulo2=document.getElementById("titulo2");
let audio2=document.getElementById("audio2");
let img3=document.getElementById("foto3");
let titulo3=document.getElementById("titulo3");
let audio3=document.getElementById("audio3");

boton.addEventListener("click",perroGuardian);

function perroGuardian(){
    titulo1.textContent="Imagine Dragons - It's Time";
    img1.src="img/img4.jpg";
    audio1.src="audio/itstime.mp3";
    titulo2.textContent="Imagine Dragons - Radioactive";
    img2.src="img/img5.jpg";
    audio2.src="audio/radioactive.mp3";
    titulo3.textContent="Imagine Dragons - Warriors";
    img3.src="img/img6.jpg";
    audio3.src="audio/warriors.mp3";
}

boton2.addEventListener("click",atras);
function atras(){
    titulo1.textContent="Imagine Dragons - Beliver";
    img1.src="img/img1.jpg";
    audio1.src="audio/believer.mp3";
    titulo2.textContent="Imagine Dragons - demons";
    img2.src="img/img2.jpg";
    audio2.src="audio/demons.mp3";
    titulo2.textContent="Imagine Dragons - I'm so Sorry";
    img2.src="img/img3.jpg";
    audio2.src="audio/imsosorry.mp3";


}