<template>
  <div class="container" v-if="post">
    <img v-if="post.cover_url" :src="post.cover_url" style="width:100%;max-height:420px;object-fit:cover;border-radius:8px" />
    <h1 class="mt-4">{{ post.title }}</h1>
    <p class="text-gray">{{ formatDate(post.published_at) }}</p>
    <div v-html="safeHtml" class="prose"></div>
  </div>
  <el-empty v-else description="Không tìm thấy bài viết" />
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/lib/supabaseClient';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';
import { useHead } from '@vueuse/head';

const md = new MarkdownIt({ html: false, linkify: true, breaks: true });
const route = useRoute();

const post = ref<any>(null);

function formatDate(d?: string) { return d ? new Date(d).toLocaleDateString() : ''; }

const safeHtml = computed(() => post.value ? DOMPurify.sanitize(md.render(post.value.content_md)) : '');

onMounted(async () => {
  const { data } = await supabase.from('posts')
    .select('*')
    .eq('slug', route.params.slug)
    .maybeSingle();

  post.value = data;
  if (post.value) {
    useHead({
      title: post.value.title,
      meta: [
        { name: 'description', content: post.value.excerpt ?? '' },
        { property: 'og:title', content: post.value.title },
        { property: 'og:description', content: post.value.excerpt ?? '' },
        { property: 'og:image', content: post.value.cover_url ?? '' }
      ]
    });
  }
});
</script>

<style scoped>
.container { max-width: 860px; margin: 0 auto; padding: 24px; }
.prose :deep(img){ max-width:100% }
.text-gray { color:#777 }
</style>
