import ProjectData from './app';

export default class DragNDrop {
  static getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('[draggable]:not(.dragging)')];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  static deleteNoteDragged(e) {
    const notes = document.querySelectorAll('.noteCard');
    notes.forEach((note, index) => {
      if (note.classList.contains('dragging')) {
        ProjectData.projectData[ProjectData.activeProject].todo.splice(index, 1);
      }
    });
    console.log(ProjectData.projectData);
  }

  static addNoteDropped(e) {}
}
