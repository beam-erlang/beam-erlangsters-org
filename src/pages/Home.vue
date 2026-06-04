<script setup>
import ShowcaseConsole from '@/widgets/ShowcaseConsole.vue';
</script>

<template>
  <div
    class="flex-grow-1 container py-4"
    style="align-self: center;"
  >
    <div class="row justify-content-start">
      <div class="col-5 px-5">
        <p class="fs-2 my-0">Redistributed Erlang.</p>
        <p class="fs-5 my-0">No OTP framework <i class="bi bi-dot"></i> With BEAM packages</p>
        <p>
          OTPless Erlang is a distribution of Erlang that does not include the OTP
          framework. It is a minimalistic Erlang distribution built around the concept
          of BEAM packages.
        </p>
        <div class="d-grid gap-2 my-2">
          <button type="button" class="btn btn-primary">
            <i class="bi bi-download me-2"></i>
            Download OTPless Erlang (27.1.2)
          </button>
        </div>
        <p class="text-center fst-italic px-2">
          It comes bundled with the BEAM package manager which allows you to install
          the OTP framework.
        </p>
      </div>
      <div class="col-7">
        <showcase-console/>
      </div>
    </div>
  </div>
</template>
