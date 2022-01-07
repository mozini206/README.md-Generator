// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {

    switch(answers.license){
        case 'MIT':
            return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
            break;

        case 'APM':
            return `[![License: APM](https://img.shields.io/badge/License-APM-red.svg)`
            break;

        case 'NPM':
            return `!License: NPM](https://img.shields.io/badge/License-NPM-green.svg)`
            break;

        case 'GitHub':
            return `![License: GitHub](https://img.shields.io/badge/License-GitHub-blue.svg)`
            break;

        case 'DUB':
            return `![License: DUB](https://img.shields.io/badge/License-DUB-orange.svg)`
            break;

        case 'Bower':
            return `![License: Bower](https://img.shields.io/badge/License-Bower-yellow.svg)`
            break;

        case 'Hex.pm':
            return `![License: Hex.pm](https://img.shields.io/badge/License-Hex.pm-yellow.svg)`
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

## License

${renderLicenseBadge(answers)}
     
## Description      

${answers.description}
  
## Table of Contents
  
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contribution)
-[Tests](#tests)
-[Questions](#questions)

  
     
## Installation:

${answers.installation}



## Usage

${answers.usage}



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
  