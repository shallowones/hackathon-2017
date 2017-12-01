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
  // Conversation flag
  const conversationStarted = false;

// Init Messages
  const myMessages = app.messages('.messages', {
    autoLayout:true
  });

// Init Messagebar
  const myMessagebar = app.messagebar('.messagebar');

// Handle message
  $('.messagebar .link').on('click', function () {
    // Message text
    const messageText = myMessagebar.value().trim();
    // Exit if empy message
    if (messageText.length === 0) return;

    // Empty messagebar
    myMessagebar.clear()

    // Random message type
    const messageType = (['sent', 'received'])[Math.round(Math.random())];

    // Avatar and name for received message
    let avatar, name;
    if(messageType === 'received') {
      avatar = 'http://lorempixel.com/output/people-q-c-100-100-9.jpg';
      name = 'Kate';
    }
    // Add message
    myMessages.addMessage({
      // Message text
      text: messageText,
      // Random message type
      type: messageType,
      // Avatar and name:
      avatar: avatar,
      name: name,
      // Day
      day: !conversationStarted ? 'Today' : false,
      time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
    })

    // Update conversation flag
    conversationStarted = true;
  });
})
