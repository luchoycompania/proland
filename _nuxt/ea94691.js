(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,5],{194:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"la_ventaja_de_proland":"The Proland Advantage","productos":"Products","aplicaciones":"Applications","contacta_con_nosotros":"Contact us","espanol":"Spanish","ingles":"English"},"es":{"la_ventaja_de_proland":"La ventaja de Proland","productos":"Productos","aplicaciones":"Aplicaciones","contacta_con_nosotros":"Contáctenos","espanol":"Español","ingles":"Inglés"}}'),delete t.options._Ctor}},195:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"derechos_humanos":"Human Rights","inicio":"Home","aplicaciones":"Applications","galeria":"Gallery","contacto":"Contact","politica_de_privacidad":"Privacy Policy","consultas_de_nuevos_clientes":"New Customer Inquiries","enlaces_a_accesos_directos":"Links to shortcuts","escriba_a":"Write to"},"es":{"derechos_humanos":"Derechos humanos","politica_de_privacidad":"Política de privacidad","inicio":"Inicio","aplicaciones":"Aplicaciones","galeria":"Galería","contacto":"Contacto","consultas_de_nuevos_clientes":"Consultas de nuevos clientes","enlaces_a_accesos_directos":"Enlaces a accesos directos","escriba_a":"Escriba a"}}'),delete t.options._Ctor}},196:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"todos_los_derechos_reservados":"All rights reserved","proland_es_un_producto_de_marca_de":"Proland is a branded product of"},"es":{"todos_los_derechos_reservados":"Todos los derechos reservados","proland_es_un_producto_de_marca_de":"Proland es un producto de marca de"}}'),delete t.options._Ctor}},197:function(t,e,o){var content=o(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("257af960",content,!0,{sourceMap:!1})},198:function(t,e,o){var content=o(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("19783858",content,!0,{sourceMap:!1})},199:function(t,e,o){var content=o(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("700a9420",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";o.r(e);var n=o(0).default.extend({data:function(){return{toggleOpcionesVisible:!1}},created:function(){}}),r=(o(206),o(44)),l=o(208),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"container-fluid",style:t.toggleOpcionesVisible?"margin-bottom: 220px;":""},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-3"}),t._v(" "),n("div",{staticClass:"col-12 col-md-2 logo"},[n("NuxtLink",{attrs:{to:t.localePath("/")}},[n("img",{staticClass:"img-fluid",attrs:{src:o(203),alt:""}})])],1),t._v(" "),n("b-navbar",{staticClass:"col-8 col-md-6 navbar navbar-expand-lg navbar-light",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-toggle",{staticStyle:{background:"#2B7C24"},attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:t.toggleOpcionesVisible,callback:function(e){t.toggleOpcionesVisible=e},expression:"toggleOpcionesVisible"}},[n("b-navbar-nav",{staticClass:"navbar-nav menu"},[n("NuxtLink",{staticClass:"nav-item nav-link",staticStyle:{color:"#2B7C24"},attrs:{to:t.localePath("/ventaja")}},[t._v("\n            "+t._s(t.$t("la_ventaja_de_proland"))+"    \n        ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-item nav-link",staticStyle:{color:"#2B7C24"},attrs:{to:t.localePath("/producto")}},[t._v("\n            "+t._s(t.$t("productos"))+"\n        ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-item nav-link",staticStyle:{color:"#2B7C24"},attrs:{to:t.localePath("/aplicacion")}},[t._v("\n            "+t._s(t.$t("aplicaciones"))+"\n        ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-item nav-link",staticStyle:{color:"#2B7C24"},attrs:{to:t.localePath("/contacto")}},[t._v("\n            "+t._s(t.$t("contacta_con_nosotros"))+"\n        ")])],1)],1)],1),t._v(" "),n("div",{staticClass:"col-4 col-md-1 bandera_icono_contenedor",staticStyle:{"background-color":"white"}},[n("NuxtLink",{attrs:{title:t.$t("espanol"),to:t.switchLocalePath("es")}},[n("img",{staticClass:"bandera_icono",attrs:{src:o(204),alt:""}})]),t._v(" "),n("NuxtLink",{attrs:{title:t.$t("ingles"),to:t.switchLocalePath("en")}},[n("img",{staticClass:"bandera_icono",attrs:{src:o(205),alt:""}})])],1)],1)])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{Header:o(200).default})},201:function(t,e,o){"use strict";o.r(e);var n=o(0).default.extend({data:function(){return{fecha:new Date}},created:function(){}}),r=(o(214),o(44)),l=o(216),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("p",[o("span",{staticStyle:{opacity:"0.75"}},[t._v("© Copyright "+t._s(t.fecha.getFullYear())+" | "+t._s(t.$t("proland_es_un_producto_de_marca_de"))+" ")]),t._v(" "),o("a",{staticStyle:{color:"white"},attrs:{href:"https://www.calumetspecialty.com/"}},[t._v("Calumet Specialty Products Partners, L.P.")]),t._v("  | "),o("span",{staticStyle:{opacity:"0.75"}},[t._v(t._s(t.$t("todos_los_derechos_reservados")))])])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{Footer:o(201).default})},202:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},203:function(t,e,o){t.exports=o.p+"img/proland_logo.5585b7c.png"},204:function(t,e,o){t.exports=o.p+"img/espana_bandera.5ae42e8.png"},205:function(t,e,o){t.exports=o.p+"img/inglaterra_bandera.704ebac.png"},206:function(t,e,o){"use strict";o(197)},207:function(t,e,o){var n=o(37)(!1);n.push([t.i,"header{background:#fff;height:87px}header .bandera_icono{display:inline-block;height:18px}header .logo img{height:87px}header .menu a:hover{border-bottom:5px solid #2b7c24}header .menu a{border-bottom:5px solid transparent;margin:0 20px;font-size:18px;font-weight:495;color:#2b7c24}header .bandera_icono_contenedor{display:flex;align-content:center;align-items:center;justify-content:flex-end}header .bandera_icono{margin:0 2px}.navbar{background-color:#fff!important}@media (max-width:540px){header .bandera_icono_contenedor{display:block}header .bandera_icono{position:relative;left:25px;top:15px}header .logo img{display:block;margin:auto}header{height:140px}}",""]),t.exports=n},208:function(t,e,o){"use strict";var n=o(194),r=o.n(n);e.default=r.a},209:function(t,e,o){t.exports=o.p+"img/proland_logo2.26bc99e.png"},210:function(t,e,o){"use strict";o(198)},211:function(t,e,o){var n=o(37),r=o(202),l=o(212),c=n(!1),d=r(l);c.push([t.i,".otros{background:#fff;padding:150px 0;color:#125e0d}.otros ul li a{color:#fff}.otros p{font-size:25px}.otros .enlaces ul{list-style-image:url("+d+");margin-left:20px}.otros .logo img{height:87px;display:block;margin:auto}",""]),t.exports=c},212:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURSmPMRSOMwBhLhJ7LwZrL4UnjKYAAAAtSURBVAjXY1ACAQUGRQYjAQYFBgcGJiRKkcHJgFmBAa4EzIPKOcKUgPVBlAAA/6UGmufbRvkAAAAASUVORK5CYII="},213:function(t,e,o){"use strict";var n=o(195),r=o.n(n);e.default=r.a},214:function(t,e,o){"use strict";o(199)},215:function(t,e,o){var n=o(37)(!1);n.push([t.i,".footer{background:#125e0d;padding-top:30px;padding-bottom:15px;color:#fff;text-align:center;border-top:1px solid hsla(0,40%,98%,.384);font-weight:300}@media (max-width:540px){.footer{padding-left:10px;padding-right:10px}}",""]),t.exports=n},216:function(t,e,o){"use strict";var n=o(196),r=o.n(n);e.default=r.a},217:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-4 logo"},[e("img",{staticClass:"img-fluid",staticStyle:{width:"90%",height:"90%"},attrs:{src:o(209),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{staticStyle:{color:"rgb(18, 94, 13)"},attrs:{target:"_blank",href:"https://www.nasdaq.com/symbol/clmt/real-time"}},[t._v("NASDAQ:CLMT")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{staticStyle:{color:"rgb(18, 94, 13)"},attrs:{target:"_blank",href:"https://www.calumetspecialty.com/"}},[t._v("Calumet Specialty")])])}],r=(o(210),o(44)),l=o(213),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"otros"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-12 col-md-4 enlaces"},[o("p",[t._v(" "+t._s(t.$t("enlaces_a_accesos_directos")))]),t._v(" "),o("ul",{staticClass:"list-unstyled"},[t._m(1),t._v(" "),t._m(2),t._v(" "),o("li",[o("NuxtLink",{staticStyle:{color:"rgb(18, 94, 13)"},attrs:{to:t.localePath("/politica_privacidad")}},[t._v("\n                   "+t._s(t.$t("politica_de_privacidad"))+"\n                ")])],1),t._v(" "),o("li",[o("NuxtLink",{staticStyle:{color:"rgb(18, 94, 13)"},attrs:{to:t.localePath("/derecho_humano")}},[t._v("\n                   "+t._s(t.$t("derechos_humanos"))+"\n                ")])],1)])]),t._v(" "),o("div",{staticClass:"col-12 col-md-4"},[o("p",[t._v(t._s(t.$t("consultas_de_nuevos_clientes")))]),t._v(" "),o("ul",{staticClass:"list-unstyled"},[o("li",[t._v(t._s(t.$t("contacto"))+": "),o("svg",{staticClass:"bi bi-telephone",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}})]),t._v(" 1.809.702.7272")]),t._v(" "),o("li",[t._v(t._s(t.$t("escriba_a"))+": "),o("svg",{staticClass:"bi bi-envelope",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"}})]),t._v(" "),o("a",{staticStyle:{color:"rgb(18, 94, 13)"},attrs:{href:"mailto:gabriel@lucho.com.do"}},[t._v("gabriel@lucho.com.do")])])])])])])])}),n,!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports},221:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"derechos_humanos":"Human Rights","texto":"Calumet Specialty Products Partners, L.P. supports the goals of the California Transparency in Supply Chains Act of 2010 and the importance of human rights.","texto2":"Calumet’s actions in support of these goals are set forth below. In addition, Calumet is actively reviewing additional actions it can take to support the goal of improving human rights.","texto3":"Product Supply Chain","texto4":"Calumet perceives value in reviewing its product supply chain to evaluate and address human trafficking and slavery risks. Calumet does not currently have a formal review process. When a formal review process is implemented, Calumet expects to perform the review using internal resources.","texto5":"Supplier Audits","texto6":"Calumet reserves the right to audit our Suppliers to determine their compliance with all applicable laws, accepted business practices and important human rights. Any audits Calumet may conduct are not necessarily independent and unannounced. In the event that Calumet becomes aware of any inappropriate actions or conditions, Calumet reserves the right to demand that the Supplier take corrective measures.","texto7":"Supplier Certifications","texto8":"At this time, Calumet does not require direct Suppliers to certify that materials incorporated into their products comply with the laws regarding slavery and human trafficking of the country or countries in which they are doing business.","texto9":"Code of Business Conduct and Ethics","texto10":"Calumet’s culture is founded on integrity, honesty, and full compliance with all applicable laws. Our employees are governed by Calumet’s Code of Business Conduct and Ethics, which details the expectations that Calumet has for its employees. Calumet reserves the right to take disciplinary action, up to and including termination, of any employee who fails to comply with the Code of Business Conduct and Ethics or applicable laws.","texto11":"Employee Training","texto12":"Calumet trains its employees annually on the Calumet Code of Business Conduct and Ethics."},"es":{"derechos_humanos":"Derechos humanos","texto":"Calumet Specialty Products Partners, L.P. apoya los objetivos de la Ley de Transparencia en las Cadenas de Suministro de California de 2010 y la importancia de los derechos humanos.","texto2":"Las acciones de Calumet en apoyo de estos objetivos se establecen a continuación. Además, Calumet está revisando activamente acciones adicionales que puede tomar para apoyar el objetivo de mejorar los derechos humanos.","texto3":"Cadena de suministro de productos","texto4":"Calumet percibe valor al revisar su cadena de suministro de productos para evaluar y abordar los riesgos de trata de personas y esclavitud. Calumet no cuenta actualmente con un proceso de revisión formal. Cuando se implementa un proceso de revisión formal, Calumet espera realizar la revisión utilizando recursos internos.","texto5":"Auditorías de proveedores","texto6":"Calumet se reserva el derecho de auditar a nuestros Proveedores para determinar su cumplimiento con todas las leyes aplicables, prácticas comerciales aceptadas y derechos humanos importantes. Cualquier auditoría que Calumet pueda realizar no es necesariamente independiente y sin previo aviso. En el caso de que Calumet tenga conocimiento de acciones o condiciones inapropiadas, Calumet se reserva el derecho de exigir que el Proveedor tome medidas correctivas.","texto7":"Certificaciones de proveedores","texto8":"En este momento, Calumet no requiere que los Proveedores directos certifiquen que los materiales incorporados en sus productos cumplen con las leyes sobre esclavitud y trata de personas del país o países en los que están haciendo negocios.","texto9":"Código de conducta y ética empresarial","texto10":"La cultura de Calumet se basa en la integridad, la honestidad y el pleno cumplimiento de todas las leyes aplicables. Nuestros empleados se rigen por el Código de conducta y ética empresarial de Calumet, que detalla las expectativas que Calumet tiene para sus empleados. Calumet se reserva el derecho de tomar medidas disciplinarias, hasta e incluyendo el despido, de cualquier empleado que no cumpla con el Código de Conducta y Ética Empresarial o las leyes aplicables.","texto11":"Formación de los empleados","texto12":"Calumet capacita a sus empleados anualmente sobre el Código de Conducta y Ética Empresarial de Calumet."}}'),delete t.options._Ctor}},236:function(t,e,o){var content=o(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("398aaa6a",content,!0,{sourceMap:!1})},271:function(t,e,o){"use strict";o(236)},272:function(t,e,o){var n=o(37)(!1);n.push([t.i,".portada-derecho-humano{background-color:#041d05;background-size:100% 440px;height:440px;display:flex;align-items:center;justify-content:center}.contenido-derecho-humano{background-color:#edeff5;text-align:center;padding:30px}.linea-horizontal-derecho-humano{width:160px;height:2px;background-color:#d0d5ce;position:absolute;left:43%;top:13px}@media (max-width:540px){.linea-horizontal-derecho-humano{left:24%}}",""]),t.exports=n},273:function(t,e,o){"use strict";var n=o(221),r=o.n(n);e.default=r.a},300:function(t,e,o){"use strict";o.r(e);var n=o(0).default.extend({data:function(){return{titleHead:null,descriptionMeta:null}},created:function(){"es"==this.$i18n.locale?(this.$data.titleHead="Derechos humanos  | Proland",this.$data.descriptionMeta="Calumet Specialty Products Partners, L.P. apoya los objetivos de la Ley de Transparencia en las Cadenas de Suministro de California de 2010 y la importancia de los derechos humanos."):(this.$data.titleHead="Human Rights  | Proland",this.$data.descriptionMeta="Calumet Specialty Products Partners, L.P. supports the goals of the California Transparency in Supply Chains Act of 2010 and the importance of human rights.")},head:function(){return{title:this.$data.titleHead,meta:[{hid:"description",name:"description",content:this.$data.descriptionMeta},{charset:"utf-8"},{hid:"robots",name:"robots",content:"index"}],htmlAttrs:{lang:this.$i18n.locale}}}}),r=(o(271),o(44)),l=o(273),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cuerpo"},[o("Header"),t._v(" "),o("section",{staticClass:"portada-derecho-humano"},[o("h1",{staticStyle:{color:"white","font-size":"70px"}},[t._v(t._s(t.$t("derechos_humanos")))])]),t._v(" "),o("section",{staticClass:"contenido-derecho-humano"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12",staticStyle:{opacity:"0.5"}},[o("p",[t._v(t._s(t.$t("texto")))]),t._v(" "),o("p",[t._v(t._s(t.$t("texto2")))])])]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"linea-horizontal-derecho-humano"}),t._v(" "),t._m(0),t._v(" "),o("h3",{staticStyle:{color:"#2B7C24"}},[t._v(t._s(t.$t("texto3")))]),t._v(" "),o("p",{staticStyle:{opacity:"0.5"}},[t._v(t._s(t.$t("texto4")))])])]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"linea-horizontal-derecho-humano"}),t._v(" "),t._m(1),t._v(" "),o("h3",{staticStyle:{color:"#2B7C24"}},[t._v(t._s(t.$t("texto5")))]),t._v(" "),o("p",{staticStyle:{opacity:"0.5"}},[t._v(t._s(t.$t("texto6")))])])]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"linea-horizontal-derecho-humano"}),t._v(" "),t._m(2),t._v(" "),o("h3",{staticStyle:{color:"#2B7C24"}},[t._v(t._s(t.$t("texto7")))]),t._v(" "),o("p",{staticStyle:{opacity:"0.5"}},[t._v(t._s(t.$t("texto8")))])])]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"linea-horizontal-derecho-humano"}),t._v(" "),t._m(3),t._v(" "),o("h3",{staticStyle:{color:"#2B7C24"}},[t._v(t._s(t.$t("texto9")))]),t._v(" "),o("p",{staticStyle:{opacity:"0.5"}},[t._v(t._s(t.$t("texto10")))])])]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"linea-horizontal-derecho-humano"}),t._v(" "),t._m(4),t._v(" "),o("h3",{staticStyle:{color:"#2B7C24"}},[t._v(t._s(t.$t("texto11")))]),t._v(" "),o("p",{staticStyle:{opacity:"0.5"}},[t._v(t._s(t.$t("texto12")))])])])])]),t._v(" "),o("Otros"),t._v(" "),o("Footer")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cuadro-contador",staticStyle:{color:"white",background:"#2B7C24",width:"30px",height:"30px",display:"flex","justify-content":"center",position:"relative",margin:"auto"}},[o("p",[t._v("01")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cuadro-contador",staticStyle:{color:"white",background:"#2B7C24",width:"30px",height:"30px",display:"flex","justify-content":"center",position:"relative",margin:"auto"}},[o("p",[t._v("02")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cuadro-contador",staticStyle:{color:"white",background:"#2B7C24",width:"30px",height:"30px",display:"flex","justify-content":"center",position:"relative",margin:"auto"}},[o("p",[t._v("03")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cuadro-contador",staticStyle:{color:"white",background:"#2B7C24",width:"30px",height:"30px",display:"flex","justify-content":"center",position:"relative",margin:"auto"}},[o("p",[t._v("04")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cuadro-contador",staticStyle:{color:"white",background:"#2B7C24",width:"30px",height:"30px",display:"flex","justify-content":"center",position:"relative",margin:"auto"}},[o("p",[t._v("05")])])}],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{Header:o(200).default,Otros:o(217).default,Footer:o(201).default})}}]);