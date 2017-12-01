const $ = Dom7
const app = new Framework7({
  modalTitle: 'Framework7',
  material: true
})
const view = app.addView('.view-main', {})

$(document).on('ajaxStart', () => app.showIndicator())
$(document).on('ajaxComplete', () => app.hideIndicator())
