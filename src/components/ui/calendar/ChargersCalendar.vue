<template>
  <BaseCalendar 
    :base-events="baseEvents"
    team-name="Chargers"
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
          title: '🏈 Chargers vs Raiders',
          description: 'NFL Week 1',
          month: 9,
          day: 8,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Panthers',
          description: 'NFL Week 2',
          month: 9,
          day: 15,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Steelers',
          description: 'NFL Week 3',
          month: 9,
          day: 22,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Chiefs',
          description: 'NFL Week 4',
          month: 9,
          day: 29,
          hour: 13,
          minute: 0,
          location: 'Arrowhead Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Commanders',
          description: 'NFL Week 5',
          month: 10,
          day: 5,
          hour: 13,
          minute: 25,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Broncos',
          description: 'NFL Week 6',
          month: 10,
          day: 13,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Cardinals',
          description: 'NFL Week 7',
          month: 10,
          day: 20,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Ravens',
          description: 'NFL Week 8',
          month: 10,
          day: 27,
          hour: 13,
          minute: 0,
          location: 'M&T Bank Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Browns',
          description: 'NFL Week 9',
          month: 11,
          day: 3,
          hour: 13,
          minute: 0,
          location: 'Cleveland Browns Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Lions',
          description: 'NFL Week 10',
          month: 11,
          day: 10,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Packers',
          description: 'NFL Week 11',
          month: 11,
          day: 17,
          hour: 13,
          minute: 0,
          location: 'Lambeau Field'
        }),
        createEvent({
          title: '🏈 Chargers vs Bills',
          description: 'NFL Week 12',
          month: 11,
          day: 24,
          hour: 13,
          minute: 0,
          location: 'Highmark Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Raiders',
          description: 'NFL Week 13',
          month: 11,
          day: 30,
          hour: 13,
          minute: 25,
          location: 'Allegiant Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Broncos',
          description: 'NFL Week 14',
          month: 12,
          day: 8,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Chiefs',
          description: 'NFL Week 15',
          month: 12,
          day: 15,
          hour: 13,
          minute: 0,
          location: 'SoFi Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Bengals',
          description: 'NFL Week 16',
          month: 12,
          day: 22,
          hour: 13,
          minute: 0,
          location: 'Paycor Stadium'
        }),
        createEvent({
          title: '🏈 Chargers vs Broncos',
          description: 'NFL Week 17',
          month: 12,
          day: 29,
          hour: 13,
          minute: 25,
          location: 'Empower Field at Mile High'
        }),
        createEvent({
          title: '🏈 Chargers vs Raiders',
          description: 'NFL Week 18',
          month: 1,
          day: 5,
          hour: 13,
          minute: 25,
          location: 'SoFi Stadium'
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