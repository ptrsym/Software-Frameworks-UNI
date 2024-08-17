"use strict"

//task 4
const fs = require('fs');
const path = require('path');

const packageJson = fs.readFileSync(path.join(__dirname, 'package.json'));
const packageObj = JSON.parse(packageJson);

console.log('Dependencies: ', packageObj.dependencies);

//output the sum of 2 numbers entered by the user
//output should look like sum of numbers is xx
// make sure both values entered are numbers. (hint isNaN())

const prompt = require('prompt');

var schema = {
    properties: {
        num1: {
            description: 'enter a number to be summed: ',
            conform: (num1) => !isNaN(num1),
            message: 'must enter a valid number',
        },
        num2: {
            description: 'enter a second number: ',
            conform: (num2) => !isNaN(num2),
            message: 'must enter a valid number',
        }
    }
};

prompt.start();

prompt.get(schema, function (err, result) {
    if (err){
        console.error('Error', err);
        return;
    }
    const num1 = parseFloat(result.num1);
    const num2 = parseFloat(result.num2);
    console.log("Sum of numbers is: " + (num1 + num2));
});