import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TaskService{
 
  addTask(newTask){
    console.log('task', newTask)
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
    
  }
}
export const taskService = new TaskService