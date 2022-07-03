---
sidebar_position: 3
---

# GIT

[CommitStyleGuide](https://udacity.github.io/git-styleguide/)
Git es una herramienta que nos ayuda a realizar source control,
nos ayuda a trackear nuestros archvivos para saber que cambios
han sufrido a lo largo del tiempo.

Ventajas:

- Previene perder informacion
- Manejar proyectos largos
- Distribuir nuestros archivos en el tiempo
- Muchas herramientas de integracion
- Bastante informacion en internet
- La herramienta source control mas popular del mundo

## Instalacion

Para poder instalar git podemos usar el siguiente [link](https://git-scm.com/downloads)

tambien podemos usar el siguiente comando dependiendo del sistema
operativo

```bash
#linux-ubuntu 
sudo apt install git 
#mac
brew install git 
#para saber si se instalo git 
git -v
```

## Basics

### Repositorios

contienen toda la informacion de nuestros archivos a lo largo
del tiempo.

- repositorios remotos: son todos aquellos que estan en un servidor
o no estan en nuestra computadora
- repositorios locales: son en cambio los repositorios que tenemos
en nuestra computadora

### Directorios

son los proyectos en el estado mas actual posible, mientras que los
repositorios son directorios que almacenan toda la informacion del
proyecto desde que se creo.

### Flujo

Git funciona de la siguiente manera nosotros tenemos un directorio
de trabajo el cual hacemos modificaciones (agregar archivos, eliminarlos,
actualizarlos, etc) todos esos cambios se agregan a una fase de stage
donde los cambios se almacenan y estan listos para crear una snapshot/commit
la snapshot seria como el tomarle una foto al estado actual de nuestro
directorio y por ende esta listo para dicha foto que capturo un momentoi
en el tiempo sea guardada en un album de fotos o en este caso en un
repositorio remoto.

### Comandos basicos

Para inicializar un repositorio en un directorio de trabajo usamos

```bash
git init 
```

Para agregar archivos al repositorio local usamos

```bash
# Para agregar todos los archivos
git add .
# Para agregar un archivo especifico
git add [nombre-del-archivo.txt]
```

Podemos ver el estado de nuestro snapshot con

```bash
git status 
```

Para eliminar un archivo podemos usar

```bash
git rm -f [nombre-del-archivo.txt]
```

para eliminar un archivo de la zona de stage o de
nuestro snapshot podemos usar

```bash
git rm --cache [nombre-del-archivo.txt]
```

Para hacer un commit usamos

```bash
git commit -m "commit inicial"
```œ
Si queremos solo hacer un commit con los archivos que 
queremos trackear usamos 

```bash
git commit -a -m "commit inicial 2"

```

para ver un historial de todos los commits usamos

```bash
git log
```

para movernos entre ramas usamos

```bash
git checkout [nombre de la rama]ß
# para movernos a un commit anterior 
git checkout [hash del commit]
# para regresarnos al ultimo commit 
git checkout master
```

:::note
`git revert` es mas seguro  que `git reset`
:::

## Ramas

## Github

Github por otro lado es una herramienta que nos permite almacenar
nuestros repositorios locales de forma remota, mediante push/pull
system. Permite la colaboracion en tiempo real con otras personas
interesadas en el proyecto

## GUI

## CheatSheet

[link](https://github.com/joshnh/Git-Commands/blob/master/READMEes.md)
