<template>
  <div
    class="btn-generate-container card-bg"
    @mouseover="iconHover = false"
    @mouseleave="iconHover = true"
  >
    <button class="btn-generate w-100">
      Generate
      <ArrowRightIcon v-if="iconHover" />
      <ArrowRightIcon v-else color="#ffffff" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import ArrowRightIcon from '../assets/icons/ArrowRightIcon.vue';

const iconHover = ref(false)
</script>

<style scoped>
.btn-generate-container {
  background: -webkit-linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 0.5rem;
  padding: 1px;
  transition: all 200ms;
}
.btn-generate-container:hover {
  box-shadow: -1px -1px 5px 0px var(--accent-primary), 1px 1px 5px 0px var(--accent-secondary);
}
.btn-generate {
  background: var(--grey-01);
  color: #fff;
  border-radius: 0.4rem;
  transition: all 200ms;
}
.btn-generate:hover {
  outline: none;
  border: solid 1px transparent;
}
</style>