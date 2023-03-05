<template>
  <div class="strength-container card-bg card-border py-2 px-3 mb-3 monospace d-flex justify-content-between align-items-center">
    <div><span class="title-container">STRENGTH</span></div>
    <div class="indicator d-flex justify-content-center align-items-center">
      <p class="label m-0">{{ strengthLabel }}</p>
      <div class="bar-container d-flex justify-content-center align-items-center">
        <span
          v-for="(index) in 4"
          :key="index"
          class="bar"
          :class="{'active': strengthLevels[index]}">
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, computed } from "vue"

const props = defineProps({
  options: Object,
  length: Number,
})


const strengthLevels = reactive({
  1: false,
  2: false,
  3: false,
  4: false,
})
function checkLevels() {
  const charTypes = Object
                    .values(props.options)
                    .filter((option) => Boolean(option))
                    .length
  const charsStregth = charTypes * 0.75
  const lengthStrength = props.length >= 8 ? 1 : 0
  const charsNuller = props.length > 0 ? 1 : 0
  const lengthNuller = charsStregth > 0 ? 1 : 0
  const level = Math.round(charsStregth + lengthStrength) * charsNuller * lengthNuller
  setLevels(level)
}
function setLevels(level) {
  let index = 0
  for (const key in strengthLevels) {
    index++
    strengthLevels[key] = level >= index
  }
}
watch(props, () => {checkLevels()})


const strengthLabels = {
  weak: "WEAK",
  medium: "MEDIUM",
  strong: "STRONG",
}
const strengthLabel = computed(() =>{
  const level = Object
                .values(strengthLevels)
                .filter((e) => Boolean(e))
                .length
  if (level < 2) {
    return strengthLabels['weak']
  } else if (level < 4 ) {
    return strengthLabels['medium']
  } else {
    return strengthLabels['strong']
  }
})
</script>

<style scoped>
.title-container {
  font-size: 0.75rem;
  opacity: 0.8;
}
.label {
  font-size: 0.9rem;
}
.bar-container {
  gap: 0.2rem;
}
.indicator {
  gap: 0.5rem;
}
.bar {
  width: 0.5rem;
  height: 1rem;
  border: solid 1px #2c3e50;
  opacity: 0.9;
  border-color: inherit;
  transition: all 200ms;
}
.bar-container .bar.active {
  background-color: var(--accent-primary);
}
</style>
