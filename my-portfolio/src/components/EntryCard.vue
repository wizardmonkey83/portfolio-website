<script setup>
import ImagePlaceholder from './ImagePlaceholder.vue'

defineProps({
  item: { type: Object, required: true }
})

defineEmits(['select'])
</script>

<template>
  <button class="entry-card" @click="$emit('select', item.id)">
    <ImagePlaceholder :src="item.image" :alt="item.title" ratio="4 / 3" :hint="`${item.label} preview`" />
    <span class="entry-title">{{ item.title }}</span>
    <span class="entry-tagline">{{ item.tagline }}</span>
    <span v-if="item.tags?.length" class="entry-tags">
      <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
    </span>
  </button>
</template>

<style scoped>
.entry-card{
  display:flex; flex-direction:column; align-items:flex-start;
  text-align:left;
  font-family: var(--font-mono);
  background: var(--paper);
  border:1px solid var(--chrome-lo);
  padding:.9rem;
  cursor:pointer;
  transition: transform .2s ease, box-shadow .2s ease;
}
.entry-card :deep(.image-slot){ margin-bottom:.9rem; }
.entry-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -12px rgba(20,20,15,.35);
}
.entry-card:focus-visible{ outline:2px solid var(--accent); outline-offset:2px; }

.entry-title{ font-weight:700; font-size:var(--fs-body); margin-bottom:.25rem; }
.entry-tagline{ font-size:var(--fs-small); color: var(--ink-soft); margin-bottom:.6rem; }

.entry-tags{ display:flex; flex-wrap:wrap; gap:.35rem; }
.tag{
  font-size:var(--fs-caption);
  text-transform:uppercase; letter-spacing:.05em;
  background: var(--sky-mid);
  color: var(--ink-soft);
  padding:.2rem .5rem;
}
</style>
