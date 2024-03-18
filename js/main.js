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
incrementarNumeroCliente();

    //SEGUNDA ENTREGA
// Función CONSTRUCTOR para crear la ficha de producto 
function Producto(SKU, Imagen, Categoria, Nombre, Descripcion, Color, Precio, Descuento) {
    this.SKU = SKU; // Stock Keeping Unit, id único de producto
    this.Imagen = Imagen;
    this.Categoria = Categoria;
    this.Nombre = Nombre;
    this.Descripcion = Descripcion;
    this.Color = Color;
    this.Precio = parseFloat(Precio); // Float para que admita decimales
    this.Descuento = parseFloat(Descuento); // Float para que admita decimales
}

//Creación del catálogo de productos 
//Agregar valores a las propiedades para instanciar el objeto Producto
const producto1 = new Producto(
    "21PEWT2150S",
    "https://imagizer.imageshack.com/img924/1756/vNv6W4.png", //img localizada en un servidor externo
    "Línea Blanca",
    "Aire Acondicionado LG",
    "CAPACIDAD: 12,000 BTU · DIMENSIONES LXAXP: Evaporador 837 x 308 x 189 mm",
    "Blanco",
    "15000.99",
    "10.00"
);

const producto2 = new Producto(
    "18P3WT1865A",
    "https://imagizer.imageshack.com/img922/7452/JKBxHt.png", //img localizada en un servidor externo
    "Línea Blanca",
    "Heladera SAMSUNG No frost 363 Lts",
    "CAPACIDAD: 363 litros. Freezer superior. Iluminación interior.",
    "Blanco",
    "25000.00",
    "00.00"
);

const producto3 = new Producto(
    "14P3WT1431A",
    "https://imagizer.imageshack.com/img924/7990/UOQ2gC.png", //img localizada en un servidor externo
    "Línea Blanca",
    "Minibar HACEB 95 9002547",
    "Frost Congelador Inferior. NÚMERO DE PUERTAS: 1. Dispensador de Hielo.",
    "Gris acero",
    "35000.00",
    "00.00"
);

// Función para calcular el precio final multiplicando por 1.21 y antes verficar si tiene dto
function precioFinal(producto) {
    const precioSinIva = producto.Precio;
    const descuento = producto.Descuento;
    if (descuento > 0) // Verificar si el producto tiene descuento > 0
    {
        const precioPromocional = precioSinIva - (precioSinIva * (descuento / 100)); // Descontar el descuento al precio sin IVA
        return precioPromocional;
    } else {
        return precioSinIva;
    }
}

// Carro de compras
const carroDeCompras = [];

// Estando el usuario en la ficha del producto, se le pregunta si quiere agregarlo al carrito 
const respuestaInicioCompra = prompt("¿Deseas agregar productos al carro de compras? SI o NO");

// Opciones según la respuesta
if (respuestaInicioCompra.toUpperCase() === "SI") { // Transformar a mayúsculas para unificar las respuestas
    carroDeCompras.push(producto1); // Agregar producto al carro
    console.log("Producto agregado"); // Mensaje de confirmación
    const respuestaContinuarCompra = prompt("¿Deseas agregar otro producto al carro de compras? SI o NO");
    if (respuestaContinuarCompra.toUpperCase() === "SI") { // Unificar las respuestas
        carroDeCompras.push(producto2); // Agregar producto2 al carro;
        console.log("Producto agregado"); // Mensaje de confirmación
    }
} else { 
    const siguientePaso = prompt("¿Qué deseas hacer? Guardar en Lista de Favoritos o Excluir producto");
    if (siguientePaso.toUpperCase() === "GUARDAR EN LISTA DE FAVORITOS") // Unificar las respuestas
    {
        console.log("Producto guardado en Lista de Favoritos");
    } else if (siguientePaso.toUpperCase() === "EXCLUIR PRODUCTO") // Unificar las respuestas
    {
        const productoAEliminar = prompt("Selecciona el producto a excluir");
        const indexProductoAEliminar = carroDeCompras.findIndex(producto => producto.Nombre === productoAEliminar); //Busca la posición dentro del array del carro a través de la propiedad Nombre
        if (indexProductoAEliminar !== -1) //Verificar que el valor exista siendo distinto a -1
        {
            carroDeCompras.splice(indexProductoAEliminar, 1); // Eliminar el producto con slice
            console.log("Producto excluido correctamente");
        }
    }
}

// Aplicar la función precioFinal a cada producto en carroDeCompras
carroDeCompras.forEach(producto => { // Función FLECHA
    producto.Precio = precioFinal(producto);
});

console.log(carroDeCompras);

// Array de los nombres de los productos confirmados en la compra
const nombresProductosComprados = carroDeCompras.map(producto => producto.Nombre).join(", ");
console.log("Tu compra incluye: " + nombresProductosComprados);


