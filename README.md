<div align='center'><img style="width:30%" src='h'/></div>

<h2>Beinerth Chitiva M. - Prueba Técnica</h2>

<p>Prueba Técnica desarrollada por <b>Beinerth Chitiva M.</b>
para Grupo Mok. Inicié el creando la aplicación con npx-create-react-app. Luego eliminé el código boilerplate y
edité la metadata de la App (Título, Fonts, Favicon).
Luego creé la estructura del proyecto, que serían las carpetas de
(componentes, imagenes, páginas...) pero este es un proyecto pequeño, así que sólo tiene la carpeta de componentes.
Ahí inicié con el desarrollo del proyecto y los puntos pedidos.</p>

👉 Live Demo: <a href='https://beinerthchitivam-grupomok.vercel.app/'>Live Demo</a> <br>
👉 Mi Portafolio Web: <a href='https://beinerthchitiva-portfolio.vercel.app/'>Live Demo</a>

<h3>Proyecto Desarrollado Con:</h3>

» ReactJS <br>
» Javascript, HTML, CSS

<h2>Puntos:</h2>
<br>

<h3>Punto #1.)</h3>
<p>Creé el layout principal de los componentes de Topbar, FilterBar, Users y Footer.
Junto con sus estilos responsive.
En Users.jsx utilizando axios hice el fetch de los 100 usuarios a la API https://randomuser.me.
Luego paso los usuarios recibidos como State al componente Users.
</p>

<h3>Punto #2.)</h3>
<p>Creo una tabla tal como la pidieron, llenandola con la información recibida de la API.
Una tabla creada con HTML semántico para que incluso los usuarios que necesitan accesibilidad
puedan navegar fácilmente por la aplicación.
Le puse estilos propios, responsive, utilizando el color principal del logo de Grupo MOK para
tener un color scheme a través del UI. Basado en ese color y sus tonalidades.
</p>

<h3>Punto #3.)</h3>
<p>El botón que colorea las filas está en FilterBar, así que desde App.js manejo el estado booleano de si las filas ya están coloreadas o no para manejar los estilos. Desde App.js paso el State de isColored a Users y FilterBar, para que desde FilterBar se maneje la funcionalidad
y los estilos se ven aplicados en Users, donde está la tabla. Estos estilos se aplican a través de clases dinámicas, haciéndole un map al array de usuarios y coloreando dependiendo si el usuario está en una fila Par o Impar, también teniendo en cuenta los colores dados.
</p>

<h3>Punto #4.)</h3>
<p> Esta funcionalidad es compartida con otro punto más adelante. Entonces para que no hayan errores de lógica, en App tenemos el State de si la tabla está ordenada o no. (Además, todos los puntos de ordenar los hice con la siguiente lógica:
    Si ya se ordenó de la A-Z y se vuelve a dar click, se ordena de la Z-A)
Teniendo esto en cuenta, desde FilterBar si se da click en el botón, se ordena tanto de la A-Z como de la Z-A, compartiendo el State con el Header de la Tabla. De esta manera se pueden ordenar alfabéticamente por país desde ambos lugares, manteniendo un orden lógico.
</p>

<h3>Punto #5.)</h3>
<p> Cada Fila de la tabla de usuarios se Render Dynamically, así que cada Fila tiene su botón para eliminar un Usuario. Esta funcionalidad propia de la Tabla de Usuarios está en Users.jsx. Ya que se conecta con otro punto más adelante también, cada vez que elimino un usuario, lo elimino de la tabla y lo añado a un State manejado desde App que es un Array con todos los usuarios eliminados.
</p>

<h3>Punto #6.)</h3>
<p> Esta funcionalidad está conectada con el punto anterior. Así que cada vez que se elimina un usuario, este es añadido a un State manejado desde App.js. El botón de restaurar está en FilterBar, así que allí creé una función que ocurre cuando se le da click al botón. Esta lo que hace es actualizar la lista, restaurando los usuarios eliminados y poniéndolos en la cima de la tabla, al concatenar dos arrays. UsuariosEliminados y Usuarios. Por último, esta función vacía el Array, para que no se restaure un Usuario que ya fue restaurado, por lógica.
</p>

<h3>Punto #7.)</h3>
<p> Este proyecto aunque parezca sencillo a simple vista, es propenso a bugs. Considero que mi aplición está libre de bugs. Ninguna funcionalidad entorpece a otra o va en contra de su lógica. Incluso el ordenar alfabéticamente desde dos lugares diferentes tiene un concepto de React claro, y es el que haya una sola fuente de verdad. Esto lo logramos a través del orderCountry State y que lo comparten los dos Componentes que necesitan de esta fuente de verdad.
</p>

<h3>Punto #8.)</h3>
<p> Asumo que este es el punto del TextArea, en este caso, la funcionalidad está en FilterBar. Donde recibimos el input del usuario y utilizo tres funciones para esta funcionalidad.
    handleFilterChange; recibe el input del usuario con cada cambio que se hace y va filtrando dependiendo del input. Cuando se elimina todo del textarea, se para el proceso de filtrar.
    handleFilter; aquí esta la logica del proceso de filtrar tomando todos los usuarios y su país como parámetro del filtro.
    handleFilterTextAreaFocus, con esta función me cercioro de que cuando estoy adentro del textarea, el proceso de filtrar está activo.
</p>

<h3>Punto #9.)</h3>
<p> Asumo que este punto es en referencia a que desde dos lugares diferentes se pueda ordenar la tabla alfabéticamente por el país. Como mencioné anteriormente, esto lo logramos a través del orderCountry State y que lo comparten los dos Componentes que necesitan de esta fuente de verdad.
</p>

<h3>Punto #10.)</h3>
<p> Desde Users creo un onClick en cada Table Header para Nombre, Apellido y País. Así como su respectiva función con la lógica de ordenar necesaria. Como mencioné anteriormente, si se da click una vez, se ordena de manera Ascendente o A-Z, si se da click de nuevo se ordena de manera Descendente o Z-A.
</p>

<h3>Conclusiones / Notas</h3>
<p> La mayoría de lógica la desarrollé en inglés, más que todo por costumbre porque soy bilingue. Pero no tengo problema con programarlo todo en español jejeje.
Además en cuanto a estilos no estaba seguro si debía ser exactamente igual o no, así que me tomé la libertad de usar el color principal del logo de Grupo Mok para el color scheme de la aplicación.
</p>