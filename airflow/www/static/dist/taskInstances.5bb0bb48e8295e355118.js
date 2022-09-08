/*! For license information please see taskInstances.5bb0bb48e8295e355118.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Airflow=t():(e.Airflow=e.Airflow||{},e.Airflow.taskInstances=t())}(self,(()=>(()=>{"use strict";var e={4965:(e,t,a)=>{a.d(t,{dagTZ:()=>d});var n=a(2207),o=a(1068);$(window).on("load",(function(){$(`a[href*="${this.location.pathname}"]`).parent().addClass("active"),$(".never_active").removeClass("active")}));const r=(0,n.au)("dag_id"),d=(0,n.au)("dag_timezone"),i=(0,n.au)("logs_with_metadata_url"),s=(0,n.au)("external_log_url"),l=(0,n.au)("extra_links_url"),m=(0,n.au)("paused_url"),c={createAfter:(0,n.au)("next_dagrun_create_after"),intervalStart:(0,n.au)("next_dagrun_data_interval_start"),intervalEnd:(0,n.au)("next_dagrun_data_interval_end")};let p,_="",u="",f="",g="",h=[];const x="True"===(0,n.au)("show_external_log_redirect"),b=Array.from(document.querySelectorAll('a[id^="btn_"][data-base-url]')).reduce(((e,t)=>(e[t.id.replace("btn_","")]=t,e)),{});function v(e,t){let a=e.dataset.baseUrl;t.dag_id&&-1!==e.dataset.baseUrl.indexOf(r)&&(a=a.replace(r,t.dag_id),delete t.dag_id),Object.prototype.hasOwnProperty.call(t,"map_index")&&void 0===t.map_index&&delete t.map_index,e.setAttribute("href",`${a}?${$.param(t)}`)}function w(){v(b.subdag,{dag_id:f,execution_date:u}),v(b.task,{dag_id:r,task_id:_,execution_date:u,map_index:p}),v(b.rendered,{dag_id:r,task_id:_,execution_date:u,map_index:p}),v(b.mapped,{_flt_3_dag_id:r,_flt_3_task_id:_,_flt_3_run_id:g,_oc_TaskInstanceModelView:"map_index"}),b.rendered_k8s&&v(b.rendered_k8s,{dag_id:r,task_id:_,execution_date:u,map_index:p});const e={_flt_3_dag_id:r,_flt_3_task_id:_,_oc_TaskInstanceModelView:"dag_run.execution_date"};p>=0&&(e._flt_0_map_index=p),v(b.ti,e),v(b.log,{dag_id:r,task_id:_,execution_date:u,map_index:p}),v(b.xcom,{dag_id:r,task_id:_,execution_date:u,map_index:p})}function k({taskId:e,executionDate:t,extraLinks:a,tryNumber:n,isSubDag:d,dagRunId:m,mapIndex:c,isMapped:b=!1,mappedStates:v=[]}){_=e;const k=String(window.location);if($("#btn_filter").on("click",(()=>{window.location=function(e,t,a){const n=new RegExp(`([?&])${t}=.*?(&|$)`,"i"),o=-1!==e.indexOf("?")?"&":"?";return e.match(n)?e.replace(n,`$1${t}=${a}$2`):`${e}${o}${t}=${a}`}(k,"root",_)})),u=t,g=m,p=c,b&&(h=v),$("#dag_run_id").text(m),$("#task_id").text(e),$("#execution_date").text((0,o.o0)(t)),$("#taskInstanceModal").modal({}),$("#taskInstanceModal").css("margin-top","0"),$("#extra_links").prev("hr").hide(),$("#extra_links").empty().hide(),c>=0?($("#modal_map_index").show(),$("#modal_map_index .value").text(c)):($("#modal_map_index").hide(),$("#modal_map_index .value").text("")),d?($("#div_btn_subdag").show(),f=`${r}.${e}`):($("#div_btn_subdag").hide(),f=void 0),c>=0&&!h.length)$("#modal_map_index").show(),$("#modal_map_index .value").text(c),$("#mapped_dropdown").hide();else if(c>=0||b){$("#modal_map_index").show(),$("#modal_map_index .value").text(""),$("#mapped_dropdown").show();const e=p>-1?p:`All  ${h.length} Mapped Instances`;$("#mapped_dropdown #dropdown-label").text(e),$("#mapped_dropdown .dropdown-menu").empty(),$("#mapped_dropdown .dropdown-menu").append(`<li><a href="#" class="map_index_item" data-mapIndex="all">All ${h.length} Mapped Instances</a></li>`),h.forEach(((e,t)=>{$("#mapped_dropdown .dropdown-menu").append(`<li><a href="#" class="map_index_item" data-mapIndex="${t}">${t} - ${e}</a></li>`)}))}else $("#modal_map_index").hide(),$("#modal_map_index .value").text(""),$("#mapped_dropdown").hide();b?($("#task_actions").text(`Task Actions for all ${v.length} instances`),$("#btn_mapped").show(),$("#mapped_dropdown").css("display","inline-block"),$("#btn_rendered").hide(),$("#btn_xcom").hide(),$("#btn_log").hide(),$("#btn_task").hide()):($("#task_actions").text("Task Actions"),$("#btn_rendered").show(),$("#btn_xcom").show(),$("#btn_log").show(),$("#btn_mapped").hide(),$("#btn_task").show()),$("#dag_dl_logs").hide(),$("#dag_redir_logs").hide(),n>0&&!b&&($("#dag_dl_logs").show(),x&&$("#dag_redir_logs").show()),w(),$("#try_index > li").remove(),$("#redir_log_try_index > li").remove();const y=n>2?0:1,T=new URLSearchParams({dag_id:r,task_id:_,execution_date:u,metadata:"null"});void 0!==c&&T.set("map_index",c);for(let e=y;e<n;e+=1){let t=e;0!==e?T.set("try_number",e):t="All",$("#try_index").append(`<li role="presentation" style="display:inline">\n      <a href="${i}?${T}&format=file"> ${t} </a>\n      </li>`),(0!==e||x)&&$("#redir_log_try_index").append(`<li role="presentation" style="display:inline">\n      <a href="${s}?${T}"> ${t} </a>\n      </li>`)}if(T.delete("try_number"),a&&a.length>0){const e=[];a.sort(),$.each(a,((t,a)=>{T.set("link_name",a);const n=$('<a href="#" class="btn btn-primary disabled"></a>'),o=$('<span class="tool-tip" data-toggle="tooltip" style="padding-right: 2px; padding-left: 3px" data-placement="top" title="link not yet available"></span>');o.append(n),n.text(a),$.ajax({url:`${l}?${T}`,cache:!1,success(e){n.attr("href",e.url),/^(?:[a-z]+:)?\/\//.test(e.url)&&n.attr("target","_blank"),n.removeClass("disabled"),o.tooltip("disable")},error(e){o.tooltip("hide").attr("title",e.responseJSON.error).tooltip("fixTitle")}}),e.push(o)}));const t=$("#extra_links");t.prev("hr").show(),t.append(e).show(),t.find('[data-toggle="tooltip"]').tooltip()}}document.addEventListener("click",(e=>{e.target.matches('button[data-toggle="button"]')&&w()})),$(document).on("click",".map_index_item",(function(){const e=$(this).attr("data-mapIndex");k("all"===e?{taskId:_,executionDate:u,dagRunId:g,mapIndex:-1,isMapped:!0,mappedStates:h}:{taskId:_,executionDate:u,dagRunId:g,mapIndex:e})})),$("form[data-action]").on("submit",(function(e){e.preventDefault();const t=$(this).get(0);(g||u)&&(t.dag_run_id&&(t.dag_run_id.value=g),t.execution_date&&(t.execution_date.value=u),t.origin.value=window.location,t.task_id&&(t.task_id.value=_),t.map_index&&p>=0?t.map_index.value=p:t.map_index&&t.map_index.remove(),t.action=$(this).data("action"),t.submit())})),$("#pause_resume").on("change",(function(){const e=$(this),t=e.data("dag-id"),a=e.is(":checked"),n=`${m}?is_paused=${a}&dag_id=${encodeURIComponent(t)}`;e.trigger("blur"),e.removeClass("switch-input--error");const o=new CustomEvent("paused",{detail:a});document.dispatchEvent(o),$.post(n).fail((()=>{setTimeout((()=>{e.prop("checked",!a),e.addClass("switch-input--error"),o.value=!a,document.dispatchEvent(o)}),500)}))})),$("#next-run").on("mouseover",(()=>{$("#next-run").attr("data-original-title",(()=>{let e="";return c.createAfter&&(e+=`<strong>Run After:</strong> ${(0,o.o0)(c.createAfter)}<br>`,e+=`Next Run: ${(0,o.K5)(c.createAfter)}<br><br>`),c.intervalStart&&c.intervalEnd&&(e+="<strong>Data Interval</strong><br>",e+=`Start: ${(0,o.o0)(c.intervalStart)}<br>`,e+=`End: ${(0,o.o0)(c.intervalEnd)}`),e}))}))},1068:(e,t,a)=>{a.d(t,{$O:()=>i,K5:()=>p,M1:()=>s,n0:()=>l,o0:()=>m,oY:()=>c,sK:()=>n,z6:()=>d});const n="YYYY-MM-DD, HH:mm:ss",o="YYYY-MM-DD, HH:mm:ss z",r="z (Z)",d="YYYY-MM-DDThh:mm:ssTZD",i="timezone";function s(e){return e instanceof moment?e.isUTC()?"UTC":e.format(r):"UTC"===e?e:moment().tz(e).format(r)}function l(e,t){const a=moment(e),o=$.extend({title:!0},t).title,r=document.createElement("time");return r.setAttribute("datetime",a.format()),o&&r.setAttribute("title",a.isUTC()?"":`UTC: ${a.clone().utc().format()}`),r.innerText=a.format(n),r}const m=e=>moment(e).format(o);function c(e){moment.tz.setDefault(e),$('time[data-datetime-convert!="false"]').each(((e,t)=>{const a=$(t),r=moment(a.attr("datetime"));r._isValid&&a.text(r.format(a.data("with-tz")?o:n)),void 0!==a.attr("title")&&a.attr("title",r.isUTC()?"":`UTC: ${r.clone().utc().format()}`)})),$(".datetime input").each(((e,t)=>{t.value=moment(t.value).format()}))}const p=e=>`${moment(e).fromNow()}`},5122:(e,t,a)=>{a.d(t,{escapeHtml:()=>i});var n=a(1068);function o(){const e=moment();$("#clock").attr("datetime",e.format(n.z6)).html(`${e.format("HH:mm")} <strong>${(0,n.M1)(e)}</strong>`)}function r(e){localStorage.setItem("selected-timezone",e);const t=new CustomEvent(n.$O,{detail:e});document.dispatchEvent(t),(0,n.oY)(e),o(),$("body").trigger({type:"airflow.timezone-change",timezone:e})}window.isoDateToTimeEl=n.n0,window.moment=Airflow.moment;const d=document.createElement("span");function i(e){return d.textContent=e,d.innerHTML}window.escapeHtml=i,window.convertSecsToHumanReadable=function(e){const t=e,a=t-Math.floor(t);e=Math.floor(e);const n=Math.floor(e/3600);e-=3600*n;const o=Math.floor(e/60);let r="";return n>0&&(r+=`${n}Hours `),o>0&&(r+=`${o}Min `),(e-=60*o)+a>0&&(Math.floor(t)===t?r+=`${e}Sec`:r+=`${(e+=a).toFixed(3)}Sec`),r},window.postAsForm=function(e,t){const a=$("<form></form>");a.attr("method","POST"),a.attr("action",e),$.each(t||{},((e,t)=>{const n=$("<input></input>");n.attr("type","hidden"),n.attr("name",e),n.attr("value",t),a.append(n)}));const n=$("<input></input>");n.attr("type","hidden"),n.attr("name","csrf_token"),n.attr("value",csrfToken),a.append(n),$(document.body).append(a),a.submit()},$(document).ready((()=>{!function(){const e=moment.tz.guess(),t=localStorage.getItem("selected-timezone"),a=localStorage.getItem("chosen-timezone");function o(t){localStorage.setItem("chosen-timezone",t),t!==e||t!==Airflow.serverTimezone?($("#timezone-manual a").data("timezone",t).text((0,n.M1)(t)),$("#timezone-manual").show()):$("#timezone-manual").hide()}a&&o(a),r(t||Airflow.defaultUITimezone),"UTC"!==Airflow.serverTimezone&&($("#timezone-server a").html(`${(0,n.M1)(Airflow.serverTimezone)} <span class="label label-primary">Server</span>`),$("#timezone-server").show()),Airflow.serverTimezone!==e?$("#timezone-local a").attr("data-timezone",e).html(`${(0,n.M1)(e)} <span class="label label-info">Local</span>`):$("#timezone-local").hide(),$("a[data-timezone]").click((e=>{r($(e.currentTarget).data("timezone"))})),$("#timezone-other").typeahead({source:$(moment.tz.names().map((e=>({category:e.split("/",1)[0],name:e.replace("_"," "),tzName:e})))),showHintOnFocus:"all",showCategoryHeader:!0,items:"all",afterSelect(e){this.$element.val(""),o(e.tzName),r(e.tzName),setTimeout((()=>{document.activeElement.blur(),this.shown=!1,this.focused=!1}),1)}})}(),$("#clock").attr("data-original-title",hostName).attr("data-placement","bottom").parent().show(),o(),setInterval(o,1e3),$.ajaxSetup({beforeSend(e,t){/^(GET|HEAD|OPTIONS|TRACE)$/i.test(t.type)||this.crossDomain||e.setRequestHeader("X-CSRFToken",csrfToken)}}),$.fn.datetimepicker.defaults.format="YYYY-MM-DD HH:mm:ssZ",$.fn.datetimepicker.defaults.sideBySide=!0,$(".datetimepicker").datetimepicker(),$("#filter_form a.filter").click((()=>{$(".datetimepicker").datetimepicker()})),$(".js-tooltip").tooltip()}))},2207:(e,t,a)=>{function n(e){const t=document.querySelector(`meta[name="${e}"]`);return t?t.getAttribute("content"):null}a.d(t,{Z2:()=>o,au:()=>n});const o=()=>new Map([["success",0],["failed",0],["upstream_failed",0],["up_for_retry",0],["up_for_reschedule",0],["running",0],["deferred",0],["sensing",0],["queued",0],["scheduled",0],["skipped",0],["no_status",0]])}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{a.r(n),a.d(n,{default:()=>i,taskNoInstanceTooltip:()=>s});var e=a(5122),t=a(1068),o=a(4965),r=a(2207);function d(e,a){const n=a&&a instanceof moment&&a.isValid();return`Started: ${e.format(t.sK)}<br>Ended: ${n?a.format(t.sK):"Not ended yet"}<br>`}function i(a,{includeTryNumber:n=!1}={}){let i="";if(void 0!==a.state&&(i+=`<strong>Status:</strong> ${(0,e.escapeHtml)(a.state)}<br><br>`),a.mapped_states){const t=(0,r.Z2)();a.mapped_states.forEach((e=>{const a=e||"no_status";t.has(a)&&t.set(a,t.get(a)+1)})),i+=`<strong>${(0,e.escapeHtml)(a.mapped_states.length)} ${1===a.mapped_states.length?"Task":"Tasks"} Mapped</strong><br />`,t.forEach(((t,a)=>{t>0&&(i+=`<span style="margin-left: 15px">${(0,e.escapeHtml)(a)}: ${(0,e.escapeHtml)(t)}</span><br />`)})),i+="<br />"}if(void 0!==a.task_id&&(i+=`Task_id: ${(0,e.escapeHtml)(a.task_id)}<br>`),i+=`Run: ${(0,t.o0)(a.execution_date)}<br>`,void 0!==a.run_id&&(i+=`Run Id: <nobr>${(0,e.escapeHtml)(a.run_id)}</nobr><br>`),a.map_index>=0&&!a.mapped_states&&(i+=`Map Index: ${(0,e.escapeHtml)(a.map_index)}<br>`),void 0!==a.operator&&(i+=`Operator: ${(0,e.escapeHtml)(a.operator)}<br>`),"running"===a.state){const e=a.start_date instanceof moment?a.start_date:moment(a.start_date);a.duration=moment().diff(e,"second")}else if(!a.duration&&a.end_date){const e=a.start_date instanceof moment?a.start_date:moment(a.start_date),t=a.end_date instanceof moment?a.end_date:moment(a.end_date);a.duration=moment(t).diff(e,"second")}i+=`Duration: ${(0,e.escapeHtml)(convertSecsToHumanReadable(a.duration))}<br>`;const s=a.data_interval_start,l=a.data_interval_end;return s&&l&&(i+="<br><strong>Data Interval:</strong><br>",i+=`Start: ${(0,t.o0)(s)}<br>`,i+=`End: ${(0,t.o0)(l)}<br>`),n&&(i+=`Try Number: ${(0,e.escapeHtml)(a.try_number)}<br>`),i+=function(e,t,a){if(!e)return"<br><em>Not yet started</em>";const n="z (Z)",o=moment.defaultZone.name.toUpperCase(),r=moment.utc(e),i=moment.utc(t),s=a.toUpperCase();let l="<br><strong>UTC:</strong><br>";l+=d(r,i),"UTC"!==o&&(r.tz(o),l+=`<br><strong>Local: ${r.format(n)}</strong><br>`,l+=d(r,i&&i instanceof moment?i.tz(o):i));"UTC"!==s&&s!==o&&(r.tz(s),l+=`<br><strong>DAG's TZ: ${r.format(n)}</strong><br>`,l+=d(r,i&&i instanceof moment?i.tz(s):i));return l}(a.start_date,a.end_date,o.dagTZ||"UTC"),i}function s(t,a){let n="";return t&&(n+=`Task_id: ${(0,e.escapeHtml)(t)}<br>`),void 0!==a.task_type&&(n+=`Operator: ${(0,e.escapeHtml)(a.task_type)}<br>`),n+="<br><em>DAG has yet to run.</em>",n}window.tiTooltip=i,window.taskNoInstanceTooltip=s})(),n})()));