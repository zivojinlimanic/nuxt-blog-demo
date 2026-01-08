<template>
  <div class="post-page">
    <article class="post-container">
      <h1>{{ postsStore.currentPost?.title }}</h1>
      <p class="post-body">{{ postsStore.currentPost?.body }}</p>
    </article>

    <section class="comments-section" v-if="postsStore.comments.length">
      <h2>Comments</h2>
      <ul>
        <li v-for="comment in postsStore.comments" :key="comment.id" class="comment">
          <strong>{{ comment.name }}:</strong>
          <p>{{ comment.body }}</p>
        </li>
      </ul>
    </section>

    <NuxtLink to="/" class="back-link">← Back to all posts</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'
import { useRoute } from 'vue-router'

const postsStore = usePostsStore()
const route = useRoute()
const id = Number(route.params.id)

postsStore.fetchPost(id)
</script>

<style scoped>
.post-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.post-body {
  line-height: 1.7;
  font-size: 1rem;
  color: #333;
}

.comments-section h2 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.comments-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment {
  border-left: 3px solid #ccc;
  padding-left: 1rem;
}

.comment p {
  margin: 0.2rem 0 0 0;
  color: #555;
  font-size: 0.95rem;
}

.back-link {
  margin-top: 2rem;
  text-decoration: none;
  color: #0070f3;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
