/**
 * Locale composable for @nuxtjs/i18n.
 *
 * @see https://i18n.nuxtjs.org/
 */
export function useLocale() {
  const { locale, messages, setLocale } = useI18n()

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
