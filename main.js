const ContactManager = require('./ContactManager.js');

const newContact = new ContactManager();
newContact.addContact("ArunR","Rajachandar", "9876512345");
newContact.addContact("ArunRR","Rajachandar", "9876512345");

console.log(newContact.getAllContact());