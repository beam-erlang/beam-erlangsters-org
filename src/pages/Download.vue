<script setup>
import { ref, computed } from 'vue';

const platforms = [
  { name: 'Linux', key: 'linux' },
  { name: 'macOS', key: 'macos' },
  { name: 'Windows', key: 'windows' },
  { name: 'Android', key: 'android', disabled: true },
  { name: 'iOS', key: 'ios', disabled: true },
  { name: 'Docker', key: 'docker' },
];
const versions = [
  'v27.1',
  'v27.0',
  'v26.2',
  'v26.1',
  'v26.0',
  'v25.3',
  'v25.2',
  'v25.1',
  'v25.0'
];

const activePlatform = ref('linux');
const selectedVersion = ref(versions[0]);

const downloadContent = computed(() => {
  switch (activePlatform.value) {
    case 'linux':
      return `Download OTPless Erlang for Linux version ${selectedVersion.value}`;
    case 'macos':
      return `Download OTPless Erlang for macOS version ${selectedVersion.value}`;
    case 'windows':
      return `Download OTPless Erlang for Windows version ${selectedVersion.value}`;
    case 'docker':
      return `Download OTPless Erlang Docker image for version ${selectedVersion.value}`;
    default:
      return 'Select a platform to see download options.';
  }
});
</script>

<template>
  <div class="container pt-4">
    <div class="d-flex justify-content-between">
      <ul class="nav nav-pills">
        <li class="nav-item" v-for="platform in platforms" :key="platform.key">
          <a
            class="nav-link"
            :class="{ active: activePlatform === platform.key, disabled: platform.disabled }"
            href="#"
            @click.prevent="!platform.disabled && (activePlatform = platform.key)"
            :aria-disabled="platform.disabled ? 'true' : 'false'"
          >{{ platform.name }}</a>
        </li>
      </ul>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="versionDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >Version: {{ selectedVersion }}</button>
        <ul class="dropdown-menu" aria-labelledby="versionDropdown">
          <li
            v-for="version in versions"
            :key="version"
          >
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="selectedVersion = version"
            >{{ version }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <div class="card" style="min-height: 500px;">
        <div class="card-body">
          <p class="card-text">{{ downloadContent }}</p>
          <a
            :href="`/downloads/${activePlatform}-otpless-erlang-${selectedVersion}.tar.gz`"
            class="btn btn-primary"
            :disabled="platforms.find(platform => platform.key === activePlatform).disabled"
          >
            Download
          </a>
        </div>
      </div>
    </div>
    <p class="text-center fst-italic mt-4">
OTPless Erlang is always in sync with Erlang/OTP. We take it very seriously and
if you find a discrepancy, please report it.
    </p>
  </div>
</template>
