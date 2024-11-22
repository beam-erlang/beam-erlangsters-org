<script setup>
import markdownit from 'markdown-it'
import { reactive, computed } from 'vue'
import foobar from '@/articles/graphical-applications.md?raw';

const markdown = markdownit()

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
        name: "The bundled OTP framework"
      },
      {
        index: "re-imagining-erlang-otp",
        name: "Re-imagining Erlang/OTP"
      },
      {
        index: "graphical-applications",
        name: "Graphical applications (extra)"
      },
      {
        index: "android-ios-support",
        name: "Android and iOS support (extra)"
      }
    ]
  },
  {
    name: "Swiss Army Knife",
    articles: [
      {
        index: "new-cli-utility",
        name: "A new CLI utility"
      },
      {
        index: "repl-shell",
        name: "REPL shell"
      },
      {
        index: "beamify",
        name: "Beamify (or compiling)"
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
        name: "The BEAM format"
      },
      {
        index: "package-manager",
        name: "The package manager"
      }
    ]
  },
  {
    name: "BEAM C API",
    articles: [
      {
        index: "extending-c-api",
        name: "Extending C API"
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
        name: "New CMake-based build system"
      },
      {
        index: "workflow-cicd",
        name: "Workflow CI/CD"
      }
    ]
  }
]

// a computed ref
const articleHtml = computed(async () => {
  let articleFilename;
  if ($route.params.article === '') {
    articleIndex = 'index';
  }
  else {
    articleIndex = $route.params.article;
  }
  const module = await import(`../articles/${articleIndex}.md?raw`);
  return markdown.render(module.default)
})

</script>

<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col-3">

<!-- left side -->
<ul class="list-group mb-4 mt-4">
  <a
    @click="$router.push('/learn')"
    class="list-group-item"
    :class="{ active: $route.params.article === '' }"
  >Learn OTPless Erlang</a>
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
      @click="$router.push(`/learn/${article.index}`)"
      class="list-group-item"
      :class="{ active: $route.params.article === article.index }"
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
