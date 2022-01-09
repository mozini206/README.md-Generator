// packages required for this project
//inquirer - collect user input
// fs - read, write and append files

const inquirer = require("inquirer");
const fs = require('fs')

const generateMarkdown = require("./utils/generateMarkdown");


// The following is an array of questions for the user
const questions = [

    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'username',
        validate: function(answers){
            if(answers.length < 1){
                console.log("Enter a valid GitHub Username....")
            } else {
                return true;
            }
            
        }
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'questions',
        validate: function(answers){
            if(answers.length < 1){
                console.log('Enter a valid email address.....')
            } else {
                return true;
            }
            
        }
    },


    {
        type: 'input',
        message: "What is your project's name?",
        name: 'title',
        validate: function(answers){
            if(answers.length < 1){
                console.log('Stop playing :( Enter a valid project name....')
            } else {
                return true;
            }
        }
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

// The following functions writes to the README.md file
function writeToFile(fileName, data) {
    fs.writeFile('README.md',generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Created README.md successfully')
  );
}

// Initializes the app 
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile("README.md", answers )
            
        })
        
}

// Function call to initialize app
init();
