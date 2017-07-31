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
