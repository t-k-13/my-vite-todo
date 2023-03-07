<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['delete-click']);
</script>
<template>
  <BaseButton class="pink" @on-click="emit('delete-click')">削</BaseButton>
</template>
