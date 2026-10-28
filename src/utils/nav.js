export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export function handleNavClick(e, id, onNavigate) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) {
    return
  }
  e.preventDefault()
  onNavigate(id)
}
