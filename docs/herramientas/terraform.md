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

Usamos terraform registry para publicar nuestros modulos 
:::

:::caution 
Solo los modulos verificados aparecen en la barra de busqueda.
:::

#### Como usar modulos?

Tenemos modulos de tipo publico los cuales los encontramos en Terraform registry 

```hcl
module "consul"{
  sources = "hashicorp/consul/aws" #<NAMESPACE>/<NAME>/<PROVIDER>
  version = "1.0.2"
}
```

Tenemos modulos de tipo privado los cuales los encontramos en terraform cloud(Enterprise)

```hcl
module "vpc"{
  sources = "app.terraform.io/example_corp/vpc/aws" #<HOSTNAME>/<NAMESPACE>/<NAME>/<PROVIDER>
  version = "1.0.2"
}
```
:::note 
Para usar los modulos privados debemos autenticarnos usando `terraform login` en el terraform cloud
Tambien podemos usar un API_TOKEN y configurarlo en el cli
:::

#### Como publicar modulos?

Usamos terraform registry para publicar nuestro modulos publicos, ademas tenemos las siguientes ventajas:

1. Versionamiento 
2. Genera documentacion de forma automatica 
3. Historial
4. READMES
5. Ejemplos 

Pasos para publicar un modulo 
(Usamos github para almacenar el codigo de nuestros modulos)

1. Nombrar nuestro repositorios deben ser nombrados de una forma particular 
`terraform-<PROVIDER>-<NAME>`. 
2. Logear en terraform registry con nuestra cuenta de github.
3. Seleccionar el repositorio 

:::note 
Para realizar actualizaciones a esos modulos usamos los tags de github. 
:::

#### Modulos verificados 

Todos los modulos verificados tienen un simbolo azul con un visto dentro. 
Dichos modulos son mantenidos activamente por hashicorp y otros miembros 
de la comunidad.

No necesariamente los modulos que no son verificados quieren decir que son malos.

- Existen modulos que no son verificados altamente mantenidos y con buenas features.
- Existen modulos verificados que son solo buenos ejemplos.

#### Estructura de los modulos 
![module-structure](/img/terraform/module-structure.png)
- El punto de acceso es la carpeta root.
- Tenemos 5 archivos requeridos (main.tf, variables.tf, outputs.tf, README, LICENSE).
- En los modulos anidados debemos usar path absolutos y no relativos.
- Los modulos anidados sin README son considerados para uso interno.
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

Los resources representan objetos en nuestra infraestructura. ejemplo VM, DB, etc.
Algunos resources tienen un parametro `timeout` que nos sirve para definir el tiempo 
en el que consideraremos si un recurso fallo al crearse.
```hcl
resource "aws_db_instance" "example" {

  # ....

  timeouts {
    create = "60m"
    delete = "2h"
  }
  
}
```
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
1. null: no significa la ausencia de valor, por ende vendria a ser el valor por default de cada 
proveedor y se usa la palabra reservada `null`

- [complex/structural](#complex-types)
1. list 
2. maps
3. objects
4. sets 
5. tuples

### String and templates 
Por el momento terraform solo soporta comilla doble no comilla 
simple esto es bueno porque podemos tener caracteres de escape 
como por ejemplo:

- `\n` Salto de lionea
- `\t` Tab
- `\r` Enter
- `\\` Backslash
Podemos tener un string de multiples lineas para esto terraform 
maneja el `heredoc` style que es propio de los sistemas unix

```
<<EOT
hello
world 
EOT
```

Siempre empezaremos con `<<` seguido de cualquier palabra en 
mayusculas y cerramos el tag con la misma palabra en mayusculas
dentro de dicho tag todo lo que este sera considerado un string 

#### String Interpolation 
Es la habilidad de evaluar una expresion entre llaves `${...}`
y convertirlo en un string 

Ejemplo:
```
"Hola, ${var.name}!"
```
#### String directive
Permite evaluar condiciones logicas entre llaves `%{...}`, para
esto podemos usar interpolation de strings o HEREDOC. Con esto 
podemos usar `for loops` o `if else`

Ejemplo:
```
<<EOT
%{ for ip in aws_instance.example.*.private_ip }
server ${ip}
%{ endfor }
EOT
```
### Operators 
Al igual que cualquier lenguaje de programacion tenemos operadores
estos pueden ser aritmetico o logicos 

Aritmeticos:
- multiplicacion `a*b`
- division `a/b`
- suma `a + b`
- resta `a - b`
- residuo `a % b`

Condicionales:
- Igual `a==b`
- diferente `a!=b`
- menor `a<b`
- menor igual `a<=b`
- mayor `a>b`
- mayor igual `a>=b`

Logicos:
- Or `a||b`
- and `a&&b`
- not `!a`


### Conditional expressions 
Usamos el operador ternario `?` para hacer `if else`
```
condicion ? valor true : valor false
```

Ejemplo 

```hcl
var.a != "" ? var.a : "default-a"
```
:::caution
Los valores que se retornan deben ser del mismo tipo, no puedo
retornar en el valor true un numero y en el falso un string

:::
### For expressions
Nos ayuda a iterar un tipo de dato complejo y aplicarle transformaciones. 
Podemos recibir `listas, set, tuples, maps, objects`

Si tenemos `[]` regresaremos una tupla 
Si tenemos `{}` regresaremos un objeto

Para listas o sets 

```hcl
[for s in var.list : upper(s)] ---> ["HELLO", "WORLD"]
```
```hcl 
{for s in var.list : upper(s)} ---> {hello = "HELLO", world ="WORLD"}
```

Para map u objetos

```hcl 
[for k, v in var.map : length(k) + length(v)]
```

:::tip 
En las listas tambien podemos obtener el indice del elemento algo 
similar a usar el metodo enumerate de python 

```hcl 
[for i, e in var.list : "${i}, ${e}" ]
```
Tambien podemos reducir la cantidad de elementos que retornamos en el for 
usando un `if else`

```hcl
[for e in var.list : upper(e) if e != ""]
```
:::

### Splat expressions 
Es una forma corta de usar un bucle for. Esto lo hacemos usando el 
splat operator `*`

```hcl
[for o in var.list : o.id] -> var.list[*].id
[for o in var.list : o.interface[0].name -> var.list[*].interface[0].name]
```

### Dynamic blocks 
Nos ayuda a construir bloques de codigo anidados que se repetiran a lo
largo de nuestro codigo de terraform, debemos usar la palabra reservada 
`dynamics` y actuara como un bucle for

```hcl 
resource "aws_elastic_beanstalk_environment" "tfenvtest" {
  name                = "tf-test-name"
  application         = "${aws_elastic_beanstalk_application.tftest.name}"
  solution_stack_name = "64bit Amazon Linux 2018.03 v2.11.4 running Go 1.12.6"

  dynamic "setting" {
    for_each = var.settings
    content {
      namespace = setting.value["namespace"]
      name = setting.value["name"]
      value = setting.value["value"]
    }
  }
}

```
### Version constraints


## Terraform state

Que es un estado ?

Un estado es una condicion particular en el que estan los recursos en la nube 
en un periodo de tiempo

Como terraform preserva el estado?

Cuando provisonamos recursos en la nube, terraform crea un archivo de estado 
llamado `terraform.tfstate`, este archivo es un json y contiene un mapeo 1 a 1
de los recursos de instancia con los recursos en la nube 

### Comandos 

- `terraform state list`: lista los resources en el state
- `terraform state mv`: Mueve o cambia de nombre un elemento del estado 
- `terraform state pull`: Se baja el remote state y lo imprime en consola 
- `terraform state push`: actualiza el remote state con el local state 
- `terraform state replace-provider`: Cambia el provider del state
- `terraform state rm`: elimina recursos del state
- `terraform state show`: Muestra un recurso del state

### terraform state mv
Si solo le cambiamos el nombre a un recurso o lo movemos a un modulo
al aplicar terraform apply. terraform destruira el recurso y lo generara de nuevo 
sino queremos que esto pase podemos usar terraform state mv para renombrar 
el recurso sin la accion de borrarlo y recrearlo.

Para renombrar 

```bash 
terraform state mv packet_device.worker packer_devices.helper
```
Para mover un recurso a un modulo 

```bash
terraform state mv packet_device.worker module.worker.packet_devices.worker
```

Para mover un modulo dentro de un modulo

```bash 
terraform state mv module.app module.parent.module.app
```

### terraform state backups
Todos los subcomandos de terraform state que modifican el estado 
crearan un archivo backup. `list y show` como solo leen no crean un backup
este archivo se llamada `terraform.tfstate.backup`. POr buenas practicas siempre 
se creara un archivo de tipo backup.



## debugging and troubleshooting

### Debugging
Como cualquier otra tool de codigo, tendremos ocasiones donde queremos debuguear 
nuestros archivos o necesitamos probar funcionalidades para esto terraform tiene 
3 comandos bastante utiles. 

- `terraform fmt` Re-escribe los archivos de configuraciones cumpliendo el formato y 
estilo propio de terraform. Una opcion mas verbosa para ver que archivos se modificaron 
es usar `terraform fmt --diff`

- `terraform validate` Valida la sintaxis y los argumentos de los archivos. es decir, si 
a un modulo le hace falta que le pasemos un parametro. Esto no valida que el argumento que 
pasemos sea valido, es decir, debo pasarle un string y le paso `dasdads` solo valida que 
sea un string no su contenido.

- `terraform console` Una shell interativa para evaluar expresiones.

### Troubleshooting
En terraform tenemos 4 tipo de errores principales los cuales son:

1. Language errors: Syntax error
2. State errors: El estado de nuestros recursos fue cambiada del estado esperado
3. Core errors: Bug en la libreria core
4. Provider errors: La api del proveedor cambio y debemos hacer cambios

:::note 
las dos primeras son super sencillas de resolver, mientras que las dos ultimas son 
dificiles de resolver.

Para la primera podemos usar `terraform fmt`, `validate`, `version`
Para la segunda podemos usar `terraform refresh`
Para las dos ultimas podemos usar los logs para obtener info `TF_LOG` y abrir un issue 
en github
:::

#### Logs 
Podemos activar los logs de terraform usan las variables de entorno `TF_LOG environment`
Para environment tenemos los siguientes valores:

- TRACE
- DEBUG 
- INFO
- WARN
- ERROR
- JSON

Podemos habilitarlo de forma separada usando :

- `TF_LOG_CORE`
- `TF_LOG_PROVIDER`

Para modificar el path donde se guardan los logs podemos usar la variable `TF_LOG_PATH`

Estos comando los pasamos por ejemplo antes del comando `terraform apply`.
Ejemplo

```bash
TF_LOG=CORE TF_LOG_PATH=./terraform.log terraform apply 
```

#### Crash Log
terraform utiliza por detras el lenguaje de programacion go y las go rutines para que 
cuando pase algo se ejecute dicho evento de panico y guarde un archivo de logs. Esto nos 
sera util para crear el issue en github.


## Notas importantes 
Algunas notas sobre los comandos mas en detalle.
### terraform init 
Inicializa nuestro proyecto de terraform realizando:

- La descarga de los plugins.
- crea un directorio de terraform `.terraform`. 
- crea un archivo de dependencias con el fin de forzar que todos tengan las mimas 
versiones.

- `terraform init -upgrade`
- `terraform init -get-plugins-false`
- `terraform init -plugin-dir=$PATH`
- `terraform init -lockfile=MODE`

### Terraform get
Es parecido al `terraform init` con la diferencia que buscamos actualizar 
modulos locales o descargarnos los ultimos cambios de dichos modulos. No queremos 
nuevas actualizaciones de proovedores o cambiar el estado por eso no usamos 
`terraform init`

### Terraform plan 
Crea un `execution plan` el cual es un archivo binario. Un `execution plan` consiste en:

- Lee el estado remoto de los objetos con el fin de asegurarse que el estado este al dia 

- Compara las configuraciones con el fin de pdoer notar los cambios.

- Propone un set de cambios que se deberian aplicar para que ambas configuraciones esten iguales.

Este comando no ejecuta los cambios, solo los propone.

Existen dos tipos de plan:

1. Planes especulativos cuando ejecutamos `terraform plan` 

2. Planes guardados: podemos guardar nuestros planes de ejecucion usando el flag `--out` de la 
siguiente manera `terraform plan --out=mi-plan.plan`. 

:::note
- No hay name conventions para los nombres que usamos para guardar nuestros planes
- Suele ser util en pipelines de CI/CD
:::

### Terraform apply
Ejecuta los cambios propuestos en el `execution plan`

Como tenemos dos tipos de planes tambien tenemos dos tipos de terraform apply 

1. Usando Automatic plan Mode.  Ejecutamos `terraform apply` automaticamente aplica el validate,
crea el plan y lo ejecuta. En este modo si necesitaremos una aprobacion para ejecutar dicho plan.

2. Saved plan mode. Ejecutamos `terraform apply FILE` automaticamente se crean los cambios 
con el plan de execution que le enviamos.

:::tip 
Para inspeccionar el plan podemos usar `terraform show`
:::

## Drift
Esto ocurre cuando nuestros recursos esperados estan en un estado diferente 
a nuestro estado esperado.

Hay 3 formas de resolver dicho conflicto:

- Remplazando recursos. Esto ocurre cuando un recurso esta dañado y terraform no lo reconoce.
Usamos el flag `--replace`. Antes usabamos `terraform taint` para marcar los recursos que en un futuro 
quedaran deprecated. Pero desde la version `0.152` este comando esta deprecated.

:::note
Con el comando `terraform apply --replace="aws_instance.my_ec2[0]"`. solo podemos un 
recurso a la vez
:::

- Importando recursos. Cuando un recurso lo queremos agregar de forma manual al estado. Usamos 
el `--import`

```hcl
resource "aws_instance" "example" {
  # ... instance configuration ...
}
```
con esto al usar `terraform import aws_instance.example [id]` importamos un recurso que creamos de 
forma manual en la consola. 

:::caution 
- No todos los recursos puden ser importados automaticamente al state file. Deberiamos revisar 
la documentacion para saber que recursos si tienen este feature.
- Solo podemos importar un recurso a la vez
:::

- Actualizando el estado. Lee la configuracion actual de todos los recursos remotos y actualiza 
el estado para los cambios. Sin realizar cambios en nuestra infraestructura remota.

Podemos usar `terraform refresh` el cual es un alias para   `terraform apply --auto-approve --refresh-only`

Consideremos el siguiente escenario para que se entienda mejor.

Creamos un script para que provisione una maquina virtual en aws. A uno de nuestros ingenieros le decimos 
que elimine la maquina virtual y el en vez de modificar el script lo elimina directo de la consola. 

Si ejecutamos terraform apply. 
1. Asumira que el estado es correcto,que nos hace falta una maquina virtual 
2. Propondra provisionar una vm 

Si ejecutamos `terraform apply --refresh-only`
1. Se dara cuenta que la maquina virtual que creamos falta 
2. Se dara cuenta que el evento que la maquina virtual no este es aproposito.
3. propondra cambiar el estado y no creara una maquina virtual.

## Workflows 

Las 3 fases basicas son:
1. Escribir -> Escribir la infraestructura que vamos a provisionar
2. Plan -> Crear el plan de ejecucion
3. Apply -> Provisionar infraestructura

A medida que los grupos van creciendo los workflows deben ir evolucionando 
tenemos 3 tipos de workflows a medida que los equipos van creciendo

- Indivual 
- Equipos que usan solo terraform 
- Equipos que usan terraform cloud

### Individuales 

-  Escribir 
1. Escribimos nuestros archivos de terraform en cualquier editor de texto 
2. Guardamos nuestros cambios usando VCS (Version control system) como git
3. Usamos de forma repetitiva `terraform plan` y `terraform validate` para 
no tener errores de sintaxis

- Plan
1. Cuando ya no tenemos errores hacemos un commit local
2. Solo usaremos una rama `main`
3. Cuando terminamos el proceso de commit pasamos al apply

- Apply
1. Ejecutamos `terraform apply`
2. Revisamos el plan de ejecucion 
3. Luego de que los cambios se hayan provisionado de forma exitosa hacemos un push
a nuestro repositorio remoto.

### Equipos 

-  Escribir 
1. Cada equipo escribe su codigo de forma local con su editor favorito
2. Se crean ramas por equipo con el fin de poder manejar los conflictos 
3. Terraform plan puede ser un buen feedback para equipos pequeños
4. Para equipos mas largos las credenciales empiezan a ser un problema por ende 
usar un pipeline de CI/CD es lo mejor

- Plan
1. Cuando una rama esta lista procedemos a realizar el PR el cual generara el plan 
de ejecucion que lo adjuntamos en el PR para revision

- Apply
1. Una vez aprobado y mergeado el PR se procede a ejecutar el pipeline el mismo que 
ejecutara el `terraform apply`

:::notes 
- El equipo de devops debe mantener y modificar los pipelines de CI/CD
- Se debe pensar como almancenar el `state file`
- No podemos tener control de accesos o permisos, es decir, quien puede destruir 
recursos, quien puede aplicarlos, etc.
- Debemos gestionar como inyectar secrets de una forma segura
- Manejar multiples ambientes puede ser algo caotico.
:::

### Equipos usando terraform cloud

- Escribir 
1. usaremos terraform cloud como nuestro backend remoto
2. Las variables las almacenamos en terraform cloud y no en nuestro computadora 
usando archivos `.tfvars`
3. terraform cloud tiene integraciones con los VCS y automaticamente crea los pipelines
4. Escribir el codigo de cada equipo en diferentes ramas.

- Plan 
1. Cuando una rama esta lista procedemos a realizar el PR el cual generara el plan 
de ejecucion que lo adjuntamos en el PR lo podemos revisar y comentar usando terraform cloud

- Apply 
1. Luego del PR sea mergeado terraform cloud ejecutara el apply. Una persona del equipo debe confirmar
dichos cambios.


## Backends

Define donde y como las operaciones se ejecutan, ademas donde almacenamos las snapshots.

Existen dos tipos de terraform backends:

1. Standard backend

- solo almacena los estados
- No podemos realizar operaciones como `terraform apply`
- Son backends de terceros como aws s3

:::note
Algunas opciones de backends de terceros son:
- S3 podemos lockear usando DynamoDB
- Azure blob storage lockeamos de forma integrada
- Google cloud storage lockeo de forma integrada
- Alibaba cloud object storage services lockear usando TableStore
- OpenStack Swift lockeo integrado
- Tencent cloud object storage lockeo integrado
- Manta lockeo integrado

Podemos usar servicios mas extravagantes 
- Hashicorp consul 
- etcd
- postgresdb
- kubernetes secrets
- artifactory no tiene lockeo
:::

2. Enhanced backends 
- Podemos almacenar el estado 
- Ejecutar comandos como `terraform apply` 
Tenemos 2 tipos:
- Local: Archivos son guardados en la maquina local donde ejecutamos comandos.
- Remote: Archivos e informacion es almacenada en la nube.

:::caution
Los backups solo se guardan en la maquina local no en el backend remoto
:::
:::note 
- no necesitamos una cuenta de terraform cloud para crear remote backends
- si usamos un remote backend necesitamos configurar las credenciales de CSP
:::

### Inicializacion del Backend 
Podemos usar un archivo con la configuracion del backend con el fin de ponerlo en un 
gitignore y que en nuestros repositorios no exista configuracion acerca de nuestro repositorios.

```hcl title=main.tf

terraform {
  required_version = "~> 2.0.1"
  backend "remote" {}
}
```

```hcl title=backend.hcl
workspace = {name = "workspace"}
hostname = "app.terraform.io"
organization = "company"
```
Podemos usar el flag `-backend-config` para pasar dicho archivo de configuracion

ejemplo 

```bash 
terraform init --backend-config backend.hcl
```

### terraform_remote_state
Podemos obtener los outputs de otros archivos de estado por medio del data source 
`terraform_remote_state` el cual usa el ultimo snapshot del estado de la infraestructura.

Para backend remotos

```hcl 

data "terraform_remote_state" "vpc" {
  backend = "remote"
  config = {
    organization = "hashicorp"
    workspaces = {
      name = "prod"
    }
  }
}

resource "aws_instance" "example" {
  subnet_id = data.terraform_remote_state.vpc.outputs.subnet_id
}
```
:::note 
Solos los outputs del modulo root seran expuestas, si tenemos modulos anidados 
debemos explicitamente exponerlas tambien en el moodulo root, sino no podremos acceder
:::

Para backend locales 
```hcl 

data "terraform_remote_state" "vpc" {
  backend = "local"
  config = {
    path = "..."
  }
}
resource "aws_instance" "example" {
  subnet_id = data.terraform_remote_state.vpc.outputs.subnet_id
}
```
:::note 
usando los backend locales debemos pasarle la ruta absoluta del archivo de estado 
Podemos usar data sources como alternativa al `terraform_remote_state` pero 
recordemos que tendremos mas informacion sobre el recurso esto incluye informacion sensible
:::

### Bloqueo del estado
terraform de forma automatica bloquea el estado cada que se ejecuta una operacion
de escritura. Esto ayuda a que no se pueda corromper el estado cada que otros lo usen.

Terraform nos dara un output message si se demora el proceso de locking del state file.

Para desabilitar el bloqueo en los comandos que usamos utilizamos el flag `--lock` pero 
no es recomendado

Tambien tenemos una forma de desbloquear de un state file con el comando 
`terraform force-unlock`. Si desbloqueamos el archivo mientras alguien lo esta utilizando 
causamos que multiples personas modifiquen dicho archivo. Debemos usar este comando 
en las ocasiones cuando el desbloque automatico falla por cualquier razon. En estas situaciones 
terraform imprimira por consola un id el cual usaremos en el comando de la siguiente forma 

```bash 
terraform force-unlock 129239123921-ada231adsa-23123asdasd --force
```

con el flag `--force` skipeamos la confirmacion de lockeo.

### Proteger informacion sensible 

Los archivos de estado de terraform puden contener informacion sensible como contraseñas, usuarios, 
ips, etc. Causando posibles ataques y robo de informacion.

Cuando usamos local state debemos tener las siguientes consideraciones
- No debemos compartir dicho archivo con nadie 
- Debemos agregar dicho archivo en el .gitignore 

Cuando usamos remote state debemos tener las siguientes consideraciones
- Este archivo se guarda en memoria y no en disco
- Este archivo esta encrypted-at-rest
- Este archivo esta encrypted-at-transit

:::cation 
Si usamos almacenamiento de tercero debemos tener en cuenta si cumple con las politicas de seguridad 
correspondientes para que nuestra informacion este segura y si esta activada por default.
:::

### Ignore files 
Es muy parecido a la funcionalidad del `.gitignore` con la diferencia que terraform 
solo leera el archivo que esta en el root module, es decir, no sirve de nada tener varios archivos 
`.terraformignore` en los diferentes sub-modulos porque no seran leidos.

Por defecto sino tenemos ningun archivo `.terraformignore`. terraform excluira los siguientes directorios:

- `.git/`
- `.terraform/`

## Complex Types
Un complex type es un tipo de dato que agrupa multiples datos en uno.

Complex types los representamos por un constructor algunos tienen
tienen una palabra reservada.

Tenemos dos categorias para estos tipos de datos:

- Collection types (para agrupar valores similares)
  - list, map y set
- Structural types (para agrupar valores que pueden no ser similares)
  - tuple y object

### Collection types
Este tipo de dato nos ayuda a agrupar multiples valores del mismo tipo 
en un solo valor.

Tenemos 3 tipos de collection types:

- List: es como el tipico array y podemos usar index para acceder a los elementos.
Todos los datos dentro del list deben ser del mismo tipo

```hcl
variable "planet" {
  type = list 
  default = ["mars", "earth", "moon"]
}
planet = var.planet[0]
```
- Map es como el tipico diccionario de python o JSON object, 
usamos la key para acceder al valor

```hcl
variable "plans" {
  type = map
  default = {
    "PlanA" = "10 USD",
    "PlanB" = "20 USD"
  }
}
plan = var.plans["PlanA"]
```
- Sets: una colección de valores únicos que no tienen ningún 
identificador secundario u ordenación. Como todos los elementos 
deben ser del mismo tipo, se castean con el tipo de dato 
del primer elemento.

### Structural types
Este tipo de dato nos ayuda a agrupar multiples valores de diferentes tipos
en un solo valor.
Requieren un schema como argumento con el fin de especificar que tipo de valores 
van en cada elemento.

Tenemos dos tipos de structural types

- Objects es como un JSON con multiples tipos de valores

```hcl
variable "plans" {
  type = object({
    PlanA = string,
    PlanB = string
  })
  default = {
    "PlanA" = "10 USD",
    "PlanB" = "20 USD"
  }
}
plan = var.plans["PlanA"]
```

- Tuples es como una lista dinamica

```hcl
variable "planet" {
  type = tuple([string, number, bool]) 
  default = ["mars", 1, false]
}
planet = var.planet[0]
```
:::note 
Podemos usar comas como simplemente salto de linea en los maps y objects.
Necesitamos el schema para los structural types
:::

## Built-in Functions 
Son funciones que vienen propias de terraform que nos permite 
realizar transformaciones o combinar valores

### Numeric
- abs(num): retorna el valor absoluto del num
- floor(num): redondea hacia abajo el num
- log(num, base): retorna el logaritmo del num en la base 
- ceil(num): redondea hacia arriba el num
- min(set[]): retorna el minimo valor del set
- max(set[]): retorna el maximo valor del set
- parseint(num:string, base:int): parsea a int el string numero en la base que le digamos
- pow(num, exp): calcula el valor de num a la exp
- signum(num): representa el signo del numero (-1, 0, 1)

### String
- chomp(string): remueve los salto de lineas en los string
- format(string, value): como el format de python para agregar variables al string
- formatlist(string, valuelist): como el anterior pero con una lista de valores
- indent(spaces, string): agrega la identacion 
- join(delimiter, list(string)): une todos los elementos de un array usando el delimiter
en un solo string
- lower(string): regresa todo en minusculas del string 
- regex(regex, string): aplica una expresion regular a un string y devuelve los substrings
- replace(phrase, stringReplace, newString): reemplaza el stringReplace por el newString en el phrase
- split(delimeter, string): transforma el string en un array, usa el delimiter para saber el inicio 
y fin de cada elemento
- strrev(string): el reverso del string
- substr(string, from, to) slice de un string desde from hasta to 
- title(string): capitaliza un string es decir convierte en mayusculas la primera letra de cada palabra
- trim(string, delimiter): elimina el delimiter del string al inicio y al final
- trimprefix(string, delimiter): elimina el delimiter del inicio
- trimsuffix(string, delimiter): elimina el delimiter del final
- trimspace(string): elimita todos los whitespaces
- upper(string): pone en mayuscula un string

### Collection
- alltrue(list) retorna true si todos los elementos son true o si es una collection vacia sino retorna false
- anytrue(list) retorna true si existe algun true sino retorna false
- chunklist(list, size) retorna una lista de lista, crea agrupaciones de elementos de un tamaño establecido
- coalesce(list) retorna el primer valor que no es null o un string vacio
- coalescelist(list1, list2, list3) retorna la primera lista que no sea vacia
- compact(list) retorna una lista sin string vacios 
- concat(list1, list2) retorna la fusion de dos listas en una
- contains(list, element) retorna true si la lista contiene el elemento caso contrario false
- distinct(list) retorna una lista sin los duplicados, solo con los elementos unicos
- element(list, index) retorna el elemento en la posicion index de la lista
- index(list, element) retorna el index del element de la lista
- flatten(list) retorna una lista sin toda la listas anidadas
- length(list) retorna la cantidad de elementos de la lista 
- keys(map) retorna una lista con las claves del map
- lookup(map, key, default) retorna el valor de la key sino lo encuentra devuelve default
- matchkeys(list1, list2, list3) retorna una lista con los elementos que se repiten
- merge(maps) retorna un solo map con todos los maps que le pasamos por argumentos fusionados en uno solo.
- one(list) retorna el primer elemento de una lista
- range(number) genera una lista de numeros consecutivos usando el number como limite
- reverse(list) genera una lista con el orden reverso
- setintersection() retorna una lista con la interseccion 
- setproduct() retorna una lista con toda las posibles combinaciones de los elementos dentro 
- setsubtract() retorna los elementos que no tengan en comun de varias listas
- setunion() retorna una lista de todos los elementos 
- sort() retorna un array ordenado de forma lexicographically
- slice() slice de un array
- sum() retorna la suma de los elementos de una lista
- values(map) retorna una lista con los valores del map
- zipmap(keysList, valuesList) retorna un map con las claves y lo valores en sus listas respectivas
### Encoding

- base64encode(string) retorna un string en base64
- jsonencode(string) retorna un string en json
- yamlencode(string) 
- textencodebase64
- base64gzip()
- urlencode() 

### Decoding
- base64decode(string) retorna un string decodeado
- csvdecode()
- jsondecode()
- textdecodebase64()
- yamldecode()

### Filesystem
- abspath(path.root) me devuelve el path absoluto de un path relativo
- dirname("foo/bar/baz.txt") devuelve la carpeta o el direction elimina el archivo
- pathexpand() devuelve el path absolut
- basename() devuelve el nombre del archivo dado un path
- file() lee el contenido de un archivo
- fileexists() determina si un archivo existe
- fileset() retorna una lista con los paths de los archivos que solicite
- filebase64() retorna el valor del archivo en base64 bueno para imagenes
- templatefile() retorna una lista con los valores del archivo de configuracion

### Date and time
- formatdate() formateamos una fecha UTC en el formato que queramos
- timeadd() agregamos tiempo a una hora
- timestamp() retorna el tiempo en UTC

### Hash and Cripto
- base64sha256()
- base64sha512()
- **bcrypt()**
- filebase64sha256()
- filebase64sha512()
- filemd5()
- filesha1()
- filesha256()
- filesha512()
- **md5()**
- rsadecrypt()
- **sha1()**
- sha256()
- sha512()
- **uuid()**
- uuidv5()

### Ip network
- cidrhost()
- cidrnetmask()
- cidrsubnet()
- cidrsubnets()

### Type conversion
- can() retorna true si el valor existe
- defaults()
- nonsensitive() a un valor sensible lo trata como no sensible
- sensitive() trata a un valor como sensible
- tobool() convierte un valor en boolean
- tomap() convierte un valor en un map
- toset() convierte un valor en un set
- tolist() convierte un valor en una lista
- tonumber() convierte un valor en un numero
- tostring() convierte un valor en un string
- try()

## Terraform cloud
Terraform cloud es una plataforma que ayuda a los equipos a usar terraform
tiene las siguientes features:

- Manejo de los state files 
- historial de ejecucion de pipelines
- historial de estados previos
- inyeccion de variables facil y seguro
- tageo
- triggers
- workspace
- compartir el estado de forma global
- comentar en la ejecucion del pipeline
- Niveles de permisos como en gcp
- Notificaciones via slack, email, etc.
- Policy as code usando sentinel
- MFA
- Estimacion de costos 
- Multiples integraciones

### Terminos

- Organization: es el conjunto de workspaces
- Workspace: es un ambiente unico 
- Teams: se componene por multiples miembros y puede acceder a diferentes workspace
- Runs: ejecucion del execution plan en un ambiente virtual

### Run workflows

tenemos 3 tipos:

1. Version control workflow se produce cuando ejecutamos un PR en github o hacemos un merge
2. CLI-driven cuando de forma local ejecutamos comandos como terraform apply
3. API-driven usando el api de terraform 

### Organizational Level permissions
Podemos configurar para que todas las personas dentro de una organizacion puedan 
hacer lo siguiente:

- Manejar politicas
- Manejar el sobreescrimiennto de las politicas
- manejar workspace
- manejar VCS settings

Existe un rol especial dentro de las organizaciones que son los owners. 
Una organizacion puede tener uno o mas owners.
Los permisos especiales que tenemos con este rol son:
- Publicar modulos privados 
- Invitar usuarios a la organizacion 
- manejar la membresia de los equipos 
- ver todos los secrets del team 
- manejar permisos de la organizacion 
- manejar la facturazion de la organizacion 
- eliminar organizacion 
- manejar las configuraciones de la organizacion

### Workspace Level permissions
Manejar los recursos y las configuraciones de los workspaces

Tenemos permisos en una forma mas granular (custom permission):
- leer runs
- encolar plans 
- correr run
- bloquear y desbloquear workspaces
- descargar sentinel mocks
- leer una variable 
- escribir variables
- leer outputs del estado 
- leer versiones del estado 

Tenemos tambien grupos de de permisos preestablecidos:

- Write
- Plan 
- Read

Asi como en las organizaciones tenemos un owner en los workspaces 
tenemos los admins.

### Api Token
terraform cloud soporta 3 tipos de tokens:

#### Organization
- Cada organizacion solo puede tener un token valido a la vez
- solo los owners pueden generar y revocar tokens
- los token son creados para configurar y crear workspaces y equipos

#### team
- Cada equipo solo puede tener un token a la vez
- cualquier miembro del equipo puede revocar o generar un token
- Cuando re generamos un token el anterior se vuelve invalido
- Diseñado para realizar operaciones en el workspaces

#### User
- Hereda los permissions del miembro del equipo
- Puede ser un usuario o una pc

### Estimacion de costos 
Terraform tiene un feature para estimar los costos de los recursos que tenemos 
en la nube. El problema con esto es la disponibilidad de servicios que tenemos 
Azure es el que mas servicios tenemos, le sigue aws y el ultimo es gcp.

### Cloud run environment
Cuando terraform cloud ejecuta un plan o un apply se crea un run environment.
Esto es una virtual machine que usa linux con arquitectura x86_64. Pero no podemos 
saber si es ubutun, debia, centos, etc.

Terraform agregara estas variables con cada ejecucion:
- TFC_RUN_ID el identificador unico del run 
- TFC_WORKSPACE_NAME nombre del workspace que se esta ejecutando 
- TFC_WORKSPACE_SLUG org/workspace
- TFC_CONFIGURATION_VERSION_GIT_BRANCH nombre de la rama
- TFC_CONFIGURATION_VERSION_GIT_COMMIT_SHA el hash del commit 
- TFC_CONFIGURATION_VERSION_GIT_TAG tag de la rama

Podemos acceder a las variables usando 
```hcl
variable "TFC_RUN_ID" {}
```
### terraform cloud agents 
Es un feature pagado que nos permite conectar nuestra infraestructura privada u 
on-premises. Esto es util cuando tenemos infraestructura que usa vSphere, Nutanix, Openstack

- Estos agentes solo se ejecutan en infraestructura x86_64, con sistema operativo linux
- Podemos ejecutar el agente usando docker 
- Soporta terraform desde la version 0.12 en adelante
- Necesitamos 4gb de disco duro como minimo y 2gb de ram 
- Necesitamos tener el puerto 443 abierto y registrados los siguientes dominios 
  - app.terraform.io
  - registry.terraform.io
  - releases.hashicorp.com

## Terraform Enterprise
Es la version de terraform platform pero que nosotros administramos, es decir, 
provisionamos un servidor y ejecutamos todo lo relacionado con terraform.

Ventajas:
- No tenemos limites en los recursos 
- audit logging
- SAML
### Requerimientos 

1. Modo de operacion -> donde almancenaremos la informacion 
  - Servicios externos 
    - Postgres
    - S3
  - Disco duro externos -> almacenamos la informacion en discos duros separados de la maquina
  - Demo -> almacenamos la informacion en la misma maquina y luego le hacemos backup

2. Credenciales -> Verifica si tenemos las credenciales pertinentes y los certificados
  - Licencia: lo obtenemos de Hashicorp
  - Certificado y llave privada: La generamos

3. instancia de linux 
  - Podemos usarla en:
    - ubuntu 
    - debian
    - centos
    - redHat
    - oracle linux 
    - amazon linux
  - requerimientos de hardware
    - 4cpus 
    - 8gb de ram
    - 10 gb de disco duro el root
    - 40gb de disco para la docker data

:::note 
Podemos tener un entorno `air gapped`, lo cual significa que nuestra maquina 
no tendra acceso a internet por ende no la podran hackear desde internet.
Esto normalmente lo usa el sector publico. terrform enterprise tiene una version 
para esto
:::

### Pricing 

![terraform-pricing](/img/terraform/terraform-pricing.png)

## Workspace
