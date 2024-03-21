const email = document.getElementById("email") // Acceso a Email
const emailconfirm = document.getElementById("email_confirm") // Acceso a confirmacion
const email_confirm_table = document.getElementById("email_confirm_tr") //Acceso a la fila

//Variable para saber si los errores coinciden 
let hayerror = false

//funcion que va verificar el emailconfirm cuado suceda el evento
function verificarEmail(e){
 //e -> el evento que ocurre
 // target - Protagonista del evento
 //valor -  es el valor que guarda el protagonista 

    //confirmacion del email
    let textoUsuario = e.target.value

    //email del usuario
    if (textoUsuario !== email.value && !hayerror){

        //si los emails no son iguales
        emailconfirm.style.backgroundColor = "rgba(230,169,171,.5)" // cambia de color el fondo a red

        //crear etiqueta
        let etiquetaError = document.createElement("p")
       etiquetaError.setAttribute("id","error") //damos un id a la etiqueta
        etiquetaError.innerText = "Los correos no son iguales"

        //Despliega el texto de "Los correos no son iguales" despues de la fila donde se carga el email de confirmacion
        email_confirm_table.after(etiquetaError)
        etiquetaError.style.color = "#d14539"

      hayerror = true


    } else if(textoUsuario === email.value){
      emailconfirm.style.backgroundColor = "rgba(255,255,255)"
      let error = document.getElementById ("error")
      error.remove() //eliminamos la etiqueta dinamica despues de que los correos sean iguales

    }
}

//vamos a verificar que ambos email son iguales cada que el usuario presione una tecla 
//adherir evento. comillas a que elemnto. la e es una funcion 
emailconfirm.addEventListener("keyup", verificarEmail) //addEventlistener recibe dos parametros, que evento espera, y que accion toma
















function emailValidation() {
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        const message = document.createTextNode("Eメールが一致しません")
        form.appendChild(element);
        element.appendChild(message);
        element.classList.add("alert");
        setTimeout(() => {
          form.removeChild(element)
        }, 3000)
      } else {
        form.submit();
      }
    });
  };
  

  window.onload = emailValidation;