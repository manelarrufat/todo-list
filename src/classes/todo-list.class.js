import { Todo } from ".";
import { countTodo } from "../js/componentes";

export class TodoList {

    constructor() {
        // this.todos = [];

        this.cargarLocalStorage();

        this.countTodo();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
        this.countTodo();
    }

    eliminarTodo(id) {
        // Elimina el todo de l'id que enviem de l'array de todos
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
        this.countTodo();
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {
            // console.log(todo.id, id);
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
        this.countTodo();
    }

    eliminarCompletados() {
        // Elimina els todo completats de l'array de todos
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []);

        this.todos = this.todos.map(obj => Todo.fromJson(obj));

    }

    countTodo() {
        let pendientes = 0;
        let countBox = countTodo.firstElementChild;
        for (let todo of this.todos) {
            (!todo.completado === true) ? pendientes++ : null;
        }
        countBox.innerHTML = pendientes;
    }

}