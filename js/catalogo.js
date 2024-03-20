// Función CONSTRUCTOR para crear la ficha de producto 
function Producto(SKU, Imagen, Categoria, Nombre, Descripcion, Color, Precio, Descuento) {
    this.SKU = SKU;
    this.Imagen = Imagen;
    this.Categoria = Categoria;
    this.Nombre = Nombre;
    this.Descripcion = Descripcion;
    this.Color = Color;
    this.Precio = parseFloat(Precio);
    this.Descuento = parseFloat(Descuento);
}

const producto1 = new Producto(
    "21PEWT2150S",
    "https://imagizer.imageshack.com/img924/1756/vNv6W4.png",
    "Línea Blanca",
    "Aire Acondicionado LG",
    "CAPACIDAD: 12,000 BTU · DIMENSIONES LXAXP: Evaporador 837 x 308 x 189 mm",
    "Blanco",
    "15000.99",
    "10.00"
);

const producto2 = new Producto(
    "18P3WT1865A",
    "https://imagizer.imageshack.com/img922/7452/JKBxHt.png",
    "Línea Blanca",
    "Heladera SAMSUNG No frost 363 Lts",
    "CAPACIDAD: 363 litros. Freezer superior. Iluminación interior.",
    "Blanco",
    "25000.00",
    "00.00"
);

const producto3 = new Producto(
    "14P3WT1431A",
    "https://imagizer.imageshack.com/img924/7990/UOQ2gC.png",
    "Línea Blanca",
    "Minibar HACEB 95 9002547",
    "Frost Congelador Inferior. NÚMERO DE PUERTAS: 1. Dispensador de Hielo.",
    "Gris acero",
    "35000.00",
    "00.00"
);

const catalogo = [producto1, producto2, producto3];