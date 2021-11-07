const Contact = require('./Contact.js');
const {nameCheck, phoneNumberCheck} = require('./utilities.js');

class ContactManager {
    constructor(){
        this.contactLists = {};
    }

    addContact(fName, lName, pNo) {
        const newContact = new Contact(fName, lName, pNo);
        this.validateContact(newContact);
        this.doesContactExist(newContact);
        this.contactLists = {...this.contactLists, [this.generateKey(newContact)]: newContact};
    }

    getAllContact() {
        return Object.values(this.contactLists);
    }

    validateContact(contact) {
        const {firstName, lastName, phoneNumber} = contact;
        nameCheck(firstName);
        nameCheck(lastName);
        phoneNumberCheck(phoneNumber);
    }

    doesContactExist(contact) {
        if(Object.keys(this.contactLists).length > 0 && Object.keys(this.contactLists).findIndex(e => e === this.generateKey(contact)) !== -1) {
            throw new Error("Contact already exists");
        }
    }

    generateKey(contact) {
        const {firstName, lastName, phoneNumber} = contact;
        return `${firstName}-${lastName}-${phoneNumber}`;
    }
}

module.exports = ContactManager;