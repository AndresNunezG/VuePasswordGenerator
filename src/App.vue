<template>
  <div>
    <h1 class="title mb-4 fw-bold">Password Generator</h1>
    <Output :output="password" />
    <div class="options-container card-bg card-border p-3 d-flex flex-column">      
      <RangeSelector
        @selected-length-changed="selectedLengthChanged"
        title="Character length" :max="20"/>
      <Options @options-changed="optionsChanged" />
      <Strength :options="optionsSelected" :length="selectedLength" />
      <SubmitButton @click="generatePassword" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import Output from './components/Output.vue'
import RangeSelector from './components/RangeSelector.vue'
import Options from './components/Options.vue'
import Strength from './components/Strength.vue'
import SubmitButton from './components/SubmitButton.vue'
import PswdGenerator from './utils/generator'

const optionsSelected = reactive({})
function optionsChanged(payload) {
  for (const key in payload) {
    optionsSelected[key] = payload[key]
  }
}

const selectedLength = ref(0)
function selectedLengthChanged(value) {
  selectedLength.value = parseInt(value)
}

const password = ref('')
function generatePassword() {
  password.value = new PswdGenerator({...optionsSelected}).generatePswd(selectedLength.value)
}

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})
</script>

<style scoped>
.title {
  background: -webkit-linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
}
</style>
