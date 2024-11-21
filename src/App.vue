<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="navbar-brand">OTPless Erlang</router-link>
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
        </div>
      </div>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>Footer</footer>
</template>

<style lang="css" scoped>
main {
  flex: 1;
}
</style>
