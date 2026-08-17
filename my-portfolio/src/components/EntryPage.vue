<script setup>
import ImagePlaceholder from './ImagePlaceholder.vue'
import EntryCard from './EntryCard.vue'

defineProps({
  mode: { type: String, required: true }, // 'overview' | 'detail' | 'single'
  category: { type: Object, default: null },
  item: { type: Object, default: null },
  categoryLabel: { type: String, default: '' },
  page: { type: Object, default: null }
})

defineEmits(['select-item'])
</script>

<template>
  <section v-if="mode === 'overview'" class="page">

    <div class="reveal">
      <h1>{{ category.intro.title }}</h1>
      <p class="lead">{{ category.intro.lead }}</p>
      <p v-for="(para, i) in category.intro.body" :key="i">{{ para }}</p>
    </div>
    <div class="reveal card-grid">
      <EntryCard
        v-for="entry in category.items"
        :key="entry.id"
        :item="entry"
        @select="$emit('select-item', entry.id)"
      />
    </div>

  </section>

  <section v-else-if="mode === 'detail'" class="page">

    <div class="reveal">
      <ImagePlaceholder :src="item.image" :hint="`${item.label} screenshot`" ratio="16 / 9" />
      <p class="eyebrow">{{ categoryLabel }}</p>
      <h1 class="heading">{{ item.title }}</h1>
      <div class="status-update-box">
        <span v-if="item?.status" class="status-box">
          <span>Status: </span>
          <span class="tag status">{{ item.status }}</span>
        </span>
        <span v-if="item?.last_updated" class="status-box">
          <span>Last Updated: </span>
          <span class="text bold">{{ item.last_updated }}</span>
        </span>
      </div>
      <div v-if="item?.sections" class="section-container">
          <div v-for="section in item.sections" :heading="section.heading">
            <h2 class="subheading">{{ section.heading }}</h2>
            <div v-for="line in section.body">
              <span class="entry-tagline">{{ line }}</span>
            </div>
          </div>
      </div>
    </div>
    <div v-if="item.links?.length" class="reveal links">
      <a v-for="link in item.links" :key="link.label" :href="link.href" class="link-btn">{{ link.label }}</a>
    </div>
  </section>

  <section v-else-if="mode === 'single'" class="page">

    <div class="reveal">
      <ImagePlaceholder :hint="`${page.title.toLowerCase()} photo`" ratio="16 / 9" />
      <h1>{{ page.title }}</h1>
      <p class="lead">{{ page.lead }}</p>
    </div>
    <div v-for="(para, i) in page.body" :key="i" class="reveal">
      <p>{{ para }}</p>
    </div>
  </section>

</template>

<style scoped>
.page{ padding-bottom: 1rem; }
.lead{ font-size: var(--fs-lead); color: var(--ink-soft); }

.card-grid{
  display:grid; gap:1.1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  margin-top: 2rem;
}

.links{ display:flex; gap:.7rem; flex-wrap:wrap; margin-top:1.6rem; }
.link-btn{
  display:inline-block;
  font-family: var(--font-mono); font-weight:700; font-size:var(--fs-small);
  text-decoration:none;
  background: var(--accent); color: var(--paper);
  border:1px solid var(--accent-deep);
  padding:.55rem 1rem;
}
.link-btn:hover{ background: var(--accent-deep); }

.entry-tagline{ font-size:var(--fs-small); color: var(--ink-soft); margin-bottom: rem; }

.subheading {
  margin-top: 1rem;
}

.tag.status{
  padding: .1rem .3rem;
}

.heading {
  margin-bottom: 0rem;
}

.status-box {
  display: flex;
  flex-direction: row;
  gap: clamp(0.5rem, 0.5vw, 1rem);
}

.status-update-box {
  display: flex;
  flex-direction: row;
  gap: clamp(0.5rem, 0.5vw, 1rem);
  font-size: 0.7rem;
  margin-bottom: 2rem;
}

.text-bold {
  font-weight: 900;
}
</style>
