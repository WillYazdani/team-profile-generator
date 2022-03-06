const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const createPage = require('./src/generate-team');

// employee
var employees = [];

// initial question
const newEmployee = () => {
    return inquirer.prompt([{
        name: 'newEmployee',
        type: 'list',
        message: "Add a new employee?",
        choices: ['Yes', 'No'],
    }])
    .then(answer => {
        if (answer.newEmployee === 'Yes') {
        addEmployee();
        } else {
            console.log('Bye-Bye');
            writeToFile(createPage(employees));
        }
    })
};

// employee info
const addEmployee = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter employee name:',
        validate: (userInput) => {
            if (userInput) {
                return true;
            } return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email:',
        validate: (userInput) => {
            if (userInput) {
                return true;
            } return false;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
        validate: (userInput) => {
            if (userInput) {
                return true
            } return false;
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select role:',
        choices: ['Intern', 'Engineer', 'Manager'],
    }])
    .then(employee => {
        if (employee.role === 'Intern') {
            addIntern(employee);
        } else if (employee.role === 'Engineer') {
            addEngineer(employee);
        } else if (employee.role === 'Manager') {
            addManager(employee);
        }
    })
};

// Intern info
const addIntern = (employee) => {
    return inquirer.prompt([{
        type: 'input',
        name: 'school',
        message: "Enter employee's shool:",
        validate: (userInput) => {
            if (userInput) {
                return true
            } return false
        }
    }])
    .then(data => {
        const {
            name,
            email,
            id
        } = employee
        let person = new Intern(name, email, id, data.school);
        employees.push(person);
        newEmployee();
    })
};

// Engineer info
const addEngineer = (employee) => {
    return inquirer.prompt([{
        type: 'input',
        name: 'github',
        message: "Enter employee's Github username:",
        validate: (userInput) => {
            if (userInput) {
                return true
            } return false
        }
    }])
    .then(data => {
        const {
            name,
            email,
            id
        } = employee
        let person = new Intern(name, email, id, data.github);
        employees.push(person);
        newEmployee();
    })
};

// Manager info
const addManager = (employee) => {
    return inquirer.prompt([{
        type: 'input',
        name: 'office',
        message: "Enter employee's office number:",
        validate: (userInput) => {
            if (userInput) {
                return true
            } return false
        }
    }])
    .then(data => {
        const {
            name,
            email,
            id
        } = employee
        let person = new Intern(name, email, id, data.office);
        employees.push(person);
        newEmployee();
    })
};

const writeToFile = (data) => {
    return new Promise((resolve, reject) => { 
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'New member added.'
            });
        });
    });
};

newEmployee()