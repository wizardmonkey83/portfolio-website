<script setup>
import ImagePlaceholder from './ImagePlaceholder.vue'

defineProps({
  page: { type: Object, required: true }
})

const emit = defineEmits(['toast'])

function onSubmit () {
  emit('toast', "🌱 Mockup only — this form isn't wired up yet.")
}
</script>

<template>
  <section class="page">
    <div class="reveal">
      <ImagePlaceholder hint="a portrait or workspace photo" ratio="16 / 9" />
      <h1>{{ page.title }}</h1>
      <p class="lead">{{ page.lead }}</p>
    </div>

    <form class="reveal mock-form stacked" novalidate @submit.prevent="onSubmit">
      <div class="field">
        <label for="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" autocomplete="name">
      </div>
      <div class="field">
        <label for="contact-email">Email</label>
        <input id="contact-email" type="email" name="email" autocomplete="email">
      </div>
      <div class="field">
        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="4"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>

    <p class="reveal fine">Prefer email? Reach me at {{ page.email }} — copy still in progress.</p>
  </section>
</template>

<style scoped>
.page{ padding-bottom: 1rem; }
.lead{ font-size: var(--fs-lead); color: var(--ink-soft); }
.fine{ font-size: var(--fs-small); color: var(--ink-soft); }

.mock-form{
  display:flex; flex-direction:column; gap:.9rem;
  max-width: 32rem;
  margin: 1.6rem 0;
}
.field{ display:flex; flex-direction:column; gap:.3rem; }
.field label{
  font-size:var(--fs-caption); text-transform:uppercase; letter-spacing:.08em;
  color:var(--ink-soft);
}
.mock-form input, .mock-form textarea{
  font-family:var(--font-mono);
  font-size:var(--fs-body);
  background: var(--paper);
  border:1px solid var(--chrome-lo);
  box-shadow: inset 1px 1px 3px rgba(20,20,15,.12);
  padding:.65rem .8rem;
  color: var(--ink);
}
.mock-form textarea{ resize:vertical; min-height:6rem; }
.mock-form input:focus-visible, .mock-form textarea:focus-visible{
  outline:2px solid var(--accent); outline-offset:1px;
}
.mock-form button{
  align-self:flex-start;
  font-family:var(--font-mono); font-weight:700;
  background: var(--accent); color: var(--paper);
  border:1px solid var(--accent-deep);
  padding:.65rem 1.2rem;
  cursor:pointer;
}
.mock-form button:hover{ background: var(--accent-deep); }
.mock-form button:focus-visible{ outline:2px solid var(--amber); outline-offset:2px; }
</style>
