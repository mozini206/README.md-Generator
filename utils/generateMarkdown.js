// renders license badge and link
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
  

  
  // function that generates markdown for README.md
  function generateMarkdown(answers) {
 
    return `# ${answers.title}

## License

${renderLicenseBadge(answers)}
     
## Description
     
🔍 ${answers.description}
  
## Table of Contents
  
*[Description](#description)

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contribution)

*[Tests](#tests)

*[Questions](#questions)

  
     
## Installation:
💾
\`\`\`
${answers.installation}
\`\`\`



## Usage
🖥️
Run the following command to get started.
\`\`\`
${answers.usage}
\`\`\`



## Contribution

👪 ${answers.contribution}


## Tests
\`\`\`
${answers.tests}
\`\`\`


## Questions

📧 Email me with any questions: ${answers.questions}
🤔 Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

`;
   }
  
  module.exports = generateMarkdown;
  