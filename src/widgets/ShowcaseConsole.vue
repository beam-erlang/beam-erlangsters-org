<script setup>
import { ref } from 'vue';
import consoleTabs from '@/assets/consoleTabs.yml';

const tabs = consoleTabs.tabs;
const activeTab = ref(0);
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
        :class="{ active: activeTab === index, disabled: tab.disabled }"
        href="#"
        @click.prevent="!tab.disabled && (activeTab = index)"
        :aria-current="activeTab === index ? 'page' : null"
        :aria-disabled="tab.disabled ? 'true' : null"
      >
        {{ tab.name }}
      </a>
    </li>
  </ul>
  <div style="height: 400px; color: white; background-color: black; padding: 10px;">
    <pre>{{ tabs[activeTab].text }}</pre>
  </div>
</template>
