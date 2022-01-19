const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib:/manager');
const intern = require('./lib:/intern');
const Engineer = require('./lib:/Engineer');
const employee = require('./lib:/employee')
const employeeArray = [];

//This function generates the HTML for the engineer or intern team members depending on which is selected in the terminal
function generateEmployeeHTML(employee) {
    //console.log(employeeArray);
    let html
    for (let i = 0; i < employeeArray.length; i++) {
        console.log(employeeArray[i]);
        const role = employeeArray[i].getRole();
        if (role === 'Engineer') {
            html = `<div class="engineer-profile-card">
                    <div class="card-header">
                        <h3>${employeeArray[i].getName()}</h3>
                        <h3>${employeeArray[i].getRole()}</h3>
                    </div>
                    <div class="card-details">
                        <p>ID: ${employeeArray[i].getId()}</p>
                        <p>Email: <a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></p>
                        <p>GitHub: <a href="https://github.com/${employeeArray[i].getGithub()}">${employeeArray[i].getGithub()}</a></p>
                    </div>
                </div>`

        } else if (role === "Intern") {
            html = html +
                `<div class="intern-profile-card">
                    <div class="card-header">
                        <h3>${employeeArray[i].getName()}</h3>
                        <h3>${employeeArray[i].getRole()}</h3>
                    </div>
                    <div class="card-details">
                        <p>ID: ${employeeArray[i].getId()}</p>
                        <p>Email: <a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></p>
                        <p>School: ${employeeArray[i].getSchool()}</p>
                    </div>
                </div>`
        }

    }
    return html;
}

//This function generates the HTML for the manager card
function generateManagerHTML() {
    const manager = employeeArray[0];
    return `<div class="manager-profile-card">
                <div class="card-header">
                    <h3>${manager.getName()}</h3>
                    <h3>${manager.getRole()}</h3>
                </div>
                <div class="card-details">
                    <p>ID: ${manager.getId()}</p>
                    <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <p>Office Num: ${manager.getOfficeNumber()}</p>
                </div>
            </div>` }

//This function generates the base/root of the HTML file
function generateHTML() {
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
            ${generateManagerHTML()}
            ${generateEmployeeHTML()}
        </body>
        </html>`
}

//Calls out the add manager function
addManager()

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

//This function will generate prompts to add a manager
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

//This function will generate prompts to add an engineer
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

//This function will generate prompts to add an intern
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
            const newIntern = new intern(responses.internName, responses.employeeID, responses.email, responses.school)
            employeeArray.push(newIntern);
            finish();
        })
}
