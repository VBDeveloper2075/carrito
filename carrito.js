// Obtenemos el carrito del localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorCarrito = document.getElementById('carrito');
const mensajeVacio = document.getElementById('mensaje-vacio');

// Función principal para mostrar todos los productos del carrito
function mostrarCarrito() {
    // Limpiamos el contenedor
    contenedorCarrito.innerHTML = '';

    // Si el carrito está vacío, mostramos mensaje
    if (carrito.length === 0) {
        mensajeVacio.style.display = 'block';
        contenedorCarrito.style.display = 'none';
        actualizarResumen();
        return;
    }

    mensajeVacio.style.display = 'none';
    contenedorCarrito.style.display = 'block';

    // Recorremos cada producto y creamos su elemento HTML
    carrito.forEach((producto, indice) => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');

        // Calculamos el subtotal de este producto
        const subtotal = producto.precio * producto.cantidad;

        // Creamos el HTML del producto
        item.innerHTML = `
            <div class="item-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="item-info">
                <h3>${producto.nombre}</h3>
                <p class="item-descripcion">${producto.descripcion || ''}</p>
                <p class="item-precio">$${producto.precio} c/u</p>
            </div>
            <div class="item-controles">
                <div class="cantidad-control">
                    <button class="btn-cantidad" onclick="cambiarCantidad(${indice}, -1)">-</button>
                    <span class="cantidad-numero">${producto.cantidad}</span>
                    <button class="btn-cantidad" onclick="cambiarCantidad(${indice}, 1)">+</button>
                </div>
                <p class="item-subtotal">Subtotal: <strong>$${subtotal}</strong></p>
                <button class="btn-eliminar" onclick="eliminarProducto(${indice})">
                    🗑️ Eliminar
                </button>
            </div>
        `;

        // Agregamos el producto al contenedor
        contenedorCarrito.appendChild(item);
    });

    // Actualizamos el resumen del pedido
    actualizarResumen();
}

// Función para cambiar la cantidad de un producto
function cambiarCantidad(indice, cambio) {
    // Sumamos o restamos la cantidad
    carrito[indice].cantidad += cambio;

    // Si la cantidad llega a 0, eliminamos el producto
    if (carrito[indice].cantidad === 0) {
        carrito.splice(indice, 1);
    }

    // Guardamos y actualizamos
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(indice) {
    // Confirmamos la eliminación
    const producto = carrito[indice];
    if (confirm(`¿Deseas eliminar "${producto.nombre}" del carrito?`)) {
        carrito.splice(indice, 1);
        actualizarCarrito();
        mostrarNotificacion('Producto eliminado del carrito');
    }
}

// Función para vaciar todo el carrito
function vaciarCarrito() {
    if (carrito.length === 0) {
        mostrarNotificacion('El carrito ya está vacío');
        return;
    }

    if (confirm('¿Deseas vaciar todo el carrito?')) {
        carrito = [];
        actualizarCarrito();
        mostrarNotificacion('Carrito vaciado');
    }
}

// Función para actualizar el carrito en localStorage y en la pantalla
function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para actualizar el resumen del pedido
function actualizarResumen() {
    // Calculamos totales
    const cantidadItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);

    // Actualizamos los elementos HTML
    document.getElementById('cantidad-items').textContent = cantidadItems;
    document.getElementById('subtotal').textContent = `$${subtotal}`;
    document.getElementById('total-final').textContent = `$${subtotal}`;
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        mostrarNotificacion('⚠️ Tu carrito está vacío');
        return;
    }

    const total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    
    // Simulamos la compra
    if (confirm(`¿Confirmar compra por un total de $${total}?`)) {
        mostrarNotificacion('✅ ¡Compra realizada con éxito! Gracias por tu compra');
        carrito = [];
        actualizarCarrito();
        
        // Redirigimos a la tienda después de 2 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.classList.add('mostrar');
    }, 10);
    
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 3000);
}

// Mostramos el carrito al cargar la página
mostrarCarrito();
