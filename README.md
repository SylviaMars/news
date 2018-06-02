# Página de noticias

Enlace a la página: https://rawgit.com/kenzo98/news/master/Portada.html


```Últimas modificaciones y agregaciones```:

- Etiquetas meta descriptivas, palabras clave y título más descriptivo de la página (también he añadido las Open Graph).

- Rss.Xml 

- Favicon con el icono de la página.

- Las páginas de noticias se ven correctamente en cualquier formato (no estaba enlazado correctamente con el css responsive).

- He cambiado la función de cargar (onclick). Ya no se llama en el html.

- He cambiado los json y las funciones  de cargar página de modo que las noticias se cargan de dos en dos. De esta manera al hacer el addrow puedo dividirlo en columnas de 6 Seleccionando el item por cada iteración 
(me parecía la manera más sencilla de corregir ese defecto).

- He modificado la mayoría de los iconos o imágenes para que no ocupen tanto. 

- Botón para desactivar el scroll (debajo del iframe de twitter).

```Inspiración```

Mi idea era hacer una página de noticias inspirada en la página oficial de Fallout (actualmente renovada por el anuncio de un nuevo juego):
https://fallout.bethesda.net/

La mayoría de los elementos: tipo de fuente, background, colores, cabecera, etc. estaban inspirados en esa versión anterior.
Las imagenes se han retocado mediante Photoshop, sobretodo para cambiar tamaños. A otras les he añadido elementos (publicidad, iconos, jumbotron,...).

```Estructura de la página principal```: 

# Barra de navegación fija

Con un logotipo, páginas de enlaces internas y externas y un formulario de acceso.

# Jumbotrón

Sólo aparece en la versión escritorio. Inspirado en los de la página oficial y con efecto ruido. Tenía intención de añadirle una animación (granulado o ruido blanco) mediante css pero actualmente está deshabilitado debido a que no he conseguido encajarlo en el div.

# Cabecera

A modo de separación y como título de las noticias. Este también está inspirado en la página oficial.

# Publicidad

A la derecha como indica el enunciado y con una función para cambiar las imágenes. Al pasar a tamaño responsive la publicidad aparece abajo fija.

# Noticias

Cada noticia se encuentra en un thumbnail con las especificaciones del enunciado. Tienen un hover para destacarlas al pasar el ratón.
Las imagenes poseen el mismo tamaño a fin de que tengan el mismo aspecto.

# Columna lateral

Aquí se encuentra el banner del anuncio. Para rellenar con contenido he añadido un iframe con las noticias de twitter de la página oficial, encajando el formato para que no desentone. 
También he añadido el botón de desactivar el scroll en esta columna para que sea más visible (al lado del scroll) pero que a la vez no moleste visualmente.
Esta columna lateral desaparece al cambiar a tamaño responsive.

# footer
Contiene los elementos de la página oficial (política, iconos). Así como iconos de enlaces a las diferentes plataformas del juego y redes sociales (página de Facebook y Youtube).

[embed]https://rawgit.com/kenzo98/news/master/NuevoDocumento%205_1.pdf[/embed]

```Estructura de la página de la noticia```

La estructura es exáctamente la misma que la de la página principal pero cambiando el container por un sólo thumbnail.
Este no tiene hover ni sombras como la página principal, creo que así quedaba más limpio.

```Funciones de la página```

- Todos los iconos están enlazados a las páginas de referencia. 

- Las dos funciones de cargar noticias funcionan. He añadido una variable booleana para desactivar mediante el botón la funcion scroll. Como utilizo la misma función y la variable scroll por defecto es true, he añadido otra variable para que al cambiarla a false no afecte a esas funciones.

- He cambiado el botón que tenía pensado originalmente para cargar las noticias por una imagen, esta tiene un título "Cargar más noticias" que se activa al pasar el ratón. Al llegar al final de la página cambia a "No hay más noticias".


