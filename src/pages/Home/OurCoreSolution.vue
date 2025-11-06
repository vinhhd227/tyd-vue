<template>
  <div :class="['tw:w-full', 'tw:bg-white', 'tw:md:py-10']">
    <div
      :class="[
        'tw:flex tw:flex-col tw:justify-center tw:items-center',
        'tw:text-center',
        'tw:w-full tw:lg:w-[80vw]',
        'tw:mx-auto',
        'tw:py-10',
      ]"
    >
      <h5
        v-motion-pop-visible
        :class="[
          'tw:font-heading tw:font-semibold tw:text-4xl tw:uppercase',
          'tw:mb-3',
        ]"
      >
        {{ $t("pages.home.ourCoreSolution.label") }}
      </h5>
      <p
        v-motion-pop-visible
        :class="['tw:text-lg', 'tw:w-[120ch]', 'tw:mb-5']"
      >
        {{ $t("pages.home.ourCoreSolution.description") }}
      </p>
      <div :class="['tw:flex tw:gap-5', 'tw:w-full']">
        <article
          v-motion-pop-visible
          v-for="category in categories"
          :class="[
            'tw:h-[650px] tw:w-1/3 tw:hover:w-2/5',
            'tw:group tw:relative tw:overflow-hidden tw:ring-1 tw:ring-black/5 tw:bg-white',
            'tw:text-left',
            'tw:rounded-md',
            'tw:shadow-xl',
            'tw:trasition tw:ease-in-out tw:duration-500',
          ]"
        >
          <!-- Ảnh nền -->
          <img
            :src="category.image"
            :alt="$t(category.title)"
            class="tw:h-full tw:w-full tw:object-cover tw:transition-transform tw:duration-500 tw:group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />

          <!-- Overlay mặc định (nhẹ ở đáy để dễ đọc chữ khi chưa hover) -->
          <div
            class="tw:pointer-events-none tw:absolute tw:inset-0 tw:bg-black tw:opacity-40 tw:duration-300 tw:group-hover:opacity-0"
          ></div>

          <!-- Overlay khi hover: TRƯỢT từ TRÊN xuống (gradient màu thương hiệu) -->
          <div
            class="tw:pointer-events-none tw:absolute tw:inset-0 tw:-translate-y-full tw:transition-transform tw:duration-500 tw:ease-out tw:group-hover:translate-y-0"
          >
            <!-- đổi màu gradient theo brand của bạn (#EC5C39) -->
            <div
              class="tw:absolute tw:inset-0 tw:bg-red-600 tw:opacity-60"
            ></div>
          </div>

          <!-- Nội dung -->
          <div class="tw:absolute tw:inset-x-0 tw:bottom-0 tw:p-6">
            <h3
              class="tw:text-4xl tw:font-heading tw:font-bold tw:leading-tight tw:transition-colors tw:duration-300 tw:text-white"
            >
              {{ $t(category.title) }}
            </h3>
            <p
              class="tw:mt-3 tw:text-lg tw:max-w-[70ch] tw:transition-colors tw:duration-300 tw:text-white/90"
            >
              {{ $t(category.description) }}
            </p>

            <a
              href="#"
              class="tw:mt-4 tw:text-lg tw:flex tw:items-center tw:font-semibold tw:text-red-600 tw:transition-colors tw:duration-300 tw:group-hover:text-white"
            >
              <span class="tw:mr-2">
                {{ $t("common.readMore") }}
              </span>
              <iconify icon="mingcute:arrow-right-fill" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
const categories = ref([
  {
    title: "pages.home.ourCoreSolution.drone.title",
    description: "pages.home.ourCoreSolution.drone.description",
    image: "/media/images/home/controller.avif",
    link: "/",
  },
  {
    title: "pages.home.ourCoreSolution.cybersecurity.title",
    description: "pages.home.ourCoreSolution.cybersecurity.description",
    image: "/media/images/home/cybersecurity.jpg",
    link: "/",
  },
  {
    title: "pages.home.ourCoreSolution.automation.title",
    description: "pages.home.ourCoreSolution.automation.description",
    image: "/media/images/home/robotic.avif",
    link: "/",
  },
]);
</script>
