const $ = Dom7
const app = new Framework7({
  modalTitle: 'Framework7',
  material: true,
  pushState: true
})
const view = app.addView('.view-main', {})

$(document).on('ajaxStart', () => app.showIndicator())
$(document).on('ajaxComplete', () => app.hideIndicator())

app.onPageInit('business-17', () => {
  app.swiper('.swiper-2', {
    pagination: '.swiper-2 .swiper-pagination',
    spaceBetween: 20,
    slidesPerView: 2
  })

  app.calendar({
    input: '#calendar-default',
    value: [new Date()],
    dateFormat: 'dd.mm.yyyy'
  })
})

app.onPageInit('business-2', () => {
  app.swiper('.swiper-2', {
    pagination: '.swiper-2 .swiper-pagination',
    spaceBetween: 20,
    slidesPerView: 2
  })
})

app.onPageInit('business-11', () => {
  app.messages('.messages', {
    autoLayout: true
  })
  app.messagebar('.messagebar')
})

app.onPageInit('business-12', () => {
  const text = 'На сколько часов планируете? У нас с 19:00 до 24:00 свободно, оплата за 12 человек 3000 рублей в час.'
  $('.js-add').on('click', (e) => {
    e.preventDefault()
    $(e.currentTarget).parent().find('textarea').val(text)
  })
})

app.onPageInit('business-25', () => {
  app.swiper('.swiper-2', {
    pagination: '.swiper-2 .swiper-pagination',
    spaceBetween: 20,
    slidesPerView: 2
  })
})

app.onPageInit('business-28', () => {
  app.swiper('.swiper-2', {
    pagination: '.swiper-2 .swiper-pagination',
    spaceBetween: 20,
    slidesPerView: 2
  })
})
