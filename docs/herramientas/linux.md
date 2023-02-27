---
sidebar_position: 6
---

# Linux

Linux fue creado por un chico de universidad en el año 91 llamado Linus Benedict Torvalds, lo que proponia este chico era crear un
sistema operativo que todo el mundo sea capaz de contribuir
(porque es free) y ademas que sea compatible con todo.

Uno de los problemas que tienes al usar software de propietarios
como Windows es que ellos te venden un black box donde no puedes ver
el codigo y debes confiar que funcione. Mientras que en Linux tienes
acceso al codigo puedes modificar y usarlo.

![Free Software vs Open-Source Software](/img/linux/venn-diagram.png)

- Si Linux fueramente solamente free pero no open source no se podria modificar.

- Si Linux fueramente solamente open source pero no free no se podria
distribuir.

- Pero como Linux es las dos puedes modificar y distribuirlo con
quien tu quieras.

:::note

- Lo que Linus Torvald hizo fue crear el Kernel, el Kernel nos
permite que el software pueda comunicarse con el hardware, el mismo
que maneja los procesos del sistema. Para no reinventar la rueda
agarro el [projecto de GNU](https://www.gnu.org/software/software.en.html), los unio y asi nacio GNU Linux
:::

:::warning
Un sistema operativo esta formado por dos partes:

1. GNU software
2. Kernel

Linux es solo el kernel pero normalmente las personas se refieren como
Linux al conjunto de `Kernel + conjunto de herramientas` y todo esto
trabaja junto para crear el sistema operativo.
:::

## Ventajas

1. Open source
2. Gratis
3. Estable
4. Soporta todas las arquitecturas
5. Compatibilidad con Unix

## Distribuciones

Una distribucion es una version de linux donde una entidad se encarga
mantenerla y distribuirla.

Debido a que tenemos muchas linux distros en internet, como sabemos
cual descargar?, por suerte tenemos unas cuantas entidades que llevan
tiempo siendo distribuidores.

- Debidan (1993): Sistema operativo creado para developers, facil de
descargar, hecho para servidores

  - Ubuntu (2004): Sistema operativo creado para cualquier persona,
    el sistema operativo mas descargado, sistema operativo robusto basado
    en debian

  - Linux Mint (2006): BAsado en ubuntu cambia la interfaz grafica.

  - Kali (2013): Sistema operativo creado para pentester, tiene muchas
    herramientas para hacking, basado en Debian.

- RHEL (1995): La version pagada de linux para las organizaciones
si tienen algun problema pueden recibir tech support de Red Had.

  - Alma Linux (2021)
  - CentOS (2003): Muy estable hecha para produccion
  - Fedora (2003): La version gratis de Red Hat no para produccion

- SUSE (1994): Bastante popular en EU no tanto en USA
  - OpenSuse (2005):

- Arch Linux: Es un sistema operativo donde compilas todo, esto nos da muchisimo mas performance pero es para usuarios algo mas avanzados

:::note
Android es una Linux distro porque usa el kernel de Linux en su
sistema operativo
:::

## Instalacion

### Antes de instalar

1. Debemos ver si nuestro hardware es compatible con la distribucion
que tenemos pensado instalar.

2. Hacer un backup del disco duro.

3. Tener a mano la lista de pasos para realizar la instalacion.

4. Obtener la imagen iso del sistema operativo que quiero instalar.

5. Flashear la imagen en el USB usando [balena](<https://www.balena.io/etcher>)

### Durante la instalacion

1. F11 para acceder al menu de booteo, empezar la instalacion de la
distro

2. Algunas distros realizan un pre-check del hardware para saber si
todo es compatible.

3. Luego de esto, muchas insalaciones son muy de dar next, next y
seguir los pasos.

:::note
Para un servidor siempre usaremos el minimum install, no tendremos
UI pero esa es la idea solo tener las herramientas necesarias
:::

### Despues de la instalacion

1. Aplicar actualizaciones

2. Restaurar los backups

3. Install otro software que necesite que no venga con la distro

## Terminal

Usamos el terminal para poder ver cualquier CLI, es decir, el terminal
es la aplicacion que nos deja interactuar con el CLI de algun servidor, es un sistema de tipo input-output.

:::note
Si uso el terminar para el ver el CLI de mi propia computadora eso
se llama consola.
:::

Tenemos una variedad de terminales, con diferentes configuraciones,
o formas de visualizar el CLI o customizar.

:::tip
Si estas en MAC uno de los mejores terminales es [iTerm2](https://iterm2.com/)
:::

En cada terminal tendremos una opcion llamada `perfiles` con esta
opcion podemos modificar como se ve nuestro terminal, es decir,
el color, la tipografia, el tamaño de letra, etc.

## CLI

El CLI (Command Line Interface) es el medio por el cual ejecutamos
sentencias y el sistema operativo las interpreta. Para poder tener
acceso al CLI necesitamos un programa para interactuarl con el este
programa se llama `terminal`.

Shell es basicamente el binario que renderiza la interfaz grafica.

Cuando ejecutamos un comando, en realidad ejecutamos binarios que
son las herramientas que realizan cierto procesamiento, tenemos
ciertos comandos a los cuales podemos pasarle parametros o argumentos

Veamos un ejemplo.

```bash
shutdown -h now
```

- `shutdown` el binario a ejecutar
- `-h` las opciones empiezan con `-`
- `now` es el argumento

## Comandos mas utilizados

- `ls`: Lista todos los archivos en el path
- `mkdir`: Crea un carpeta
- `cd`: Cambia de directorio
- `touch`: Crear un archivo vacio
- `pwd`: Imprime el path del directorio actual
- `cat`: Muestra el contenido de un archivo
- `less`: Muestra el contenido de un archivo paginado
- `nano`: Editar un archivo
- `history`: Muestra el historial de comandos que se han ejecutado
- `rmdir`:  Elimina una carpeta
- `stat`: Obtenemos mas informacion sobre el archivo
- `cp`: Copia un archivo
- `mv`: Mueve un archivo o renombrarlo
- `rm`: Elimina un archivo
- `rsync -azurP [initial-path] [end-path]`: Mantiene sincronizado archivos de un path al otro

:::tip
Ctrl-a para ir al inicio de la linea
Ctrl-e para ir al final de la linea
:::

## Ayuda para usar comandos en linux

Muchas de las herramientas en linux tienen un manual para aprender
a usarlas, estos los encontramos comprimidos en la siguiente
ruta `/usr/share/man`

Para poder leer el manual comprimido podemos ejecutar el comando
`man [comando]`.

Tambien podemos usar el comando `whatis [comando]` para tener mas
informacion sobre la informacion disponible y el manual

Otra opcion que nos salva la vida cuando no sabemos el nombre exacto del comando es `apropos [comando]`

## Package Manager

### RedHat

Un package manager es la herramienta encargada de ayudarnos a instalar
aplicaciones o herramientas de forma facil y segura

En RedHat tenemos 3 package manager:

1. RPM: es el package manager que viene por default en redhat,
es bastante sencillo y no maneja las dependencias al momento de
instalar software, tampoco lo mantiene actualizado.
2. YUM: Este es una version mejorada de RPM, donde si maneja las
dependencias y utiliza los repositorios centrales para descargar
las ultimas versiones. `No maneja bien las dependencias`
3. DNF: Es la version mejorada de YUM, donde ya mejora considerablemente
el manejo de dependencia, este es el estandar para sistemas RedHat

Estos package manager utiliza repositorios donde estan todas las
aplicaciones o herramientas que podemos descargar

:::note
Podemos ingresar al siguiente path para revisar los repositorios
`/etc/yum.repos.d/[distro-name].repo` aunque no usemos yum como
package manager y usemos dnf igual usaremos el mismo path.
:::

:::tip
Una forma de encontrar el nombre de una utilidad es usar el comando
`dnf search [palabra]` con esto buscamos todas las utilidades que
contengan la palabra

Luego con este nonbre de paquete para encontrar mas informacion
podemos usar `dnf info [package-name]`

Si sabemos el nombre del paquete podemos usar `dnf list [package-name]`
:::

Por ultimo para instalar paquetes podemos usar el comando

```bash
sudo dnf install [package-name]
```

Si queremos instalar un software que no esta en el repositorio de la
distro, podemos instalar repositorios de terceros, para esto
necesitamos crear un archivo con esta informacion y agregarlo al
siguiente path `/etc/yum.repos.d/`

```bash
[Webmin]
name=Webmin Distribution Neutral
#baseurl=http://download.webmin.com/download/yum
mirrorlist=http://download.webmin.com/download/yum/mirrorlist
enabled=1
```

Para realizar updates podemos ejecutar

```bash
sudo dnf updates -y
```

Para eliminar una aplicacion podemos ejecutar

```bash
sudo dnf remove [package-name]
```

Esto automaticamente encuentra las dependencias y las elimina

Tambien podemos ejecutar, para eliminar todas esas dependencias
que nadie las usa

```bash
sudo dnf autoremove
```

### Debian

En Debian tenemos 3 package manager:

1. ∫∫∫∫∫∫: es el package manager que viene por default en debian,
es bastante sencillo y no maneja las dependencias al momento de
instalar software, tampoco lo mantiene actualizado. Usa un archivo
.deb
2. apt-get: Este es una version mejorada de dpkg, utiliza los repositorios centrales para descargar
las ultimas versiones. `No maneja bien las dependencias`
3. apt: Es la version mejorada de apt-get, donde ya mejora
considerablemente el manejo de dependencia, este es el
estandar para sistemas Debian

Estos package manager utiliza repositorios donde estan todas las
aplicaciones o herramientas que podemos descargar

:::note
Podemos ingresar al siguiente path para revisar los repositorios
`/etc/apt/sources.list` apt y apt-get usan el mismo repo
:::

:::tip
Una forma de encontrar el nombre de una utilidad es usar el comando
`apt search [palabra]` con esto buscamos todas las utilidades que
contengan la palabra

Luego con este nonbre de paquete para encontrar mas informacion
podemos usar `apt info [package-name]`

Si sabemos el nombre del paquete podemos usar `apt list [package-name]`
:::

Por ultimo para instalar paquetes podemos usar el comando

```bash
sudo apt install [package-name]
```

Para instalar mas paquetes al mismo tiempo podemos agregar con un
espacio

```bash
sudo apt install [package-name-1] [package-name-2] [package-name-3]
```

Si queremos instalar un software que no esta en el repositorio de la
distro, podemos instalar repositorios de terceros, para esto
necesitamos crear un archivo con esta informacion y agregarlo al
siguiente path `/etc/apt/sources.list.d/`

```bash
deb http://download.webmin.com/download/repository sarge contrib
```

Para realizar actualizacion a la base de datos de los repos
podemos ejecutar

```bash
sudo apt updates -y
```

Para realizar actualizaciones a las aplicaciones podemos ejecutar

```bash
sudo apt upgrade
```

Para realizar actualizaciones del sistema por ejemplo el kernel
podemos ejecutar

```bash
sudo apt dist-upgrade
```

Para actualizar todo

```bash
sudo apt full-upgrade
```

Para eliminar una aplicacion podemos ejecutar

```bash
sudo apt remove [package-name]
```

Esto automaticamente encuentra las dependencias y las elimina

Tambien podemos ejecutar, para eliminar todas esas dependencias
que nadie las usa

```bash
sudo apt autoremove
```

## SandBoxed Apps

Son aplicaciones que estan aisladas del sistema operativo con el fin
de que si logran tener acceso a la aplicacion no puedan realizar nada
mas dentro del sistema operativo. Como estas aplicaciones estan
aisladas no se pueden comunicar entre si, esto agrega una capa de
esfuerzo extra al momento de comunicar multiples aplicaciones de
este tipo. Esto ahora lo hemos cambiado por contenedores docker.

Ahora este tipo de aplicacion se diseñan para que las aplicaciones
esten protegidas y no al reves (el SO este protegido)

La idea es que cuando instalo una aplicacion esta tiene sus
dependencias y si instalo otra aplicacion que tiene las mismas
dependencias las compartiran pero si actualizo una aplicacion a una
nueva version y actualiza la dependencia que comparte con otra app
lo que podria pasar es que una app siga funcionan y la otra no.
Para protegernos de que esto pase tenemos estas aplicaciones sandboxed
que lo que hacen es instalar sus dependencias y encapsularse asi nunca
mas compartiremos dependencias entre aplicaciones lo malo de esto es
probable que tengamos una dependencia con multiples versiones lo cual
ocupa espacio en el disco.

Los package manager mas conocidos son:

- Snap (debian)
- Flatpak (red hat fedora)

### Snap

Para instalar una aplicacion con snap debo ejecutar

```bash
sudo snap install lnav
```

Para borrar una aplicacion con snap ejecutamos

```bash
sudo snap remove lnav
```

Tambien podemos ver una lista de las aplicaciones que hemos instalado
con snap ejecutando

```bash
sudo snap list
```

:::note
Cuando instalas una aplicacion con snap te la agrega al path, ademas
crea un volumen por cada aplicacion que instales con snap esto es asi
porque es su forma de contener a la aplicacion y aislarla del sistema
operativo.
:::
:::warning
Es importante tener en cuenta que si instalamos una app con snap y con
apt el SO le da preferencia a la que se instalo con apt y esa ejecutara
:::

### Flatpak

Podemos tener instalado flatpak y snap al mismo tiempo, no tiene mucho
sentido pero se puede ya que ambas hacen lo mismo.

Podemos instalar flatpak en ubuntu ejecutando

```bash
sudo apt install flatpak
```

Una de las mejores que tiene flatpak contra snap es que es mucho mas
ligero no tiene dependencias extras al momento de instalarlo tanto es
asi que debemos agregarle el repositorio para empezar a instalar apps.

```bash
sudo flatpak remote-add flathub https://flathub.org/repo/flathub.flatpakrepo
```

Tambien podemos listar lo que hemos instalado con

```bash
sudo flatpak list
```

Tambien podemos buscar una aplicacion ejecutando

```bash
sudo flatpak search [package-name]
```

:::warning
No todas las aplicaicones estan en entos package manager asi que
debemos tener cuidado que package-manager que usaremos
:::

## Aplicaciones compiladas desde el codigo

Son aplicaciones las cuales nos descargamos el codigo fuente y
nosotros mismos la compilas para luego ejecutar el binario.

Ventajas

- Mas seguridad al tener el codigo sabemos que esta realizando
- Podemos modificarla
- Podemos compilarlo para nuestra arquitectura
- Optimizarla para nuestro SO

Para empezar necesitariamos instalar estas 3 herramientas

```bash
sudo apt install make gcc gzip
```

:::note

- `gcc` es el compilador de C
- `make` es una utilidad para hacer archivos de configuracion
- `gzip` para extraer el contenido de un comprimido
:::

Para empezar a compilar una aplicacion necesitamos descargar el source
que normalmente esta comprimido para esto debemos descomprimirlo

```bash
tar -xvzf [source-code].tar.gz
```

:::note
Explicacion de los flags:

- `x`: para extraer el contenido
- `v`: para tener un output verbose
- `z`: para que no solo le haga untar sino unzip
- `f`: para decirle que archivo
:::

:::tip
Para saber la arquitectura de tu SO puedes ejecutar `uname -a`
:::

Luego de esto tenemos que buscar el Makefile para saber que comando
ejecutar `make`

```bash
make [command]
```

## File Links

Los links nos sirven para tener multiples formas de referenciar a un
archivo, tenemos dos tipos de links:

- Hard Links
- Soft Links

### Hard Links

Este tipo de link es el mas confiable ya que su forma de operar es
crear un nuevo archivo que haga referencia al mismo espacio de memoria
que el archivo original. Lo malo es que necesitamos que ambos archivos
existan en la misma particion del disco sino no podremos crear la
referencia

Para crear un hard link ejecutamos

```bash
ln [original-file-path] [new-link]
```

### Soft Links

Tambien se los conoce como symbolic link. Los soft links crean un
archivo que apunta al archivo original que apunta al espacio de
memoria. Por ende si borramos el arhivo original la referencia se
pierde

```bash
ln -s [original-file-path] [new-link]
```

## File manipulation tools

Tenemos diversas herramientas para manipular archivos dentro de linux
las podemos dividir en dos categorias:

- Programming Tools
- Interactive Tools

### Programming Tools

Todas estas herramientas no son interactivas, estan diseñadas para
usarlas en scripts o de manera programatica y utilizarlas.

#### sed (Stream Editor)

Esta herramienta esta diseñada para recibir bloques de texto y
modificarlos, es decir, insertar datos, remover, cambiar, etc.

#### awk (Aho, Weinberger, Kernighan)

Esta herramienta esta diseñada para encontrar texto en los archivos
por ejemplo si buscamos un texto y queremos reemplazarlo podemos usar
awk y sed

#### printf (Print Formatted)

Con esta heramienta podemos mostrar el contenido de un archivo por
la pantalla o enviarlo a un archivo

### Interactive Tools

#### nano

Nano es una herramienta bastante util y sencilla debido a su
simplicidad, el favorito de muchos por este motivo. Con pocos comandos
ya puedes empezar a modificar tus archivos de configuraciones y ademas
esta presente en casi cualquier distro de forma automatica.

:::caution

- `^`: Significa la tecla control
- `M`: Significa la tecla Alt
:::

#### vi o vim (vi improved)

Es mucho mas potente que `nano`, tienes mas funcionalidades como:

- macros
- soporta lenguajes de programacion (les da color)
- esta en instalado en minimal distros
- muchos shortcuts

Tiene diferentes modos de operacion:

- command mode
- insert mode

Cuando ejecuto `vi [file-name]` entro en modo command para empezar a
escribir necesito entrar en modo insert para esto presionamos la tecla
`i`, para salir de este modo presionamos la tecla `esc`

Tenemos comandos que se ejecutan solo presionando la tecla como `i`
o comando que necesitamos agregarle `:`

Para mas informacion sobre [vim](vim.md)

## Locate file

Para encontrar archivos dentro de linux tenemos dos opciones:

- `find`
- `locate`

:::tip
podemos ejecutar `type` para saber si un archivo se puede buscar
como por ejemplo comandos
:::

### find

Usamos la herramienta de la siguiente manera

```bash
find [path...] [expression...]
```

donde el path puede ser `~/` para buscar en todos los archivos
de la carpeta home o `/` para buscar en todo el disco duro

Usamos el flag `-name` cuando queremos buscar por nombre por ejemplo

```bash
find / -name README.txt
```

Tambien podemos usar wildcards como `*` para hacer busquedas mas
avanzadas por ejemplo:

Buscar todos los archivos que sean `.txt`

```bash
find / -name "*.txt" 2>/dev/null
```

:::warning
Debemos agregar los `"` cuando usamos wildcards para tener los
resultados que esperamos
:::

Usamos el flag `-perm` cuando queremos buscar por permisos por ejemplo

```bash
find ~/ -perm +rwx
```

Usamos el flag `-size` cuando queremos buscar por tamaño de archivo
por ejemplo

```bash
find ~/ -size 2M
```

Podemos usar `+` o `-` para buscar archivos con mas tamaño o menos
tamaño

```bash
find ~/ -size +2M
```

Usamos el flag `-group` cuando queremos buscar por archivos que
pertenezcan a un grupo por ejemplo

```bash
find ~/ -group adm
```

Usamos el flag `-user` cuando queremos buscar por archivos que
pertenezcan a un usuario por ejemplo

```bash
find ~/ -user administrator
```

:::tip
Cuando buscamos en todo el disco duro lo mas probable es que no
tengamos permiso a algunos archivos o directorios para esto podemos
redirigir esos outputs al bucket de basura `/dev/null`

```bash
find / -name README.txt 2>/dev/null
```

:::

### locate

la desventaja que tiene `find` es que cuando se lo ejecuta empieza
a ejecutar operaciones de lectura en el disco lo cual tal vez
pueda realentizar procesos en el servidor. Para esto podemos usar
`locate` el cual tiene una base de datos y cada que se ejecuta
`locate` busca en esa base de datos y no en el disco entero.

Para instalarlo

```bash
sudo apt install mlocate
```

Luego tenemos que actualizar la base de datos cada que hagamos un
search

```bash
sudo updatedb
```

Luego ya podemos empezar a buscar los archivos

```bash
locate README
```

### grep (globally search a regular expression and print)

Esta utilidad de linux es bastante potente, si necesito hacer
grandes busquedas o busquedas mas complejas esta es la herramienta
a utilizar debido a que podemos agregar [regex](./regex.md)

`grep` tiene dos modos de operacion

1. Fixed Strings -> `grep -F` o `grep` o `fgrep`
2. Extended Regular Expression -> `grep -E` o `egrep`

Tenemos 3 casos de usos principales para grep

1. Podemos buscar archivos que contengan en su nombre una palabra
o en su contenido

```bash
grep -r Halloween ~/
```

:::note

- `-r`: recursive que busque en todos los paths hijos
:::

2. Buscar por lineas de un archivo que contengan una palabra

```bash
cat file.txt | grep Hallowen
```

3. Buscar por lineas de un archivo que contengan multiples parametros

```bash
cat file.txt | grep -E "Hallowen|Matias"
```

## Archive Files

Una de las actividades mas comunes en administradores de servidores
es realizar archives, existe muchos terminos relacionados como
compression, archiving o backup:

- `Compression`: Reducir el tamaño de un archivo en el disco
- `Archiving`: Guardar el archivo en un lugar donde no pueda ser
modificado
- `Backup`: Guardar el archivo en un lugar donde se pueda obtener
de ser necesario

Existen multiples herramientas para este trabajo las mas comunes son:

- gzip: No es compatible con zip
- bzip2: Usa el algoritmo Burrows-Wheeler
- zip: Se usa en windows
- tar: tape archive
- xz: Se usa en MacOS
- cpio: La primera utilidad para archive
- dd: Para manejo de disco duro

### gzip

Usamos `gzip` para comprimir archivos y usamos `gunzip` para
descomprimir archivos

Para comprimir un archivo ejecutamos

```bash
gzip filename.txt
```

Para descomprimir un archivo ejecutamos

```bash
gunzip filename.gz
```

Para prevenir que no hagamos un overwrite del archivo que queremos
comprimir sino que cree uno nuevo podemos ejecutar

```bash
gzip -c filename > filename.gz
```

### tar

`tar` y `gzip` trabajan de la mano ya que con `tar` todos los archivos
los concateno y hago uno solo (como una carpeta) y `gzip` los comprime para que pesen menos.

Esta utilidad la usamos de la siguiente forma

```bash
tar -[params] [output-file] [input-path]
```

Para crear un nuevo archivo tar ejecutamos

```bash
tar -cf prueba.tar ~/Documents
```

Para crear un nuevo archivo tar y que este comprimido `.tar.gz` o
`.tgz` ejecutamos

```bash
tar -czvf prueba.tar.gz ~/Documents
```

Para descomprimirlo ejecutamos

```bash
tar -xzvf prueba.tar.gzip
```

:::caution
usando gzip y tar podemos disminuir el tamaño del archivo final en mas
de un 50% pero esto solo funciona para archivos sin una compresion
previa como los text-files. Si queremos comprimir algo como un imagen,
un archivo de musica o un video normalmente estos archivos ya estan
comprimidos y lo unico que haremos es agregar mas informacion a un
archivo que ya esta comprimido
:::

### dd (disk duplicate)

Podemos usar `tar` y `gzip` para comprimir todo la informacion de un
disco duro pero el problema es que en un disco duro tenemos mucha mas
informacion de la que vemos como particiones entonces aunque podemos
usar las herramientas antes mencionadas nos tomara mas esfuerzo
descomprimir y que funcione. Para esto se invento `dd`

Para clonar un disco ejecutamos

```bash
sudo dd if=/dev/sda of=/dev/sdb
```

Para ignorar errores le agregamos la opcion `conv=noerror`

Para incrementar el tamaño de bloques asi clonamos mas rapido
`bs=1M`

Para asegurarnos que haga una copia perfecta `conv=sync` esto hara que
se incremente el tiempo de clonado

Para comprimir un backup de dd

```bash
sudo dd if=/dev/sdd bs=1M | gzip -c > ~/sdd.img.gz
```

Para restaurarlo hacemos el proceso inverso

```bash
gunzip -c ~/sdd.img.gz | sudo dd of=/dev/sdd bs=1M 
```

## Privileges Administration

Necesitamos elevar privilegios para realizar tareas de administracion
y aplicar las buenas practicas de seguridad

Podemos usar `whoiam` command para saber que usuario somos y luego
`id` para saber el id

:::note
el usuario `root` siempre tendra un id 0 o 1
:::

### Managing Basics

#### su (substite user)

Con este comando podemos cambiar de usuario sabiendo el nombre y la
contraseña

Para camiar al usuario root ejecutamos

```bash
su
```

Para cambiar a cualquier otro usuario

```bash
su username
```

#### sudo (super user do)

Con este comando podemos ejecutar acciones en usuarios que no son root
solo necesitariamos 2 cosas:

1. formar parte del grupo sudo
2. saber la contraseña del usuario usuario en el que estas

Podemos agregar usuarios al grupo sudo ejecutando

```bash
sudo usermod -a -G sudo
```

Tambien podemos modificar el archivo `etc/sudoers`, dentro de este
archivo podemos agregrar usuarios que tengan acceso al comando `sudo`
o grupos

Cada linea dentro de este archivo tendra el siguiente formato

`<user/%group> <machine>=<users> <commands>`

Si queremos darle acceso a un grupo para que solo ejecute
`sudo apt upgrade` y `sudo apt update` agregaremos la siguiente linea
al atchivo `etc/sudoers`

`%techsupport localhost=(ALL) /usr/bin/apt update,/usr/bin/apt upgrade`

:::caution
Si cometemos un error en este archivo perderemos accesos a sudo para
evitar esto lo recomendable es ejecutar

```bash
sudo visudo
```

Con esto al momento de hacer el cambio checkeara si tuvimos algun error
:::

### Users

Al momento de crear un usuario con `useradd` utiliza un archivo
de configuracion con defaults, estos archivos se encuentran en
`etc/login.defs` o `etc/skel` otra forma de verificar es ejecutando

```bash
sudo useradd -D
```

Para crear un user account necesitamos el comando `useradd` estos son
los flags minimos necesarios para crear un usuario en util

- `-c`: Display Name
- `-s`: Default shell
- `-d`: Home Directory

Ejemplo:

```bash
useradd jdoe -c "John Doe" -s /bin/sh -d /home/john_doe
```

Si queremos verificar que el usuario se creo correctamente podemos
ejecutar

```bash
less /etc/passwd
```

:::tip
Si necesitamos crear alguna cuenta momentaneamente por ejemplo para
algun contractor que se va en pocos meses podemos usar el flag `-e`
:::

Si nos equivocamos podemos usar el comando `usermod` para modificar
la informacion del user account

Si queremos borrar un usuario podemos ejecutar `userdel` pero si lo
que necesitamos es no permitir que el usuario haga login y conservar
la informacion de su usuario podemso ejecutar

```bash
sudo usermod -L [username]
```

:::note
Podemos cambiar todo menos el id
:::

:::tip
Para poder quitarles la shell a ciertas user account podemos ejecutar

```bash
sudo chsh -s /bin/nologin [username]
```

:::

#### Passwords

Ahora para agregarle o resetear una contraseña al usuario podemos ejecutar

```bash
sudo passwd jdoe
```

Si queremos cambiar nuestra contraseña basta con ejecutar `passwd`

Para verificar la contraseña o ver que usuarios no tienen contraseña
ejecutamos:

```bash
less /etc/shadow
```

Es una buena practica agregar **password expiration policy** para
ver la politica actual ejecutamos

```bash
chage -l [username]
```

Para modificar la politica actual le pasamos los parametros

```bash
chage -m [mindays] -M [maxdays] -E [expiredate] [username]
```

Tambien podemos agregar estas configuraciones y cada que creamos un
usuario se ejecutan por default para esto tenemos que modificar el
archivo `/etc/login.defs`

Los parametros mas importantes de modificar son estos 4:

- `PASS_MAX_DAYS`
- `PASS_MIN_DAYS`
- `PASS_WARN_AGE`
- `LOGIN_RETRIES`

### PAM (Pluggable Authentication Modules)

Con esta herramienta podemos configurar otro medio de authenticacion
como por ejemplo MFA o utilizar algun sistema biometrico o token.
Luego podemos utilizar el sistema de failover para controlar que
sucede despues de que el sistema falle para eso podemos modificar
el archivo `/etc/security/faillock.conf`

Dentro de este archivo podemos agregar las siguientes lineas

```bash
deny=3
unlock_time=3600
```

Para que el sistema de pam utilice estas configuraciones debemos
modificar el archivo `/etc/pam.d/config`

Agregamos las siguientes lineas

```bash
auth [default=die] pam_faillock.so authfail
account required pam_faillock.so
```

### Groups

la forma de crear un grupo es bastante sencilla usamos el comando
`groupadd`

Por ejemplo para crear un grupo para el departamento de marketing
podemos ejecutar

```bash
sudo groupadd IT
```

Para ver si el grupo se creo correctamente ejecutamos

```bash
tail /etc/group
```

Para modificar los parametros del grupo podemos usar el comando
`groupmod`

Para cambiar el nombre del grupo ejecutamos

```bash
sudo groupmod -n infotech IT
```

Para agregar usuarios a un grupo ejecutamos

```bash
sudo gpasswd -a [username] [groupname]
```

Para borrar usuario de un grupo ejecutamos

```bash
sudo gpasswd -d [username] [groupname]
```

Para agregar un administrador al grupo

```bash
sudo gpasswd -A [username] [groupname]
```

Para cambiarme de grupo ejecuto

```bash
newgrp [groupname]
```

Si ejecutamo `groups` podemos ver los grupos en los estamos agregados

:::tip
como tenemos 3 archivos importantes `/etc/passwd`, `/etc/shadow` y
`/etc/group` podemos usar el comando getent para filtrar mas rapido
el archivo

```bash
getent group [groupname]
```

:::

### File Permissions

Para poder ver los permisos de un archivo ejecutamos

```bash
ls -l .
```

Tendremos un output como este

```bash
drwxr-xr-x 
```

1. La primera letra representa si es una carpeta o un archivo
2. Las 3 letras que siguen representan los permisos del usuario
3. Las 3 letras que siguen representan los permisos del grupo
4. Las ultimas 3 letras representan los permisos de los demas

#### Table cheat sheet

##### Identidades

| Letter | Identity |
|:------:|:--------:|
| u | User |
| g | Group |
| o | Others |

##### Notacion de letras

| Symbol | Permission |
|:------:|:----------:|
| - | None |
| r | Read |
| w | Write |
| x | Execute |

##### Valores Numericos

| Number | Attribute |
|:------:|:---------:|
| 4 | Read |
| 2 | Write |
| 1 | Execute |

##### Notacion Numerica

| Notation | Permissions |
|:--------:|:-----------------------:|
| 0 | None |
| 1 | Execute |
| 2 | Write |
| 3 | Write and Execute |
| 4 | Read |
| 5 | Read and Execute |
| 6 | Read and Write |
| 7 | Read, Write and Execute |

##### Valores en Unmask

| Value | Result |
|-------|-------------------------|
| 0 | Read, Write and Execute |
| 1 | Read and Write |
| 2 | Read and Execute |
| 3 | Read Only |
| 4 | Write and Execute |
| 5 | Write Only |
| 6 | Execute Only |
| 7 | no Permissions |

:::note
Estos valores los usamos cuando modificamos el parametro `unmask` del
archivo `/etc/profile` o `~/.bashrc`
:::

#### Comandos Basicos

Para cambiar los permisos usamos el comando `chmod`

Por ejemplo para cambiar los permisos del archivo `prueba.txt` a que
solo el usuario pueda leerlo eso `400`

```bash
chmod 400 prueba.txt
```

Sino queremos complicarnos con los numeros tambien podemos ejecutarlo
con parametros

```bash
chmod u+x prueba.txt
```

o

```bash
chmod u=rwx,g-rx,o+r prueba.txt
```

O si queremos quitarle el permisos

```bash
chmod u-x <file>
```

Podemos cambiar el usuario con `chown` y el grupo con `chgrp`

Ejemplo:

```bash
chown <user> <file>
chgrp <group> <file>
```

Una forma simplificada de hacer lo mismo con un solo comando es

```bash
chown <user>:<group> <file>
```

:::tip
Podemos usar el flag `-R` para ejecutar el comando en todos los
archivos dentro de una carpeta
:::

#### Comandos avanzados

Tenemos algunas limitaciones al momento de asignar permisos a los
archivos de la forma tradicional por ejemplo

- no podemos agregar dos grupos a un archivo
- si solo quiero que un usuario mas y yo podamos tener acceso al
archivo
- Manejar multiples usuarios para un archivo

Para eso tenemos los `facl` (file access control list)

:::warning
No todos los SO tienen habilitados los facl para esto podemos
ejecutar:

```bash
tune2fs -l /dev/vg1/website | grep "mount options"
```

y si vemos una salida con `acl` es porque tiene `facl`

:::

Para obtener los permisos extras de un arhivo ejecutamos

```bash
getfacl file1.txt
```

Para modificar los permisos de un archivo

```bash
setfacl -m u:<username>:rwx <filename>
setfacl -s g:<group>:rwx <filename>
```

- `-s`: Reemplaza los permisos
- `-m`: Modifica los permisos (Agrega)

Para remover

```bash
setfacl -x u:<username> filename
setfacl -x g:<group> filename
```

##### Herencia

Si queremos hacer herencia de permisos entre lo que se crea dentro
de una carpeta agregamos `d:` en el comando `setfacl`.

Ejemplo:

```bash
mkdir Reports
setfacl -m d:u:jamil:rwx Reports
setfacl -m d:g:Marketing:rwx Reports
```

##### Sticky bit

Archivos con el sticky bit solo pueden ser eliminadas o renombradas
por el creador de la carpeta o el root. Es util para cuando creamos
directorios compartidos

Para realizar esto ejecutamos

```bash
mkdir Data
chmod o+t Data
```

Si ejecutamos `ls -l` observaremos que al final aparece un `t`, esto
significa que el sticky bit esta activado

```bash
rwxr-xr-t
```

## Localization

Los  son importantes en linux ya que nos ayuda a definir muchas
convenciones sobre el estilo de escritura, la forma, signo de moneda,
etc.

Para poder ver nuestra configuracion basta con ejecutar

```bash
localectl
```

Si usamos `locale` nos imprimira por consola una lista de variables
con sus respectivos valores, podemos tener diferentes en lenguajes
en cada tipo de aplicacion. el mas importantes es el `LC_ALL` el cual
si esta configurado sobrescribe los demas

Para poder listar los locales usamos

```bash
localectl list-locales
```

Para cambiar la localization ejecutamoas

```bash
localectl set-locale LANG=fr_FR.utfo
```

:::note
Cada que realizamos un cambio en la localization debemos hacer
reboot

```bash
sudo reboot
```

:::

### Time

Es importante tener nuestro reloj interno del servidor actualizado
debido a que con esto realizamos muchas operaciones como
sincronizaciones o cron task. Para esto se usa el NTP Network Time
Protocol.

Para verificar si lo tenemos activado ejecutamos

```bash
timedatectl
```

Si nos apacere `NTP service: active` esta activado sino ejecutamos

```bash
timedatectl set-ntp on
```

Tambien podemos cambiar la direccion ip del este servidor ntp para
esto nos vamos a `/etc/systemd/timesyncd.conf`

En ese archivo agregamos la variable `NTP=` con el valor del servidor

Para listar las timezone ejecutamos

```bash
timedatectl list-timezones
```

Ahora para seleccionar una timezone

```bash
sudo timedatectl set-timezone America/New_York
```

Para verificar como esta nuestro servidor NTP si esta sincronizado
correctamente ejecutamos

```bash
timedatectl show-timesync --all
timedatectl timesync-status
```

## Troubleshoot

Es importante aprender a debuguear en linux, debido a que esto afecta
el perfomance de nuestras aplicaciones para esto usamos 3 comandos:

- top
- free
- df

### top

con este comando podemos ver todos los procesos corriendo en el sistema en tiempo real.

Algunos shortcuts:

- `h`: Ayuda
- `k`: Mata un proceso
- `u`: Ordena por usuario
- `M`: Ordena por Memoria
- `P`: Ordena por CPU
- `q`: Salir

### free

Muestra la utilizacion de la memoria ram

```bash
free -h
```

### df

Muestra la utilizacion del disco duro

```bash
df -h
```

tambien podemos usar `du` disk utilization para saber cuanto
consume cada carpeta dentro del disco duro

```bash
sudo du -h --max-depth=1 / 2> /dev/null
```

### Processes

En muchas ocasiones tenemos procesos que estan gastando mucho tiempo
o muchos recursos. Para este tipo de procesos si los queremos matar
ejecutamos lo siguiente

```bash
kill -<#> <PID>
```

Para listar todos los tipos de señales

```bash
kill -l
```

Las mas importantes o comunes son:

- 1 SIGHUP (Hangup or reload)
- 9 SIGKILL (Immediately terminate)
- 15 SIGTERM (Request the program to terminate itself)

Ejemplo:

```bash
kill -9 <pid>
```

:::warning
Podemos tambier matar los procesos si sabemos el nombre

```bash
killall <name>
```

Tener cuidado con esto ya que puede matar algun proceso que no
debemos
:::

Podemos ajustar la prioridad de los procesos usando `nice`

Ejemplo:

```bash
nice -12 md5sum /dev/sda1
```

Puntos importantes

- Los valores de `nice` van del -20 al 19 mas negativo mas prioridad
- Solo `root` tendra los valores negativos
- El valor default de `nice` es 10 pero no siempre
- Usuarios regulares podran tener valores positivos y cambiarlos

Podemos reajustar el valor de prioridad usando `renice`

Syntasis:

```bash
sudo renice <#> <PID> -u <username>
```

:::tip
Para obtener la informacion mas util usamos

```bash
ps -eo pid,ni,comm,user
```

:::

## Managing Storage

Existen dos clases de storage comunes:

1. Block storage: Comun en los discos duros, porque la metadata se
almacena separada a la data como tal
2. Object storage: Comun en las nubes como S3, o cloud storage la
metadata y la data se almacenan en el mismo lugar

Los discos son representados como archivos en `/dev`

Existe un Naming convention:

- `hd?` - IDE disk
- `sd?` - SCSI or SCSI emulated disk (SATA and USB)
- `mmcblk?` - SDCard
- `nvme?` - NVMe SSD

Usamos `lsblk` para poder ver las particiones de un disco

:::tip
es mejor usar el comando `sudo lsblk -o name,mountpoint,label,uuid`
:::

Podemos cambiar el nombre de las particiones pero lo mejor es usar
`labels` y con esto manejamos mejor nuestros discos duros.

Para agregar un label ejecutamos:

```bash
sudo e2label /dev/sda2 Root
```

Podemos hacer lo mismo con los UUID (Universally unique identifier),
son en teoria unicos en todo el mundo

```bash
sudo tune2fs -U random /dev/sda2
```

Si tenemos un bucket de s3 podemos agregarlo a nuestras particiones
usando `fuse` y el driver correspondiente con esto podriamos
sincronizar archivos sin problemas

```bash
sudo apt info fuse
sudo apt info s3fs
```

### RAID (Redudant Array of Independent Disks)

Es una forma de manejar multiples discos duros y de forma mas
eficiente, normalmente todo esto se lo debe manejar en hardware
en software es muy lento, todo esto lo maneja el RAID controller

Tipos:

- 0 - Striping
- 1 - Mirroring
- 5 - Striping with Parity

Si queremos manejar un RAID por software podemos usar `mdadm`,
pero esto solo sirve como lab en la vida real se maneja en hardware

### Particiones y Volumenes

los volumenes son los propios discos duros y las particiones son la
forma de como manejamos esos discos duros o como organizamos la
informacion

Existen dos tipos de particiones:

1. MBR
    - Solo puede tener 4 particiones
    - Paritciones de tipo primario, extendido y logico
2. GPT
    - Podemos tener hasta 128 particiones
    - no usa e sistema de primario, extendido y logico

Para crear particiones usando MBR uasmos `fdisk` y si queremos
hacer particiones de tipo GPT usamos `gdisk`

Para crear una particion con `fdisk` ejecutamos

```bash
sudo fdisk /dev/sdb
```

Seguimos el paso a paso lo mismo con `gdisk`

```bash
sudo gdisk /dev/sdc
```

Shortcuts importantes:

- `p`: Muestra la tabla del disco
- `n`: Crea una nueva particion
- `w`: Guarda los cambios

Tambien podemos usar `parted` como un comando que sustituye a
`fdisk` y `gdisk` pero es un poco mas complicado y largo de usar

Tambien podemos usar la GUI `Applications -> Utilities -> Disks`

### File System

Una vez que empezamos a tener mas volumenes y creamos particiones en
estos volumenes debemos configurar un `file system`, existen muchos
pero solo 2 o 3 son considerados `production ready`.

- `EXT4`
  - Extended Filesystem
  - Estable y bastante documentacion
  - Usa extents que puede ser un poco ineficiente
  - Tiene journaling
- `XFS`:
  - Sucesor de EXT
  - Default en Red Hat
  - Tiene journaling
  - El `file system` puede crecer pero no reducirse
- `BTRFS`:
  - B-Tree Filesystem
  - Esta en beta
  - Para filesystem masivos
  - Integra LVM
  - No tiene soporte en Red hat

Para crear un file system usamos la utilidad `mkfs`, tenemos algunos
alias para esto entonces podemos ejecutar

```bash
ls -la /usr/sbin/mk*
```

Con esto podemos obsevar cada una de ellas y decidir cual ejecutar

Alguno ejemplos son:

```bash
sudo mkfs -t ext3 /dev/sdb1
sudo mkfs -t ext4 /dev/sdb1
sudo mkfs.ext3 /dev/sdb1
sudo mkfs.ext4 /dev/sdb1
```

Podemos tambien crear una `swap` con `mkswap`

```bash
sudo mkswap /dev/sdb2
sudo swapon /dev/sdb2
```

Para agregar labels en xfs es:

```bash
xfs_admin -L Storage /dev/sdb1
```

En ext es:

```bash
e2label /dev/sdb1 Storage
```

#### Mount FS

Una vez que creamos las particiones y las formateamos o agregamos
el file system debemos montarlo para empezar a usarlo para montarlo
usaremos el comando `mount`

Syntaxis

```bash
mount [-alrsvw] [-t fstype] [-o options] [device] [mountpoint]
```

:::note

- mount -a: Monta todos los fs que estan en /etc/fstab
- mount -r: Monta como solo lectura
- mount -w: Monta como lectura y escritura
- mount -t: Especificas que fs implementa el volumen
- mount -o: Opciones adicionales
- [device]: Especifica el dispositivo que usaremos para realizar el montaje
- [mountpoint]: Especifca el path que usaremos para montarlo al dispositivo
:::

Ejemplo:

```bash
sudo mount /dev/sdb1 /home/dpezet/Files
```

Para desmontar el lo mismo solo que en vez de mount usamos `umount`

```bash
sudo umount /dev/sdb1 /home/dpezet/Files
```

Para que nuestro mount sean permanentes tenemos que modificar el
archivo `/etc/fstab`

Syntaxis:

`[Device] [Mount Point] [File System Type] [Options] [Dump] [Pass]`

- Dump se pone normalmente `0` no se usa si le pones `1` lo que
significa es que usaras la utilidad `dump` para hacer backup

- Pass determina la forma en la que fsck revisa los discos
  - 1 para root
  - 2 para todo lo demas

### FHS (Filesystem Hierarchy Standard)

Es un standard para el sistema de directorios y carpetas. Este
estandard es una forma en la cual las distros mantienen
compatibilidad entre las diferentes versiones. La mayoria de
distros siguen este estandard pero no estan obligadas a

#### Carpeta de aplicaciones

- /bin/ - Binarios esenciales disponibles para todos los usuarios
- /sbin/ - Binarios que requiere el sistema para bootear
- /usr/bin/ - Binarios esenciales de usuarios
- /usr/sbin/ - Binarios no esenciales de usuarios
- /opt/ - Binarios opcionales o que no tienen instalacion
- /etc/ - Archivos de configuracion

#### Carpeta de sistema

- /boot/ - Contiene el kernel de Linux y los archivos para bootear
- /dev/ - Contiene los discos duros
- /mnt/ - Contiene los puntos de montaje temporales
- /proc/ - FS virtual que tiene la data de los procesos del sistema
- /sys/ - FS virtual que tiene la data de los dispositivos
- /usr/ - Contiene binarios y data que se puede compartir entre usuarios
- /var/ - Contiene informacion para los programas que ejecuta en /usr/

:::tip
Podemos buscar donde estan las herramientas con los siguientes
herramientas

- which [command]
- whereis [command]
- locate
- find
:::

### LVM (Logical volume manager)

- Es una forma de manejar nuestro volumenes o Discos duros.
- Todo este proceso se lo hace por software
- Se puede juntar con un RAID para tener lo mejor de los dos mundos
- Cada que se agrega un hard drive al volume group la informacion
se pierde

Muchos de las distros no tienen instalado `lvm` por ende lo primero
que debemos hacer es instalarlo y luego activarlo

```bash
sudo apt install lvm2
yum install lvm2
```

Primero lo que debemos hacer es crear un `physical volumen o pv` para
esto usamos:

```bash
pvcreate /dev/sdb1 /dev/sdc1
```

Luego debemos crear un `volumen group o vg` para esto usamos:

```bash
vgcreate vg1 /dev/sdb1 /dev/sdc1
```

Una vez tenemos el volumen group creado empezamos a crear `logic volumens o lv` a nuestro antojo

```bash
lvcreate -L <size> vg1 -n <name>
```

:::tip

Para ver cualquiera de los elementos creados anteriormente usamos:

```bash
pvdisplay
vgdisplay
lvdisplay
```

:::

Luego de esto ya este nuevo Logic volumen lo podemos formatear con
`ext4` y montarlo en algun path

```bash
mkfs.ext4 /dev/vg1/lv1
mount /dev/vg1/lv1 <path>
```

Si queremos que esto el mount persista debemos agregarlo al `/etc/fstable`

Para agregar otro `pv` al `vg` podemos hacer lo siguiente:

```bash
vgextend vg1 /dev/sdd1
```

Ahora para a un `lv` agregarle mas capacidad usamos:

```bash
sudo lvresize -L +5G /dev/vg1/storage
```

Luego tenemos que decirle al `fs` que tiene mas memoria disponible
para utilizar como estamos usando `ext4` usamos

```bash
resize2fs /dev/vg1/lv1
```

Luego para hacer teardown ejecutamos hacemos el proceso inverso,
desmontamos los discos, eliminamos los `lv`, luego eliminamos los
`vg` y por ultimo los `pv`

```bash
umount <path>
lvremove /dev/vg1/lv1
vgremove /dev/vg1
pvremove /dev/sdb1 /dev/sdc1 /dev/sdd1
```

### Troubleshoot Storage

#### Disk Access

#### Disk Performance

## Shell Scripting

Los scripts son archivos de textos que contienen una lista de
comandos los cuales se ejecutan en orden de arriba a abajo. Esto es
util cuando ejecutamos de forma repetida una serie de comandos en
un orden especifico

### Funciones mas utilizados

- `echo` - Imprime texto en pantalla
- `echo -e` - Imprime texto en pantalla y espera por la respuesta
del usuario
- `read` - Copia la respuesta del usuario en una variable
- `test` - Realiza una comparacion y retorna `true` or `false`
- `if/then/else` - Condiconal
- `for` - Realiza una operacion en un bucle finito
- `while` - Realiza una operacion en bucle mientras cierta condicion
se cumpla
- `seq` - Genera una lista de numeros
- `do` - Realiza una accion

Para ejecutar un script necesitamos dos cosas:

1. Darle permisos de ejecucion
2. Agregar el entorno de ejecucion

Para realizar lo primero lo hacemos con

```bash
chmod +x [filename]
```

Para el segundo paso basta con agregar esta linea de codigo al
principio del archivo

```bash
#!/bin/bash
```

### Variables

las variables son utiles en los scripts porque nos permite reutilizar
su valor en multiples parte del script con esto sin debemos hacer
un cambio solo lo hacemos en un solo lugar

Sintaxis:

```bash
<variable_name>=<value>
```

Ejemplo:

```bash
MESG="Hello world!"
```

Para usar el valor basta con agregar el `$`

Ejemplo:

```bash
echo $MESG
```

Las variables som ephimeras es decir se termina de ejecutar el script
y el SO las borra, para que mantengamos las variables en la sesion
de la terminal usamos `export` y si queremos que despues de reiniciar
el valor persista debemos agregarlo en el `.bashrc`

### Interactive Scripts

Los scripts interactivos son los que se ejecutan y a medida de que va
pasando el tiempo le piden al usuario que agregue informacion

Para esto en nuestro script usaremos dos comando `echo -en` y `read`

- `echo -en <message>`: Imprime un mensaje por consola
  - `-e` Accept backslash escapes
  - `-n` Do not move to a new line
- `read <variable>`: Guarda lo que el usuario escribio en una variable

Ejemplo:

```bash
echo -en "Username: "
read username
echo "You typed $username"
```

### Non Interactive Scripts

Estos scripts se ejecutan con cron-jobs o de una forma mas automatizada
donde el usuario no necesita ingresar ninguna informacion

#### CLI parameters

Si lo que queremos es pasarle parametros al script basta con usar los
numeros.

Ejemplo:

```bash

```

Si ejecuto el comando anterior y quiero acceder al valor de fred puedo hacerlo con `$1`

```bash
#!/bin/bash
username=$1
echo "You typed $username"
```

### Outputs

Para nuestros scripts tendremos ocasiones donde redirigir el output
es importante, con esto logramos:

- Mantener un log mas limpio
- Centralizar la informacion importante en archivos de texto

Tenemos 3 operadores principales para realizar esto

- `|`: Redirige el output a otro comando
- `>`: Redirige el output a un archivo (sobreescribe)
- `>>`: Agrega el output a un archivo (append)

Existe dos tipos de salidas:

- Stream 1: que es el `stdout` / o el output stream
- Stream 2: que es el `stderr` / o el error stream

Ejemplos:

```bash
#!/bin/bash
username=$1
echo "You typed $username" >> ./results.txt
```

Con el script anterior estamos diciendo que todo ya sea error o no
se guarde en el archivo `results.txt`

```bash
#!/bin/bash
dirname=$1
mkdir $dirname
mkdir $dirname 2>> errorlog.txt
```

Si solo queremos redirigir el error podemos usar el `2` antes del `>`
para poder separar los errores de lo que no son errores

### Exit Codes

En bash tenemos que los exit codes son el resultado del script que
se ejecuto, pero no todos los scripts terminan con un resultado.

Los exit codes describen que paso

- `0`: significa que todo salio como se esperaba
- `!0`: significa que algo paso

Para agregar exit code a nuestro script basta con usar `exit <numero>`

Ejemplo:

```bash
#!/bin/bash
username=$1
echo "You typed $username"
exit 0
```

Tambien podemos verificar el output de un script ejecutando
`echo $?` el `?` muestra el exit code del ultimo comando o script
ejecutado

### Bucles

#### for

#### while

### Condicionales

#### if/then/else

## Boot

Es el proceso cuando aplastamos el boton de encendido de la pc hasta
cuando llegamos a la pantalla de login

Los 5 pasos que tiene el proceso de boot

![Boot Process](/img/linux/boot-process.png)

### BIOS/UEFI

BIOS viene de (Basic Input Output System), este chip es responsable
de inicializar todo el hardware, en computadoras modernas tambien
tenemos un UEFI (Unified Extensible Firmware Interface) chip
el cual trabaja en conjunto con el BIOS para empezar a poner todo a trabajar

#### Responsabilidades

- Inicializar el Hardware
- Energiza cada uno de los componentes
- Realizar test a los componentes (revisa que todo este bien)
- Busca el Bootloader

### MBR/GPT

Dependiendo de las particiones y el formato de las mismas la Bios
va emplear un metodo u otro para buscar el bootloader. Basicamente
va preguntando por cada disco en cada sector si esos datos son de
bootloader. Aqui tambien podemos modificar el orden de busqueda
o que hagamos boot de un USB o CD, etc

### GRUB 2

GRUB 2 viene de Grand Unified Bootloader es el encargado de encontrar
el sistema operativo y el kernel en los discos duros

![Grub Screen](/img/linux/grub.png)

Funciones:

- Soporta multiples arquitecturas
- Tiene menu graficos
- Rescue mode
- Diferentes modulos
- configuracion automatica

#### Configuracion manual

No es recomendable hacerlo porque es bastante tedioso a menos que
tengas los siguientes casos de uso:

1. Instalar un SO que no es soportado por GRUB ex (Windows)
2. Tengo versiones diferentes del SO en los discos

:::warning
Debemos tener cuidado al modificar sus archivos debido a que si
hacemos algo mal nos quedamos sin computadora no podra bootear
:::

Para encontrar la configuracion de grub para nuestro SO podemos ir a
`/boot/efi/EFI/centos/grub.conf`

Para agregar otro SO a GRUB modificamos el siguiente archivo

```bash
vim /etc/grub.d/40_custom

```

Luego ejecutamos

```bash
grub2-mkconfig
```

Luego para ver los resultados hacemos un cat del archivo mencionado
arriba

```bash
cat /boot/efi/EFI/centos/grub.conf
```

Si queremos modificar parametros de grub modificamos el siguiente
archivo

```bash
vim /etc/default/grub
```

De nuevo ejecutamos

```bash
grub2-mkconfig
```

### initrd/kernel

El kernel son todos los archivos que tienen la siguiente forma
`/boot/vmlinuz-<version>` cada que se actualiza el kernel crea una
nueva version. Cada una de estas versiones esta comprimida en `gzip`
y una vez que se descomprime se carga en RAM

Algo parecido pasa con `initrd` el cual se carga de estos archivos

- `/boot/initramfs-<version>`
- `/boot/initrd-<version>`

Por ultimo el kernel ejecuta `systemd` el cual es el primer proceso
siempre

Lo que hace el kernel:

- Manejar la memoria
- Manejar los procesos
- Controlar el hardware
- Manejar el almacenamiento

Lo que no NO hace el kernel:

- Manejar aplicaciones
- Windows Manager
- Comandos como GNU Tools
- Inicializar el systema

Podemos hacer modificaciones al Kernel de 3 formas:

1. Pasandole comandos por medio de Bootloader
2. Usando `sysctl`
3. Modulos

:::tip
la utilidad `dmesg` nos ayuda a ver todos los logs que se
ejecutan al momento de hacer el boot para poder detectar todo el
hardware y cargar los modulos necesarios para esos elementos
:::

#### Modulos

El kernel de linux que usamos en nuestras distros es un monolito
debido a que tiene todas lo que necesita en un solo archivo. Entonces
si queremos hacer modificaciones o agregarle funcionalidades como lo
hacemos? sencillo `modulos`

Los modulos tienen extension `.ko`

Para listar los modulos que tenemos en cargados nuestro sistema usamos

```bash
lsmod
```

Para poder tener mas informacion acerca del modulo usamos

```bash
modinfo [module-name]
```

La mayoria de los modulos se encuentra en el siguiente path
`/lib/modules/<kernel-version>/kernel/drivers/`

Una vez que tenemos el path de un modulo que no esta instalado, para
instalarlo ejecutamos:

```bash
sudo insmod [module-path]
```

Y con eso luego podemos verificar si ya aparece instalado con

```bash
lsmod | grep [module-name]
```

Para remover el modulo hacemos

```bash
sudo rmmod [module-name]
```

Algunos modulos tienen dependencias con `insmod` o `rmmod` no tiene
mucho cuidado con las dependencias entonces mejor ejecutar `modprobe`

Para instalar un modulo

```bash
sudo modprobe -a ena
```

Para desinstalar un modulo

```bash
sudo modprobe -r ena
```

Por ultimo para revisar si funciono el modulo que instalamos, basta
con revisar si el hardware asociado al modulo ya aparece, es decir,
si instalamos un modulo que usa una tarjeta grafica por PSI podemos
ver el log de psi a ver si aparece

Comandos basicos para ver dichos logs

```bash
dmesg
lsusb
lspci
lsdev
```

Una utilidad buena de instalar es `procinfo`

```bash
sudo apt install procinfo
```

### Troubleshoot Boot

En el tema de boot hay 2 casos:

1. Se demora mucho en bootear, de 1 minuto a 5 o 10
2. No bootea nunca me lleva a la pantalla de login

Para el primer caso lo mejor es ponerse a leer los logs e identificar
que componente esta siendo el problema para ya sabiendo eso proceder

Herramientas utiles

```bash
dmesg
journalctl -b
```

Para el caso dos, aqui es donde nos ponemos creativos, lo que muchos hacen es desconectar el disco duro, conectarlo en otra computadora
y revisar los logs los cuales se encuentran en `/var/log/syslog` o
`/var/log/dmesg`

Tambien otra opcion si tienes a la mano es bootear con un usb o un
CD y revisar los logs

Una vez que conectas el disco duro ejecutamos

```bash
lbsk
```

Obtenemos el nombre del disco duro `/dev/sdb2`, ahora creamos una
carpeta para montarlo con el disco que agregamos

```bash
sudo mkdir /mnt/sdb2
```

Por ultimo montamos el disco duro a la carpeta que creamos

```bash
sudo mount /dev/sdb2 /mnt/sdb2
```

Con esto tendremos acceso a los logs para revisar que fallo o
realizar un backup

Si me doy cuenta que el problema es el Bootloader es decir GRUB lo
que puedo hacer es reinstalar GRUB en la particion del bootloader

```bash
sudo mkdir /mnt/sdb1
sudo mount /dev/sdb1 /mnt/sdb1
sudo grub-install --root-directory=/mnt/sdb1 /dev/sdb
```

Para identificar procesos que se demoran mucho en el boot podemos
usar

```bash
systemd-analyze blame
```

Con esto identificamos cuales procesos o servicios se estan demorando
mas y sino los estoy usando desinstalarlos

Si tenemos alguno servicios que no funcionan puede ser por

- Permisos
- Faltan archivos o no los encuentra
- AppArmor
- System tunables

En linux tenemos un concepto de `system tunables` son ciertos
parametros que usa el kernel para realizar ciertas operaciones

Para poder ver todas estas variables usamos:

```bash
sysctl -a
```

Luego obteniendo el nombre podemos usar

```bash
sysctl fs.file-max
```

Y si quiero modificarla puedo usar

```bash
sudo sysctl -w fs.file-max=10000
```

Estas modificaciones no son permanentes, si hago reboot se borran
para esto debemos agregar un archivo dentro de `/etc/sysctl.d` con
el nuevo valor de la variable

Para reiniciar las configuraciones ejecutamos

```bash
sysctl -p
```

## Network

### Network Adapter

Una de las tareas que debemos hacer es configurar nuestro `network adapter`
En muchas ocasiones no lo hacemos porque usamos el protocolo DHCP
y obtenemos una ip dinamica pero en servidores necesitamos una ip
estatica y ahi es cuando debemos configurar nuestro `network adapter`

Con el comando `ifconfig` puedo ver toda la informacion de mis
interfaz de network para despues configurarlo este comando esta
deprecated la razon es que este comando busca los archivos de
configuracion para renderizar ese output en su defecto usaremos
el comando `ip` que se conecta a la API de Kernel para obtener la
informacion necesaria

```bash
ip addr
```

es lo mismo que ejecutar

```bash
ifconfig
```

:::tip
Si queremos tener un output mas clean podemos agregarle el flag -br

```bash
ip -br addr
```

:::

#### NetworkManager (RHEL)

Para poder hacer modificaciones a nuestro network adapter en red hat
usamos la utilidad `nmcli`

Si queremos ver nuestros dispositivos ejecutamos:

```bash
nmcli device status
```

Es importante saber que no siempre el `device-name` con el
`connection-name` seran los mismos, en algunos casos cambiaran.
Por lo general siempre tomare el `connection-name` porque si en
algun momento cambio de network adapter solo seria cambiar el
`device-name` a la `connection-name` y ya sin tener que hacer todo
de nuevo

Una vez que se el connection name puedo ver la configuracion de
dicho dispositivo para esto ejecutamos:

```bash
nmcli device show [connection-name]
```

Una vez para cambiar que determino los valores que quiero cambiar
basta con ejecutar

```bash
nmcli connection edit [connection-name]
```

luego en el command prompt podemos cambiar cualquierda de esos
parametros por ejemplo cambiar la ip

```bash
set ipv4.addr 192.168.0.2/24
```

Tenemos dos tipos de guardado `temporary` y `persistent` con el
primero lo usamos para testear los cambios y una vez hagamos reboot
regresa a su configuracion anterior con el segundo ya queda guardado
para siempre

```bash
save <temporary/persistent>
```

Por ultimo para salir basta con escribir `quit`

Si ejecutamos:

```bash
sudo nmcli connection reload 
```

Reiniciara todas las conexiones

Si solo queremos reiniciar una conexion, debemos apagarla y volverla
a prender:

```bash
sudo nmcli connection down [connection-name]
sudo nmcli connection up [connection-name]
```

#### NetPlan (Ubuntu)

En ubuntu es diferente para administrar nuestros `network-adapaters`
usa netplan

Ventajas:

- cloud init
- Tiene scripts para probar la configuracion
- Usa YAML

Que es cloud init?

Es util cuando tenemos servidores en la nube pero sino lo mejor
es desactivarlo como lo hacemos?

Primero necesitamos ver si esta instalado cloud init, para esto vamos
a `/etc/cloud/`

Si el path no existe no esta instalado pero si el path existe podemos
desinstalarlo de la siguiente forma

```bash
cd /etc/cloud/cloud.cfg.d/
```

Luego creamos un archivo el que sea en este caso lo llamaremos
`99-disable-network-config.cfg` ejecutamos

```bash
sudoedit 99-disable-network-config.cfg
```

Dentro del archivo agregamos la siguiente linea de codigo

```yaml
network: {config: disabled}
```

Ahora para empezar a configurar nuestros `network-adapter` nos vamos
a la siguiente ruta `/etc/netplan/` dentro encontraremos un archivo,
podemos modificar ese archivo o agregar otro nuevo

```bash
sudoedit /etc/netplan/config.yaml
```

Dentro de este archivo podemos agregar las configuraciones que
queremos

Ejemplo

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: false
      addresses: [10.0.222.101/16]
      gateway4: 10.0.0.1
      nameservers:
        addresses: [8.8.8.8,8.8.4.4]
```

Para testear nuestra configuracion ejecutamos

```bash
sudo netplan try
```

Si falla se reiniciara en 2 minutos sino sale el prompt diciendote
que guardes los cambios

Sino quieres esperar y sabes que tu archivo funciona perfectamente
puedes ejecutar directo

```bash
sudo netplan apply
```

### DNS

Si tenemos un SO que usa `systemd` pues podemos usar su utilidad
`systemd-resolved` pero sino tenemos que modificar los archivos
de configuracion

:::note
En servidores los cuales tienen muchos `network-adapters` no
configuramso el dns en cada uno de ellos sino que lo configuramos
de forma global mientras que en maquinas o servidores con un solo
`network-adapter` si podemos configurar el dns en el dispositivo
:::

#### Forma antigua

Para la forma antigua debemos editar cualquierda de estos dos
archivos:

1. `/etc/resolv.conf`
2. `/etc/nsswitch.conf`

Luego guardamos y hacemos rebot

#### Forma con systemd

La mayoria de los SO ahora usan `systemd` para esto, tenemos un
servicio llamado `systemd-resolved` para ver si esta activado
ejecutamos:

```bash
sudo systemctl status systemd-resolved
```

Si sale activado pues esta funcionando, sino podemos encenderlo
usando

```bash
sudo systemctl enable --now systemd-resolved
```

Ya con esto podemos ejecutar el comando `resolvectl`

Para empezar a cambiar nuestra configuraciones de forma global
vamos a la ruta `/etc/systemd/` dentro de este path podemos
crear una carpeta `resolved.conf.d` sino la tenemos

```bash
mkdir resolved.conf.d
```

y luego podemos crear un archivo `dns.conf` con las configuraciones
pertinentes

```bash
sudoedit dns.conf
```

```yaml
[Resolve]
DNS=4.2.2.1 4.2.2.2
Domains=~.
DNSSEC=yes
DNSOverTLS=yes
```

Guardamos el archivo para aplicar los cambios basta con reiniciar
el servicio

```bash
sudo systemctl restart systemd-resolved
```

### Network Troubleshooting

#### Como solucionar un error de network?

1. Verificar mi ip con `ifconfig` o `ip addr`
2. Verificar la table de enrutamiento `route` o `ip route` o `routel`
3. Verificar las sesiones activas `netstat` o `ss` o `ss -atp`

#### Herramientas comunes

##### IPV4

- `ping`: Test la conectividad con el servidor
- `dig`: realiza un descubrimiento del DNS
- `nslookup`: lo mismo que `dig`
- `host`: lo mismo que dig
- `traceroute`: Realiza todo el path que se ejecuta hasta llegar al host
- `mtr`: lo mismo que `traceroute` pero te lo muesta mas bonito
- `tracepath`: Prueba la conexion alrededor del path

##### IPV6

- `ping6`
- `traceroute6`
- `tracepath6`

#### Herramientas antiguas (net-tools)

- Son binarios que ejecutan desde varios archivos de configuracion
- Como depende de estos archivos de configuracion, depende de la
distro el path puede variar

Herramientas comunes

- `arp`: Para saber la mac del dispositivo
- ifconfig
- netstat
- nameif
- route

:::tip
mejor ejecutar

```bash
netstat -natp
```

:::

Para instalarlas usamos

```bash
sudo apt install net-tools
```

#### Herramientas nuevas (iproute2)

- Son binarios que ejecutan desde la API del kernel (netlin)
- Consistente entre distribuciones porque el kernel es el mismo
- Mas eficiente

Herramientas comunes

- ip
- ss
- routel

:::tip
mejor ejecutar

```bash
ss -natp
```

:::

Para instalarlas usamos

```bash
sudo apt install iproutes2
```

#### Servidor

Desde el servidor es un poco diferente, porque debemos verificar
si se estan comunicando no si se conectaron. Para esto usamos
herramientas como `tcpdump`

Para ver los paquetes que han pasado por un network adapter

```bash
sudo tcpdump -i [interfaz] > data.txt
```

Y luego el archivo se lo podemos pasar a `wireshark` que es una
herramienta que nos muestra el contenido de ese archivo bastante mas
bonito

Otra de las maneras para solucionar problemas es reiniciando el
sistema pero hacer un `reboot` no es opcion tarda mucho. Por ende
mejor es reiniciar el servicio de network eso lo hacemos ejecutando:

```bash
sudo systemctl restart network.service
sudo systemctl restart systemd-resolved
```

### Download/Upload Files

Copiar archivos atraves de la red es una de las tareas mas comunes
que todo desarrollador realiza sin importar el nivel

Las herramientas mas conocidas para descarga son:

1. `wget`
2. `curl`

La herramienta mas conocida para cargar archivos es:

1. rsync

#### wget

`wget` viene de web get, lo cual permite tener descargas desde una
URL

Sintaxis:

```bash
wget <file>
```

Ejemplo:

```bash
wget http://ftp.usf.edu/pub/ubuntu/dists/focal/Release.gpg
```

#### curl

`curl` viene a ser el predecersor de `wget` tiene muchas mas
funcionalidades las cuales son:

- Autenticacion de usuario
- TLS y SSL
- Soporta proxies
- Resume
- Cookies
- Maneja mas protocolos no solo http o https (man curl)

Sintaxis:

```bash
curl <file>
```

Ejemplo:

```bash
curl http://ftp.usf.edu/pub/ubuntu/dists/focal/Release.gpg --output ./Release.gpg
```

#### Rsync

Con `rsync` podemos cargar o descagar archivos desde multiples
servidores no WEB

Funcionalidades:

- Podemos copiar archivos una sola vez
- Podemos agendar sincronizaciones
- Operaciones de una sola via o doble via

Sintaxis:

```bash
rsync <options> <source> <destination>
```

Ejemplo (backup de una carpeta a otra ubicacion):

```bash
rsync -azurP ~/Documents ~/Backup
```

Explicacion de los parametros del comando

- `a`: Archive
- `z`: Zip -> para que sea mas rapido la transferencia de archivos
- `u`: Copiar archivos que no se hayan copiado, es decir, los nuevos
- `r`: Recursive -> Si hay directorios todo lo que esta dentro
- `P`: Display Progresive -> Para ver el progreso

:::caution
Tenemos que tener cuidado porque al momento de sincronizar los archivos
si por accidente borramos alguno en el servidor remoto tambien se
borra para esto podemos usar el flag `--dry-run` para realizar
una prueba de que es lo que va a realizar el comando

Ejemplo:

```bash
rsync -azurP ~/Documents ~/Backup --dry-run
```

:::

##### Remote

Para enviar archivos de forma remota y que esten sincronizados `rsync`
tiene dos caracteristicas:

1. listener
2. ssh

Con listener podemos enviar los archivo por la red de un sever a otro
y tenerlos sincronizados el problema es que se escribio hace mucho
tiempo y no es seguro. Para esto lo complementamos con ssh para
crear una conexion encriptada y poder sinronizar los archivos de
forma segura

Sin ssh y solo usando Listener

```bash
rsync -azurP /home/administrator/Documents administrator@10.0.222.50:/home/administrator/
```

Con ssh y listener

```bash
rsync -azurP -e ssh /home/administrator/Documents administrator@10.0.222.50:/home/administrator/
```

##### Incluir o Excluir archivos

Podemos incluir o excluir archivos usando los flags `--include` y
`--exclude`, el orden en el que los pongamos determinara que hara

Si lo que queremos es transferir todos los archivos excepto los `.ko`

Ejecutamos:

```bash
rsync -azurP --exclude="*.ko" --include ".*" [origin-path] [dest-path]
```

Por otro lado si lo que que queremos es transferir solo los `.ko`

Ejecutamos:

```bash
rsync -azurP --include="*.ko" --exclude ".*" [origin-path] [dest-path]
```

### SSH

SSH viene de Secure Shell, es una forma de conectarnos con equipos
de forma remota y poder ejecutar comandos para esto debemos
configurar ssh tanto en el servidor como en el cliente.

La herramienta que utilizamos para esto es `openssh` que no solo nos
ayuda con conexiones `ssh` sino tambien con `vpn`

#### SSH en el Servidor

Normalmente esta instalado por default pero sino lo esta lo primero
que debemos hacer es instalarlo pero esto depende del sistema
operativo

Red Hat

```bash
sudo dnf install openssh-server
sudo systemctl enable --now sshd
```

Debian

```bash
sudo apt install ssh
sudo systemctl enable --now ssh
```

:::note
En debian al ejecutar `sudo apt install ssh` instala tanto el
cliente como el servidor
:::

Una vez que activamos el servicio de ssh, podemos modificar las
configuraciones para hacerlo un poco mas seguro o por compliance

Para eso podemos modificar el archivo `/etc/ssh/sshd_config`
y modificarlo a nuestro antojo

:::caution
Los nombres de los archivos dentro de `/etc/ssh` son muy parecidos
entonces tener cuidado por ejemplo

- `/etc/ssh/sshd_config`: este archivo es para el servidor
- `/etc/ssh/ssh_config`: este archivo es para el cliente
:::

Ciertas Recomendaciones:

Una vez aplicada dichas recomendaciones debemos reiniciar el servicio
para que tengan efecto, para eso ejecutamos:

```bash
sudo systemctl restart sshd
```

#### SSH en el Cliente

En el cliente es parecido al servidor necesitamos instalar una
utilidad que nos ayude a conectarnos para eso debemos instalarla

Red Hat

```bash
sudo dnf install openssh-client
```

Debian

```bash
sudo apt install ssh
```

Para conectarnos a un servidor usaremos la siguiente sintaxis:

```bash
ssh <username>@<hostname_or_ip>
```

Nos podemos conectar por medio del password y ya esta una buena practica seria usar certificados

:::tip
Para pasarnos archivos debemos usar `sftp`
:::

##### Certificados

Los certificados son una forma de mejorar la seguridad dentro de
nuestros sistemas, presenta las siguientes mejoras

- Imposible de realizar brute force attacks
- Mas seguros que las contraseñas
- Los tamaños de las llaves sobrepasan los miles de caracteres

El certifcado consta de dos partes:

- la llave publica: La genera el cliente y la guarda en el servidor
es el archivo con extension `.pub`
- la llave privada: La genera el cliente y la tiene el

:::tip
La llave publica puedes cargarla en multiples servidores no es
necesario manejar multiples llaves
:::

Para generar una key usamos `ssh-keygen`, la salida de este comando
se guarda en `~/.ssh`

Para subir la clave al servidor usamos `ssh-copy-id`

Para crear una llave ejecutamos:

```bash
sudo ssh-keygen -q -N "" -t rsa -b 4096 -f /etc/ssh/ssh_host_rsa_key
```

Donde:

- `q`: No mucho Output
- `N`: passphrase
- `t`: Tipo de algoritmo de encriptacion
- `b`: Cantidad de bits
- `f`: Nombre del archivo

Podemos actualizar nuestro archivo de configuraciones para que use
estas keys para esto tenemos que ir a la ruta
`/etc/ssh/sshd_config.d/`

Si lo que queremos es solo desactivar poder hacer login con
contraseña podemos crear el siguiente archivo de configuracion:

```bash title=local.conf
PasswordAuthentication no
```

Cada distro viene con sus propias llaves ssh una buena practica
es reemplazar estas claves y generar unas nosotros mismos para esto
ejecutamos

```bash
cd /etc/ssh
rm /etc/ssh/ssh_host*
sudo ssh-keygen -q -N "" -t rsa -b 4096 -f /etc/ssh/ssh_host_rsa_key
sudo ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key
```

Ya con esto podemos reiniciar y tomara estas nuevas llaves que
generamos nosotros mismos

Tambien podemos crear un nuevo archivo dentro de `/etc/ssh/sshd_config.d`
para decirle que rechace las conexiones que usen otros algoritmos

```bash title='hardened.conf'
HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_ed25519_key
HostKeyAlgorithms ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,sk-ssh-ed25519@openssh.com,sk-ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa-sha2-512,rsa-sha2-256-cert-v01@openssh.com,rsa-sha2-512-cert-v01@openssh.com
```

Una vez que realizamos estos cambios debemos reiniciar el servicio
de ssh

```bash
sudo systemctl restart sshd
```

## Security

La seguridad es una de las cosas mas importantes dentro de los
sistemas informaticos ya que sin ella somos vulnerables a recibir
cyber ataques o robo de informacion para esto debemos proteger
nuestros SO

### SELinux

Es una herramienta hecha para Red Hat la cual nos ayudara

### AppArmor

### Firewall

Configurar un firewall en ubuntu no es tan complicado debido a que
tenemos la herramienta `ufw` Uncomplicated FireWall, tambien
podemos usar `iptables` no es una forma de reemplazarlo sino mas
bien un frontend para usar `iptables` mejor

:::note
Red Hat usa `firewalld`
:::

Casi todas las distros vienen con `ufw` por default para comprobarlo
ejecutamos:

```bash
sudo ufw status
```

Sino nos sale nada, lo debemos instalar

Para instarlalo usamos:

```bash
sudo apt install ufw
```

Una vez instalado lo activamos ejecutando:

```bash
sudo ufw enable
```

Para ver las reglas que tenemos creadas ejecutamos

```bash
ufw status
```

para crear una nueva regla

```bash
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
```

:::note
Cada que creo una regla la crea en IPV4 e IPV6
:::

Estos alias de los protocolos los encontramos definidos en
`/etc/services`

La forma larga sino sabemos los alias para crear una regla seria

Single port:

```bash
sudo ufw allow 80/tcp comment "Apache Web Server"
```

Multiples port:

```bash
sudo ufw allow 20,21/tcp comment "FTP server"
```

Range port:  abre 10k puertos

```bash
sudo ufw allow 50000:60000/udp comment "SIP Session Ports"
```

#### Orden

Las reglas de firewall estan ordenadas y se ejecutan de arriba a
abajo

Para saber este numero de las reglas ejecutamos

```bash
sudo ufw status --numered
```

Para insertar una reglas despues de un numero ejecutamos:

```bash
sudo ufw insert <#> <rule>
```

Ejemplo:

```bash
sudo ufw insert 15 allow mysql
```

Para insertar una regla al inicio

```bash
sudo ufw prepend allow 8080
```

Para borrar una regla

```bash
sudo ufw delete <#>
```

Podemos usar una sintaxis mas compleja para crear reglas mas
avanzadas

Sintaxis:

```bash
sudo ufw <allow/deny> proto <tcp/udp> from <s-network> port <s-port> to <d-network> port <d-port> comment <comment>
```

Ejemplo:

```bash
sudo ufw allow proto tcp from 192.168.0.0/24 to any port 80,443,20:21,22 comment "Management Access"
```

### SSL

### Alternative Authentication Methods
