const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ managerName, jobTitle, employeeID, email, officeNumber, github}) =>
 `<!DOCTYPE html>
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
     <div class="profile-card">
         <div class="card-header">
             <h3>${managerName}</h3>
             <p>${jobTitle}</p>
         </div>
         <div class="card-details">
             <p>ID: ${employeeID}</p>
             <p>Email: <a href="mailto:${email}">${email}</a></p>
             <p>Office Num: ${officeNumber}</p>
             <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
         </div>
     </div>
 </body>
 </html>
 `

 inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the team manager name: ',
        },
        {
            type: 'input',
            name: 'jobTitle',
            message: 'Please enter your Job Title: ',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email: ',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number: ',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github: ',
        },
    ])
    .then((responses) => {
        const htmlPage = generateHTML(responses);

        fs.writeFile('index.html', htmlPage, (err) =>
            err ? console.log(err) : console.log('You have successfully generated a Team Profile!'))
    })