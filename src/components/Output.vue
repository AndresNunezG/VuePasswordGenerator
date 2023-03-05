<template>
  <div
    class="output-container card-bg card-border mb-3 px-3 py-2 d-flex justify-content-between align-items-center"
  >
    <span class="monospace">{{ props.output }}</span>
    <span
      class="copy-icon"
      @click="copyToClipboard"
      @mouseover="iconHover = false"
      @mouseleave="iconHover = true"
      data-bs-custom-class="copy-tooltip"
      data-bs-toggle="tooltip"
      data-bs-title="Copy"
    >
      <CopyIcon v-if="iconHover" />
      <CopyIcon v-else color="#a77bf3" />
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import CopyIcon from '../assets/icons/CopyIcon.vue'

const props = defineProps({
  output: {
    type: String,
    default: ''
  },
})

const iconHover = ref(false)

function copyToClipboard() {
  navigator.clipboard.writeText(props.output)
}
</script>

<style scoped>
.copy-icon {
  cursor: pointer;
}
</style>
