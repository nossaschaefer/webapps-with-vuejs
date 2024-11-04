<template>
  <form id="radioBtns">
    <div class="div-radio">
      <label for="all">All</label>
      <input type="radio" id="all" name="filter" checked />
    </div>

    <div class="div-radio">
      <label for="open">Open</label>
      <input type="radio" id="open" name="filter" />
    </div>

    <div class="div-radio">
      <label for="done">Done</label>
      <input type="radio" id="done" name="filter" />
    </div>
  </form>
</template>

<style>
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
  justify-content: space-evenly;
}

#all,
#open,
#done {
  appearance: none;
  width: 15px;
  height: 15px;
  border: 3px solid #d5ff00; /* Border color */
  border-radius: 50%; /* Make it circular */

  cursor: pointer;
  outline: none;
}

#all:checked,
#open:checked,
#done:checked {
  /* Style the selected radio button */
  background-color: #d5ff00; /* Change the background color when checked */
}

.div-radio {
  display: flex;
}

.container-radios {
  align-self: center;
}
</style>
