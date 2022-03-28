"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[709],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,k=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?t.createElement(k,r(r({ref:a},u),{},{components:n})):t.createElement(k,r({ref:a},u))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},766:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:5},l="Introduccion",d={unversionedId:"db/data-architect",id:"db/data-architect",title:"Introduccion",description:"Muchas mas empresas empiezan a tener decisiones basadas en datos",source:"@site/docs/db/data-architect.md",sourceDirName:"db",slug:"/db/data-architect",permalink:"/docs/db/data-architect",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/db/data-architect.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data Lakes!",permalink:"/docs/db/data-lakes"},next:{title:"Cloud Practitioner!",permalink:"/docs/aws/cloud-practitioner"}},u=[{value:"StakeHolders",id:"stakeholders",children:[],level:2},{value:"Cuando no usarla",id:"cuando-no-usarla",children:[],level:2},{value:"Cuando usarla",id:"cuando-usarla",children:[],level:2},{value:"Historia",id:"historia",children:[],level:2},{value:"Que hace un arquitecto de datos?",id:"que-hace-un-arquitecto-de-datos",children:[],level:2},{value:"Caracteristicas",id:"caracteristicas",children:[],level:2},{value:"Soluciones",id:"soluciones",children:[{value:"Integridad de los datos",id:"integridad-de-los-datos",children:[],level:3},{value:"Governancia de los datos",id:"governancia-de-los-datos",children:[],level:3},{value:"Escalabilidad",id:"escalabilidad",children:[],level:3},{value:"Flexibilidad",id:"flexibilidad",children:[],level:3}],level:2},{value:"Requerimientos funcionales y de negocio",id:"requerimientos-funcionales-y-de-negocio",children:[],level:2}],c={toc:u};function p(e){var a=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduccion"},"Introduccion"),(0,i.kt)("p",null,"Muchas mas empresas empiezan a tener decisiones basadas en datos\npor ende las empresas empiezan a tener mas y mas datos los cuales\nen muchos casos estan en una forma desorganizada. "),(0,i.kt)("p",null,"Aqui es donde juega un papel importante los arquitectos de datos\nya que son los encargados de organizar y crear estructuras a esa\ncantidad de datos desorganizados. Con la intencion de que dicha\ninformacion aporte la informacion que deberia aportar."),(0,i.kt)("p",null,"Los arquitectos de datos buscan resolver los problemas de cada una\nde las diferentes areas de la empresa de manera eficiente y unica\ncumpliendo cada una de sus necesidades."),(0,i.kt)("h2",{id:"stakeholders"},"StakeHolders"),(0,i.kt)("p",null,"Es una persona o grupo de personas interesadas en las necesidades\ndel negocio o cualquier due\xf1o de algun producto o servicio que sea\nimportante para la empresa."),(0,i.kt)("p",null,"Los arquitectos de datos son unos facilitadores o solucionadores\nde problemas para los stakeholders. Ademas que trabajan juntos."),(0,i.kt)("h2",{id:"cuando-no-usarla"},"Cuando no usarla"),(0,i.kt)("p",null,"Como Arquitecto de datos tu tiempo es valioso, la arquitectura de\ndatos es importante es por esto que necesitas saber algunas banderas\nrojas que debes solucionar antes de entrar en la arquitectura de datos."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No hay un problema especifico"),(0,i.kt)("li",{parentName:"ul"},"No hay data "),(0,i.kt)("li",{parentName:"ul"},"El problema no esta alineado al negocio"),(0,i.kt)("li",{parentName:"ul"},"Proyecto con palabras de moda y que no tienen idea de que es lo que dicen")),(0,i.kt)("h2",{id:"cuando-usarla"},"Cuando usarla"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cuando tenemos problemas basados en datos "),(0,i.kt)("li",{parentName:"ul"},"Cuando el problema cambia de foco "),(0,i.kt)("li",{parentName:"ul"},"Cuando realizamos upgrades o updates en la organizacion")),(0,i.kt)("h2",{id:"historia"},"Historia"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"1970 Codd publica un paper sobre modelamiento de datos de largas entidades\nfinancieras"),(0,i.kt)("li",{parentName:"ol"},"1976 Peter Chen crea el modelo entidad relacion (ERD)"),(0,i.kt)("li",{parentName:"ol"},"1979 sale a la luz la primera base de datos empresarial (Oracle)"),(0,i.kt)("li",{parentName:"ol"},"1986 crean el SQL como estandar para las abses de datos "),(0,i.kt)("li",{parentName:"ol"},"1989 SQL server"),(0,i.kt)("li",{parentName:"ol"},"2006 Big data salio a la luz (Aws y Hadoop)")),(0,i.kt)("h2",{id:"que-hace-un-arquitecto-de-datos"},"Que hace un arquitecto de datos?"),(0,i.kt)("p",null,"Un arquitecto de datos busca crear la mejor respuesta a las siguientes\npreguntas:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Que es lo que el negocio trata de hacer?"),(0,i.kt)("li",{parentName:"ol"},"Como los datos pueden ayudar?")),(0,i.kt)("p",null,"Por ende los arquitectos de datos se centran en ambos mundos el tecnico y\nel administrativo. Somos el puente que conecta ambos mundos"),(0,i.kt)("p",null,"Para conseguir esto los arquitectos de datos hacen lo siguiente:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"entender las necesidades del negocio. La mejor bases de datos\nno son nada sino son adaptadas a las necesidades del negocio")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Luego de entender el negocio, vemos como estan las bases de datos,\nque pipelines existen, interfaces de usuarios existen")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Por ultimo dise\xf1amos soluciones que cumplen los objetivos del negocio\ncon los elementos que se dispongan"))),(0,i.kt)("h2",{id:"caracteristicas"},"Caracteristicas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Los problemas del negocio primero, centrarse en el problema no en la\ntecnologia"),(0,i.kt)("li",{parentName:"ul"},"Integridad de la informacion, que sea consistente y precisa"),(0,i.kt)("li",{parentName:"ul"},"Governancia de la informacion, seguridad y due\xf1os (quien la maneja,\nquien es el due\xf1o y quien tiene aceso a la informacion)"),(0,i.kt)("li",{parentName:"ul"},"Escalabilidad y flexibilidad, hay que planear para el futuro, crecimientos\nen usuario, crecimientos en data, posibles cambios que puede sufrir la informacion"),(0,i.kt)("li",{parentName:"ul"},"Retencion, Almancenamiento de la informacion, backups, retencion de la informacion")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Para forzar la integridad de los datos debemos:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"ingresar la informacion una sola vez."),(0,i.kt)("li",{parentName:"ul"},"utilizar id para diferenciar los elementos."),(0,i.kt)("li",{parentName:"ul"},"usar esos id en las otras tablas")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Escalibidad tiene que ver con la cantidad de carga o demanda que puede sufrir\nmi base de datos "),(0,i.kt)("p",{parentName:"div"},"Flexibilidad tiene que ver con como mi base de datos se ajusta a nuevas necesidades"))),(0,i.kt)("h2",{id:"soluciones"},"Soluciones"),(0,i.kt)("h3",{id:"integridad-de-los-datos"},"Integridad de los datos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Podemos usar id con el fin de no repetir informacion "),(0,i.kt)("li",{parentName:"ul"},"reducir la cantidad de campos que deben escribirse"),(0,i.kt)("li",{parentName:"ul"},"poner algoritmos de fuzzy matching antes de escribir en la db "),(0,i.kt)("li",{parentName:"ul"},"Reglas al momento de escribir en las tablas ")),(0,i.kt)("h3",{id:"governancia-de-los-datos"},"Governancia de los datos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Podemos usar seguridad a nivel de base de datos para controlar\nquien puede escribir o leer datos de la base de datos ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Podemos tambien usar reglas a nivel de tablas para controlar que usuarios\ntiene accesos a esas tablas con informacion sensible "))),(0,i.kt)("h3",{id:"escalabilidad"},"Escalabilidad"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Replicas de la base de datos, es decir realizar copias de la base de datos\nen diferentes servidores con y tener un balanceador de carga entre ellos\nayudara a disminuir el tiempo de lectura\na los usuarios (No disminuye el tiempo de escritura).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fragmentar la base de datos ayuda a disminuir el tiempo de escritura ya que tenemos\nmultilples writer donde podemos escribir pero aumentara nuestro tiempo de escritura\nporque debemos buscar en cada una de esas partes para encontrar el dato que queremos."))),(0,i.kt)("h3",{id:"flexibilidad"},"Flexibilidad"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"esquemas flexibles ")),(0,i.kt)("h2",{id:"requerimientos-funcionales-y-de-negocio"},"Requerimientos funcionales y de negocio"),(0,i.kt)("p",null,"Los 3 requerimientos de negocios mas comunes son:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reportes, se necesita ",(0,i.kt)("strong",{parentName:"li"},"leer")," la informacion, esta no cambia tan rapido o de manera\nfrecuente. (OLAP) Online analytical processing normalmente se usan Datawarehouse para este\ntipo de requerimiento."),(0,i.kt)("li",{parentName:"ul"},"transacionales, se ",(0,i.kt)("strong",{parentName:"li"},"agrega o actualiza")," bastante informacion. (OLTP)\no Online transaction Processing esta dise\xf1ado para esto, normalmente se usan bases de datos"),(0,i.kt)("li",{parentName:"ul"},"computacionales, la data es dise\xf1ada para facilitar computaciones pesadas")),(0,i.kt)("p",null,"Para saber que sistema debemos implementar OLAP VS OLTP nos realizamos la siguiente pregunta "),(0,i.kt)("p",null,"Que tan rapido necesito que la informacion se refresque?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si es una semana, cada dia o cada mes puedo usar OLAP"),(0,i.kt)("li",{parentName:"ul"},"Si necesito que la informacion se refesque rapido OLTP")))}p.isMDXComponent=!0}}]);