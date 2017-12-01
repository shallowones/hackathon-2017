const $ = Dom7
const app = new Framework7({
  modalTitle: 'Framework7',
  material: true
})
const view = app.addView('.view-main', {})

$(document).on('ajaxStart', () => app.showIndicator())
$(document).on('ajaxComplete', () => app.hideIndicator())

$(document).on('pageInit', () => {

  /*app.calendar({
    input: '.datepicker-range',
    rangePicker: true,
    //dateFormat: 'H:i'
    date: false
  })*/

})
