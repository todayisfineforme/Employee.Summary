const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern'
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}
module.exports = intern;