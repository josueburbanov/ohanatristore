# Ohana: Tienda de Triatlón

Proyecto creado para el curso de React.js de Coderhouse

## Entrega Intermedia

Mi proyecto se trata de una tienda online de venta de artículos de triatlón.
Las categorías de productos son por ahora: triatlón y ciclismo. He generado items aleatorios en cada categoría y les he puesto una imagen genérica.

He utilizado para Tailwinds para el styling.

No he utilizado componentes externos ni dependencias externas a parte de las explicadas en clase.

Se utiliza BrowserRouter para navegar entre secciones:
 - Home
 - Triatlón
 - Ciclismo
 - Detalle de cada ítem

Cuando se desplegan las secciones de Triatlón y Ciclismo aparecen los items de cada sección. Cada Item es un componente aparte y permite interactuar con
la cantidad de artículos a comprar y el stock (solo visualmente nada de POST o PUT a la base). También está conectada la canasta de compras con cada adición de un item o items.

Se utiliza una api para simular la base de datos. https://retoolapi.dev/63WBBZ/data/

La lógica general es traer los datos (fecth) en los contenedores de cada componente y repartirlos según la necesidad de la vista.
Realizado por: Josue Burbano
