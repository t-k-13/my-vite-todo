<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['edit-click']);
</script>
<template>
  <BaseButton color="green" @on-click="emit('edit-click')">変更</BaseButton>
</template>
