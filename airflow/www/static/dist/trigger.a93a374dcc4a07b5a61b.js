/*! For license information please see trigger.a93a374dcc4a07b5a61b.js.LICENSE.txt */
!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.Airflow=o():(e.Airflow=e.Airflow||{},e.Airflow.trigger=o())}(self,(()=>(()=>{const e=document.getElementById("json"),o=window.innerHeight-450,t=o>300?o:300;return CodeMirror.fromTextArea(e,{lineNumbers:!0,mode:{name:"javascript",json:!0},gutters:["CodeMirror-lint-markers"],lint:!0}).setSize(null,t),{}})()));