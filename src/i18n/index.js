import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact'
    },
    calendar: {
      title: 'Commanders Game Schedule 2025',
      description: 'Download the calendar with all Commander game nights for 2025. Events will be displayed in your local timezone.',
      download: 'Download Calendar'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      contact: 'Contacto'
    },
    calendar: {
      title: 'Calendario de Juegos Commanders 2025',
      description: 'Descarga el calendario con todas las noches de juegos Commander para 2025. Los eventos se mostrarán en tu zona horaria local.',
      download: 'Descargar Calendario'
    }
  }
}

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages
})

export default i18n 