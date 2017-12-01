const bs = require('browser-sync').create()

bs.watch('./public').on('change', bs.reload)
bs.init({
  server: './public'
})
