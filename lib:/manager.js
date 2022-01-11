const employee = require('./employee.js')
class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 
        this.officeNumber = officeNumber;
        }
   
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;