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
    title: 'Learn TypeScript basics',
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
    let newId = tasklist.length + 1;
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

let mixedTasks: Task[] = [firstTask,secondTask, thirdTask];

const todoTasks = listTasksByStatus(mixedTasks,'todo');
const inProgressTasks = listTasksByStatus(mixedTasks,'in-progress');
const doneTasks = listTasksByStatus(mixedTasks,'done');

console.log(mixedTasks.length);
console.log(todoTasks.length);
console.log(inProgressTasks.length);
console.log(doneTasks.length);
console.log(getTaskInfo(todoTasks[0]));
console.log(getTaskInfo(inProgressTasks[0]));
console.log(getTaskInfo(doneTasks[0]));