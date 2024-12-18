// Function to return a license badge based on the chosen license
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    if (license === 'None') return '';
    return `![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue.svg)`;
  };
  
  // Function to return the license link
  // If there is no license, return an empty string
  const renderLicenseLink = (license) => {
    if (license === 'None') return '';
    const licenseLinks = {
      MIT: 'https://opensource.org/licenses/MIT',
      GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    };
    return licenseLinks[license];
  };
  
  // Function to return the license section of README
  // If there is no license, return an empty string
  const renderLicenseSection = (license) => {
    if (license === 'None') return '';
    return `## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  };
  
  // Function to generate markdown for README
  const generateMarkdown = (data) => {
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
  
  If you have questions, feel free to reach out:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;
  };
  
  // Export the generateMarkdown function
  export default generateMarkdown;