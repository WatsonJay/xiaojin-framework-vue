/*
 * @Description: 
 * @Author:  Jaywatson
 * @Date: 2025/7/31 10:02
 */

export const useStorage = (type = 'sessionStorage') => {
  const setStorage = (key, value) => {
    window[type].setItem(key, JSON.stringify(value))
  }

  const getStorage = (key) => {
    const value = window[type].getItem(key)
    if (value) {
      const val = JSON.parse(value)
      return val
    } else {
      return value
    }
  }

  const removeStorage = (key) => {
    window[type].removeItem(key)
  }

  const clear = (excludes) => {
    // 获取排除项
    const keys = Object.keys(window[type])
    const defaultExcludes = ['dynamicRouter', 'serverDynamicRouter']
    const excludesArr = excludes ? [...excludes, ...defaultExcludes] : defaultExcludes
    const excludesKeys = excludesArr ? keys.filter((key) => !excludesArr.includes(key)) : keys
    // 排除项不清除
    excludesKeys.forEach((key) => {
      window[type].removeItem(key)
    })
    // window[type].clear()
  }

  return {
    setStorage,
    getStorage,
    removeStorage,
    clear
  }
}
