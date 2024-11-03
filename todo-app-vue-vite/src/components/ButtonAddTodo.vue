<template>
  <div>
    <button @click="$emit('addedTodo')" id="addBtn">Add New ToDos</button>
  </div>
</template>

<style>
#addBtn {
  background-color: #d5ff00;
  color: #ff7eff;
  margin-top: 20px;
  border: transparent;
  border-radius: 3px;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 5px 1px #ff7eff;
  /* width: 100%; Ensure buttons take up full width of their container */
}
</style>
