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
    title: 'Learn TypeScript',
    status: 'todo'
};
let secondTask: Task = {
    id: 2,
    title: 'Build a simple app',
    status: 'in-progress'

};
let thirdTask: Task = {
    id: 3,
    title: 'Deploy to production',
    status: 'done'
};

// Create the getTaskInfo function
function getTaskInfo(task:Task): string { 
    return `Task ${task.id}: ${task.title} - Status: ${task.status}`;
}
function addTask(tasklist: Task[], title: string): Task[] { 
    let newId = tasklist[tasklist.length -1].id + 1;
    let new_obj: Task = {
        id: newId,
        title: title,
        status: "todo" } 
    let new_tasklist: Task[] = [...tasklist, new_obj];
    return new_tasklist;
}
function changeTaskStatus(tasklist: Task[], taskId: number, newStatus: Status): Task[] {
    
    const new_tasklist: Task[] = tasklist.map(task => {
        
        if (task.id === taskId) {
    
            return {
                ...task, 
                status: newStatus 
            };
        }
        return task;
    });

    return new_tasklist;
}
function listTasksByStatus(taskList: Task[], status:Status): Task[]{
    const new_tasklist: Task[] = taskList.filter((task) => task.status === status);
    return new_tasklist;

}
function printTaskSummary(task:Task): void{
    console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
}
function printAllTaskSummaries(tasklist: Task[]): void {
    for (let task of tasklist) {
        printTaskSummary(task);}
}
let mixedTasks: Task[] = [firstTask,secondTask, thirdTask];

const todoTasks = listTasksByStatus(mixedTasks,'todo');
const inProgressTasks = listTasksByStatus(mixedTasks,'in-progress');
let fakeTask: Task = {id: 8, title: "Plan project", status:"done"};
let doneTasks = [];
doneTasks.push(fakeTask);
let simpleTasks: Task[] = [
    {id:101, title: "Design user interface", status: 'todo'},
    {id:102, title:"Implement authentication", status: 'in-progress'},
    {id:103, title:"Deploy to production", status: 'done'}
];

let projectTasks: Task[] = [
    {id:201, title:"Setup development environment", status:'done'},
    {id:202, title:"Create project structure", status:'todo'},
];

let expandedTasks = addTask(projectTasks, "Write documentation");
let updatedProjectTasks = changeTaskStatus(expandedTasks, 202, 'in-progress');
let finalTasks = changeTaskStatus(updatedProjectTasks, 203, 'done');
let completedProjectTasks = listTasksByStatus(finalTasks, 'done');

console.log(projectTasks.length);
console.log(finalTasks.length);
console.log(completedProjectTasks.length);
printTaskSummary(completedProjectTasks[0]);
printTaskSummary(completedProjectTasks[completedProjectTasks.length - 1]);
printAllTaskSummaries(finalTasks);