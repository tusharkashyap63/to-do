!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){var r=o(1),n=o(2);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1};r(n,a);e.exports=n.locals||{}},function(e,t,o){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),c=[];function i(e){for(var t=-1,o=0;o<c.length;o++)if(c[o].identifier===e){t=o;break}return t}function s(e,t){for(var o={},r=[],n=0;n<e.length;n++){var a=e[n],s=t.base?a[0]+t.base:a[0],l=o[s]||0,d="".concat(s," ").concat(l);o[s]=l+1;var u=i(d),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(c[u].references++,c[u].updater(m)):c.push({identifier:d,updater:v(m,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=o.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,o,r){var n=o?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var a=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function p(e,t,o){var r=o.css,n=o.media,a=o.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function v(e,t){var o,r,n;if(t.singleton){var a=g++;o=f||(f=l(t)),r=m.bind(null,o,a,!1),n=m.bind(null,o,a,!0)}else o=l(t),r=p.bind(null,o,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var o=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<o.length;r++){var n=i(o[r]);c[n].references--}for(var a=s(e,t),l=0;l<o.length;l++){var d=i(o[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}o=a}}}},function(e,t,o){(t=o(3)(!1)).push([e.i,":root{--color-primary: white;--color-accent: #5cdb95;--color-button: white;--text-color1: #05386b;--text-color2: hsl(228, 12%, 44%);--card-bg: white;--font-stack: 'Inter', sans-serif;--font-button: 'Muli', sans-serif}*{box-sizing:border-box;padding:0;margin:0}body{font-family:var(--font-stack);color:var(--text-color1);background-color:var(--color-primary);margin:auto}.logo{height:50px;width:100%;text-align:center;background-color:var(--text-color1)}.logo img{width:100%;height:100%;object-fit:contain}.appInterface{display:flex}.projectSection{display:flex;flex-direction:column;width:22%;height:100vh;background-color:var(--color-accent);color:var(--text-color1);font-weight:600;user-select:none}.projectSection ul{list-style:none}.projectSection ul li{display:flex;justify-content:center;align-items:center;justify-content:space-between;cursor:pointer;padding:0.4rem 0.5rem}.projectSection ul li #deleteProject{color:var(--text-color1)}.projectSection ul .active{background-color:#edf5e1;color:var(--text-color1)}.addProject{display:flex;justify-content:center;align-items:center;background-color:var(--color-accent);color:var(--text-color1);justify-content:space-between;padding:1rem 0.5rem 1rem 0.5rem}.addProject .addProjectButton{border:none;outline:none;background:none;cursor:pointer;background-color:var(--color-accent);color:var(--text-color1);font-weight:600;font-size:1.4rem}.projectSection #listImg{display:block;margin:auto auto 0 auto;width:90%}.modal{display:none;position:fixed;z-index:1;left:0;top:0;height:100%;width:100%;overflow:auto;animation:modalAnim 0.6s linear forwards}.modal.show{display:block}@keyframes modalAnim{0%{background-color:rgba(0,0,0,0.1)}100%{background-color:rgba(0,0,0,0.5)}}.modal-content{background-color:var(--color-primary);border-radius:8px;margin:10% auto;width:55%;box-shadow:0 5px 8px 0 rgba(0,0,0,0.2),0 7px 20px 0 rgba(0,0,0,0.17);animation:formAnim 0.6s ease-in-out forwards}.modal-content .modal-header{display:flex;justify-content:center;align-items:center;border-radius:8px 8px 0 0;justify-content:space-between;padding:1rem;background-color:var(--text-color1);color:var(--color-primary)}.modal-content .modal-header h2{font-size:2rem}.modal-content .modal-header button{border:none;outline:none;background:none;cursor:pointer;font-size:1.5rem;color:var(--color-primary)}@keyframes formAnim{0%{transform:translateX(-200%) rotate(-90deg)}50%{transform:translateX(4%) rotate(4deg)}100%{transform:translateX(0%)}}form{padding:1rem}form .form-heading{border:none;color:var(--text-color1);border-bottom:2px solid var(--text-color1);font-size:2rem;width:100%}form .form-note{border:none;color:var(--text-color1);border-bottom:2px solid var(--text-color1);font-size:1.2rem;width:100%;margin:2rem 0 0 0}form .form-heading:focus,form .form-note:focus{border:none;border-bottom:2px solid var(--color-accent);outline:none}form button{border:none;outline:none;background:none;cursor:pointer;font-family:var(--font-button);margin:2rem 0 0 0;padding:0.7rem 1.7rem;font-size:1.2rem;color:var(--color-primary);background:var(--text-color1);border-radius:12px;box-shadow:0 6px 30px -10px #4a74c9}form .error-msg{margin-left:0.5rem;font-size:1.2rem;display:inline;color:#dc3545}main{display:flex;justify-content:space-between;width:78%;clear:right;padding:0 1rem}main section{width:33.33333%;padding:1rem}main .section-head{display:flex;justify-content:center;align-items:center;justify-content:space-between;font-size:1.2rem}main .section-head button{border:none;outline:none;background:none;cursor:pointer;border-radius:20px;padding:0.3rem 0.7rem;font-family:var(--font-button);background-color:var(--text-color1);box-shadow:0 6px 30px -10px #4a74c9;color:var(--color-primary)}.notesContainer{display:flex;flex-direction:column}.noteCard{margin-top:1rem;border-radius:6px;background-color:var(--card-bg);box-shadow:0 2.8px 2.2px rgba(0,0,0,0.034),0 6.7px 5.3px rgba(0,0,0,0.048),0 12.5px 10px rgba(0,0,0,0.06),0 22.3px 17.9px rgba(0,0,0,0.072),0 41.8px 33.4px rgba(0,0,0,0.086),0 100px 80px rgba(0,0,0,0.12)}.noteCard .note-header{padding:0.5rem 1rem 0.5rem 1rem;display:flex;justify-content:center;align-items:center;justify-content:space-between;background-color:var(--text-color1);position:relative;border-radius:6px 6px 0 0;color:var(--color-accent)}.noteCard .note-header button{position:absolute;right:5px;top:0px;width:20px;height:20px;opacity:0.5}.noteCard .note-header button:hover{opacity:1}.noteCard .note-header button:before,.noteCard .note-header button:after{position:absolute;left:3px;content:' ';height:20px;width:2px;background-color:var(--color-accent)}.noteCard .note-header button:before{transform:rotate(45deg)}.noteCard .note-header button:after{transform:rotate(-45deg)}.noteCard p{padding:0.75rem 1rem;color:var(--text-color1)}.noteCard button{outline:none;cursor:pointer;border:none;margin:0 0 0.75rem 0.75rem;background-color:var(--text-color1);color:var(--color-primary);font-family:var(--font-button);padding:0.65rem;border-radius:6px}\n",""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var n=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[o].concat(a).concat([n]).join("\n")}var c,i,s;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(n[c]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&n[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),t.push(s))}},t}},function(e,t,o){"use strict";o.r(t);o(0);class r{static getModals(){return document.querySelectorAll("[data-modal]")}static openModal(e){r.getModals().forEach(t=>{e.target.getAttribute("data-add")===t.getAttribute("data-modal")&&t.classList.add("show")})}static closeModal(){r.getModals().forEach(e=>e.classList.remove("show"))}static outsideClick(e){r.getModals().forEach(t=>{e.target===t&&t.classList.remove("show")})}}class n{static removeActiveFromAllProjects(){document.querySelectorAll(".project").forEach(e=>e.classList.remove("active"))}static clearDisplay(){document.querySelectorAll(".noteCard").forEach(e=>e.remove())}static addProjectToList(e){const t=document.getElementById("projectList");n.removeActiveFromAllProjects(),n.clearDisplay();const o=document.createElement("li");o.classList.add("project","active"),o.innerHTML=e.name+'<i class="far fa-trash-alt" id="deleteProject"></i>',t.appendChild(o)}static displayInboxNotes(e){n.displayActiveProjectNotes(e)}static deleteProjectFromList(e,t){if(e.target.parentElement.classList.contains("active")){document.querySelectorAll(".project")[0].classList.add("active"),n.displayInboxNotes(t)}e.target.parentElement.remove()}static toggleActiveProject(e){n.removeActiveFromAllProjects(),e.target.classList.add("active")}static addNoteToTodoList(e){let t=document.getElementById("todoList"),o=document.createElement("div");o.classList.add("noteCard"),o.innerHTML=`<header class="note-header">\n            <h3>${e.heading}</h3>\n            <button class="trashNoteTodo"></button>\n          </header>\n          <p>${e.description}</p>\n          <button class="moveToDoneFromTodo">Move to Done</button>`,t.appendChild(o)}static addNoteToInprogressList(e){let t=document.getElementById("inprogressList"),o=document.createElement("div");o.classList.add("noteCard"),o.innerHTML=`<header class="note-header">\n            <h3>${e.heading}</h3>\n            <button class="trashNoteInprogress"></button>\n          </header>\n          <p>${e.description}</p>\n          <button class="moveToDoneFromInprogress">Move to Done</button>`,t.appendChild(o)}static moveNoteToDoneList(e,t){void 0!==t&&t.target.parentElement.remove();let o=document.getElementById("doneList"),r=document.createElement("div");r.classList.add("noteCard"),r.innerHTML=`<header class="note-header">\n            <h3>${e.heading}</h3>\n            <button class="trashNoteDone"></button>\n          </header>\n          <p>${e.description}</p>`,o.appendChild(r)}static deleteNoteFromList(e){e.target.parentElement.parentElement.remove()}static displayActiveProjectNotes(e){n.clearDisplay();for(let t=0;t<e.todo.length;t++)n.addNoteToTodoList(e.todo[t]);for(let t=0;t<e.inprogress.length;t++)n.addNoteToInprogressList(e.inprogress[t]);for(let t=0;t<e.done.length;t++)n.moveNoteToDoneList(e.done[t])}static showAlert(e){document.querySelector(e).innerHTML='<i class="fas fa-exclamation-circle"></i>Please add a title!',setTimeout(()=>document.querySelector(e).innerHTML="",3e3)}static clearFields(){document.querySelectorAll(".form-heading").forEach(e=>e.value=""),document.querySelectorAll(".form-note").forEach(e=>e.value="")}}function a(e,t){if(o=e,!(null!=(r=t)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](o):o instanceof r))throw new TypeError("Cannot call a class as a function");var o,r}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var i=function e(){a(this,e)};c(i,"projectData",[{name:"Inbox",todo:[],inprogress:[],done:[]}]),c(i,"activeProject",0);class s{constructor(e){this.name=e,this.todo=[],this.inprogress=[],this.done=[]}static changeActiveProject(){const e=document.querySelectorAll(".project"),t=Array.from(e);for(let e=0;e<t.length;e++)t[e].classList.contains("active")&&(i.activeProject=e)}static addProject(e){i.projectData.push(e),s.changeActiveProject()}static deleteProject(e){e.target.parentElement.classList.add("toBeDeleted");const t=document.querySelectorAll("#deleteProject"),o=Array.from(t);for(let e=0;e<o.length;e++)if(o[e].parentElement.classList.contains("toBeDeleted")){const t=Number(e);i.projectData.splice(t+1,1)}}}class l{constructor(e,t){this.heading=e,this.description=t}static addNote(e,t){i.projectData[i.activeProject][t].push(e)}static deleteNote(e,t,o){e.target.parentElement.classList.add("toBeDeleted");let r=document.querySelectorAll(o),n=Array.from(r);for(let e=0;e<n.length;e++)if(n[e].parentElement.classList.contains("toBeDeleted")){let o=Number(e);i.projectData[i.activeProject][t].splice(o,1)}}static moveNoteToDone(e,t,o){e.target.parentElement.classList.add("toBeMoved");let r=document.querySelectorAll(o),a=Array.from(r);for(let o=0;o<a.length;o++)if(a[o].parentElement.classList.contains("toBeMoved")){let r=Number(o);i.projectData[i.activeProject].done.push(i.projectData[i.activeProject][t][r]),n.moveNoteToDoneList(i.projectData[i.activeProject][t][r],e),i.projectData[i.activeProject][t].splice(r,1)}}}document.getElementById("projectSubmit").addEventListener("click",e=>{e.preventDefault();const t=document.getElementById("projectName").value;if(""===t)n.showAlert("#projectSubmit + .error-msg");else{const e=new s(t);n.addProjectToList(e),s.addProject(e),n.clearFields()}}),document.getElementById("projectList").addEventListener("click",e=>{"deleteProject"===e.target.id?(s.deleteProject(e),n.deleteProjectFromList(e,i.projectData[0]),s.changeActiveProject()):e.target.classList.contains("project")&&(n.toggleActiveProject(e),s.changeActiveProject(),n.displayActiveProjectNotes(i.projectData[i.activeProject]))}),document.querySelectorAll(".noteSubmit").forEach(e=>e.addEventListener("click",e=>{if(e.preventDefault(),"todoSubmit"===e.target.id){const e=document.getElementById("todoHeading").value;if(""===e)n.showAlert("#todoSubmit + .error-msg");else{const t=document.getElementById("todoDescription").value,o=new l(e,t);l.addNote(o,"todo"),n.addNoteToTodoList(o),n.clearFields()}}else if("inprogressSubmit"===e.target.id){const e=document.getElementById("inprogressHeading").value;if(""===e)n.showAlert("#inprogressSubmit + .error-msg");else{const t=document.getElementById("inprogressDescription").value,o=new l(e,t);l.addNote(o,"inprogress"),n.addNoteToInprogressList(o),n.clearFields()}}})),document.getElementById("todoList").addEventListener("click",e=>{e.target.classList.contains("trashNoteTodo")&&(l.deleteNote(e,"todo",".trashNoteTodo"),n.deleteNoteFromList(e))}),document.getElementById("inprogressList").addEventListener("click",e=>{e.target.classList.contains("trashNoteInprogress")&&(l.deleteNote(e,"inprogress",".trashNoteInprogress"),n.deleteNoteFromList(e))}),document.getElementById("doneList").addEventListener("click",e=>{e.target.classList.contains("trashNoteDone")&&(l.deleteNote(e,"done",".trashNoteDone"),n.deleteNoteFromList(e))}),document.querySelectorAll(".notesContainer").forEach(e=>{e.addEventListener("click",e=>{e.target.classList.contains("moveToDoneFromTodo")?l.moveNoteToDone(e,"todo",".moveToDoneFromTodo"):e.target.classList.contains("moveToDoneFromInprogress")&&l.moveNoteToDone(e,"inprogress",".moveToDoneFromInprogress")})}),document.querySelectorAll("[data-add]").forEach(e=>e.addEventListener("click",r.openModal)),document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",r.closeModal)),window.addEventListener("click",r.outsideClick),document.addEventListener("keydown",(function(e){"Escape"===e.key&&r.closeModal()}))}]);