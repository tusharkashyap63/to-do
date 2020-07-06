export default class UI {
  static addProjectToList(project) {
    const projectList = document.getElementById('projectList');
    const newProject = document.createElement('li');
    newProject.classList.add('project');
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

  static clearFields() {
    document
      .querySelectorAll('.form-heading')
      .forEach((heading) => (heading.value = ''));
    document
      .querySelectorAll('.form-note')
      .forEach((note) => (note.value = ''));
  }
}
