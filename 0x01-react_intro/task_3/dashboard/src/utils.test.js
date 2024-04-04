// task_3/dashboard/src/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils Tests', () => {
  describe('getFullYear', () => {
    it('should return the current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
    });
  });

  describe('getFooterCopy', () => {
    it('should return "Holberton School" when the argument is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('should return "Holberton School main dashboard" when the argument is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    it('should return the latest notification', () => {
      // Mock implementation for demonstration purpose
      const notifications = [
        { id: 1, content: 'Notification 1' },
        { id: 2, content: 'Notification 2' },
        { id: 3, content: 'Notification 3' }
      ];
      const latestNotification = getLatestNotification(notifications);
      expect(latestNotification).toEqual({ id: 3, content: 'Notification 3' });
    });
  });
});
