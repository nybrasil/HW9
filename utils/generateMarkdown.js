// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license && license !== 'None') {
      return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license !== 'None') {
      return `[License](https://opensource.org/licenses/${license})`;
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'None') {
      return `## License

This project is licensed under the ${license} License. Click [here](${renderLicenseLink(license)}) for more details.

`;
  } else {
      return '';
  }
}

// TODO: Create a function to generate markdown for README
// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about this project, please visit [GitHub](https://github.com/${data.githubUsername}) or contact me via email at ${data.email}.
`;
}

module.exports = { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown };
