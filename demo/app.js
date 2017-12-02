document.addEventListener('DOMContentLoaded', () => {
  const leftButtons = document.querySelectorAll('.button-iframe-left')
  const rightButtons = document.querySelectorAll('.button-iframe-right')
  const iframeLeft = document.querySelector('.iframe-left')
  const iframeRight = document.querySelector('.iframe-right')

  Promise.all([
    new Promise(
      (resolve) => iframeLeft.addEventListener('load', () => resolve(iframeLeft), false)
    ),
    new Promise(
      (resolve) => iframeRight.addEventListener('load', () => resolve(iframeRight), false)
    )
  ]).then(([ left, right ]) => {
    for (let button of leftButtons) {
      button.addEventListener('click', (e) => {
        const { value } = e.target

        left.contentWindow.postMessage({
          type: 'page',
          action: value
        }, '*')

        for (let b of leftButtons) {
          b.classList.remove('active')
        }
        button.classList.add('active')

        e.preventDefault()
      }, false)
    }

    for (let button of rightButtons) {
      button.addEventListener('click', (e) => {
        const { value } = e.target

        right.contentWindow.postMessage({
          type: 'page',
          action: value
        }, '*')

        for (let b of rightButtons) {
          b.classList.remove('active')
        }
        button.classList.add('active')

        e.preventDefault()
      }, false)
    }
  })
}, false)
