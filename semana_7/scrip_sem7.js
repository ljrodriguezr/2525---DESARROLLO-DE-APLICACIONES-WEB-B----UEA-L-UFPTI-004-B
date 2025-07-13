// Arreglo inicial de productos
let productos = [
  { nombre: "Camiseta", precio: 19.99, descripcion: "Camiseta de algodón 100%" },
  { nombre: "Pantalón", precio: 39.99, descripcion: "Pantalón de mezclilla azul" },
  { nombre: "Zapatos", precio: 59.99, descripcion: "Zapatos de cuero negro" }
];

// Función para renderizar productos
function renderizarProductos() {
  const lista = document.getElementById("product-list");
  lista.innerHTML = ""; // Limpiar lista antes de renderizar

  productos.forEach(producto => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${producto.nombre}</strong> - \$${producto.precio.toFixed(2)}<br>${producto.descripcion}`;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto
document.getElementById("add-product").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: 0.00,
    descripcion: "Descripción del nuevo producto"
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderizar al cargar la página
window.onload = renderizarProductos;
