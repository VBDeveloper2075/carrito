Carrito de Compras en JavaScript Vanilla 🛒
¡Bienvenido/a al Carrito de Compras en JavaScript Vanilla! Este proyecto es una aplicación web sencilla que permite a los usuarios agregar productos a un carrito de compras, modificar cantidades y eliminar productos, todo ello utilizando JavaScript puro, sin frameworks adicionales.

🎯 Funcionalidades
Listado de Productos: Visualiza una selección de productos disponibles para comprar.

Agregar al Carrito: Añade productos al carrito haciendo clic en el ícono correspondiente en cada tarjeta de producto.

Modificar Cantidades: Incrementa o reduce la cantidad de cada producto en el carrito mediante botones "+" y "-".

Eliminar Productos: Quita productos del carrito según tus preferencias.

Persistencia de Datos: Los productos en el carrito se almacenan en localStorage, manteniendo la información incluso al recargar la página.

Cálculo de Total: Muestra el total acumulado basado en los productos y cantidades seleccionadas.

🛠️ Tecnologías Utilizadas
HTML5: Estructura y contenido de las páginas web.

CSS3: Estilos y diseño visual (opcional).

JavaScript Vanilla: Lógica de la aplicación y manipulación del DOM.

LocalStorage: Almacenamiento local para persistencia de datos en el navegador.

📁 Estructura del Proyecto
index.html: Página principal que muestra los productos disponibles.

carrito.html: Página donde el usuario visualiza y gestiona su carrito de compras.

productos.js: Archivo que contiene el listado de productos en formato de array de objetos.

script.js: Lógica para generar dinámicamente los productos en index.html y agregar productos al carrito.

carrito.js: Lógica para mostrar y manipular los productos en carrito.html, permitiendo modificar cantidades y eliminar productos.

styles.css: (Opcional) Estilos CSS para mejorar la apariencia de la aplicación.

🚀 Cómo Ejecutar el Proyecto
Descarga o Clona este repositorio en tu computadora:

bash
git clone https://github.com/tuusuario/carrito-de-compras-js.git
Abre el archivo index.html en tu navegador web preferido:

Navega hasta la carpeta del proyecto.

Haz doble clic en index.html o abre el archivo desde el navegador.

Interactúa con la aplicación:

Explora los productos disponibles.

Haz clic en el botón "Agregar al carrito 🛒" para seleccionar productos.

Navega al carrito mediante el enlace "Ver Carrito" o directamente abriendo carrito.html.

En el carrito, ajusta las cantidades con los botones "+" y "-", o elimina productos.

Observa cómo el total se actualiza dinámicamente según tus selecciones.

📝 Paso a Paso del Proyecto
1. Crear la Página Principal (index.html)
Muestra todos los productos disponibles.

Cada producto se genera dinámicamente y tiene un botón para agregar al carrito.

2. Definir los Productos (productos.js)
Contiene un array de objetos, cada uno representando un producto con id, nombre, precio e imagen.

3. Generar los Productos en la Página (script.js)
Lee el array de productos y crea las tarjetas en index.html.

Implementa la función agregarAlCarrito(id) para manejar la adición de productos al carrito y almacenarlos en localStorage.

4. Crear la Página del Carrito (carrito.html)
Visualiza los productos agregados al carrito.

Permite modificar cantidades y eliminar productos utilizando botones interactivos.

5. Manejar la Lógica del Carrito (carrito.js)
Carga el carrito desde localStorage.

Funciones principales:

mostrarCarrito(): Renderiza los productos en el carrito.

cambiarCantidad(indice, cantidad): Ajusta la cantidad de un producto.

eliminarProducto(indice): Elimina un producto del carrito.

totalCarrito(): Calcula y muestra el total acumulado.

6. Estilos Visuales (styles.css - Opcional)
Aplica estilos para mejorar la interfaz de usuario.

Estiliza las tarjetas de productos, botones y layout general.

🎨 Personalización
Agregar más productos: Edita productos.js para modificar el catálogo.

Diseño: Ajusta styles.css o añade nuevas clases para cambiar la apariencia.

Funcionalidades Adicionales:

Integrar un sistema de usuarios y autenticación.

Conectar con una base de datos o backend para gestionar inventario y pedidos.

Implementar notificaciones al usuario o una barra de búsqueda.

🤝 Contribuciones
¡Tu colaboración es bienvenida! Si deseas mejorar o ampliar este proyecto:

Haz un fork del repositorio.

Crea una rama para tu funcionalidad:

bash
git checkout -b nueva-funcionalidad
Realiza tus cambios y commits .......

bash
git commit -m "pongo nueva funcionalidad X"
Envía un pull request para revisar tus cambios.

📄 Licencia
Este proyecto se distribuye bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.

📢 Agradecimientos
A ti, por participar en este proyecto y contribuir al código abierto.

A las comunidades y recursos en línea que facilitan el aprendizaje y desarrollo web.

📬 Contacto
Autor: veronica Bar

Email: dv.veronica2075@gmail.com

¡Gracias por interesarte en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme. ¡Feliz codificación! 🎉

