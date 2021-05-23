import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

export function saveState(){
  const lists = ProxyState.lists.map((list) => list.toObj())
  localStorage.setItem('TaskMaster', JSON.stringify(lists))
  console.log('saved state', lists)
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem('TaskMaster'))
  console.log('---->', data)
  if(data){
    ProxyState.lists = data.map(data => {
      return new List(data)
    })
  }
}