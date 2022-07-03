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

:::note
Resumen

- Batch o Streaming => Como queremos mover la data
- Relacional o no relacional => Como queremos acceder a la data
  - Data modelling => Como preparamos o diseñamos la data
    - Schema o schemaless => Como estructuramos la data para su busqueda
- Data integrity o corruption => Como podemos confiar en la autenticidad de la data
  - Normalized or denormalized => Tradeamos velocidad vs calidad
- Synchronous vs Asynchronoues => Mecanismo para la transmision de la informacion
- ELT vs ETL => Es la forma en la que movemos la informacion de un lugar a otro
:::

### Conceptos Generales

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

- data sources: Es el lugar donde extraemos la informacion

#### Data Mining

Es el proceso de extraer patrones y conocimiento de grandes cantidades de informacion
se lo suele asociar con la extracion de la data en si y esto no es.

CRISP-DM comenta que el data mining tiene 6 fases:

1. Business understanding: Que necesita el negocio
2. Data understanding: Que data tenemos y que data necesitamos
3. Data preparation: Como organizamos la data para modelarla
4. Modeling: Que tecnica de modelado vamos a usar
5. Evaluation: Que modelo de data cumple con nuestro objetivos de negocio
6. Deployment: Como las personas acceden a la data

Metodos:

- Classification: Clasificar la informacion en clases diferentes
- Clustering: Dividir la informacion en diferentes grupos
- Regression: Identificar y analizar las relaciones entre variables debido a la presencia de
otro factor
- Sequential: evaluar data secuencial para encontrar patrones
- Association Rules: Descubrir patrones ocultos, enlaces entre dos o mas elementos
- outer detection: Buscar informacion en elementos que no se comportan de forma esperada
- prediction: usar informacion como clustering, trends, regression para predicir el futuro

#### Data Wrangling

Es el proceso de transformar data cruda en algun otro formato que nos sea mas util

Pasos:

1. Discover: Entender que informacion tenemos y cual es util para el requerimiento
2. Structuring: Necesitamos organizar la informacion de forma que los resultados sean faciles de usar
3. Cleaning: Cambiar los valores nulos, remover outliers, en general estandarizar la data
4. Enriching: Agregar o mejorar la data actual con otra data de otro data sources
5. Validating: Verificar la calidad de los datos
6. Publishing: Publicar la data en el datastore para que sea usada por los diferentes actores

#### Data Analytics

Es el acto de examinar, arreglar y limpiar la informacion para extraer o estudiar informacion
importante para el negocio

Workflow:

1. Data Ingestion
2. Data Cleaning and Transformation
3. Dimensionality Reduction
4. Data Analysis

##### KPI (Key performance indicators)

Son un tipo de medida que tiene una compañia para indicar su rendimiento en el tiempo

Hay de dos tipos:

1. Cuantitativa:
    - hechos representados por valores
    - representan una cantidad numerica

2. cualitativa:
    - Son observadas y no puden ser representadas por un valor numerico
    - Valores numerico que representan como uno se siente. Ejemplo Satisfaccion

##### Techiniques

1. Descriptive Analytics: responde el Que ha sucedido?
    - Metricas especializadas (KPI o ROI)
    - Reportes de finanzas o ventas
2. Diagnostic Analytics: response el Que paso?
    - Estadistica descriptiva
    - Detectar y Aislar anomalias
3. Predictive Analytics: responde el que pasara?
    - Usamos data historica para predecir tendencias
    - Usamos estrategias de ML o estadisticas (decision trees, regresion, neural networks)
4. Prescriptive Analytics: responde el como podemos hacer que pase?
    - va mas adelante que predictive analytics debido a que usamos otras fuentes de datos
    para encontrar posibles escenarios que podemos explotar
5. Cognitive Analytics: responde Que pasaria si esto sucediera?
    - Usamos informacion para crear escenarios que podrian pasar con el fin
    de encontrar las soluciones a dichos escenarios.

:::tip
Entre mas abajo estemos en la lista mas valor aportara a la empresa y mas compleja
de realizar tambien es
:::

#### Batch Processing

Cuando enviamos lotes de informacion para ser procesada
Caracteristicas:

- Suele estar programada
- No esta en real time
- Suele ser economico
- ideal para workloads pesados o largos

#### Stream Processing

Cuando procesamos la data tan pronto como llega
Caracteristicas:

- Suele ser util cuando queremos cosas en tiempo real
- Suele ser mas costosa

#### Row Store

Almacenamos la informacion en filas, esto es util cuando queremos saber toda la informacion
de un campo particular.

- Data es almacenada en rows
- Bases de datos tradicionales son row store
- Buenas para bases de dato de uso general
- Especialmente diseñadas para OLTP
- Cuando es importante tener toda la informacion de un registro
- No es bueno para analiticas

#### Column Store

Almacenamos la informacion en columnas, es bueno solo cuando queremos saber la informacion
de forma macro y no micro

- Facil agregar columnas (informacion)
- NOSql se usa bastante
- Buenas para grandes cantidades de informacion
- Buenas para OLAP

#### Data Integrity

La integridad de la informacion busca como objetivo unico garantizar que la informacion
se almacene de la forma que se defina.

tambien podemos hacer la analogia con un proxy, la data integrity usa el patron proxy para
asegurar la calidad de la informacion.

Data integrity es el opuesto a data corruption

:::tip
Como podemos asegurar la integridad de nuestra informacion ?

- Teniendo informacion bien documentada de nuestros modelos
- Constraints para garanzatizar el correcto almacenamiento de la informacion
- Versiones redundantes de la data para su comparacion o backup
- Analisis humano de la informacion
- Funciones de tipo hash que determinen si la data fue manipulada
- Usar el principio de privilegios minimo
:::

#### Data Corruption

Es el acto de almacenar informacion de forma que no cumpla los parametros con los que se definieron
esto se puede dar por varios motivos:

1. fallos en hardware
2. hackers o personas maliciosas
3. Error humano
4. Forzar cambios por medio de software (alguna migracion forzada)

#### Data Consistency

Cuando tenemos la misma informacion en varios lugares y ambos lugares coincide o no coincide.

Cuadno tenemos la informacion en varios lugares y necesitamos que sea igual en todos lo sitios.

Para esto tenemos dos tipos

- Strongly consistent: cuando tenemos una relacion 1 a 1, es decir, que la informacion es identica
en todos los sitios suele demorarse mas tiempo porque debemos actualizar en todos los sitios para la
transmision de la informacion usa el metodo sincrono. Ejemplo cuando tenemos nuesta base de datos original
y una de backup

- Eventually consistent: presenta tiempo menores a cambio de no garantizar que tenemos una informacion
actualizada en todos los sitios para transmitir informacion usa el metodo asincrono. Ejemplo cuando alguien
se descarga una copia de la base de datos para hacer analisis.

#### Data Structures

Es la forma en que almacenamos la informacion, la misma que nos permitira hacer modificaciones.

Tipos:

1. unstructured: no tiene relacion, no tiene organizacion, un monto de data que podria ser util

2. semi-structured: No tiene esquema, pero esta relacionada de alguna manera
Podemos buscar la informacion (con limitaciones). Los tipos de archivos mas comunes son:
    - XML
    - JSON
        - Es un formato de data muy ligero
        - Es facil de leer para los humanos y maquinas
        - Es facil de parsear o general para las maquinas
        - Esta basada en un sub conjunto de JavaScript

- PARQUET
        -

        -
        -

- AVRO
        -

        -
        -

3. structured: Podemos buscar la informacion de forma facil

#### Non Relational Data

Es cuando no almacenamos informacion de manera tabular sino que usamos otros tipos de data structures.

Tipos de bases de datos no relacional:

1. Key/value:
    - cada valor tiene una key
    - Diseñadas para escalar
    - solo para observar
2. Document:
    - Su estructura de datos suele ser un JSON

3. Columnar:
    - Usamos datos de forma tabular pero almacenamos por columna

4. Graph:
    - La informacion es almacenada en nodos

### Conceptos Data relacional

Cuando usamos data relacionada, normalmente en sql nos encontraremos con los siguientes
terminos.

- tables: Agregupaciones logicas de columnas y filas (como una hoja de calculo de excel)
  - Tabular data: data que usa tablas como estructura

- Views: El resultado de un query almacenado en memoria (puede ser una tabla temporal)
- Materialized Views: El resultado de un query guaradado en disco
- Indexes: Son copias de nuestras tablas ordenadas por una o varias columnas
- Constraints: Reglas que aplicamos a la data para garantizar su integridad
- Triggers: Son funciones que se ejecutan en eventos especificos que genera la db
- Primary Key: Una o varias columnas unicas que identifican a la tabla
- Foreign Key: Es la columna que contiene el valor de una primary key de otra tabla
esto es util para poder establecer las relaciones entre tablas.
- normalized: Esquemas diseñados para no almacenar informacion redundante
- denormalized: Esquemas que combinan informacion con el fin de que el acceso
a dicha info sea rapida
- pivot table: Es una tabla que nos brinda informacion estadistica la misma que es facil de
filtrar o realizar agregaciones

:::caution
Beneficio de los indexes
Podemos obtener informacion muchisimo mas rapido a cambio de tener costos mas elevados
en storage debido a que tenemos la misma informacion duplicada
:::

#### Relationships

Las relaciones entre las tablas se producen por medio de la primary key y la foreign key
esto nos ayuda para separar la informacion entre tablas y a su vez poder unirlas a placer.

Existen 4 tipos de relaciones:

- one to one: relacion 1 a 1 ejemplo un humano tiene una boca
- one to many: relacion 1 a muchos ejemplo un humano tiene varios dedos
- many to many: relacion muchos a muchos ejemplo muchos humanos tienen muchos dedos
- many to many (junction table): es cuando creamos una tabla que rompa la relacion many to many
convirtiendola en una relacion one to many.

#### Data warehouse

Es un datastore relacional usado para trabajos analiticos (dashboards, reportes, etc).

- Generalmente es column store
- Esta diseñado para almacenar petabytes de informacion
- Normalmente generamos aggregations (promedio, mediana, moda, etc.)
- Estan diseñadas para ser HOT, esto significa que ejecutan queries bastante rapido
- No estan diseñadas para acceder la informacion muy rapido. Por ejemplo cada milisegundo

:::tip
Datamart es un segmento de una datawarehouse normalmente por debajo de 100 gb, que tiene
un caso de uso especifico. Normalmente son read-only, al usar datamart los costos generalmente
son menores
:::

#### Data LakeHouse

Es la combinacion entre un data lake y un data warehouse. Trae lo bueno de ambos mundos

Data lakeHouse vs Data lakes

- Son buenos para hacer reportes
- Mas faciles de configurar y mantener
- tiene feautes para evitar el data swamp (data corruption)
- Tienen mejor performance

Data lakehouse vs data warehouse

- Soportan videos, audios y archivos de texto
- Hechas para tareas de ML y data scientist
- Suportan streaming y ELT
- Trabaja con mucho open source formats
- La informacion se guarda como blob

:::tip
Si queremos usar un data lakehouse podemos usar Apache Delta Lake
:::

### Recomendaciones

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
