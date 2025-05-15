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
export default {
  name: 'CommanderCalendar',
  
  data() {
    return {
      componentKey: 0,
      events: [
        {
          title: 'Commander Night - January',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250115T180000',
          end: '20250115T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - February',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250212T180000',
          end: '20250212T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - March',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250319T180000',
          end: '20250319T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - April',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250416T180000',
          end: '20250416T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - May',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250514T180000',
          end: '20250514T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - June',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250618T180000',
          end: '20250618T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - July',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250716T180000',
          end: '20250716T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - August',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250813T180000',
          end: '20250813T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - September',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20250917T180000',
          end: '20250917T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - October',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20251015T180000',
          end: '20251015T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - November',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20251119T180000',
          end: '20251119T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        },
        {
          title: 'Commander Night - December',
          description: 'Monthly Commander games at Benjamin Blanco Calendars. Bring your Commander deck and join us for an evening of Magic: The Gathering!',
          start: '20251217T180000',
          end: '20251217T220000',
          location: 'Benjamin Blanco Calendars, 100m norte del Parque Central, Zarcero, Alajuela, Costa Rica',
          geo: { lat: 10.1857, lon: -84.3907 },
          address: {
            street: '100m norte del Parque Central',
            city: 'Zarcero',
            state: 'Alajuela',
            country: 'Costa Rica',
            postalCode: '20501'
          }
        }
      ]
    }
  },

  created() {
    // Forzar recarga del componente
    this.componentKey++
  },

  methods: {
    downloadCalendar(platform) {
      const icsContent = this.generateICSContent()
      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      
      // Ajustar el nombre del archivo según la plataforma
      const filename = platform === 'ios' 
        ? 'commanders-games-2025.ics'
        : 'commanders-games-2025.ical'
      
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
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

      this.events.forEach(event => {
        const formattedAddress = [
          event.address.street,
          event.address.city,
          event.address.state,
          event.address.postalCode,
          event.address.country
        ].filter(Boolean).join(', ')

        icsContent = icsContent.concat([
          'BEGIN:VEVENT',
          `DTSTAMP:${now}`,
          `DTSTART;TZID=${userTimezone}:${event.start}`,
          `DTEND;TZID=${userTimezone}:${event.end}`,
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