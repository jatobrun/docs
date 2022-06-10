---
sidebar_position: 5
---

# Data Concepts 
Muchas mas empresas empiezan a tener decisiones basadas en datos 
por ende las empresas empiezan a tener mas y mas datos los cuales 
en muchos casos estan en una forma desorganizada. 

Aqui es donde juega un papel importante los arquitectos de datos 
ya que son los encargados de organizar y crear estructuras a esa 
cantidad de datos desorganizados. Con la intencion de que dicha 
informacion aporte la informacion que deberia aportar.

Los arquitectos de datos buscan resolver los problemas de cada una
de las diferentes areas de la empresa de manera eficiente y unica 
cumpliendo cada una de sus necesidades.

## Historia

1. 1970 Codd publica un paper sobre modelamiento de datos de largas entidades 
financieras
2. 1976 Peter Chen crea el modelo entidad relacion (ERD)
3. 1979 sale a la luz la primera base de datos empresarial (Oracle)
4. 1986 crean el SQL como estandar para las abses de datos 
5. 1989 SQL server
6. 2006 Big data salio a la luz (Aws y Hadoop)

## Introduccion 

- Data: son unidades de informacion que pueden ser representadas por lo que sea, es decir, 
numeros, fotos, codigo de programacion, musica, etc.
- Data Documents: Tipos de agrupaciones de la data
    - DataSets: Tipo de agrupaciones logicas en la que guardamos la data
    - DataBases: Data estructurada que podemos acceder de forma rapida
    - DataStore: Lugar para almacenar Data semi estructurada o no estructurada
    - Data warehouse: Data estructurada o semi estructurada que sirve 
    para crear reportes y analiticas
    - Notebooks: La informacion esta ordenada en paginas para consumo facil
- Data Structures: Data estructurada
- Data Types: Es una unidad simple de data que le dice al compilador como queremos usar la data
- Schema: Es una forma de describir la estructura de la data como un blueprint o un template
- Schemaless: Es cuando un campo puede aceptar varios tipos de datos

:::tip
Bases de datos schemaless comunes:
- Key/Value
- Document
- Wide Columns
- Graph
:::

- query: Es un peticion para consultar datos (read) o realizar alguna operacion (write)
- querying: La accion de ejecutar un query

:::caution
Los query no necesariamente esta relacionado con la data sino que tambien podemos hacer 
tareas de mantenimiento.
:::

:::note
- Batch o Streaming => Como queremos mover la data
- Relacional o no relacional => Como queremos acceder a la data
    - Data modelling => Como preparamos o diseñamos la data
        - Schema o schemaless => Como estructuramos la data para su busqueda
- Data integrity o corruption => Como podemos confiar en la autenticidad de la data
    - Normalized or denormalized => Tradeamos velocidad vs calidad 
:::

#### Batch Processing: 
Cuando enviamos lotes de informacion para ser procesada
Caracteristicas:
- Suele estar programada 
- No esta en real time
- Suele ser economico
- ideal para workloads pesados o largos

#### Stream Processing:
Cuando procesamos la data tan pronto como llega
Caracteristicas:
- Suele ser util cuando queremos cosas en tiempo real 
- Suele ser mas costosa


#### StakeHolders
Es una persona o grupo de personas interesadas en las necesidades 
del negocio o cualquier dueño de algun producto o servicio que sea 
importante para la empresa.

Los arquitectos de datos son unos facilitadores o solucionadores 
de problemas para los stakeholders. Ademas que trabajan juntos.

#### Cuando no usarla 
Como Arquitecto de datos tu tiempo es valioso, la arquitectura de 
datos es importante es por esto que necesitas saber algunas banderas 
rojas que debes solucionar antes de entrar en la arquitectura de datos.

- No hay un problema especifico
- No hay data 
- El problema no esta alineado al negocio
- Proyecto con palabras de moda y que no tienen idea de que es lo que dicen

#### Cuando usarla
- Cuando tenemos problemas basados en datos 
- Cuando el problema cambia de foco 
- Cuando realizamos upgrades o updates en la organizacion

#### Que hace un arquitecto de datos?
Un arquitecto de datos busca crear la mejor respuesta a las siguientes 
preguntas:

1. Que es lo que el negocio trata de hacer?
2. Como los datos pueden ayudar?

Por ende los arquitectos de datos se centran en ambos mundos el tecnico y 
el administrativo. Somos el puente que conecta ambos mundos

Para conseguir esto los arquitectos de datos hacen lo siguiente:

1. entender las necesidades del negocio. La mejor bases de datos 
no son nada sino son adaptadas a las necesidades del negocio

2. Luego de entender el negocio, vemos como estan las bases de datos, 
que pipelines existen, interfaces de usuarios existen

3. Por ultimo diseñamos soluciones que cumplen los objetivos del negocio
con los elementos que se dispongan

## Caracteristicas 
- Los problemas del negocio primero, centrarse en el problema no en la 
tecnologia
- Integridad de la informacion, que sea consistente y precisa
- Governancia de la informacion, seguridad y dueños (quien la maneja,
quien es el dueño y quien tiene aceso a la informacion)
- Escalabilidad y flexibilidad, hay que planear para el futuro, crecimientos 
en usuario, crecimientos en data, posibles cambios que puede sufrir la informacion
- Retencion, Almancenamiento de la informacion, backups, retencion de la informacion

:::tip
Para forzar la integridad de los datos debemos:
- ingresar la informacion una sola vez.
- utilizar id para diferenciar los elementos.
- usar esos id en las otras tablas
:::

:::note
Escalibidad tiene que ver con la cantidad de carga o demanda que puede sufrir
mi base de datos 

Flexibilidad tiene que ver con como mi base de datos se ajusta a nuevas necesidades
:::


## Soluciones 

### Integridad de los datos 

- Podemos usar id con el fin de no repetir informacion 
- reducir la cantidad de campos que deben escribirse
- poner algoritmos de fuzzy matching antes de escribir en la db 
- Reglas al momento de escribir en las tablas 

### Governancia de los datos 

- Podemos usar seguridad a nivel de base de datos para controlar 
quien puede escribir o leer datos de la base de datos 

- Podemos tambien usar reglas a nivel de tablas para controlar que usuarios 
tiene accesos a esas tablas con informacion sensible 


### Escalabilidad 

- Replicas de la base de datos, es decir realizar copias de la base de datos 
en diferentes servidores con y tener un balanceador de carga entre ellos 
ayudara a disminuir el tiempo de lectura 
a los usuarios (No disminuye el tiempo de escritura).

- Fragmentar la base de datos ayuda a disminuir el tiempo de escritura ya que tenemos 
multilples writer donde podemos escribir pero aumentara nuestro tiempo de escritura 
porque debemos buscar en cada una de esas partes para encontrar el dato que queremos.

### Flexibilidad 

- esquemas flexibles 


## Requerimientos funcionales y de negocio 

Los 3 requerimientos de negocios mas comunes son:

- reportes, se necesita **leer** la informacion, esta no cambia tan rapido o de manera 
frecuente. (OLAP) Online analytical processing normalmente se usan Datawarehouse para este
tipo de requerimiento.
- transacionales, se **agrega o actualiza** bastante informacion. (OLTP)
o Online transaction Processing esta diseñado para esto, normalmente se usan bases de datos
- computacionales, la data es diseñada para facilitar computaciones pesadas

Para saber que sistema debemos implementar OLAP VS OLTP nos realizamos la siguiente pregunta 

Que tan rapido necesito que la informacion se refresque?

- Si es una semana, cada dia o cada mes puedo usar OLAP
- Si necesito que la informacion se refesque rapido OLTP

## Conceptos

### Que es Data?


