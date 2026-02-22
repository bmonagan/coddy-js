export class MessageBox {
  #message = "";
  
  setMessage(text) {
    if (this.#isValidMessage(text)) {
      this.#message = text;
      return "Message set!";
    }
    return "Invalid message!";
  }
  
  getMessage() {
    return this.#message;
  }
  
  // TODO:  Add a private method called #isValidMessage(text)
  #isValidMessage(text) {
    if (!text || text.length >= 100) {
      return false;
    }
    else { 
      return true; 
    }
  }

  // TODO: Make it return true if the text is not empty and less than 100 characters, otherwise return false

  }


==============
import { MessageBox } from './messageBox.js';

// Using the message box
const box = new MessageBox();

console.log(box.setMessage("Hello"));    // "Message set!" (uses #isValidMessage)
console.log(box.setMessage(""));         // "Invalid message!" (uses #isValidMessage)
