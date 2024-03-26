// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

// Array of questions for user input
const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: input => {
          if (input) {
              return true;
          } else {
              return 'Please enter the title of your project.';
          }
      }
  },
  {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:'
  },
  {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:'
  },
  {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:'
  },
  {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?'
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
  }
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
//function init() {}

// Function to initialize app
function init() {
  // Prompt user with questions
  inquirer
      .prompt(questions)
      .then(answers => {
          // Process user answers and generate README content
          const readmeContent = generateMarkdown(answers);
          // Write README file
          writeToFile('README.md', readmeContent);
      })
      .catch(error => {
          console.error('Error occurred while prompting questions:', error);
      });
    }   

// Function call to initialize app
init();
