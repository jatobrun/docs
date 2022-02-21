---
sidebar_position: 4
---

# JS
## Style Guide
[Udacity](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
## Developer Tools 

Todos los navegadores tienen un `engine` el cual es capaz de entender `js code` y ejecutar
las acciones que se declaran.

Podemos usar las developer tools para correr codigo de `JS` en el navegador
Para esto si usamos `chrome` utilizamos `Command + Option + J` para abrir una consola

### Sandbox

`sandbox` es un lugar donde podemos testear codigo, realizar debugs de codigo sin tener que 
preocuparnos por las consecuencias de nuestro codigo en la maquina. 


## Tipos de datos 
Los tipos de datos son los `building block` en cualquier lenguaje de programacion

### Numbers
Incluye cualquier numero `positivo` o `negativo` asi como `decimales`.

Para definir un numero en js 

```js
3
```

#### Operaciones Aritmentica
En `js` tenemos todas las operaciones aritmetica basicas como por ejemplo:
- Suma (+)
- Resta (-)
- Multiplicacion (*) 
- Division (/)
- Residuo (%)

#### Operaciones Logicas 
En `js` tambien podemos obtener comparaciones logicas como por ejemplo:
- menor a (<)
- mayor a (>)
- menor o igual a (<=)
- mayor o igual a (>=)
- igual a (==)
- diferente a (!=)

### Strings 
Los `strings` son cadenas de caracteres las cuales encerramos con comilla simple `'` o 
comilla doble `"`. Ambos son validos para saber cual usar puedes utilizar como referencia 
el style guide de udacity en la [seccion](#style-guide).

Los `strings` tambien pueden ser de un solo caracter como por ejemplo `"h"` o incluso numeros 
`"123"`

#### Concatenacion
Podemos concatener `strings` es decir juntarlos en un solo `string final`. Lo hacemos de la siguiente 
manera:

```js
"Hello," + " New York City"
```
Algunos ejemplos de esto 

- `"hello" + "world"`
> **Retorna:** "helloworld"
- `"Hello + 5*10"`
> **Retorna:** "Hello + 5*10"
- `"Hello" + 5*10`
> **Retorna:** "Hello50"

:::info
El ultimo caso descubrimos un comportamiento peculiar de js el cual se lo conoce como 
`implicit type coercion`, para revisar mas acerca del tema revisa la [seccion](#implicit-type-coercion)
:::
#### Indexing
Los `string` tienen algo llamado `index` lo cual es la posicion que tiene cada uno de los caracteres
que conforman el `string`. Por ejemplo 
```js
"James"[0];
```
>**Returns:** "J"

![indexing](/img/js/indexing.png)

#### Escaping Characters
Los `escaping characters` le dicen a `js` que ignore el significado del caracter y use 
su valor de forma literal. Por ejemplo la comilla doble `"`, js la usa para determinar 
el inicio o final de un string al usar `\"` le decimos al interpreter que tome el valor literal 
que es la comilla doble.

Los caracteres especiales que queremos skippear son:

- `\\` con esto tenemos un `\` dentro del string
- `\"` obtenemos una comilla doble en el string 
- `\'` obtenemos una comilla simple en el string 
- `\n` salto de linea 
- `\t` agregar un tab 

:::tip
`\\` los usamos en los **Paths**
:::

#### Comparaciones 
Podemos usar los mismo operadores logicos que usamos en los numeros para comparar strings. Estos 
son:
- `==`
- `!=`
- `>`
- `<`

Al comparar `strings` debemos tomar en consideracion dos cosas que hace el interpreter 
de `js`:

- `case-sensitive`

```js
"Y" != "y"
```
> **Returns:** True

- `internal-working`
Quiere decir que el interpreter de `js` compara caracter por caracter con su respectiva 
representacion `ASCII` para determinar si los caracteres son iguales


### Boleanos
Un `boolean` es un tipo de dato que solo puede contener dos valores `true` o `false`.
Cada que realizamos una comparacion en `js` siempre como resultado tendremos un `boolean`


:::tip
Los `booleans` tambien se pueden representar con numeros `0` es `false` y `1` es `true
:::

### Null, Undefined y NaN
- `null` es un tipo de dato que represanta que el valor es nada, es decir, que
el valor totalmente vacio.

```js 
var signedIn = null;
console.log(signedIn);
```
- `Undefined` es un tipo de dato que representa la ausencia de valor, es decir, que no tiene 
valor.
```js
var signedIn;
console.log(signedIn);
```
- `NaN` viene de `Not-A-Number` es un error que se produce
cuando realizamos operaciones matematicas erroneas por ejemplo:

```js
// calcular la raiz cuadrada de un numero negativo retorna un NaN
Math.sqrt(-10)

// Tratar de dividr un string con un numero retorna NaN
"hello"/5
```


## Type conversion 
Cada que utilizamos el operador `==` lo que realiza el interpreter de `js` es realizar una conversion 
numerica a cada lado de los iguales para de ahi proceder a saber si dicha conversion numerica es igual.
```js
"1" == 1
```
> **Return:** true
```js
0 == false
```
> **Return:** true
```js
' ' == false
```
> **Return:** true

Por eso debemos tenemos tener cuidado al utilizar el operador `==`, por otro lado si no queremos realizar 
dicha conversion antes de realizar la comparacion usamos este operador `===`.

:::tip
Por norma general es una mala practica usar el operador `==` o `!=` debido a que no representa realmente 
las necesidades que estamos buscando, por ende, mejor usar siempre `===` o `!==`

Ejemplos:
```js
"1" === 1
```
> **Return:** false
```js
0 === false
```
> **Return:** false
```js
0 !== true
```
> **Return:** true

:::

## implicit type coercion
`Js` es un lenguaje considerado como `loosely type language`. Basicamente lo que significa es que 
al momento de escribir codigo de `Js` no tenemos que especificar el tipo de dato de la variable. Por ende 
el interpreter de `js` al momento de ejecutar el codigo automaticamente los convierte a sus `"apropiados"`
tipos de datos.

Ejemplos:

```js
"julia" + 1
```
>**Returns:** "julia1"

:::note
`Strongly typed language`: Son todos los lenguajes de programacion que generan errores al no coincidir
los tipos de datos

Ejemplo:

```ts
int count = 1;
string name = "Julia";
double num = 1.2932;
float price = 2.99;
```

```js
// equivalent code in JavaScript
var count = 1; 
var name = "Julia";
var num = 1.2932;
var price = 2.99;
```

:::

## Semicolons
Los semicolons son `;` y nos indica el final de cada linea, aunque `js` trata de inferir 
cuando una linea de codigo termina al igual que [implicit type coercion](#implicit-type-coercion). 

Es una buena practica al finalizar cada linea de codigo usar el `;` para prevenir algun 
comportamiento extraño

## Variables 
Las `variables` son las responsables de almacenar informacion, podemos almacenar 
cualquier tipo de datos en las variables. Para mas informacion acerca de los tipos de datos 
disponibles en js puedes ir a su [seccion](#tipos-de-datos)

Para crear una variables necesitamos de 4 partes:

1. Usar la palabra reservada `var`
2. Nombrar a la variable `variableName`
3. Seguido del operador de asignacion `=`
4. El valor de la variable `value`

Para crear una variable lo hacemos de la siguiente manera:

```js
var nombre = "Andres"

```

### Naming Conventions
Para escribir nombre de variables en `js` usamos lo que se conoce como `camelCase`.
Ademas tratar de nombrar a las variables de forma que describa de la mejor forma que 
es lo que almacenan 

```js
var totalAfterTax = 53.03; // usar camelCase si el nombre de la variable tiene multiples palabras
var tip = 8; // usar lowercase si el nombre de la variables es solo de una palabra
```
:::note
`camelCase` significa la primera palabra empieza con minuscula y 
cada palabra siguiente empieza con mayuscula. No usar `camelCase` no causara ningun
problema al momento de programar con `js` solo que es necesario seguir las buenas 
practicas y los style guides para mas [info](#style-guide)
:::

## Comentarios 
Los comentarios se usan mucho en cualquier lenguaje de programacion con el fin 
de incrementar la legibilidad del codigo, tambien se usan para recordar 
que trata de hacer la funcion al momento de refactorizar.

- Para hacer comentarios en linea usamos los `//`
- Para hacer bloques de comentarios usamos `/*` para abrir el bloque mientras que 
`*/` para cerrar el bloque de comentario.

```js
// Esto es un comentario en linea 
// Esto es otro comentario en linea 

/* esto es multiples 
   comentarios
   en 
   linea
*/
```

## Condiciones 
Una herramienta muy util para pensar como la maquina
 es usar `diagramas de flujo`.

### If...Else 
Nuestra primera estructura de flujo es la condicion `if...else`. Cosas a tener en cuenta 
sobre esta estructura condicional:
1. El valor dentro del `if` siempre sera convertido a `true` o `false`.
2. Depende de dicho valor se ejecuta el bloque del codigo, es decir, si sale `true`
se ejecuta el bloque que acompaña al `if` si es `false` el bloque del `else`.
3. Nunca van a ejecutarse ambos bloques de codigos a la vez
4. Los bloques de codigos son separados por llaves `{...}` con el fin de separarlos.

```js
if (/* this expression is true */) {
  // run this code
} else {
  // run this code
}
```
### ElseIf
En muchas de las situaciones dos condiciones son suficientes, pero que pasa en la caso 
donde tenga una situacion mas compleja con mas de dos condiciones?. Aqui entra en juego 
el `else if`

```js
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}
```

### Operadores Logicos

| Operadores | Significado | Ejemplo | Como funciona?|
|------------ | ----------- | ------- | ------------- |
| `&&` | AND | `valor1 && valor2` | Retorna `true` si los **dos valores**, `valor1` **y** `valor2` son verdadero |
| `!` | NOT | `!valor1` | Retorna el valor `opuesto`. Si  `valor1` es `verdadero` retorna `falso` |
| \|\| | OR | valor1 \|\| valor2 | Retorna `true` si **uno** de los valores, `valor1` **y** `valor2` son verdadero |

:::note
Todas las expresiones logicas son evaluadas de izquierda a derecha, 
Podemos usar parentesis para darle mayor prioridad o agrupar expresiones.
:::

#### Tablas de verdad 
| A | B | A&&B | 
|-- |-- | ---- |
| verdadero | verdadero | verdadero | 
| verdadero | falso | falso |
| falso | verdadero |  falso | 
| falso | falso |  falso | 

| A | B | A\|\|B | 
|-- |-- | ---- |
| verdadero | verdadero | verdadero | 
| verdadero | falso | verdadero |
| falso | verdadero |  verdadero | 
| falso | falso |  falso | 

### Truthy and Falsy
En Javascript tenemos el concepto de inherit, esto se debe a que el interpreter 
transforma la expresion al contexto que se esta usando. Si estamos en el contexto
booleano toda la expresion la convertira a sus especificos valores booleanos.

Algunos valores que por default al transformarlo al contexto booleano retornan `falso`

1. `false`
2. `null` 
3. `undefined`
4. `0`
5. `""`
6. `NaN`

Todos los valores que no pertenezcan a esta lista son considerados `truthy` value. Lo 
que quiere decir que dichas expresiones al ser evaluadas en el contexto booleano retornan 
`verdadero`

Por ejemplo:
1. `"null"`
2. `2`
3. `[]`
4. `{}`
5. `true`

### Operador Ternario
El operador ternario es una forma de re escribir el tradicional `if else` de una forma 
mas corta y legible

```
condicion ? (si la condicion es verdadera) : (si la condicion es falsa)
```

Ejemplo 

```js
var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}
```
Este bloque de codigo lo podemos cambiar por 

```js
var isGoing = true;
var color = isGoing ? "green" : "red";
```

### Switch 
Una forma de refactorizar los `if else` encadenados es usar `switch`
```js
if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}
```
```js
var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}
```
## Bucles 
Los bucles nos ayuda a ejecutar un bloque de codigo repetidamente 
por un numero fijo de veces o mientras cumplamos alguna condicion.
Basicamente todos los bucles nos ayudan a repetir un bloque de codigo 
una cantidad x de veces.

Existen 3 partes importantes que todos los bucles tienen los cuales son:

1. Cuando empezar

2. Cuando terminar

3. Como obtenemos el siguiente elemento

```js

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
```

:::caution
Si no tenemos la condicion de cuando terminar tendremos un bucle infinitoß
:::

### Bucle While
El bucle while nos permite repetir un bloque de codigo cuantas veces
la condicion sea verdadera veamos un ejemplo de como contar del 1 al 
1000

```js 
var number = 0; // when to start
while (numer <= 10000) { // when to stop
  console.log(number);
  number = number + 1; // how to get to the next item
}
```

### Bucle For
## Funciones 

## Arrays

## Objetos
