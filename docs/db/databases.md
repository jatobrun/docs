---
sidebar_position: 3
---

# DataBases
las bases de datos se dividen de relaciones y no relacionales. 

en el grupo de relaciones tenemos dos categorias:
- Transacionales, vendria a ser como un carro de carreras
- Datawarehouse, vendria a ser como un tractor

## Data Modeling 
Es el proceso de transformar objetos del mundo real en 
un formato datos estructurados

- Sql
    - Relational data modeling
- NoSql
    - Graph
    - Document 

### Componentes 

- Entidades, son los objetos de los que queremos almacenar informacion
- Atributos, una entidad tiene varios atributos, por ende, los atributos 
son las caracteristicas de dicha entidad que lo describen
- Relaciones, Es el medio en que las entidades se conectan entre si 

### Niveles 
Existe 3 niveles para modelar datos los cuales son:

![data_modeling_levels](/img/db/data_modeling_levels.png)

- Conceptual, Solo nos concentramos en cuales son las entidades y sus relaciones 
entre si.
![conceptual_level](/img/db/conceptual_level.png)
- Logico, En este ya agregamos atributos a las entidades y sus relaciones 
![logic_level](/img/db/logic_level.png)
- Fisico, Aqui ya tenemos atributos, el tipo de dato de cada atributo, sus relaciones 
y agregamos convecion de nombres
![physical_level](/img/db/physical_level.png)


## Data schema 
Que son y como se diferencian los modelos de datos

- Schema, blueprint de una diseño de base de datos como un plano



## Data Normalization
Es una forma de organizar la informacion

- tercera forma normal, es el nivel comun de normalizar la informacion 
en las bases de datos transaccionales 
- Normalizacion, es el proceso de organizar la data en estructuras las cuales 
posteriormente seran usadas por la base de datos relacional.