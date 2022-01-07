// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {

    switch(answers.license){
        case 'MIT':
            return `![License(https://img.shields.io/badge/${answers.license}-license-green.svg)`;
            break;

        case 'APM':
            return `![Badge(https://img.shields.io/badge/${answers.license}-license-green.svg)`
            break;

        case 'NPM':
            return `![Badge(https://img.shields.io/badge/${answers.license}-license-green.svg)`
            break;

        case 'GitHub':
            return `![Badge(https://img.shields.io/badge/${answers.license}-license-green.svg)`
            break;

        case 'DUB':
            return `![Badge(https://img.shields.io/badge/${answers.license}-license-green.svg)`
            break;

        case 'Bower':
            return `![Badge(https://img.shields.io/badge/${answers.license}-license-green.svg)`
            break;

        case 'Hex.pm':
            return `![Badge(https://img.shields.io/badge/${answers.license}-license-green.svg)`
            break;

        
    }
  
  } 
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  
  
  
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
  
  
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(answers) {
 
    return `# ${answers.title}
     
## Description      

${answers.description}
  
## Table of Contents
  
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License] (#license)
-[Contributing](#contribution)
-[Tests](#tests)
-[Questions](#questions)

  
     
## Installation:

${answers.installation}



## Usage

${answers.usage}

## License

${renderLicenseBadge(answers)}

## Contribution

${answers.contribution}


## Tests

${answers.tests}


## Questions

Email me with any questions: ${answers.questions}
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

`;
   }
  
  module.exports = generateMarkdown;
  