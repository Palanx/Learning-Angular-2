# Learning-Angular-2
<p>Repositorio dedicado a desarrollar proyectos para aprender Angular2</p>

## Tutoriales

> **./quickstart** es un tutorial realizado de [QuickStart Angular2](https://angular.io/docs/ts/latest/guide/setup.html)
>>+ git clone https://github.com/angular/quickstart.git quickstart
>>+ cd quickstart
>>+ npm install
>>+ npm install concurrently -g
>>+ npm install lite-server -g
>>+ npm install typescript -g
>>+ Agregar **"@types/node": "^6.0.46","@types/jasmine": "2.5.36",** a archivo package.json en lines 35 y luego agregar **import {} from '@types/jasmine';** en todos los archivos que tire error por falta de import
>>+ npm install zone.js@0.8.5 --save
>>+ npm start (Tiene que ser por cmd.exe por que PowerShell cago desde el 01-06-17)

> **./SPA** proyecto creado con Angular CLI, instalar [Angular CLI](https://github.com/angular/angular-cli)
>>+ ng new SPA
>>+ cd SPA
>>+ ng serve
>>+ (Si le pide instalar los modulos use **npm install** y **npm install --only=dev**)
>
>>+ **ng generate component [Path]** o **np g c [Path]** para generar componentes con AngularCLI (la raiz es la carpeta **./src/app**)
>>+ **Agregar Bootstrap local:**
>>   - **npm install bootstrap@4.0.0-alpha.6 --save** para agregar las librerias de bootstrap al proyecto (**--save** hace que se añada bootstrap al **package.json**)
>>   - **npm install jquery --save** es requerido por bootstrap
>>   - **npm install tether --save** es requerido por bootstrap (Para animaciones)
>>   - En el archivo **.angular-cli.json** en el key **"styles"** se deben agregar las rutas a los archivos .css del proyecto y en **"scripts"** se deben agregar las rutas de los scripts. las rutas de los .css y .js que se agreguen aquí se agregaran a **index.html** al momento de buildear

> **./pipes** proyecto para aprender sobre pipes
>>+ ng new pipes
>>+ cd pipes
>>
>>### Contenido:
>>+ Pipes uppercase y lowercase
>>+ Pipe Slice
>>+ Pice Decimal
>>+ Pipe Percent
>>+ Pipe Currency
>>+ Pipe Json
>>+ Pipe Async
>>+ Pipe Date
>>+ Pipes personalizados
>>    - Capitalizar palabras y nombres
>>    - Creación de un pipe, que permite cargar recursos externos de forma segura.
>>
>>+ **Cambiar idioma de app**:
>>    - Importar el modulo **LOCALE_ID** de **@angular/core** en **./src/app/app.module.ts**
>>    - Agregar en la variable **providers** el siguiente elemento: <code>{ provide: LOCALE_ID, useValue: "es" }</code>

> **./SpotiApp** proyecto usando la [API de Spotify](https://developer.spotify.com/web-api/console/)
>>+ ng new SpotiApp
>>+ cd SpotiApp
>>
>>### Contenido:
>>+ Reforzamiento de rutas y parámetros de rutas.
>>+ Uso de carruseles del Bootstrap 4
>>+ Uso del HTTP para obtener información
>>+ Uso de la API de Spotify para obtener información de:
>>    - Artistas
>>    - Albumes
>>    - Audio
>>+ Trabajo sobre el manejo de data asíncrona.
>>+ ngModel para enlazar campos de texto a variables del componente.
>>+ Widgets de Spotify
>>+ HTML5 audio
>>+ Observables
>>+ Maps
>>
>>### Generar Token Spotify:
>>+ Se tiene que crear una nueva [App en Spotify](https://developer.spotify.com/my-applications/#!/applications), para tener un **{ClientID}** y **{ClientSecret}**
>>+ Para obtener este token se tiene que hacer un POST HttpRequest a <code>https://accounts.spotify.com/api/token</code>, con un Body **x-www-form-urlencoded** los siguientes parametros:
>>    - client_id: **{ClientID}**
>>    - client_secret: **{ClientSecret}**
>>    - grant_type:client_credentials
>>
>>###Error en nueva version de Angular2:
>>+ Para solucionar el problema de **No provider for Http** tiene que importar <code>import { HttpModule } from '@angular/http';</code> en **app.module.ts** y agregar el modulo <code>HttpModule</code> en **imports**
>>
>>##Observables vs Promises [<small>[Fuente]</small>](https://angular-2-training-book.rangle.io/handout/observables/observables_vs_promises.html)
>> Both **Promises** and **Observables** provide us with abstractions that help us deal with the asynchronous nature of our applications. However, there are important differences between the two:
>>+ As seen in the example above, **Observables** can define both the setup and teardown aspects of asynchronous behavior.
>>+ **Observables** are cancellable.
>>+ Moreover, Observables can be retried using one of the retry operators provided by the API, such as **retry** and **retryWhen**. On the other hand, **Promises** require the caller to have access to the original function that returned the promise in order to have a retry capability.
