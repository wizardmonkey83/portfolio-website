<script setup>
defineProps({
  filename: { type: String, required: true }
})

const emit = defineEmits(['action', 'home'])

const messages = {
  minimize: "Can't minimize a portfolio this nice.",
  maximize: 'Already at full bloom.',
  close: "Nice try — this window doesn't close. 🌱"
}

function trigger (action) {
  emit('action', messages[action])
}
</script>

<template>
  <div class="titlebar">
    <svg class="vine vine-tl" width="26" height="26" aria-hidden="true"><use href="#vine-sprig"/></svg>
    <svg class="vine vine-tr" width="26" height="26" aria-hidden="true"><use href="#vine-sprig"/></svg>
    <button class="home-btn" aria-label="Back to home" @click="emit('home')">🌿</button>
    <span class="titlebar-text">{{ filename }} - Notepad</span>
    <div class="titlebar-controls">
      <button class="win-btn" aria-label="Minimize" @click="trigger('minimize')">_</button>
      <button class="win-btn" aria-label="Maximize" @click="trigger('maximize')">▢</button>
      <button class="win-btn win-btn-close" aria-label="Close" @click="trigger('close')">×</button>
    </div>
  </div>
</template>

<style scoped>
.titlebar{
  position:relative;
  display:flex; align-items:center; gap:.5rem;
  background: var(--titlebar);
  color: var(--titlebar-text);
  padding:.5rem .6rem .5rem .75rem;
}
.titlebar-text{
  font-size:var(--fs-small);
  letter-spacing:.02em;
  flex:1;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.home-btn{
  background:transparent; border:none; cursor:pointer;
  font-size:1rem; line-height:1; padding:.1rem .2rem;
}
.home-btn:focus-visible{ outline:2px solid var(--amber); outline-offset:1px; }

.titlebar-controls{ display:flex; gap:.3rem; }
.win-btn{
  font-family:var(--font-mono);
  width:1.6rem; height:1.4rem;
  background: var(--chrome);
  color: var(--ink);
  border:1px solid var(--chrome-lo);
  box-shadow: inset 0 1px 0 var(--chrome-hi);
  cursor:pointer;
  font-size:.8rem;
  line-height:1;
  display:flex; align-items:center; justify-content:center;
}
.win-btn:hover{ filter:brightness(1.05); }
.win-btn:active{ box-shadow: inset 0 1px 3px rgba(0,0,0,.35); }
.win-btn-close:hover{ background:#c96a5a; color:#fff; }
.win-btn:focus-visible{ outline:2px solid var(--amber); outline-offset:1px; }

.vine{ position:absolute; pointer-events:none; }
.vine-tl{ top:-6px; left:-4px; }
.vine-tr{ top:-6px; right:-4px; transform:scaleX(-1); }

@media (max-width:640px){
  .titlebar-text{ font-size:.78rem; }
}
</style>
