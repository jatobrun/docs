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
var number = 0; // empiezo
while (numer <= 10000) { // cuando termino
  console.log(number);
  number = number + 1; // paso al siguiente iteracion
}
```

### Bucle For
La principal diferencia entre el bucle for y el while es que en el for 
debemos escribir las 3 partes que todo bucle debe tener de forma explicita

```js
for ( inicio; fin; paso ) {
  // do this thing
}
```
### Bucles anidados
Son bucles dentro de otros bucles 

```js
for(var i = 0; i < 6; i++){
  for(var x = 0; x < 3; x++){
    console.log(x, y);
  }
}
```

### Incrementos y Decrementos 

```js 
x++ or ++x // lo mismo que x = x + 1 
x-- or --x // lo mismo que x = x - 1
x += 3 // lo mismo que x = x + 3
x -= 6 // lo mismo que x = x - 6
x *= 2 // lo mismo que x = x * 2
x /= 5 // lo mismo que x = x / 5
```

## Scopes 
El scope basicamente viene a ser como el alcance de algo, el alcance de una variable
o el alcance de una funcion. Existen 3 tipos de scope en JS

1. Global scope: Es cuando podemos usar la variable en cualquier parte del codigo
aqui podemos decir que las variables son `globales`

2. Function scope: Solo podemos usar la variable dentro de la funcion aqui podemos 
decir que las variables son `locales`

3. Block scope: Solo podemos usar la variable dentro de `{}`

Podemos usar este ejemplo para ver la relacion de los scopes 

```js
/*
 * Global scope. 
 * This variable declared outside of any function is called Global variable. 
 * Hence, you can use this anywhere in the code
 */
var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
    // Local variable, visible within the function `showMessage`
    var message = "I am an Udacian!"; 

    // Block scope
    {
          let greet = "How are you doing?";
        /*
         * We have used the keyword `let` to declare a variable `greet` because variables declared with the `var` keyword can not have Block Scope. 
         */
    } // block scope ends

    console.log( message ); // OK
    console.log( greet ); // ERROR. 
    // Variable greet can NOT be used outside the block

    console.log( opinion ); // OK    to use the gobal variable anywhere in the code

} // function scope ends
```
:::tip
Tratar de lo posible no usar global scope o variables globales 
ya que estas al final pueden sufrir de [shadowing](#shadowing) o conflicto de 
nombres
:::

### Declaracion de variables 
Hay 3 formas de poder declarar variables dentro de js:

1. `let` es una nueva forma de declarar variables en cualquier 
scope en js. El valor de la variable pueed ser cambiado o reasignado
en cualquier parte del codigo

2. `const` es una forma de declarar constantes en cualquier 
parte del scope (global, function or block) y este valor no puede ser 
cambiado o reasignado en ninguna parte del codigo

3. `var` era la forma antigua de declarar variables en js. Solo podemos 
declararla en dos tipos de scopes (global y function).

## Funciones 
las funciones son bloques de codigo que podemos reutilizar a lo largo del 
codigo con el fin de no estar repitiendo tantas veces el mismo codigo. Es 
como una forma de empaquetar funcionalidades que se repiten.

Podemos tener una funcion con multiples parametros 

```js
function doubleGreeting(name, otherName) {
  // code to greet two people!
}
```
O podemos tener una funcion sin parametros

```js 
function sayHello() {
  var message = "Hello!"
  console.log(message);
}
```

Las funciones tienen dos estados cuando las declaramos y cuando las llamamos
ejemplos anteriores son declaracion de funciones pero para llamarlas hacemos lo
siguiente 

```js 
// declarar la variables say hello
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// llamamos a la funcion sayHello()
console.log(sayHello());

```

### Parametros vs Argumentos 
Los parametros son las variables que escribimos cuando declaramos una funcion,
mientras que los argumentos son los valores que toman esos parametros cuando 
invocamos a la funcion.

ejemplo 

```js 
// a y b son parametros de la funcion
function findAverage(a, b) {
  var answer = (a + b) / 2;
  return answer;
}
// 5 y 9 son los argumentos de la funcion
var avg = findAverage(5, 9);
```

### Return 
La palabra reservada `return` nos permite detener la ejecucion de una funcion 
y retorna un valor de vuelta al que la invoco.

Sino definimos el valor a retornar en la funcion por defecto retorna `undefined`

### Shadowing 
es cuando reeescribrimos una variable del scope, es decir, tenemos una variable 
global y dentro de una funcion reescribrimos o cambiamos su valor.

Ejemplo cuando hacemos shadowing
```js 

var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x); // imprime 4
```
Ejemplo como no hacer shadowing 

```js
var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x); // imprime 2 
```

### Hoisting
- Js al momento de interpretar el codigo eleva todas las funciones del codigo
y ademas todas las declaraciones de las variables.
- No eleva la asignacion de las variables.

Ejemplo 1
Esto es lo que escribimos 
```js
sayHi("Julia"); // imprime -> undefined Julia

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}
```
Esto es lo que interpreta la computadora

```js
function sayHi(name) {
  var greeting;
  console.log(greeting + " " + name);
  
}
sayHi("Julia"); // por eso imprime -> undefined Julia
```
:::note 
recordemos que siempre que declaramos una variable
sino le asignamos ningun valor, su valor por defecto sera
[undefined](#null-undefined-y-nan)
:::
Ejemplo 2 
Esto es lo que escribimos 
```js
sayHi("Julia"); // imprime -> undefined Julia

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}
```
Esto es lo que la computadora interpreta

```js
function sayHi(name) {
  var greeting;
  console.log(greeting + " " + name);
  greeting = "Hello";
  
}
sayHi("Julia"); // por eso imprime -> undefined Julia
```
Ejemplo 3 (Asi evitamos el hoisting)
```js 
function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");
```

:::tip 
Para poder evitar el hoisting debemos mantener la declaracion de nuestras 
funciones arriba y la declaracion y asignacion de nuestras variables arriba 
tambien
:::

### Function expression 
es una nueva forma para declarar una funcion, debido a que usamos 
una variable para declararla. Es decir cuando una funcion es 
almacenada en una variable.

```js 
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

```
:::note
las funciones que no tienen nombres se las conoce como funciones 
anonimas
este tipo de funciones son buenas para evitar el hoisting por lo
que esta relacionado con la asignacion de variables y no con la 
declaracion.
:::
#### Callbacks 
son las funciones que se pasan como argumento a otras funciones

```js
// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
```

## Arrays
Los arrays es una estructura de datos que nos permite almacenar 
multiples valores ademas son organizados. Los arrays empiezan
desde el 0 y no desde el 1 como normalmente nosotros listamos 
los elementos de una lista. Cada elemento en un array debe estar
separado por una coma

Podemos crear un array con `[]`
```js
// creaamos a `donuts` array con 3 elementos de tipo string
var donuts = ["glazed", "powdered", "jelly"];
```
tambien podemos crear arrays con multiplos tipos de datos 
```js 
// creamos a `mixedData` array con una mezcla de tipos de datos
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];
```
Tambien podemos tener arrays anidados y normalmente escribimos
cada elemento en lineas separadas con el fin de mejorar 
la legibilidad 

```js
var arraysInArrays = [
  [1, 2, 3], 
  ["Julia", "James"], 
  [true, false, true, false]
];
```
### Indexing
Los indices empiezan desde 0, para acceder a un elemento podemos
usar su posicion y ademas los brackets `[]`

```js
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array
```
Si usamos un indice para un elemento que no existe, js retorna 
`undefined`

Para cambiar un elemento del array podemos hacer lo siguiente 

```js
donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]); 
```

### Propiedades 
Es informacion relevante sobre la estructura de datos 

`length` es la propiedad mas comun de los arrays, la 
cual nos permite saber cuantos elementos almacena.

```js
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length); // imprime 3
```

### Metodos

Los metodos en los arrays son funciones que nos permiten 
modificar o hacer diferentes funciones con el array

los metodos mas comunes en los arays son:

1. Reverse: nos permite hacer un reverso en el orden 
de los elementos

2. Sort nos permite mezclar los elementos de un array 

3. Push nos permite agregar elementos al final del array, ademas
retorna la cantidad de elementos del array despues de agregar 
al nuevo elemento. Su contraparte es unshift ya que agrega 
en la primera posicion los elementos.

4. POP Nos permite sacar el ultimo elemento del array, ademas 
retorna el elemento que saco, su contraparte es shift ya que 
elimina el primer elemento del array

5. Por otro lado splice nos permite sacar elementos y en la misma
posicion agregar nuevos elementos agregar elementos en cualquier
 parte del array

### Bucles 
Cuando queremos hacer cambios en diferentes elementos de un array
una posible solucion seria saber su indice y actualizarlo, esto 
se puede convertir en una tarea bastante tediosa si tenemos que 
hacerlo con muchos elementos para este tipo de siutaciones podemos
usar bucles.

```js
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
```
con ese bloque de codigo podemos recorrer los elementos de un 
arreglo

:::tip
Utilizar un for a secas es una buena forma de recorrer un arreglo
cuando queremos versatilidad o solo vamos a recorrer una 
parte del arreglo
:::

#### Foreach
Es una forma mas elegante de poder recorrer un arreglo si sabes
 con inline que lo vas a recorrer de principio a fin 
functions expresions

```js
words = ["cat", "in", "hat"];
words.forEach(function(element, index, array) {
  console.log("Word " + index + " in " + array.toString() + " is " + element);
});
```
donde:
- element representa al elemento como tal del array. 
- index representa el indice de la posicion del elemento. 
- array es una copia de todo el array.

#### Map
Otra forma de recorrer un arreglo bastante parecida al `forEach`
pero su principal diferencia es que creamos un nuevo arreglo

```js
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
```
### Arrays in Arrays
En algunas ocasiones podemos tener arreglos dentro de arreglos 
con el fin de formar grids o matrices

Podemos obtener los elementos de una fila de la siguiente manera
```js 

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}
```
mientras que para tener todos los elementos de forma individual 
podemos hacer lo siguiente 

```js 
for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
```

## Objetos
Sirven para encapsular toda la informacion y metodos o
funcionalidades en nuestras propieas entidades. Seria como definir
nuestros propios arrays. En otras palabras 
es una estructura de datos que permite encapsular entidades por 
medio de `keys`.

```js
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};
```
Algunas cosas que debemos recordar cuando creamos `objetos` en js.

- La `key` representa una propiedad o un metodo y su valor 
lo separamos por medio de `:`

- el conjunto `key:value` los separamos entre commas `,`

- El objeto esta encerrado por `{}`

Para acceder a los valores de sus parametros los podemos hacer 
de las siguientes formas 

```js 

sister["parents"] // bracket notation
sister.parents // dot notation
// ambos retornan [ "alice", "andy" ]
```

### Naming conventions 

- No usar comillas para las `keys`. La razon es sencilla podemos
llegar a tener error cuando usemos dot notation
- No empezar con numeros para las `keys`. sale error al usar 
dot notation
- Dentro de las keys si usamos multiples paralabra como "primer nombre" no usar espacios o caracteres especiales, es mejor usar 
camelCase "primerNombre"

## ES6

### Template literal 
es una nueva forma de usar strings interpolation o concatenacion
de strings cambios los `'' or ""` por "``". Ademas que podemos 
representar expresiones o agregar variablesde la siguiente forma 
`${expression}`

### Destructing 
Es una forma mas corta de extraer multiples elememtos de un array 
o de un objeto 

Antes de ES6 hacemos 

Para arreglos
```js 
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
```
Para objetos
```js
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);
```

Despues de ES6

Para arreglos

```js
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);
```

:::tip 
Podemos saltarnos elementos de la siguiente forma 
`const [x, , z] = point;`
:::

Para objetos

```js
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);
```
:::note 
en objetos agarramos el valor de la clave, si solo queremos un
elemento hacemos lo siguiente `let {color} = gemstone;`
:::

### Object Literal Shorthand
Es una forma mas corta de declarar metodos y parametros en los 
objetos, es muy util cuando tenemos variables con los nombres 
de las claves que queremos en nuestros objetos.

Antes de ES6
```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);
```

Despues de ES6
```js
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
```
:::note 
para los metodos tampoco es necesario usar la palabra reservada 
`function`
:::

### Iteration 
Bueno la manera mas comun que teniamos para iterar era usar el for loop, que ya hemos aprendido
ahora con es6 tenemos una manera mas sencilla de iterar muy parecida a python 

sin es6

```js 
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < digits.length; i++){
  console.log(digits[i]);
}

```
con es6
```js 
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let digit of digits){
  console.log(digit);
}
```
:::tip 
Es una buena practica nombrar a los arreglos en plural asi cuando 
tengamos que recorrerlos y usemos un `bucle for` podemos nombrar la variable 
como su singular
`for (const button of buttons) {...}.`
:::

Ademas que podemos detener el bucle en cualquier momento o si agregamos nuevas funciones 
al `Array.prototype.decimalfy` no se ve afectado nuestro array.

### Spread Operator
Es un nuevo operador que viene en es6 y nos permite expandir nuestros objetos iterables 

```js 
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
```
> **Prints:** Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

Esto podria ser util cuando queremos combinar o concatenar arrays 

sin es6 

```js
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
```

con es6
```js 
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);
```

### Rest Parameter 
es usar el spread operator al resves, lo que hago es agrupar los elementos (empaquetarlos)

es muy usado para hacer funciones con multiples parametros.

```js
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```
asi lo compacto y solo tengo un array con todos los parametros que le agregue al momento de
invocar la funcion

