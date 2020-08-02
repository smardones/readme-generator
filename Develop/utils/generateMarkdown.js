// function to generate markdown for README

function generateMarkdown(data) {
  
  return `# ${data.title}
          
          ## Description
          ${data.description}

          ## Table of Contents
          * [Installation](#Installation)
          * [Usage](#Usage)
          * [License](#License)
          * [Contributing](#Contributing)
          * [Tests](#Tests)
          * [Questions/Contact](#Questions?)

          ## Installation
          ${data.installation}

          ## Usage
          ${data.usage}

          ## License
          ${data.license}

          ## Contributing
          ${data.contributing}

          ## Tests
          ${data.tests}

          ## Questions?
          Feel free to contact me with question:
          GitHub - [${data.username}]("https://github.com/${data.username}")
          Email - [${data.email}]("${data.email}")

`;
}


module.exports = generateMarkdown;
