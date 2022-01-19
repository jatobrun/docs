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

## Namespace
Es una division logica de tu cluster de kubernetes, permite separar la carga del cluster.

:::caution
Por default los datos dentro de los ns si se pueden ver entre ellos
:::

```bash
kubectl get ns
```

## Pods
Es un set de contenedores, este set puede tener uno o varios contenedores pero normalmente 
un pod contiene un contenedor.

:::info
El `hash` que tiene cada uno de los pods es generado por el template de deployment
:::

Podemos usar `kubect get pods` para obtener los pods, ademas podemos usar `kubectl get pods -o wide`
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

Para aplicar el manifiesto del pod usamos el siguiente comando:

```bash 
kubectl apply -f ${PAT_TO_THE_FILE}
```

:::caution
Sino agregamos un ns en el manifiesto, lo creara en el ns que estemos ubicados actualmente.
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
dia son discos duros persistentes, cuando declaramos declaramos el volumen kubernetes se conecta a la api 
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
del cluster o desde afuera.

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
y hacer un ping a es ip fija y la debe resolver.

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

### Ingress
Basicamente lo que hace el ingress es un nuevo tipo de recurso en kubernetes que te permite hacer redirecciones 
de trafico sobre tus pods de formas mas avanzadas, por ejemplo path base. Redirecciono a que pod quiero ir 
por medio del path asi no debo estar creando subdominios, etc.

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
## ConfigMaps
Es un archivo que lo hosteo en kubernetes el cual puede ser accedido desde los pods.

:::tip
Esto puede ser usado para generar archivos de configuracion por stage o para las variables 
de entorno
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
