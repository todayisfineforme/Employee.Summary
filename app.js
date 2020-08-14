const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const render = require('./lib/htmlRender');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(_dirname, 'output');
const outputPath = (OUTPUT_DIR, 'team.html');

const employees = [];

const generateEmployees = () => {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee\'s I.D number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s email address?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee\'s role in the company?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            when: answers => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is this engineers\'s github username?',
            when: answers => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where did this intern go to school?',
            when: answers => answers.role === 'Intern'
        },
        {
            type: 'list',
            name: 'continue',
            message: 'Would you like to add another employee?',
            choices: ['yes', 'no']
        }
    ];
    inquirer.prompt(questions).then(answers => {
        if (answers.role === 'Engineer'){
            const {name, id, email, github} = answers;
            employee = new engineer(name, id, email, github);
            employees.push(employee);
        } else if (answers.role === 'Intern'){
            const {name, id, email, school} = answers;
            employee = new intern(name, id, email, school);
            employees.push(employee);
        } else if (answers.role === 'Manager'){
            const {name, id, email, officeNumber} = answers;
            employee = new manager(name, id, email, officeNumber);
            employees.push(employee);
        };

        if (answers.continue === 'yes'){
            generateEmployees();
        } else if (answers.continue === 'no'){
            fs.writeFile(outputPath, render(employees), (err) => {
                if (err) throw err;
                console.log('Your team page is complete. please refer to result in output file');
            });
        };
    });
};

generateEmployees();
