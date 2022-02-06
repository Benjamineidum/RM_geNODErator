// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseName => {
  if (!licenseName) {
    return '';
  }
  if (licenseName.includes('MIT')) {
    licenseName = 'MIT';
  }
  if (licenseName.includes('GNU')) {
    licenseName = 'GNU_General_Public_v3.0';
  }
  if (licenseName.includes('Mozilla')) {
    licenseName = 'Mozilla_Public_2.0';
  }
  if (licenseName.includes('Unlicense')) {
    licenseName = 'The Unlicense';
  }
  return `
![license](https://img.shields.io/badge/License-${licenseName}-blue)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
