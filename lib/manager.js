const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
};
module.exports = manager;