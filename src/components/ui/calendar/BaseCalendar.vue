<template>
  <div class="base-calendar" :key="componentKey">
    <h2 class="base-calendar__title">{{ $t('calendar.title') }}</h2>
    <p class="base-calendar__description">{{ $t('calendar.description') }}</p>
    
    <div class="base-calendar__actions">
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
import { downloadCalendar } from '../../../utils/calendarUtils'

export default {
  name: 'BaseCalendar',
  
  props: {
    baseEvents: {
      type: Array,
      required: true
    },
    teamName: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      componentKey: 0
    }
  },

  created() {
    this.componentKey++
  },

  methods: {
    downloadCalendar(platform) {
      downloadCalendar(this.baseEvents, this.teamName, platform)
    }
  }
}
</script>

<style scoped>
.base-calendar {
  padding: var(--spacing-lg);
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
}

.base-calendar__title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.base-calendar__description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.base-calendar__actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .base-calendar {
    padding: var(--spacing-md);
  }
  
  .base-calendar__title {
    font-size: var(--text-xl);
  }
}
</style> 