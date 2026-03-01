import { Notification } from './notification-base.js';

// EmailNotification class that extends Notification
export class EmailNotification extends Notification {
  // TODO: Add the send(message) method that returns the string: "Sending '(message)' via Email"
  send(message) { 
    return `Sending '${message}' via Email`
  }
  
}
import { Notification } from './notification-base.js';

// SMSNotification class that extends Notification
export class SMSNotification extends Notification {
  // TODO: Add the send(message) method that returns the string: "Sending '(message)' via SMS"
  send(message) { 
    return `Sending '${message}' via SMS`
  }
}
// Parent Notification class here
export class Notification {
  send(message) {
    return `Sending '${message}' via Notification`;
  }
}
// Parent Notification class here
export class Notification {
  send(message) {
    return `Sending '${message}' via Notification`;
  }
}