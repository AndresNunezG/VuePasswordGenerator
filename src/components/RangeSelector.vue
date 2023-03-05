<template>
  <div class="mb-2">
    <div class="monospace mb-2 d-flex justify-content-between align-items-center">
      <small>{{ props.title }}</small>
      <span class="selected-value fw-bolder">{{ selectedLength }}</span>
    </div>
    <div class="mb-2">
      <input class="w-100" v-model="selectedLength" type="range" min="0" :max="props.max">
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const emit = defineEmits(['selectedLengthChanged'])

const props = defineProps({
  title: String,
  max: {
    type: Number,
    default: 12,
  },
})

const selectedLength = ref(0)
const selectedLengthStyle = computed(() => {
  const length = parseFloat(selectedLength.value)
  let offset = 0
  offset = length >= 1 && length <= 5 ?
           0.4 : length >= 15 ? -0.4 : 0
  return `${ ((length + offset) * 100) / 20 }%`
})

watch(selectedLength, () => {
  emit('selectedLengthChanged', selectedLength.value)
})
</script>

<style scoped>
.selected-value {
  color: var(--accent-secondary);
}
input[type='range'] {
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0.8rem;
  background-color: var(--grey-01);
  border: solid 1px var(--grey-03);
  cursor: pointer;
}
input[type="range"]::-webkit-slider-runnable-track {
  border-radius: 0.8rem;
  height: 0.6rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  background-size: v-bind(selectedLengthStyle) 100%;
  background-position: top left;
  background-repeat: no-repeat;
}
input[type="range"]::-webkit-slider-thumb {
   -webkit-appearance: none;
   appearance: none;
   margin-top: -0.08rem;
   border: solid 1px var(--grey-01);
   background-color: var(--accent-secondary);
   height: 0.8rem;
   width: 0.8rem; 
   border-radius: 50%;
   transition: all 200ms;
}
input[type="range"]::-webkit-slider-thumb:hover {
   background-color: #fff;
}
</style>
