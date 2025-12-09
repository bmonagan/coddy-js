// TODO: Write your code here

// Create the Task interface
type Status = "todo" | "in-progress" | "done";
interface Task {
    id: number,
    title: string,
    status: Status
}


// Create the task variables
let firstTask: Task = {
    id: 1,
    title: 'Learn TypeScript interfaces',
    status: 'todo'
};
let secondTask: Task = {
    id: 2,
    title: 'Build task management app',
    status: 'in-progress'

};
let thirdTask: Task = {
    id: 3,
    title: 'Write unit tests',
    status: 'done'
};

// Create the getTaskInfo function
function getTaskInfo(task:Task): string { 
    return `Task ${task.id}: ${task.title} - ${task.status}`;
}
// Print the required outputs

console.log(getTaskInfo(firstTask));
console.log(getTaskInfo(secondTask));
console.log(getTaskInfo(thirdTask));
console.log(firstTask.status);
console.log(secondTask.title);