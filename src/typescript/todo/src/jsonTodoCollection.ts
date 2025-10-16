// store application data in a file named `Todos.json`
import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

type schemaType = {
  tasks: { id: number; task: string; complete: boolean }[];
};

export class JsonTodoCollection extends TodoCollection {
  private database: LowSync<schemaType>;
  constructor(public userName: string, todoItems: TodoItem[] = []) {
    super(userName, []);
    const adapter = new JSONFileSync<schemaType>("Todos.json");
    this.database = new LowSync(adapter, { tasks: [] });
    this.database.read();
    if (this.database.data.tasks && this.database.data.tasks.length > 0) {
      let dbItems = this.database.data.tasks;
      dbItems.forEach((item) =>
        this.itemMap.set(
          item.id,
          new TodoItem(item.id, item.task, item.complete)
        )
      );
    } else {
      this.database.data.tasks = todoItems.map((item) => ({
        id: item.id,
        task: item.task,
        complete: item.complete,
      }));
      this.database.write();
      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
  }
  addTodo(task: string): number {
    let result = super.addTodo(task);
    this.storeTasks();
    return result;
  }
  markComplete(id: number, complete: boolean): void {
    super.markComplete(id, complete);
    this.storeTasks();
  }
  removeComplete(): void {
    super.removeComplete();
    this.storeTasks();
  }
  private storeTasks() {
    this.database.data.tasks = [...this.itemMap.values()].map((item) => ({
      id: item.id,
      task: item.task,
      complete: item.complete,
    }));
    this.database.write();
  }
}
