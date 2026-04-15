import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated rings */}
            <div className="relative w-20 h-20">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#6C63FF]"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#00D4AA]"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#FF6B6B]"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-1"
            >
              <span className="text-lg font-semibold gradient-text">MinhDu</span>
              <span className="text-lg text-white/40">.Dev</span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full scroll-progress rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
