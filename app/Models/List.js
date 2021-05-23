import { Task } from "./Task.js"


export class List{
  tasks = []
  constructor(props){
    this.name = props.name
    this.color = props.color

    if (Object.prototype.hasOwnProperty.call(props, 'tasks')) {
      this.createTasks(props.tasks)
    }
  }

  createTasks(tasks) {
    tasks.forEach((task) => this.addTask(task.title, task.checked))
  }
addTask(title, isChecked){
  const tasks = new Task(title, isChecked)
  this.tasks.push(tasks)
}
deleteTask(index){
  this.tasks.splice(index, 1)
}

getCheckCount(){
  let count = 0
  this.tasks.forEach((task) => {
    if(task.checked == true){
      count++
    }
  })
  return count
}
getTotalCount(){
  return this.tasks.length
}

toObj() {
  return {
    name: this.name,
    color: this.color,
    tasks: this.tasks.map((task) => task.toObj())
  }
}

}






console.log(List)