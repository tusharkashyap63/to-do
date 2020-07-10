/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./js/modals.js\");\n/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ \"./js/userInterface.js\");\n\r\n\r\n\r\nfunction _instanceof(left, right) {\r\n  if (\r\n    right != null &&\r\n    typeof Symbol !== 'undefined' &&\r\n    right[Symbol.hasInstance]\r\n  ) {\r\n    return !!right[Symbol.hasInstance](left);\r\n  } else {\r\n    return left instanceof right;\r\n  }\r\n}\r\n\r\nfunction _classCallCheck(instance, Constructor) {\r\n  if (!_instanceof(instance, Constructor)) {\r\n    throw new TypeError('Cannot call a class as a function');\r\n  }\r\n}\r\n\r\nfunction _defineProperty(obj, key, value) {\r\n  if (key in obj) {\r\n    Object.defineProperty(obj, key, {\r\n      value: value,\r\n      enumerable: true,\r\n      configurable: true,\r\n      writable: true,\r\n    });\r\n  } else {\r\n    obj[key] = value;\r\n  }\r\n  return obj;\r\n}\r\n\r\nvar ProjectData = function ProjectData() {\r\n  _classCallCheck(this, ProjectData);\r\n};\r\n\r\n_defineProperty(ProjectData, 'projectData', [\r\n  {\r\n    name: 'Inbox',\r\n    todo: [],\r\n    inprogress: [],\r\n    done: [],\r\n  },\r\n]);\r\n\r\n_defineProperty(ProjectData, 'activeProject', 0);\r\n\r\n// All of the above code except imports is a Babel transpilation of:\r\n// class ProjectData {\r\n//   static projectData = [\r\n//   {\r\n//     name: 'Inbox',\r\n//     todo: [],\r\n//     inprogress: [],\r\n//     done: [],\r\n//   },\r\n// ];\r\n//   static activeProject = 0;\r\n// }\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todo = [];\r\n    this.inprogress = [];\r\n    this.done = [];\r\n  }\r\n\r\n  static changeActiveProject() {\r\n    const projects = document.querySelectorAll('.project');\r\n    const projectsArr = Array.from(projects);\r\n    for (let i in projectsArr) {\r\n      if (projectsArr[i].classList.contains('active')) {\r\n        ProjectData.activeProject = i;\r\n      }\r\n    }\r\n  }\r\n\r\n  static addProject(project) {\r\n    ProjectData.projectData.push(project);\r\n    Project.changeActiveProject();\r\n  }\r\n\r\n  static deleteProject(e) {\r\n    e.target.parentElement.classList.add('toBeDeleted');\r\n    const deleteIcons = document.querySelectorAll('#deleteProject');\r\n    const deleteIconsArr = Array.from(deleteIcons);\r\n    for (let i in deleteIconsArr) {\r\n      if (deleteIconsArr[i].parentElement.classList.contains('toBeDeleted')) {\r\n        const id = Number(i);\r\n        ProjectData.projectData.splice(id + 1, 1); // id+1 because inbox does not have a delete icon\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nclass Note {\r\n  constructor(heading, description) {\r\n    this.heading = heading;\r\n    this.description = description;\r\n  }\r\n\r\n  static addNoteToTodo(note) {\r\n    ProjectData.projectData[ProjectData.activeProject].todo.push(note);\r\n  }\r\n\r\n  static addNoteToInProgress(note) {\r\n    ProjectData.projectData[ProjectData.activeProject].inprogress.push(note);\r\n  }\r\n\r\n  static deleteNoteTodo(e) {\r\n    e.target.parentElement.classList.add('toBeDeleted');\r\n    let deleteButtons = document.querySelectorAll('.trashNoteTodo');\r\n    let deleteButtonsArr = Array.from(deleteButtons);\r\n    for (let i in deleteButtonsArr) {\r\n      if (deleteButtonsArr[i].parentElement.classList.contains('toBeDeleted')) {\r\n        let id = Number(i);\r\n        ProjectData.projectData[ProjectData.activeProject].todo.splice(id, 1);\r\n      }\r\n    }\r\n  }\r\n\r\n  static deleteNoteInprogress(e) {\r\n    e.target.parentElement.classList.add('toBeDeleted');\r\n    let deleteButtons = document.querySelectorAll('.trashNoteInprogress');\r\n    let deleteButtonsArr = Array.from(deleteButtons);\r\n    for (let i in deleteButtonsArr) {\r\n      if (deleteButtonsArr[i].parentElement.classList.contains('toBeDeleted')) {\r\n        let id = Number(i);\r\n        ProjectData.projectData[ProjectData.activeProject].inprogress.splice(\r\n          id,\r\n          1\r\n        );\r\n      }\r\n    }\r\n  }\r\n\r\n  static deleteNoteDone(e) {\r\n    e.target.parentElement.classList.add('toBeDeleted');\r\n    let deleteButtons = document.querySelectorAll('.trashNoteDone');\r\n    let deleteButtonsArr = Array.from(deleteButtons);\r\n    for (let i in deleteButtonsArr) {\r\n      if (deleteButtonsArr[i].parentElement.classList.contains('toBeDeleted')) {\r\n        let id = Number(i);\r\n        ProjectData.projectData[ProjectData.activeProject].done.splice(id, 1);\r\n      }\r\n    }\r\n  }\r\n\r\n  static moveNoteFromTodoToDone(e) {\r\n    e.target.parentElement.classList.add('toBeMoved');\r\n    let moveButtons = document.querySelectorAll('.moveToDoneFromTodo');\r\n    let moveButtonsArr = Array.from(moveButtons);\r\n    for (let i in moveButtonsArr) {\r\n      if (moveButtonsArr[i].parentElement.classList.contains('toBeMoved')) {\r\n        let id = Number(i);\r\n        ProjectData.projectData[ProjectData.activeProject].done.push(\r\n          ProjectData.projectData[ProjectData.activeProject].todo[id]\r\n        );\r\n        _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].moveNoteToDoneList(\r\n          ProjectData.projectData[ProjectData.activeProject].todo[id],\r\n          e\r\n        );\r\n        ProjectData.projectData[ProjectData.activeProject].todo.splice(id, 1);\r\n      }\r\n    }\r\n  }\r\n\r\n  static moveNoteFromInprogressToDone(e) {\r\n    e.target.parentElement.classList.add('toBeMoved');\r\n    let moveButtons = document.querySelectorAll('.moveToDoneFromInprogress');\r\n    let moveButtonsArr = Array.from(moveButtons);\r\n    for (let i in moveButtonsArr) {\r\n      if (moveButtonsArr[i].parentElement.classList.contains('toBeMoved')) {\r\n        let id = Number(i);\r\n        ProjectData.projectData[ProjectData.activeProject].done.push(\r\n          ProjectData.projectData[ProjectData.activeProject].inprogress[id]\r\n        );\r\n        _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].moveNoteToDoneList(\r\n          ProjectData.projectData[ProjectData.activeProject].inprogress[id],\r\n          e\r\n        );\r\n        ProjectData.projectData[ProjectData.activeProject].inprogress.splice(\r\n          id,\r\n          1\r\n        );\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Event Listeners\r\n\r\n// To add a project\r\ndocument.getElementById('projectSubmit').addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  const projectNameInput = document.getElementById('projectName').value;\r\n  const newProject = new Project(projectNameInput);\r\n  _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProjectToList(newProject);\r\n  Project.addProject(newProject);\r\n  _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearFields();\r\n});\r\n\r\n// To delete a project or to change the active project\r\ndocument.getElementById('projectList').addEventListener('click', (e) => {\r\n  if (e.target.id === 'deleteProject') {\r\n    Project.deleteProject(e);\r\n    _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteProjectFromList(e, ProjectData.projectData[0]);\r\n    Project.changeActiveProject();\r\n  } else if (e.target.classList.contains('project')) {\r\n    _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleActiveProject(e);\r\n    Project.changeActiveProject();\r\n    _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayActiveProjectNotes(\r\n      ProjectData.projectData[ProjectData.activeProject]\r\n    );\r\n  }\r\n});\r\n\r\n// To add a note\r\ndocument.querySelectorAll('.noteSubmit').forEach((button) =>\r\n  button.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    if (e.target.id === 'todoSubmit') {\r\n      const todoHeadingInput = document.getElementById('todoHeading').value;\r\n      const todoDescriptionInput = document.getElementById('todoDescription')\r\n        .value;\r\n      const newNote = new Note(todoHeadingInput, todoDescriptionInput);\r\n      Note.addNoteToTodo(newNote);\r\n      _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addNoteToTodoList(newNote);\r\n    } else if (e.target.id === 'inprogressSubmit') {\r\n      const inprogressHeadingInput = document.getElementById(\r\n        'inprogressHeading'\r\n      ).value;\r\n      const inprogressDescriptionInput = document.getElementById(\r\n        'inprogressDescription'\r\n      ).value;\r\n      const newNote = new Note(\r\n        inprogressHeadingInput,\r\n        inprogressDescriptionInput\r\n      );\r\n      Note.addNoteToInProgress(newNote);\r\n      _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addNoteToInprogressList(newNote);\r\n    }\r\n    _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearFields();\r\n  })\r\n);\r\n\r\n// To delete a note from todo\r\ndocument.getElementById('todoList').addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('trashNoteTodo')) {\r\n    Note.deleteNoteTodo(e);\r\n    _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteNoteFromList(e);\r\n  }\r\n});\r\n\r\n// To delete a note from inprogress\r\ndocument.getElementById('inprogressList').addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('trashNoteInprogress')) {\r\n    Note.deleteNoteInprogress(e);\r\n    _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteNoteFromList(e);\r\n  }\r\n});\r\n\r\n// To delete a note from done\r\ndocument.getElementById('doneList').addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('trashNoteDone')) {\r\n    Note.deleteNoteDone(e);\r\n    _userInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteNoteFromList(e);\r\n  }\r\n});\r\n\r\n// To move a note to Done\r\ndocument.querySelectorAll('.notesContainer').forEach((container) => {\r\n  container.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('moveToDoneFromTodo')) {\r\n      Note.moveNoteFromTodoToDone(e);\r\n    } else if (e.target.classList.contains('moveToDoneFromInprogress')) {\r\n      Note.moveNoteFromInprogressToDone(e);\r\n    }\r\n  });\r\n});\r\n\r\n// // Initial load\r\n// document.addEventListener('DOMContentLoaded', UI.displayBooks);\r\n\r\n// Modal events\r\ndocument\r\n  .querySelectorAll('[data-add]')\r\n  .forEach((button) => button.addEventListener('click', _modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openModal));\r\ndocument\r\n  .querySelectorAll('[data-close')\r\n  .forEach((button) => button.addEventListener('click', _modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeModal));\r\nwindow.addEventListener('click', _modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].outsideClick);\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/modals.js":
/*!**********************!*\
  !*** ./js/modals.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\nclass Modal {\r\n  static getModals() {\r\n    return document.querySelectorAll('[data-modal]');\r\n  }\r\n\r\n  // Open\r\n  static openModal(e) {\r\n    const modals = Modal.getModals();\r\n    modals.forEach((modal) => {\r\n      if (\r\n        e.target.getAttribute('data-add') === modal.getAttribute('data-modal')\r\n      ) {\r\n        modal.style.display = 'block';\r\n      }\r\n    });\r\n  }\r\n\r\n  // Close\r\n  static closeModal() {\r\n    let modals = Modal.getModals();\r\n    modals.forEach((modal) => (modal.style.display = 'none'));\r\n  }\r\n\r\n  // Close If Outside Click\r\n  static outsideClick(e) {\r\n    let modals = Modal.getModals();\r\n    modals.forEach((modal) => {\r\n      if (e.target === modal) {\r\n        modal.style.display = 'none';\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modals.js?");

/***/ }),

/***/ "./js/userInterface.js":
/*!*****************************!*\
  !*** ./js/userInterface.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UI; });\nclass UI {\r\n  static removeActiveFromAllProjects() {\r\n    const projects = document.querySelectorAll('.project');\r\n    projects.forEach((project) => project.classList.remove('active'));\r\n  }\r\n\r\n  static clearDisplay() {\r\n    let allNotes = document.querySelectorAll('.noteCard');\r\n    allNotes.forEach((note) => note.remove());\r\n  }\r\n\r\n  static addProjectToList(project) {\r\n    const projectList = document.getElementById('projectList');\r\n    UI.removeActiveFromAllProjects();\r\n    UI.clearDisplay();\r\n    const newProject = document.createElement('li');\r\n    newProject.classList.add('project', 'active');\r\n    newProject.innerHTML = `${project.name}<i class=\"far fa-trash-alt\" id=\"deleteProject\"></i>`;\r\n    projectList.appendChild(newProject);\r\n  }\r\n\r\n  static displayInboxNotes(projectInbox) {\r\n    UI.displayActiveProjectNotes(projectInbox);\r\n  }\r\n\r\n  static deleteProjectFromList(e, projectInbox) {\r\n    if (e.target.parentElement.classList.contains('active')) {\r\n      const firstProject = document.querySelectorAll('.project')[0];\r\n      firstProject.classList.add('active');\r\n      UI.displayInboxNotes(projectInbox);\r\n    }\r\n    e.target.parentElement.remove();\r\n  }\r\n\r\n  static toggleActiveProject(e) {\r\n    UI.removeActiveFromAllProjects();\r\n    e.target.classList.add('active');\r\n  }\r\n\r\n  static addNoteToTodoList(note) {\r\n    let list = document.getElementById('todoList');\r\n    let newNote = document.createElement('div');\r\n    newNote.classList.add('noteCard');\r\n    newNote.innerHTML = `<header class=\"note-header\">\r\n            <h3>${note.heading}</h3>\r\n            <button class=\"trashNoteTodo\">x</button>\r\n          </header>\r\n          <p>${note.description}</p>\r\n          <button class=\"moveToDoneFromTodo\">Move to Done</button>`;\r\n    list.appendChild(newNote);\r\n  }\r\n\r\n  static addNoteToInprogressList(note) {\r\n    let list = document.getElementById('inprogressList');\r\n    let newNote = document.createElement('div');\r\n    newNote.classList.add('noteCard');\r\n    newNote.innerHTML = `<header class=\"note-header\">\r\n            <h3>${note.heading}</h3>\r\n            <button class=\"trashNoteInprogress\">x</button>\r\n          </header>\r\n          <p>${note.description}</p>\r\n          <button class=\"moveToDoneFromInprogress\">Move to Done</button>`;\r\n    list.appendChild(newNote);\r\n  }\r\n\r\n  static moveNoteToDoneList(note, e) {\r\n    if (!(e === undefined)) {\r\n      e.target.parentElement.remove();\r\n    }\r\n    let list = document.getElementById('doneList');\r\n    let newNote = document.createElement('div');\r\n    newNote.classList.add('noteCard');\r\n    newNote.innerHTML = `<header class=\"note-header\">\r\n            <h3>${note.heading}</h3>\r\n            <button class=\"trashNoteDone\">x</button>\r\n          </header>\r\n          <p>${note.description}</p>`;\r\n    list.appendChild(newNote);\r\n  }\r\n\r\n  static deleteNoteFromList(e) {\r\n    e.target.parentElement.parentElement.remove();\r\n  }\r\n\r\n  static displayActiveProjectNotes(activeProject) {\r\n    UI.clearDisplay();\r\n    for (let i = 0; i < activeProject.todo.length; i++) {\r\n      UI.addNoteToTodoList(activeProject.todo[i]);\r\n    }\r\n    for (let j = 0; j < activeProject.inprogress.length; j++) {\r\n      UI.addNoteToInprogressList(activeProject.inprogress[j]);\r\n    }\r\n    for (let k = 0; k < activeProject.done.length; k++) {\r\n      UI.moveNoteToDoneList(activeProject.done[k]);\r\n    }\r\n  }\r\n\r\n  static clearFields() {\r\n    document\r\n      .querySelectorAll('.form-heading')\r\n      .forEach((heading) => (heading.value = ''));\r\n    document\r\n      .querySelectorAll('.form-note')\r\n      .forEach((note) => (note.value = ''));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/userInterface.js?");

/***/ })

/******/ });