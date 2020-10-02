const i18next = require('i18next')
const Backend = require('i18next-sync-fs-backend')

i18next.use(Backend).init({
  lng: 'tr',
  fallbackLng: 'en',
  preload: ['en', 'tr'],
  ns: ['translation'],
  defaultNS: 'translation',
  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json'
  }
}, (err, t) => {
  if (err) return console.error(err)
  console.log('i18next is ready...')
  console.log(t('welcome'))
  //interpolation example
  console.log(t('minLength', { min: 8 }))
})

module.exports = i18next

