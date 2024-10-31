<template>
  <tr class="table-item__table-row">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <BaseButton
        @addedBookmark="handleChangedBookmark"
        :text="buttonText"
        variant="secondary"
      />
    </td>
  </tr>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  data() {
    return { buttonText: 'Add Bookmark' }
  },
  components: { BaseButton },
  props: { title: String, isbn: String },
  methods: {
    handleChangedBookmark() {
      this.buttonText =
        this.buttonText === 'Add Bookmark' ? 'Remove Bookmark' : 'Add Bookmark'
    },
  },
}
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
