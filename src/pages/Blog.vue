<script setup>
import { ref } from 'vue';

const posts = ref([]);
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  posts.value = await response.json();
};
fetchData();
</script>

<template>
  <h1>blog page</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.id }}
      <router-link :to="`/blog/${post.id}`"> {{ post.title }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  margin-top: 12px;
}
li {
  margin-bottom: 8px;
  border: 1px solid #ccc;
  padding: 8px;
}
li:hover {
  background-color: #eee;
}
</style>
