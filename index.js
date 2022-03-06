const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('Engineer');
const Intern = require('Intern');
const Manager = require('Manager');

const newEngineer = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee:',
        validate: (userInput) => {
            if (userInput) {
                return true;
            } return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of the employee:',
        validate: (userInput) => {
            if (userInput) {
                return true;
            } return false;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee ID number:',
        validate: (userInput) => {
            if (userInput) {
                return true
            } return false;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the Github username of the employee:',
        validate: (userInput) => {
            if (userInput) {
                return true
            } return false;
        }
    }
]