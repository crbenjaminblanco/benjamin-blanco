<template>
  <div class="home">
    <CommanderCalendar />
    <ChargersCalendar />
  </div>
</template>

<script>
import CommanderCalendar from '@/components/ui/calendar/CommanderCalendar.vue'
import ChargersCalendar from '@/components/ui/calendar/ChargersCalendar.vue'

export default {
  name: 'HomeView',
  components: {
    CommanderCalendar,
    ChargersCalendar
  }
}
</script>

<style scoped>
.home {
  padding: var(--spacing-lg);
}
</style> 