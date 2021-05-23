import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"

export class TaskController {
  constructor() {

  }

  addTask(event, list){
    event.preventDefault()
    let form = event.target
    let newTask = {
      name: form.name.value,
    }
    taskService.addTask(newTask)

  }
  
}
