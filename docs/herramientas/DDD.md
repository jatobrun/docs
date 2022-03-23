---
sidebar_position: 7
---

# Domain Driven Design

Esta metodologia se crea a partir de muchas iteraciones donde la entropia del codigo 
aumenta conforme el proyecto crece.

Es una sistema que nos ayuda a unir todas las implementaciones que estan cambiando
costantemente los modelos. Dejando de lado cosas como los lenguajes de programacion,
infraestructura, etc.

Se enfoca en los problemas de negocios y como organizamos la logica de programacion 
que va a resolver dicho problema.

Una de las practicas que busca DDD es que los desarrolladores trabajen a la par con expertos 
del area con el fin de estar cambiando los modelos. Forzando a los desarrolladores a conocer 
mas acerca del negocio y que no hagan solo codigo de forma mecanica.

Para esto se debe manejar un lenguaje en el que equipos tecnicos con administrativos puedan 
comunicarse y entenderse, a este nuevo lenguaje le llamamos `ubiquitous Language`, con este lenguaje 
podremos ser menos ambiguos y mas efectivos entre tech team y business teams.

DDD busca dividir el codigo en 4 capas:
- User Interface: Es el responsable de mostrar o capturar la informacion del usuario
- Application: Es el orquestador el cual dirige como a los domain objects, esta puede acceder 
a otros `bounded context`
- Domain: Tiene toda la logica de negocio y reglas, ademas del estado del negocio.
- Infrastructure: Implementa toda las funcionalidades tecnicas, comunicaciones, etc.

:::note
No todas las capas son necesarias para todos los proyectos pero si la Domain layer es necesaria 
para ser DDD
:::

La regla principal es que cada capa solo puede comunicarse con ella mismo o con las de abajo.
Las capas de arriba pueden usar componentes de las capas de abajo usando sus interfaces pero 
las capas de abajo solo pueden comunicarse con las capas de arriba usando 
IoC (Inversion of control).
## Bounded Context
Tambien puede ser considerado como el solution space
Es un concepto que busca contextualizar las entidades que tenemos con el fin 
de evitar ambiguedades.

Por ejemplo si tenemos una letra sin contexto puede significar dos cosas. 
1. Una letra sin mas 
2. Un mensaje para una persona 

En muchos proyectos los equipos son distribuidos en `bounded context` que son las 
areas de especializacion. Por ejemplo finanzas, marketing, it, etc.

## Context Mapping

Es una forma grafica para documentar como cada `bounded context` se relaciona y comunican 
entre ellos dentro de un proyecto.

### Tipos de relaciones 
Las relaciones entre los `bounded context` pueden ser variadas depende del diseños que 
queremos ejecutar, tenemos 4 principales.

#### Anti-corruption Layer 
El `bounded context` hijo traduce los datos/modelos del padre con el fin de usarlos 
internamente.

#### Conformist
el `bounded context` hijo se conforma y adapta al padre (si debe cambiar en el proceso lo hace).
Al padre no le interesa la informacion del hijo.

#### Customer/Supplier
El hijo actua como un cliente solicitando cambios que el padre como proveedor debe darselos.
Cambiar de ser necesario para cumplir con las expectativas

#### Shared Kernel 
Muchas veces es inevitable que dos o mas `bounded context` se sobrepongan, para esto hacemos que 
compartan los recursos y si un cambio se produce ambos deben cambiar para cumplir con dicho recurso. 
Deben estar sincronizados y en lo posible tratar de evitar su uso.

## Patterns 

### Entities
- Son objetos que contienen un id unico y un hilo de ejecucion continua.
- No esta definidas por sus atributos sino mas bien por **quienes son**.
- Sus atributos pueden cambiar drasticamente a lo largo de su ciclo de vida pero 
su identidad persiste.

No es considerado una entidad del dominio una orden en el mundo de e-commerce debido 
a que tiene bastantes estados donde la orden muta quien es.

```ts
export class Customer {

    private id: number;
    private name: string;

    protected constructor(name: string) {
        // A uuid guarantees a unique identity for the Customer Entity
        this.id = uuidv4();
        this.name = this.setName(name);
    }

    private setName(name: string): string {
        // Business invariant: Customer name should not be empty
        if (name === undefined || name === '') {
            throw new Error('Name cannot be empty');
        }
        return name;
    }

    public static create(name: string): Customer {
        return new Customer(name);
    }
}
```

### Value Objects
- Objetos que se describen por medio de sus caracteristicas no por el identificador unico
- No se preocupan por quienes son sino por **que son**.
- Son inmutables con la finalidad de obligar al sistema a reemplazarlas por nuevas instancias 
- Pueden ser usadas por varias entidades.
- Si la informacion provisionada dentro del value object es invalidad el mismo no se crea.

```ts
export class Address {

    private readonly streetAddress: string;
    private readonly postalCode: string

    protected constructor(streetAddress: string, postalCode: string) {
        this.streetAddress = this.getValidStreetAddress(streetAddress);
        this.postalCode = this.getValidPostalCode(postalCode);
    }

    private getValidStreetAddress(streetAddress: string): string {
        // Business invariant: street address should not be longer than 128 characters
        if (streetAddress.length > 128) {
            throw new Error('Address should not be longer than 128 characters');
        }
        return streetAddress;
    }

    private getValidPostalCode(postalCode: string): string {
        // Business invariant: Should be a valid canadian postal code
        const pattern = /[a-z]\d[a-z][ \-]?\d[a-z]\d/g;
        if (!postalCode.match(pattern)) {
            throw new Error('Postal code should only contain alphanumeric caracters and spaces');
        }
        return postalCode;
    }

    public getStreetAddress(): string {
        return this.streetAddress;
    }

    public getPostalCode(): string {
        return this.postalCode;
    }

    public static create(streetAddress: string, postalCode: string): Address {
        return new Address(streetAddress, postalCode);
    }

    public equals(otherAddress: Address): boolean {
        // Value Objects equality is based on their propertie's values
        return objectHelper.isEqual(this, otherAddress);
    }
}
```

### Services
En algunas ocasiones el modelo de dominio necesitara hacer acciones que no tienen que ver con 
las entidades o los value objetcs. Para estos escenarios usaremos `services` los cuales son 
stateless. Debemos tener cuidado al crear `services` debido a que no podemos implementar 
acciones correspondientes a las entidades u object values en los servicios.

### Aggregates
Son colecciones relacionadas entre entidades y value objects las cuales representaran 
`transactional boundary`. Cada agregacion tiene una entidad que controla todo el trafico con 
el mundo exterior.

### Business invariants
Son reglas de negocio que mantienen la integridad de las agregaciones y su contenido. Por ejemplo 
Una orden nunca se puede crear si la cantidad de dicho producto es 0.

### Factories (Setters)

Son capaces de construir entidades y agreaciones en un solo paso, para esto requiere que le pasemos 
toda la informacion que necesita para ser creada, con esto forzamos que toda la informacion creada 
sea correcta esto no es responsabilidad del Domain model sino que pertenece dentro de la capa de dominio 
por medio de las reglas de negocio.

### Repositories (getters)
Provee de una interface que esta oculta al usuario, la cual podemos usar para recibir la informacion
almacenada en los objetos. Todas las definiciones de los repositorios debe ser creada en la domain layer
pero implementada en la infraestructure layer.

