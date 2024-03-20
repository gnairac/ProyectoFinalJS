/*
//PRIMERA ENTREGA

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
incrementarNumeroCliente();*/


//SEGUNDA ENTREGA
//Base de datos de productos en archivo catalogo.js

function buscarProductoPorNombre(nombreProducto) {
    return catalogo.find(producto => {
        const palabrasNombre = producto.Nombre.toLowerCase().split(' ');
        return palabrasNombre.some(palabra => palabra.includes(nombreProducto.toLowerCase()));
    });
}

//Función precio final, aplica descuento si existe, multiplica x 1.21 (IVA)
function precioFinal(producto) {
    const precioSinIva = producto.Precio;
    const descuento = producto.Descuento;
    if (descuento > 0) {
        const precioPromocional = precioSinIva - (precioSinIva * (descuento / 100));
        const precioFinalConIva = precioPromocional * 1.21;
        return precioFinalConIva;
    } else {
        const precioFinalConIva = precioSinIva * 1.21;
        return precioFinalConIva;
    }
}

function eliminarProducto(nombreProducto) {
    const indexProductoAEliminar = carroDeCompras.findIndex(producto => {
        const nombreProductoMinuscula = nombreProducto.toLowerCase();
        const palabrasNombre = producto.Nombre.toLowerCase().split(' ');
        return palabrasNombre.some(palabra => palabra.includes(nombreProductoMinuscula));
    });
    if (indexProductoAEliminar !== -1) {
        const productoEliminado = carroDeCompras.splice(indexProductoAEliminar, 1)[0];
        alert("Producto excluido del carrito");
        const precioProductoEliminado = precioFinal(productoEliminado);
        console.log("Producto excluido");
        console.log(carroDeCompras);
        console.log("Precio del producto excluido: $" + precioProductoEliminado.toFixed(2));
        alert("Precio del producto excluido: $" + precioProductoEliminado.toFixed(2));
        actualizarPrecioTotal();
    } else {
        alert("No se encontró ningún producto con ese nombre, Inténtalo nuevamente.");
        console.log("No se encontró el producto a excluir");
    }
}

function actualizarPrecioTotal() {
    const totalPrecioFinal = carroDeCompras.reduce((total, producto) => total + producto.Precio, 0);
    console.log(carroDeCompras);
    console.log("Precio Total: $" + totalPrecioFinal.toFixed(2));
    alert("Precio Total: $" + totalPrecioFinal.toFixed(2));
}

const carroDeCompras = [];
const respuestaInicioCompra = prompt("¿Deseas agregar productos al carro de compras? SI o NO");
if (respuestaInicioCompra && respuestaInicioCompra.toUpperCase() === "SI") {
    carroDeCompras.push(producto1);
    alert("Producto agregado al carrito");
    console.log("Producto agregado");
    const respuestaContinuarCompra = prompt("¿Deseas agregar otro producto al carro de compras? SI o NO");
    if (respuestaContinuarCompra && respuestaContinuarCompra.toUpperCase() === "SI") {
        const nombreProductoAgregar = prompt("Escribe el nombre del producto que deseas agregar:");
        const productoAgregar = buscarProductoPorNombre(nombreProductoAgregar);
        if (productoAgregar) {
            carroDeCompras.push(productoAgregar);
            alert("Producto agregado al carrito");
            console.log("Producto agregado");
        } else {
            alert("No se encontró ningún producto con ese nombre. Ingresa el nombre nuevamente.");
            console.log("Producto no encontrado");
        }
    }
} else {
    let continuar = true;
    while (continuar) {
        const siguientePaso = prompt("¿Deseas guardar el producto en Lista de Favoritos? 1.SI, 2-NO");
        if (siguientePaso && siguientePaso.toUpperCase() === "1") {
            alert("Producto guardado en tu Lista de Favoritos");
            console.log("Producto guardado en Lista de Favoritos");
            continuar = false;
        } else if (siguientePaso && siguientePaso.toUpperCase() === "2") {
            alert("¡Te esperamos nuevamente!");
            console.log("Producto no guardado en Lista de Favoritos");
            break; // Break para que no siga ejecutando el código
        } else {
            alert("Ingresa 1-SI o 2-NO"); // Respuesta en caso que no ingresa un valor válido
        }
    }
}

carroDeCompras.forEach(producto => {
    producto.Precio = precioFinal(producto);
});

console.log(carroDeCompras);

const totalPrecioFinal = carroDeCompras.reduce((total, producto) => total + producto.Precio, 0);

console.log(carroDeCompras);

const nombresProductosComprados = carroDeCompras.map(producto => producto.Nombre).join(", ");
console.log(nombresProductosComprados);
alert("Tu compra incluye: " + nombresProductosComprados + " . Precio Total: $" + totalPrecioFinal.toFixed(2));

const respuestaCompra = prompt("¿Confirmar la compra? SI o NO");
if (respuestaCompra && respuestaCompra.toUpperCase() === "SI") {
    alert("Continuar a Forma de pago.");
} else {
    const eliminarProductoConfirmacion = prompt("¿Deseas excluir algún producto del carrito? SI o NO");
    if (eliminarProductoConfirmacion && eliminarProductoConfirmacion.toUpperCase() === "SI") {
        const nombreProductoEliminar = prompt("Ingresa el nombre del producto a excluir:");
        eliminarProducto(nombreProductoEliminar); 
        alert("Continuar a Forma de pago.");      
    }
}
