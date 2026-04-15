import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useSpring(mousePosition.x, { stiffness: 300, damping: 20 })
  const cursorY = useSpring(mousePosition.y, { stiffness: 300, damping: 20 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const mouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === 'A' ||
        (e.target as HTMLElement).tagName === 'BUTTON' ||
        (e.target as HTMLElement).closest('a') ||
        (e.target as HTMLElement).closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', mouseOver)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', mouseOver)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#6C63FF] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#6C63FF]/50 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.2 : 0.6,
          borderColor: isHovering ? 'rgba(0, 212, 170, 0.5)' : 'rgba(108, 99, 255, 0.5)',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
