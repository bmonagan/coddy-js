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
    title: 'Write unit tests',
    status: 'done'
};
let testTasks: Task[] = [firstTask,secondTask, thirdTask];
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
let progressTasks = changeTaskStatus(testTasks,1,'in-progress');
let completedTasks = changeTaskStatus(progressTasks,2,'done');

console.log(getTaskInfo(testTasks[0]));
console.log(getTaskInfo(progressTasks[0]));
console.log(getTaskInfo(completedTasks[1]));
console.log(testTasks[0].status);
console.log(completedTasks[1].status);
