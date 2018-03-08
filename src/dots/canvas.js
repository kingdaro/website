export const canvas = document.querySelector("canvas")
canvas.style.width = "100vw"
canvas.style.height = "100vh"
canvas.style.position = "absolute"
canvas.style.pointerEvents = "none"

export function resetCanvasSize() {
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height
}

resetCanvasSize()
window.addEventListener("resize", resetCanvasSize, { passive: true })
