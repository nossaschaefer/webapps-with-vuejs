<template>
  <div class="container-liste">
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <label v-bind:for="`todo-$(todo.id)`">
          {{ todo.description }}
        </label>
        <input
          type="checkbox"
          name="`todo-$(todo.id)`"
          :id="`todo-$(todo.id)`"
          :checked="todo.done"
          @change="$emit('toggleTodoStatus', todo)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
