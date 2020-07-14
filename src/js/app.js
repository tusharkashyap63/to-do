import '../scss/style.scss';
import UI from './userInterface';
import Modal from './modals';
import DragNDrop from './dragNdrop';

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
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

export default ProjectData;

class Project {
  constructor(name) {
    this.name = name;
    this.todo = [];
    this.inprogress = [];
    this.done = [];
  }

  static changeActiveProject() {
    const projects = document.querySelectorAll('.project');
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].classList.contains('active')) {
        ProjectData.activeProject = i;
      }
    }
  }

  static addProject(project) {
    ProjectData.projectData.push(project);
    Project.changeActiveProject();
  }

  static deleteProject(e) {
    e.target.parentElement.classList.add('toBeDeleted');
    const deleteIcons = document.querySelectorAll('#deleteProject');
    for (let i = 0; i < deleteIcons.length; i++) {
      if (deleteIcons[i].parentElement.classList.contains('toBeDeleted')) {
        const id = Number(i);
        ProjectData.projectData.splice(id + 1, 1); // id+1 because inbox does not have a delete icon
      }
    }
  }
}

class Note {
  constructor(heading, description) {
    this.heading = heading;
    this.description = description;
  }

  static addNote(note, type) {
    ProjectData.projectData[ProjectData.activeProject][type].push(note);
  }

  static deleteNote(e, type, delButtons) {
    e.target.parentElement.classList.add('toBeDeleted');
    let deleteButtons = document.querySelectorAll(delButtons);
    for (let i = 0; i < deleteButtons.length; i++) {
      if (deleteButtons[i].parentElement.classList.contains('toBeDeleted')) {
        let id = Number(i);
        ProjectData.projectData[ProjectData.activeProject][type].splice(id, 1);
      }
    }
  }

  static moveNoteToDone(e, type, mvButtons) {
    e.target.parentElement.classList.add('toBeMoved');
    let moveButtons = document.querySelectorAll(mvButtons);
    for (let i = 0; i < moveButtons.length; i++) {
      if (moveButtons[i].parentElement.classList.contains('toBeMoved')) {
        let id = Number(i);
        ProjectData.projectData[ProjectData.activeProject].done.push(
          ProjectData.projectData[ProjectData.activeProject][type][id]
        );
        UI.moveNoteToDoneList(ProjectData.projectData[ProjectData.activeProject][type][id], e);
        ProjectData.projectData[ProjectData.activeProject][type].splice(id, 1);
      }
    }
  }
}

// Event Listeners

// To add a project
document.getElementById('projectSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  const projectNameInput = document.getElementById('projectName').value;
  if (projectNameInput === '') {
    UI.showAlert('#projectSubmit + .error-msg');
  } else {
    const newProject = new Project(projectNameInput);
    UI.addProjectToList(newProject);
    Project.addProject(newProject);
    UI.clearFields();
  }
});

// To delete a project or to change the active project
document.getElementById('projectList').addEventListener('click', (e) => {
  if (e.target.id === 'deleteProject') {
    Project.deleteProject(e);
    UI.deleteProjectFromList(e, ProjectData.projectData[0]);
    Project.changeActiveProject();
  } else if (e.target.classList.contains('project')) {
    UI.toggleActiveProject(e);
    Project.changeActiveProject();
    UI.displayActiveProjectNotes(ProjectData.projectData[ProjectData.activeProject]);
  }
});

// To add a note
document.querySelectorAll('.noteSubmit').forEach((button) =>
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'todoSubmit') {
      const todoHeadingInput = document.getElementById('todoHeading').value;
      if (todoHeadingInput === '') {
        UI.showAlert('#todoSubmit + .error-msg');
      } else {
        const todoDescriptionInput = document.getElementById('todoDescription').value;
        const newNote = new Note(todoHeadingInput, todoDescriptionInput);
        Note.addNote(newNote, 'todo');
        UI.addNoteToTodoList(newNote);
        UI.clearFields();
      }
    } else if (e.target.id === 'inprogressSubmit') {
      const inprogressHeadingInput = document.getElementById('inprogressHeading').value;
      if (inprogressHeadingInput === '') {
        UI.showAlert('#inprogressSubmit + .error-msg');
      } else {
        const inprogressDescriptionInput = document.getElementById('inprogressDescription').value;
        const newNote = new Note(inprogressHeadingInput, inprogressDescriptionInput);
        Note.addNote(newNote, 'inprogress');
        UI.addNoteToInprogressList(newNote);
        UI.clearFields();
      }
    }
  })
);

// To delete a note from todo
document.getElementById('todoList').addEventListener('click', (e) => {
  if (e.target.classList.contains('trashNoteTodo')) {
    Note.deleteNote(e, 'todo', '.trashNoteTodo');
    UI.deleteNoteFromList(e);
  }
});

// To delete a note from inprogress
document.getElementById('inprogressList').addEventListener('click', (e) => {
  if (e.target.classList.contains('trashNoteInprogress')) {
    Note.deleteNote(e, 'inprogress', '.trashNoteInprogress');
    UI.deleteNoteFromList(e);
  }
});

// To delete a note from done
document.getElementById('doneList').addEventListener('click', (e) => {
  if (e.target.classList.contains('trashNoteDone')) {
    Note.deleteNote(e, 'done', '.trashNoteDone');
    UI.deleteNoteFromList(e);
  }
});

// To move a note to Done
document.querySelectorAll('.notesContainer').forEach((container) => {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('moveToDoneFromTodo')) {
      Note.moveNoteToDone(e, 'todo', '.moveToDoneFromTodo');
    } else if (e.target.classList.contains('moveToDoneFromInprogress')) {
      Note.moveNoteToDone(e, 'inprogress', '.moveToDoneFromInprogress');
    }
  });
});

// // Initial load
// document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Modal events
document
  .querySelectorAll('[data-add]')
  .forEach((button) => button.addEventListener('click', Modal.openModal));

document
  .querySelectorAll('[data-close]')
  .forEach((button) => button.addEventListener('click', Modal.closeModal));
window.addEventListener('click', Modal.outsideClick);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    Modal.closeModal();
  }
});

// Drag and drop events
document.querySelectorAll('.dragContainer').forEach((container) => {
  container.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
    DragNDrop.deleteNoteDragged(e);
  });

  container.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
  });

  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = DragNDrop.getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement === null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});
