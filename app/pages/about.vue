<script lang="ts" setup>
definePageMeta({
  name: 'About',
  layout: 'page',
  title: 'page.about.title',
})

const { t } = useI18n()
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
