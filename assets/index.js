// const inquirer = require(`inquirer`)
// const logo = require('asciiart-logo');

// function promptQuestion() {
//     inquirer.prompt([{
//         type: `list`,
//         name: `menu`,
//         message: `What would you like to do`,
//         choices: [`View all employees`, `Add Employee`, `Update Employee Role`, `View all roles`, `Add role`, `View all departments`, `Add department`]
//     }])
//         .then(function (answer) {
//             switch (answer.menu) {
//                 case `View all employees`:
//                     console.log(`View all employees selected`);
//                     // get employee table
//                     db.query(`SELECT * FROM employee`, function (err, results) {
//                         console.log(results);
//                     })
//                     break;
//                 case `Add Employee`:
//                     console.log(`Add employee Selected`);
//                     // insert employee to db
//                     break;
//                 case `Update Employee Role`:
//                     console.log(`Update Employee Role Selected`);
//                     // update employee role
//                     break;
//                 case `View all roles`:
//                     console.log(`View all roles selected`);
//                     // get role table
//                     break;
//                 case `Add role`:
//                     console.log(`Add role selected`);
//                     // insert role to role table
//                     break;
//                 case `View all departments`:
//                     console.log(`View all departments selected`);
//                     // get departments table
//                     db.query(`SELECT * FROM department`, function (err, results) {
//                         console.log(results);
//                     })
//                     break;
//                 case ` Add department`:
//                     console.log(` Add department selected`);
//                     // insert department
//                     break;
//             }
//         })
// }

// function init() {
//     console.log(logo({
//         name: 'Employee Tracker',
//         font: 'Speed',
//         lineChars: 10,
//         padding: 2,
//         margin: 3,
//         borderColor: 'grey',
//         logoColor: 'bold-green',
//         textColor: 'green',
//     })
//         .render());
//     promptQuestion()
// }

// init(); 