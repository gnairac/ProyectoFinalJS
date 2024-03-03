//ALGORITMO DE FORMULARIO DE INGRESO DE UN NUEVO CLIENTE

// Almacenar el número de cliente
let numeroCliente = 1;

// Función para incrementar el número de cliente
function incrementarNumeroCliente() {
    numeroCliente+=1;
}

// Función para evitar que un campo quede vacío y que no se pueda pasar al otro campo hasta que no se ingrese el valor
function validarCampo(valor, mensaje) {
    while (!valor) {
        valor = prompt(mensaje);
        if (!valor) {
            alert("El campo no puede estar vacío.");
        }
    }
    return valor;
}

// Paso 1: Pedir al usuario que ingrese su nombre
let nombre = validarCampo(prompt("Ingresa tu nombre"), "Ingresa tu nombre");

// Paso 2: Pedir al usuario que ingrese su apellido
let apellido = validarCampo(prompt("Ingresa tu apellido"), "Ingresa tu apellido");

// Paso 3: Pedir al usuario que ingrese su correo electrónico y verificarlo
let email;
let dominiosValidos = ["gmail.com", "hotmail.com", "outlook.com"];
let emailValido = false;

//Se verifican que contenga @ y que el dominio sea válido en blucle hasta que se cumplan ambas condiciones
while (!emailValido) {
    email = validarCampo(prompt("Ingresa tu correo electrónico"), "Ingresa tu correo electrónico");
    if (email.includes('@')) {
        for (let i = 0; i < dominiosValidos.length; i+=1) {
            if (email.endsWith(dominiosValidos[i])) {
                emailValido = true;
                break;
            }   
        }
    }
    if (!emailValido) {
        alert("El correo debe contener el carácter @ y un dominio válido.");
    }
}

// Paso 4: Pedir al usuario que ingrese una contraseña y verificarla
let contrasena;
let caracterEspecial = ["#", "!", "$", "%", "&"];
let contrasenaValida = false;

//Se verifican que contenga que tenga la longitud mínima y un caracter especial en blucle hasta que se cumplan ambas condiciones
while (!contrasenaValida) {
    contrasena = validarCampo(prompt("Ingresa una contraseña"), "Ingresa una contraseña");
    let tieneCaracterEspecial = false; //variable declarada dentro del while
    for (let i = 0; i < contrasena.length; i+=1) {
        if (caracterEspecial.includes(contrasena[i])) {
            tieneCaracterEspecial = true;
            break;
        }
    }
//Se verifican ambas condiciones de largo y que contenga el caracter especial
    if (contrasena.length >= 8 && tieneCaracterEspecial) {
        contrasenaValida = true;
    } else {
        alert("La contraseña debe tener un mínimo de 8 caracteres y contener al menos un caracter especial.");
    }
}

// Paso 5: Pedir al usuario que reingrese la contraseña y verificar si coincide
let confirmacionContrasena;

while (true) {
    confirmacionContrasena = validarCampo(prompt("Confirma tu contraseña"), "Confirma tu contraseña");
    if (confirmacionContrasena === contrasena) {
        break; 
    } else {
        alert("La contraseña ingresada no coincide.");
    }
}

// Función para saludar darle la bienvenida al nuevo usuario
function saludar(nombre, apellido) {
    let mensaje = "¡Te damos la bienvenida " + nombre + " " + apellido + "! ";
    mensaje += "Tu número de cliente es: " + numeroCliente; 
    return mensaje;
}

// Saludo de bienvenida
alert(saludar(nombre, apellido));

// Incrementar el número de cliente para el próximo nuevo cliente 
incrementarNumeroCliente();






