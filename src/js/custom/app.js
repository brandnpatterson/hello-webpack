class Todos {
    init() {
        this.cacheDOM();
        this.events();
    }

    // cache all elements
    cacheDOM() {
        this.todoList = document.querySelector('.todo-list');

        // create todo
        this.btnCreate = document.querySelector('.btn-create');
        this.inputCreate = document.querySelector('.input-create');

        // edit todo
        this.btnEdit = document.querySelector('.btn-edit');
        this.editMode = false;

        // delete todo
        this.btnsDelete = Array.from(document.querySelectorAll('.btn-delete'));
    }

    events() {
        this.btnCreate.addEventListener('click', () => this.create());
        this.btnEdit.addEventListener('click', () => this.edit());
        // dynamic events
        document.addEventListener('click', e => {
            if (e.target.classList.contains('btn-delete')) {
                this.delete(e);
            }
            if (e.target.classList.contains('btn-confirm')) {
                this.confirmDelete(e);
            }
        });
        // enter key
        this.inputCreate.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                this.btnCreate.click();
            }
        });
    }

    create() {
        let todo = document.createElement('div');
        todo.className = 'todo';

        let todoMarkup = `
            <input class="hidden btn btn-delete" type="button" value="X">
            <input class="todo-checkbox" type="checkbox">
            <input type="text" name="todo" value="${this.inputCreate.value}" />
            <input class="hidden btn btn-confirm" type="button" value="√">
        `;

        todo.innerHTML = todoMarkup;

        this.todoList.appendChild(todo);

        this.inputCreate.value = '';
    }

    edit() {
        let btnDelete = Array.from(document.querySelectorAll('.btn-delete'));
        let checkboxes = Array.from(document.querySelectorAll('.todo-checkbox'));

        if (this.editMode === false) {
            this.editMode = true;
        } else {
            this.editMode = false;
        }
        this.btnCreate.disabled = this.editMode;
        this.inputCreate.disabled = this.editMode;

        checkboxes.map(checkbox => {
            checkbox.classList.toggle('hidden');
        });
        btnDelete.map(checkbox => {
            checkbox.classList.toggle('hidden');
        });

        this.btnEdit.classList.toggle('edit-mode');
    }

    delete(e) {
        Array.from(e.target.parentNode.childNodes).map(child => {
            if (child.classList && child.classList.contains('btn-confirm')) {
                child.classList.toggle('hidden');
            }
        });
    }

    confirmDelete(e) {
        e.target.parentNode.remove();
    }
}
let todos = new Todos;
todos.init();
