---
sidebar_position: 2
---

# Cloud Engineer

## Global Infrastructure

Google tiene mas de:

- 25 regiones
- 76 zonas
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

### Overview

#### VPC

Es el servicio de google que nos permite crear nuestra red privada en google. Ademas nos permite crear subnets. Este servicio
es el core de networking. Es un recurso que se crea de forma global, es decir, solo existo una vpc con ese nombre en toda la red de
google.

:::caution
Podemos crear subnets adicionales luego de crear la VPC pero no podemos compartir estas subnets entre proyectos
:::

#### Firewalls

Este servicio nos ayuda a crear reglas que permite mantener seguros nuestros recursos permitiendo o negando el trafico hacia
nuestros recursos.

Al momento de crear una vpc por default tienes creadas unas reglas de firewall que podemos cambiar o crear unas personalizadas.

#### Routes

Las rutas nos ayuda a establecer como los paquetes viajan entre nustros recursos.

#### Load Balancing

En google tenemos 2 tipos de balanceadores de carga:

1. Balanceadores de capa 7  (application load balancer)

    - Podemos distribuir el trafico por tipo de contenido
    - Podemos distribuir el trafico entre regines
    - Siempre mandara el trafico a las instancias saludables

2. Balanceadores de capa 2 (network load balancer)
    - Distribuye el trafio en la misma region
    - Se distribuye el trafico basado en el protocolo ip

#### CLoud DNS

Con este servicio podemos publicar y manejar registro DNS. Google se garantiza de que sea un servicio 100% disponible

#### Cloud VPN

Nos permite conectar nuestra red on premise con nuestra red en la nube por medio de una conexion ip, estable y segura. Esta
conexion usa el protocolo IPsec y viaja por el internet

#### Direct Interconect

Nos permite conectar nuestra red on premise con nuestra en la nube por medio de una conexion dedicada a los data centers de google.

Exite de dos tipos:

1. Direct Peering

2. Carrier Peering

## Resources Hierarchy

El resources hierarchy es como google configura y da permisos a los diferentes tipos de recursos.

Los recursos en gcp se dividen en dos categorias:

1. Services Level resources: Son todos los servicios que usamos

    - Compute engine instances
    - Buckets de cloud storage

2. Account Level resources:

    - Folders
    - Projects
    - Organization

Los recursos se organizan de forma estructurada con una relacion padre/hijo. Las policies las
controlamos por medio de IAM. Por ende si al padre le ponemos un conjunto de reglas el hijo
hereda dichas reglas.

:::caution

1. Cada hijo solo puede tener un padre
2. Necesitamos a la organizacion para poder crear account folders y proyects
3. Necesitamos un proyecto para poder ir crearo service level resourcers
4. Cada recurso solo puede existir en un proyecto no en vaios al mismo tiempo
:::

:::tip
Debemos usar las carpetas para organizar de mejor manera nuestra uso de gcp e aislar proyectos.
Podemos usar labels para agrupar recursos y poder monitorearlos en el billing
:::

## Cloud billing

### Billing account

- Define quien va a pagar por los servicios que se han creado.
- Sigue todo los costos que se han generado
- Esto va linkeado con un payment profile
- Puede estar linkeada a varios proyectos
- Tiene diferentes roles y servicios

Tiene 2 tipos de forma de pago:

1. Self services (online):

    - Pagamos por medio de tarjeta de credito
    - se hace instantaneo

2. Invoiced (offline)
    - Debemos solicitar el poder emitir facturas
    - Generalmente se paga por transferencia

:::tip
POdemos usar sub-accounts que es un feature util para resellers asi podemos agrupar
las cuentas de nuestros clientes y luego cobrarles.

Podemos pagar las cuentas de otras organizaciones con la misma billing account
:::

### Payment Profile

Servicio que usamos para procesar todos los pagos de servicios de google no solo google cloud.

- Aqui almacenamos todos nuestras tarjetas de credito o debito
- Podemos ver los invoices
- Podemos controlar quien puede ver los invoice
- No podemos cambiar el tipo de payment profile

Existen dos tipos de payment profile:

1. Individual
2. Business

La diferencia principal es que si es individual solo nosotros podemos controlar los invoices. Por otro lado, en business
podemos agregar mas personas que manejen los pagos.

## Cost Management

### CUD (Committed Used Discount)

Descuentos en los precios cuando nos comprometemos a usar una cantidad de recursos en un especifico periodo de tiempo.
Por lo general suele ser un periodo desde 1 a 3 años

Existen de dos tipos:

1. Spend-based: Nos comprometemos a consumir n numero de horas, solo aplica para CPU y Mermoria ademas solo esta disponible para:
    - cloud sql
    - vm instances

2. Resource-based: Este tipo de compromiso es ideal para cargas de trabajo predictivas y nos comprometos a consumir tanta cantidad de recursos
esta disponible para:
    - vCPU
    - Memory
    - GPU
    - SSD

### Automatic used discount

Estos descuentos google los da de forma automatica cuando se da cuenta que usamos x recursos por x horas del mes.
Aplica a:

- vCPU
- Memory
- instancias creadas por gke y compute engine

No aplica a:

- Instancias creadas por app engine o dataflow

:::tip
Podemos usar el gcp princing calculator para estimar nuestros costos al implementar una arquitectura
:::

### Budget Alert

Nos permite comparar nuestro gasto actual con el presupuestado. Con el fin de tomar acciones correctivas
en caso de ser necesarias

1. Necesitamos fijar nuestro presupuesto
2. Crear thresholds rules las cuales usaremos para generar las notificaciones

Podemos definir el presupuesto para un grupo de recursos o para todo el proyecto.

El comportamiento por defecto es que cuando superamos el threshold se envia un correo a los administradores, para
poder cambiar dicho comportamiento podemos usar cloud monitoring para enviar correos a otras personas.

Tamnbien podemos usar Pub/sub para realizar tareas automatizadas con nuestro billing

:::tip
Podemos exportar la informacion de nuestro billing hacia big query para realizar diferentes tipos de analiticas
:::

### Quotas

Google limita los recursos que podemos usar en nuestro proyecto por medio de quotas.

Existen 2 tipos de quotas:

1. Rate quota: cuantas peticiones podemos hacer por minuto
2. Allocation quota: cuantas maquinas virtuales podemos tener activas

:::tip
Podemos usar cloud monitoring para crear dashboard y tener mejor control si estamos cercas de llegar al limite de quota
:::

Cuando sobrepasamos la quota google retorna un estado `429`

## Cloud CLI

Es un conjunto de comandos que nos permitiran manejar nuestros recursos desde la terminal.

Los 4 mas importantes son:

- gcloud (gcp)
- gsutil (cloud storage)
- kubectl (kubernetes)
- bq (bigquery)

Para esto necesitamos de alguna forma configurar dichas herramientas.

Este comando lo usamos para inicializar gcloud

```bash
gcloud init
```

Podemos usar el flag `--console-only` cuando no tenemos browser

```bash
gcloud init --console-only
```

Este comando lo usamos para hacer un login

```bash
gcloud auth login
```

Este comando lo usamos para configurar proyectos y cuentas

```bash
gcloud config
```

Este comando lo usamos para instalar, actualizar componentes del CLI

```bash
gcloud components
```

Este comando nos dice que cuenta es la que esta activa y cuales son todas las cuentas que tenemos

```bash
gcloud auth list
```

Este comando nos ayuda cambiar entre cuentas

```bash
gcloud config set account $ACCOUNT
```

Este comando nos ayuda a remover la informacion de la cuenta

```bash
gcloud auth revoke $ACCOUNT
```

Con este comando podemos obtener la informacion de nuestra cuenta y su path

```bash
gcloud info
```

Con este comadno podemos saber los campos de una configuracion

```bash
gcloud config configurations describe $CONFIGURATION_NAME
```

Con este comando cambiamos entre configuraciones

```bash
gcloud config configurations activate $CONFIGURTION_NAME
```

Con este comando podemos ver todos los componentes que podemos instalar

```bash
gcloud components list
```

Con este comando podemos intalar un componente

```bash
gcloud components install $COMPONENT_NAME
```

Con este comando podemos desinstalar un componente

```bash
gcloud components remove $COMPONENT_NAME
```

Con este comando podemos actualizar nuestro componentes

```bash
gcloud components update
```

Con este comando podemos usar el shell interactivo (tenemos autocompletado, docs, etc)

```bash
gcloud interactive
```

### Cloud shell

Es una shell que tenemos gratis con 5 gb de storage, persistentes, ademas tenemos un editor de texto basado
en el proyecto open source theia.

Podemos customizar nuestro shell de forma que tengamos las herramientas que necesitemos, esto lo hacemos atraves
de un archivo de configuracion `.customize_environment` este script corre como root entonces podemos instalar lo que sea

Tenemos una herramienta para web preview, cuando ejecutamos http serveres en el cloud shell. Podemos ejecutar en cualquier
puerto desde 2000 hasta el 65000

Podemos hacer un boost e2-micro to e2-medium por 24 horas y termina nuestra sesion, lo archivos no se pierden
pero si los procesos.

:::caution

- Tenemos un limite de 50 horas por semana
- Sino entramos a cloud shell en 120 dias nuestro persistan disk sera eliminado (recibimos notificacion)
:::

## Cloud IAM

Con este servicio de google controlamos Quien (identity), tiene tal acceso (Role), en tal recurso

### Policy Architecture

Una policy esta formada por:

1. bindings
2. metadata
3. audit config
