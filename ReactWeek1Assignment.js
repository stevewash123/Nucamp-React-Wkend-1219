class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(_name, _level, _students) {
        this.name = _name;
        this.level = _level;
        if (this.students === undefined) { this.students = []; }
        else { this.students = _students; }
    }
    registerStudent(applicant) {
        if(this.students.filter((s) => s.email === applicant.email)[0]) {
            console.log(`${applicant.name} is a duplicate in our system, please try a different student`);
        } else {
            this.students.push(applicant);
            console.log(`${applicant.name} successfully registered`);
        }
        return this.students;
    }
}