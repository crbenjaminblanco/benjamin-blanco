export const convertToUserTimezone = (date, hour, minute) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const eventDate = new Date(date)
  
  if (hour === 'TBD') {
    return {
      date: eventDate,
      time: 'TBD'
    }
  }

  eventDate.setHours(hour, minute)
  
  const userDate = new Date(eventDate.toLocaleString('en-US', { timeZone: userTimezone }))
  
  return {
    date: userDate,
    time: userDate.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: userTimezone
    })
  }
}

export const generateICSContent = (events, teamName) => {
  const now = new Date()
  const year = now.getFullYear()
  
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Benjamin Blanco//NFL Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:' + teamName + ' Schedule',
    'X-WR-TIMEZONE:UTC',
    'X-WR-CATEGORIES:NFL'
  ]

  events.forEach(event => {
    const eventYear = event.year || year
    const eventDate = new Date(eventYear, event.month - 1, event.day)
    const { date, time } = convertToUserTimezone(eventDate, event.hour, event.minute)
    
    const startTime = time === 'TBD' ? 
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z' :
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const endTime = time === 'TBD' ?
      new Date(date.getTime() + 3 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z' :
      new Date(date.getTime() + 3 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

    icsContent = icsContent.concat([
      'BEGIN:VEVENT',
      'DTSTAMP:' + now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
      'DTSTART:' + startTime,
      'DTEND:' + endTime,
      'SUMMARY:' + event.title,
      'DESCRIPTION:' + event.description,
      'LOCATION:' + event.location,
      'CATEGORIES:NFL',
      'END:VEVENT'
    ])
  })

  icsContent.push('END:VCALENDAR')
  return icsContent.join('\r\n')
}

export const downloadCalendar = (events, teamName, filename) => {
  const icsContent = generateICSContent(events, teamName)
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename || `${teamName.toLowerCase()}-schedule.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const createEvent = ({ title, description, month, day, hour, minute, location, year }) => {
  return {
    title,
    description,
    month,
    day,
    hour,
    minute,
    location,
    year
  }
} 