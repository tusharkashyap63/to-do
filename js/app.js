import Modal from './modals';
import UI from './userInterface';

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== 'undefined' &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var ProjectData = function ProjectData() {
  _classCallCheck(this, ProjectData);
};

_defineProperty(ProjectData, 'projectData', [
  {
    name: 'Inbox',
    todo: [],
    inprogress: [],
    done: [],
  },
]);

_defineProperty(ProjectData, 'activeProject', 0);

// All of the above code except imports is a Babel transpilation of:
// class ProjectData {
//   static projectData = [
//   {
//     name: 'Inbox',
//     todo: [],
//     inprogress: [],
//     done: [],
//   },
// ];
//   static activeProject = 0;
// }

class Project {
  constructor(name) {
    this.name = name;
    this.todo = [];
    this.inprogress = [];
    this.done = [];
  }

  static changeActiveProject() {
    let projects = document.querySelectorAll('.project');
    let projectsArr = Array.from(projects);
    for (let i in projectsArr) {
      if (projectsArr[i].classList.contains('active')) {
        ProjectData.activeProject = i;
      }
    }
  }

  static addProject(project) {
    ProjectData.projectData.push(project);
    Project.changeActiveProject();
    console.log(ProjectData.projectData);
    console.log(ProjectData.activeProject);
  }

  static deleteProject(e) {
    e.target.parentElement.classList.add('toBeDeleted');
    let deleteIcons = document.querySelectorAll('#deleteProject');
    let deleteIconsArr = Array.from(deleteIcons);
    for (let i in deleteIconsArr) {
      if (deleteIconsArr[i].parentElement.classList.contains('toBeDeleted')) {
        let id = Number(i);
        ProjectData.projectData.splice(id + 1, 1); // id+1 because inbox does not have a delete icon
      }
    }
    console.log(ProjectData.projectData);
  }
}

class Note {
  constructor(heading, description) {
    this.heading = heading;
    this.description = description;
  }

  static addNoteToTodo(note) {
    ProjectData.projectData[ProjectData.activeProject].todo.push(note);
  }

  static addNoteToInProgress(note) {
    ProjectData.projectData[ProjectData.activeProject].inprogress.push(note);
  }

  static deleteNoteTodo(e) {
    e.target.parentElement.classList.add('toBeDeleted');
    let deleteButtons = document.querySelectorAll('.trashNoteTodo');
    let deleteButtonsArr = Array.from(deleteButtons);
    for (let i in deleteButtonsArr) {
      if (deleteButtonsArr[i].parentElement.classList.contains('toBeDeleted')) {
        let id = Number(i);
        ProjectData.projectData[ProjectData.activeProject].todo.splice(id, 1);
      }
    }
    console.log(ProjectData.projectData);
  }

  static deleteNoteInprogress(e) {
    e.target.parentElement.classList.add('toBeDeleted');
    let deleteButtons = document.querySelectorAll('.trashNoteInprogress');
    let deleteButtonsArr = Array.from(deleteButtons);
    for (let i in deleteButtonsArr) {
      if (deleteButtonsArr[i].parentElement.classList.contains('toBeDeleted')) {
        let id = Number(i);
        ProjectData.projectData[ProjectData.activeProject].inprogress.splice(
          id,
          1
        );
      }
    }
  }

  static moveNoteFromTodoToDone(e) {
    e.target.parentElement.classList.add('toBeMoved');
    let moveButtons = document.querySelectorAll('.moveToDone');
    let moveButtonsArr = Array.from(moveButtons);
    for (let i in moveButtonsArr) {
      if (moveButtonsArr[i].parentElement.classList.contains('toBeMoved')) {
        let id = Number(i);
        ProjectData.projectData[ProjectData.activeProject].done.push(
          ProjectData.projectData[ProjectData.activeProject].todo[id]
        );
        ProjectData.projectData[ProjectData.activeProject].todo.splice(id, 1);
      }
    }
  }

  static moveNoteFromInprogressToDone(e) {
    e.target.parentElement.classList.add('toBeMoved');
    let moveButtons = document.querySelectorAll('.moveToDone');
    let moveButtonsArr = Array.from(moveButtons);
    for (let i in moveButtonsArr) {
      if (moveButtonsArr[i].parentElement.classList.contains('toBeMoved')) {
        let id = Number(i);
        ProjectData.projectData[ProjectData.activeProject].done.push(
          ProjectData.projectData[ProjectData.activeProject].inprogress[id]
        );
        ProjectData.projectData[ProjectData.activeProject].inprogress.splice(
          id,
          1
        );
      }
    }
    console.log(ProjectData.projectData);
  }
}
// Event Listeners
// To add a project
document.getElementById('projectSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  const projectNameInput = document.getElementById('projectName').value;
  const newProject = new Project(projectNameInput);
  UI.addProjectToList(newProject);
  Project.addProject(newProject);
  UI.clearFields();
});

// To delete a project or to change the active project
document.getElementById('projectList').addEventListener('click', (e) => {
  if (e.target.id === 'deleteProject') {
    Project.deleteProject(e);
    UI.deleteProjectFromList(e, ProjectData.projectData[0]);
    Project.changeActiveProject();
    console.log(ProjectData.activeProject);
  } else if (e.target.classList.contains('project')) {
    UI.toggleActiveProject(e);
    Project.changeActiveProject();
    UI.displayActiveProjectNotes(
      ProjectData.projectData[ProjectData.activeProject]
    );
    console.log(ProjectData.projectData);
  }
});

// To add a note
document.querySelectorAll('.noteSubmit').forEach((button) =>
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'todoSubmit') {
      const todoHeadingInput = document.getElementById('todoHeading').value;
      const todoDescriptionInput = document.getElementById('todoDescription')
        .value;
      const newNote = new Note(todoHeadingInput, todoDescriptionInput);
      Note.addNoteToTodo(newNote);
      UI.addNoteToTodoList(newNote);
    } else if (e.target.id === 'inprogressSubmit') {
      const inprogressHeadingInput = document.getElementById(
        'inprogressHeading'
      ).value;
      const inprogressDescriptionInput = document.getElementById(
        'inprogressDescription'
      ).value;
      const newNote = new Note(
        inprogressHeadingInput,
        inprogressDescriptionInput
      );
      Note.addNoteToInProgress(newNote);
      UI.addNoteToInprogressList(newNote);
    }
    console.log(ProjectData.projectData);
    UI.clearFields();
  })
);

// To delete a note from todo
document.getElementById('todoList').addEventListener('click', (e) => {
  if (e.target.classList.contains('trashNoteTodo')) {
    Note.deleteNoteTodo(e);
    UI.deleteNoteFromList(e);
    console.log(ProjectData.projectData);
  }
});

// To delete a note from inprogress
document.getElementById('inprogressList').addEventListener('click', (e) => {
  if (e.target.classList.contains('trashNoteInprogress')) {
    Note.deleteNoteInprogress(e);
    UI.deleteNoteFromList(e);
    console.log(ProjectData.projectData);
  }
});

// To move a note to Done
document.querySelectorAll('.notesContainer').forEach((container) =>
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('moveToDone')) {
      if (e.target.parentElement.parentElement.id === 'todoList') {
        Note.moveNoteFromTodoToDone(e);
      } else if (e.target.parentElement.parentElement.id === 'inprogressList') {
        Note.moveNoteFromInprogressToDone(e);
      }
      // UI.moveNoteToDoneList(e, ProjectData.projectData[ProjectData.activeProject].todo[]);
    }
  })
);

// // Initial load
// document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Modal events
document
  .querySelectorAll('[data-add]')
  .forEach((button) => button.addEventListener('click', Modal.openModal));
document
  .querySelectorAll('[data-close')
  .forEach((button) => button.addEventListener('click', Modal.closeModal));
window.addEventListener('click', Modal.outsideClick);
