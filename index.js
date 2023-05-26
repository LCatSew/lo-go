// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const SHAPES = require('./lib/shapes.js');
const { writeFile } = require('fs').promises;

console.log(SHAPES);

const shapes = new SHAPES();

const promptUser = ()