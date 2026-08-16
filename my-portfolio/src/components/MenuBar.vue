<script setup>
defineProps({
  category: { type: Object, default: null },
  currentItemId: { type: String, default: null }
})

defineEmits(['select-item'])
</script>

<template>
  <div class="menubar">
    <template v-if="category?.items">
      <button
        class="menu-entry"
        :class="{ active: !currentItemId }"
        @click="$emit('select-item', null)"
      >All {{ category.label }}</button>
      <button
        v-for="item in category.items"
        :key="item.id"
        class="menu-entry"
        :class="{ active: currentItemId === item.id }"
        @click="$emit('select-item', item.id)"
      >{{ item.label }}</button>
    </template>
    <template v-else-if="category?.page">
      <button class="menu-entry active" @click="$emit('select-item', null)">
        {{ category.page.title }}
      </button>
    </template>
  </div>
</template>

<style scoped>
.menubar{
  display:flex; gap:.15rem; flex-wrap:wrap;
  min-height: 2.1rem;
  background: var(--chrome);
  border-bottom:1px solid var(--chrome-lo);
  padding:.25rem .5rem;
}
.menu-entry{
  font-family:var(--font-mono);
  font-size:var(--fs-small);
  background:transparent; border:none;
  padding:.3rem .6rem;
  cursor:pointer;
  color: var(--ink);
}
.menu-entry:hover{ background: var(--paper); }
.menu-entry.active{ font-weight:700; color: var(--accent-deep); background: var(--paper); }
.menu-entry:focus-visible{ outline:2px solid var(--accent); outline-offset:-2px; }
</style>
