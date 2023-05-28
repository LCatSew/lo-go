const inquirer = require('inquirer');

const SHAPES = require('./lib/shapes.js');
const { writeFile } = require('fs').promises;

console.log(SHAPES);

const shapes = new SHAPES();

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter up to 3 characters',
            name: 'charInput',
        },
        {
            type: 'input',
            message: 'Please enter a color keyword',
            name: 'colorInput',
        },
        {
            type: 'list',
            message: 'What kind of shape would you like your license to be?',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shapeSelect',
        },
    ])
}

const init = () => {
    promptUser()
    .then((answers) => writeFile('logo.svg', SHAPES(answers)))
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.error(err));
}

init();