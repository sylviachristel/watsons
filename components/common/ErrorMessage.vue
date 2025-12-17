<template>
  <div class="error-message bg-red-50 border border-red-200 rounded-lg p-6 text-center">
    <div class="text-red-600 text-5xl mb-4">⚠️</div>
    <h3 class="text-xl font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
    <p class="text-red-600 mb-4">{{ message }}</p>
    <button 
      @click="$emit('retry')"
      class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
    >
      Try Again
    </button>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'An error occurred. Please try again.'
  }
})

defineEmits(['retry'])
</script>