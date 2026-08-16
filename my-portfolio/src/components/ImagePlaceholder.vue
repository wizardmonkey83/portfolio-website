<script setup>
defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  ratio: { type: String, default: '16 / 9' },
  hint: { type: String, default: 'an image' }
})
</script>

<template>
  <figure class="image-slot" :style="{ aspectRatio: ratio }">
    <img v-if="src" :src="src" :alt="alt">
    <div v-else class="placeholder" role="img" :aria-label="`Placeholder for ${hint}`">
      <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
        <rect x="4" y="8" width="40" height="32" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="16" cy="18" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M6 34 L18 22 L26 30 L32 24 L42 34" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
      <span class="placeholder-label">Drop in {{ hint }}</span>
    </div>
  </figure>
</template>

<style scoped>
.image-slot{
  margin: 0 0 1.6rem;
  width:100%;
  overflow:hidden;
  background: var(--paper-shade);
  border:1px solid var(--chrome-lo);
  box-shadow: inset 0 1px 0 var(--chrome-hi);
}
.image-slot img{
  display:block; width:100%; height:100%; object-fit:cover;
}
.placeholder{
  width:100%; height:100%;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:.5rem;
  color: var(--chrome-lo);
  background:
    repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(169,164,149,.15) 10px, rgba(169,164,149,.15) 11px);
  border: 1px dashed var(--chrome-lo);
}
.placeholder-label{
  font-family: var(--font-mono);
  font-size: var(--fs-caption);
  letter-spacing:.04em;
  color: var(--ink-soft);
  text-transform:uppercase;
}
</style>
