import { notifyStore } from '../stores/notificaciones';
export default defineNuxtPlugin(() => {
  return {
    provide: {
      notify: (noti) => {
        if (!('text' in noti)) {
          console.error(noti, 'Error text.');
          return;
        }
        const store = notifyStore();
        const notificacion = Object.assign(
          { title: null, text: '', type: 'info' },
          noti,
        );
        store.addNotification(notificacion);
      },
    },
  };
});
