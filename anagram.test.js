const anagram = require('./anagram.js');


test('Dormitory is an anagram of dirty room$$#', () => {
    expect(anagram('Dormitory', "dirty room$$#")).toBeTruthy();
})
test('Hello is an anagram of Allhe', () => {
    expect(anagram('Hello', "Allhe")).toBeFalsy();
})

test('Does Anagram Exist', () => {
    expect(anagram('Hello', "Allhe")).toBeDefined();
})