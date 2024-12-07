import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state() {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    if (savedTodos.length === 0) {
      // Add default todos if there are no todos in localStorage
      savedTodos.push(
        { description: 'Learn Vue.js', done: false },
        { description: 'Build a portfolio', done: true },
        { description: 'Update resume', done: false },
      )
      localStorage.setItem('todos', JSON.stringify(savedTodos))
    }
    return {
      // todos: JSON.parse(localStorage.getItem('todos')) || [],

      newTodo: '',
      filter: 'all',
      apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
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
    // I use for my portfolio only LocalStorage so I don't need this:
    // async addTodo() {
    //   if (this.newTodo.trim()) {
    //     const newTodo = {
    //       description: this.newTodo,
    //       done: false,
    //     }
    //     try {
    //       const response = await fetch(`${this.apiBaseUrl}/todos`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(newTodo),
    //       })
    //       if (!response.ok) {
    //         throw new Error('Failed to add todo')
    //       }
    //       const createdTodo = await response.json()
    //       this.todos.push(createdTodo)
    //       this.newTodo = ''
    //       this.filter = 'all'

    //       this.saveTodos()
    //     } catch (error) {
    //       console.error('Error adding todo:', error)
    //     }
    //   }
    // },
    async addTodo() {
      if (this.newTodo.trim()) {
        const newTodo = {
          description: this.newTodo,
          done: false,
        }
        this.todos.push(newTodo)
        this.saveTodos()
        this.newTodo = ''
        this.filter = 'all'
      }
    },
    // saveTodos() {
    //   localStorage.setItem('todos', JSON.stringify(this.todos))
    // },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    // async toggleTodoStatus(todo) {
    //   todo.done = !todo.done
    //   try {
    //     const response = await fetch(`${this.apiBaseUrl}/todos/${todo.id}`, {
    //       method: 'PATCH',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ done: todo.done }),
    //     })
    //     if (!response.ok) {
    //       throw new Error(`Failed to update todo with id ${todo.id}`)
    //     }
    //     this.saveTodos()
    //   } catch (error) {
    //     console.error('Error updating todo:', error)

    //     todo.done = !todo.done
    //   }
    // },
    async toggleTodoStatus(todo) {
      todo.done = !todo.done
      this.saveTodos()
    },

    // async removeDoneTodos() {
    //   const completedTodos = this.todos.filter(todo => todo.done)
    //   try {
    //     for (const todo of completedTodos) {
    //       const response = await fetch(`${this.apiBaseUrl}/todos/${todo.id}`, {
    //         method: 'DELETE',
    //       })
    //       if (!response.ok) {
    //         throw new Error(`Failed to delete todo with id ${todo.id}`)
    //       }
    //     }

    //     this.todos = this.todos.filter(todo => !todo.done)
    //     this.filter = 'all'
    //     this.saveTodos()
    //   } catch (error) {
    //     console.error('Error removing todos:', error)
    //   }
    // },

    async removeDoneTodos() {
      this.todos = this.todos.filter(todo => !todo.done)
      this.saveTodos()
    },

    // async getTodos() {
    //   try {
    //     const response = await fetch(`${this.apiBaseUrl}/todos`)
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch todos')
    //     }
    //     const todos = await response.json()
    //     this.todos = todos
    //     this.saveTodos()
    //   } catch (error) {
    //     console.error('Error fetching todos:', error)
    //   }
    // },
  },
})
