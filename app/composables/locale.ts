/**
 * Locale composable for vue-i18n.
 */
export function useLocale() {
  const { locale, setLocale, messages } = useI18n()

  function toggleLocale(_locale?: any) {
    if (!_locale) {
      const locales = Object.keys(messages.value)
      _locale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }
    setLocale(_locale)
  }

  return {
    toggleLocale,
  }
}
