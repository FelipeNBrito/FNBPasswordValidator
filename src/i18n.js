import i18next from 'i18next';
import Backend from 'i18next-sync-fs-backend';

i18next.use(Backend).init({
  lng: 'en',
  fallbackLng: 'en',
  preload: ['en'],
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

module.exports = i18next;