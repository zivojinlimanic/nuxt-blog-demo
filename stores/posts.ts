import { defineStore } from 'pinia'
import type { Post, Comment } from '~/types'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    currentPost: null as Post | null,
    comments: [] as Comment[]
  }),
  actions: {
    async fetchPosts() {
      const data = await $fetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
      this.posts = data
    },
    async fetchPost(id: number) {
      const post = await $fetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      this.currentPost = post

      const postComments = await $fetch<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      this.comments = postComments
    }
  }
})

