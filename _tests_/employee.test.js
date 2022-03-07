const Employee = require('../lib/Employee.js');

test('employee criteria', () => {
    const employee = new Employee('Will', 'will@mail.com', '111');
    expect(employee.name).toBe('Will');
    expect(employee.email).toBe('will@mail.com');
    expect(employee.id).toBe('111');
});



