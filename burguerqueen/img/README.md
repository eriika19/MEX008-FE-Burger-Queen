# Burger Queen

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)
* [7. Autoevaluación](#7-autoevaluación)

***

## 1. Preámbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/) 
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

# BurgerQueen

Nos contactó una cadena de comida rápida vegana para que contruyamos una interfaz
para optimizar toma de pedidos y administración dentro de sus locales establecidos.

Este proyecto supone un reto mayor a los que te has enfrentado ya que abarca la fase
de producción y las áreas de UX y Front End deben colaborar y trabajar juntas, así
como coordinar los requerimientos de tu cliente y de tus usuarios.

**Sobre el diseño**
El restaurante Pan D'Monium tiene el objetivo de estandarizar la forma de tomar pedidos y que eso se refleje en el tiempo de entrega tanto en sucursal para
posteriormente implementarlo en el resto de la cadena, así también facilitar la
cobranza e impactar el trabajo en cocina.

Para lograr esto debes de entender el funcionamiento total del negocio, todo el
flujo, los puntos de interacción y el rol de cada uno de los stakeholders que
participan en el proceso. Para ello deberás prestar mucha atención a la
investigación realizada por el equipo de UX design, sus *insights* y *findings*. 
Así como dar feedback necesario sobre esos puntos. 
El restaurante se encuentra en Av. Chilpancingo 129, Roma Sur y el nombre de tu
contacto es Aurora. 

Durante el proceso vas a estar en constante comunicación con tu equipo de UX Designers para resolver dudas y decisiones de diseño así como negociar los alcances del proyecto tanto con tu cliente como con tu equipo. Tu prioridad en este caso debe equilibrar tres puntos: Aprendizaje, Colaboración, Calidad del producto, no dejes de darle el seguimiento y la importancia hasta su implementación y presentación final. 

## 3. Objetivos de aprendizaje

1. El objetivo principal de es aprender a construir una _interfaz web_ usando
   el _framework_ elegido (React, Vue o Angular). Todos estos frameworks de
   Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado
   sincronizados**. Así que esta experiencia espera familiarizarte con el
   concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un
   _producto_ a un _pedido_, la interfaz debe actualizar la lista del pedido y
   el total).

2. Como objetivo secundario, deberás seguir las recomendaciones para PWAs
   (_Progressive Web Apps_), lo cual incluye conceptos como **offline**. Para
   guiarte con respecto a este tema te recomendamos usar [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es),
   que es una herramienta de Google que nos ayuda a asegurar que nuestras web
   apps sigan "buenas prácticas". De hecho, usaremos Lighthouse a la hora de
   evaluar el proyecto.

3. Finalmente, la interfaz debe estar diseñada específicamente para correr en
   el/los dispositivo/s que mejor se acomode a las necesidades del cliente.
   **Nota**: *esto debe ser validado con tu equipo de UX*.

Tópicos: _react_, _angular_, _vue_, _pwa_, _offline-first_, _service-worker_.


### Requerimientos

- Entender cómo se realizan los pedidos en Pan D'Monium y cuáles son las necesidades del personal de cocina y del personal de atención al público (meser@s y cajer@s).
  - Ideal si dentro de la investigación toman fotos de las formas en que se toman pedidos actualmente.
- Diseñar la versión para tablets de esta aplicación, teniendo en cuenta el modo de uso de esta tablet (por ej. El uso de la pantalla táctil) y los distintos tipos de usuarios.
  - El diseño se debe adaptar a dos tamaños de tablets 9.7 y 7 pulgadas.
  - Crear un ícono para poder agregar la pantalla al home de la tablet. Puedes usar [appicon](https://appicon.co/#app-icon) y     agregar las especificaciones para   el equipo de desarrollo.
- El estado actual del pedido siempre visible mientras tomamos un pedido.
- Necesitamos hacer una web app, así será accesible y funcionará bien en tablets iOS y Android.
- Testear e iterar los diseños con personal del restaurante.
- Entregar las especificaciones de diseño al equipo de desarrollo en Figma, Zeplin ó XD.
- Hacer seguimiento y QA a la implementación realizada por el equipo de desarrollo.
- Realizar pruebas de usabilidad de la aplicación web al final de cada entrega del equipo de desarrollo.


### Momentos Importantes

- Kick off del proyecto en el que conocerás a tu squad integrado por UX Designers y FE Developers, tendrás que coordinarte con ellas y establecer flujos de trabajo.
- [UX] Establecer contacto con el restaurante.
- [UX] Al final de la primer semana hay un check in con el cliente.
- [UX] Al final de la segunda semana hay una demo de soluciones y prototipos.
- Al final de la tercer y cuarta semana hacer check in del alcance técnico con tu squad de FE Developers.
- Al final de la quinta semana será la de Demo Final de la totalidad del proyecto.

------

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)


## 4. Consideraciones generales

Este proyecto se debe "resolver" en equipos.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://reactjs.org/), [Vue](https://vuejs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

En este proyecto podrás usar _firebase_ u otros servicios como backend. 
Deberán acordar cuál será la estructura de los datos y su permanencia.

Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### Definición del productos

Considerando la investigación de UX, deberán crear las historias de usuario que respondan a las necesidades encontradas y soluciones propuestas. 

Cada historia debe estar compuesta por la _definición de la historia_, sus _Criterios de Aceptación_ y sus _Definiciones de terminado_. 

Te dejamos esta Historia de Usuario que te puede servir como ejemplo o guía. **Nota:** _tu producto no necesariamente tiene que implementar esta historia._ 


***

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Procede a configurar/instalar el framework que hayan decidido usar.
  
    Para el caso de **React.js**, **Vue.js** y **Angular**, cada uno tiene
  su propio proceso de instalación, y ahora también cada uno tiene una 
  herramienta de líneas de comando (CLI) que tiene automatizada las instalación
  y configuración inicial de un proyecto nuevo y hará que este proceso
  sea más sencillo. 
  
    - [Create React APP](https://create-react-app.dev/docs/getting-started)
    - [Vue.js CLI](https://es-vuejs.github.io/vuejs.org/v2/guide/installation.html#CLI)
    - [Angular CLI](https://angular.io/cli)

2. Recuerda inicializar tu proyecto con para subirlo a GitHub
    ```sh
    git init
    ```
    Te recomendamos subir una versión inicial que contenga tu primer README.md y 
    los archivos generados por el CLI de tu framework.

    Luego crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:`

   ```sh
   git checkout -b develop
   ```

3. Crear proyecto en [Firebase](https://firebase.google.com/)

4. Habilitar Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

5. Instalar utilidad de línea de comando de Firebase:

   ```sh
   npm i -g firebase-tools
   ```

7. Agregamos entorno de producción para desplegar:

   ```sh
   firebase use --add
   ```

8. Desplegar: `firebase deploy`

9. Llegado a este punto ya puedes comenzar con el _front-end_ :wink:

***



### Otros recursos

#### Frameworks / libraries

* Documentación de [React](https://reactjs.org/), también se encuentra la versión de [React en español](https://es.reactjs.org).
* Documentación de [Vue](https://vuejs.org/)
* Documentación de [Angular](https://angular.io/)

#### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

#### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

#### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

#### Cloud functions

* [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)


## 7. Autoevaluación

NOTA: Esta sección incluye una lista de habilidades que se podrán tener en
cuenta a la hora de evaluar el proyecto. Los niveles esperados son _sugerencias_
así como _guías_ en el diseño curricular, pero no reglas absolutas.

Te aconsejamos revisar [nuestra rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Te
recomendamos también que trates de aplicarte la rúbrica a tí misma y/o a los
proyectos de tus compañeras a lo largo del Bootcamp para ir viendo tu evolución.

### Habilidades Blandas (Soft Skills)

| Habilidad                                       |
|-------------------------------------------------|
| Planificación, organización y manejo del tiempo |
| Autoaprendizaje                                 |
| Presentaciones                                  |
| Adaptabilidad                                   |
| Solución de problemas                           |
| Trabajo en equipo                               |
| Responsabilidad                                 |
| Dar y recibir feedback                          |
| Comunicación eficaz                             |

### Habilidades Técnicas (Front-end)

| Habilidad                               |
|-----------------------------------------|
| **Computer Science (CS)**               |
| Lógica / Algoritmia                     |
| Arquitectura                            |
| **Source Code Management (SCM)**        |
| Git                                     |
| GitHub                                  |
| **JavaScript**                          |
| Estilo (linter js)                      |
| Nomenclatura / semántica                |
| Uso de funciones / modularidad          |
| Estructuras de datos                    |
| Tests                                   |
| **HTML/CSS**                            |
| Correctitud / Validación                |
| Estilo (linter html)                    |
| Semántica / Arquitectura de información |
| DRY (CSS)                               |
| Responsive Web Design                   |

### Habilidades Técnicas (UX)

| Habilidad       |
|-----------------|
| User Centricity |
| Visual Design   |

***

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,
  ...).

### Lighthouse (opcional)

* [ ] 80% o más en sección _Performance_.
* [ ] 80% o más en sección _Progressive Web App_.
* [ ] 80% o más en sección _Accessibility_.
* [ ] 80% o más en sección _Best Practices_.

### Tests

* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.

### UX

* [ ] Se _ve_ bien y _funciona_ bien en los dispositivos acordados.
* [ ] Se puede _agregar a la pantalla de inicio_ como web app (tiene manifest,
  íconos, ...) en iOS y Android.
* [ ] Uso fácil en pantallas táctiles (touch screens).
* [ ] Estado actual del pedido siempre visible mientras tomamos un pedido.

