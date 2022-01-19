---
sidebar_position: 5
---

# Flutter

## Instalacion

## Stateless vs Statefull

## ListView
Basicamente este componente es una lista que nos permite tener rows o distintos campos.

```dart 
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar')
    );
    body: ListView(
        children: const [
            Text('Item1'),
            Text('Item2'),
            Text('Item3'),
            Text('Item4'),
            Text('Item5'),
            Text('Item6'),
        ]
    )
)
```

### ListTiles

Son los campos de una listView de una forma mas estilizada

```dart 
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView(
        children: const [
            ListTile(
                title: Text('Item1'),
                leading: Icon(Icon.insert_emoticon),
            ),
            ListTile(
                title: Text('Item2'),
                leading: Icon(Icon.insert_emoticon),
            ),
        ]
    )
);
```

Podemos recorrer un arreglo y crear un ListTiles por cada elemento dentro del arreglo
Sin ListTile
```dart 
final options = const['item1', 'item2', 'item3']
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView(
        children: [...options.map((item) => Text(item)).toList()]
    )
);
```

:::note
El operador `...` o tambien conocido como
:::

Con ListTiles
```dart 
final options = const['item1', 'item2', 'item3']
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView(
        children: [...options.map((item) => ListTile(
            title: Text(item),
            trailing: const Icon(Icons.arrow_forward_ios),
        )).toList()
        ],
    )
);
```
Tiene el metodo `onTap:` para agregarle una funcionalidad al darle tap
```dart 
final options = const['item1', 'item2', 'item3']
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView(
        children: [...options.map((item) => ListTile(
            title: Text(item),
            trailing: const Icon(Icons.arrow_forward_ios),
            onTap: (){print('Hola');}
        )).toList()
        ],
    )
);
```

### Constructores
ListView tiene 2 constructores interesantes `ListView.separated` y `ListView.builder`. El 
primero crea cada elemento de la ListView con un separador mientras que el segundo hace lo mismo
que el primero pero no tiene el parametro para agregar el separador. 

:::info
Usando estos constructores nos ahorramos recorrer el array de elementos
:::

Usando el constructor `ListView.separated` sin listTile:
```dart 
final options = const['item1', 'item2', 'item3']
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView.separated(
      itemBuilder: (context, index) => Text(options[index]),
      separatorBuilder: (_, __) => const Divider(), 
      itemCount: options.length
      ),
);
```
:::note 
Cuando no estamos utilizando las variables podemos usar `_` para decir que esa variable no se usa
y para el segundo parametro `__`.
:::

Usando el constructor `ListView.separated` con listTile:
```dart
final options = const['item1', 'item2', 'item3']
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView.separated(
      itemBuilder: (context, index) => ListTile(
        title: Text(options[index]),
        trailing: const Icon(Icons.arrow_forward_ios)
      ),
      separatorBuilder: (_, __) => const Divider(), 
      itemCount: options.length
      ),
);

```

Esto mismo tambien lo podemos hacer utilizando el Widget Column, la diferencia es que el codigo 
se hace muy grande

Sin ListTile
```dart
final options = const['item1', 'item2', 'item3']
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView(
      children: [...options.map((item)=> Column(
        children: [Text(item), const Divider()]
      )).toList()
      ],

    )
);

```
Con ListTile
```dart
final options = const['item1', 'item2', 'item3']
Scaffold(
    appBar: AppBar(
        title: const Text('Texto del appbar'),
    ),
    body: ListView(
      children: [...options.map((item)=> Column(
        children: [
          ListTile(
            title: Text(item),
            trailing: const Icon(Icons.arrow_forward_ios),
          ), 
          const Divider()
          ]
      )).toList()
      ],

    )
);

```
Usando el constructor `ListView.builder` sin listTile:

PENDIENTE

## Card
PENDIENTE
## Slider
PENDIENTE

## Navegacion entre Pantallas
Usamos la clase `Navigator.push()` el cual recibe dos parametros `context` y `route`.

### Crear Route

```dart

final route = MaterialPageRoute(
    builder: (context) => const ListInterface();
);
Navigator.push(context, route);
```

:::info 
Con el metodo `push` obtenemos una navegacion y obtenemos un icono back screen
:::

```dart

final route = MaterialPageRoute(
    builder: (context) => const ListInterface();
);
Navigator.pushReplacement(context, route);
```
:::info 
Con el metodo `pushReplacement` no obtenemos una navegacion, por ende no tenemos back screen. 
Este metodo es util cuando queremos implementar un login.
:::

Con el siguiente comando podemos renderizar las paginas que definimos en el `main.dart`
en el objeto `routes`.
```dart
Navigator.pushNamed(context, 'home');
```

## MaterialApp

### debugShowCheckedModeBanner

### title

### initialRoute

### routes

### onGenerateRoute

## Divider
Podemos usar el componente divider lo que es un equivalente a un `<hr>`.

```dart
Divider();
```

## Buenas practicas 
### Imports
Para evitar tener multiples imports en el archivo main que es al final donde queremos renderizar
nuestras pantallas podemos hacer lo siguiente 

```dart title='./lib/screens/screens.dart'
export 'package:flutter_project/screens/listview.dart';
export 'package:flutter_project/screens/card_interface.dart';
export 'package:flutter_project/screens/slider_interface.dart';
```

``` dart title='./lib/main.dart'
import 'package:flutter/material.dart';
import 'screens/screens.dart';
void main() => runApp(const MyApp());
```

## Utils
Podemos usar una extension de `vs code` `Awesome flutter snipets`

