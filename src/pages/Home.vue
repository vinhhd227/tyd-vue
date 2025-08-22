<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-900 to-blue-800 text-white py-20 text-center">
      <h1 class="text-5xl font-bold mb-4">TYD – Công nghệ dẫn đầu tương lai</h1>
      <p class="text-xl mb-6">Giải pháp tự động hóa & UAV tiên tiến cho sản xuất và quốc phòng</p>
      <button class="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        Khám phá giải pháp
      </button>
    </section>

    <!-- About Section -->
    <section class="py-16 px-8 bg-white text-center">
      <h2 class="text-3xl font-bold mb-6">Về TYD</h2>
      <p class="text-lg max-w-3xl mx-auto">
        TYD là đơn vị tiên phong trong lĩnh vực tự động hóa công nghiệp và công nghệ UAV tại Việt Nam.
        Chúng tôi cung cấp các hệ thống robot, dây chuyền sản xuất thông minh, và giải pháp drone ứng dụng trong nông nghiệp, xây dựng, công nghiệp và quốc phòng.
      </p>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-8 bg-gray-100">
      <h2 class="text-3xl font-bold text-center mb-12">Giải pháp nổi bật</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">🤖 Tự động hóa sản xuất</h3>
          <p>Robot công nghiệp, dây chuyền tự động hóa giúp tăng năng suất và giảm chi phí vận hành.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">🚁 UAV & Drone thông minh</h3>
          <p>Giải pháp bay không người lái phục vụ nông nghiệp chính xác, khảo sát công trình, và hỗ trợ quốc phòng.</p>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="py-16 px-8 bg-white text-center">
      <h2 class="text-3xl font-bold mb-6">Video giới thiệu</h2>
      <div class="max-w-4xl mx-auto">
        <iframe
          class="w-full h-64 md:h-96 rounded-lg shadow"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Giới thiệu TYD"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16 px-8 bg-gray-100 text-center">
      <h2 class="text-3xl font-bold mb-6">Liên hệ với chúng tôi</h2>
      <form class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
        <input type="text" placeholder="Họ và tên" class="w-full px-4 py-2 border rounded" />
        <input type="email" placeholder="Email" class="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Nội dung liên hệ" rows="4" class="w-full px-4 py-2 border rounded"></textarea>
        <button type="submit" class="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
          Gửi liên hệ
        </button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2025 TYD Technology. Made in Vietnam.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
