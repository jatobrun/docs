---
sidebar_position: 4
---

# Terraform
Es una IaC tool que es open-source y cloud agnostic, usa lenguaje declarativo. 
Usa lenguaje HCL (HashiCorp Configuration Language), tiene features interesantes como:
- Instalacion de modulos 
- Cambios planeados y predictivos
- Grafico de dependencias
- Terraform registry 

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

## Configuracion Manual 
Configurar de forma manual nuestra infraestructura en la nube ayuda a que podamos prototipar y 
usar nuevos servicios que el proveedor de nube crea. Pero este metodo tambien viene con varios problemas 

- Es facil desconfigurar un servicio que ya este funcionando (error humano)
- Es dificil de manejar estados de los servicios 
- Es dificil transferir configuraciones de servicios con el equipo

### Infraestructura como codigo 
`IaC` es la forma en la que nosotros declaramos nuestra infraestructura como un blueprint, 
estos scripts los utilizamos para provisionar (crear, actualizar o eliminar) los 
requerimientos de hardware que se necesiten de una forma consistente y automatizada. 
Podemos utilizar herramientas para llevar esto a cabo, las dos mas usadas son:

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
    - `cloudformation`, `terraform`

### Configuration Management
Esto se usa para mantener infraestructura, instalar (instalar dependencias) y manejar software
(actualizar dependencias o eliminarlas), crear scripts de backups, la idea es que si tienes que 
hacer una actualizacion de una dependencia en 100 maquinas no debas ir una por una actualizando
sino que con un script de `ansible` ejecutes todas de golpe. 

Asi podemos tener `control de versiones`, dentro de nuestros ambientes o instancias.

Tambiente es [idempotent](#idempotent).


### Server Templating


### Provisioning tools 

### IaC Declarativa
- Todo se maneja de forma explicita, es decir lo que escribes es lo que obtienes
- Mas verbosa, por ende menos chance de desconfigurar 
- Usa scripting languages.(JSON, XML, YAML)

Ejemplos:

- ARM Templates (Azure)
- CLoud formation (AMAZON)
- Azure blueprint 
- Cloud deployment manager (GCP)
- Terraform

### IaC Imperativa
- Tu dices que es lo que quieres y el resto se infiere
- menos verboso por ende tienes mas chance de crear alguna desconfiguracion 
- Usa lenguajes de programacion (Python, Javascript, Ruby)

Ejemplos 

- Amazon cloud development kit
- Pulumi

:::note 
Aunque terraform es declarativo e [idempotent](#idempotent) tiene algunas features
interesantes de la IaC imperativa. El lenguaje que usa terraform es **HCL-ish** el cual soporta:
- Bucles 
- Bloques dinamicos 
- Estructuras de datos complejas
:::

## Infrastructure lifecycle

Son las fases claras y bien definidas que usan los Devops engineer para planear, diseñar
, construir, testear, entregar y mantener infraestructura en la nube.

Hay una metodologia muy usada llamada Day 0 - Day 1 y Day 2

Day 0 - 2 es una forma simplificada de describir las fases que tiene la infrastructure lifecycle

Day 0 significa vamos a planear y diseñar 
Day 1 significa vamos a contruir y testear 
Day 2 significa vamos a salir a produccion y mantenerla 

:::warning
Los days no estan sujetos a los dias de 24 horas, pueden durar semanas, solo es una forma de decir
:::

## Key Terms
### Idempotent
Lo que quiere decir es que podemos ejecutar el codigo multiples veces
y siempre tendremos el mismo resultado, es decir, realizara los cambios necesarios para llevarlo 
al estado deseado.

Ejemplo
Si tenemos un IaC config file con dos VM lo que pasara es que las creara y las lanzara

Non-idempotent 
Si volvemos a ejecutar el IaC config file volvera a lanzar 2 VM a pesar de que ya 
tenemos dos VM ya en la nube por ende terminamos con 4 VM pero nosotros deseamos solo tener 2

idempotent 
Si volvemos a ejecutar el IaC config file no pasara, porque ya tenemos 2 VM entonces o las 
actualizara o las destruira y creara.

### Provisioning 
Es cuando preparamos los servidores, con software, configuracion, data para que esten aptos para realizar 
tareas, es decir, cuando lanzamos y configuramos cualquier servicio de la nube estamos haciendo `provisioning`.
 Podemos usar [config-managment-tools](#configuration-management)

### Deployment
Es la accion de enviar una version de nuestra aplicacion a un servidor previamente provisionado.

### Orchestration
Es la accion de coordinar multiples servicios. Esta mas relacionado con microservicios, contenedores.

### Configuration Drift


### Inmutable vs Mutable infraestructure 

Mutable
Es cuando
1. desplegamos un servicio (terraform)
2. configuramos con ansible (sudo ap update, install, etc).

El problema con esto es que no podemos garantizar que siempre tendremos lo mismo porque las librerias 
cambian, los sistemas cambian, etc.

Inmutable
Es cuando 
1. provisionamos un servicio (Terraform)
2. creamos y almancenamos una imagen (packer)
3. desplegamos

Con la imagen podemos garantizar que siempre vamos a tener el mismo software y con terraform que siempre 
tendremos el mismo hardware.

### GitOps
Es cuando introducimos un proceso formal de revisar y aceptar cambios en la infraestructura, por medio de 
un repositorio de git e IaC files. Luego cuando ya el codigo este aceptado por medio de un trigger 
actualizamos dicha infraestructura.

![gitops](/img/terraform/gitops.png)

### Execution plan 
es un review manual de los recursos que se van a agregar, actualizar o eliminar antes de aplicar 
`terraform apply`.
Podemos visualizar el execution plan usando `terraform graph`. Al ejecutar dicho compando obtendremos 
un archivo de tipo **graphviz** (Para poder visualizar el archivo necesitaremos GraphViz)

```bash 
terraform graph | dot -Tsvg > graph.svg
```

Terraform construye un grafico de dependencia para ejecutar el execution plan. Este dependecy graph
tiene 3 tipo de elementos 

- Resource node (rectangulo): representa un recurso unico
- Resource meta-node (circulo): representa un grupo de recursos
- Provider configuration node (rombo): representa el proveedor de nube que usaremos.

![dependency-graph](/img/terraform/dependecy-graph.png)



## Terraform Lifecycle

1. Creamos o configuramos nuestros terraform config file 
2. init, inicializamos el repositorio hacemos pull los proveedores y modulos que usaremos
3. plan, creamos plan de ejecucion
4. validate, validamos si los tipos y los valores son correctos 
5. apply, ejecutamos el plan de ejecucion (provisionamos la infraestructura)
5.1. Destruimos la infraestructura remota (si es necesario)


## CheatSheet

- `terraform init` descarga los modulos y provisioners de nuestro main.tf file 
- `terraform fmt` es como el linter de terraform, modifica los archivos 
para tener el style guide debio
- `terraform validate` valida si nuestros manifiestos estan correctos o nos falta 
alguna configuracion
- `terraform plan` crea el execution plan de los resources que se van a crear 
- `terraform apply` ejecuta terraform plan y ademas crear los recursos del terrraform plan
- `terraform destroy o terraform apply -destroy` para eliminar los recursos en la nube
:::warning 
`terraform validate` no valida el valor de los campos solo que los campos necesarios 
existan y contengan el tipo de dato que se indica
:::

## input Variables 
En terraform podemos crear variables para definir ciertos valores al momento de 
ejecutar el apply. Esto nos ayuda a no quemar valores y que sean mas flexibles 

Opcion 1
```terraform title='main.tf'
variable "nombre-de-la-variable" {
    type = string 

}
```
Luego para usar dicha varibale declarada en el `main.tf` podemos hacer lo siguiente 

```terraform title='main.tf'
resource "recurso" "nombre-del-recurso"{
    ami = var.nombre-de-la-variable
}
```
 y luego para ejecutarlo pasamos las variables en el comando 

 ```
 terrafrom plan -var=nombre-de-la-variable="t2.micro"
 ```
Opcion 2

Crear el archivo `terraform.tfvars` y dentro del mismo agregar las variables 

```terraform title='terraform.tfvars'
nombre-de-la-variable='t2.medium'
```
De esta manera podemos ejecutar `terraform plan` sin necesidad de pasarle dichas variables 
por consola. Es como usar un archivo tipo `.env`

### Locals
Son como las variables pero hardcode y podemos usar string interpolation 

Para definir un local 
```terraform title='main.tf'
locals {
    project_code = '003'
}
```

Para usar un local 

```terraform title='main.tf'

resource "recurso" "nombre-del-recurso"{
    ami = var.nombre-de-la-variable
    
    tags = {
        name = 'Servidor-${local.project_code}'
    }
}
```

:::tip 
Para no tener todo (outputs, locals, variables) en el `main.tf` podemos dividirlo en 
archivos como `variables.tf`, `output.tf` y `providers.tf` con esto generamos 
una buena practica
:::

### Default option 
```terraform title='main.tf'
variable "nombre-de-la-variable" {
    type = string 
    default = "hola"

}
```
### List 
```terraform title='main.tf'
variable "nombre-de-la-variable" {
    type = list(string )
    default = ["hola"]

}
```
### Objects

```terraform title='main.tf'
variable "nombre-de-la-variable" {
    type = object({
        internal = number 
        external = number 
        protocol = string 
    }) 
    default = {
        internal = 10
        externa = 20 
        protocol = "tcp"
    }

}
```

### Types 

- number 
- string 
- boolean 
- list
- set
- object
- map
- tuple

### Validations 

POdemos usar un bloque de validacion con el fin de incremetar la seguridad 
de nuestros manifiestos y que las personas al ingresar variables no tengan 
tanto error humano 

```terrform 
variable "image_id" {
  type        = string
  description = "The id of the machine image (AMI) to use for the server."

  validation {
    condition     = length(var.image_id) > 4 && substr(var.image_id, 0, 4) == "ami-"
    error_message = "The image_id value must be a valid AMI id, starting with \"ami-\"."
  }
}
```

Tambien podemos usar regex para realizar la validacion 

```terraform 
variable "image_id" {
  type        = string
  description = "The id of the machine image (AMI) to use for the server."

  validation {
    # regex(...) fails if it cannot find a match
    condition     = can(regex("^ami-", var.image_id))
    error_message = "The image_id value must be a valid AMI id, starting with \"ami-\"."
  }
}

```

### Environment variables 

Para las variables de entorno debemos exportarlas con `TF_VAR_cualquier_cosa`
con esto logramos que terraform las entienda y las pueda asignar a los lugares 
correspondiendtes 

```bash 
export TF_VAR_contrasena="123456789"
```

### Sensitive variables 
Podemos tener algunas variables que pueden ser sensibles como la contraseña de una base de datos 
en produccion o una ip de algun servidor de produccion, para evitar mostrar esto valores con 
`terraform plan` o `terraform apply`, podemos usar el campo `sensitive = true`

```terraform 
variable "user_information" {
  type = object({
    name    = string
    address = string
  })
  sensitive = true
}

resource "some_resource" "a" {
  name    = var.user_information.name
  address = var.user_information.address
}

```
con esto obtenemos que no se muestren dichos valores en el execution plan.

### Cargar variables 
Hay variamos metodos para usar variables de entorno

1. Crear un archivo `terraform.tfvars` todas las variables en dicho archivo se cargan 
automaticamente 

2. Crear un archivo `dev.tfvars` este archivo no se carga automaticamente debemos pasarlo
por comando

3. Crear un archivo `dev.auto.tfvars` este archivo si se carga automaticamente 

4. Por comando `-var-file dev.tfvars` asi cargamos el archivo de la opcion 2 

5. Por comando tambien podemos modificar variables `-var ec2-type=t2.micro`

6. haciendo un export de `export TF_VAR_hola`

### jerarquia 

El nivel sobreescribe a todas las que estan abajo, es decir, el nivel 1 sobreescribe al 2,3 y4
el 2 sobreescribe al 3 y 4, el 3 solo al 4 y el 4 no sobreescribe a nadie 

1. Pasas por comando entonces `-var-file o -var ` son las mas top 

2. *.auto.tfvars 

3. terraform.tfvars

4. environmental variables

## Outputs 
Es una forma de obtener la informacion clave de los recursos que ya provisionamos.

Por ejemplo estamos reservando un ip publica, y queremos saber el valor de dicha ip.
O estamos creando una VM y queremos saber su ip privada para crear una subnet o hacer networking.

Para todos esos casos debemos usar outputs.

Para definir un output

```terraform title='main.tf'
output "instance_ip" {
    value = aws_instance.my_server.public_ip #resource.name.atributo
}
```
Podemos usar `terraform output` para ver todos los valores claves que definimos asi no tenemos 
que estar buscandolos en la pagina del proveedor o ejecutar multiples veces de terraform plan.

Tambien podemos saber el valor de un output en particular con `terraform output ${parametro}`

:::note
En caso de que no funcione podemos hacer un `terraform refresh`
:::

:::tip 
Para no tener todo (outputs, locals, variables) en el `main.tf` podemos dividirlo en 
archivos como `variables.tf`, `output.tf` y `providers.tf` con esto generamos 
una buena practica
:::
:::note
Algunos outputs podemos esconderlos para que al ejecutar terraform output no se muestren, 
pero podemos seguir viendo dichos valores en el state file 

tambien podemos pasar dos flags a `terraform output` los cuales son `-json` y `raw`, el primero 
es una forma mas bonita de formatear los valores y el segundo es para usarlo en comandos de bash

:::
## Modulos 
Es una forma de agrupar diferentes resources en un modulo con el fin de que sea mas sencillo 
provisionarlos sin tener que estar configurando uno a uno. Vendria a ser como una libreria de 
una sola funcion en python como numpy o pandas. Podemos crear nuestros propios modulos 
o usar los que nos ofrece terraform.

:::caution 
En caso de que al ejecutar `terraform plan` nos salga algun error, es muy probable que sea 
porque no tiene descargado dicho modulo por ende lo solucionamos si ejecutamos `terraform init`
:::

Ejemplo

```terraform title='main.tf'
Falta google
```
## Provisioners 
terraform provisioners son los que instalan software, editan archivos en las maquinas 
que fueron provisionadas por terraform para esto tiene dos provisioners:

- cloud-init Este es el estandar para la inicializacion de las instancias podemos pasarle 
un yaml o un script de bash 
- packer es un servicio compilador de imagenes 

:::note 
Se debe usar otros provisioners como ultimo recurso, normalmente hay mejores alternativas
:::

Creamos un yaml de cloud init 

```yaml

```

luego se lo pasamos a terraform de la siguiente manera 

```terraform 

```

Chef, salt and puppet son tools que estan dreprecated en terraform, y en general es 
considerado una mala practica

### Local exec

Local exec te permite ejecutar comandos locales luego de provisionar un recurso

```terraform title='main.tf'

resource "aws_instance" "web" {
    # ...

    provisioner "local-exec"{
        command = "echo ${self.private_ip}, $KEY, $SECRET >> private_ip.txt"
        interpreter = [""]
        environment = {
            KEY = "dsasdasdas"
            SECRET = "dasdasd"
        }
    }
}
```
### Remote exec
Nos permite ejecutar comandos en los recursos que ya provisionamos.

Tenemos tres modos que podemos ejecutar comandos:
- inline 
- Script 
- Scripts 

Solo podemos usar un modo a la vez 

```terraform 
resource "aws_instance" "web" {
    # ...

    provisioner "remote-exec"{
        inline = [
            "puppet apply",
            "consul join ${aws_instance.web.private_ip}"
        ]
    }
}
```
:::caution
Para poder hacer remote-exec necesitaremos un conection block
:::


### Conection block
Nos permite establecer una conexion desde nuestro recurso provisionado 

```terraform 
resource "aws_instance" "web" {
    # ...

    provisioner "file"{
        source = "conf/secrets.yaml"
        destination = "/etc/secrets.yaml"

        connection {
            type = 'ssh'
            user = 'root'
            password = "${var.password}"
            host = "${var.host}"
        }
    }

}
```

### File provisioner
Lo usamos para copiar archivos desde nuestra computadora a los 
recursos que hemos provisionado

```terraform 
resource "aws_instance" "web" {
    # ...

    provisioner "file"{
        source = "conf/secrets.yaml"
        destination = "/etc/secrets.yaml"
    }

}
```
:::caution
Para poder hacer remote-exec necesitaremos un conection block
:::
### Null resource 
Es una forma de no crear ningun recurso pero podemos ejecutar comandos 
usando local-exec o usar triggers

```terraform 

resource "null_resource" "status" {
    provider "local-exec" {
        command = "echo ${self.private_ip}, $KEY, $SECRET >> private_ip.txt"
    }
    depends_on = [
        aws_instance.my_server
    ]
} 
```

## Providers
Son plugins que ayuda a terraform a poder interactuar con las distintos 
proveedores de nube como AWS, GCP o Azure, etc.
Hay tres tipos de providers 

- Official Publicado por la compañia que tiene el servicio
- Verified Altamente mantenido por el proveedor y terraform 
- Community Creado por la comunidad, no garantiza que este actualizado o mantenimiento.

`terraform init` nos ayuda a descargar los plugins y que podamos interactuar con los 
proveedores.

Terraform registry es la nube publica de terraform donde podemos 
encontrar los modulos y plugins publicos

Terraform cloud ayuda a publicar modulos privados de tu organizacion

Una forma de ver todos los providers de terraform es con 
```bash 
terraform providers
```

Tenemos una forma de decir los provedores


tambien podemos tener multiples providers con el alias 


Tambien podemos setear un proveedor 

### Modules
Los modulos son grupos de archivos de configuraciones que provee configuraciones comunes 
al levantar infraestructura. 

**Por que usar Modulos?**

- Buscan tener las mejores practicas 
- reduce la cantidad de codigo
- Reduce el tiempo de desarrollo
:::tip 
Cuando usar terraform?
Podemos usar terraform cuando tenemos tareas que solo se hacen una vez, como 
crear usuarios, crear bases de datos, agregar la data en la db

Podemos usar ansible, cuando?
Tenemos tareas repetitivas como hacer un backeup o truncar data diaria 

:::

## Data Sources 

Es una forma que tiene terraform en conseguir informacion que este fuera de terraform 
o de la computadora local 

```terraform 
data "aws_ami" "example" {
  most_recent = true

  owners = ["self"]
  tags = {
    Name   = "app-server"
    Tested = "true"
  }
}
```

de esta manera podemos ir a aws y buscar dicha especificacion y una vez la obtengamos 
podemos usar dichos id para referenciar otros servicios de la siguiente manera

```terraform 
resource "aws_instance" "web" {
  ami           = data.aws_ami.web.id
  instance_type = "t1.micro"
}
```

## Resources Meta Arguments 

Podemos usar estos argumentos en cualquier recurso con el fin de cambiar 
su comportamiento los mas comunes son:

### Depends on 
con este argumento declaramos dependencia explicita entre recursos, es decir, 
el uno necesita que el otro este ready para poder provisionarlo. 

terraform hace esto de manera implicita pero hay momentos en lo ques la inferencia de 
terraform no es suficiente y necesitamos ser mas explicito al momento de provisionar 
recursos 

ejemplo 

```terraform 

resource "aws_iam_role_policy" "example" {
  name   = "example"
  role   = aws_iam_role.example.name
  policy = jsonencode({
    "Statement" = [{
      "Action" = "s3:*",
      "Effect" = "Allow",
    }],
  })
}

resource "aws_instance" "example" {
  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"

  # Terraform can infer from this that the instance profile must
  # be created before the EC2 instance.
  iam_instance_profile = aws_iam_instance_profile.example

  # However, if software running in this EC2 instance needs access
  # to the S3 API in order to boot properly, there is also a "hidden"
  # dependency on the aws_iam_role_policy that Terraform cannot
  # automatically infer, so it must be declared explicitly:
  depends_on = [
    aws_iam_role_policy.example,
  ]
}

```

### count
para crear multiples replicas de un recursos basado en un valor 

```terraform 
resource "aws_instance" "server" {
  count = 4 # create four similar EC2 instances

  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"

  tags = {
    Name = "Server ${count.index}"
  }
}

```

Tambien podemos usar expresiones numericas 

```terraform 
resource "aws_instance" "server" {
  # ...
  count = length(var.subnet_ids)
  # ...
}
```

### for_each 
para crear multiples replicas acorde a un map o set, esto nos ayuda a crear 
recursos de una forma mas dinamica 

```terraform
resource "azurerm_resource_group" "rg" {
  for_each = {
    a_group = "eastus"
    another_group = "westus2"
  }
  name     = each.key
  location = each.value
}

```
Si queremos hacer lo mismo con un set 

```terraform 
resource "aws_iam_user" "the-accounts" {
  for_each = toset( ["Todd", "James", "Alice", "Dottie"] )
  name     = each.key
}

```
:::note 
el each.value en los set seria `null` 
:::
 
### provider
para seleccionar otro proveedor con esto podemos hacer diferentes despliegues en 
multiples zonas o multiples nubes 

```terraform 
# The default provider configuration; resources that begin with `aws_` will use
# it as the default, and it can be referenced as `aws`.
provider "aws" {
  region = "us-east-1"
}

# Additional provider configuration for west coast region; resources can
# reference this as `aws.west`.
provider "aws" {
  alias  = "west"
  region = "us-west-2"
}

```

ahora para usarlo en un recurso hacemos lo siguiente 

```terraform 
resource "aws_instance" "foo" {
  provider = aws.west

  # ...
}


```

### lifecycle

para crear ciclos de vida custom y cambiar el comportamiento de los recursos 

#### Resources Behaviour

Hay 3 comportamientos o estados basicos en los recursos 
- `create` es cuando el recurso se encuentra definido en la configuracion pero 
no existe infraestructura fisica atada a el. Asociado con un (+)

- `destroy` es cuando el recurso existe en el estado pero no en la configuracion. 
Asociado con un (-)

- `update-in-place` es cuando los argumentos del recurso han sufrido modificaciones.
Asociado con un (~)

- `destroy and recreate` es cuando no podemos hacer una actualizacion del recursos 
por limitaciones del api. Asociado con un (-/+)
 
#### Lifecycle blocks 

```terraform 
resource "azurerm_resource_group" "example" {
  # ...

  lifecycle {
    create_before_destroy = true
  }
}
```
tiene varios argumentos los cuales son:

- create_before_destroy (bool): 

- prevent_destroy (bool):

- ignore_changes (list of attributes): 

### Provisioners
para hacer funciones extras luego de crear el recurso 


## terraform expresions 
Las expresiones nos ayudan a realizar calculo de valores sin configuraciones
previas.

### Types and values 

El resultado de una expresion es un valor y por ende tiene un tipo de dato 

existen 3 grupos de tipos de datos:

- Primitives
1. string: son palabras o frases dentro de comillas dobles
2. number: pueden ser enteros o decimales
3. boolean: valores de verdad (True or False)

- No type 
1. null: la ausencia de valor, por ende vendria a ser el valor por default de cada 
proveedor y se usa la palabra reservada `null`

- complex/structural
1. list 
2. maps
3. objects
4. sets 
5. tuples


### String and templates 

### Reference to value 

### Operators 

### Functions calls 

### Conditional expressions 

### For expressions

### Splat expressions 

### Dynamic blocks 

### Type constraints 

### Version constraints
