"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[966],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?t.createElement(k,o(o({ref:a},d),{},{components:n})):t.createElement(k,o({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7902:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},s="Terraform",u={unversionedId:"herramientas/terraform",id:"herramientas/terraform",title:"Terraform",description:"Traditional IT",source:"@site/docs/herramientas/terraform.md",sourceDirName:"herramientas",slug:"/herramientas/terraform",permalink:"/docs/herramientas/terraform",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/herramientas/terraform.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GIT",permalink:"/docs/herramientas/git"},next:{title:"UI y UX",permalink:"/docs/herramientas/ux"}},d=[{value:"Traditional IT",id:"traditional-it",children:[{value:"Desventajas",id:"desventajas",children:[],level:3}],level:2},{value:"Cloud",id:"cloud",children:[],level:2},{value:"Infraestructura como codigo",id:"infraestructura-como-codigo",children:[{value:"Configuration Management",id:"configuration-management",children:[],level:3},{value:"Server Templating",id:"server-templating",children:[],level:3}],level:2}],p={toc:d};function c(e){var a=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"terraform"},"Terraform"),(0,i.kt)("h2",{id:"traditional-it"},"Traditional IT"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"arquitectura tradicional",src:n(7187).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Donde el equipo de ",(0,i.kt)("inlineCode",{parentName:"li"},"business")," son los encargados de decir que nuevas acciones se\ndebe implementar."),(0,i.kt)("li",{parentName:"ul"},"El equipo de ",(0,i.kt)("inlineCode",{parentName:"li"},"business analytics")," se encarga de evaular la efectividad y rentabilidad\nde dichas ideas priorizando las mejores ideas."),(0,i.kt)("li",{parentName:"ul"},"El ",(0,i.kt)("inlineCode",{parentName:"li"},"solutions architect")," es el encargado de maquetar la idea, es decir, pensar cuantos\nservidores se van a necesitar, firewalls, cual seria la mejor clase de storage, etc."),(0,i.kt)("li",{parentName:"ul"},"El equipo de ",(0,i.kt)("inlineCode",{parentName:"li"},"procurement")," se encarga de comprar todos los elements de la lista de materiales\nque el ",(0,i.kt)("inlineCode",{parentName:"li"},"solutions architect")," necesita para implementar la idea."),(0,i.kt)("li",{parentName:"ul"},"Una vez ya se cuente con todo el ",(0,i.kt)("inlineCode",{parentName:"li"},"hardware")," este para al ",(0,i.kt)("inlineCode",{parentName:"li"},"infraestructure team")," el cual se\nencarga de montar los elementos (",(0,i.kt)("inlineCode",{parentName:"li"},"field engineers"),"), aprovisionar del software (",(0,i.kt)("inlineCode",{parentName:"li"},"system administrators"),"),\naprovisionar bases de datos, storate (",(0,i.kt)("inlineCode",{parentName:"li"},"storage admins"),"), crear los horarios de backups (",(0,i.kt)("inlineCode",{parentName:"li"},"backups admins"),")."),(0,i.kt)("li",{parentName:"ul"},"Por ultimo los ",(0,i.kt)("inlineCode",{parentName:"li"},"desarrolladores")," ya se encuentran listos para desplegar sus desarrollos en dicho hardware.")),(0,i.kt)("h3",{id:"desventajas"},"Desventajas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tiempos de espera muy elevados "),(0,i.kt)("li",{parentName:"ul"},"Costos elevados "),(0,i.kt)("li",{parentName:"ul"},"Dificultad en la automatizacion (no puedes automatizar que monten un rack o conectar cables)"),(0,i.kt)("li",{parentName:"ul"},"Errores humanos "),(0,i.kt)("li",{parentName:"ul"},"Inconsistencia en los ambientes "),(0,i.kt)("li",{parentName:"ul"},"No todos los recursos los consumes ")),(0,i.kt)("h2",{id:"cloud"},"Cloud"),(0,i.kt)("p",null,"Debido a que hemos visto las desventajas de usar el modelo anterior, la nube nos ayuda mucho ya que\nno debemos manejar todos los gastos de infraestructura o hardware (",(0,i.kt)("inlineCode",{parentName:"p"},"Capex"),") sino mas bien nos enfocamos\nen usar esos recursos que ya estan disponibles por el ",(0,i.kt)("inlineCode",{parentName:"p"},"CSP"),". Esto hace que:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nuestros tiempos se reduzcan"),(0,i.kt)("li",{parentName:"ul"},"Costos reducidos, ",(0,i.kt)("inlineCode",{parentName:"li"},"pays as you go")),(0,i.kt)("li",{parentName:"ul"},"Podemos automatizar el levantar un server nuevo (Porque el ",(0,i.kt)("inlineCode",{parentName:"li"},"CSP")," ya tiene levantado los servers y cuenta con APIS)."),(0,i.kt)("li",{parentName:"ul"},"Podamos escalar de forma horizontal o vertical sin problemas por ende ya no hay tanto desperdicio de recursos.")),(0,i.kt)("h2",{id:"infraestructura-como-codigo"},"Infraestructura como codigo"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IaC")," es la forma en la que nosotros declaramos nuestra infraestructura en forma de codigo, estos scripts los utilizamos\npara provisionar los requerimientos de hardware que se necesiten de una forma consistente y automatizada. Podemos utilizar\nherramientas para llevar esto a cabo, las dos mas usadas son:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ansible")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Terraform"))),(0,i.kt)("p",null,"Ambas tecnologias tienen sus diferencias por ende tienen diferentes casos de uso."),(0,i.kt)("p",null,"Algunas otras tecnologias para ",(0,i.kt)("inlineCode",{parentName:"p"},"IaC"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"puppet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"saltstack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cloudformation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vagrant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker"))),(0,i.kt)("p",null,"Como cada una de estas herramientas estan creadas para casos especificos podemos crear grupos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Configuration Management")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"puppet"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ansible"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"saltstack")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Server templating")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"packer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Provisioning tools")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cloudformation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"terrform"))))),(0,i.kt)("h3",{id:"configuration-management"},"Configuration Management"),(0,i.kt)("p",null,"Esto se usa para mantener infraestructura, instalar (instalar dependencias) y manejar software\n(actualizar dependencias o eliminarlas), crear scripts de backups, la idea es que si tienes que\nhacer una actualizacion de una dependencia en 100 maquinas no debas ir una por una actualizando\nsino que con un script de ",(0,i.kt)("inlineCode",{parentName:"p"},"ansible")," ejecutes todas de golpe. "),(0,i.kt)("p",null,"Asi podemos tener ",(0,i.kt)("inlineCode",{parentName:"p"},"control de versiones"),", dentro de nuestros ambientes o instancias."),(0,i.kt)("p",null,"Tambiente es ",(0,i.kt)("inlineCode",{parentName:"p"},"idempotent")," lo que quiere decir es que podemos ejecutar el codigo multiples veces\npero solo realizara los cambios necesarios para llevarlo al estado deseado."),(0,i.kt)("h3",{id:"server-templating"},"Server Templating"))}c.isMDXComponent=!0},7187:function(e,a,n){a.Z=n.p+"assets/images/traditional-it-23f7c16bffb1bdbb380410a03ebca967.png"}}]);