/*seccion principal/cortina de opciones 
esconde los 2 formularios  */
let cortina = document.getElementById("principal");
let izq = document.getElementById("seccion1");
let der = document.getElementById("seccion2");
let formI = document.getElementById("formInfonavit");
let formE = document.getElementById("efectivo");

function cortinaAnimateI() {
    console.log("se mostro el form infonavit");
    cortina.classList.add("actived");
    formI.classList.remove("escondido");
}



function cortina1() {
    console.log("se a pulsado el izquierdo");
    izq.classList.add("actived");

    der.classList.add("actived");
}

function formInfonavit() {
    setTimeout(() => {
        cortinaAnimateI()
    }, 400);

}

function cortinaAnimateE() {
    console.log("se mostro el formulario para comprar con efectivo");
    cortina.classList.add("actived");
    formE.classList.remove("escondido");
}

function cortina2() {
    console.log("se a pulsado el derecho");
    izq.classList.add("actived");
    der.classList.add("actived");
}

function formEfectivo() {
    setTimeout(() => {
        cortinaAnimateE()
    }, 1000);

}


/*validacion formulario de compra con infonavit */
var validacion = document.getElementById("formulariov");
var prestamo = document.getElementById("prestamo");

var prestamo2 = document.getElementById("prestamo2");
var puntos = document.getElementById("puntos");
var subcuenta = document.getElementById("subcuenta");
var check = document.getElementById("check");


function validate(e) {

    var isChecked = document.getElementById('acepto').checked;
    if (isChecked) {
        console.log("se ha enviado");
        check.classList.add("correcto")
        return true;
    } else {
        event.preventDefault();
        check.classList.add("alerta")

        console.log("selecciona algo");
        return false;
    }
}


function soloNumeros(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    numeros = "1234567890"
    especiales = "8-37-38-46-164";
    tecladoEspecial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecladoEspecial = true;
            break;
        }
    }
    if (numeros.indexOf(teclado) == -1 && !tecladoEspecial) {
        return false;
    }
}

function validateprestamo(prestamo) {
    if (prestamo.value === 0 || prestamo.value == "") {

        event.preventDefault()
        prestamo.classList.add("error")
        prestamo.classList.remove("correcto")
        prestamo.classList.remove("alert")
        return (false)
    } else if (prestamo.value.length < 6 || prestamo.value.length > 7) {
        event.preventDefault()
        prestamo.classList.remove("error")
        prestamo.classList.remove("correcto")
        prestamo.classList.add("alerta")

        return (false)
    } else {
        console.log(prestamo.value);
        prestamo.classList.remove("alert")
        prestamo.classList.remove("error")
        prestamo.classList.add("correcto")

        return (true)
    }
}

function validateprestamo2(prestamo2) {
    if (prestamo2.value === 0 || prestamo2.value == "") {

        event.preventDefault()
        prestamo2.classList.add("error")
        prestamo2.classList.remove("correcto")
        prestamo2.classList.remove("alert")
        return (false)
    } else if (prestamo.value.length < 6 || prestamo.value.length > 7) {
        event.preventDefault()
        prestamo2.classList.remove("error")
        prestamo2.classList.remove("correcto")
        prestamo2.classList.add("alerta")

        return (false)
    } else {
        console.log(prestamo2.value);
        prestamo2.classList.remove("alert")
        prestamo2.classList.remove("error")
        prestamo2.classList.add("correcto")

        return (true)
    }
}

function validatepuntos(puntos) {
    if (puntos.value === 0 || puntos.value == "") {

        puntos.classList.remove("alert")
        puntos.classList.remove("error")
        puntos.classList.add("correcto")

        return (true)

    } else if (puntos.value.length < 2 || puntos.value.length > 3) {
        event.preventDefault()
        puntos.classList.remove("error")
        puntos.classList.remove("correcto")
        puntos.classList.add("alerta")

        return (false)
    } else if (puntos.value < 89 || puntos.value > 135) {
        event.preventDefault()
        alert("se ejecuto el else if 2")
        puntos.classList.remove("error")
        puntos.classList.remove("correcto")
        puntos.classList.add("alerta")

        return (false)
    } else {
        console.log(puntos.value)
        puntos.classList.remove("alert")
        puntos.classList.remove("error")
        puntos.classList.add("correcto")

        return (true)
    }
}

function validateSubcuenta(subcuenta) {
    if (subcuenta.value === 0 || subcuenta.value == "") {

        event.preventDefault()
        subcuenta.classList.add("error")
        subcuenta.classList.remove("correcto")
        subcuenta.classList.remove("alert")
        return (false)
    } else if (subcuenta.value.length < 4 || subcuenta.value.length > 6) {
        event.preventDefault()
        subcuenta.classList.remove("error")
        subcuenta.classList.remove("correcto")
        subcuenta.classList.add("alerta")

        return (false)
    } else {
        console.log(subcuenta.value)
        subcuenta.classList.remove("alert")
        subcuenta.classList.remove("error")
        subcuenta.classList.add("correcto")
        "$" + subcuenta.value;
        return (true)
    }
}



validacion.addEventListener("submit",
    e => {
        e.preventDefault();

        validateSubcuenta(subcuenta);
        validateprestamo(prestamo);
        validatepuntos(puntos);
        validate();
        validateprestamo2(prestamo2);


    })

var cantidad = document.getElementById("cantidad");
var numeroPhone = document.getElementById("phone");
var validacion2 = document.getElementById("formulario2");

var check2 = document.getElementById("check2")



function validateEfectivo(cantidad) {
    if (cantidad.value === 0 || cantidad.value == "") {

        event.preventDefault()
        cantidad.classList.add("error")
        cantidad.classList.remove("correcto")
        cantidad.classList.remove("alert")
        return (false)
    } else if (cantidad.value.length < 6 || cantidad.value.length > 7) {
        event.preventDefault();
        console.log("se activado")
        cantidad.classList.remove("error")
        cantidad.classList.remove("correcto")
        cantidad.classList.add("alerta")

        return (false)
    } else {

        cantidad.classList.remove("alert")
        cantidad.classList.remove("error")
        cantidad.classList.add("correcto")

        return (true)
    }
}



function validate2(e) {

    var isChecked = document.getElementById('acepto2').checked;
    if (isChecked) {
        console.log("se ha enviado");
        check2.classList.add("correcto");
        check2.classList.remove("alerta");
        return true;
    } else {
        event.preventDefault();
        check2.classList.add("alerta");

        console.log("selecciona algo");
        return false;
    }
}


function phone(numeroPhone) {
    if (numeroPhone.value === 0 || numeroPhone.value == "" || numeroPhone.value.length < 8) {

        event.preventDefault()
        numeroPhone.classList.add("error")
        numeroPhone.classList.remove("correcto")
        numeroPhone.classList.remove("alert")
        return (false)
    } else if (/^[0-9]$/.test(numeroPhone.value)) {
        event.preventDefault()
        numeroPhone.classList.remove("error")
        numeroPhone.classList.remove("correcto")
        numeroPhone.classList.add("alerta")
        alert("numero equivocado")
        return (false)
    } else {

        numeroPhone.classList.remove("alert")
        numeroPhone.classList.remove("error")
        numeroPhone.classList.add("correcto")
        return (true)
    }
}

validacion2.addEventListener("submit", e => {
    validate2();
    validateEfectivo(cantidad);
    phone(numeroPhone);
})