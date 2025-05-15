<template>
  <div class="chargers-calendar">
    <h2 class="chargers-calendar__title">{{ $t('calendar.chargersTitle') }}</h2>
    <p class="chargers-calendar__description">{{ $t('calendar.chargersDescription') }}</p>
    
    <div class="chargers-calendar__actions">
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
  name: 'ChargersCalendar',
  
  data() {
    return {
      // Base events in local time
      baseEvents: [
        {
          title: 'NFL Week 1',
          description: '🏈 Los Angeles Chargers vs Las Vegas Raiders',
          month: 9,
          day: 8,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 2',
          description: '🏈 Los Angeles Chargers vs Kansas City Chiefs',
          month: 9,
          day: 15,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 3',
          description: '🏈 Los Angeles Chargers vs Denver Broncos',
          month: 9,
          day: 22,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 4',
          description: '🏈 Los Angeles Chargers vs Baltimore Ravens',
          month: 9,
          day: 29,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 5',
          description: '🏈 Los Angeles Chargers vs Cleveland Browns',
          month: 10,
          day: 6,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 6',
          description: '🏈 Los Angeles Chargers vs Pittsburgh Steelers',
          month: 10,
          day: 13,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 7',
          description: '🏈 Los Angeles Chargers vs Tennessee Titans',
          month: 10,
          day: 20,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 8',
          description: '🏈 Los Angeles Chargers vs Indianapolis Colts',
          month: 10,
          day: 27,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 9',
          description: '🏈 Los Angeles Chargers vs New York Jets',
          month: 11,
          day: 3,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 10',
          description: '🏈 Los Angeles Chargers vs Buffalo Bills',
          month: 11,
          day: 10,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 11',
          description: '🏈 Los Angeles Chargers vs Miami Dolphins',
          month: 11,
          day: 17,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 12',
          description: '🏈 Los Angeles Chargers vs New England Patriots',
          month: 11,
          day: 24,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 13',
          description: '🏈 Los Angeles Chargers vs Cincinnati Bengals',
          month: 12,
          day: 1,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 14',
          description: '🏈 Los Angeles Chargers vs Jacksonville Jaguars',
          month: 12,
          day: 8,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 15',
          description: '🏈 Los Angeles Chargers vs Houston Texans',
          month: 12,
          day: 15,
          hour: 13,
          duration: 3,
          isHome: true
        },
        {
          title: 'NFL Week 16',
          description: '🏈 Los Angeles Chargers vs Las Vegas Raiders',
          month: 12,
          day: 22,
          hour: 13,
          duration: 3,
          isHome: false
        },
        {
          title: 'NFL Week 17',
          description: '🏈 Los Angeles Chargers vs Kansas City Chiefs',
          month: 12,
          day: 29,
          hour: 13,
          duration: 3,
          isHome: true
        }
      ]
    }
  },

  methods: {
    downloadCalendar(platform) {
      const icsContent = this.generateICSContent()
      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      
      // Ajustar el nombre del archivo según la plataforma
      const filename = platform === 'ios' 
        ? 'chargers-games-2025.ics'
        : 'chargers-games-2025.ical'
      
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },

    formatDateForICS(date) {
      return `${date.year}${String(date.month).padStart(2, '0')}${String(date.day).padStart(2, '0')}T${String(date.hour).padStart(2, '0')}${String(date.minute).padStart(2, '0')}00`
    },

    getStadiumLocation(opponent, isHome) {
      if (isHome) {
        return 'SoFi Stadium, 1001 Stadium Dr, Inglewood, CA 90301'
      }
      
      // Mapa de estadios visitantes
      const awayStadiums = {
        'Raiders': 'Allegiant Stadium, 3333 Al Davis Way, Las Vegas, NV 89118',
        'Chiefs': 'Arrowhead Stadium, 1 Arrowhead Dr, Kansas City, MO 64129',
        'Broncos': 'Empower Field at Mile High, 1701 Bryant St, Denver, CO 80204',
        'Ravens': 'M&T Bank Stadium, 1101 Russell St, Baltimore, MD 21230',
        'Browns': 'Cleveland Browns Stadium, 100 Alfred Lerner Way, Cleveland, OH 44114',
        'Steelers': 'Acrisure Stadium, 100 Art Rooney Ave, Pittsburgh, PA 15212',
        'Titans': 'Nissan Stadium, 1 Titans Way, Nashville, TN 37213',
        'Colts': 'Lucas Oil Stadium, 500 S Capitol Ave, Indianapolis, IN 46225',
        'Jets': 'MetLife Stadium, 1 MetLife Stadium Dr, East Rutherford, NJ 07073',
        'Bills': 'Highmark Stadium, 1 Bills Dr, Orchard Park, NY 14127',
        'Dolphins': 'Hard Rock Stadium, 347 Don Shula Dr, Miami Gardens, FL 33056',
        'Patriots': 'Gillette Stadium, 1 Patriot Pl, Foxborough, MA 02035',
        'Bengals': 'Paycor Stadium, 1 Paycor Stadium, Cincinnati, OH 45202',
        'Jaguars': 'EverBank Stadium, 1 TIAA Bank Field Dr, Jacksonville, FL 32202',
        'Texans': 'NRG Stadium, NRG Pkwy, Houston, TX 77054'
      }
      
      return awayStadiums[opponent] || 'TBD'
    },

    generateICSContent() {
      const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      
      let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Chargers Games 2025//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:Chargers Games 2025',
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
        const startDate = {
          year: 2025,
          month: event.month,
          day: event.day,
          hour: event.hour,
          minute: 0
        }
        const startTime = this.formatDateForICS(startDate)
        
        const endDate = {
          year: 2025,
          month: event.month,
          day: event.day,
          hour: event.hour + event.duration,
          minute: 0
        }
        const endTime = this.formatDateForICS(endDate)

        // Extraer el oponente del título del evento
        const opponent = event.description.split('vs ')[1]
        const location = this.getStadiumLocation(opponent, event.isHome)

        icsContent = icsContent.concat([
          'BEGIN:VEVENT',
          `DTSTAMP:${now}`,
          `DTSTART;TZID=${userTimezone}:${startTime}`,
          `DTEND;TZID=${userTimezone}:${endTime}`,
          `SUMMARY:${event.title}`,
          `DESCRIPTION:${event.description}`,
          `LOCATION:${location}`,
          'STATUS:CONFIRMED',
          'SEQUENCE:0',
          'TRANSP:OPAQUE',
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
.chargers-calendar {
  padding: var(--spacing-lg);
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
}

.chargers-calendar__title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.chargers-calendar__description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.chargers-calendar__actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .chargers-calendar {
    padding: var(--spacing-md);
  }
  
  .chargers-calendar__title {
    font-size: var(--text-xl);
  }
}
</style> 