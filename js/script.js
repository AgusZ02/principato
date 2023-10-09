let contenido = document.getElementsByTagName("h2")

contenido.item(1).innerHTML="Segundo menú"





usuario = document.getElementById("user");
usuario.value='tu@email';
usuario.onblur=function(){
    if (usuario.value=='') {
        usuario.value="tu@email";
    }
}

usuario.onfocus=function(){
    if (usuario.value=='tu@email') {
        usuario.value='';
    }
}


let comboBox = document.getElementById("combobox");
comboBox.addEventListener("change", btnComboBox)

function btnComboBox(){
    console.log(comboBox.value);
}

function enviarLogin() {
    let nombreUsuario = document.getElementById("user").value
    let contrasena = document.getElementById("pass").value
    console.log("Login tratado correctamente")
    console.log(nombreUsuario + " " + contrasena)
}
let i = 0;

let arrayImg = ["fresas","limon","mandarinas","manzanas","melon","sesamo"];
let carrusel = true;


function carruselImagenes() {
    let reloj = setInterval(function(){
        if (carrusel) {
            let imagen = document.getElementById("image");
            let ubiImagenes = "url(./images/labo2/" + arrayImg[i % arrayImg.length] + ".jpg)";
            console.log(ubiImagenes);
            ubiImagenes = "url(../images/labo2/fresas.jpg)";
            imagen.style.backgroundImage = ubiImagenes;
            i++;
            imagen.onclick=function() {
                carrusel = !carrusel;
            }
        }
    }, 3000);
}
window.onload=carruselImagenes;
