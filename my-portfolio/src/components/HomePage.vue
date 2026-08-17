<script setup>
import { onMounted, ref } from 'vue'
import ImagePlaceholder from './ImagePlaceholder.vue'

const props = defineProps({
  home: { type: Object, required: true }
})

const typed = ref('')

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const text = props.home.tagline
  if (reduceMotion) {
    typed.value = text
    return
  }
  let i = 0
  const tick = () => {
    typed.value = text.slice(0, i)
    i++
    if (i <= text.length) setTimeout(tick, 48)
  }
  tick()
})
</script>

<template>
  <section class="page hero">
    <h1><span>{{ typed }}</span><span class="cursor" aria-hidden="true">|</span></h1>
    <p class="lead">{{ home.lead }}</p>
  </section>
</template>

<style scoped>
.hero h1{
  font-size: var(--fs-h1);
  line-height:1.05;
  letter-spacing:-.01em;
}
.hero .cursor{
  display:inline-block; width:.5ch; margin-left:.05em;
  animation: blink 1s steps(1) infinite;
  color: var(--accent);
}
.lead{ font-size: var(--fs-lead); color: var(--ink-soft); }
</style>
