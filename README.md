# 🛒 Carrito de Compras - Librería Tech

![Nivel: Principiante](https://img.shields.io/badge/Nivel-Principiante-green)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

¡Bienvenido/a al proyecto de **Carrito de Compras**! 🎉 Este es un proyecto educativo perfecto para **principiantes** que quieren aprender desarrollo web con **HTML, CSS y JavaScript puro** (sin frameworks).

En este proyecto, crearás una tienda online de libros de programación donde los usuarios pueden:
- 📚 Ver un catálogo de productos
- 🛒 Agregar libros al carrito
- ➕➖ Aumentar o disminuir cantidades
- 🗑️ Eliminar productos
- 💰 Ver el total de la compra
- ✅ Finalizar la compra

## 🎯 ¿Qué aprenderás?

Este proyecto es ideal para practicar:

### HTML
- Estructura semántica de páginas web
- Uso de etiquetas modernas (header, main, footer, section)
- Navegación entre páginas
- Organización de contenido

### CSS
- Variables CSS para colores y estilos reutilizables
- Flexbox y CSS Grid para layouts modernos
- Diseño responsive (adaptable a móviles y tablets)
- Animaciones y transiciones
- Efectos hover y transformaciones
- Importación de fuentes de Google Fonts

### JavaScript
- Manipulación del DOM (Document Object Model)
- Eventos y funciones
- Arrays y objetos
- LocalStorage para persistencia de datos
- Funciones de array (forEach, find, reduce)
- Operador spread (...)
- Template literals
- Creación dinámica de elementos HTML

## 📁 Estructura del Proyecto

```
carrito/
│
├── index.html          # Página principal con todos los productos
├── carrito.html        # Página del carrito de compras
│
├── productos.js        # Array con todos los productos de la tienda
├── script.js           # Lógica para mostrar productos y agregar al carrito
├── carrito.js          # Lógica para gestionar el carrito
│
├── styles.css          # Todos los estilos del proyecto
└── README.md           # Este archivo (documentación)
```

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Abrir directamente
1. Descarga todos los archivos en una carpeta
2. Haz doble clic en `index.html`
3. ¡Listo! La tienda se abrirá en tu navegador

### Opción 2: Con Live Server (recomendado)
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"
4. Los cambios se actualizarán automáticamente

## 🎨 Características del Diseño

### ✨ Interfaz Moderna
- Diseño con gradientes y sombras
- Colores vibrantes y profesionales
- Tipografía Poppins de Google Fonts
- Iconos con emojis (sin necesidad de librerías)

### 📱 Totalmente Responsive
- Se adapta perfectamente a móviles
- Se ve bien en tablets
- Optimizado para escritorio

### 🎭 Animaciones Suaves
- Transiciones al hacer hover
- Animaciones de entrada de productos
- Notificaciones deslizantes
- Efectos en botones

## 🛠️ Funcionalidades Implementadas

### Página Principal (index.html)
- ✅ Catálogo de 8 libros de programación
- ✅ Tarjetas con imagen, título, descripción y precio
- ✅ Botón para agregar al carrito
- ✅ Contador de productos en el carrito
- ✅ Notificaciones cuando agregas productos

### Página del Carrito (carrito.html)
- ✅ Lista de todos los productos agregados
- ✅ Controles para aumentar/disminuir cantidad
- ✅ Botón para eliminar productos individuales
- ✅ Resumen con total de la compra
- ✅ Botón para finalizar compra
- ✅ Botón para vaciar todo el carrito
- ✅ Mensaje cuando el carrito está vacío

## 📚 Conceptos Clave Explicados

### LocalStorage
```javascript
// Guardar datos en el navegador
localStorage.setItem('carrito', JSON.stringify(carrito));

// Recuperar datos del navegador
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
```
**¿Qué hace?** Guarda el carrito en el navegador para que no se pierda al recargar la página.

### Manipulación del DOM
```javascript
// Crear un elemento HTML
const card = document.createElement('div');

// Agregar contenido HTML
card.innerHTML = `<h3>${producto.nombre}</h3>`;

// Agregarlo a la página
contenedor.appendChild(card);
```
**¿Qué hace?** Crea elementos HTML dinámicamente con JavaScript.

### Array Methods
```javascript
// find: buscar un producto
productos.find(item => item.id === 1);

// reduce: calcular el total
carrito.reduce((total, item) => total + item.precio, 0);

// forEach: recorrer cada producto
productos.forEach(producto => { ... });
```
**¿Qué hace?** Métodos poderosos para trabajar con arrays.

## 🎯 Ejercicios para Practicar

¿Quieres mejorar el proyecto? Intenta estos desafíos:

### Nivel Fácil 🟢
- [ ] Cambiar los colores del diseño
- [ ] Agregar más productos al catálogo
- [ ] Cambiar las imágenes por otras de Unsplash
- [ ] Modificar los precios

### Nivel Intermedio 🟡
- [ ] Agregar un buscador de productos
- [ ] Implementar filtros por precio
- [ ] Agregar categorías de productos
- [ ] Crear una página de "favoritos"

### Nivel Avanzado 🔴
- [ ] Agregar un formulario de checkout
- [ ] Implementar códigos de descuento
- [ ] Guardar el historial de compras
- [ ] Agregar más de una imagen por producto

## 📖 Recursos para Aprender Más

- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [CSS Grid Garden](https://cssgridgarden.com/) - Aprende CSS Grid jugando
- [Flexbox Froggy](https://flexboxfroggy.com/) - Aprende Flexbox jugando

## 🖼️ Imágenes

Las imágenes utilizadas provienen de [Unsplash](https://unsplash.com/), un sitio con imágenes gratuitas y sin derechos de autor. Puedes reemplazarlas fácilmente modificando la URL en `productos.js`.

## 💡 Tips para Principiantes

1. **Lee el código con calma**: Cada línea tiene un comentario explicando qué hace
2. **Experimenta**: Cambia valores y ve qué pasa
3. **Usa la consola del navegador**: Presiona F12 para ver errores
4. **Practica**: Intenta recrear partes del proyecto desde cero
5. **Pregunta**: Si no entiendes algo, busca en Google o pregunta en comunidades

## 🐛 ¿Encontraste un Error?

Si algo no funciona:
1. Abre la consola del navegador (F12)
2. Busca mensajes de error en rojo
3. Verifica que todos los archivos estén en la misma carpeta
4. Asegúrate de que los nombres de archivo sean correctos

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu funcionalidad
   ```bash
   git checkout -b mejora-increible
   ```
3. Haz commit de tus cambios
   ```bash
   git commit -m "Agregué una funcionalidad increíble"
   ```
4. Envía un pull request

## 📬 Contacto

**Autora**: Veronica Bar  
**Email**: dv.veronica2075@gmail.com  
**GitHub**: [VBDeveloper2075](https://github.com/VBDeveloper2075)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para aprender y practicar.

---

### 🌟 ¡Gracias por usar este proyecto!

Si te sirvió para aprender, considera darle una ⭐ en GitHub.

**¡Feliz codificación!** 🚀👨‍💻👩‍💻
