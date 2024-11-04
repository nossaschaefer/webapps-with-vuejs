<template>
  <HeaderComponent />

  <main class="centered-container">
    <div class="container-radios">
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
    </div>

    <form @submit.prevent="addTodo">
      <input
        ref="todoInput"
        v-model="newTodo"
        type="text"
        id="add"
        placeholder="Enter your Todo..."
        class="same-width"
      /><label for="add"></label>
    </form>

    <ButtonAddTodo @addedTodo="addTodo" id="addBtn" class="same-width" />

    <TodoList
      :filteredTodos="filteredTodos"
      @toggleTodoStatus="toggleTodoStatus"
    />

    <ButtonRemoveTodo @removedDoneTodos="removeDoneTodos" />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import RadioButtons from './components/RadioButtons.vue'
import InputAddTodo from './components/InputAddTodo.vue'
import ButtonAddTodo from './components/ButtonAddTodo.vue'
import ButtonRemoveTodo from '@/components/ButtonRemoveTodo.vue'
import TodoList from './components/TodoList.vue'
import { useTodosStore } from '@/stores/todos.js'

export default {
  data() {
    return {
      store: useTodosStore(),
      todos: JSON.parse(localStorage.getItem('todos')) || [],

      newTodo: '',
      filter: 'all',
    }
  },
  components: {
    HeaderComponent,
    RadioButtons,
    InputAddTodo,
    ButtonAddTodo,
    ButtonRemoveTodo,
    TodoList,
  },
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
    async addTodo() {
      if (this.newTodo.trim()) {
        const newTodo = {
          description: this.newTodo,
          done: false,
        }
        try {
          const response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
          })
          if (!response.ok) {
            throw new Error('Failed to add todo')
          }
          const createdTodo = await response.json()
          this.todos.push(createdTodo) // Use the response from the server
          this.newTodo = ''
          this.filter = 'all'
          this.$refs.todoInput.focus()
          this.saveTodos()
        } catch (error) {
          console.error('Error adding todo:', error)
        }
      }
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos)) // Save todos array
    },
    async toggleTodoStatus(todo) {
      todo.done = !todo.done
      try {
        const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ done: todo.done }),
        })
        if (!response.ok) {
          throw new Error(`Failed to update todo with id ${todo.id}`)
        }
        this.saveTodos()
      } catch (error) {
        console.error('Error updating todo:', error)
        // Optionally, revert the local state if update fails
        todo.done = !todo.done
      }
    },
    async removeDoneTodos() {
      const completedTodos = this.todos.filter(todo => todo.done)
      try {
        for (const todo of completedTodos) {
          const response = await fetch(
            `http://localhost:3000/todos/${todo.id}`,
            {
              method: 'DELETE',
            },
          )
          if (!response.ok) {
            throw new Error(`Failed to delete todo with id ${todo.id}`)
          }
        }
        // Filter out deleted todos from the local list
        this.todos = this.todos.filter(todo => !todo.done)
        this.filter = 'all'
        this.saveTodos()
      } catch (error) {
        console.error('Error removing todos:', error)
      }
    },
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/todos')
      if (!response.ok) {
        throw new Error('Failed to fetch todos')
      }
      const todos = await response.json()
      this.todos = todos
      this.saveTodos() // Optionally save to localStorage if needed
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
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
  background: linear-gradient(315deg, #5a75ce, #0a1e65);
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allows main to take up available space */
  margin-inline: -0.5rem;
}

ul {
  color: #ff7eff;
  padding-left: 20px;
}

.container-liste {
  align-self: center;
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
}

.same-width {
  width: 100%; /* or specify a fixed width, e.g., 300px */
  max-width: 300px; /* Optional, to limit maximum width */
  box-sizing: border-box; /* Ensures padding is included in width */
  margin: 0.5rem 0; /* Add some spacing between elements */
  align-self: center;
}
</style>
