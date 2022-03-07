const Intern = require('../lib/Intern.js');

test('intern criteria', () => {
    const intern = new Intern('Will', 'will@mail.com', '111', 'umd');
    expect(intern.name).toBe('Will');
    expect(intern.email).toBe('will@mail.com');
    expect(intern.id).toBe('111');
    expect(intern.school).toBe('umd');
});