<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="16"
    viewBox="0 96 960 960">
    <path :fill="props.color" d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z"/>
  </svg>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#a77bf3"
  }
})
</script>
