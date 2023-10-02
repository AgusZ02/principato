let contenido = document.getElementsByTagName("h2")

contenido.item(1).innerHTML="Segundo menú"


function gestorEventos() {
    var imagen = document.getElementById("image");
    imagen.onclick = function(){
      alert("Has pulsado sobre la imagen");
    }
  }
window.onload=gestorEventos;


var usuario = document.getElementById("user");
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
comboBox.addEventListener("click", btnComboBox)
function btnComboBox(){

    console.log(comboBox.value);
}

function enviarLogin() {
    let nombreUsuario = document.getElementById("user").value
    let contrasena = document.getElementById("pass").value
    console.log("Login tratado correctamente")
    console.log(nombreUsuario + " " + contrasena)
}

var reloj = setInterval(carruselImagenes, 3000);

function carruselImagenes() {
    
    let imagen = document.getElementById("image")
    let ubiImagenes = "./images/[LABO II]_Imagenes/"
    const fs = require("fs")
    fs.readdirSync(ubiImagenes).forEach((archivo) => {
        console.log(archivo)
        
   })

}