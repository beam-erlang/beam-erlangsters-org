<script setup>
import { ref } from 'vue';
import consoleTabs from '@/assets/consoleTabs.yml';

const tabs = consoleTabs.tabs;
const activeTab = ref(0);

function selectTab(index) {
  const t = tabs[index];
  if (t && !t.disabled) {
    activeTab.value = index;
  }
}
</script>

<template>
  <ul class="nav nav-tabs">
    <li
      class="nav-item"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <a
        class="nav-link"
        :class="{ active: activeTab.value === index, disabled: tab.disabled }"
        href="#"
        @click.prevent="selectTab(index)"
        :aria-current="activeTab.value === index ? 'page' : null"
        :aria-disabled="tab.disabled ? 'true' : null"
      >
        {{ tab.name }}
      </a>
    </li>
  </ul>
  <div style="height: 400px; color: white; background-color: black; padding: 10px;">
    <pre>{{ tabs[activeTab.value].text }}</pre>
  </div>
</template>
