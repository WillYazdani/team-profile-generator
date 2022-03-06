const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
}

const addEmployee = () => {}

const newEngineer = [
    {
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
        type: 'input',
        name: 'github',
        message: 'Enter employee Github:',
        validate: (userInput) => {
            if (userInput) {
                return true
            } return false;
        }
    }
]