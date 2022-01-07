// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs')

const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'username'
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'questions'
    },


    {
        type: 'input',
        message: "What is your project's name?",
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please write a short description of your project?',
        name: 'description',

    },

    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APM', 'NPM', 'GitHub','DUB','Bower','Hex.pm']

    },

    {
        type:'input',
        message: 'What command should be run to install dependencies',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },

    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution'
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md',generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Created README.md successfully')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile("README.md", answers )
            
        })
        
}

// Function call to initialize app
init();
