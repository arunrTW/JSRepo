const functions = require('./functions');

test("Adds 2+2 to equal 4", () => {
    expect(functions.add(2,3)).toBe(5);
})

test("Adds 2+4 to equal 5", () => {
    expect(functions.add(2,4)).not.toBe(5);
})

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
})

test("Check user", ()=> {
    expect(functions.createUser()).toStrictEqual({firstName: 'Brad', lastName: 'Media'});
})

test('Should be under 1600', ()=> {
    const load1 = 800;
    expect(load1+load1).toBeLessThanOrEqual(1600);
})

test('There is no I in team', () => {
    expect('teamI').toMatch(/I/i);
})

test('Admin should be in usernames', () => {
    expect(['Arun','Swe','Raja']).toContainEqual('Swe');
})

test('Todo Title should have delectus aut autem', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        console.log(data.data);
        expect(data.data.title).toBe('delectus aut autem');
    })
})

