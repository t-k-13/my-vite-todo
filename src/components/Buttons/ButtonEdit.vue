<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['edit-click']);
</script>
<template>
  <BaseButton class="green" @on-click="emit('edit-click')">編</BaseButton>
</template>
