---
sidebar_position: 8
---

# Cloud Computing

Es cuando usamos una red remota de servidores, la misma que esta hosteada en el internet
para almacenar, manejar y procesar informacion en vez de usar un servidor local o computadora personal

- On premises: son todos los servidores o infraestructura que tenemos fisicamente, 
los cuales los manejamos nosotros.

- Cloud providers: Ellos tienen toda la infraestructura, ellos asumen todo el riesgo de 
mantenimiento y nosotros solo alquilamos.

## Evolucion 

1. Servidores dedicados -> Una maquina virtual dedica a un negocio y solo puede ejecutar una aplicacion
Alta seguridad, Alto costos, Alto mantenimiento

2. Servidores virtuales privados -> Una maquina virtual dedica a un negocio pero con multiples
maquinas virtuales dentro para ejecutar diferentes procesos. 
Alta seguridad, Alto costos, Alto mantenimiento, Alta capacidad de configuracion y cambio

3. Servidores compartidos -> Una maquina compartida entre multiples negocios capaz de ejecutar diferentes 
procesos. Bastante barato pero muy limitado

4. Cloud computing -> Multiples maquinas fisicas que actuan como un sistema. Este sistema lo abstraemos
en multiples servicios.

## Servicios comunes entre Proveedores de nube 

- Compute -> Maquinas virtuales

- Storage -> Discos duros virtuales

- Networking -> Redes de computadoras virtuales, podemos isolarlas, etc.

- Databases -> Bases de datos para nuestras aplicaciones tanto relacionales como no relacionales

## Beneficios

- Cost effective -> Se paga por lo que se consuma 

- Global -> Podemos usar los servicios en cualquier parte del mundo 

- Secure -> Los proveedores de nube se encargan de asegurar fisicamente los servidores

- Reliable -> Tenemos features como, backups, replicas y tolerancia a fallas para dar mas seguridad a los usuarios 

- Scalable -> Tener la capacidad de incrementar o decrementar los recursos en funcion a la demanda 

- Elastic -> Automatizar la escalabilidad

- Current -> Los mantenimientos de hardware se dan sin darnos cuenta o tener afectaciones 

## Tipos de Cloud computing 

1. SaaS (software as a service) es la punta de la piramide, un producto que funciona y es manejado 
por el proveedor del servicio por ejemplo: Gmail, tiktok office enfocado al usuario final (no tecnico)

2. PaaS (platform as a service) Enfoca a los desarrolladores y se usa para, deployar y manejar nuestras
apps. Ejemplo: Heroku, app engine, etc.

3. IaaS (infrastructure as a service) Enfoca a los administradores it, Es el bloque basico del it. Provee
acceso al networking, storage y databases. Ejemplos: AWS, GCP, AZURE

### Responsabilidades
![responsabilidades](/img/cloud-computing/responsabilities.png)

## Tipos de despliegues

### Public cloud 
Todo esta dentro del cloud service provider, bases de datos, aplicaciones, storage, etc.

![public-cloud](/img/cloud-computing/public-cloud.png)

### Private cloud 
Todo esta dentro de los servidores locales, on premises, tenemos una red de computadoras conectadas
entre si 

![private-cloud](/img/cloud-computing/private-cloud.png)

### Hybrid cloud
Tenemos una mezcla de usar recursos en la nube como una aplicacion y la base de datos en un servidor 
on premises.

![hybrid-cloud](/img/cloud-computing/hybrid-cloud.png)

### Multi cloud
Cuando usamos diferentes proveedores de nube dentro de nuestra arquitectura. Por ejemplo tenemos una aplicacion 
en aws y usamos bigquery como data warehouse

## TCO
Es el costo total por tener la propiedad. Normalmente por solo usar el opex y no capex logramos ahorrar
aproximadamente el 75% implementando la misma solucion on premises vs en la nube.

### CAPEX
Tambien conocido como Capital expenditure. Es todo el capital o inversion inicial que se necesita para 
obtener los equipos, ejemplo servidores, discos duros, etc. De cierta forma debemos estar adivinando 
para realizar un presupuesto, cuanto vamos a gastar en luz? cuanto se necesita para la refrigeracion?

### OPEX
Tambien conocido como Operation expenditure. Es todo el dinero que necesitamos para operar, es decir,
el sueldo del persona por levantar una aplicacion. Serian todo los costos no fisicos. Podemos usar una tecnologia 
o servicio sin la necesidad de invertir en los equipos.

## Terminologia

### Availability (High Availability)
La capacidad de garantizar que un servicio permanezca disponible largos periodos de tiempo. Para esto tenemos multiples 
servidores con nuestra aplicacion si algo le pasa a un servidor el otro puede ser usado. Garantizamos 
que no tenemos un single point of failure. Para llevar a cabo esto usamos un `load balancer`. Lo recomendable 
para que una app sea considera HA es que tenga 3 instancias de la app en 2 Availability zones

### Scalability
la capacidad de crecer sin obstaculos. Para esto tenemos dos formas de crecer:

- Vertical scaling (scaling up) es hacer un servidor mas grande, ejemplo, si tengo 10 gb de ram ponerle 20.

- Horizontal scaling (scaling out) crear mas copias del mismo servidor, ya no voy a tener uno sino 2 del mismo tamaño.


### Elasticity
la capacidad de crecer o decrecer para cumplir la demanda de forma automatica. Este concepto es bastante parecido al de 
scalability pero la principal diferencia es que se haga de forma automatica y que no solo crezca la capacidad sino que tambien 
pueda decrecer.

Para llevar esta tarea acabo usamos hozizontal scaling:

- scaling in: eliminando los servidores del mismo tamaño

- scaling out: agregando servidores del mismo tamaño

es bastante complicado usar vertical scaling con elasticity, se usa en las arquitecturas mas tradicionales.

Replicas set son la herramienta para cumplir elasticity

### Fault tolerance
La capacidad de mantenerse activo incluso si existe un fallo


### Disaster recovery (High Durable)
La capacidad de reponerse despues de un fallo y prevenir que la informacion no se pierda

Preguntas que podemos hacernos para buscar que nuestros sistemas sean DR

- Tenemos backups?
- Con que frecuencia se producen dichos backups?
- Cuanto se demoran?
- Como garantizamos que nuestra informacion actual no esta corrupta?

## Evolucion de la computacion

### Servidores dedicados 
- Un servidor para un negocio 
- Necesitamos suponer la capacidad que vamos a necesitar para la aplicacion
- Mucho espacio malgastado
- Limitados por el sistema operativo 
- Tener multiples apps corriendo en la misma pc puede ser un problema al compartir recursos
- Tenemos mas seguridad

![servers](/img/cloud-computing/servers.png)

### Virtual machines 
- Podemos ejecutar multiples maquinas virtuales en una solo servidor
- Tenemos menos espacio malgastado
- Usan Hypervisor para manejar las maquinas virtuales
- Estamos limitado por el sistema operatido 

![vms](/img/cloud-computing/vms.png)

### Contenedores
- Una maquina virtual que ejecuta multiples contenedores 
- no desperdiciamos espacio 
- Docker Daemon para manejar los contenedores
- Cada contenedor puede tener su propio sistema operativo
![containers](/img/cloud-computing/containers.png)

### Functions
- lo conocemos como serverless compute
- subimos una porcion de codigo 
- Solo somos responsables del codigo y de la informacion dentro
- Solo pagamos por el tiempo de ejecucion del codigo
- Tenemos un tiempo de espera hasta que se ejecute la funcion

![functions](/img/cloud-computing/functions.png)
