const contenedorProductos = document.getElementById('productos');

productos.forEach((producto) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">
            Agregar al carrito 🛒
        </button>
    `;

    contenedorProductos.appendChild(card);
});

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(id) {
    const producto = productos.find((item) => item.id === id);
    const productoEnCarrito = carrito.find((item) => item.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} ha sido agregado al carrito.`);
}
