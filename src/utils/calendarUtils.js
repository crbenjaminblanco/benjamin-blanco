export const convertToUserTimezone = (event) => {
  const year = event.year || 2025
  const date = new Date(Date.UTC(year, event.month - 1, event.day, event.hour, event.minute || 0))
  const userDate = new Date(date.toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
  return userDate.toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/g, '')
    .replace('Z', '')
}

export const generateICSContent = (events, calendarName) => {
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${calendarName} Games 2025//EN`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${calendarName} Games 2025`,
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

  events.forEach(event => {
    const startTime = convertToUserTimezone(event)
    const endTime = convertToUserTimezone({
      ...event,
      hour: event.hour + event.duration
    })

    const formattedAddress = event.address ? [
      event.address.street,
      event.address.city,
      event.address.state,
      event.address.postalCode,
      event.address.country
    ].filter(Boolean).join(', ') : event.location

    icsContent = icsContent.concat([
      'BEGIN:VEVENT',
      `DTSTAMP:${now}`,
      `DTSTART;TZID=${userTimezone}:${startTime}`,
      `DTEND;TZID=${userTimezone}:${endTime}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${formattedAddress}`,
      event.geo ? `GEO:${event.geo.lat};${event.geo.lon}` : '',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'TRANSP:OPAQUE',
      'ORGANIZER;CN=Benjamin Blanco Calendars:mailto:contact@nidodelparque.com',
      'URL:https://nidodelparque.com',
      'END:VEVENT'
    ].filter(Boolean))
  })

  icsContent.push('END:VCALENDAR')
  return icsContent.join('\r\n')
}

export const downloadCalendar = (events, calendarName, platform) => {
  const icsContent = generateICSContent(events, calendarName)
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  
  const filename = platform === 'ios' 
    ? `${calendarName.toLowerCase()}-games-2025.ics`
    : `${calendarName.toLowerCase()}-games-2025.ical`
  
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Stadium locations and addresses
export const stadiums = {
  'SoFi Stadium': {
    geo: { lat: 33.9535, lon: -118.3387 },
    address: {
      street: '1001 Stadium Dr',
      city: 'Inglewood',
      state: 'CA',
      country: 'USA',
      postalCode: '90301'
    }
  },
  'Northwest Stadium': {
    geo: { lat: 38.9078, lon: -76.8644 },
    address: {
      street: '1600 FedEx Way',
      city: 'Landover',
      state: 'MD',
      country: 'USA',
      postalCode: '20785'
    }
  },
  'Lambeau Field': {
    geo: { lat: 44.5013, lon: -88.0622 },
    address: {
      street: '1265 Lombardi Ave',
      city: 'Green Bay',
      state: 'WI',
      country: 'USA',
      postalCode: '54304'
    }
  },
  'Mercedes-Benz Stadium': {
    geo: { lat: 33.7550, lon: -84.4006 },
    address: {
      street: '1 AMB Drive NW',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      postalCode: '30313'
    }
  },
  'AT&T Stadium': {
    geo: { lat: 32.7478, lon: -97.0928 },
    address: {
      street: '1 AT&T Way',
      city: 'Arlington',
      state: 'TX',
      country: 'USA',
      postalCode: '76011'
    }
  },
  'Arrowhead Stadium': {
    geo: { lat: 39.0489, lon: -94.4839 },
    address: {
      street: '1 Arrowhead Dr',
      city: 'Kansas City',
      state: 'MO',
      country: 'USA',
      postalCode: '64129'
    }
  },
  'Hard Rock Stadium': {
    geo: { lat: 25.9580, lon: -80.2389 },
    address: {
      street: '347 Don Shula Dr',
      city: 'Miami Gardens',
      state: 'FL',
      country: 'USA',
      postalCode: '33056'
    }
  },
  'U.S. Bank Stadium': {
    geo: { lat: 44.9739, lon: -93.2581 },
    address: {
      street: '401 Chicago Ave',
      city: 'Minneapolis',
      state: 'MN',
      country: 'USA',
      postalCode: '55415'
    }
  },
  'MetLife Stadium': {
    geo: { lat: 40.8135, lon: -74.0744 },
    address: {
      street: '1 MetLife Stadium Dr',
      city: 'East Rutherford',
      state: 'NJ',
      country: 'USA',
      postalCode: '07073'
    }
  },
  'Arena Corinthians': {
    geo: { lat: -23.5450, lon: -46.4747 },
    address: {
      street: 'Av. Miguel Ignacio Curi',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil',
      postalCode: '08295-005'
    }
  },
  'Allegiant Stadium': {
    geo: { lat: 36.0908, lon: -115.1834 },
    address: {
      street: '3333 Al Davis Way',
      city: 'Las Vegas',
      state: 'NV',
      country: 'USA',
      postalCode: '89118'
    }
  },
  'Empower Field at Mile High': {
    geo: { lat: 39.7439, lon: -105.0204 },
    address: {
      street: '1701 Bryant St',
      city: 'Denver',
      state: 'CO',
      country: 'USA',
      postalCode: '80204'
    }
  }
}

// Helper function to create event object
export const createEvent = ({
  title,
  description,
  month,
  day,
  hour,
  minute = 0,
  duration = 3,
  location,
  year = 2025
}) => {
  const stadium = stadiums[location]
  return {
    title,
    description,
    month,
    day,
    hour,
    minute,
    duration,
    location,
    year,
    geo: stadium?.geo,
    address: stadium?.address
  }
} 