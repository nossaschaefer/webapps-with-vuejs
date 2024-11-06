<template>
  <RouterView />
</template>

<script>
import { useTodosStore } from '@/stores/todos.js'

export default {
  data() {
    return {
      store: useTodosStore(),
    }
  },
  components: {},
  computed: {},
  methods: {},
  async created() {
    await this.store.getTodos()
  },
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

.router {
  color: #ff7eff;
  font-family: Arial, Helvetica, sans-serif;

  padding: 6px;
  padding-left: 10px;

  text-decoration: none;
}

.router-container {
  background-color: #5c2cff;
  padding-top: 10px;
  margin-right: -0.5rem;
}

main {
  background: linear-gradient(315deg, #5a75ce, #0a1e65);
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-inline: -0.5rem;
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
  align-self: center;
  margin-right: 10.8rem;
}

#new-todo:focus,
#new-todo:active,
#new-todo:hover {
  background-color: #4d1eef;
  outline: none;
  color: #ff7eff;
}

#radioBtns {
  display: flex;
  padding-block: 20px;
  color: #ff7eff;
  justify-content: flex-start;
  margin-right: 3.5rem;
}

#all,
#open,
#done {
  appearance: none;
  width: 15px;
  height: 15px;
  border: 3px solid #d5ff00; /* Border color */
  border-radius: 50%; /* Make it circular */
  margin-right: 2rem;
  cursor: pointer;
  outline: none;
}

#all:checked,
#open:checked,
#done:checked {
  background-color: #d5ff00; /* Change the background color when checked */
}

.div-radio {
  display: flex;
}

.container-radios {
  align-self: center;
}

/* Input-Style */

input:-webkit-autofill {
  background-color: #4d1eef !important;
  color: #ff7eff !important;
  -webkit-box-shadow: 0 0 0px 1000px #4d1eef inset; /* This hack ensures the autofill background matches */
  transition: background-color 5000s ease-in-out 0s; /* Prevents flickering */
}

#add {
  /* display: flex; */
  background-color: #5c2cff;
  color: #ff7eff;
  border: transparent;
  border-radius: 3px;
  padding: 10px;
  font-size: 17px;
  padding-inline: 3rem;

  box-shadow: 3px 3px 5px 1px #d5ff00;
}
::placeholder {
  color: #ff7eff;
}
</style>
