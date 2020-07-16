export default class UI {
  static removeActiveFromAllProjects() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => project.classList.remove('active'));
  }

  static clearDisplay() {
    let allNotes = document.querySelectorAll('.noteCard');
    allNotes.forEach((note) => note.remove());
  }

  static addProjectToList(project) {
    const projectList = document.getElementById('projectList');
    UI.removeActiveFromAllProjects();
    UI.clearDisplay();
    const newProject = document.createElement('li');
    newProject.classList.add('project', 'active');
    newProject.innerHTML = `${project.name}<i class="far fa-trash-alt" id="deleteProject"></i>`;
    projectList.appendChild(newProject);
  }

  static displayInboxNotes(projectInbox) {
    UI.displayActiveProjectNotes(projectInbox);
  }

  static deleteProjectFromList(e, projectInbox) {
    if (e.target.parentElement.classList.contains('active')) {
      const firstProject = document.querySelectorAll('.project')[0];
      firstProject.classList.add('active');
      UI.displayInboxNotes(projectInbox);
    }
    e.target.parentElement.remove();
  }

  static toggleActiveProject(e) {
    UI.removeActiveFromAllProjects();
    e.target.classList.add('active');
  }

  static addNoteToTodoList(note) {
    let list = document.getElementById('todoList');
    let newNote = document.createElement('div');
    newNote.setAttribute('draggable', 'true');
    newNote.classList.add('noteCard');
    newNote.innerHTML = `<header class="note-header">
            <h3>${note.heading}</h3>
            <button class="trashNoteTodo"></button>
          </header>
          <p>${note.description}</p>
          <button class="moveToDone">Move to Done</button>`;
    list.appendChild(newNote);
  }

  static addNoteToInprogressList(note) {
    let list = document.getElementById('inprogressList');
    let newNote = document.createElement('div');
    newNote.setAttribute('draggable', 'true');
    newNote.classList.add('noteCard');
    newNote.innerHTML = `<header class="note-header">
            <h3>${note.heading}</h3>
            <button class="trashNoteInprogress"></button>
          </header>
          <p>${note.description}</p>
          <button class="moveToDone">Move to Done</button>`;
    list.appendChild(newNote);
  }

  static moveNoteToDoneList(note, e) {
    if (!(e === undefined)) {
      e.target.parentElement.remove();
    }
    let list = document.getElementById('doneList');
    let newNote = document.createElement('div');
    newNote.classList.add('noteCard');
    newNote.innerHTML = `<header class="note-header">
            <h3>${note.heading}</h3>
            <button class="trashNoteDone"></button>
          </header>
          <p>${note.description}</p>`;
    list.appendChild(newNote);
  }

  static deleteNoteFromList(e) {
    e.target.parentElement.parentElement.remove();
  }

  static displayActiveProjectNotes(activeProject) {
    UI.clearDisplay();
    for (let i = 0; i < activeProject.todo.length; i++) {
      UI.addNoteToTodoList(activeProject.todo[i]);
    }
    for (let j = 0; j < activeProject.inprogress.length; j++) {
      UI.addNoteToInprogressList(activeProject.inprogress[j]);
    }
    for (let k = 0; k < activeProject.done.length; k++) {
      UI.moveNoteToDoneList(activeProject.done[k]);
    }
  }

  static showAlert(here) {
    document.querySelector(
      here
    ).innerHTML = `<i class="fas fa-exclamation-circle"></i>Please add a title!`;
    setTimeout(() => (document.querySelector(here).innerHTML = ''), 3000);
  }

  static clearFields() {
    document.querySelectorAll('.form-heading').forEach((heading) => (heading.value = ''));
    document.querySelectorAll('.form-note').forEach((note) => (note.value = ''));
  }
}
