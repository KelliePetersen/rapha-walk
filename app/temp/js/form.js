!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}({5:function(e,t){window.onload=function(){Formio.createForm(document.getElementById("formio"),{components:[{type:"fieldset",legend:"Contact Information",components:[{type:"htmlelement",content:"We will send registration confirmation to the email address provided."},{type:"textfield",key:"fullName",label:"Full Name",placeholder:"Bob Smith",input:!0,validate:{required:!0}},{type:"email",key:"email",label:"Email",placeholder:"example@gmail.com",input:!0,validate:{required:!0}}]},{type:"fieldset",legend:"Choose Tickets",components:[{type:"htmlelement",content:"1 ticket per person. Name is required for each ticket."},{type:"number",label:"Number of Tickets",placeholder:1,input:!0,validate:{required:!0,min:1,max:9}},{type:"textfield",key:"ticket1",label:"Name on Ticket #1",placeholder:"Jane Doe",input:!0,validate:{required:!0}}]},{type:"fieldset",legend:"Payment",components:[{type:"htmlelement",content:"Choose your preferred payment method."},{type:"textfield",label:"Name on Card",placeholder:"Bob Smith",input:!0,validate:{required:!0}},{type:"textfield",label:"Card Number",placeholder:"1234-5678-9999-0000",input:!0,validate:{required:!0}},{type:"textfield",label:"Expiry Date",placeholder:"01/21",input:!0,validate:{required:!0}},{type:"textfield",label:"CVC",placeholder:"123",input:!0,validate:{required:!0}}]},{type:"button",action:"submit",label:"Submit",theme:"primary",block:!0}]})}}});