export default class Modal {
  static getModals() {
    return document.querySelectorAll('[data-modal]');
  }

  // Open
  static openModal(e) {
    const modals = Modal.getModals();
    modals.forEach((modal) => {
      if (e.target.getAttribute('data-add') === modal.getAttribute('data-modal')) {
        modal.classList.add('show');
      }
    });
  }

  // Close
  static closeModal() {
    let modals = Modal.getModals();
    modals.forEach((modal) => modal.classList.remove('show'));
  }

  // Close If Outside Click
  static outsideClick(e) {
    let modals = Modal.getModals();
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }
}
