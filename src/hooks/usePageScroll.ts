import { useState, useEffect, useCallback } from 'react'

const usePageScroll = (threshold: number = 10) => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > threshold) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [threshold])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return scrolled
}

export default usePageScroll
