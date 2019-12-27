class Student {    
    constructor(name, email, community ){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {    
    constructor(name, level, students = [] ){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student){
        let matches = this.students.filter((s)=>{ return s.email === student.email; });

        if (matches.length === 0) {
            this.students.push(student);
            console.log(`Registering ${student.name} to the bootcamp Web Dev Fundamentals.`);
        }
        else {            
            console.log(`${student.name} is already registered.`)
        }
    }
}