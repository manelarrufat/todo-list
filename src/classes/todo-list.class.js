import { Todo } from ".";

export class TodoList {

    constructor() {
        // this.todos = [];

        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        // Elimina el todo de l'id que enviem de l'array de todos
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

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

}