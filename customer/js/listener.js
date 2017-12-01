addEventListener('message', (e) => {
  const { type, action } = e.data

  if (!type) {
    return false
  }

  view.router.loadPage(action)
}, false)
