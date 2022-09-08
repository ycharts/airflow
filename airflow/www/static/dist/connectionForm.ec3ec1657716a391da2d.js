/*! For license information please see connectionForm.ec3ec1657716a391da2d.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Airflow=t():(e.Airflow=e.Airflow||{},e.Airflow.connectionForm=t())}(self,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){const t=document.querySelector(`meta[name="${e}"]`);return t?t.getAttribute("content"):null}e.r(t);const r="True"===n("rest_api_enabled"),o=n("test_url");function a(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}return $(document).ready((()=>{const e=document.getElementById("field_behaviours"),t=JSON.parse(a(e.textContent)),n=a(document.getElementById("testable_connection_types").textContent),l=document.getElementById("model_form");l&&l.setAttribute("autocomplete","off");const s=document.getElementById("conn_id").parentElement.parentElement.parentElement,i=function(){const e=new Map;return Array.from(document.querySelectorAll("[id^='extra__'")).forEach((t=>{const n=t.id.indexOf("__","extra__".length),r=t.id.substring("extra__".length,n),o=e.has(r)?e.get(r):[];o.push(t.parentElement.parentElement),e.set(r,o)})),e}(),c=$('<button id="test-connection" type="button" class="btn btn-sm btn-primary" style="margin-left: 3px; pointer-events: all">Test\n <i class="fa fa-rocket"></i></button>');function d(e){Array.from(i.values()).forEach((e=>{e.filter((e=>e.parentElement===s)).forEach((e=>s.removeChild(e)))}));var o;(i.get(e)||[]).forEach((e=>s.appendChild(e))),Array.from(document.querySelectorAll("label[data-orig-text]")).forEach((e=>{e.innerText=e.dataset.origText,delete e.dataset.origText})),Array.from(document.querySelectorAll(".form-control")).forEach((e=>{e.placeholder="",e.parentElement.parentElement.classList.remove("hide")})),(o=t[e])&&(Array.isArray(o.hidden_fields)&&o.hidden_fields.forEach((e=>{document.getElementById(e).parentElement.parentElement.classList.add("hide")})),o.relabeling&&Object.keys(o.relabeling).forEach((e=>{const t=document.querySelector(`label[for='${e}']`);t.dataset.origText=t.innerText,t.innerText=o.relabeling[e]})),o.placeholders&&Object.keys(o.placeholders).forEach((e=>{const t=o.placeholders[e];document.getElementById(e).placeholder=t}))),r&&function(e,t){const n=document.getElementById("test-connection");t.includes(e)?$(n).prop("disabled",!1).removeAttr("title"):$(n).prop("disabled",!0).attr("title","This connection type does not currently support testing via Airflow REST API.")}(e,n)}function u(e,t){const n=e?"alert-success":"alert-error";let r=$(".container .row .alert");r.length?(r.removeClass("alert-success").removeClass("alert-error"),r.addClass(n),r.text(t),r.show()):(r=$(`<div class="alert ${n}">\n<button type="button" class="close" data-dismiss="alert">×</button>\n${t}</div>`),$(".container .row").prepend(r).show())}function m(e){const t={},n={},r=$(e).serializeArray();return $.each(r,(function(){if("conn_id"===this.name)t.connection_id=this.value;else if(""!==this.value&&"port"===this.name)t[this.name]=Number(this.value);else if(""!==this.value&&"csrf_token"!==this.name)if("extra"===this.name){let e;try{e=JSON.parse(this.value)}catch(e){throw e instanceof SyntaxError&&u(!1,"Extra field value is not valid JSON."),e}Object.entries(e).forEach((([e,t])=>{n[e]=t}))}else this.name.startsWith("extra__")?(n[this.name]=this.value,n[this.name.replace(/extra__.+?__/,"")]=this.value):t[this.name]=this.value})),t.extra=JSON.stringify(n),JSON.stringify(t)}r||$(c).prop("disabled",!0).attr("title","Airflow REST APIs have been disabled. See api->auth_backends section of the Airflow configuration."),$(c).insertAfter($("form#model_form div.well.well-sm button:submit")),$("#test-connection").on("click",(e=>{e.preventDefault(),$.ajax({url:o,type:"post",contentType:"application/json",dataType:"json",data:m("form#model_form"),success(e){u(e.status,e.message)},error(e,t,n){u(!1,n)}})}));const f=document.getElementById("conn_type");$(f).on("change",(e=>{d(e.target.value)})),d(f.value)})),t})()));