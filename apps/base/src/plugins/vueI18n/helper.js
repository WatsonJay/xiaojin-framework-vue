/*
 * @Description: 
 * @Author:  Jaywatson
 * @Date: 2025/7/30 10:40
 */

export const setHtmlPageLang = (locale) => {
  document.querySelector('html')?.setAttribute('lang', locale)
}