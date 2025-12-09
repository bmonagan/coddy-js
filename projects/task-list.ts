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
let initialTasks = [firstTask,secondTask];
// Create the getTaskInfo function
function getTaskInfo(task:Task): string { 
    return `Task ${task.id}: ${task.title} (${task.status})`;
}
function addTask(tasklist: Task[], title: string): Task[] { 
    let newId = tasklist.length + 1;
    let new_obj: Task = {
        id: newId,
        title: title,
        status: "todo" } 
    let new_tasklist: Task[] = [...tasklist, new_obj];
    return new_tasklist;
}
let updatedTasks = addTask(initialTasks,'Review code changes');
// Print the required outputs
let lastIdx = updatedTasks.length - 1 
console.log(initialTasks.length);
console.log(updatedTasks.length);
console.log(getTaskInfo(updatedTasks[lastIdx]));
console.log(updatedTasks[lastIdx].title);
console.log(updatedTasks[lastIdx].status);
