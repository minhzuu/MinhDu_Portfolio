import { motion, useInView } from 'framer-motion'
import { useRef, CSSProperties } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  style?: CSSProperties
}

export function AnimatedText({ text, className, once = true, style }: AnimatedTextProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-50px' })

  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', ...style }}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      ref={ref}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '0.25em', display: 'inline-block' }}
          key={index}
          className="gradient-text"
        >
          {word === '<br/>' ? <br /> : word}
        </motion.span>
      ))}
    </motion.div>
  )
}
