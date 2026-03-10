export class Person {
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // TODO: Add introduce() method returning "Hi, I'm ${name}"
  introduce() {
   return `Hi, I'm ${this.name}`; 
  }
  
}
import { Person } from './person.js';

export class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
    this.grades = [];
  }
  
  getGPA() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    const average = sum / this.grades.length;
    return (average / 25).toFixed(2); // Convert to 4.0 scale
  }
  
  // TODO: Override introduce() to return ${super.introduce()}, a ${this.major} student
  introduce() {
    return `${super.introduce()}, a ${this.major} student`;
  }
  
  // TODO: Add addGrade(grade) method that takes a grade between 0 and 100
  addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
        this.grades.push(grade);
    }
    else {
        console.log("Grade must be between 0 and 100");
    }
  }
  import { Person } from './person.js';

export class Professor extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
  
  // Professor-specific method
  teach(course) {
    return `${this.name} is teaching ${course}`;
  }
  
  // TODO: Override introduce() to return "Prof. ${name} from ${department}"
  introduce () {
    return `Prof. ${this.name} from ${this.department}`;
  }
  
}
import { Person } from './person.js';
import { Student } from './student.js';
import { Professor } from './professor.js';

// Create people
const student1 = new Student('Alice', 20, 'Computer Science');
const prof1 = new Professor('Dr. Johnson', 50, 'Mathematics');

console.log(student1.introduce()); // "Hi, I'm Alice, a Computer Science student"
console.log(prof1.introduce())     // "Prof. Dr. Johnson from Mathematics"

student1.addGrade(85);
student1.addGrade(90);
student1.addGrade(95);
console.log(`${student1.name}'s GPA: ${student1.getGPA()}`); // ~3.6

student1.addGrade(105); // Should log: "Grade must be between 0 and 100"