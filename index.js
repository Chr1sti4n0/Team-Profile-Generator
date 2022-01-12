const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib:/manager');
const intern = require('./lib:/intern');
const Engineer = require('./lib:/Engineer');
const employee = require('./lib:/employee')
const employeeArray = [];


    function generateHTML(employeeArray) {
        const manager = employeeArray[0]

        function generateEmployeeHTML(employees) {
            let html = "";
            for (const i = 1; i <= employeeArray.length; i++) {
                if (employeeArray)
                html = html + 
                `<div class="manager-profile-card">
                <div class="card-header">
                    <h3>${employeeArray[i].name}</h3>
                </div>
                <div class="card-details">
                    <p>ID: ${employeeArray[i].id}</p>
                    <p>Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></p>
                    <p>Office Num: ${memployeeArray[i].name}</p>
                </div>
                </div>`
            }
        }

        function generateManagerHTML(manager) {
            return `<div class="manager-profile-card">
            <div class="card-header">
                <h3>${manager.name}</h3>
            </div>
            <div class="card-details">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Num: ${manager.officeNumber}</p>
            </div>
            </div>`

        }
        return ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="./style.css" />
        </head>
            <header>
                <h1>My Team</h1>
            </header>
        
        <body>
            ${generateManagerHTML(manager)}
        </body>
        </html>`
    }
addManager()
// .then((responses) => {
//     const htmlPage = generateHTML(responses);
//     // if (responses === 'Engineer') {
//     //     return 
//     // }

//     fs.writeFile('index.html', htmlPage, (err) =>
//         err ? console.log(err) : console.log('You have successfully generated a Team Profile!'))
// })

//This function will complete the team roster generator
function finish() {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'teamMember',
            message: 'Would you like to add another member to your team or complete your team?',
            choices: ['Engineer', 'Intern', 'Complete'],
        },
    )
        .then((reponses) => {
            if (reponses.teamMember === 'Engineer') {
                return addEngineer();
            } else if (reponses.teamMember === 'Intern') {
                return addIntern();
            } else {
                fs.writeFile('index.html', generateHTML(employeeArray), (err) =>
                err ? console.log(err) : console.log('You have successfully generated a Team Profile!'))
            }
        })
}

function addManager() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter the team manager name: ',
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter their employee ID: ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter their email: ',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter their office number: ',
            },
        ])
        .then((responses) => {
            const newManager = new manager(responses.managerName, responses.employeeID, responses.email, responses.officeNumber)
            employeeArray.push(newManager);
            finish();
        })
}

function addEngineer() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the engineers name: ',
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter their employee ID: ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter their email: ',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter their github: ',
            },
        ])
        .then((responses) => {
            const newEngineer = new Engineer(responses.name, responses.employeeID, responses.email, responses.github)
            employeeArray.push(newEngineer);
            finish();
        })
}

function addIntern() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'internName',
                message: 'Please enter the interns name: ',
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter their employee ID: ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter their email: ',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter their school: ',
            },
        ])
        .then((responses) => {
            const newIntern = new intern(responses.name, responses.employeeID, responses.email, responses.school)
            employeeArray.push(newIntern);
            finish();
        })
}