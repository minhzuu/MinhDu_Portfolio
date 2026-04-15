import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedText } from './AnimatedText'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const infoCards = [
    { label: 'Education', value: "Bachelor of Software Engineering" },
    { label: 'Location', value: 'Ho Chi Minh City, VN' },
    { label: 'Status', value: 'Looking for work' },
  ]

  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative">
      {/* Subtle gradient orb */}
      <div className="gradient-orb w-[400px] h-[400px] bg-[#6C63FF] top-[20%] right-[-100px]" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Section label */}
          <div className="lg:col-span-3">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#6C63FF] uppercase tracking-widest font-medium mb-2">01 /</p>
              <p className="text-sm text-white/40 uppercase tracking-widest">About me</p>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <AnimatedText
                text="About me"
                className="font-bold leading-tight tracking-tight mb-10"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
              />

              <div className="space-y-6 max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-white/50">
                  I'm <span className="text-white font-medium">Nguyen Minh Du</span>, a driven and curious Software Engineering student
                  with a solid foundation in <span className="gradient-text font-medium">Fullstack Web Development</span> using
                  ReactJS, Spring Boot, and MySQL.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-white/50">
                  With experience working with modern technologies like <span className="text-white font-medium">React, Node.js, TypeScript, Spring Boot</span>,
                  I always aim to write clean, well-structured, and maintainable code.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-white/50">
                  I am highly motivated to learn, adapt, and take on real-world challenges. Currently seeking an
                  <span className="text-white font-medium"> Intern Fullstack Developer</span> position to contribute to dynamic
                  projects while expanding my technical and professional skills.
                </p>
              </div>

              {/* Info cards */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {infoCards.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glow-card rounded-2xl p-5"
                  >
                    <p className="text-xs text-[#6C63FF] uppercase tracking-wide mb-2">{item.label}</p>
                    <p className="text-base font-medium text-white">{item.value}</p>
                    {item.extra && <p className="text-xs text-white/40 mt-1">{item.extra}</p>}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-2 text-[#6C63FF] hover:text-[#00D4AA] transition-colors font-medium cursor-pointer"
                >
                  View My Projects →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
