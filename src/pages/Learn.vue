<script setup>
import markdownit from 'markdown-it'
import { ref, watch, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const markdown = markdownit()
const route = useRoute()
const router = useRouter()

const articleGroups = [
  {
    name: "Redistributed Erlang",
    articles: [
      {
        index: "beyond-erlang",
        name: "Beyond Erlang"
      },
      {
        index: "bundled-otp",
        name: "The OTP framework"
      },
      {
        index: "re-imagining-erlang-otp",
        name: "Re-imagining Erlang/OTP"
      },
      {
        index: "graphical-applications",
        name: "Graphical applications"
      },
      {
        index: "android-and-ios-support",
        name: "Android and iOS support"
      }
    ]
  },
  {
    name: "Swiss Army Knife",
    articles: [
      {
        index: "new-cli-utility",
        name: "Developer CLI and tools"
      },
      {
        index: "repl-shell",
        name: "REPL shell"
      },
      {
        index: "beamify",
        name: "Building and packaging"
      },
      {
        index: "standalone-vms",
        name: "Standalone VMs"
      }
    ]
  },
  {
    name: "BEAM Packages",
    articles: [
      {
        index: "beam-format",
        name: "The BEAM package format"
      },
      {
        index: "package-manager",
        name: "Spark: the BEAM package manager"
      }
    ]
  },
  {
    name: "BEAM C API",
    articles: [
      {
        index: "extending-c-api",
        name: "Extending the BEAM with C"
      },
      {
        index: "embedding-beam",
        name: "Embedding the BEAM"
      }
    ]
  },
  {
    name: "Custom BEAM builds",
    articles: [
      {
        index: "new-cmake-build-system",
        name: "Modern CMake build system"
      },
      {
        index: "workflow-cicd",
        name: "Workflow, CI/CD, and verification"
      }
    ]
  }
]

const articleHtml = ref('')

let loadId = 0
onUnmounted(() => { loadId = -1 })

const loadArticle = async () => {
  const myLoad = ++loadId
  const articleParam = route.params.article
  // No article param (or empty) -> the intro article
  const filename = !articleParam ? 'learn-otpless-erlang' : articleParam
  try {
    const module = await import(`../articles/${filename}.md?raw`)
    if (loadId !== myLoad) return // stale update after navigation or unmount
    articleHtml.value = markdown.render(module.default)
  } catch (e) {
    if (loadId === myLoad) {
      articleHtml.value = '<p>Article not found.</p>'
    }
  }
}

// Load on mount and whenever the :article param changes
watch(() => route.params.article, loadArticle, { immediate: true })

</script>

<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col-3">

<!-- left side -->
<ul class="list-group mb-4 mt-4">
  <a
    @click="router.push('/learn')"
    class="list-group-item"
    :class="{ active: !route.params.article }"
  >Learn beam-erlang</a>
</ul>

<div
  v-for="articleGroup in articleGroups"
  :key="articleGroup.name"
>
  <p class="text-center fw-bold">{{ articleGroup.name }}</p>
  <ul class="list-group mb-4">
    <li
      v-for="article in articleGroup.articles"
      :key="article.index"
      @click="router.push(`/learn/${article.index}`)"
      class="list-group-item"
      :class="{ active: route.params.article === article.index }"
    >
      {{ article.name }}
    </li>
  </ul>

</div>
      </div>

      <div class="col bg-light">

<!-- middle -->
<div v-html="articleHtml"></div>

      </div>

      <div class="col-3 border-start">

<!-- right side -->
One of three columns

      </div>
    </div>
  </div>
</template>
