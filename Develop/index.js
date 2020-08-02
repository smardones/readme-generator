const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        massage: "What is your email?"
    },

    {
        type: "input",
        name: "title",
        message: "What is the project's name?"
    },

    {
        type: "input",
        name: "description",
        message: "Please describe the project."
    },

    {
        type: "input",
        name: "installation",
        message: "Please advise how to install the project."
    },

    {
        type: "input",
        name: "usage",
        message: "Please describe the uses and functionality of the project."
    },

    {
        type: "list",
        name: "license",
        message: "What is the project's license?",
        choices: [
            "MIT",
            "GNUGPLv3",
            "Apache",
            "Unilicense"
        ]
    },

    {
        type: "input",
        name: "contributing",
        message: "What are the rules for contributing to the project?"
    },

    {
        type: "input",
        name: "test",
        message: "Please provide a description of tests for the project."
    }

];


// function to write README file
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme file created!'
            });
    });
})
};

// function to initialize program
const init = () => {
    console.log("Welcome to the ReadMe Generator! Please answer the below questions:");
    return inquirer.prompt(questions);
    

}

// function call to initialize program
init()
.then(readMeData => {
    return generateReadMe(readMeData)
})
.then(resultingMarkDown => 
    writeToFile(resultingMarkDown))
.catch(err => {
    console.log(err);
});


