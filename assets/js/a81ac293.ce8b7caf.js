"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[590],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,v=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6543:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="Flutter",d={unversionedId:"lenguajes/flutter",id:"lenguajes/flutter",title:"Flutter",description:"Instalacion",source:"@site/docs/lenguajes/flutter.md",sourceDirName:"lenguajes",slug:"/lenguajes/flutter",permalink:"/docs/lenguajes/flutter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lenguajes/flutter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dart",permalink:"/docs/lenguajes/dart"},next:{title:"Go",permalink:"/docs/lenguajes/go"}},p=[{value:"Instalacion",id:"instalacion",children:[],level:2},{value:"Stateless vs Statefull",id:"stateless-vs-statefull",children:[],level:2},{value:"ListView",id:"listview",children:[{value:"ListTiles",id:"listtiles",children:[],level:3},{value:"Constructores",id:"constructores",children:[],level:3}],level:2},{value:"Card",id:"card",children:[],level:2},{value:"Slider",id:"slider",children:[],level:2},{value:"Navegacion entre Pantallas",id:"navegacion-entre-pantallas",children:[{value:"Crear Route",id:"crear-route",children:[],level:3}],level:2},{value:"MaterialApp",id:"materialapp",children:[{value:"debugShowCheckedModeBanner",id:"debugshowcheckedmodebanner",children:[],level:3},{value:"title",id:"title",children:[],level:3},{value:"initialRoute",id:"initialroute",children:[],level:3},{value:"routes",id:"routes",children:[],level:3},{value:"onGenerateRoute",id:"ongenerateroute",children:[],level:3}],level:2},{value:"Divider",id:"divider",children:[],level:2},{value:"Buenas practicas",id:"buenas-practicas",children:[{value:"Imports",id:"imports",children:[],level:3}],level:2},{value:"Utils",id:"utils",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flutter"},"Flutter"),(0,r.kt)("h2",{id:"instalacion"},"Instalacion"),(0,r.kt)("h2",{id:"stateless-vs-statefull"},"Stateless vs Statefull"),(0,r.kt)("h2",{id:"listview"},"ListView"),(0,r.kt)("p",null,"Basicamente este componente es una lista que nos permite tener rows o distintos campos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Scaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar')\n    );\n    body: ListView(\n        children: const [\n            Text('Item1'),\n            Text('Item2'),\n            Text('Item3'),\n            Text('Item4'),\n            Text('Item5'),\n            Text('Item6'),\n        ]\n    )\n)\n")),(0,r.kt)("h3",{id:"listtiles"},"ListTiles"),(0,r.kt)("p",null,"Son los campos de una listView de una forma mas estilizada"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Scaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView(\n        children: const [\n            ListTile(\n                title: Text('Item1'),\n                leading: Icon(Icon.insert_emoticon),\n            ),\n            ListTile(\n                title: Text('Item2'),\n                leading: Icon(Icon.insert_emoticon),\n            ),\n        ]\n    )\n);\n")),(0,r.kt)("p",null,"Podemos recorrer un arreglo y crear un ListTiles por cada elemento dentro del arreglo\nSin ListTile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final options = const['item1', 'item2', 'item3']\nScaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView(\n        children: [...options.map((item) => Text(item)).toList()]\n    )\n);\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"El operador ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," o tambien conocido como"))),(0,r.kt)("p",null,"Con ListTiles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final options = const['item1', 'item2', 'item3']\nScaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView(\n        children: [...options.map((item) => ListTile(\n            title: Text(item),\n            trailing: const Icon(Icons.arrow_forward_ios),\n        )).toList()\n        ],\n    )\n);\n")),(0,r.kt)("p",null,"Tiene el metodo ",(0,r.kt)("inlineCode",{parentName:"p"},"onTap:")," para agregarle una funcionalidad al darle tap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final options = const['item1', 'item2', 'item3']\nScaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView(\n        children: [...options.map((item) => ListTile(\n            title: Text(item),\n            trailing: const Icon(Icons.arrow_forward_ios),\n            onTap: (){print('Hola');}\n        )).toList()\n        ],\n    )\n);\n")),(0,r.kt)("h3",{id:"constructores"},"Constructores"),(0,r.kt)("p",null,"ListView tiene 2 constructores interesantes ",(0,r.kt)("inlineCode",{parentName:"p"},"ListView.separated")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"ListView.builder"),". El\nprimero crea cada elemento de la ListView con un separador mientras que el segundo hace lo mismo\nque el primero pero no tiene el parametro para agregar el separador."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Usando estos constructores nos ahorramos recorrer el array de elementos"))),(0,r.kt)("p",null,"Usando el constructor ",(0,r.kt)("inlineCode",{parentName:"p"},"ListView.separated")," sin listTile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final options = const['item1', 'item2', 'item3']\nScaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView.separated(\n      itemBuilder: (context, index) => Text(options[index]),\n      separatorBuilder: (_, __) => const Divider(), \n      itemCount: options.length\n      ),\n);\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Cuando no estamos utilizando las variables podemos usar ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," para decir que esa variable no se usa\ny para el segundo parametro ",(0,r.kt)("inlineCode",{parentName:"p"},"__"),"."))),(0,r.kt)("p",null,"Usando el constructor ",(0,r.kt)("inlineCode",{parentName:"p"},"ListView.separated")," con listTile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final options = const['item1', 'item2', 'item3']\nScaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView.separated(\n      itemBuilder: (context, index) => ListTile(\n        title: Text(options[index]),\n        trailing: const Icon(Icons.arrow_forward_ios)\n      ),\n      separatorBuilder: (_, __) => const Divider(), \n      itemCount: options.length\n      ),\n);\n\n")),(0,r.kt)("p",null,"Esto mismo tambien lo podemos hacer utilizando el Widget Column, la diferencia es que el codigo\nse hace muy grande"),(0,r.kt)("p",null,"Sin ListTile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final options = const['item1', 'item2', 'item3']\nScaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView(\n      children: [...options.map((item)=> Column(\n        children: [Text(item), const Divider()]\n      )).toList()\n      ],\n\n    )\n);\n\n")),(0,r.kt)("p",null,"Con ListTile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final options = const['item1', 'item2', 'item3']\nScaffold(\n    appBar: AppBar(\n        title: const Text('Texto del appbar'),\n    ),\n    body: ListView(\n      children: [...options.map((item)=> Column(\n        children: [\n          ListTile(\n            title: Text(item),\n            trailing: const Icon(Icons.arrow_forward_ios),\n          ), \n          const Divider()\n          ]\n      )).toList()\n      ],\n\n    )\n);\n\n")),(0,r.kt)("p",null,"Usando el constructor ",(0,r.kt)("inlineCode",{parentName:"p"},"ListView.builder")," sin listTile:"),(0,r.kt)("p",null,"PENDIENTE"),(0,r.kt)("h2",{id:"card"},"Card"),(0,r.kt)("p",null,"PENDIENTE"),(0,r.kt)("h2",{id:"slider"},"Slider"),(0,r.kt)("p",null,"PENDIENTE"),(0,r.kt)("h2",{id:"navegacion-entre-pantallas"},"Navegacion entre Pantallas"),(0,r.kt)("p",null,"Usamos la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.push()")," el cual recibe dos parametros ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,r.kt)("h3",{id:"crear-route"},"Crear Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nfinal route = MaterialPageRoute(\n    builder: (context) => const ListInterface();\n);\nNavigator.push(context, route);\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Con el metodo ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," obtenemos una navegacion y obtenemos un icono back screen"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nfinal route = MaterialPageRoute(\n    builder: (context) => const ListInterface();\n);\nNavigator.pushReplacement(context, route);\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Con el metodo ",(0,r.kt)("inlineCode",{parentName:"p"},"pushReplacement")," no obtenemos una navegacion, por ende no tenemos back screen.\nEste metodo es util cuando queremos implementar un login."))),(0,r.kt)("p",null,"Con el siguiente comando podemos renderizar las paginas que definimos en el ",(0,r.kt)("inlineCode",{parentName:"p"},"main.dart"),"\nen el objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"routes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Navigator.pushNamed(context, 'home');\n")),(0,r.kt)("h2",{id:"materialapp"},"MaterialApp"),(0,r.kt)("h3",{id:"debugshowcheckedmodebanner"},"debugShowCheckedModeBanner"),(0,r.kt)("h3",{id:"title"},"title"),(0,r.kt)("h3",{id:"initialroute"},"initialRoute"),(0,r.kt)("h3",{id:"routes"},"routes"),(0,r.kt)("h3",{id:"ongenerateroute"},"onGenerateRoute"),(0,r.kt)("h2",{id:"divider"},"Divider"),(0,r.kt)("p",null,"Podemos usar el componente divider lo que es un equivalente a un ",(0,r.kt)("inlineCode",{parentName:"p"},"<hr>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Divider();\n")),(0,r.kt)("h2",{id:"buenas-practicas"},"Buenas practicas"),(0,r.kt)("h3",{id:"imports"},"Imports"),(0,r.kt)("p",null,"Para evitar tener multiples imports en el archivo main que es al final donde queremos renderizar\nnuestras pantallas podemos hacer lo siguiente"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='./lib/screens/screens.dart'",title:"'./lib/screens/screens.dart'"},"export 'package:flutter_project/screens/listview.dart';\nexport 'package:flutter_project/screens/card_interface.dart';\nexport 'package:flutter_project/screens/slider_interface.dart';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='./lib/main.dart'",title:"'./lib/main.dart'"},"import 'package:flutter/material.dart';\nimport 'screens/screens.dart';\nvoid main() => runApp(const MyApp());\n")),(0,r.kt)("h2",{id:"utils"},"Utils"),(0,r.kt)("p",null,"Podemos usar una extension de ",(0,r.kt)("inlineCode",{parentName:"p"},"vs code")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Awesome flutter snipets")))}m.isMDXComponent=!0}}]);