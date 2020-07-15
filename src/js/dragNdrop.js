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

  static deleteNoteDragged(notesOfSpecificType, type) {
    const notes = document.querySelectorAll(notesOfSpecificType);
    notes.forEach((note, index) => {
      if (note.classList.contains('dragging')) {
        DragNDrop.tempData = ProjectData.projectData[ProjectData.activeProject][type].splice(
          index,
          1
        );
      }
    });
  }

  static addNoteDropped(notesOfSpecificType, type) {
    const notes = document.querySelectorAll(notesOfSpecificType);
    notes.forEach((note, index) => {
      if (note.classList.contains('dropped')) {
        ProjectData.projectData[ProjectData.activeProject][type].splice(
          index,
          0,
          DragNDrop.tempData[0]
        );
      }
    });
    DragNDrop.tempData.pop();
  }
}

DragNDrop.tempData;
