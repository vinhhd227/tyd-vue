<template>
  <div class="container">
    <el-page-header content="Blog" />
    <el-skeleton v-if="loading" animated :rows="6" />
    <el-row v-else :gutter="16">
      <el-col v-for="p in posts" :key="p.id" :span="8">
        <el-card @click="$router.push('/blog/' + p.slug)" class="hover:cursor-pointer">
          <img v-if="p.cover_url" :src="p.cover_url" style="width:100%;aspect-ratio:16/9;object-fit:cover" />
          <h3>{{ p.title }}</h3>
          <p>{{ p.excerpt }}</p>
          <small>{{ formatDate(p.published_at) }}</small>
        </el-card>
      </el-col>
    </el-row>

    <div class="mt-4 flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        v-model:current-page="page"
        @current-change="load"
      />
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';
import { useHead } from '@vueuse/head';

useHead({ title: 'Blog', meta: [{ name: 'description', content: 'Bài viết giới thiệu & quảng cáo' }] });

const posts = ref([]);
const loading = ref(true);
const total = ref(0);
const page = ref(1);
const pageSize = 9;

function formatDate(d) { return d ? new Date(d).toLocaleDateString() : ''; }

async function load() {
  loading.value = true;
  const from = (page.value - 1) * pageSize;
  const to = from + pageSize - 1;

  const base = supabase.from('posts')
    .select('id,title,slug,excerpt,cover_url,published_at', { count: 'exact' })
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(from, to);

  const { data, count } = await base;
  posts.value = data ?? [];
  total.value = count ?? 0;
  loading.value = false;
}

onMounted(load);
</script>

<style scoped>
.container { max-width: 1100px; margin: 0 auto; padding: 24px; }
</style>
