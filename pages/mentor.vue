<template>
   <h5>Click emojis to remove them.</h5>
  <ul v-auto-animate>
    <li
      v-for="item in items"
      :key="item"
      @click="removeItem(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
definePageMeta({
    layout: "mentor"
})
const items = ref(["😏","😐","😑","😒","😕"])
function removeItem(toRemove) {
  items.value = items.value.filter((item) => item !== toRemove)
}
</script>

<style>

</style>