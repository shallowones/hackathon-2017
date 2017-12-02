const $ = Dom7
const app = new Framework7({
  modalTitle: 'Framework7',
  material: true,
  pushState: true
})
const view = app.addView('.view-main', {})

$(document).on('ajaxStart', () => app.showIndicator())
$(document).on('ajaxComplete', () => app.hideIndicator())

$(document).on('pageInit', () => {

  app.swiper('.swiper-2', {
    pagination: '.swiper-2 .swiper-pagination',
    spaceBetween: 20,
    slidesPerView: 2
  })

})

app.onPageInit('customer-14', () => {
  $('.js-take').on('click', (e) => {
    e.preventDefault()
    $('.js-this')
      .removeAttr('style')
      .attr('data-blick', true)
  })
})
