<template>
  <el-container
    direction="vertical"
    :class="['tw:mx-auto', 'tw:z-10 tw:h-full', 'tw:max-w-[70vw]']"
  >
    <div class="tw:grid tw:grid-cols-3 tw:gap-x-5">
      <!-- tiêu đề để ngoài khối cột -->
      <div class="tw:col-span-3 tw:py-20">
        <h2 class="tw:font-heading tw:text-6xl tw:mb-3 tw:col-span-3">
          Our Mission
        </h2>
        <h3 class="tw:text-3xl tw:font-normal tw:mb-6 tw:col-span-3">
          Transforming decision-making processes through aerial data
          intelligence.
        </h3>

        <!-- CHỈ MỘT đoạn văn, text sẽ tự chia cột -->
        <p class="tw:text-md tw:font-normal tw:col-span-3">
          Quantum Systems is more than just a drone manufacturer; we are an
          aerial data intelligence company that provides multi-sensor data
          collection products to government agencies and commercial customers.
          Our electric vertical take-off and landing (eVTOL) systems boast
          industry-leading endurance, ease of operation, and reliability.
        </p>
      </div>
      <div class="tw:col-span-2 tw:pb-16">
        <img
          src="/media/images/about/ourMission/QS_About_Us_1.jpg"
          alt=""
          class="tw:object-cover tw:w-full tw:h-full"
        />
      </div>
      <div class="tw:col-span-1 tw:pb-20">
        <img
          src="/media/images/about/ourMission/QS_About_Us_2.jpg"
          alt=""
          class="tw:object-cover tw:w-full tw:h-full"
        />
      </div>
    </div>
  </el-container>
</template>
