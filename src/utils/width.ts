import { useEffect, useState } from 'react'
import { isBrowser } from './browser'

const getWidth = () =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

export const useCurrentWidth = () => {
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    if (!isBrowser) {
      return undefined
    }

    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}
