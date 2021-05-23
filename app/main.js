import { ListController } from "./Controllers/ListController.js";
import { TaskController } from "./Controllers/TaskController.js";

class App {
  listController = new ListController();
  taskController = new TaskController();
}

const app = new App();


window["app"] = new App();
