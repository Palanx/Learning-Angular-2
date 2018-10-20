# Learning-Angular
Repositorio dedicado a desarrollar proyectos para aprender Angular2

## 1. QuickStart
Es un tutorial realizado de [QuickStart Angular](https://angular.io/docs/ts/latest/guide/setup.html).

**Pasos a seguir:**
```
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
npm install concurrently -g
npm install lite-server -g
npm install typescript -g
```
**Solucionar errores:**
+ Agregar ```"@types/node": "^6.0.46","@types/jasmine": "2.5.36",``` a archivo **package.json** en lines 35 y luego agregar ```import {} from '@types/jasmine';``` en todos los archivos que tire error por falta de import.
```
npm install zone.js@0.8.5 --save
npm start //(Tiene que ser por cmd.exe por que PowerShell cago desde el 01-06-17)
```
<hr>

## 2. SPA
Proyecto creado con Angular CLI, instalar [Angular CLI](https://github.com/angular/angular-cli).

**Pasos a seguir:**
```
ng new SPA
cd SPA
npm install
npm install --only=dev //para que instale los modulos de desarrollo
ng serve
```
### Tips
Para generar componentes con AngularCLI: (la raiz es la carpeta **./src/app**)
```
ng generate component [Path]
np g c [Path]
```
Agregar Bootstrap local:
1. Para agregar las librerias de bootstrap al proyecto (**--save** hace que se añada bootstrap al **package.json**)  
```
    npm install bootstrap@4.0.0-alpha.6 --save
```
2. Es requerido por bootstrap
```
    npm install jquery --save
```
3. Es requerido por bootstrap (Para animaciones)
```
    npm install tether --save
```
4. En el archivo **.angular-cli.json** en el key **"styles"** se deben agregar las rutas a los archivos .css del proyecto y en **"scripts"** se deben agregar las rutas de los scripts. las rutas de los .css y .js que se agreguen aquí se agregaran a **index.html** al momento de buildear.
<hr>

## 3. Pipes
Proyecto para aprender sobre pipes.
```
ng new pipes
cd pipes
```

### Contenido:
+ Pipes uppercase y lowercase
+ Pipe Slice
+ Pice Decimal
+ Pipe Percent
+ Pipe Currency
+ Pipe Json
+ Pipe Async
+ Pipe Date
+ Pipes personalizados
    - Capitalizar palabras y nombres
    - Creación de un pipe, que permite cargar recursos externos de forma segura.

**Cambiar idioma de app**:
+ Importar el modulo `LOCALE_ID` de `@angular/core` en `./src/app/app.module.ts`
+ Agregar en la variable `providers` el siguiente elemento:
```
{ provide: LOCALE_ID, useValue: "es" }
```
<hr>

## 4. SpotiApp
Proyecto usando la [API de Spotify](https://developer.spotify.com/web-api/console/).
```
ng new SpotiApp
cd SpotiApp
```
### Contenido:
+ Reforzamiento de rutas y parámetros de rutas.
+ Uso de carruseles del Bootstrap 4
+ Uso del HTTP para obtener información
+ Uso de la API de Spotify para obtener información de:
    - Artistas
    - Albumes
    - Audio
+ Trabajo sobre el manejo de data asíncrona.
+ ngModel para enlazar campos de texto a variables del componente.
+ Widgets de Spotify
+ HTML5 audio
+ Observables
+ Map
+ Input/Output entre Componentes

### DatoFreak 
El **`[(ngModel)]`** se puede utilizar para crear una relación entre una variable del componente y un input.

### Generar Token Spotify
+ Se tiene que crear una nueva [App en Spotify](https://developer.spotify.com/my-applications/#!/applications), para tener un `{ClientID}` y `{ClientSecret}`
+ Hay un problema si se intenta obtener el token desde un cliente que no es Postman, Postman emula un server por lo cual se monto un server en https://spotify-get-token.herokuapp.com/spotify/{clientid}/{secret} [Repo](https://github.com/Klerith/spotify-get-token) el cual devuelve el token para poder ser obtenido de forma automatica desde la app Angular.
+ Para obtener este token se tiene que hacer un POST HttpRequest a `https://accounts.spotify.com/api/token`, con un Body `x-www-form-urlencoded` los siguientes parametros:
    - client_id: **{ClientID}**
    - client_secret: **{ClientSecret}**
    - grant_type:client_credentials

### Errores en nueva version de Angular2
+ Para solucionar el problema de **`No provider for Http`** tiene que importar `import { HttpModule } from '@angular/http';` en `app.module.ts` y agregar el modulo `HttpModule` en `imports`.
+ Para solucionar el problema de **`'ngModel' since it isn't a known property of 'input'`** tiene que importar `import { FormsModule } from '@angular/forms';` en `app.module.ts` y agregar el modulo `FormsModule` en `imports`.
<hr>

## Observables vs Promises [<small>[Fuente]</small>](https://angular-2-training-book.rangle.io/handout/observables/observables_vs_promises.html)
 Both **Promises** and **Observables** provide us with abstractions that help us deal with the asynchronous nature of our applications. However, there are important differences between the two:
+ As seen in the example above, **Observables** can define both the setup and teardown aspects of asynchronous behavior.
+ **Observables** are cancellable.
+ Moreover, Observables can be retried using one of the retry operators provided by the API, such as **retry** and **retryWhen**. On the other hand, **Promises** require the caller to have access to the original function that returned the promise in order to have a retry capability.
<hr>

## 5. Ionic2App
Proyecto que correra en Android e IOS.
```
npm install -g cordova ionic //Instalar ionic
ionic serve
```
### Extras:
+ `localhost:{puerto}}/ionic-lab` despliega el como se ve en todos los dispositivos mobiles.
+ Para usar **ionic update** usar **ionic link** primero (si la app no esta linkeada a una app en nuestra cuenta de Ionic no nos dejara hacer el update).

### Contenido:
+ Uso del local storage guardar localmente información para nuestras aplicaciones.
+ Introducción a ionic 2.
+ Uso del framework de ionic 2.
+ Uso de servicios que afectan el local storage.
+ Uso de ionic view para desplegar nuestra aplicación
+ Aprenderemos a controlar estilos usando Angular.
+ Manejo de la información a través de servicios ( update, delete, insert y select ) al local storage.
+ Aprenderemos a utilizar pipes impuros para realizar filtros.
+ Entre otras cosas interesantes.
<hr>

## 6. Micelaneos
Proyecto para explicar cosas random.

### Contenido:
+ style.{clase}.{unidad}
+ ngStyle
+ Css que solo afecta un Component
+ ngClass
+ Procesos async con indicadores de usuario
+ Directivas personalizadas
+ ngSwitch
+ rutas hijas
+ modulo para rutas hijas
+ obtener parametros de ruta padre
+ ciclo de vida de componentes

### [Ciclo de vida de componentes](https://angular.io/guide/lifecycle-hooks)
1. `ngOnChanges` Cuando la data de propiedades relacionadas cambian.
2. `ngOnInit` Cuando el componente esta inicializando. (Después del...)
3. `ngDoCheck` Durante cada revisión del ciclo de detección de cambios. (Cada vez que algo pasa en pantalla)
4. `ngAfterContentInit` Después de insertar contenido. (`<app-blabla-page>`)
5. `ngAfterContentChecked` Después de la revisión del contenido insertado.
6. `ngAfterViewInit` Después de la inicialización de componente/hijos.
7. `ngAfterViewChecked` Después de cada revisión de los componentes/hijos.
8. `ngOnDestroy` Justo antes que se destruya el componente o directiva.
<hr>

## 7. Auth0

### Contenido:
1. Autenticación con Facebook, Twitter, Google, entre otros...
2. Crear login.
3. Servicios para bloquear rutas si el usuario no esta autenticado.
4. Obtener info del usuario autenticado.

## 8. Forms

### Contenido:
+ Diferentes aproximaciones que tiene angular para trabajar formularios.
+ Profundizaremos en el uso del ngModel.
+ Utilizar las validaciones pre fabricadas.
+ Crear validaciones personalizadas.
+ Crear validaciones asíncronas.
+ Realizar un submit utilizando el ngSubmit.
+ Postear información únicamente cuando el formulario es valido,
+ Crear formularios del lado del componente.
+ Cargar información por defecto a los formularios.
+ Subscribirnos a los cambios de los valores de los formularios.

## 9. CRUD Firebase

### Contenido:
+ Uso del modulo HTTP.
+ Utilizaremos los servicios restful de Firebase
+ POST.
+ GET.
+ DELETE.
+ PUT.
