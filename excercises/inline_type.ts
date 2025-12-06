// TODO: Write your code here
// Create the student variable with inline object type annotation
let student : {name: string, studentId: number, isEnrolled: boolean} = {
    name: "Sarah Johnson",
    studentId: 12345,
    isEnrolled: true
}
// Create the course variable with inline object type annotation
let course: {title: string, credits: number, instructor: string} = {
    title: "Introduction to TypeScript",
    credits: 3,
    instructor: "Dr. Smith"
}
// Print the required information

console.log(student.name);
console.log(student.studentId);
console.log(course.title);
console.log(course.credits);