import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";
export class ListController {
  constructor() {
    ProxyState.on('lists', this.drawList)
    loadState()
    this.drawList()

  }
  drawList() {
    let lists = ProxyState.lists
    let listElem = document.getElementById('task-list')
    let template = ''
    let total = 0

    lists.forEach((list, index) => {
      const totalDone = list.getCheckCount()
      const total = list.getTotalCount()
      const tasks = list.tasks.map((task, taskIdx) => {
        const isChecked = task.checked ? 'checked=checked' : ''
        return `<li class="d-flex justify-content-between align-items-center"> <input type="checkbox" ${isChecked} onClick="app.listController.toggleChecked(event, ${index}, ${taskIdx})"/><h3>${task.title}</h3><button onClick="app.listController.deleteTask(${index}, ${taskIdx})">Delete</button></li>`
      })
      template += /*html*/ `
      <div class="card col-3 text-white m-auto m-3" style="">
            <div class="card-header d-flex justify-content-between" style="background-color: ${list.color}">${list.name}
            <button class ="btn-info delete" onClick="app.listController.deleteList(${index})">Delete</button>
            </div>
            <div class="card-body bg-light text-dark">
            <h5> To Do: ${totalDone}/${total}</h5>
              <ul>
                ${tasks}
              </ul>
            </div>
            
            <form class="py-3 m-3" onSubmit="app.listController.addTask(event, ${index})">
                <label class="text-dark"for="task ">New Task</label>
                <input required minLength="3" maxlength="50" type="text" name="task" class="form-control">
                <button class="btn btn-primary h-50"> Task It!</button>

            </form>
          </div>

          

          `

    })
    listElem.innerHTML = template
  }

  createList(event) {
    event.preventDefault()
    let form = event.target
    let formData = {
      name: form.name.value,
      color: form.color.value,
    }
    listService.createList(formData)
    form.reset()
  }

  deleteList(index) {
    const deleteConfirm = window.confirm('Are you sure Bruh?')
    if(deleteConfirm){
      ProxyState.lists.splice(index, 1)
      saveState()
      this.drawList()
    }
  }

  addTask(event, index) {
    event.preventDefault()
    ProxyState.lists[index].addTask(event.target.task.value)
    saveState()
    this.drawList()
  }

  deleteTask(listIdx, taskIdx) {
    const deleteTask = window.confirm('You sure?')
    if(deleteTask){
      ProxyState.lists[listIdx].deleteTask(taskIdx)
      saveState()
      this.drawList()
    }
  }

  toggleChecked(event, listIndex, taskIndex) {
    ProxyState.lists[listIndex].tasks[taskIndex].toggleChecked(event.target.checked)
    saveState()
    this.drawList()
  }

}
