export default class Modal {
  static getModals() {
    return document.querySelectorAll('[data-modal]');
  }

  // Open
  static openModal(e) {
    let modals = Modal.getModals();
    modals.forEach((modal) => {
      if (
        e.target.getAttribute('data-add') === modal.getAttribute('data-modal')
      ) {
        modal.style.display = 'block';
      }
    });
  }

  // Close
  static closeModal() {
    let modals = Modal.getModals();
    modals.forEach((modal) => (modal.style.display = 'none'));
  }

  // Close If Outside Click
  static outsideClick(e) {
    let modals = Modal.getModals();
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}
