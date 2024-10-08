import { defineStore } from 'pinia';

export const notifyStore = defineStore('notify', {
  state: () => ({
    count: 0,
    notifications: [],
  }),
  getters: {},
  actions: {
    addNotification(notification) {
      notification.id = this.count;
      this.pushNotification(notification);
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, 4000);
    },
    pushNotification(notification) {
      this.notifications.push(notification);
      this.count += 1;
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter((n) => n.id !== id);
    },
  },
});
