class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;

        if (students && students instanceof Array) {
            this.students = students;
        } else {
            this.students = [];
        }

    }
    registerStudent(student) {
        //check to see if same email exists in array
        const result = this.students.filter(s => s.email === student.email);
        if (result.length > 0) {
            console.log(`Student is already registered`);
        } else {
            // if not found add to array
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`);
        }
        
        return this.students;
    }
}