<script setup>
defineProps({
  label: { type: String, default: 'Ln 1, Col 1' }
})
</script>

<template>
  <div class="statusbar">
    <span>{{ label }}</span>
    <span>100% &middot; UTF-8 &middot; Garden Mode</span>
  </div>
</template>

<style scoped>
.statusbar{
  position:sticky; bottom:0; z-index:4;
  display:flex; justify-content:space-between;
  background: var(--chrome); border-top:1px solid var(--chrome-lo);
  font-size: var(--fs-caption); color: var(--ink-soft);
  padding:.35rem .75rem;
}
</style>
