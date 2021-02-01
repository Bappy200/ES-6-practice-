class Student{
    constructor(name, roll, age){
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.collageName = 'jessore polytechnic institute';
    }
}

const student1 = new Student('sajjadul', 915632, 21);
const student2 = new Student('jewel', 915679, 20);

console.log(student1)
console.log(student2);

console.log(student1.name);
console.log(student2.age);