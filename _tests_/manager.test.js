const Manager = require('../lib/Manager');

test('manager criteria', () => {
    const manager = new Manager('Will', 'will@mail.com', '111', '222');
    expect(manager.name).toBe('Will');
    expect(manager.email).toBe('will@mail.com');
    expect(manager.id).toBe('111');
    expect(manager.officeNumber).toBe('222');
});