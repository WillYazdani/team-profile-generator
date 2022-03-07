const Engineer = require('../lib/Engineer');

test('engineer criteria', () => {
    const engineer = new Engineer('Will', 'will@mail.com', '111', 'willygit');
    expect(engineer.name).toBe('Will');
    expect(engineer.email).toBe('will@mail.com');
    expect(engineer.id).toBe('111');
    expect(engineer.github).toBe('willygit');
});