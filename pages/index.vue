<template>
  <div class="blog-page">
    <header class="blog-header">
      <h1>My Blog</h1>
    </header>

    <main class="posts-container">
      <div v-for="post in postsStore.posts" :key="post.id" class="post-card">
        <NuxtLink :to="`/posts/${post.id}`">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body.slice(0, 100) }}...</p>
        </NuxtLink>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()
if (!postsStore.posts.length) postsStore.fetchPosts()
</script>

<style scoped>
.blog-page {
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-header h1 {
  text-align: center;
  margin: 0;
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-card {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  transition: box-shadow 0.2s ease;
}

.post-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.post-card h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.post-card p {
  margin: 0;
  color: #555;
  font-size: 0.95rem;
}

.post-card a {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>
