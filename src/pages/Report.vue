<script setup>
import markdownit from 'markdown-it'
import { ref, onMounted, watch, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import newsIndex from '@/news/index.yml';

const markdown = markdownit()
const route = useRoute();

const newsMetadata = computed(() => {
  const n = Number(route.params.number) || 0;
  const list = newsIndex.news;
  // support the reverse indexing used by News links (length - index)
  const idx = list.length - n;
  return list[idx] || list[list.length - 1];
});

const newsBody = ref('');

let loadId = 0
onUnmounted(() => { loadId = -1 })

const loadMarkdown = async () => {
  const myLoad = ++loadId
  const num = route.params.number;
  try {
    const module = await import(`../news/news-${num}.md?raw`);
    if (loadId !== myLoad) return
    newsBody.value = markdown.render(module.default);
  } catch (e) {
    if (loadId === myLoad) {
      newsBody.value = '<p>News item not found.</p>';
    }
  }
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
