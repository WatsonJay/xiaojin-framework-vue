/*
 * @Description: 
 * @Author:  Jaywatson
 * @Date: 2025/7/30 10:39
 */

import { createI18n } from 'vue-i18n'
import { useLocaleStoreWithOut } from '@/stores/modules/locale'
import { setHtmlPageLang } from './helper'

import zhcn from '@/locales/zh-CN.js'
import en from '@/locales/en.js'

export let i18n

const createI18nOptions = async () => {
  const localeStore = useLocaleStoreWithOut()
  const locale = localeStore.getCurrentLocale
  const localeMap = localeStore.getLocaleMap

  setHtmlPageLang(locale.lang)

  localeStore.setCurrentLocale({
    lang: locale.lang
    // elLocale: elLocal
  })

  return {
    legacy: false,
    locale: locale.lang,
    fallbackLocale: locale.lang,
    messages: {
      'zh-CN':zhcn,
      'en':en,
    },
    availableLocales: localeMap.map((v) => v.lang),
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true
  }
}

export const setupI18n = async (app) => {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}
