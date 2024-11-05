<template>
  <div class="container-liste">
    <ul>
      <li v-for="todo in store.filteredTodos" :key="todo.id">
        <label v-bind:for="`todo-$(todo.id)`">
          {{ todo.description }}
        </label>
        <input
          type="checkbox"
          name="`todo-$(todo.id)`"
          :id="`todo-$(todo.id)`"
          :checked="todo.done"
          @change="store.toggleTodoStatus(todo)"
        />
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
  padding-left: 16px;
}

li {
  padding-block: 5px;
}
</style>
