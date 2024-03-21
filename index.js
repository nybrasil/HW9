// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your note:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text of your note:',
    },
  ];



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${fileName} has been created successfully.`);
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
