<script setup>
import markdownit from 'markdown-it'
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import newsIndex from '@/news/index.yml';

const markdown = markdownit()
const route = useRoute();
const newsMetadata = newsIndex.news[newsIndex.news.length - route.params.number];
const newsBody = ref('');

const loadMarkdown = async () => {
  const module = await import(`../news/news-${route.params.number}.md?raw`);
  newsBody.value = markdown.render(module.default);
};

onMounted(loadMarkdown);
watch(() => route.params.number, loadMarkdown);
</script>

<template>
<div class="container d-flex flex-column mt-4">
  <div
    class="my-1"
  >
    <div class="card border-dark mb-3">
      <div class="card-header">
        <p class="fs-3 mb-1">{{ newsMetadata.title }}</p>
        <p class="fs-5 mb-1">
          <small>{{ newsMetadata.date }}</small>
          -
          by <small>{{ newsMetadata.author }}</small>
        </p>
      </div>
      <div class="card-body">
        <p class="card-text px-3 py-2" v-html="newsBody"></p>
      </div>
    </div>
  </div>
</div>
</template>
