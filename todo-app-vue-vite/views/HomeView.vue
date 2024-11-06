<template>
  <nav class="router-container">
    <RouterLink class="router" :to="{ name: 'about' }">About</RouterLink>
  </nav>

  <HeaderComponent />
  <main class="centered-container">
    <div class="container-add-todo">
      <InputComponent />
      <ButtonAddTodo id="addBtn" class="same-width" />
    </div>
    <RadioButtons />
    <ButtonRemoveTodo />
    <TodoList />
  </main>
</template>

<script>
import ButtonAddTodo from '@/components/ButtonAddTodo.vue'
import ButtonRemoveTodo from '@/components/ButtonRemoveTodo.vue'
import TodoList from '@/components/TodoList.vue'
import RadioButtons from '@/components/RadioButtons.vue'
import InputComponent from '@/components/InputComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { useTodosStore } from '@/stores/todos.js'

export default {
  data() {
    return {
      store: useTodosStore(),
    }
  },
  components: {
    ButtonAddTodo,
    ButtonRemoveTodo,
    RadioButtons,
    InputComponent,
    TodoList,
    HeaderComponent,
  },
  computed: {},
  methods: {},
  async created() {
    await this.store.getTodos()
  },
}
</script>

<style scoped>
.container-add-todo {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
</style>
