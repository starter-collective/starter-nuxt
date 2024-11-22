<script lang="ts" setup>
definePageMeta({
  name: 'About',
  layout: 'page',
})

const { t } = useI18n()

const title = computed(() => {
  return t('page.about.title')
})

useSeoMeta({
  title,
})
</script>

<template>
  <TheCard>
    <h2 text-center text-lg font-bold mb-5>
      {{ t('page.about.title') }}
    </h2>
    <p>
      {{ t('app.description') }}
    </p>
  </TheCard>
</template>
