import type { Locale } from 'vue-i18n'

/**
 * Locale composable for vue-i18n.
 */
export function useLocale() {
  const { locale, messages } = useI18n()

  function toggleLocale(_locale?: Locale) {
    if (!_locale) {
      const locales = Object.keys(messages.value)
      _locale = locales[(locales.indexOf(locale.value) + 1) % locales.length] as Locale
    }
    locale.value = _locale
  }

  return {
    toggleLocale,
  }
}
