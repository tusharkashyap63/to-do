export default class UI {
  static removeActiveFromAllProjects() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => project.classList.remove('active'));
  }

  static addProjectToList(project) {
    const projectList = document.getElementById('projectList');
    const newProject = document.createElement('li');
    UI.removeActiveFromAllProjects();
    newProject.classList.add('project', 'active');
    newProject.innerHTML = `${project.name}<i class="far fa-trash-alt" id="deleteProject"></i>`;
    projectList.appendChild(newProject);
  }

  static deleteProjectFromList(e) {
    if (e.target.id === 'deleteProject') {
      e.target.parentElement.remove();
    }
  }

  static toggleActiveProject(e) {
    if (e.target.classList.contains('project')) {
      const projects = document.querySelectorAll('.project');
      projects.forEach((project) => project.classList.remove('active'));
      e.target.classList.add('active');
    }
  }

  static addNoteToTodoList(note) {
    let list = document.getElementById('todoList');
    let newNote = document.createElement('div');
    newNote.classList.add('noteCard');
    newNote.innerHTML = `<header class="note-header">
            <h3>${note.heading}</h3>
            <button class="trashNote">x</button>
          </header>
          <p>${note.description}</p>`;
    list.appendChild(newNote);
  }

  static addNoteToInprogressList(note) {
    let list = document.getElementById('inprogressList');
    let newNote = document.createElement('div');
    newNote.classList.add('noteCard');
    newNote.innerHTML = `<header class="note-header">
            <h3>${note.heading}</h3>
            <button class="trashNote">x</button>
          </header>
          <p>${note.description}</p>`;
    list.appendChild(newNote);
  }

  static deleteNoteFromList(e) {
    if (e.target.classList.contains('trashNote')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  static clearDisplay() {
    let todoList = document.getElementById('todoList').childNodes;
    todoList.forEach((card) => card.remove());
    let inprogressList = document.getElementById('todoList').childNodes;
    inprogressList.forEach((card) => card.remove());
  }

  static displayActiveProjectNotes(e, activeProject) {
    if (e.target.classList.contains('project')) {
      UI.clearDisplay();
      for (let i = 0; i < activeProject.todo.length; i++) {
        UI.addNoteToTodoList(activeProject.todo[i]);
      }
      for (let j = 0; j < activeProject.inprogress.length; j++) {
        UI.addNoteToInprogressList(activeProject.inprogress[j]);
      }
    }
  }

  static clearFields() {
    document
      .querySelectorAll('.form-heading')
      .forEach((heading) => (heading.value = ''));
    document
      .querySelectorAll('.form-note')
      .forEach((note) => (note.value = ''));
  }
}
