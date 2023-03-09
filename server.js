
const db = require("./db/connection")
const inquirer = require(`inquirer`)
const logo = require('asciiart-logo');
require('console.table');

// Connect to database


// Query database
// db.query('SELECT * FROM students', function (err, results) {
//     console.log(results,"HEREEEEEEEEEEE");
// });

function promptQuestion() {
    inquirer.prompt([{
        type: `list`,
        name: `menu`,
        message: `What would you like to do`,
        choices: [`View all employees`, `Add Employee`, `Update Employee Role`, `View all roles`, `Add role`, `View all departments`, `Add department`]
    }])
        .then(function (answer) {
            switch (answer.menu) {
                case `View all employees`:
                    console.log(`View all employees selected`);
                    // get employee table 
                    db.query(`SELECT * FROM employee`, function (err, results) {
                        console.log(results);
                    })
                    break;
                case `Add Employee`:
                    console.log(`Add employee Selected`);
                    addEmployeeQuestions();
                    db.query(`INSERT INTO employee (first_name)`, function (err, results) {
                        console.log(results);
                    })
                    // insert employee to db
                    break;
                case `Update Employee Role`:
                    console.log(`Update Employee Role Selected`);
                    // update employee role
                    break;
                case `View all roles`:
                    console.log(`View all roles selected`);
                    // get role table
                    break;
                case `Add role`:
                    console.log(`Add role selected`);
                    addRoleQuestions();
                    return;
                    // insert role to role table
                    break;
                case `View all departments`:
                    //console.log(`View all departments selected`);
                    // get departments table
                    db.query(`SELECT * FROM department`, function (err, results) {
                        console.table(results);
                        promptQuestion();
                    })
                    break;
                case `Add department`:
                    console.log(` Add department selected`);
                    addDepartmentQuestion();
                    // console.table(employee)
                    // console log "added ${departmentName} to the database"
                    // insert department
                    break;
                // default:
                //     init();
            }
        })
}

function init() {
    console.log(logo({
        name: 'Employee Tracker',
        font: 'Speed',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'grey',
        logoColor: 'bold-green',
        textColor: 'green',
    })
        .render());
    promptQuestion()
}

init();

function addEmployeeQuestions() {
    inquirer.prompt([{
        type: `input`,
        name: `firstName`,
        message: `What is the Employees' first name?`
    }, {
        type: `input`,
        name: `lastName`,
        message: `What is the Employees' last name?`
    }, {
        type: `input`,
        name: `employeeRole`,
        message: `What is the Employees' role?`
    }])
}


function addDepartmentQuestion() {
    inquirer.prompt([{
        type: `input`,
        name: `department_name`,
        message: `What is the name of the Department?`
    }]).then(function (answer) {
        db.promise().query('INSERT INTO department set ?', answer)
            .then(function () {
                console.table("department has been added!");

                promptQuestion();
            }).catch(function (err) {
                if (err) throw err;
            })
    })
}

function addRoleQuestions() {
    inquirer.prompt([{
        type: `input`,
        name: `roleName`,
        message: `What is the name of the role?`
    }, {
        type: `input`,
        name: `roleSalary`,
        message: `What is the salary of the role?`
    }])
}