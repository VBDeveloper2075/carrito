// Obtenemos el contenedor donde se mostrarán los productos
const contenedorProductos = document.getElementById('productos');

// Recorremos cada producto del array y creamos su tarjeta HTML
productos.forEach((producto) => {
    // Creamos un div para cada producto
    const card = document.createElement('div');
    card.classList.add('card');

    // Agregamos animación de aparición
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    // Insertamos el HTML de la tarjeta con toda la información del producto
    card.innerHTML = `
        <div class="card-image">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="card-badge">Nuevo</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-description">${producto.descripcion}</p>
            <div class="card-footer">
                <span class="card-price">$${producto.precio}</span>
                <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
                    Agregar 🛒
                </button>
            </div>
        </div>
    `;

    // Agregamos la tarjeta al contenedor
    contenedorProductos.appendChild(card);

    // Animación de entrada después de un pequeño delay
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
});

// Obtenemos el carrito del localStorage o creamos uno vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    // Buscamos el producto por su id
    const producto = productos.find((item) => item.id === id);
    
    // Verificamos si el producto ya está en el carrito
    const productoEnCarrito = carrito.find((item) => item.id === id);

    // Si ya existe, aumentamos la cantidad
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        // Si no existe, lo agregamos con cantidad 1
        carrito.push({ ...producto, cantidad: 1 });
    }

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Mostramos una notificación bonita
    mostrarNotificacion(`✅ ${producto.nombre} agregado al carrito`);
    
    // Actualizamos el contador del carrito
    actualizarContadorCarrito();
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    // Creamos el elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    
    // Lo agregamos al body
    document.body.appendChild(notificacion);
    
    // Lo mostramos con animación
    setTimeout(() => {
        notificacion.classList.add('mostrar');
    }, 10);
    
    // Lo ocultamos después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 3000);
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contadorElement = document.getElementById('contador-carrito');
    if (contadorElement) {
        // Sumamos todas las cantidades de los productos
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        contadorElement.textContent = totalItems;
        
        // Agregamos animación al contador
        contadorElement.style.transform = 'scale(1.3)';
        setTimeout(() => {
            contadorElement.style.transform = 'scale(1)';
        }, 300);
    }
}

// Actualizamos el contador al cargar la página
actualizarContadorCarrito();
