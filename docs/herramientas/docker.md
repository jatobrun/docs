---
sidebar_position: 1
---

# Docker

Docker es una herramienta que permite contenerizar nuestra aplicacion dentro de un `sandbox`, lo cual permite mejorar la portabilidad de nuestra aplicacion, manejar siempre el mismo entorno en cualquier sitio.

:::info
No es recomendado correr contenedores linux en servidores windows
:::
:::note
Docker esta formado por contenedores e imagenes, sin una imagen docker no puede correr un contenedor
:::

## Instalacion

Para instalarlo en windows o mac podemos usar el siguiente **[link](https://www.docker.com/products/docker-desktop)**

## Imagenes

Las imagenes en docker se crean a partir de **[dockerfiles](#dockerfiles)**.

Para correr una imagen usamos el siguiente comando.

```bash
docker run ${nombre-de-la-imagen}
```

Podemos usar el **[registro oficial](https://hub.docker.com/)** de docker para saber que imagenes existen o estan disponibles para la comunidad.

:::info

Si la imagen no existe  en tu maquina al correr `docker run`.

Docker hara los siguientes pasos:

1. Revisara si la imagen existe en tu maquina.
2. De no ser el caso revisara si existe dicha imagen en el repositorio oficial.
3. Si la encuentra la descarga (equivalente a `docker pull`).
4. Una vez cuentas con la imagen en tu maquina ejecuta `docker run`.
:::

:::note
las imagenes dentro de docker estan conformadas por una serie de capas, las cuales estan identificadas por un `hash`.

Por ende postgress solo descarga las capas que no se tienen instaladas en el cado de que las tengas las reutiliza.
:::

### Tags

Los tags de las imagenes vienen a ser el equivalente de las distintas versiones que tiene dicha imagen.

Para correr una imagen de postgres con un tag especifico ejecutamos el siguiente comando.

```bash
docker run postgres:${tag}
```

:::note

Sino especificamos el tag, autmaticamente se descargara la imagen con el tag `latest`

:::

:::info

Como los **[contenedores](#contenedores)** son entidades independientes entre si, puedo tener dos contenedores

de postgress corriendo sin ningun problema en la misma maquina

:::

## Dockerfiles {#dockerfiles}

Es una lista de pasos que indica las instrucciones a seguir para obtener nuestra imagen deseada.

### Estructura

```docker
#Inicio (Aqui es donde seleccionamos la imagen base del docker hub para nuestra app)
FROM node:12.22.1-alpine

#Cuerpo (Pasos a seguir para levantar imagen)
WORKDIR /app
COPY . .
RUN yarn install --production

#Final (Ejecutable de la aplicacion)
CMD ['node', 'index.js']
```

:::tip

Lo mejor es ir a **[docker hub](https://hub.docker.com/)** y seleccionar una imagen base que cumpla
con las necesidades de nuestra aplicacion. Dentro de lo posible usar las imagenes con `alpine` en el nombre

:::

:::note
Alpine suele ser la imagen mas optima para contenedores debido a que es una distribucion de linux
con lo minimo necesario para correr cosas.
:::

:::info

- `ENTRYPOINT` es mas generico, nos permite pasar un parametro en el contenedor como variable
la usamos en imagenes generica como `python, node, etc`
- `CMD` es mas util para realizar contendor especificos, como un `servidor, script, test, etc.`
:::

### Construir Contenedores

Para poder crear contenedores usamos el comando:

```bash
docker build .
```

Donde el `.` representa el directorio donde tenemos el `Dockerfile`.

:::tip
Como buena practica siempre deberiamos tagear las imagenes que construimos esto lo hacemos
con el parametro `-t` en el comando `docker build` de la siguiente forma

```shell
docker build -t webapp:v1 .
```

:::

:::caution
`docker build` solo construye la imagen no la ejecuta, para ejecutarla podemos ir a la seccion de
**[imagenes](#imagenes)**.
:::

## Contenedores

Contenedores son entidades descartables, por ende, no es recomendable guardar datos en ellos.
:::tip
Si nuestro contenedor se detuvo por cosas de la vida podemos recuperar su estado utilizando su `CONTAINER ID`

Ejecutamos el siguiente comando:

```bash
docker start ${CONTAINER-ID}
```

:::

## Puertos

Si ejecutamos una imagen que utiliza puertos por ejemplo un servidor http. Necesitaremos
vincular los puertos del contenedor con los puertos de nuestra maquina, debido a que el contenedor
esta corriendo en una red propia de docker que no esta compartida con mi host.

Para acceder a los puertos de los contenedores debemos ejecutar el siguiente comando.

```shell
docker run -d -p ${PORT-CONTAINER}:${PORT-HOST} ${IMAGE}
```

## Volumes

Los `volumes` son usados para poder persistir los datos entre contenedores.
Podemos usar el parametro `-v` para compartir una ruta del host que el contenedor
usara como referencia para sus funcionalidades.

```bash
docker run -d -p 80:80 -v ${PATH_HOST}:${PATH_CONTAINER} ${IMAGE}
```

:::tip

Podemos desarrollar directamente sobre el contenedor usando volumenes, ya que podemos vincular
el codigo fuente que tenemos en nuestra computadora al del contenedor y a su vez los cambios que
realizamos en el codigo de la computadora se veran reflejados en el contenedor.

```bash
docker run -d -p 80:80 -v Users/jamiltorres/docs/src:app/src ${IMAGE}
```

:::

:::caution
No olvida volver a construir la imagen con otro tag al terminar de desarrollar sobre el contenedor.

```bash
docker build -t webapp:v2 .
```

:::

## Publicar

Para publicar una imagen de docker necesitamos un repositorio al cual poder subir la image

### Logear

Una vez ya contemos con el repositorio donde queremos compartir la imagen necesitamos
autenticarnos en el mismo, es decir, poseer credenciales y permisos en el repositorio.

Para docker hub, necesitamos tener cuenta y luego podemos hacer login con el siguiente comando

```bash
docker login
```

Luego necesitaremos tagear correctamente la imagen para esto usamos

```bash
docker tag ${IMAGE_ID} ${NAME}
```

Finalmente subimos la imagen al repositorio

```bash
docker push ${NAME
```

## Manejar multiples contenedores

En la vida real lo que normalmente se haria es correr multiples contenedores y
no todo en un solo contenedor. Esto con el fin de independizar procesos,
ganar portabilidad, etc.

Para esto lo que primero necesitariamos es crear una red de docker para la aplicacion.
Esto con el fin de que nuestros contenedores (backend, frontend, db) puedan comunicarse
entre ellos.

Para ello usamos el siguiente comando.

```bash
docker network ${NETWORK_NAME}
```

Luego empezamos a correr cada una de las imagenes de la siguiente manera.

- DB

```bash
docker run -d --network ${NETWORK_NAME} \
--network-alias ${ALIAS_DB} \
mysql:5.2
```

:::note
Para conectar el backend a la db necesitamos tener la `ip`. Para esto usamos el parametro
`--network-alias`. Debido a que los contenedores son descartables y por cualquier motivo puede
dejar de existir o recrearse, por ende la ip cambiara usamos el `alias` para no tener que
preocuparnos de saber cual es la nueva del contenedor.
:::

- Backend

```bash
docker run -d --network ${NETWORK_NAME} \
--network-alias ${ALIAS_BACKEND} \
-e DB_HOST=${ALIAS_DB} \
backend:v2
```

De esta manera podemos conectar el backend con la base de datos.

## Cheatsheet (comandos)

- `docker run` para correr una imagen usamos .
- `docker pull` para descagar una imagen usamos .
- `docker images` para saber cuales son todas las imagenes que tenemos descargadas .
- `docker ps` nos mostrara los contenedores que tenemos en **ejecucion**.
- `docker ps -a` nos mostrara todos los contenedores que corrieron hace un tiempo.
- `docker logs ${CONTAINER_ID}` para observar los logs del contendor.
- `docker logs -f ${NAME}` para seguir los logs, tambien podemos ver los logs
con el nombre del contenedor.
- `docker exec` agarra un contenedor que esta corriendo y ejecuta un comando.
- `docker exec -it ${CONTAINER_ID} sh` el parametro `-it` significa ejecuta un
terminal interativo y `sh` ejecuta una terminal.
- `docker stop ${CONTAINER_ID}` para detener un contenedor.
- `docker run -d ${IMAGE}` para correr un contenedor en background.
- `docker run -p ${PORT_CONTAINER}:${PORT_HOST} ${IMAGE}` para agregar un puerto
- `docker build` para crear una imagen a partir de un `Dockerfile`.
- `docker tag` para tagear una imagen.
- `docker push` para compartir una imagen a un repositorio remoto de docker.

:::tip

Con `docker stop` y `docker run` puedes ejecutar varios contenedores con espacio
y los distintos `${CONTAINER_ID}`

:::
:::tip

Para que docker pueda capturar los logs, la aplicacion no debe escribir los logs en un archivo sino usar  
el `standard output`. De esta forma te evitas tener que estar manteniendo logs dentro de una aplicacion
lo cual en muchos casos suele ser tedioso.

:::

:::info
`docker pull` lo podemos usar para asegurarnos que estamos usando la ultima version de la imagen.
:::

## Docker Compose

Docker compose es una forma facil de escribir todos los comandos de docker en un solo archivo y
que sea mas facil de entender y administrar. Esta herramienta es util cuando debemos manejar muchas
aplicaciones y estar levantando cada uno de los contenedores se vuelve una tarea tediosa.

### Instalacion

Para empezar a usar docker compose lo unico que necesitamos es el binario, si tienes docker desktop
ya viene docker compose con dicho ejecutable por ende no debes hacer nada mas. Si estas usando linux
u otra distro de Linux puede usar el siguiente **[link](https://docs.docker.com/compose/install/)**.

### Manifiesto

Docker compose usa un tipo de archivo llamado `docker-compose.yaml` que vendria a ser el equivalente
al `Dockerfile`, el mismo que es un manifiesto y es en este archivo que declaramos todos los servicios

```yaml title='./docker-compose.yaml'
version: "3.9"
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DB_HOST: mysql
  mysql:
    image: "mysql:alpine"

```

:::info
Al utilizar docker compose automaticamente se creara una red donde se enviaran todos
los servicios que escribas en el manifiesto `docker-compose.yaml`. Ademas de automaticamente
crear un alias para cada uno de los servicios.
:::

Para ejecutar docker-compose utilizamos el siguiente comando

```bash
docker-compose up -d
```

:::info
el comando anterior hara todo lo posible para levantar todos los servicios, es decir, si hay un servicio
caido lo tratara de levantar y sino no hara nada.
:::

:::tip
Puedes usar el valor `depends_on` para ejecutar una secuencia de contenedores, es decir que primero se levante
la base de datos y una vez levantada se ejecute el backend. Para mas [informacion](https://docs.docker.com/compose/startup-order/).
:::

Para borrar todos los servicios puedes usar:

```bash
docker-compose down
```
