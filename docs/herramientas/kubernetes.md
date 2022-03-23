---
sidebar_position: 2
---

# Kubernetes

Es una tecnologia que permite orquestar contenedores. Podemos usar esta 
[referencia](https://sre.google/sre-book/table-of-contents/).

Kubernetes es declarativo es decir yo creo un manifiesto donde indico cuantos 
contenedores quiero, que contenedores quiero, etc.

## Instalacion 

1. Necesitaremos `kubectl` el cual es el cliente de kubernetes. `Kubectl` se conecta al cluster de Kubernetes
y por medio de la terminal podremos manejar nuestro cluster. Podemos seguir el siguiente 
[enlace](https://kubernetes.io/es/docs/tasks/tools/install-kubectl/) para instalar kubectl.

2. Para saber si tenemos kubectl usamos el siguiente comando:

```bash
kubectl version --client=true
```

3. Ahora necesitamos instalar nuestro cluster, la forma mas facil de instalar un cluster de 
kubernetes es con `docker Desktop`. Tambien podemos usar `minikube`, para saber como instalar 
para saber como instalar `minikube` podemos usar el siguiente 
[enlace](https://v1-19.docs.kubernetes.io/es/docs/tasks/tools/install-minikube/)

4. Luego de tener el cliente de kubernetes `kubectl` y tener un cluster de kubernetes creado.
Necesitaremos conectar `kubectl` a dicho cluster por medio de un archivo de configuracion llamado
`kube.config`

### Kubernetes Dashboard
Es una forma de poder manejar tu cluster por medio de una ui. Para mas [informacion](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

## Overview
- Clusters: una agrupacion logica de todos los recursos 

- Namespace: una agrupacion logica por nombre de los recursos que hay en un cluster.
Normalmente se usa para aislar diferentes workloads dentro del cluster 

- Node: La maquina virtual donde se ejecutan los pods. Existen 2 tipos de nodos 
`worker nodes` y `control nodes` los primeros es donde las aplicaciones corren mientras que 
el segundo maneja los `worker nodes`

- Pod: es la unidad mas pequeña en k8s. Es la forma de abstraer un contenedor 

- Services: Es una ip estatica o un dns para un grupo de pods (la ip persiste incluso si el pod muere)

- Ingress: Traduce reglas http/s que apuntan servicios 

- Api Server: Es columna de las comunicaciones en kubernetes

- Kubelet: Permite comunicarnos con los nodos desde kubectl 

- Kubectl: El CLI que ayuda a los usuarios a interactuar con el cluster y sus servicios atraves 
del api server

- Cloud controller manager: Habilita el link con CSP (Aws, azure, gcp)

- Controller manager: Es el cerebro de kubernetes

- Scheduler: Sabe donde ubicar los pods y los ubica en una cola

- Etcd: almacena el estado del cluster como una base de datos o un .tfstate file

- Kube Proxy: Se encarga de todo el networking dentro de los pods (routing and filtering) rules

- Network policies: Es un firewall virtual que restringe la comunicacion 

- Config maps: Tener configuraciones especificas como un mini data store 

- Secrets: es un configmap pero encriptada 

- volumes: son los discos duros 

- Statefullset: Indica la existencia unica de cada pod

- replicaset: Mantiene la cantidad de pods que se solicita

- Deployment: es un template de lo que se quiere deployar.

## Nodes 
### Control plane node (Master node)
Realizan tareas como programar, reiniciar nodos, control, etc.

Los principales elementos dentro de este tipo de nodos son:
1. Api server 
2. Scheduler 
3. Control manager 
4. Etcd
5. kubelet

:::tip 
Esto normalmente esta dentro del namespace `kubesystem`
:::

### Worker nodes
Se encarga de ejecutar las apps y tenemos los siguientes elemento dentro de estos: 
1. Api server
2. kubelet
3. Kube Proxy 
4. Container runtime
5. iptables
6. pods and containers

## Contextos
Los contextos son la combinacion entre usuarios y cluster. Dice que usuario usa que cluster.
### Kubeconfig
Son los archivos que tienen configurado los cluster, los usuarios y los contextos que tenemos en nuestra maquina
para controlar los cluster de kubernetes. Estos archivos de configuracion nos permite conectarnos a nuestros
clusters de kubernetes sin tener que estar configurando el servidor, usuario, configuracion, etc.

Estos archivos tienen 3 partes: `users`, `clusters` y `contexts`

```yaml {5-7,9-13,15-19}
apiVersion: 1
kind: Config
preferences: {}

users:
    - name: docker-desktop
    - name: minikube

clusters:
    - cluster:
      name: docker-desktop
    - cluster:
      name: minikube

contexts:
    - context:
      name: docker-desktop
    - context:
      name: minikube

```

- Los usuarios necesitaran un `certificado` y una `llave`.
- Los clusters necesitara un `CA` y una `ip`.
- Los contextos usaran un `usuario` y un `cluster`.


:::info
Puedes dar el valor del certificado en base64 quemado o puedes poner la ruta del archivo
:::

:::tip
El archivo kubeconfig lo podemos encontrar en la ruta `~/.kube/` puedes usar nano para abrirlo 
`nano ~/.kube/config` o usar el comando `kubectl config view`
:::

### Manejo de contextos 

Para ver los nodos de un contexto usas el siguiente comando 

```bash
kubectl --context=${CONTEXT} get nodes
```
Puedes usar `kubeselect` para que puedas ver todos los contextos que tienes y seleccionar
en cual quieres trabajar con esto te evitas el `--context`. Para su instalacion usa el siguiente 
[link](https://github.com/fatliverfreddy/kubeselect).

### Archivos de configuracion 

Si posees un kubeconfig para tu cluster lo puedes usar de las siguientes formas:

1. Sin variable de entorno
```bash
kubectl --kubeconfig=${PATH_TO_KUBECONFIG_FILE} get nodes
```
2. Con variable de entorno
```bash
export KUBECONFIG=${PATH_TO_KUBECONFIG_FILE}
kubectl get nodes
```
3. Varios archivos de configuracion pero no quiero juntarlos
```bash
export KUBECONFIG=${PATH_TO_KUBECONFIG_FILE}:${PATH_TO_OTHER_KUBECONFIG_FILE}
kubectl --context=${CONTEXT_NAME} get nodes
```
4. Si queremos hacer un merge de todos los archivos que tenemos de configuracion
```bash
export KUBECONFIG=${PATH_TO_KUBECONFIG_FILE}:${PATH_TO_OTHER_KUBECONFIG_FILE}
kubectl config view --merge --flatten > config.yaml
```
5. Si queremos extraer un contexto de un archivo con configuraciones 
```bash
export KUBECONFIG=config.yaml
kubectl config view --minify \
--flatten \
--context=${CONTEXT_NAME} \
> ${CONTEXT_NAME}.yaml
```

## CheatSheet (Comandos mas usados)

- `kubectl get` Sirve para obtener recursos.
- `kubectl edit` Sirve para editar un recurso.
- `kubectl delete` Borrar un recurso.
- `kubectl apply` Aplicar manifiestos en el cluster.
- `kubectl exec` Aplicar comandos a un contenedor.
- `Kubectl logs` Ver los logs de un pod o contenedor.
- `kubectl cp` Copiar archivos desde nuestro pc al contenedor.
- `kubectl port-forward` Para forwardear un puerto que un contenedor este exponiendo.
- `kubectl drain` Vamos sacar todos los contenedores de un nodo.
- `kubectl cordon` Hacer que ese nodo ya no reciba mas contenedores.
- `kubectl uncordon` lo contrario a cordon.
- `kubect config get-contexts` Para ver todos los contextos del archivo kubeconfig.
- `kubectl config use-context` Para setear un contexto, puedes revisar el manejo de contextos 
[aqui](#manejo-de-contextos).
- `kubectl describe` Para ver los eventos de los pods.

Kubernetes tiene la opcion de usar abreviaciones podemos verlas 
[aqui](https://blog.heptio.com/kubectl-resource-short-names-heptioprotip-c8eff9fb7202).

## In-Tree vs out-of-Tree
- In-Tree 
Son los plugins que ya vienen por default dentro del proyecto o que estan en el mismo 
directorio 
- Out-of-tree
Son los plugins que de forma manual debemos instalar para extender las capacidades 
de la herramienta que estamos usando 

## Endpoints and Endpoints - slices
Trackean la ip de los pods asignados a un services de kubernetes
Cuando un selector de un servicio hace match con una label de un pod la ip del pod 
entra al pool de endopints con el fin de que el servicio sepa a cuales direciones ip debe mandar 
el trafico. Recordemos que esto es asi porque los pods mueren constantemente entonces sus ips 
cambian los servicios por otro lado son estaticos y para mapear la ip de los pods existe esta pool 
de endpoints. Por ende los pods se exponen publicamente hacia los servicios usando los endpoints.

```bash
kubectl get endpoints # obtenemos la lista de endpoints
```

Por otro lado los `endpoints slices` son segmentos que manejan hasta un limite de 100 pods.

## Jobs 
UN background job es una forma de ejecutar una tarea que realiza una tarea en especifico se usa 
bastante cuando queremos hacer backups a las bases de datos.

En kubernetes tenemos algo similar los `cronjobs` y los `jobs`

Los `jobs` es un grupo de pods que ejecutaran una accion de manera indefinida hasta que la accion 
se termine 

```bash 
kubectl create job hello --image busy-box -- echo "hello world"
```
los `cronjobs` usan cron expresions para definir el tiempo. Y son basicamente jobs pero que se 
disparan con eventos de tiempo, es decir, cada 5 segundos o cada 1 dia.

```bash 
kubectl create job hello --image busy-box --schedule "*/1 * * * *" -- echo "Hello world"
```

## Namespace
Es una division logica de tu cluster de kubernetes, permite separar la carga del cluster.

:::caution
Por default los datos dentro de los ns si se pueden ver entre ellos
:::

```bash
kubectl get ns
```
Kubernetes empieza con 4 namespaces:

1. `default` aqui se agregan todos los pods a los que no le agregamos namespace
2. `kube-public` para recursos que queremos que sean publicos 
3. `kube-system` almacena todos los pods creados por el systema de kubernetes 
4. `kube-node-lease` Se usa para detectar fallas en los nodos como (un healthcheck para nodos)

- El nombre de los pods dentro del namespace debe ser unico pero fuera de el puede repetirse
- Podemos aplicar una restricion de quota por namespace para tener un control de la memoria o cpu 
que usan los pods dentro de ese namespace
### Scoping 
Dentro de kubernetes existe algo parecido a los lenguajes de programacion como es el scope

tenemos 3 tipos de scope:

1. Single namespace object: Solo pueden existir dentro del namespace (secrets and configmaps)
2. Multi namespace object: Pueden existir entre varios namespace (pods and service)
3. Cluster-wide objets: Recursos globales (nodos y volumenes)

## Selectors
Es una forma para seleccionar varios recursos dentro de kubernetes.
Existen 3 tipos de selectores:

### label selector
Selecciona los recursos de k8s usando su label. Los labels son de `key:value` y estos se encuentran 
en la metadata del manifiesto.

Ejemplo
```yaml {6-7}
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels: 
    env: prod
    app: nginx-web
```
Para poder ver las labels de los pods podemos usar 

```bash
kubectl get pods --show-labels
```
Tambien podemos agregar labels por medio de `kubectl`

```bash
kubectl label pods nginx env=dev
```

### Recommend Labels 

Son labels que se deberian usar en cada recurso 

- app.kubernetes.io/name
- app.kubernetes.io/instance
- app.kubernetes.io/version
- app.kubernetes.io/component
- app.kubernetes.io/part-of
- app.kubernetes.io/managed-by
- app.kubernetes.io/created-by

Labels sin el prefix `app.kubernetes.io/` son privadas para los usuarios

Ejemplo:

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels: 
    app.kubernetes.io/name: mysql
    app.kubernetes.io/instance: mysql-abxc
    app.kubernetes.io/version: 5.7.2
    app.kubernetes.io/component: database
    app.kubernetes.io/part-of: wordpress
    app.kubernetes.io/managed-by: helm
    app.kubernetes.io/created-by: controller-manager
```
Para matchear las labels selector con diferentes servicios o replicas set debemos 
recurrir a la documentacion debido a que cada recurso en kubernetes tiene una forma 
distinta de matchear los label por ejemplo en servicios se usa la palabra `selector`
pero en replicaset se usa `matchLabels`.

2. `field selector` Selecciona los recusos usando la metadata
3. `node selector` Selecciona nodos para pods 

### Annotations 
Nos ayuda a agrerar metada de terceros con el fin de extender sus funcionalidades 

Ejemplo

```yaml
apiVersion: v1
kind: Ingress
metadata:
  name: minimal-ingress
  annotations: 
    nginx.ingress.kubernetes.io/rewrite-target: /
```

Con ese ejemplo lo que hacemos es usar un controlador nginx para las reglas de trafico

## Kubelet
Es el agente responsable de la comunicacion entre los pods y el API server.

Un Agente es el encargado de observar que le ocurre a los programas y comunicar 
la informacion a los exteriores o tomar acciones.

Kubelet es el encargado de: 
- Observar los cambios de un pod
- Configurar el container runtime para crear namespaces, descargar imagenes o ejecutar contenedores
- Kubelet usa el `PodSpec file` para saber que contenedores y recursos debe usar.

### gRPC
Es un protocolo de comunicacion como (Rest o graphql). El cual nos permite comunicarnos entre
programas con diferentes lenguajes de programacion. Normalmente los encontramos en sistemas distribuidos 
o microservicios. 

### Comunicacion 
![kubelet-comunication](/img/kubernetes/kubelet-comunication.png)
1. Kubelet esta monitoreando constantemente los cambios de los pods 
2. Kubelet envia peticiones HTTPS al Api server
3. Kubelet interactua con el storage por medio de CSI (container storage interface) usando 
gRPC
4. Kubelet interactura con el CRI (container runtime interface) usando gRPC
5. El CRI se comunica con el CNI (container network interface) por su cuenta

## Kubectl
Es el CLI (command line interface) que nos permite controlar nuestros clusters 
de kubernetes. Esto lo hace enviando Peticiones HTTPS al api server.
:::note
Kubectl usa un archivo de configuraciones el cual se encuentra en `~/.kube`
:::
Kubectl tiene la siguiente syntaxis 
- kubectl [command] [type] [name] [flags] 

### Command
Es la operacion que queremos realizar 

Commandos:
- annotation: informacion de tipo `key:value` que podemos agregar a los recursos 
- apply*: para ejecuta manifiestos con los que podemos crear o modificar recursos 
- auth: Revisa si tienes la autorizacion para ejecutar una accion
- autoscale: Crea un autoescalador que automaticamente modifica el numero de pods
- cp: Copia archivos y directorio a los contenedores o desde los contenedores
- create: Crear los recursos en un manifiesto (no puede modificar, por ende, casi siempre usaremos apply)
- delete: Eliminar recursos 
- describe: Muestra detalles de los recursos 
- diff: diff la configuracion local contra la remota
- edit: Edita el manifiesto de un recurso 
- exec*: ejecuta un comando dentro del contenedor
- expose*: Expone un pod por medio de un servicio
- get*: Obtiene la informacion de un recurso en menos detalle que `describe`
- kustomize: Hace un merge de manifiesto declarados en un `kustomize.yaml`
- label: actualiza labels en los recursos
- logs*: Print los logs de un recurso, contenedor o pod
- patch: Actualiza los campos de un recurso usando strategic merge patch, JSON merge patch o JSON patch
- port-forward: Forward un o mas puertos loales a un pod
- proxy: Create un servidor proxy entre el localhost y el API server
- run: Corre imagenes de contenedores en pods
- scale: Cambia el tamaño de los pods, es decir, crea mas instancias.

### Type
Se refiere al tipo de recurso
Hay mas de 50 tipos de recursos en Kubernetes algunos tienes abreviaciones no todos para mas informacion 
podemos [visitar](https://kubernetes.io/docs/reference/kubectl/#:~:text=Valid%20resource%20types%20include%3A%20deployments%2C%20daemonsets%20and%20statefulsets.&text=Run%20a%20specified%20image%20on%20the%20cluster.&text=Update%20the%20size%20of%20the%20specified%20replication%20controller.&text=Configure%20application%20resources.)

### Name
Especifica el nombre del recursos, podemos usar mas de un nombre de un recurso separados por espacios 
ademas sino indicamos el nombre nos mostrara todos.

```bash
kubectl get pods nginx-server1 nginx-server2
```

:::warning
Los nombres son case-sensitive
:::

### Flags 
Son las flags que podemos pasar a los comandos, similar a las flags que pasamos a los comandos en linux. 
Usamos `--` seguido del nombre de la flag y el valor de la flag puede llevar `=` como un ` ` usar espacio 
o igual es un poco random depende de cada uno. Hay alguno CLI que si son sensibles al usar `=` o ` ` pero 
kubectl no

- para las abreviaciones usamos solo `-`
- las flags van a depender del comando que usemos 
- No en todos los casos se debe pasar informacion a los flags

Podemos encontrar documentacion sobre kubectl en el siguiente [link](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)

## Runtimes
Docker y Kubernetes no son CRI(container runtime interface) sino que son orquestadores
ellos usan CRI como `containerd` o `CRI-O` los que a su vez usan Container runtimes como 
`runC` o `Crun`.

- Orchestadores: Buildean imagenes, manejan servicios, networking, etc 
- CRI: push/pull imagenes, supervisan contenedores, maneja el storage y el networking 
- OCI (Open container iniciative): Corren los contenedores. 
:::note
Existen dos tipos de OCI nativos y virtualizados. La principal diferencia es la `isolation`.
Los virtualizados pueden dar mas seguridad por medio de la `isolation`
:::

### Tipos de CRI

#### ContainerD
Es uno de los estandares de la industria. Buscan simplicidad, portabilidad y robustez. 
Docker extrajo su CRI, lo convirtio en un proyecto llamado `containerd` y entro a la CNCF.

La images que buildeamos con docker no son docker images sino que ya forman parte de un estandar
#### CRI-O
Es una buena alternativa a containerd, es el CRI que usa Kubernetes y tiene habilitado el 
OCI. Esto habilita a que kubernetes pueda usar cualquier Container runtime como runc o Crun.


## Storage 
### Container storage interface (CSI)
Son el intermediario entre los container orchestatrion systems(COS) y los Storage providers (SP)
con el fin de que se puedan comunicar de una forma estandarizada

Algunos COS pueden ser:
- Docker swarm 
- Kubernetes 
- Mesos 

Algunos SP:
- google cloud storage 
- aws ebs
- azure disk
:::note
Esto lo usamos cuando usamos persistent volumes
:::
### Backing store and etcd
Los componentes dentro de kubernetes necesitan una forma de protegerse en caso de desastres
estos pueden ser (el servidor se murio, se fue la luz, etc.). Entonces kubernetes usa etcd que 
seria como la base de datos para almacenar estados de los recursos, mientras los datos de aplicacion 
los guardamos en persistent volumes.

Etcd: es una base de datos consistente y distribuida de tipo `key:value` la cual trabaja muy bien 
con sistemas distribuidos o clusters. Otros proyectos ademas de kubernetes lo usan como CoreDNS y Rook

:::note
Podemos reemplazar `etcd` por una base de datos relacional como mariadb
Minio - es un storage de tipo objetos como s3 o cloud storage
Rook - es un sistema distribuido de storage automatiza todos los task de los storage administrators
:::

### Volumes 
En kubernetes tenemos varios tipos de volumes:

- Persistant Volume: es cuando vinculamos un disco duro a un pod. La informacion seguira existiendo 
incluso, si el pod muere 

- Ephimeral Volume: Volumes que existen con el pod, es decir, si el pod muere el disco se elimina tambien 
se usa para almacenar informacion temporal 

- Projected Volumes: Mapea diferentes discos duro en una sola ruta 

- Volume Snapshot: Lo usamos como backups o rollbacks

:::note
A los pods podemos agregar cualquier tipo de volumen y cualquier cantidad.
:::

:::caution
Kubernetes no te permite asociar un PV con un pod directamente debido a como se diseño kubernetes 
ademas para eso kubernetes tiene un recurso llamado PVC (persist volume claim)
:::

#### PVC 
Lo usamos para desacoplar los pods con los persiste volumes. Basicamente lo que hace el PVC es 
hacer una peticion por un PV que cumpla ciertos criterios (tipo de almacenamiento, espacio, etc). 
Si existe un PV que cumple dichas caracteristicas se hace un match y un bind

### Configmaps

## Pods
Es un set de contenedores, este set puede tener uno o varios contenedores pero normalmente 
un pod contiene un contenedor.

:::info
El `hash` que tiene cada uno de los pods es generado por el template de deployment
:::

Podemos usar `kubectl get pods` para obtener los pods, ademas podemos usar `kubectl get pods -o wide`
para tener una informacion mas detallada sobre los pods.

### Manifiestos de pods 

```yaml {2}
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:alpine
```
La seccion de `metadata` es donde pondremos el nombre del pod y algunas etiquetas
que nos seran utiles a la hora de manejar recursos.

`PodSpec File` basicamente es la seccion de configuracion 
que describe a un pod, empieza con `spec:`

Para aplicar el manifiesto del pod usamos el siguiente comando:

```bash 
kubectl apply -f ${PAT_TO_THE_FILE}
```

:::caution
- Sino agregamos un ns en el manifiesto, lo creara en el ns que estemos ubicados actualmente.
- Nunca deberiamos deployar pods con `kubectl apply` es la manera manual siempre 
deberiamos deployar pods con `deployments` o `jobs`
:::

Para poder correr un comando en el pod podemos usar el siguiente comando.
```bash
docker exec -it ${POD} -- sh
```

:::info
no se necesita tener activado en el firewall del nodo `ssh`, porque cuando me conecto a un pod usando 
`docker exec -it ${POD} -- sh` estoy usando el api de kubernetes
:::

### Variables de Entorno

Por el momento existen dos formas para manejar tus variables de entorno dentro de kubernetes:

1. Quemar los valores de las variables de entorno
```yaml title='pod.yaml' {9-17}
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:alpine
    env:
    - name: MI_VARIABLE
      value: "pelado"
    - name: MI_OTRA_VARIABLE
      value: "pelade"
    - name: DD_AGENT_HOST
      valueFrom:
        fieldRef:
          fieldPath: status.hostIP
```
:::info 
el `status.hostIP` es un valor que lo saca del `downward api` de kubernetes tiene algunos otros valores utiles,
que podemos utilizar para mas [informacion](https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/).
:::

2. Utilizar un manifiesto tipo secret para mas informacion ir a la seccion [secrets](#secrets).

```yaml title='secrets.yaml' {4-5,7}
apiVersion: v1
kind: Secret
metadata:
  name: misecreto
type: Opaque
data:
  password: PasswordSecreta # Puede estar en base64 
```
```yaml title='pod.yaml' {14-18}
apiVersion: v1
kind: Pod
metadata:
  name: envar-demo
  labels:
    purpose: demonstrate-envars
spec:
  containers:
  - name: envar-demo-container
    image: gcr.io/google-samples/node-hello:1.0
    env:
    - name: ENV1
      value: "Esta es una variable comun"
    - name: ENV2
      valueFrom:
        secretKeyRef:
          name: misecreto
          key: password
```
:::note
Con esto conseguimos que el secret este dentro del ns y que todas las cargas puedan acceder
a estas variables de entornos.
:::

### Recursos
Es una forma de asignarle recursos a nuestros contenedores, los recursos se asignan por contenedor
no por pod. Por ende podemos tener dos contenedores cada uno con sus recursos y a la final los 
recursos del pod seria la suma de los recursos de cada contenedor mas lo que necesita el pod para
funcionar.

#### Tipos de Recursos 

- `Request`: Son los recursos que le vamos a garantizar al pod que va a tener (Por mas que no los 
use).

- `Limits`: Es el limite que el pod puede usar no puede usar mas de eso.

:::caution
Aunque tengas una instancia de 1 core no necesariamente tienes disponible 1 core debido a que hay 
procesos de kubernetes corriendo en el cluster aunque no tengas ningun `pod` corriendo. Por ende
aunque tengas 1 core no necesariamente podras correr 5 pods de 100 mili cores.
:::

:::note
Si un pod empieza a utilizar mas `recursos` que los que estan puesto en el limite, el kernel de linux 
procedera a matar el proceso, se va a restartear el pod.

Esto no pasa en el cpu debido a que nunca se va a pasar del limite que tenemos. Por ende el kernel
nunca lo va a matar, lo que pasa es que si el pod quiere usar mas cpu del limite permitido, lo que 
hara el kernel es `cpu throttling`, es decir, lo va a ahorcar hasta que el pod use esa velocidad.
:::

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:alpine
    resources:
      requests:
        memory: "64Mi"
        cpu: "200m"
      limits:
        memory: "128Mi"
        cpu: "500m"
```
### Readiness Probe
es una forma de explicarle a kubernetes que el pod esta listo para recibir trafico. 

Lo que hace kubernetes es hacer un get a la ruta designada y esperar un 200. En caso
de norecibir un 200 el pod no se encuentra Ready.

### Liveness Probe
es una forma de explicarle a kubernetes que el pod esta vivo, es decir, que no 
quiero que lo mate o haga un restart.

Lo que hace kubernetes es chequear que el puerto 80 este abierto.

Hay 3 tipos de pruebas de `liveness` y `readiness`:

1. Comando si me retorna el comando `0` el contenedor es considerado vivo, caso contrario
falla la prueba por ende esta muerto y procede a reiniciar el contenedor.

```yaml
livenessProbe:
      exec:
        command:
        - cat
        - /tmp/healthy
      initialDelaySeconds: 5
      periodSeconds: 5
```
2. Por una peticion get, si devuelve la ruta un codigo mayor o igual a 200 y menor a 400 esta vivo, 
caso contrario la prueba falla y porcede a reiniciar el pod 

```yaml
livenessProbe:
      httpGet:
        path: /healthz
        port: 8080
        httpHeaders:
        - name: Custom-Header
          value: Awesome
      initialDelaySeconds: 3
      periodSeconds: 3
```
3. Por ultimo tenemos la peticion TCP, si se puede establecer conexion en el puerto el contenedor
es considerado vivo, caso contrario la prueba falla y procede a reiniciar el pod.

```yaml
livenessProbe:
      tcpSocket:
        port: 8080
      initialDelaySeconds: 15
      periodSeconds: 20
```

### Startup Probe
es una forma de saber cuando el contenedor inicio, esto desabilita al `readiness probe` y
`livenes probe` para que no interfieran con el inicio del contenedor. Esto suele usarse en 
contenedores lentos o aplicaciones de legado.

El startup probe lo que hace es esperar un tiempo de `failureThreshold * periodSeconds` para
proceder a realizar la prueba. Luego de salir ok el `readiness` y `liveness` empiezan a funcioanr


#### Ejemplo completo

```yaml {10-15,17-21,23-28}
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:alpine

    readinessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 5
      periodSeconds: 10

    livenessProbe:
      tcpSocket:
        port: 80
      initialDelaySeconds: 15
      periodSeconds: 20
    
    startupProbe:
      httpGet:
        path: /healthz
        port: liveness-port
      failureThreshold: 30
      periodSeconds: 10
```
## Deployments
Es un template para crear un pod. Ademas tiene un conjunto de reglas y etiquetas para 
manejar dichos pods.

### Replicas
Son la cantidad de pods que queremos en nuestro deployment, es decir, que si borramos un pod 
kubernetes instantaneamente creara uno de vuelta ya que siempre va a tratar de tener la cantidad
de pods que especificamos en el numero de replicas.

### Manifiesto

```yaml {1-2,9}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:alpine
```

## DaemonSet
Es una forma de deployar un pod pero este pod estara deployado en todos los nodos, es decir,
si tengo 3 nodos tendre 3 pods con una replica en cada nodo.

:::tip
Usa daemonset para servicios de monitoreo o captura de logs.
:::

Podemos obtener todos los DaemonSet que tenemos 

```bash
kubectl get ds
```
### Manifiesto

```yaml {1-2}
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:alpine
```

## StatefullSet 
Es una forma de deployar pods conservando sus estados atraves de volumenes, es decir, el pod se muere 
y todos los logs o informacion se elemina tambien, al guardarlos en un volumen lo que haremos es que 
aunque muera el pod el nuevo pod que creara kubernetes apunte a dicho volumen conservando la informacion.

:::tip
Esto es util para bases de datos por ejemplo.
:::

Podemos hacer un get de todos los `sts` que tenemos, `sts` es la abreviacion de statefullset.

```bash 
kubectl get sts
```
### PVC (Persistant Volume Claim)
Debido a que estamos usando `StatefullSet` y estos estan asociados con volumenes los cuales al final del
dia son discos duros persistentes, cuando declaramos el volumen kubernetes se conecta a la api 
del proveedor de nube y le solicita crear dicho disco duro, configurarlo y realizar el attach al nodo solicitante.
Para esto usamos el `StorageClassName`.

Para poder saber cuales son los pvc que tenemos podemos ejecutar el siguiente comando:

```bash
kubectl get pvc

kubectl describe pvc ${PVC_NAME}
```

### Manifiesto
```yaml {1-2,10,22-24,26-35}
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-csi-app-set
spec:
  selector:
    matchLabels:
      app: mypod
  serviceName: "my-frontend"
  replicas: 1
  template:
    metadata:
      labels:
        app: mypod
    spec:
      containers:
      - name: my-frontend
        image: busybox
        args:
        - sleep
        - infinity
        volumeMounts:
        - mountPath: "/data"
          name: csi-pvc

  volumeClaimTemplates:
  - metadata:
      name: csi-pvc
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 5Gi
      storageClassName: do-block-storage
```
## Networking 

1. El pod es el que tiene la ip no los contenedores, es decir, si tengo 3 contenedores dentro 
de un pod asegurarme de cambiar los puertos para que no colisionen entre si 

2. Hay un agente dentro de kubernetes llamado `` que se encarga de crear 
las diferentes rutas para que los pods puedan comunicarse entre los nodos o instancias.

3. Kubernetes tiene una base de datos en `etcd` que es la encaragda de almancenar las rutas y 
los estados de los workers

4. Cada nodo tiene su propia ip

### Servicios 
Los servicios en kubernetes son una forma de poder contactar un set de pods ya sea desde adentro 
del cluster o desde afuera, por medio de una direccion que se mantiene incluso si el pod muere

Utilizaremos como base este manifiesto de deployment

```yaml title='deployment.yaml'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello
spec:
  replicas: 3
  selector:
    matchLabels:
      role: hello
  template:
    metadata:
      labels:
        role: hello
    spec:
      containers:
      - name: hello
        image: gcr.io/google-samples/hello-app:1.0
        ports:
        - containerPort: 8080
```

Principalmente hay 3 servicios en Kubernetes.

- Clusterip Crea una ip fija  privada que esta dentro del cluster, que basicamente sirve como 
`loadbalancer` entre todos los pods que le asigne a ese servicio, es decir, yo me puedo conecar a un pod
y hacer un ping a es ip fija y la debe resolver. Todo esto sirve de forma interna

```yaml title='cluster-ip.yaml' {6,11}
apiVersion: v1
kind: Service
metadata:
  name: hello
spec:
  type: ClusterIP
  ports:
  - port: 8080
    targetPort: 8080
  selector:
    role: hello
```

:::tip 
Cuando usar CluusterIp?
- debugging
- dashboards internos 
- Testing
:::

- Node port es otro servicio en kubernetes, este crea un puerto en cada nodo que va a recibir el trafico
y lo va a mandar a los pods que tenga ese servicio.

```yaml title='node-port.yaml' {6,10,12}
apiVersion: v1
kind: Service
metadata:
  name: hello
spec:
  type: NodePort
  ports:
  - port: 8080
    targetPort: 8080
    nodePort: 30000
  selector:
    role: hello
```

- Loadbalancer esta mas atado a la nube, lo que hara kubernetes es crear un balanceador de carga en nuestro 
proveedor de nube y redireccionar el trafico por nuestros pods.

```yaml title='load-balancer.yaml' {6,11}
apiVersion: v1
kind: Service
metadata:
  name: hello
spec:
  type: LoadBalancer
  ports:
  - port: 8080
    targetPort: 8080
  selector:
    role: hello
```

- Headless envia traficos a pods especificos esto es util cuando tenemos statefullsets como DB
```yaml
apiVersion: v1
kind: Service
metadata:
  name: hello
spec:
  type: ClusterIP
  ports:
  - port: 8080
  clusterIp: None 
  selector:
    role: hello
```

- ExternalName esto no retorna una ip estatica sino un CNAME el cual k8s identifica por medio de un DNS.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hello
spec:
  type: ExternalName
  externalName: my.database.example.com
```
:::tip
Pro tip:
Busybox es como la cajita de herramientas o la navaja suiza. Tiene mas de 300 utilidades de UNIX 
y nos sera de mucha ayuda al momento de debuguear pods. para usarlo podemos ejecutar 

```bash
kubectl run --it --rm --restart=Never busybox --image=grc.io/google-containers/busybox sh 
```
:::
### Traffic policies
Con estas politicas podemos determinar como enrutar el trafico de los pods.

External e Internal tiene los mismos tipos los cuales son:
- cluster Enruta el trafico con todos los ready endpoints 
- local Enruta el trafico solo con los ready endpoints locales del nodo.

```yaml {12}
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
  internalTrafficPolicy: Local
```

:::caution 
Si tenemos el traffic policie puesto en local y no tenemos ningun nodo ready en el nodo 
el trafico no se enrutara.
:::

### Ingress
Basicamente lo que hace el ingress es un nuevo tipo de recurso en kubernetes que te permite hacer redirecciones 
de trafico sobre tus pods de formas mas avanzadas, por ejemplo path base. Redirecciono a que pod quiero ir 
por medio del path asi no debo estar creando subdominios, etc.
El trafico llega a un ingress controller que puede ser de nginx este a su vez lo redirecciona a un ingress services 
que definen las rutas que van a los servicios del cluster y esto lo mandan a los pods.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: hello-app
spec:
  rules:
  - http:
      paths:
      - path: /v1
        pathType: Prefix
        backend:
          service:
            name: hello-v1
            port:
              number: 8080
      - path: /v2
        pathType: Prefix
        backend:
          service:
            name: hello-v2
            port:
              number: 8080
```

### DNS (Domain Name system) 
Es el servicio responsable de hacer la traduccion de un nombre a una ip.
 
Kubernetes usa CoreDNS para realizar dicha traduccion. CoreDNS se asegura de
que los pods y servicios FQDN (Fully qualified domain name). Sin CoreDNS la 
comunicacion en el cluster no seria posible.

Podemos usar varios plugins para coreDNS.
CoreDNS se encuentra como servicio en el namespace de kube-system con el nombre
de kube-dns para obtenerlo podemos hacer 

```bash 
kubectl get services kube-dns -n kube-system
```
Ademas cada pod tiene un archivo de configuracion para ayudar al DNS
Lo encontramos ejecutando el siguiente comando
```bash
kubectl exec --it my-pod -- sh
cat /etc/resolv.conf
```
Tambien podemos usar una utilidad de linux llamada `nslookup`
para ver la ip de los CNAMES

:::note
Que es FQDN?
Es lo que se conoce como absolute domain el cual es la ubicacion exacta en el 
arbol de jerarquia.
:::
## ConfigMaps
Es usado para almacenar informacion no confidencial usando `key:value` pair.
Este archivo lo hosteo en kubernetes y puede ser accedido desde los pods.


:::tip
Esto puede ser usado para generar archivos de configuracion por stage o para las variables 
de entorno, es decir, Podemos usar los confimaps para:
1. variables de entorno 
2. argumentos para las lineas de comandos 
3. archivos de configuracion 
:::

### Manifiesto

```yaml title='config-map.yaml'
apiVersion: v1
kind: ConfigMap
metadata:
  name: game-demo
data:
  # property-like keys; each key maps to a simple value
  player_initial_lives: "3"
  ui_properties_file_name: "user-interface.properties"
  #
  # file-like keys
  game.properties: |
    enemy.types=aliens,monsters
    player.maximum-lives=5
  user-interface.properties: |
    color.good=purple
    color.bad=yellow
    allow.textmode=true
```

```yaml title='pod.yaml'
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx:alpine
      env:
        # Define the environment variable
        - name: PLAYER_INITIAL_LIVES # Nombre de la variable
          valueFrom:
            configMapKeyRef:
              name: game-demo           # El confimap desde donde vienen los valores
              key: player_initial_lives # La key que vamos a usar
        - name: UI_PROPERTIES_FILE_NAME
          valueFrom:
            configMapKeyRef:
              name: game-demo
              key: ui_properties_file_name
      volumeMounts:
      - name: config
        mountPath: "/config"
        readOnly: true
  volumes:
    - name: config
      configMap:
        name: game-demo # el nombre del configmap que queremos montar
        items: # Un arreglo de keys del configmap para crear como archivos
        - key: "game.properties"
          path: "game.properties"
        - key: "user-interface.properties"
          path: "user-interface.properties"
```

## Secrets
Es una forma de codificar nuestros secretos en base64 con el fin de que una persona normal
al verlo no sepa los valores de dichos secretos.

```yaml title='secrets.yaml'
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  username: YWRtaW4=
  password: c3VwM3JwYXNzdzByZAo=
```

:::info
Otra forma de hacerlo mas a mano es la siguiente:

```bash
kubectl create secret generic db-credentials \
--from-literal=username=admin \
--from-literal=password=sup3rpassw0rd
```
:::

Para mas informacion podemos visitar la 
[documentacion](https://kubernetes.io/es/docs/concepts/configuration/secret/)


## Cloud Native 

Kubernetes funciona muy bien con el concepto de cloud native 
debido a que buscamos ser agnosticos a la nube y a su vez poder usar herramientas 
para todos los CSP

### Roadmap

1. Containerization (Docker)
2. CI/CD (Github actions, jenkins, travis, argo, etc)
3. Orchestation (Kubernetes)
4. Observability (Grafana, fluentd)
5. Services proxy, discovery and mesh
6. Networking policie and security
7. Distributed db and storage
8. Streaming and messaging
9. Container registry and runtime 
10. Software distribution

Para mas informacion podemos ir al siguiente [repo](https://github.com/cncf/landscape/blob/master/README.md#trail-map)

