const inquirer = require('inquirer');

const shapes = require('./lib/shapes.js');
const { writeFile } = require('fs').promises;

console.log(shapes);

const triangle = new Triangle(answers.charInput, answers.colorInput, answers.shapeSelect);
const square = new Square(answers.charInput, answers.colorInput, answers.shapeSelect);
const circle = new Circle(answers.charInput, answers.colorInput, answers.shapeSelect);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter up to 3 characters',
            name: 'charInput',
            validate: function(input) {
                var done = this.async();
                
                setTimeout(function() {
                    if (input.length > 3) {
                        done('You cannot enter a value above 3');
                    return;
                    }
                    if (input.length === 0) {
                        done('You must enter a value');
                    return;
                    }
                done(null, true);
                })
            },
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
    .then((answers) => writeFile('logo.svg', shapes(answers)))
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.error(err));
}

init();