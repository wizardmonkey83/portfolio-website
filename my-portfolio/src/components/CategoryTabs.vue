<script setup>
defineProps({
  tabs: { type: Array, required: true }, // [{ id, filename }]
  activeId: { type: String, default: null }
})

defineEmits(['select'])
</script>

<template>
  <nav class="tabs" aria-label="Site sections">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="tab"
      :class="{ active: activeId === tab.id }"
      @click="$emit('select', tab.id)"
    >{{ tab.filename }}</button>
  </nav>
</template>

<style scoped>
.tabs{
  position:sticky; top:0; z-index:5;
  display:flex; gap:.25rem;
  padding: .5rem .5rem 0;
}
.tab{
  font-family:var(--font-mono);
  font-size:var(--fs-small);
  color: var(--ink-soft);
  background: var(--chrome);
  border: 1px solid var(--chrome-lo);
  border-bottom:none;
  border-radius: 6px 6px 0 0;
  padding:.4rem .85rem;
  box-shadow: inset 0 1px 0 var(--chrome-hi);
  cursor:pointer;
}
.tab.active{
  background: var(--paper);
  color: var(--ink);
  font-weight:600;
  position:relative;
  top:1px;
}
.tab:hover{ color: var(--ink); }
.tab:focus-visible{ outline:2px solid var(--accent); outline-offset:2px; }

@media (max-width:640px){
  .tabs{ overflow-x:auto; }
  .tab{ flex:none; }
}
</style>
