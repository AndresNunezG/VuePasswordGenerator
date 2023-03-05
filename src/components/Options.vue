<template>
  <div class="monospace mb-3 d-flex flex-column align-items-start">
    <label class="mb-2 checkbox-container d-flex align-items-center">
      <input v-model="options.LETTERS_LOW" type="checkbox">
      <span class="checkmark me-2"></span>
      Lowercase letters
    </label>
    <label class="mb-2 checkbox-container d-flex align-items-center">
      <input v-model="options.LETTERS_UPP" type="checkbox">
      <span class="checkmark me-2"></span>
      Uppercase letters
    </label>
    <label class="mb-2 checkbox-container d-flex align-items-center">
      <input v-model="options.DIGITS" type="checkbox">
      <span class="checkmark me-2"></span>
      Numbers
    </label>
    <label class="mb-2 checkbox-container d-flex align-items-center">
      <input v-model="options.SYMBOLS" type="checkbox">
      <span class="checkmark me-2"></span>
      Digits
    </label>
  </div>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue';

const emit = defineEmits(['optionsChanged'])

const options = reactive({
  LETTERS_LOW: false,
  LETTERS_UPP: false,
  DIGITS: false,
  SYMBOLS: false
})

watch(options, () => { emit('optionsChanged', {...options}) })
onMounted(() => { emit('optionsChanged', {...options}) })
</script>

<style scoped>
.checkbox-container {
  display: block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 0.8rem;
}
/* Hide the browser's default checkbox */
.checkbox-container input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkbox-container .checkmark {
  height: 0.9rem;
  width: 0.9rem;
  background-color: var(--grey-01);
  border: solid 1px var(--grey-03);
  border-radius: 2px;
  transition: all 200ms;
  position: relative;
}
/* On mouse-over, change border color */
.checkbox-container:hover input ~ .checkmark {
  border-color: var(--accent-secondary);
}
/* When the checkbox is checked */
.checkbox-container input:checked ~ .checkmark {
  background-color: var(--accent-secondary);
  border-color: var(--accent-secondary);
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 4px;
  top: 2px;
  align-items: center;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
