<template>
  <div class="container-liste">
    <ul>
      <li v-for="todo in store.filteredTodos" :key="todo.id">
        <input
          type="checkbox"
          name="`todo-$(todo.id)`"
          :id="`todo-$(todo.id)`"
          :checked="todo.done"
          @change="store.toggleTodoStatus(todo)"
        />
        <label v-bind:for="`todo-$(todo.id)`">
          {{ todo.description }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodosStore } from '@/stores/todos.js'

export default {
  data() {
    return {
      store: useTodosStore(),
    }
  },

  props: { filteredTodos: Array, toggleTodoStatus: Function },
}
</script>

<style scoped>
ul {
  color: #ff7eff;
  margin-left: -13.5rem;
}
li {
  padding-block: 5px;
  list-style: none;
}

label {
  padding-left: 5px;
}
</style>
