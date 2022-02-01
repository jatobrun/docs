---
sidebar_position: 4
---

# Terraform

## Traditional IT

![arquitectura tradicional](/img/terraform/traditional-it.png)
- Donde el equipo de `business` son los encargados de decir que nuevas acciones se 
debe implementar.
- El equipo de `business analytics` se encarga de evaular la efectividad y rentabilidad
de dichas ideas priorizando las mejores ideas.
- El `solutions architect` es el encargado de maquetar la idea, es decir, pensar cuantos
servidores se van a necesitar, firewalls, cual seria la mejor clase de storage, etc.
- El equipo de `procurement` se encarga de comprar todos los elements de la lista de materiales 
que el `solutions architect` necesita para implementar la idea.
- Una vez ya se cuente con todo el `hardware` este para al `infraestructure team` el cual se 
encarga de montar los elementos (`field engineers`), aprovisionar del software (`system administrators`),
aprovisionar bases de datos, storate (`storage admins`), crear los horarios de backups (`backups admins`).
- Por ultimo los `desarrolladores` ya se encuentran listos para desplegar sus desarrollos en dicho hardware.

### Desventajas 
- Tiempos de espera muy elevados 
- Costos elevados 
- Dificultad en la automatizacion (no puedes automatizar que monten un rack o conectar cables)
- Errores humanos 
- Inconsistencia en los ambientes 
- No todos los recursos los consumes 

## Cloud 
Debido a que hemos visto las desventajas de usar el modelo anterior, la nube nos ayuda mucho ya que 
no debemos manejar todos los gastos de infraestructura o hardware (`Capex`) sino mas bien nos enfocamos 
en usar esos recursos que ya estan disponibles por el `CSP`. Esto hace que:

- Nuestros tiempos se reduzcan
- Costos reducidos, `pays as you go`
- Podemos automatizar el levantar un server nuevo (Porque el `CSP` ya tiene levantado los servers y cuenta con APIS).
- Podamos escalar de forma horizontal o vertical sin problemas por ende ya no hay tanto desperdicio de recursos.

## Infraestructura como codigo 
`IaC` es la forma en la que nosotros declaramos nuestra infraestructura en forma de codigo, estos scripts los utilizamos
para provisionar los requerimientos de hardware que se necesiten de una forma consistente y automatizada. Podemos utilizar 
herramientas para llevar esto a cabo, las dos mas usadas son:

- `Ansible`
- `Terraform`

Ambas tecnologias tienen sus diferencias por ende tienen diferentes casos de uso.

Algunas otras tecnologias para `IaC`:

- `puppet`
- `saltstack`
- `packer`
- `cloudformation`
- `vagrant`
- `docker`

Como cada una de estas herramientas estan creadas para casos especificos podemos crear grupos:

- `Configuration Management`
    - `puppet`, `ansible`, `saltstack`

- `Server templating`
    - `docker`, `packer`, `vagrant`

- `Provisioning tools`
    - `cloudformation`, `terrform`

### Configuration Management
Esto se usa para mantener infraestructura, instalar (instalar dependencias) y manejar software
(actualizar dependencias o eliminarlas), crear scripts de backups, la idea es que si tienes que 
hacer una actualizacion de una dependencia en 100 maquinas no debas ir una por una actualizando
sino que con un script de `ansible` ejecutes todas de golpe. 

Asi podemos tener `control de versiones`, dentro de nuestros ambientes o instancias.

Tambiente es `idempotent` lo que quiere decir es que podemos ejecutar el codigo multiples veces
pero solo realizara los cambios necesarios para llevarlo al estado deseado.

### Server Templating



