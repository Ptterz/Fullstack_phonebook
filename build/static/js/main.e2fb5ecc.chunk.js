(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),o=n(11),c=n.n(o),r=n(12),i=n(2),l=function(e){var t=e.filter,n=e.updateFilter;return u.a.createElement("div",null,"Rajaa:",u.a.createElement("input",{value:t,onChange:n}))},m=function(e){var t=e.person,n=e.deletePerson;return u.a.createElement("tr",null,u.a.createElement("td",null,t.name),u.a.createElement("td",null,t.number),u.a.createElement("td",null,u.a.createElement("button",{type:"button",onClick:n},"poista")))},s=function(e){var t=e.addNewPerson,n=e.updateNewName,a=e.updateNewNumber,o=e.newName,c=e.newNumber;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,"nimi:",u.a.createElement("input",{value:o,onChange:n})),u.a.createElement("div",null,"numero:",u.a.createElement("input",{value:c,onChange:a})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},f=n(3),d=n.n(f),p="/api/persons",v=function(){return d.a.get("".concat(p)).then(function(e){return e.data})},E=function(e){return d.a.post("".concat(p),e).then(function(e){return e.data})},b=function(e){var t="".concat(p,"/").concat(e);return d.a.delete(t).then(function(e){return e.data})},h=function(e){console.log(e);var t="".concat(p,"/").concat(e.id);return d.a.put(t,e).then(function(e){return e.data})},w=function(e){var t=e.message;return null===t?null:u.a.createElement("div",{className:t.type},t.content)},j=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),d=f[0],p=f[1],j=Object(a.useState)(""),y=Object(i.a)(j,2),N=y[0],g=y[1],O=Object(a.useState)(""),C=Object(i.a)(O,2),k=C[0],P=C[1],S=Object(a.useState)(null),T=Object(i.a)(S,2),L=T[0],F=T[1];Object(a.useEffect)(function(){v().then(function(e){o(e)})},[]);var J=n.filter(function(e){return e.name.toLowerCase().includes(k.toLowerCase())});return u.a.createElement("div",null,u.a.createElement("h1",null,"Puhelinluettelo"),u.a.createElement(w,{message:L}),u.a.createElement(l,{filter:k,updateFilter:function(e){P(e.target.value)}}),u.a.createElement("h2",null,"Lis\xe4\xe4 uusi henkil\xf6"),u.a.createElement(s,{addNewPerson:function(e){e.preventDefault();var t,a=n.find(function(e){return e.name===d}),u=Object(r.a)({},a,{number:N});void 0!==a?(t=u,window.confirm("".concat(d," on jo luettelossa. Korvataanko vanha numero uudella?"))?h(t).then(function(e){o(n.map(function(n){return n.id!==t.id?n:e})),F({content:"".concat(t.name," p\xe4ivitetty onnistuneesti"),type:"notification"}),p(""),g(""),setTimeout(function(){F(null)},5e3)}).catch(function(e){F({content:"".concat(t.name," p\xe4ivitys ep\xe4onnistui"),type:"error"}),setTimeout(function(){F(null)},5e3)}):console.log("Cancel")):function(){var e={name:d,number:N};E(e).then(function(e){o(n.concat(e)),F({content:"".concat(e.name," lis\xe4tty onnistuneesti"),type:"notification"}),p(""),g(""),setTimeout(function(){F(null)},5e3)}).catch(function(t){F({content:"".concat(e.name," lis\xe4ys ep\xe4onnistui"),type:"error"}),setTimeout(function(){F(null)},5e3)})}()},newName:d,newNumber:N,updateNewName:function(e){p(e.target.value)},updateNewNumber:function(e){g(e.target.value)}}),u.a.createElement("h2",null,"Numerot"),0===n.length?u.a.createElement("p",null,"Ladataan tietoja"):u.a.createElement("div",null,u.a.createElement("table",null,u.a.createElement("tbody",null,J.map(function(e){return u.a.createElement(m,{key:e.name,person:e,deletePerson:function(){return function(e){window.confirm("Poistetaanko ".concat(e.name,"?"))?b(e.id).then(function(t){o(n.filter(function(t){return e.id!==t.id})),F({content:"".concat(e.name," poistettu onnistuneesti"),type:"notification"}),setTimeout(function(){F(null)},5e3)}).catch(function(t){o(n.filter(function(t){return e.id!==t.id})),F({content:"".concat(e.name," on jo poistettu"),type:"error"}),setTimeout(function(){F(null)},5e3)}):console.log("Cancel")}(e)}})})))))};n(38);c.a.render(u.a.createElement(j,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e2fb5ecc.chunk.js.map