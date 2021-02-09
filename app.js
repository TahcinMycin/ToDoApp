const app = new Vue({
    el: "#app",
    data: {
        title: "✔To Do App✔",
        name: "",
        newtodo: "",
        todos: [],
        list: "",
    },
    methods: {
        addTodo() {
                this.todos.push({
                name: this.name,
                newtodo: this.newtodo,
                done: false,
            });

            this.list = "To Do List";
        	this.newtodo = "";

            if(this.todos.length > 1) {
                $("#mark").prop("disabled", false);
                $("#removeAll").prop("disabled", false);
            }
        },

        removeTodo(todo) {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);

            if(this.todos.length === 0) {
                this.list = "";
            }
        },

        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        },

        removeAll() {
            if(confirm("This will remove all the Todos from the list. Do you want to continue???", "Remove All ToDos")) {
                this.todos = [];
                this.list = "";

                $("#mark").prop("disabled", true);
                $("#removeAll").prop("disabled", true);
                this.name = "";
                $("title").text("To Do List");
            }
        }
    },
});

$("#mark").prop("disabled", true);
$("#removeAll").prop("disabled", true);

delete Vue;

setTimeout(function () {
    $("title").text("To Do List");
}, 10000);
