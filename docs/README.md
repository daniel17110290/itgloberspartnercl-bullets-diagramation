# :bulb: custom diagramation
![image](https://user-images.githubusercontent.com/96321122/195446697-1817401f-9125-4b5e-98cd-ce4c430a3a22.png)



## :pencil2: Informacion general

Este repositorio contiene el codigo necesario para crear un componente personalizado el cual permite añadir imagenes para crear un slider que muestre productos de la tienda respectiva

este componente fue creado para una tienda diseñada en vtex io.

## :wrench: Configuracion 

### Paso 1 - Clonacion del repositorio

Primero se debe crear un nuevo repositorio que contiene ([react-app-template](https://github.com/vtex-apps/react-app-template)) de vtex io 

![image](https://user-images.githubusercontent.com/96321122/195447969-ffe070eb-95c4-4d06-b400-0e0a3d2628dc.png)


una vez creado el repositorio lo clonarlo y ya estaria listo para empezar a trabajar

### paso 2 - Editar el manifest.json

teniendo el repositorio clonado se debe configurar el `manifest.json` que llega por defecto en el template

ejemplo:
```json
{
  "vendor": "itgloberspartnercl",
  "name": "bullets-diagramation",
  "version": "0.0.1",
  "title": "bullets Diagramation",
  "description": "es un contexto de elementos que renderizara los niveles infeiores de navgacion dentro de una lista de bullets con imagenes",
}
 ```
Ademas configurar los `builders`, agregando store:
```json
"builders": {
   "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  },
 ```
Agregar la dependencias necesarias para que la app tenga los componentes que se usaran para su funcionamiento.
```json
"dependencies": {
   "vtex.native-types": "0.x",
    "vtex.list-context": "0.x",
    "vtex.device-detector": "0.x",
    "vtex.css-handles": "0.x"
  },
  ``` 
### paso 3 - Editar el Package.json

Se modificara el archivo de `package.json` global
```json
{
 "version": "0.0.1",
  "name": "bullets-diagramation",
}
 ``` 
De la misma manera se modifica el archivo `Package.json` que se encuentra en la carpeta `react`

### Paso - 4 Instalar dependencias en React

Teniendo configurado los pasos anteriores, se procede a instalar las depencias desde la terminal ubicado en la carpeta react, usando el comando `yarn` se instalara todas las dependencias para poder comenzar con el trabajo.

### Paso - 5 Creacion de la carpeta {store}

Se procede a crear una carpeta `store` que se encontrara independiente dentro de la carpeta general del proyecto, dentro de esta carpeta se creara el archivo `manifest.json` donde sera configurado y este permitira ser usado para renderizar el componente en la tienda vtex io
```json
{
  "list-context.bullet-group": {
    "component": "BulletGroup",
    "composition": "children",
    "allowed": "*",
    "content": {
      "properties": {
        "bullet": {
          "$ref": "app:itgloberspartnercl.bullets-diagramation#/definitions/BulletGroup"
        }
      }
    }
  }
}
 ``` 
### Paso - 6 Creacion del componente

Despues de las configuraciones generales se procede a la creacion del componente desde `react`, para ver en navegador los cambios y avances del componente se debera linkear la pagina con el comando {vtex link}

## :video_game: Colaboradores

(https://github.com/daniel17110290)

