<script lang="ts" setup>
import '@/styles/main.css'

const { t } = useI18n()

const title = computed(() => {
  return t('app.title')
})

useHead({
  titleTemplate: (_t) => {
    return _t && _t !== title.value ? `${_t} - ${title.value}` : title.value
  },
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="linear-gradient(to right, #FF057C, #7C64D5, #4CC3FF)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
