import { Tab } from '@/assets/ts/modules/tab';
import { Dialog } from '@/assets/ts/modules/dialog';

((win, doc) => {
  /**
   * Instantiation & Execution
   */
  (() => {
    const tabEl: HTMLDivElement | null = doc.querySelector('.js-tab');
    if (!tabEl) return;

    const tab = new Tab(tabEl);
    tab.init();
  })();
  (() => {
    const tabEl: HTMLDivElement | null = doc.querySelector('.js-strength');
    if (!tabEl) return;

    const opt = {
      btnClass:'fn-strength-btn',
      panelClass: 'fn-strength-panel',
      titleClass: 'fn-strength-title',
      listClass: 'fn-strength-list'
    };
    const tab = new Tab(tabEl, opt);
    tab.init();
  })();
  (() => {
    const dialogEl: NodeListOf<HTMLDialogElement> = doc.querySelectorAll('.js-dialog');
    if (!dialogEl.length) return;

    dialogEl.forEach((el, i) => {
      const dialog = new Dialog(el, i);
      dialog.init();
    });
  })();
})(window, document);