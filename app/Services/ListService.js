import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListService{
  lists = []
  createList(formData){
    let newList = new List(formData)
    ProxyState.lists = [newList, ...ProxyState.lists]
    saveState()
  }

  deleteList(index){
    ProxyState.lists.splice(index, 1)
  }

  getLists() {
    return lists
  }
}
export const listService = new ListService