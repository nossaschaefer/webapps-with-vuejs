import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],

      newTodo: '',
      filter: 'all',
    }
  },
  getters: {
    filteredTodos() {
      if (this.filter === 'open') {
        return this.todos.filter(todo => !todo.done)
      } else if (this.filter === 'done') {
        return this.todos.filter(todo => todo.done)
      } else {
        return this.todos
      }
    },
  },
  actions: {
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
          this.todos.push(createdTodo)
          this.newTodo = ''
          this.filter = 'all'

          this.saveTodos()
          this.$refs.todoInput.focus()
        } catch (error) {
          console.error('Error adding todo:', error)
        }
      }
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
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

        this.todos = this.todos.filter(todo => !todo.done)
        this.filter = 'all'
        this.saveTodos()
      } catch (error) {
        console.error('Error removing todos:', error)
      }
    },
    async getTodos() {
      try {
        const response = await fetch('http://localhost:3000/todos')
        if (!response.ok) {
          throw new Error('Failed to fetch todos')
        }
        const todos = await response.json()
        this.todos = todos
        this.saveTodos()
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    },
  },
})