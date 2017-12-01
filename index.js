const bs = require('browser-sync').create()

bs.watch('./business').on('change', bs.reload)
bs.init({
  server: './business'
})
