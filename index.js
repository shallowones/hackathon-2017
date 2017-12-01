const bs = require('browser-sync').create()

bs.watch('./customer').on('change', bs.reload)
bs.init({
  server: './customer'
})
