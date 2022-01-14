const employee = require('./employee.js')
class Engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email) 
        this.github = github;
        }
   
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;