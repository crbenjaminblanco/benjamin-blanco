import { stadiums } from '../data/stadiums'

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