class Student{
    constructor(Name, section, cls){
        this.Name = Name;
        this.section = section;
        this.cls = cls;
    }
    logMe(){
        console.log(`Student name is ${this.Name}`);
    }

    static studentId(){
        return '101';
    }
}

const yash = new Student("yash", "m-16", "BCA");
console.log(yash);
console.log(yash.logMe());
// console.log(yash.studentId()); //can not access beacause static is used 