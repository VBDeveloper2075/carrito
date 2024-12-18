let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorCarrito = document.getElementById('carrito');

function mostrarCarrito() {
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto, indice) => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <div class="cantidad">
                <button onclick="cambiarCantidad(${indice}, -1)">-</button>
                <span>${producto.cantidad}</span>
                <button onclick="cambiarCantidad(${indice}, 1)">+</button>
            </div>
            <p>Subtotal: $${producto.precio * producto.cantidad}</p>
            <button onclick="eliminarProducto(${indice})">Eliminar</button>
        `;

        contenedorCarrito.appendChild(item);
    });

    totalCarrito();
}

function cambiarCantidad(indice, cantidad) {
    carrito[indice].cantidad += cantidad;

    if (carrito[indice].cantidad === 0) {
        carrito.splice(indice, 1);
    }

    actualizarCarrito();
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function totalCarrito() {
    const total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    const totalElement = document.createElement('h2');
    totalElement.textContent = `Total: $${total}`;
    contenedorCarrito.appendChild(totalElement);
}

mostrarCarrito();
