<script setup>
import index from '@/news/index.yml';
</script>

<template>
<div class="container d-flex flex-column mt-4">
  <div
    v-for="(metadata, number) in index.news"
    class="my-1"
  >
    <div class="card border-dark mb-3">
      <div class="card-header">
        <p class="fs-3 mb-1">{{ metadata.title }}</p>
        <p class="fs-5 mb-1">
          <small>{{ metadata.date }}</small>
          -
          by <small>{{ metadata.author }}</small>
        </p>
      </div>
      <div class="card-body">
        <p class="card-text px-3 py-2">{{ metadata.overview }}</p>
        <router-link
          :to="`/news/${index.news.length - number}`"
          class="btn btn-link"
        >Read More</router-link>
      </div>
    </div>
  </div>
</div>
</template>
