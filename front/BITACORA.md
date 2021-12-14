
## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install` o `yarn`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install` o `yarn`
3. Regresa al directorio root `cd ..`.

`npm run dev` o `yarn run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

## Resolución de problema

- [Patrón Arquitectónico de Capas / Layers](https://platzi.com/tutoriales/1248-pro-arquitectura/5439-patron-arquitectonico-de-capas-layers/): este patrón de
arquitectura me permitió crear toda distribución jerárquica de las
carpetas y archivos donde cada elemento se encarga de lo que le
corresponde, esto mejora la mantenibilidad y escalabilidad del
proyecto.

- Axios: esta librería me quedo perfecta para el manejo de todas las
peticiones a la api ya que las respuesta que regresa son super fáciles
de procesar

- Sass: este preprocesador me permite modularizar todos los estilos
css para así mantener un orden y mejorar la optimización del mismo.

- Context API: este me permite manejar el estado de toda la aplicación.
