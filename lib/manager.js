const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
    getofficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return this.role;
    }
}
module.exports = manager;