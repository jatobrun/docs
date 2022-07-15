---
sidebar_position: 1
---

# Cloud Digital Leader

## Global Infrastructure

Google tiene mas de:

- 25 regiones
- 76 zonas
- 144 centros de red
- esta en mas de 200 paises

Cada vez que hacemos una peticion a un servicio de google, este pasa por un POP (point of presence)
que a su vez lo redirecciona al datacenter (encuentra la ruta con el menor latencia y viaja de forma segura)

### Multi-Regions

Son areas geograficas mas grandes que contienen dos o mas regiones.

- Para maximizar redundancia (HA)

### Region

Las regiones son areas geograficad independendientes con colecciones de zonas,
estan diseñada para ser fault tolerance y tener High Availability

- Comunicacion entre los servicios dentro de la regions es de aprox 5 ms

:::note

- **Edge Networking** es la practica de desplegar nuestros servidores o servicios lo mas cerca posible hacia
nuestros consumidores

- **Point of presence (PoP)** es una ubicacion intermediaria entre GCP y el consumidor final (esto puede ser un
third party datacenter)
  - Edge PoP: Sirve para ingress
  - CDN PoP: Sirve para egress
  - Cloud media edge: Sirve como estacion de entrega de contenido (videos)
:::

### Zones

Es un area geografica para desplegar recursos. Es la entidad mas pequeña en la red de google.
esta formado por uno o mas datacenters

- Es un **sigle failure domain**

:::tip
Desplegar nuestros recursos en la zona mas cercana a nuestros usuarios finales mejorara la experencia del
servicio.
:::

### Data Residency

Es la ubicacion geografica donde los recursos en la nube residen.

Por otro lado compliance boundaries. Son requerimientos legales para poder tener nuestros servicios
desplegado en una zona especifica.

#### Assured Worloads

Es un feature que nos permite aplicar diferentes controles de seguridad a nuestros ambientes

- Data residency
- Encryption
- Personal data access

:::note
Debemos modificar una policie de organizacion "Resource Location Restriction"
:::

### Latency

es el tiempo de retraso entre dos servidores, mientras que lag es el tiempo que se demora en procesar una
entrada el servidor.

Latencia entre regiones es 500 ms y entre zonas 10ms

### Cloud Interconect

Este servicio nos permite conectar nuestros servidores on premise a la nube por medio de una conexion
dedicada. Esto nos permite transferir grandes cantidades de data entre redes. Esto suele ser mas barato que
pedir a nuestro proveedor de internet mas banda ancha

Existen dos tipos:

1. Dedicated: entre 10 Gbps y 200 Gbps, hacemos uso de un intermediario interno de google

2. Partner: entre 50Mbps y 10Gbps, hacemos uso de un intermediario externo

## Digital Transformation

Es la adopcion de tecnologia con el fin transformar los servicios y el negocio. Normalmente se usa en:

- Remplazar los procesos manuales o convertirlos en digital (no usar papel)

- Reemplazar tecnologia antigua (usar servicios en la nube)

Para esto google tiene 7 pilares:

----

**1. Infrastructure modernization**

Significa replazar nuestro hardware antiguo por soluciones en la nube o crear soluciones hibridas.

Para esto podemos usar **anthos**

----

**2. Business aplication platform portfolio**

Todos los servicios disponibles en google estan bien documentados, con el fin de que se tenga una
amplia variedad de soluciones a nuestors casos de uso. De esta manera solo nos debemos centrar
en usar el servicio

Para esto podemos usar **cloud SDK, CLI and API**

----

**3. Application modernization**

Construir o migrar aplicaciones web sin mucho problema con uso de soluciones en la nube.

Para esto podemos usar **App Engine**

----

**4. Database and storage solutions**
Las compañias pueden tolerar perdida de informacion pero perder informacion implica nunca mas
poder recuperarlo. Los cloud providers son conscientes de esto y para disminuir este riesgo
cuentan con SLA (Service Level Aggrements) Los cuales son convenios que se tiene con el proveedor
donde garantiza dicho performance y en caso de no cumplirlo se hacen responsable de los actos.

Para esto podemos usar cloud storage que tiene 99.5% SLA en disponibilidad

----

**5. Smart Analytics**

Soluciones para big data algunos proveedores de nube les agrega inteligencia artificial con el fin de
que sea mas sencillo analizar la informacion de las compañias

Para esto usamos **Looker**

----

**6. Artificial intelligence**

Con el descubrimiento de la inteligencia artificial mas compañias se suman a utilizarlo para modernizar
sus procesos. Esto es necesario para mantenerse competitivos

Para esto usamos **Vertex AI**

----

**7. Security**

Por ultimo la seguridad y compliance es necesario en todas las empresas, y los proveedores de nube son
conscientes de ello.

Para esto Google tiene servicios como:

- Beyond Corp (Zero trust model framework)
- Security Command Center
- IAM

### Innovation Waves

Son fenomenos ciclicos que suceden en la economia mundial. Tambien conocidos como Kondratiev Waves.
Estos fenomenos estan conectados con la tecnologia y los inventos

Estos fenomenos tienen 4 partes:

1. Expansion
2. Boom
3. Recession
4. Depression

Los inventos que crearon las olas:

- Maquina a vapor
- Tren
- Electricidad
- automoviles
- tecnologias de la informacion
La ultima ola que estamos viviendo es con la tecnologia

### Evolution of compute power

El poder computacional es una medida en la cual que cuantifica el tiempo que se demora una
computadora en terminar una tarea

- General computing -> CPU -> Compute Engine
- Tensor computing (x50 mas rapido)-> TPU -> Cloud TPU
- Quatum Computing (100 millones mas rapido)-> Google Quatum AI

## Tools

Estas herramientas nos ayudaran a interactuar con los servicios de google y plantear soluciones

- Console: Es la version web donde podemos interactuar con los servicios.

- Cloud SDK: Es una version para usar lenguajes de programacion por ejemplo librerias en python para crear
buckets por medio de codigo.

- Cloud CLI: Es la terminal o linea de comando donde usamos un binario `gcloud`.

- Cloud Shell: Es una version online de una terminal y un editor de texto.

### Projects

Los proyectos son agrupaciones logicas de recursos. Un recurso va atado con un projecto

Debemos tomar en cuanta las siguientes consideraciones:

- Un proyecto no puede acceder a la informacion de otro proyecto a no ser que use `shared vpc` o
`VPC network peering`
- Los recursos dentro de un proyecto se conectan de manera sencilla y facil
- Cada proyecto en google tiene un nombre, un id unico y un numero unico. Estos identificadores
los usaremos a medida que hagamos llamada a la api de los servicios
- Aunque borremos el proyecto no podremos utilizar el id
- Cada proyecto esta asociado a una billing account
- El proyecto funciona como un namespace
- Podemos tener varios proyectos usando el mismo billing account
- Podemos reutilizar el nombre de los recursos en diferentes proyectos

:::tip
Si queremos agrupar nuestros recursos dentro de los proyectos de forma jerarquica o de una forma mas
compleja podemos usaer **Folders**
:::

## GCAF (Google Cloud Adoption Framework)

Es un **white paper*** el cual nos ayudara a:

- Como una compañia deberia adoptar los servicios de nube de google
- Pasos para cubrir las brechas de conocimiento
- Desarrollar nuevas habilidades

Se compone de:

- 4 themes: Learn, Lead, Scale, Secure
- 3 maturity phases: Tactical, Strategic, Transformational
- Cloud Maturity Scale: Matrix of themes and phases
- Epics: El alcance de los pasos para adoptar la nube
- Programs: Agrupaciones logicas de epicas

### Themes

#### Learn

Este tema tiene que ver con la calidad del aprendizaje que tienen nuestros equipos
tecnicos. Las principales preguntas que nos hacemos son:

- How effective are the results?
- Who is engaged?
- How widespread is that engagement?
- How concerted is the effort?

#### Lead

Tiene que ver con la calidad de los equipos, como estan motivados, como estan conformados,
que cultura de liderazgo tienen. Las principales preguntas que nos hacemos son:

- How are the teams structured?
- Have the got executive sponsorship?
- How are cloud projects, budgeted, governed?

#### Scale

Como funcionan los procesos dentro de la empresa, reducir las tareas operacionales y los procesos.
Las principales preguntas que nos hacemos son:

- How are cloud based services provisioned?
- How is capacity for workloads allocated?
- How are application updates managed?

#### Secure

La capacidad de proteger nuestros servicios de personas maliciosas o no autorizadas.
Depende de la madurez de los otros 3 temas. Las principales preguntas son:

- What strategies govern the whole?
- What techologies used?
- What controls are in place?

### Phases

#### Tactical (short term)

Aqui es cuando la empresa se mueve de forma individual, no se suele tener un plan coherente.

- El foco principal es en reducir costos
- no esta tan afinado el termino de escalamiento
- entrar a la nube con poco cambio.
- No existe la planificacion

#### Strategic (middle term)

- Ya tenemos una coherencia en el equipo o areas
- Planificamos con un ojo en el futuro
- los equipos de it son eficientes y efectivos

#### Transformational (long term)

- Funciona correctamente los equipos de it
- el foco es integrar la informacion y conseguir insight
- conseguimos nueva informacion y la analizamos
- it ya no es gasto sino nuestro principal aliado para mejorar nuestros servicios

### Cloud Maturity Scale

Esta matrix junta los themes con las phases con el fin de identificar en que punto
esta nuestro negocio.

ADJUNTAR IMAGEN

### Epics

Una vez que identificamos como esta nuestro negocio por medio de cloud maturity scale
es momento de usar la epics.

Epics, es como estructuramos el alcance y las tareas para adoptar la nube, no se deberian
sobrelapar, luego las podemos dividir en historias de usuario.

ADJUNTAR IMAGEN

:::tip
Si vamos corto de tiempo debemos enfocarnos en la seccion con colores
:::

### Programs

Es una agrupacion logica de epicas la cual correlacionamos con los themes.
![programs](/img/cdl/programs.png)

:::tip
Si tenemos problemas para aplicar el cloud adoption framework google tiene los TAM (Technical account manager)
el cual es un equipo especializado de google que nos ayudara en nuestro camino, esto lo obtenemos si tenemos el
plan de soporte premium de google
:::

:::tip
Podemos usar el cloud maturity assesment de google si necesitamos una ayuda extra e identificar en que parte de
la matrix estamos en cada servicio.
:::

## Compute

### Compute Core Services

1. Compute Engine: Creamos y desplegamos maquinas virtuales
2. Bare metal solution: Hardware especializado para cierto tipo de tareas
3. App engine: Crea y despliega aplicaciones en ambientes controlados
4. Cloud GPU: Agregar GPU a nuestras cargas de trabajo
5. GKE: Desplegar y escalar contenedores usando kubernetes
6. Sole-Tenant Nodes: Maquinas virtuales dedicadas para cumplir compliance
7. Cloud functions: Funciones serverless de un solo proposito que responden a eventos

### Compute Other Services

1. VMware Engine: Migrar y correr vmware workloads en google
2. Preemptible Vms: Desplegar maquinas virtuales efimeras (de corta vida)
3. Migrate for compute engine: Migrar vms on premises o de otras nubes
4. Shielded Vms: Desplegar maquinas virtuales mas robustas

### App Engine

Es un PaaS (platform as a services) nos ayuda a desplegar aplicaciones web sin tener que preocuparnos
de la infraestructura, es como el heroku de google.

Ventajas:

- Sandbox para lenguajes mas comunes
- podemos usar cualquier lenguaje via docker
- cuenta con cloud monitoring y cloud logging por defecto para monitorear el estado nuestras aplicaciones
- cuenta con cloud debugger y error reporting para diagnosticas y reparar bugs
- Application versioning: Facilidad de crear diferentes ambientes
- Traffic spliting: Podemos redirigir el trafico por diferentes versiones para hacer A/B test
- Application security: podemos definir access rules with app engine firewall
- Maneja SSL certificates de forma automatica

Cuenta con dos tipos ambientes:

1. Standard
    - Se proviosiona en segundos
    - se ejecuta en un sandbox
    - diseñado para escalamiento rapido
    - soporta los lenguajes mas comunes
    - puede escalar a 0 instancias
    - precio basado en horas
    - no podemos tener procesos en segundo plano
    - no podemos hacer ssh
2. Flexible
    - soporta cualquier tipo de lenguaje
    - ejecuta docker
    - podemos hacer ssh
    - empieza en minutos
    - diseñado para trafico predecible y consistente
    - tiene una instancia minimo corriendo
    - podemos ejecutar procesos en segundo plano
    - el precio se basa en recursos (cpu, memoria y disco)

## Containers

### Containers Core Services

1. GKE: Desplegar y escalar contenedores usando kubernetes
2. Cloud build: Podemos continuamente desplegar, testear y compilar nuestros contenedores
3. Artifact registry: Almacenamiento, manejo y asegurar contenedores
4. Container registry: Almacenamiento, manejo y asegurar contenedores (la anterior version de artifact registry)
5. cloud run: ejecutar contenedores en ambientes manejados por google

### Containers Other Services

1. Container Optimized OS: feature que permite ejecutar contenedores en vm
2. AI platform deep learning container: contenedores pre configurados con las herramientas de AI, deep learning
3. kubernetes application on marketplace: despliegue de contenedores pre configurados

## Storage

### Storage Core Services

1. Cloud storage (object storage): Para almacenar archivos como objetos de forma global
2. Persistant Disk (block storage): Para agregar block storage (discos duros) a nuestras vm
3. File store (file system storage): Crear un servidor de archivos en unambiente manejado por google que tiene NFS
4. Cloud storage for firebase:

### Cloud Storage

- Es serverless nos sirve para almacenar objetos
- Nueve 9 de durabilidad
- No tenemos un tamaño minimo por archivo
- Almacenamiento infinito
- Baja latencia
- Los archivos son llamados objects
- Las carpetas son buckets
- Redundancia geografica

#### Storage Classes

- Standard (0 dias): La mas cara entre las clases, para acesso frecuente a archivos
- Nearline (30 dias): Para acceder a archivos menos de una vez por mes
- coldline (90 dias): Para acceder a archivos menos de una vez por trimestre
- archive (365 dias): para logs, backups, la mas barata

:::caution
Los dias en parentesis a lado de las clases son el tiempo minimo que debe tener un archivo antes de ser eliminado
sino tendremos un valor extra que pagar
:::

## Network

### Network Core Services

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

### Network more services

1. Cloud armor: Nos ayuda a proteger nuestros servicios frente a ataques DDOS
2. Cloud CDN: Cachea nuestro contenido estatico para que nuestros usuarios experimenten el menor downtime
3. Traffic director: Desplegar load balancers de forma global y podemos configurar politicas de trafico mas sofisticadas
4. Cloud Nat: para que nuestras instancias sin ip publica puedan acceder a internet
5. Cloud Router: Para conectar las VPC y nuestras redes on premise
6. Network Intelligence center: Para optmizacion y monitoreo de nuestra red
7. Network telemetry: Para metricas en real time, time security analysis
8. Network Services Tier: Optimizar nuestra red para rendimiento y costos

### VPC features

- Private Google cloud: Podemos acceder a los recursos usando la ip privada
- shared vpc: podemos compartir recursos entre proyectos
- vpc network peering: conectar dos redes de forma privada
- serverless vpc access: permite a los servicios serverless acceder a otros recursos dentro de la red

## Databases

1. Big Query: Datawarehouse manejada por google, serverless, hecha para procesar petabytes y terabytes de informacion
2. cloud spanner: Base de datos relacional hecha por google para escalar de forma global
3. Cloud Big table: Key/value Store noSQL database
4. Cloud SQL: Base de datos relacion que usa open source (Postgres, mysql, mariadb)
5. Firestore: Document Store noSQL database como el mongo de google, permite manejar datos en tiempo real
6. Memorystore: Redis de google, es una base de datos en memoria, perfecto para temas de cache
7. Database Migration Service: para migrar a cloud SQL con minimo downtime y es serverless

## Serverless

1. Cloud functions: funciones de proposito unico que reaccionan a eventos
2. Cloud Run: ejecuta contenedores en ambientes contralados por google
3. App Engine (standard env): deployar aplicaciones web en lenguajes conocidos
4. Eventarc: Para construir aplicaciones basada en eventos
5. knative: Desplegar y manejar soluciones nativas en la nube para kubernetes
6. Workflows: Orquestrar y automatizar http apis
7. Bigquery: Datawarehouse manejada por google, serverless, hecha para procesar petabytes y terabytes de informacion
8. Cloud storage: Para almacenar archivos como objetos de forma global

## Internal Services

Suelen ser servicios que no podemos utilizar y que son de uso exclusivo de google excepto (Cloud Spanner)

1. Spanner: Database sql de forma global
2. Borg: Un cluster que maneja muchos jobs de diferentes aplicaciones
3. Chubby: DLM (distributed lock manager) servicio que prevee el uso de archivos en una vm
4. Colossus: File system para los clusters el cual provee toda la infraestructura para los servicios de database y
storage

## Api Management

### Apigee Api Platform

Para desarrollar, asegurar, desplegar y monitorear nuestras apis donde sean. Es un poco caro pero tiene
features como:

1. API Analytics: Obtener insight y metricas de nuestra api
2. API Monetization: Podemos crear apis para que las usen con buena documentacion
3. Apigee Sense: Para proteger nuestras apis de ataques
4. Apigee Hybrid: Manejar apis on premises o en google cloud o hybrid
5. Cloud HealthCare api: Para saber la salud de nuestros endpoints

### Cloud Endpoints

Tambien es un api gateway mas barato que apigee que tiene buena integracion con app engine

:::tip
Podemos usar el Developer Portal para testear el api y documentarla
:::

## Data Analytics

1. Big query: Para manejar nuestra data en data warehouse con IA
2. Dataproc: Para realizar batch, querying and streaming processing en un cluster de **apache hadoop y spark**
3. Cloud composer: Crear, programar, monitorear y manejar flujos de trabajos en **apache airflow**
4. Dataflow: Para crear batch and stream pipelines usando **apache beam**
5. Google Data Studio: crear historias con la informacion para crear mejores decisiones de negocio
6. Pub/Sub: Ingestar eventos en tiempo real de donde sea
7. Cloud Data fusion: Crear pipelines de datos en un ambiente libre de codigo
8. Data Catalog: Para descrubrir y entender nuestra informacion
9. Dataprep by trifacta: Explorar y limpiar informacion para el analisis
10. Cloud Life science: usa contenedores para procesar informacion medica

## Developer Tools

1. Cloud Code: Para extender las funcionalidad de nuestro IDE, podemos hacer debug o desplegar
nuestras aplicaciones de kubernetes
2. Cloud Source Repositories: El github de google podemos usar app engine, cloud build, cloud logging
3. Cloud Scheduler: Para realizar cron jobs
4. Cloud Task: Para ejecutar tareas de forma asincrona
5. Tekton: Crear CI/CD pipelines usando kubernetes

## Migrations Tools

1. Anthos: para modernizar aplicaciones en ambientes hibridos y multi cloud
2. Anthos on VMware: modernizar aplicaciones en ambientes de vmware
3. Anthos GKE: desplegar aplicaciones en gke
4. Anthos config manager: para automatizar politicas para entornos hibridos de kubernetes
5. Cloud run for anthos: Combina kubernetes con serverless
6. Apigee: Api gateway
7. Google cloud marketplace for anthos: para desplegar aplicaciones pre configurada
8. migrate for anthos: este servicio nos ayuda a migrar contenedores desde sistemas on prem to gke
9. Operations: Agregar metricas, logs y eventos a nuestra infraestructura
10. Traffic Director: desplegar un balanceador de carga global con reglas mas complejas

## Cloud deployment manager

es el IaC services para desplegar infraestructura y usa yaml

## IOT Core

Para conectar de forma segura y manejar nuestros dispositivos ioet

## Operational Services

1. Cloud monitoring
2. Services level monitoring
3. Cloud Logging:
4. Error Reporting:
5. Cloud Trace:
6. Cloud Debugger:
7. Cloud Profiler:

## Firebase

Es un servicio bastante util que ofrece muchas funcionalidades, si lo que queremos es
solo enfocarnos en desarrollar codigo y probarlo este es el servicio ideal para no usar GCP

Funcionalidades:

- Cloud Firestore
- Machine learning
- Cloud functions
- authentication
- Hosting
- cloud storage
- Realtime Database
- Crashlytics
- Performance Monitoring
- Test Labs
- App Distribution
- Google Analytics
- In-App Messaging
- Predictions
- A/B Testing
- Cloud Messaging
- Remote Config
- Dynamics Links

## Migration Services

- Database migration services: Cuando queremos migrar nuestras bases de datos open source a cloud sql
- Big query Data transfer: Para importar data a bigquery

----

- Migrate for compute engine

Cuando queremos migrar maquinas virtuales de nuestro sistema actual a la nube (lift and shift)

Ventajas:
- No sufrimos downtime podemos seguir usando la maquina principal
- Podemos seguir replicando el hard drive
- podemos clonar y testear la maquina para saber si funciona como esperabamos
- podemos desarrollar todas estas tareas de migracion desde la consola

----

- Migrate for anthos

Cuando queremos migrar contenedores de diferentes ambientes 

Podemos migrar contenedores de las siguientes plataformas:
- GKE
- anthos 
- anthos cluster vmware
- anthos cluster aws

:::tip
Podemos usar la funcionalidad de `auto-generated container artifacts`, ademas no necesitamos 
tener una suscripcion en anthos para realizar la migracion y si lo migramos a gke es gratis 
:::
----

- Cloud Storage Transfer services

Cuando queremos migrar informacion desde buckets S3 a cloud storage. Podemos establecer 
horarios en los que realizamos la transferencia de la informacion de lugares externos a google 
o incluso lugares internos como de un bucket a otro bucket

Podemos hacer:
- Mover informacion o crear backups 
- podemos agendar transferencias unicas o periodicas
- borrar la informacion que movemos despues de moverla
- Podemos agendar sincronizaciones periodicas para manter las fuentes de datos al dia

----

- Transfer appliance

Cuando migramos cantidades masivas de informacion de forma segura 

hay dos configuraciones:

- 100 TB 
- 480 TB

Casos de uso
- es mas barato enviar discos duros por avion o barco que por internet
- tenemos mas de 10TB de informacion
- demora mas de una semana enviar la informacion por network

### Types of migrations

Existen 3 tipos de migraciones desde on premise hacia la nube:

1. lift and shift (la mas facil)
    - Pocas modificaciones
    - La estrategia mas rapida para migrar a la nube
    - No aprovechamos muchas ventajas que ofrece la nube
2. Improve and move
    - Refactorizamos nuestra aplicacion
    - Suele demorar mas tiempo
    - Aprovecha mas ventajas de la nube
3. Rip and Replace (la mas complicada)
    - Reconstruir nuestra aplicacion desde 0
    - Aprovecha al maximo las ventajas de la nube
    - Toma muchisimo tiempo

### Migration Path

Este camino esta dividido en 4 etapas:

1. Assess

Realizar un levantamiento de procesos con el fin de completar lo siguiente:

**Hacer un inventario de la infraestructura**
Este inventario debe incluir:
- Especificaciones del hardware que se usa 
- listado de todas las maquinas que se usan
- licencias 
- sistemas operativos

**Entender el funcionamiento de la aplicacion**
Podemos realizar un catalogo de las aplicaciones para con esto 
recopular toda la informacion y realizar una matriz entre complejidad y riesgo.

Ademas de identificar dependencias y requerimientos de la aplicacion

**Educar al equipo**
Asegurarnos que el equipo tiene los conocimientos necesarios de nube para 
realizar las migraciones ]

**Realizar POC**
Escoger una de las aplicaciones del catalogo e implementarla con el fin de poner 
aprueba al equipo antes de ir a un ambiente de produccion

Ademas podemos hacer pruebas de perfomance para establer dichos numeros

**Realizar los calculos del TCO (total cost of ownership)**
Con la prueba de concepto que se realizo podemos calcular el TCO con el fin de 
comparar precios y determinar si hay o no una mejoria y de cuanto es

**Escoger la app con menor riesgo y mas sencilla de migrar**
Finalmente debemos seleccionar la aplicacion que mas facil sea migrar y que no nos 
represente unos daños grandes al momento de migrar ademas de tener backups o contigencias 
y luego mirar las siguientes aplicaciones mas complejas 

----

2. Plan
Luego de tener levantados los procesos empezamos a realizar la documentacion 
para la arquitectura y migracion. Este plan debe contar con:

**Establecer servicios y usuarios con sus identidades**
Buscamos entender cuales son los usuarios y que tipo de cuenta se le va a proveer,
tenemos las siguientes tipos de cuentas:

- Google accounts: cuenta que identifica a una persona
- Service accounts: cuenta que suele identificar a los servicios 
- Google groups: colleciones de cuenta de personas
- Google workspace domain: Nos permite usar toda la suit de google pero no cloud
- Cloud identity domains: Nos permite usar gcloud pero no la suit de google

**Desarrollar los recursos que usara la organizacion**
Organizar los recursos por medio de folder, organizaciones, proyectos. Ademas podemos 
basarnos y usar una de las siguientes tipo de arquitectura:

- Environment oriented
- Function oriented
- Granular access oriented

**Definir los grupos y roles**
Identificar los roles que necesitaremos para usar los recursos que implementaremos

**Diseñar la topologia de red**
Ver que topologia nos viene bien para el proyecto tomar en cuenta estos 3 servicios 

- Cloud VPN 
- Cloud peering
- Cloud Interconnect

----

3. Deploy
Definir prioridades en despliegue. Re ajustar la arquitectura para cumplir 
con las nuevas necesidades. Desplegar y pulir

**Deploy manual**
Consideramos hacer un deploy manual porque es el mas sencillo de hacer y porque buscamos 
ver como funcionan las piezas entre si 

**Usar herramientas de manejo de configuracion**
Con esto garantizamos que siempre los ambientes o tengan las mismas configuraciones, 
logramos mejorar nuestra escalabilidad al tener la configuraciones de un ambiente en un 
script y que una vez este deployada una instancia ejecutamos el script de configuracion y ya 

**Considerar usar orquestacion**
Hay herramientas como kubernetes que no facilita escalar cosas como los contenedores no dudar 
en usarlas 

**Despliegues automatizados**
Incorporar rutinas de CI/CD

**IaC**
Usar herramientas para levantar infraestructura ademas de tenerlo en un repositorio ayuda entre 
equipos a provisionar recursos en la nube 

----

4. Optimize

Luego de desplegar la infraestructura completamente empezamos a buscar como mejorar 
dicha arquitectura usando las ventajas entre los diferentes servicios. para reducir costos, 
incrementar rendimiento, etc.

**Seguir en continua capacitacion**
Esto con el fin de encontrar servicios nuevos que nos ayuden a mejorar la arquitectura 
actual 

**Monitorear todo**
Es importante implementar herramientas de monitoreo para validar que la arquitectura funcione 
como debe funcionar

**LLevar todo a codigo**
Aplicando conceptos como infraestructura como codigo y politicas como codigo 
tenemos ambientes mas reproducibles y auditables

**Usar servicios manejados por google**
Al usar servicios manejados por google nos libramos de mucha carga de trabajo

**Mejorar performance y escalabilidad**
aplicar conceptops como escalamiento vertical u horizontal depende del caso de uso 
mejoraria nuestra arquitectura.

**Mejoras en precios**
Buscar implementar o que nuestra arquitectura cumpla con los requerimientos que pide google 
para solicitar codigos de descuentos. Existen los siguientes:

- Sustained use discount
- commited use contracts
- flat rate princing

## AI Services

### Vertex AI
Es la plataforma unificada entre AI platform y Auto ML para machine learning y deep learning integra las siguientes 
funcionalidades:
1. Data readiness
2. Feature engineering
3. Training / HT Parameters
4. Model serving
5. Understanding Tuning
6. Edge
7. Model monitoring
8. Model management

Desde el paso 1 al 5 podemos usar `AutoML`, ademas que podemos automatizar todos los pasos 
con pipelines lo que se conoce como `MLops`.

Tambien tenemos notebooks y maquinas con gpu para deep learning

#### Environments 

Necesitaremos crear nuestros entornos para poder desarollo vertex ai lo permite pero debemos tener claro 
3 funcionalidades importantes a la hora de setear nuestro ambiente segun nuestras necesidades:

1. Deep Learning Vm images: estas imagenes estan optimizadas para tareas de data science o ml 

2. Deep Learning container: estos contenedores estan seteados para tareas con deep learning

3. Cloud GPU: como las gpus son caras podemos usar este servicio para usar gpus fraccionadas

### AI Services

1. Vision AI: Obtiene descubrimientos de imagenes o videos
2. Video AI: Para crear experiencias de video
3. Natural language API: Da insigths del texto
4. REcomendation AI: Para crear catalogos personalizados
5. Translation: Traduce entre lenguajes
6. Talent Solution: Analiza postulaciones laborales
7. Document AI: Para revisar documentos
8. Agent asist: Para dar asistencia telefonica
9. DialogFlow: crear interfaces para realizar conversaciones tipo chat bots
10. Text to speech: covierte lo que escribimos en lectura
11. speech to text: covierte lo que hablamos en texto

## Security

### Identity Services

1. IAM: Para manejar roles y permisos en google cloud de forma muy granular
2. Cloud identity: Podemos manejar usuarios, aplicaciones, desde la consola
3. Identity Platform: Para agregarle un grado de identidad y acceso a nuestras aplicaciones
4. Beyond Corp: Zero trust solution nos agregar data and threat protection
5. Identity-Aware Proxy: Forma para conectarnos de forma segura a nuestas vms
6. Security key enforcement: Forzar usar security keys para impedir la apropiacion de cuentas
7. cloud data loss prevention:
8. Security command center: es la plataforma de google donde centralizas seguiridad y riesgos con
assest discoverym threat protection y prevention

#### Features

1. Resource Manager: Para manejar recursos en gcp
2. Managed services for microsoft active directory: para el activde directory
3. Titan security keys: security keys hechas por google para evitar los pishings
4. Acess transparency:
5. binary authorization:
6. cloud assets inventory:
7. cloud audit logs:
8. shielded vms:
9. Cloud hsm:
10. vpc service controls:
11. incident response manager:

### Secure by design

**Seguridad operacional y dispositivos**
- usan practicas de seguridad muy estrictas para desplegar software
- Equipo operacional destinado a responder sobre threats 24/7/356

**Comunicaciones de internet**
- Todas las comunicaciones sobre internet se encriptan en transito
- Tienen muchas capas en su red para defender del DDos

**Identidad**
- Autenticacion fuerte
- La informacion confidencial o snsible esta protegida con llaves de seguridad

**Servicios de almanceamiento**
- La informacion guarda se encripta at rest
- Proteccion frente accessos no autorizados o interrupcion de servicios

**Despliegue de servicios**
- Cada aplicacion que se despliega fue construida pensando en que sea segura
- No se asume confianza entre servicios crean multiples formas de garantizar dicha confianza
- La infraestructura es diseñada desde el principio para que sea multi tenant

**Infraestructura en hardware**
- Todos los dispositivos que se usan estan debidamente protegidos con todas las politicas y estandares

**Datacenters**
- Tienen multiples features praa seguridad como monitoreo de camaras, tarjetas de acessos, alarmas, detectores 
de metal, etc.


#### Compliance Reports manager

Esta es una seccion de google que nos permite ver todos las certificaciones que tiene de compliance, 
podemos descargar los pdf y usarlo para nuestras auditorias o como seguridad de que cumple 
tal estandard

### Privacy

1. Nosotros controlamos nuestra informacion no google
2. Google no usa nuestra inforamcion para ads
3. Google es transparente con la informacion que recolecta y como la usa 
4. Google nunca vendera nuestra informacion a otras entidades 
5. Seguridad y privacidad son sus principios para desarollar todos sus productos

### Transparency 

1. Google no es dueño de tu informacion, solo tu eres el dueño de tu informacion
2. Google no vende informacion a otras entidades
3. Google no usa tu informacion para marketing
4. Toda la informacion esta encriptada por defecto 
5. Google protege la informacion
6. Google no le da acesso a la informacion ni al gobierno

## Identity and Access

### Cloud identity

Es un servicio de google que funciona como IaaS (Identity as a service) y basicamente sirve para identificar 
cuentas entre recursos. Con este servicio podemos centralizar a todos los usuarios

Funcionalidades:
- User lifecycle management
- Account security
- Single sign-on
- cloud directory
- Device management
- Reporting and analytics
- App management
- Extensible apis 

Podemos validar dichas identidades entre diferentes servicios como:
- google cloud 
- azure directory 
- Azure activate directory 

:::tip
Usamos cloud identity cuando nuestros empleados o clientes no usan cuenta de gmail
:::

Existen dos versiones de cloud identity `free` y `premium`

### Active directory

#### Terminology 

- Domain: Es una base de datos donde almancenamos los AD objects 

- Domain controller: Es el servidor que autentica y autoriza a los ad objects

- AD Object: es el elemento basico de un activate directory ejem. computadoras, personas, grupos, carpetas

- Domain computer: una computadora que esta registrada como una unidad con una base de datos central

- Group policy object: El grupo de permisos, esto nos dice que puede hacer el ad object

- organization units: es una subdivision de active directory para organizar ad objects

- Directory service: permite almacenar la informacion del active directory y compartirla en red

#### Managed service for microsoft active directory  

Es un active directory hosteado en google 

### Identity Providers

Son intermediarions que mantienen y almacenan informacion para que los usuarios se autentiquen y autoricen 
al momento de usar aplicaciones. Los identity providers certificados son Google, Amazon, Facebook, github, etc.

Basicamente con este feature puedes hacer login en otras plataformas sin tener una cuenta creada.

#### Protocols 

Para esto los identity providers usan diferentes protocolos que ya son estandares para comunicarse entre si. 

##### OpenID

Estandar abierto y protocolo de autenticacion descentralizado. OpenID nos dice quienes somos

##### OAuth2.0

Estandar de la industria que usa tokens para identificarnos y nos dice que podemos hacer 

##### SAML

Security Assertion Markup Language es un estandard abierto que nos autentica y autoriza entre el el identity 
provider y el service provider se usa mucho para hacer Single sign on en los navegadores

## Support 

## Billing

## Pricing

## Resource Hierarchy