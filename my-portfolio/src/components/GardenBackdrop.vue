<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let ctx = null
let resizeTimer = null

/* ---------- deterministic randomness (fixed seed = same scene every load) ---------- */
function mulberry32 (seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const hillBack = [[0,0.62],[0.22,0.52],[0.5,0.6],[0.78,0.5],[1,0.58]]
const hillMid = [[0,0.72],[0.3,0.6],[0.55,0.68],[0.8,0.58],[1,0.7]]
const hillFront = [[0,0.86],[0.25,0.76],[0.5,0.82],[0.75,0.74],[1,0.84]]

function ridgeYAt (pts, t) {
  for (let i = 1; i < pts.length; i++) {
    if (t <= pts[i][0]) {
      const [x0, y0] = pts[i - 1]
      const [x1, y1] = pts[i]
      const localT = (t - x0) / (x1 - x0 || 1)
      return y0 + (y1 - y0) * localT
    }
  }
  return pts[pts.length - 1][1]
}

function makeRidge (seed, n, baseY, amp) {
  const rand = mulberry32(seed)
  const pts = []
  for (let i = 0; i < n; i++) {
    const x = i / (n - 1)
    const edge = i === 0 || i === n - 1
    const y = edge ? baseY : baseY - rand() * amp
    pts.push([x, y])
  }
  return pts
}

function makeForest (seed, count, sizeRange) {
  const rand = mulberry32(seed)
  const trees = []
  for (let i = 0; i < count; i++) {
    trees.push({
      t: rand(),
      size: sizeRange[0] + rand() * (sizeRange[1] - sizeRange[0]),
      type: rand() > 0.7 ? 'round' : 'pine',
      jitter: (rand() - 0.5) * 0.01
    })
  }
  return trees.sort((a, b) => a.t - b.t)
}

const mountainBack = makeRidge(7, 9, 0.48, 0.13)
const mountainFront = makeRidge(13, 11, 0.55, 0.17)

const forestBack = makeForest(21, 7, [0.05, 0.08])
const forestMid = makeForest(34, 11, [0.075, 0.115])
const forestFront = makeForest(55, 15, [0.11, 0.16])

const blooms = [
  [0.04,0.90,'#e8a5b0',9],[0.09,0.955,'#f3c66a',6],[0.16,0.90,'#e98b6b',7],
  [0.22,0.965,'#f7f4ec',5],[0.30,0.955,'#f3c66a',6],[0.37,0.90,'#e8a5b0',7],
  [0.45,0.965,'#f3e2b8',6],[0.53,0.90,'#e98b6b',7],[0.61,0.955,'#f3c66a',6],
  [0.68,0.965,'#e8a5b0',6],[0.76,0.90,'#f7f4ec',5],[0.84,0.955,'#f3c66a',6],
  [0.91,0.965,'#e98b6b',6],[0.97,0.90,'#e8a5b0',7],[0.02,0.975,'#f3c66a',5]
]

function drawRidgeFill (w, h, pts, color) {
  ctx.beginPath()
  ctx.moveTo(pts[0][0] * w, h)
  pts.forEach(([x, y]) => ctx.lineTo(x * w, y * h))
  ctx.lineTo(pts[pts.length - 1][0] * w, h)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
}

function drawSnowCaps (w, h, pts, threshold) {
  ctx.fillStyle = 'rgba(255,255,255,.88)'
  for (let i = 1; i < pts.length - 1; i++) {
    const [x, y] = pts[i]
    if (y < threshold) {
      const capW = 0.018 * w
      ctx.beginPath()
      ctx.moveTo(x * w, y * h)
      ctx.lineTo(x * w - capW, y * h + capW * 0.9)
      ctx.lineTo(x * w + capW, y * h + capW * 0.9)
      ctx.closePath()
      ctx.fill()
    }
  }
}

function drawHillFill (w, h, pts, color) {
  ctx.beginPath()
  ctx.moveTo(pts[0][0] * w, h)
  ctx.lineTo(pts[0][0] * w, pts[0][1] * h)
  for (let i = 1; i < pts.length; i++) {
    const x = pts[i][0] * w, y = pts[i][1] * h
    const px = pts[i - 1][0] * w, py = pts[i - 1][1] * h
    ctx.quadraticCurveTo((px + x) / 2, Math.min(py, y), x, y)
  }
  ctx.lineTo(pts[pts.length - 1][0] * w, h)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
}

function drawPine (x, yBase, hgt, color) {
  const w = hgt * 0.55
  ctx.fillStyle = color
  ctx.fillRect(x - hgt * 0.03, yBase - hgt * 0.1, hgt * 0.06, hgt * 0.1)
  ctx.beginPath()
  ctx.moveTo(x, yBase - hgt * 0.72)
  ctx.lineTo(x - w / 2, yBase)
  ctx.lineTo(x + w / 2, yBase)
  ctx.closePath(); ctx.fill()
  ctx.beginPath()
  ctx.moveTo(x, yBase - hgt)
  ctx.lineTo(x - w * 0.36, yBase - hgt * 0.38)
  ctx.lineTo(x + w * 0.36, yBase - hgt * 0.38)
  ctx.closePath(); ctx.fill()
}

function drawRoundTree (x, yBase, hgt, color) {
  const r = hgt * 0.32
  ctx.fillStyle = color
  ctx.fillRect(x - hgt * 0.03, yBase - hgt * 0.12, hgt * 0.06, hgt * 0.12)
  ctx.beginPath(); ctx.arc(x, yBase - hgt * 0.55, r, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.arc(x - r * 0.55, yBase - hgt * 0.4, r * 0.72, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.arc(x + r * 0.55, yBase - hgt * 0.4, r * 0.72, 0, Math.PI * 2); ctx.fill()
}

function drawForest (w, h, ridgePts, trees, colors) {
  trees.forEach((tree, i) => {
    const x = tree.t * w
    const yBase = (ridgeYAt(ridgePts, tree.t) + tree.jitter) * h
    const hgt = tree.size * h
    const color = colors[i % colors.length]
    if (tree.type === 'pine') drawPine(x, yBase, hgt, color)
    else drawRoundTree(x, yBase, hgt, color)
  })
}

function drawStringLights (w, h) {
  const y0 = h * 0.06, dip = h * 0.045
  ctx.strokeStyle = 'rgba(50,40,30,.35)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(0, y0)
  ctx.quadraticCurveTo(w * 0.5, y0 + dip, w, y0)
  ctx.stroke()
  const n = 16
  for (let i = 0; i <= n; i++) {
    const t = i / n
    const y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * (y0 + dip) + t * t * y0
    ctx.save()
    ctx.shadowColor = 'rgba(255,214,140,.95)'
    ctx.shadowBlur = 9
    ctx.fillStyle = '#ffdf9a'
    ctx.beginPath()
    ctx.arc(t * w, y + 5, 2.1, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

function draw () {
  if (!ctx) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = window.innerWidth, h = window.innerHeight
  canvas.value.width = w * dpr
  canvas.value.height = h * dpr
  canvas.value.style.width = w + 'px'
  canvas.value.style.height = h + 'px'
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const sky = ctx.createLinearGradient(0, 0, 0, h)
  sky.addColorStop(0, '#f6d9b8')
  sky.addColorStop(0.5, '#eadfc2')
  sky.addColorStop(1, '#dfe6c8')
  ctx.fillStyle = sky
  ctx.fillRect(0, 0, w, h)

  const gx = w * 0.78, gy = h * 0.16, gr = Math.max(w, h) * 0.28
  const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr)
  glow.addColorStop(0, 'rgba(255,241,214,.9)')
  glow.addColorStop(1, 'rgba(255,241,214,0)')
  ctx.fillStyle = glow
  ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill()

  drawRidgeFill(w, h, mountainBack, '#cdd7c6')
  drawRidgeFill(w, h, mountainFront, '#a9bda3')
  drawSnowCaps(w, h, mountainFront, 0.42)

  drawStringLights(w, h)

  drawHillFill(w, h, hillBack, '#b9c9a0')
  drawForest(w, h, hillBack, forestBack, ['#9fb787', '#8fae7c'])

  drawHillFill(w, h, hillMid, '#93ad78')
  drawForest(w, h, hillMid, forestMid, ['#6f9457', '#5f8a52', '#789a5e'])

  drawHillFill(w, h, hillFront, '#6f9457')
  drawForest(w, h, hillFront, forestFront, ['#31502f', '#3f6b3f', '#4c7a4f'])

  blooms.forEach((b) => {
    ctx.save()
    ctx.shadowColor = b[2]
    ctx.shadowBlur = b[3] * 0.9
    ctx.fillStyle = b[2]
    ctx.globalAlpha = 0.9
    ctx.beginPath()
    ctx.arc(b[0] * w, b[1] * h, b[3], 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  })

  const vignette = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.75)
  vignette.addColorStop(0, 'rgba(0,0,0,0)')
  vignette.addColorStop(1, 'rgba(20,18,12,.16)')
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, w, h)
}

function onResize () {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(draw, 120)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  draw()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  clearTimeout(resizeTimer)
})
</script>

<template>
  <canvas ref="canvas" class="garden" aria-hidden="true"></canvas>
</template>

<style scoped>
.garden{
  position:fixed; inset:0; width:100vw; height:100vh;
  z-index:0; pointer-events:none;
}
</style>
