// Generic interface for inventory items
interface InventoryItem<T> {
  id: number;
  quantity: number;
  details: T;
}

// Type aliases
type Book = {
  title: string;
  author: string;
};

type Electronic = {
  brand: string;
  model: string;
};

type BookItem = InventoryItem<Book>;
type ElectronicItem = InventoryItem<Electronic>;

// Generic function to add items to inventory
function addItem<T>(inventory: InventoryItem<T>[], item: InventoryItem<T>): void {
  inventory.push(item);
}

// Generic function to find items by ID
function findItemById<T>(inventory: InventoryItem<T>[], id: number): InventoryItem<T> | undefined {
  return inventory.find(item => item.id === id);
}

// Inventory arrays
const bookStore: BookItem[] = [];
const electronicStore: ElectronicItem[] = [];

// Add some initial items
addItem(bookStore, { id: 100, quantity: 5, details: { title: "JavaScript Guide", author: "John Doe" } });
addItem(electronicStore, { id: 200, quantity: 3, details: { brand: "Apple", model: "iPhone 14" } });

// Function to get item details using type guards
function getItemDetails(item: InventoryItem<any>): void {
  if ('title' in item.details) {
    console.log(`Book: ${item.details.title} by ${item.details.author}`);
  } else if ('brand' in item.details) {
    console.log(`Electronic: ${item.details.brand} ${item.details.model}`);
  } else {
    console.log("Unknown item type");
  }
}

// Test with items from existing stores
const foundBook = findItemById(bookStore, 100);
if (foundBook) {
  getItemDetails(foundBook);
}

const foundElectronic = findItemById(electronicStore, 200);
if (foundElectronic) {
  getItemDetails(foundElectronic);
}

// Task interface and functions (adding them here since they're referenced)
interface Task {
    id: number;
    title: string;
    status: 'todo' | 'in-progress' | 'done';
}

function addTask(tasks: Task[], newTask: Task): Task[] {
    return [...tasks, newTask];
}

function changeTaskStatus(task: Task, newStatus: 'todo' | 'in-progress' | 'done'): Task {
    return { ...task, status: newStatus };
}

function listTasksByStatus(tasks: Task[], status: 'todo' | 'in-progress' | 'done'): Task[] {
    return tasks.filter(task => task.status === status);
}

function printTaskSummary(task: Task): void {
    console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
}

function printAllTaskSummaries(taskList: Task[]): void {
    for (let task of taskList) {
        printTaskSummary(task);
    }
}

// Create projectTasks with initial tasks
const projectTasks: Task[] = [
  { id: 201, title: "Setup development environment", status: 'done' },
  { id: 202, title: "Create project structure", status: 'todo' }
];

// Perform operations in sequence
const expandedTasks = addTask(projectTasks, { id: 203, title: "Write documentation", status: 'todo' });
const updatedProjectTasks = expandedTasks.map(task => task.id === 202 ? changeTaskStatus(task, 'in-progress') : task);
const finalTasks = updatedProjectTasks.map(task => task.id === 203 ? changeTaskStatus(task, 'done') : task);
const completedProjectTasks = listTasksByStatus(finalTasks, 'done');

// Print outputs
console.log(projectTasks.length);
console.log(finalTasks.length);
console.log(completedProjectTasks.length);
printTaskSummary(completedProjectTasks[0]);
printTaskSummary(completedProjectTasks[completedProjectTasks.length - 1]);
printAllTaskSummaries(finalTasks);