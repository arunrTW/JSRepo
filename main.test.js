const { TestWatcher } = require('@jest/core');
const ContactManager = require('./ContactManager.js');

const add = jest.fn((a, b) => a+b);

test('Add mockup 1+3 to 4', () => {
    expect(add(1,3)).toBe(4);
    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledWith(1,3);
    expect(add).toHaveBeenCalledTimes(1);
})

describe("ContactManagerTest", () => {
    let contact;
    
    beforeEach(() => contact = new ContactManager());

    test('create Contact Successfully', () => {
        contact.addContact("ArunR", "Rajachandar", "9629983177");
        const len = contact.getAllContact().length;
        expect(len).toBe(1);
    })


    test('contact already Exists', () => {
        contact.addContact("ArunR", "Rajachandar", "9629983177");
        expect(() => {contact.addContact("ArunR", "Rajachandar", "9629983177");}).toThrow("Contact already exists");
    })

    
    test('should not create contact if phone number is null', () => {
        expect(() => {contact.addContact("ArunR", "Rajachandar", "");}).toThrow("Phone number can not be null");
    })
    


})