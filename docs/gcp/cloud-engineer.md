---
sidebar_position: 2
---

# Cloud Engineer

## Global Infrastructure

Google tiene mas de:

- 24 regiones
- 73 zonas
- 144 centros de red
- esta en mas de 200 paises

Cada vez que hacemos una peticion a un servicio de google, este pasa por un POP (point of presence)
que a su vez lo redirecciona al datacenter (encuentra la ruta con el menor latencia y viaja de forma segura)

### Zones

Es un area geografica para desplegar recursos. Es la entidad mas pequeña en la red de google.

- Es un **sigle failure domain**

:::tip
Desplegar nuestros recursos en la zona mas cercana a nuestros usuarios finales mejorara la experencia del
servicio.
:::

### Region

Las regiones son colecciones de zonas, estan diseñada para ser fault tolerance y tener High Availability

- Comunicacion entre los servicios dentro de la regions es de aprox 5 ms

### Multi-Regions

Son areas geograficas mas grandes que contienen dos o mas regiones.

- Para maximizar redundancia (HA)

## Compute

### Overview

En google tenemos 5 opciones de compute de la mas flexible a la menos flexibles, las cuales son:

1. IaaS (compute engine)
2. CaaS (google kubernetes engine)
3. PaaS (app engine)
4. FaaS (cloud run y cloud functions)

#### Compute Engine

Con este servicio podemos desplegar maquinas virtuales llamadas instancias en una region o zona determinada

Ventajas:

- Podemos decidir el sistema operativo.
- Podemos usar imagenes publicas o privadas.
- Podemos usar el marketplace y cloud storage.
- Para manejar multiples instancias usamos instances groups.
- Para agregar o remover capacidad usamos autoscaling con las instances group.
- Podemos agregar o quitar discos duros.
- Nos conectamos a la instancia por medio de ssh.

#### GKE (Google Kubernetes Engine)

Es un servicio para orquestar contenedores dentro de los nodos, el cual se encarga de:

- autoescalar
- desplegar
- manejar

Ventajas:

- Esta construido sobre el proyecto open-source de Kubernetes.
- Flexibilidad de integracion con clusters on premise.
- Usa instancias de compute engine como nodos.

#### App Engine

Es una plataforma serverless manejada automaticamente por google, es decir, no debemos preocuparnos
por nada de mantenimiento. Hecha con el fin de desplegar aplicaciones.

Ventajas

- Provisiona automaticamente los servidores.
- Autoescalamiento basado en demanda.
- Tenemos runtimes para desarrollar nuestras aplicaciones (Java, python, go, js, ruby, etc).
- Podemos conectarlos con otros servicios de google.
- Integra un web security scanner para detectar vulnerabilidades.

#### Cloud functions

Son ambientes serverless para ejecutar funciones de codigo de proposito unico. Podemos crear aplicaciones y conectar servicios de nube.

Ventajas:

- Se ejecutan al producirse cierto evento.
- El codigo se ejecuta en un ambiente manejado.
- No necesitamos provisionar infraestructura.
- Podemos escribir nuestras funciones en los siguientes lenguajes (python, java, ruby, go)

Casos de uso:

- ETL
- Backend movil
- Webhooks
- Apis basicas

#### Cloud Run

Ambiente manejado completamente por google creado para desplegar y escalar contenedores de forma serverless

Ventajas:

- Rapida
- Segura
- Esta construida sobre Knative
- No limitaciones en librerias o lenguajes

## Storage

### Overview

#### Cloud storage

Es un servicio de google para almacenar nuestra informacion en forma de **object storage**. Como un
google drive.

Ventajas:

- Tiene 11 9 de durabilidad
- Almacenamiento ilimitado, no tiene tamaño de archivo minimo
- Disponible en diferentes clases y disponibilidad

##### Storage Classes

Tenemos 4 tipos de clases de almacenamiento

1. Standard:

    - Tiene la mayor disponibilidad
    - no tiene limitaciones
    - para archivos que usamos frecuentemente
    - la mas cara

2. Nearline:

    - Mas barata que la standard
    - para archivos que accedemos una vez al mes

3. Coldline

    - mas barata que nearline
    - para archivos que accedemos una vez cada 3 meses

4. Archive:

    - la mas barata de todas
    - para archivos que accdemos una vez al año

:::caution
No por querer ahorrar vamos a usar archive para archivos que accedemos frecuentemente, google tiene una penalizacion
o una tasa por cada vez que accedemos al archivo.
:::

##### Availability

Tenemos 3 tipos de disponibilidad

1. Region
2. Duo Region
3. Multi Region

#### FileStore

Es un servidor NFS (network file server) manejado completamente por google. En donde podemos almacenar
nuestros archivos, sincronizarlos y acceder a ellos por medio de aplicaciones.

Ventajas:

- NFSv3 compliant
- Podemos acceder a la informacion por medio de instancias o cluster de kubernetes

:::tip
Perfecto cuando queremos acceder a la informacion desde multiples applicaciones
:::

#### Persistent disk

Almacenamiento de tipo block
Tenemos dos tipos:

1. Standard (HDD)
2. Solid State (SSD)

Podemos alamcenarlos en zonal o region

## Databases

### Overview

#### Cloud Sql

Opcion PaaS, para manejar automaticamente por google bases de datos

Ventajas:

- Compatible con postgress, mysql, sql server
- HA entre zonas

#### Cloud spanner

Es un servicio escalable de bases de datos relacional

Ventajas:

- HA entre regiones o global
- Replicacion sincrona
- Fuertemente consistente
- Soporta multiples transacciones

#### Big table

Base de datos NoSQL, escalable y mandejada por google que ofrece:

- no downtimes cuando se hace resize del cluster
- baja latencia
- alta respuestas

#### Datastore

Base de datos NoSQL de tipo documento, diseñada para aplicaciones iot, ofrece lo siguiente:

- Transacciones ACID
- Replicacion multi region
- fast

#### Firestore

Base de datos NoSQL, diseñada para datos en tiempo real, ofrece lo siguiente:

- Modo sin conexion
- No tenemos downtime al momento de hacer un resize del cluster

#### Memorystore

Servicio de base de datos para redis

## Network
