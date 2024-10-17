import { useCallback, useEffect, useRef } from 'react'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'

const useCardMousePosition = () => {
  const [cardMouseX, cardMouseSpringX] = useFramerSpringValue(-500)
  const [cardMouseY, cardMouseSpringY] = useFramerSpringValue(-500)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect() as DOMRect
      requestAnimationFrame(() => {
        const mouseX = Math.round(event.clientX - rect.left) - 250
        const mouseY = Math.round(event.clientY - rect.top) - 250

        cardMouseX.set(mouseX)
        cardMouseY.set(mouseY)
      })
    },
    [cardMouseX, cardMouseY],
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return { ref, cardMouseX: cardMouseSpringX, cardMouseY: cardMouseSpringY }
}

export default useCardMousePosition
