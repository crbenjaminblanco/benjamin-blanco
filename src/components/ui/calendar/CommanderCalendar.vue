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
          title: '🏈 Commanders vs Giants',
          description: 'NFL Week 1',
          start: '20250907T130000',
          end: '20250907T170000',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Packers',
          description: 'NFL Week 2',
          start: '20250911T201500',
          end: '20250911T241500',
          location: 'Lambeau Field',
          geo: { lat: 44.5013, lon: -88.0622 },
          address: {
            street: '1265 Lombardi Ave',
            city: 'Green Bay',
            state: 'WI',
            country: 'USA',
            postalCode: '54304'
          }
        },
        {
          title: '🏈 Commanders vs Raiders',
          description: 'NFL Week 3',
          start: '20250921T130000',
          end: '20250921T170000',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Falcons',
          description: 'NFL Week 4',
          start: '20250928T130000',
          end: '20250928T170000',
          location: 'Mercedes-Benz Stadium',
          geo: { lat: 33.7550, lon: -84.4006 },
          address: {
            street: '1 AMB Drive NW',
            city: 'Atlanta',
            state: 'GA',
            country: 'USA',
            postalCode: '30313'
          }
        },
        {
          title: '🏈 Commanders vs Chargers',
          description: 'NFL Week 5',
          start: '20251005T162500',
          end: '20251005T202500',
          location: 'SoFi Stadium',
          geo: { lat: 33.9535, lon: -118.3387 },
          address: {
            street: '1001 Stadium Dr',
            city: 'Inglewood',
            state: 'CA',
            country: 'USA',
            postalCode: '90301'
          }
        },
        {
          title: '🏈 Commanders vs Bears',
          description: 'NFL Week 6',
          start: '20251013T201500',
          end: '20251013T241500',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Cowboys',
          description: 'NFL Week 7',
          start: '20251019T162500',
          end: '20251019T202500',
          location: 'AT&T Stadium',
          geo: { lat: 32.7478, lon: -97.0928 },
          address: {
            street: '1 AT&T Way',
            city: 'Arlington',
            state: 'TX',
            country: 'USA',
            postalCode: '76011'
          }
        },
        {
          title: '🏈 Commanders vs Chiefs',
          description: 'NFL Week 8',
          start: '20251027T201500',
          end: '20251027T241500',
          location: 'Arrowhead Stadium',
          geo: { lat: 39.0489, lon: -94.4839 },
          address: {
            street: '1 Arrowhead Dr',
            city: 'Kansas City',
            state: 'MO',
            country: 'USA',
            postalCode: '64129'
          }
        },
        {
          title: '🏈 Commanders vs Seahawks',
          description: 'NFL Week 9',
          start: '20251102T202000',
          end: '20251102T242000',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Lions',
          description: 'NFL Week 10',
          start: '20251109T162500',
          end: '20251109T202500',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Dolphins',
          description: 'NFL Week 11',
          start: '20251116T093000',
          end: '20251116T133000',
          location: 'Hard Rock Stadium',
          geo: { lat: 25.9580, lon: -80.2389 },
          address: {
            street: '347 Don Shula Dr',
            city: 'Miami Gardens',
            state: 'FL',
            country: 'USA',
            postalCode: '33056'
          }
        },
        {
          title: '🏈 Commanders vs Broncos',
          description: 'NFL Week 13',
          start: '20251130T202000',
          end: '20251130T242000',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Vikings',
          description: 'NFL Week 14',
          start: '20251207T130000',
          end: '20251207T170000',
          location: 'U.S. Bank Stadium',
          geo: { lat: 44.9739, lon: -93.2581 },
          address: {
            street: '401 Chicago Ave',
            city: 'Minneapolis',
            state: 'MN',
            country: 'USA',
            postalCode: '55415'
          }
        },
        {
          title: '🏈 Commanders vs Giants',
          description: 'NFL Week 15',
          start: '20251214T130000',
          end: '20251214T170000',
          location: 'MetLife Stadium',
          geo: { lat: 40.8135, lon: -74.0744 },
          address: {
            street: '1 MetLife Stadium Dr',
            city: 'East Rutherford',
            state: 'NJ',
            country: 'USA',
            postalCode: '07073'
          }
        },
        {
          title: '🏈 Commanders vs Eagles',
          description: 'NFL Week 16',
          start: '20251220T130000',
          end: '20251220T170000',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Cowboys',
          description: 'NFL Week 17',
          start: '20251225T130000',
          end: '20251225T170000',
          location: 'Northwest Stadium',
          geo: { lat: 38.9078, lon: -76.8644 },
          address: {
            street: '1600 FedEx Way',
            city: 'Landover',
            state: 'MD',
            country: 'USA',
            postalCode: '20785'
          }
        },
        {
          title: '🏈 Commanders vs Eagles',
          description: 'NFL Week 18',
          start: '20260104T130000',
          end: '20260104T170000',
          location: 'Lincoln Financial Field',
          geo: { lat: 39.9008, lon: -75.1675 },
          address: {
            street: '1 Lincoln Financial Field Way',
            city: 'Philadelphia',
            state: 'PA',
            country: 'USA',
            postalCode: '19148'
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