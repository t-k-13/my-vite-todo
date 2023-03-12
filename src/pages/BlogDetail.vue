<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

const detail = ref([]);
const fetchData = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id
  );
  detail.value = await response.json();
};
fetchData();
</script>

<template>
  <dev>
    <h1 class="title">{{ detail.title }}</h1>
    <dev class="detail">{{ detail.body }}</dev>
  </dev>
</template>

<style scoped>
.title {
  margin: 12px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.detail {
  line-height: 1.5;
}
</style>
