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
    if (e.target.parentElement.classList.contains('active')) {
      const firstProject = document.querySelectorAll('.project')[0];
      firstProject.classList.add('active');
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
    newNote.classList.add('noteCard');
    newNote.innerHTML = `<header class="note-header">
            <h3>${note.heading}</h3>
            <button class="trashNoteTodo">x</button>
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
            <button class="trashNoteInprogress">x</button>
          </header>
          <p>${note.description}</p>`;
    list.appendChild(newNote);
  }

  static deleteNoteFromList(e) {
    e.target.parentElement.parentElement.remove();
  }

  static clearDisplay() {
    let allNotes = document.querySelectorAll('.noteCard');
    allNotes.forEach((note) => note.remove());
  }

  static displayActiveProjectNotes(activeProject) {
    UI.clearDisplay();
    console.log(activeProject.todo);
    for (let i = 0; i < activeProject.todo.length; i++) {
      UI.addNoteToTodoList(activeProject.todo[i]);
    }
    for (let j = 0; j < activeProject.inprogress.length; j++) {
      UI.addNoteToInprogressList(activeProject.inprogress[j]);
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
