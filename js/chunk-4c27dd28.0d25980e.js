(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c27dd28"],{"0a49":function(e,t,r){var n=r("9b43"),i=r("626a"),a=r("4bf8"),s=r("9def"),o=r("cd1c");e.exports=function(e,t){var r=1==e,u=2==e,d=3==e,c=4==e,l=6==e,f=5==e||l,m=t||o;return function(t,o,g){for(var v,b,p=a(t),h=i(p),A=n(o,g,3),y=s(h.length),k=0,S=r?m(t,y):u?m(t,0):void 0;y>k;k++)if((f||k in h)&&(v=h[k],b=A(v,k,p),e))if(r)S[k]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return k;case 2:S.push(v)}else if(c)return!1;return l?-1:d||c?c:S}}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"504c":function(e,t,r){var n=r("0d58"),i=r("6821"),a=r("52a7").f;e.exports=function(e){return function(t){var r,s=i(t),o=n(s),u=o.length,d=0,c=[];while(u>d)a.call(s,r=o[d++])&&c.push(e?[r,s[r]]:s[r]);return c}}},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"6b54":function(e,t,r){"use strict";r("3846");var n=r("cb7c"),i=r("0bfb"),a=r("9e1e"),s="toString",o=/./[s],u=function(e){r("2aba")(RegExp.prototype,s,e,!0)};r("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?u(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?i.call(e):void 0)}):o.name!=s&&u(function(){return o.call(this)})},7514:function(e,t,r){"use strict";var n=r("5ca1"),i=r("0a49")(5),a="find",s=!0;a in[]&&Array(1)[a](function(){s=!1}),n(n.P+n.F*s,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(a)},bd76:function(e,t,r){"use strict";var n=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik Dávid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"Enéas Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tadeáš",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold Gáspár",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius René",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Paĉjo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto Šimun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyněk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"Félix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}];t["a"]=n},eeca:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12",lg:"6"}},[r("b-card",{attrs:{"no-header":""}},[r("template",{slot:"header"},[e._v("\n        User id:  "+e._s(e.$route.params.id)+"\n      ")]),r("b-table",{attrs:{striped:"",small:"",fixed:"",responsive:"sm",items:e.items(e.$route.params.id),fields:e.fields},scopedSlots:e._u([{key:"value",fn:function(t){return[r("strong",[e._v(e._s(t.item.value))])]}}])}),r("template",{slot:"footer"},[r("b-button",{on:{click:e.goBack}},[e._v("Back")])],1)],2)],1)],1)},i=[];function a(e){if(Array.isArray(e))return e}function s(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0)if(r.push(s.value),t&&r.length===t)break}catch(u){i=!0,a=u}finally{try{n||null==o["return"]||o["return"]()}finally{if(i)throw a}}return r}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){return a(e)||s(e,t)||o()}r("ac6a"),r("ffc1"),r("6b54"),r("7514");var d=r("bd76"),c={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{items:function(e){var t=d["a"].find(function(t){return t.id.toString()===e}),r=t?Object.entries(t):[["id","Not found"]];return r.map(function(e){var t=u(e,2),r=t[0],n=t[1];return{key:r,value:n}})},fields:[{key:"key"},{key:"value"}]}},methods:{goBack:function(){this.$router.go(-1)}}},l=c,f=r("2877"),m=Object(f["a"])(l,n,i,!1,null,null,null);m.options.__file="User.vue";t["default"]=m.exports},ffc1:function(e,t,r){var n=r("5ca1"),i=r("504c")(!0);n(n.S,"Object",{entries:function(e){return i(e)}})}}]);
//# sourceMappingURL=chunk-4c27dd28.0d25980e.js.map