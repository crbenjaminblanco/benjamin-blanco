<template>
  <BaseCalendar 
    :base-events="baseEvents"
    team-name="Commanders"
    :title="$t('calendar.title')"
    :description="$t('calendar.description')"
  />
</template>

<script>
import { createEvent } from '../../../utils/calendarUtils'
import BaseCalendar from './BaseCalendar.vue'

export default {
  name: 'CommanderCalendar',
  
  components: {
    BaseCalendar 
  },
  
  data() {
    return {
      baseEvents: [
        createEvent({
          title: '🏈 Giants @ Commanders',
          description: 'NFL Week 1',
          month: 9,
          day: 7,
          hour: 13,
          minute: 0,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Packers',
          description: 'NFL Week 2',
          month: 9,
          day: 11,
          hour: 20,
          minute: 15,
          location: 'Lambeau Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Raiders @ Commanders',
          description: 'NFL Week 3',
          month: 9,
          day: 21,
          hour: 13,
          minute: 0,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Falcons',
          description: 'NFL Week 4',
          month: 9,
          day: 28,
          hour: 13,
          minute: 0,
          location: 'Mercedes-Benz Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Chargers',
          description: 'NFL Week 5',
          month: 10,
          day: 5,
          hour: 16,
          minute: 25,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Bears @ Commanders',
          description: 'NFL Week 6',
          month: 10,
          day: 13,
          hour: 20,
          minute: 15,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Cowboys',
          description: 'NFL Week 7',
          month: 10,
          day: 19,
          hour: 16,
          minute: 25,
          location: 'AT&T Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Chiefs',
          description: 'NFL Week 8',
          month: 10,
          day: 27,
          hour: 20,
          minute: 15,
          location: 'Arrowhead Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Seahawks @ Commanders',
          description: 'NFL Week 9',
          month: 11,
          day: 2,
          hour: 20,
          minute: 20,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Lions @ Commanders',
          description: 'NFL Week 10',
          month: 11,
          day: 9,
          hour: 16,
          minute: 25,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Dolphins',
          description: 'NFL Week 11',
          month: 11,
          day: 16,
          hour: 9,
          minute: 30,
          location: 'Hard Rock Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Broncos @ Commanders',
          description: 'NFL Week 13',
          month: 11,
          day: 30,
          hour: 20,
          minute: 20,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Vikings',
          description: 'NFL Week 14',
          month: 12,
          day: 7,
          hour: 13,
          minute: 0,
          location: 'U.S. Bank Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Giants',
          description: 'NFL Week 15',
          month: 12,
          day: 14,
          hour: 13,
          minute: 0,
          location: 'MetLife Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Eagles @ Commanders',
          description: 'NFL Week 16',
          month: 12,
          day: 20,
          hour: 'TBD',
          minute: 0,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Cowboys @ Commanders',
          description: 'NFL Week 17',
          month: 12,
          day: 25,
          hour: 13,
          minute: 0,
          location: 'FedEx Field',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Eagles',
          description: 'NFL Week 18',
          month: 1,
          day: 4,
          hour: 'TBD',
          minute: 0,
          location: 'Lincoln Financial Field',
          year: 2025
        })
      ]
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