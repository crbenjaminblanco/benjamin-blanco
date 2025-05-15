<template>
  <div class="commander-calendar" :key="componentKey">
    <h2 class="commander-calendar__title">{{ $t('calendar.title') }}</h2>
    <p class="commander-calendar__description">{{ $t('calendar.description') }}</p>
    
    <div class="commander-calendar__actions">
      <button 
        class="btn btn-primary"
        @click="downloadCalendar('ios')"
      >
        <i class="fab fa-apple me-2"></i>
        {{ $t('calendar.downloadIOS') }}
      </button>
      <button 
        class="btn btn-primary"
        @click="downloadCalendar('android')"
      >
        <i class="fab fa-android me-2"></i>
        {{ $t('calendar.downloadAndroid') }}
      </button>
    </div>
  </div>
</template>

<script>
import { downloadCalendar, createEvent } from '../../../utils/calendarUtils'

export default {
  name: 'CommanderCalendar',
  
  data() {
    return {
      componentKey: 0,
      baseEvents: [
        createEvent({
          title: '🏈 Commanders vs Giants',
          description: 'NFL Week 1',
          month: 9,
          day: 7,
          hour: 11,
          minute: 0,
          location: 'Northwest Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Packers',
          description: 'NFL Week 2',
          month: 9,
          day: 15,
          hour: 11,
          minute: 0,
          location: 'Lambeau Field'
        }),
        createEvent({
          title: '🏈 Commanders vs Raiders',
          description: 'NFL Week 3',
          month: 9,
          day: 21,
          hour: 11,
          minute: 0,
          location: 'Northwest Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Falcons',
          description: 'NFL Week 4',
          month: 9,
          day: 28,
          hour: 11,
          minute: 0,
          location: 'Mercedes-Benz Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Chargers',
          description: 'NFL Week 5',
          month: 10,
          day: 5,
          hour: 14,
          minute: 25,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Bears',
          description: 'NFL Week 6',
          month: 10,
          day: 13,
          hour: 11,
          minute: 0,
          location: 'Northwest Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Cowboys',
          description: 'NFL Week 7',
          month: 10,
          day: 19,
          hour: 14,
          minute: 25,
          location: 'AT&T Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Chiefs',
          description: 'NFL Week 8',
          month: 10,
          day: 27,
          hour: 18,
          minute: 15,
          location: 'Arrowhead Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Seahawks',
          description: 'NFL Week 9',
          month: 11,
          day: 2,
          hour: 11,
          minute: 0,
          location: 'Northwest Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Lions',
          description: 'NFL Week 10',
          month: 11,
          day: 9,
          hour: 11,
          minute: 0,
          location: 'Northwest Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Dolphins',
          description: 'NFL Week 11',
          month: 11,
          day: 16,
          hour: 7,
          minute: 30,
          location: 'Hard Rock Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Broncos',
          description: 'NFL Week 13',
          month: 11,
          day: 30,
          hour: 11,
          minute: 0,
          location: 'Northwest Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Vikings',
          description: 'NFL Week 14',
          month: 12,
          day: 7,
          hour: 11,
          minute: 0,
          location: 'U.S. Bank Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Giants',
          description: 'NFL Week 15',
          month: 12,
          day: 14,
          hour: 11,
          minute: 0,
          location: 'MetLife Stadium'
        }),
        createEvent({
          title: '🏈 Commanders vs Eagles',
          description: 'NFL Week 16',
          month: 12,
          day: 20,
          hour: 11,
          minute: 0,
          location: 'Northwest Stadium'
        })
      ]
    }
  },

  created() {
    this.componentKey++
  },

  methods: {
    downloadCalendar(platform) {
      downloadCalendar(this.baseEvents, 'Commanders', platform)
    },

    getStadiumLocation(opponent, isHome) {
      if (isHome) {
        return 'FedExField, 1600 FedEx Way, Landover, MD 20785'
      }
      
      // Mapa de estadios visitantes
      const awayStadiums = {
        'Giants': 'MetLife Stadium, 1 MetLife Stadium Dr, East Rutherford, NJ 07073',
        'Cardinals': 'State Farm Stadium, 1 Cardinals Dr, Glendale, AZ 85305',
        'Ravens': 'M&T Bank Stadium, 1101 Russell St, Baltimore, MD 21230',
        'Bears': 'Soldier Field, 1410 Special Olympics Dr, Chicago, IL 60605',
        'Cowboys': 'AT&T Stadium, 1 AT&T Way, Arlington, TX 76011',
        'Falcons': 'Mercedes-Benz Stadium, 1 AMB Drive NW, Atlanta, GA 30313',
        'Seahawks': 'Lumen Field, 800 Occidental Ave S, Seattle, WA 98134',
        'Packers': 'Lambeau Field, 1265 Lombardi Ave, Green Bay, WI 54304',
        'Vikings': 'U.S. Bank Stadium, 401 Chicago Ave, Minneapolis, MN 55415',
        'Buccaneers': 'Raymond James Stadium, 4201 N Dale Mabry Hwy, Tampa, FL 33607',
        'Bengals': 'Paycor Stadium, 1 Paycor Stadium, Cincinnati, OH 45202',
        'Browns': 'Cleveland Browns Stadium, 100 Alfred Lerner Way, Cleveland, OH 44114',
        'Panthers': 'Bank of America Stadium, 800 S Mint St, Charlotte, NC 28202',
        'Eagles': 'Lincoln Financial Field, 1 Lincoln Financial Field Way, Philadelphia, PA 19148',
        'Saints': 'Caesars Superdome, 1500 Sugar Bowl Dr, New Orleans, LA 70112',
        'Rams': 'SoFi Stadium, 1001 Stadium Dr, Inglewood, CA 90301',
        '49ers': 'Levi\'s Stadium, 4900 Marie P DeBartolo Way, Santa Clara, CA 95054'
      }
      
      return awayStadiums[opponent] || 'TBD'
    },

    generateICSContent() {
      const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      
      // Función para convertir la hora a la zona horaria del usuario
      const convertToUserTimezone = (dateStr) => {
        // Extraer año, mes, día, hora y minutos del string de fecha
        const year = dateStr.substring(0, 4)
        const month = dateStr.substring(4, 6)
        const day = dateStr.substring(6, 8)
        const hour = dateStr.substring(9, 11)
        const minute = dateStr.substring(11, 13)
        
        // Crear fecha en UTC
        const date = new Date(Date.UTC(year, month - 1, day, hour, minute))
        
        // Convertir a la zona horaria del usuario
        const userDate = new Date(date.toLocaleString('en-US', { timeZone: userTimezone }))
        
        // Formatear la fecha para ICS
        return userDate.toISOString()
          .replace(/[-:]/g, '')
          .replace(/\.\d{3}/g, '')
          .replace('Z', '')
      }
      
      let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Commanders Games 2025//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:Commanders Games 2025',
        `X-WR-TIMEZONE:${userTimezone}`,
        'BEGIN:VTIMEZONE',
        `TZID:${userTimezone}`,
        `X-LIC-LOCATION:${userTimezone}`,
        'BEGIN:STANDARD',
        'TZOFFSETFROM:-0600',
        'TZOFFSETTO:-0600',
        'TZNAME:CST',
        'DTSTART:19700101T000000',
        'END:STANDARD',
        'END:VTIMEZONE'
      ]

      this.baseEvents.forEach(event => {
        const formattedAddress = [
          event.address.street,
          event.address.city,
          event.address.state,
          event.address.postalCode,
          event.address.country
        ].filter(Boolean).join(', ')

        // Convertir las horas de inicio y fin a la zona horaria del usuario
        const startTime = convertToUserTimezone(event.start)
        const endTime = convertToUserTimezone(event.end)

        icsContent = icsContent.concat([
          'BEGIN:VEVENT',
          `DTSTAMP:${now}`,
          `DTSTART;TZID=${userTimezone}:${startTime}`,
          `DTEND;TZID=${userTimezone}:${endTime}`,
          `SUMMARY:${event.title}`,
          `DESCRIPTION:${event.description}`,
          `LOCATION:${formattedAddress}`,
          `GEO:${event.geo.lat};${event.geo.lon}`,
          'STATUS:CONFIRMED',
          'SEQUENCE:0',
          'TRANSP:OPAQUE',
          'ORGANIZER;CN=Benjamin Blanco Calendars:mailto:contact@nidodelparque.com',
          'URL:https://nidodelparque.com',
          'END:VEVENT'
        ])
      })

      icsContent.push('END:VCALENDAR')
      return icsContent.join('\r\n')
    }
  }
}
</script>

<style scoped>
.commander-calendar {
  padding: var(--spacing-lg);
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
}

.commander-calendar__title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.commander-calendar__description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.commander-calendar__actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .commander-calendar {
    padding: var(--spacing-md);
  }
  
  .commander-calendar__title {
    font-size: var(--text-xl);
  }
}
</style> 