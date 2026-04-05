# Práctica 7 - App de Películas con React
## Proyecto individual por:
- Vargas Flores Katia Paola
  
## Objetivo
Desarrollar una Aplicación web con React y Vite que consume una API de películas y muestra un listado y el detalle de cada película.

## Tecnologías utilizadas
- React
- Vite
- React Router DOM
- CSS
- GitHub
- Netlify

## Instalación
npm create vite@latest . -- --template react
npm install
npm install react-router-dom
npm run dev

## Rutas
- /
- /movies/:movieId
  
## API utilizada
https://api.themoviedb.org/

## Descripción de funcionamiento

1. Al abrir la aplicación se muestra un encabezado con el título **Películas**. 
Y un pié de página mostrando los datos principales del desarrollador
 - Alumno
 - Maestro
 - Materia
 - Ciclo escolar
 - Mes/Año
 - Logo de la Universidad

2. El usuario puede navegar entre las diferentes rutas definidas en `AppRouter`:
   - `/` → Página principal con listado de películas.
   - `/movies/movie:id` → Página con información detallada de la película seleccionada.


3. La aplicación consume la API de [The Movie DB](https://www.themoviedb.org/) para obtener datos actualizados.

4. El usuario puede mover el cursor encima de las películas y puede observar un cambio mínimo en su presentación para indicar que puede ser seleccionado.

5. Al seleccionar la película, redirigirá al usuario a una diferente página donde se mostrará el título de la película, el género y su descripción.

## Links
GitHub: https://github.com/KatiaVargas/practica7-react-peliculas.git
Netlify: https://p7-react-peliculas.netlify.app/movies/687163

## Conclusiones
Desarrollar este proyecto me ha dado bastante problemas al principios, más que nada por el nuevo manejo con las APIs
Al principio seguía los pasos del videos combinados con los pasos solicitados en el documento, aún si me daba bastante problemas de avanzar, de ahí me di cuenta la diferencia en ambas formas de hacer el proyecto, más que nada por las actualizaciones.

Pero de ese error y reinicio de la práctica, pude acoplarme mejor al funcionamiento, cómo organizar cada parte, cómo llamar otros archivos, coincidencias, el uso del GET de forma más eficiente así como el manejo de las variables de entorno para mantener segura la llave API, uso de console logs para saber qué partes específicas llamar para implementar las películas

Fue un proyecto muy interesante
