<template>
  <BaseCalendar 
    :base-events="baseEvents"
    team-name="Chargers"
    :title="$t('calendar.chargersTitle')"
    :description="$t('calendar.chargersDescription')"
  />
</template>

<script>
import { createEvent } from '../../../utils/calendarUtils'
import BaseCalendar from './BaseCalendar.vue'

export default {
  name: 'ChargersCalendar',
  
  components: {
    BaseCalendar
  },

  data() {
    return {
      baseEvents: [
        createEvent({
          title: '🏈 Chargers @ Chiefs',
          description: 'NFL Week 1',
          month: 9,
          day: 5,
          hour: 17,
          minute: 0,
          location: 'Arena Corinthians',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Raiders',
          description: 'NFL Week 2',
          month: 9,
          day: 15,
          hour: 19,
          minute: 0,
          location: 'Allegiant Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Broncos @ Chargers',
          description: 'NFL Week 3',
          month: 9,
          day: 21,
          hour: 13,
          minute: 5,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Giants',
          description: 'NFL Week 4',
          month: 9,
          day: 28,
          hour: 10,
          minute: 0,
          location: 'MetLife Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Commanders @ Chargers',
          description: 'NFL Week 5',
          month: 10,
          day: 5,
          hour: 13,
          minute: 25,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Dolphins',
          description: 'NFL Week 6',
          month: 10,
          day: 12,
          hour: 10,
          minute: 0,
          location: 'Hard Rock Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Colts @ Chargers',
          description: 'NFL Week 7',
          month: 10,
          day: 19,
          hour: 13,
          minute: 5,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Vikings @ Chargers',
          description: 'NFL Week 8',
          month: 10,
          day: 23,
          hour: 17,
          minute: 15,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Titans',
          description: 'NFL Week 9',
          month: 11,
          day: 2,
          hour: 10,
          minute: 0,
          location: 'Nissan Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Steelers @ Chargers',
          description: 'NFL Week 10',
          month: 11,
          day: 9,
          hour: 17,
          minute: 20,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Jaguars',
          description: 'NFL Week 11',
          month: 11,
          day: 16,
          hour: 10,
          minute: 0,
          location: 'EverBank Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Raiders @ Chargers',
          description: 'NFL Week 13',
          month: 11,
          day: 30,
          hour: 13,
          minute: 25,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Eagles @ Chargers',
          description: 'NFL Week 14',
          month: 12,
          day: 8,
          hour: 17,
          minute: 15,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Chiefs',
          description: 'NFL Week 15',
          month: 12,
          day: 14,
          hour: 10,
          minute: 0,
          location: 'GEHA Field at Arrowhead Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Cowboys',
          description: 'NFL Week 16',
          month: 12,
          day: 21,
          hour: 10,
          minute: 0,
          location: 'AT&T Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Texans @ Chargers',
          description: 'NFL Week 17',
          month: 12,
          day: 29,
          hour: 'TBD',
          minute: 0,
          location: 'SoFi Stadium',
          year: 2025
        }),
        createEvent({
          title: '🏈 Chargers @ Broncos',
          description: 'NFL Week 18',
          month: 1,
          day: 5,
          hour: 'TBD',
          minute: 0,
          location: 'Empower Field at Mile High',
          year: 2026
        })
      ]
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