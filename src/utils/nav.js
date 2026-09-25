export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Lets ctrl/cmd-click and middle-click behave like normal links (open in a
// new tab, etc.) while a plain left click smooth-scrolls in place.
export function handleNavClick(e, id, onNavigate) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) {
    return
  }
  e.preventDefault()
  onNavigate(id)
}
