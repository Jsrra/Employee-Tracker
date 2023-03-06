const inquirer = require(`inquirer`)

function promptQuestions() {
    inquirer.prompt([{
        type: `list`,
        name: `menu`,
        message: `What would you like to do`,
        choices: [`View all employees`, `Add Employee`, `Update Employee Role`, `View all roles`, `Add role`, `View all departments`, ` Add department`]
    }])
}

function init() {
    console.log(`Welcome to Employee Tracker!!!`);
    promptQuestions()
}

init(); 