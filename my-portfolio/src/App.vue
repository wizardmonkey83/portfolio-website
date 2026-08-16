<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { menu, home, findRoute } from './data/menu.js'
import GardenBackdrop from './components/GardenBackdrop.vue'
import CategoryTabs from './components/CategoryTabs.vue'
import TitleBar from './components/TitleBar.vue'
import MenuBar from './components/MenuBar.vue'
import StatusBar from './components/StatusBar.vue'
import HomePage from './components/HomePage.vue'
import EntryPage from './components/EntryPage.vue'
import ContactPage from './components/ContactPage.vue'

const rawHash = ref(window.location.hash)
function onHashChange () { rawHash.value = window.location.hash }

const route = computed(() => {
  if (!rawHash.value || rawHash.value === '#') return { type: 'home' }
  const { category, item } = findRoute(rawHash.value)
  if (item) return { type: 'detail', category, item }
  if (category.items) return { type: 'overview', category }
  if (category.id === 'contact') return { type: 'contact', category }
  return { type: 'single', category }
})

const currentCategoryId = computed(() => route.value.category?.id ?? null)
const currentItemId = computed(() => route.value.item?.id ?? null)

const titleFilename = computed(() => {
  const r = route.value
  if (r.type === 'home') return home.filename
  if (r.type === 'detail') return r.item.filename
  return r.category.filename
})

const tabs = computed(() => [
  { id: 'home', filename: home.filename },
  ...menu.map((c) => ({ id: c.id, filename: c.filename }))
])
const activeTabId = computed(() => (route.value.type === 'home' ? 'home' : currentCategoryId.value))

function navigateTo (categoryId, itemId) {
  window.location.hash = itemId ? `${categoryId}/${itemId}` : categoryId
}

function goHome () {
  window.location.hash = ''
}

function onTabSelect (id) {
  if (id === 'home') goHome()
  else navigateTo(id)
}

function onMenuSelectItem (itemId) {
  if (!currentCategoryId.value) return
  navigateTo(currentCategoryId.value, itemId)
}

/* ---------- scroll reveal ---------- */
function syncReveals () {
  const vh = window.innerHeight
  document.querySelectorAll('.document .reveal').forEach((el) => {
    const r = el.getBoundingClientRect()
    const visible = r.top < vh * 0.88 && r.bottom > vh * 0.1
    el.classList.toggle('in-view', visible)
  })
}
let ticking = false
function onScroll () {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { syncReveals(); ticking = false })
}

/* ---------- toast ---------- */
const toastMessage = ref('')
const toastVisible = ref(false)
let toastTimer = null
function showToast (msg) {
  toastMessage.value = msg
  toastVisible.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastVisible.value = false }, 2600)
}

/* ---------- window shake ---------- */
const shaking = ref(false)
function onWindowAction (msg) {
  showToast(msg)
  shaking.value = false
  nextTick(() => {
    shaking.value = true
    setTimeout(() => { shaking.value = false }, 400)
  })
}

onMounted(() => {
  window.addEventListener('hashchange', onHashChange)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  syncReveals()
})
onBeforeUnmount(() => {
  window.removeEventListener('hashchange', onHashChange)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  clearTimeout(toastTimer)
})

watch(route, () => {
  window.scrollTo({ top: 0, behavior: 'auto' })
  nextTick(syncReveals)
})
</script>

<template>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <g id="vine-sprig">
        <path d="M1 22 Q 7 9 17 4" fill="none" stroke="#4c7a4f" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="15" cy="3.5" rx="6.2" ry="3.1" fill="#4c7a4f" transform="rotate(-25 15 3.5)"/>
        <ellipse cx="8" cy="11" rx="5" ry="2.5" fill="#8fae7c" transform="rotate(32 8 11)"/>
        <circle cx="2" cy="22" r="2.1" fill="#31502f"/>
      </g>
    </defs>
  </svg>

  <GardenBackdrop />

  <div class="stage">
    <div class="deck">
      <CategoryTabs :tabs="tabs" :active-id="activeTabId" @select="onTabSelect" />

      <div class="window" :class="{ shake: shaking }">
        <div class="chrome-top">
          <TitleBar :filename="titleFilename" @action="onWindowAction" @home="goHome" />
          <MenuBar
            :category="route.category ?? null"
            :current-item-id="currentItemId"
            @select-item="onMenuSelectItem"
          />
        </div>

        <div class="document">
          <HomePage v-if="route.type === 'home'" :home="home" />

          <EntryPage
            v-else-if="route.type === 'overview'"
            mode="overview"
            :category="route.category"
            @select-item="(id) => navigateTo(route.category.id, id)"
          />

          <EntryPage
            v-else-if="route.type === 'detail'"
            mode="detail"
            :item="route.item"
            :category-label="route.category.label"
          />

          <EntryPage
            v-else-if="route.type === 'single'"
            mode="single"
            :page="route.category.page"
          />

          <ContactPage
            v-else-if="route.type === 'contact'"
            :page="route.category.page"
            @toast="showToast"
          />
        </div>

        <StatusBar />
      </div>
    </div>
  </div>

  <div class="toast" :class="{ show: toastVisible }" role="status" aria-live="polite">{{ toastMessage }}</div>
</template>

<style scoped>
.stage{
  position:relative; z-index:1;
  display:flex; flex-direction:column; align-items:center;
  padding: 3rem 1rem 5rem;
}
.deck{ width:100%; max-width: var(--window-w); }

.window{
  background: var(--paper);
  border: 1px solid var(--chrome-lo);
  box-shadow: 0 18px 40px -18px rgba(20,20,15,.45);
}
.window.shake{ animation: shake .38s ease; }

.chrome-top{ position:sticky; top: 2.1rem; z-index:4; }

.document{ padding: 3.2rem 2.2rem 3rem; }
@media (max-width:640px){
  .chrome-top{ top: 2.4rem; }
  .document{ padding: 2.4rem 1.1rem 2.4rem; }
}

.toast{
  position:fixed; left:50%; bottom:1.4rem; z-index:20;
  transform: translate(-50%, 12px);
  background: var(--titlebar); color: var(--titlebar-text);
  font-family:var(--font-mono); font-size:var(--fs-small);
  padding:.6rem 1rem; border-radius:4px;
  box-shadow: 0 10px 24px rgba(0,0,0,.35);
  opacity:0; pointer-events:none;
  transition: opacity .3s ease, transform .3s ease;
}
.toast.show{ opacity:1; transform: translate(-50%, 0); }
</style>
