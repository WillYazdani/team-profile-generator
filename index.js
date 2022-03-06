const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// initial question
const newEmployee = () => {
    return inquirer.prompt([{
        name: 'newEmployee',
        type: 'list',
        message: "Add a new employee?",
        choices: ['Yes', 'No'],
    }])
    .then(answer => {
        if (answer.newEmployee === 'Yes'){
        addEmployee();
        } else {
            console.log('thank you');
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
    .then(answer => {
        if (answer.role === 'Intern') {
            addIntern();
        } else if (answer.role === 'Engineer') {
            addEngineer();
        } else if (answer.role === 'Manager') {
            addManager();
        }
    })
};

// Intern info
const addIntern = () => {
    return inquirer.prompt([{

    }])
}

// Engineer info
const addIntern = () => {
    return inquirer.prompt([{
        
    }])
}

// Manager info
const addIntern = () => {
    return inquirer.prompt([{
        
    }])
}

newEmployee()