<script setup>
import ModeButton from './widgets/ModeButton.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg border-bottom">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="navbar-brand">
          <img
            src="@/assets/logo.svg"
            alt="OTPless Erlang Logo"
            width="42"
            height="42"
            class="d-inline-block align-text-middle">
          OTPless Erlang
        </router-link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/learn"
              >Learn</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/download"
              >Download</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/about"
              >About</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/news"
              >News</router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="https://www.beam-packages.org/"
              >Packages (42)</a>
            </li>
          </ul>
          <a
            type="button"
            class="btn btn-primary"
            href="https://docs.otpless-erlang.org/"
          >Documentation</a>
          <mode-button/>
          <a
            type="button"
            class="btn"
          >
            <i 
              class="bi bi-translate"
              style="font-size: 1.2rem;"
            ></i>
          </a>
          <a
            type="button"
            class="btn"
          >
            <i 
              class="bi bi-github"
              style="font-size: 1.2rem;"
            ></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
  <main class="d-flex">
    <router-view></router-view>
  </main>
  <footer
    class="d-flex justify-content-between border-top py-2 px-2"
  >
    <div>Project run by the Erlangsters community.</div>
    <div class="d-flex">
      <span class="mx-3">Follow us.</span>
      <i 
        class="bi bi-discord mx-2" 
        style="font-size: 1.2rem;"
      ></i>
      <i 
        class="bi bi-twitter-x mx-2" 
        style="font-size: 1.2rem;"
      ></i>
      <i 
        class="bi bi-reddit mx-2" 
        style="font-size: 1.2rem;"
      ></i>
    </div>
  </footer>
</template>

<style lang="css" scoped>
main {
  flex: 1;
}
</style>
