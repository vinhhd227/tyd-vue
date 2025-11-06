<template>
  <section
    id="contact-cta"
    class="tw:relative tw:isolate tw:overflow-hidden tw:bg-gradient-to-br tw:w-full tw:from-[#0F172A] tw:to-[#1E293B] tw:text-white tw:py-16 tw:sm:py-24"
  >
    <div
      className="tw:absolute tw:inset-0 tw:z-0"
      :style="{
        background: '#000000',
        backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
      `,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0',
      }"
    />
    <div
      class="tw:relative tw:z-10 tw:mx-auto tw:max-w-7xl tw:px-4 sm:tw:px-6 lg:tw:px-8"
    >
      <div
        v-motion-slide-visible-bottom
        class="tw:text-center tw:max-w-3xl tw:mx-auto"
      >
        <p class="tw:text-sm tw:uppercase tw:tracking-widest tw:text-white/70">
          {{ $t("pages.home.contact.section") }}
        </p>
        <h2
          v-motion-slide-visible-bottom
          class="tw:mt-3 tw:text-4xl sm:tw:text-4xl tw:font-bold tw:leading-tight tw:uppercase tw:font-heading"
        >
          {{ $t("pages.home.contact.headline") }}
        </h2>
        <p
          v-motion-slide-visible-bottom
          class="tw:mt-4 tw:text-base sm:tw:text-lg tw:text-white/80"
        >
          {{ $t("pages.home.contact.subtext") }}
        </p>

        <div v-motion-slide-visible-bottom class="tw:mt-8">
          <RouterLink
            to="/contact"
            :class="[
              'tw:px-5 tw:py-3',
              'tw:inline-flex tw:items-center tw:justify-center tw:rounded-xl tw:bg-white  tw:font-semibold tw:text-[#0F172A] tw:hover:bg-white/90 tw:transition',
              'tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-white/50',
            ]"
          >
            {{ $t("pages.home.contact.button") }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
