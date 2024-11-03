<template>
  <HeaderComponent />

  <main class="centered-container">
    <form id="radioBtns">
      <div class="div-radio">
        <label for="all">All</label>
        <input
          type="radio"
          id="all"
          name="filter"
          value="all"
          v-model="filter"
        />
      </div>

      <div class="div-radio">
        <label for="open">Open</label>
        <input
          type="radio"
          id="open"
          name="filter"
          value="open"
          v-model="filter"
        />
      </div>

      <div class="div-radio">
        <label for="done">Done</label>
        <input
          type="radio"
          id="done"
          name="filter"
          value="done"
          v-model="filter"
        />
      </div>
    </form>
    <form @submit.prevent="addTodo">
      <input
        ref="todoInput"
        v-model="newTodo"
        @keydown.enter="addTodo"
        type="text"
        id="add"
        placeholder="Enter your Todo..."
        class="same-width"
      /><label for="add"></label>
    </form>

    <button @click="addTodo" id="addBtn" class="same-width">
      Add New ToDos
    </button>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input
          type="checkbox"
          name="`todo-$(todo.id)`"
          :id="`todo-$(todo.id)`"
          :checked="todo.done"
          @change="toggleTodoStatus(todo)"
        />
        <label v-bind:for="`todo-$(todo.id)`">
          {{ todo.description }}
        </label>
      </li>
    </ul>
    <button id="rmButton" @click="removeDoneTodos" class="same-width">
      Remove Done ToDos
    </button>
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import RadioButtons from './components/RadioButtons.vue'
import InputAddTodo from './components/InputAddTodo.vue'
import ButtonAddTodo from './components/ButtonAddTodo.vue'

export default {
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],

      newTodo: '',
      filter: 'all',
    }
  },
  components: { HeaderComponent, RadioButtons, InputAddTodo, ButtonAddTodo },
  computed: {
    filteredTodos() {
      if (this.filter === 'open') {
        return this.todos.filter(todo => !todo.done)
      } else if (this.filter === 'done') {
        return this.todos.filter(todo => todo.done)
      } else {
        return this.todos // Shows all todos if 'all' is selected
      }
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          description: this.newTodo,
          done: false,
          id: this.todos.length + 1,
        })
        this.newTodo = ''
        ;(this.filter = 'all'), this.saveTodos()
        this.$refs.todoInput.focus()
      }
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos)) // Save todos array
    },
    toggleTodoStatus(todo) {
      todo.done = !todo.done
      this.saveTodos() // Save updated todos to local storage
    },
    removeDoneTodos() {
      this.todos = this.todos.filter(todo => !todo.done)
      this.filter = 'all'
      this.saveTodos()
    },
  },
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

main {
  padding-left: 50px;
  background: linear-gradient(315deg, #5a75ce, #0a1e65);
  height: 100vh;
  /* display: flex; */
  flex-direction: column;
  flex-grow: 1; /* Allows main to take up available space */
  margin-inline: -1rem;
}

ul {
  color: #ff7eff;
}

#rmButton {
  background-color: #9372ff;
  color: #d5ff00;
  border: transparent;
  border-radius: 3px;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 10px;
  box-shadow: 3px 3px 5px 1px #d5ff00;
  margin-top: auto; /* Push the remove button to the bottom */
}

.same-width {
  width: 100%; /* or specify a fixed width, e.g., 300px */
  max-width: 300px; /* Optional, to limit maximum width */
  box-sizing: border-box; /* Ensures padding is included in width */
  margin: 0.5rem 0; /* Add some spacing between elements */
}
</style>
