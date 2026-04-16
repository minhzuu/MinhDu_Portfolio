import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedText } from './AnimatedText'

const skillsRow1 = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'TailwindCSS',
  'Java', 'Spring Boot', 'MySQL', 'MongoDB', 'Git', 'GitHub',
]

const skillsRow2 = [
  'Node.js', 'Express', 'Next.js', 'Docker', 'PostgreSQL', 'REST API',
  'Microservices', 'Vite', 'Figma', 'Linux', 'Redis', 'Kafka',
]

const skillGroups = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'], color: '#6C63FF' },
  { category: 'Backend', skills: ['Node.js', 'Express', 'Java Spring Boot', 'REST API'], color: '#00D4AA' },
  { category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'], color: '#FF6B6B' },
  { category: 'Architecture', skills: ['Microservices', 'Event Driven', 'Layered Architecture'], color: '#6C63FF' },
  { category: 'DevOps & Tools', skills: ['Docker', 'Git', 'GitHub', 'Linux'], color: '#00D4AA' },
  { category: 'Design & UI', skills: ['Figma', 'Responsive Design', 'UI/UX Principles'], color: '#FF6B6B' },
]

function MarqueeRow({ skills, reverse = false }: { skills: string[], reverse?: boolean }) {
  const doubled = [...skills, ...skills]
  return (
    <div className="overflow-hidden py-3">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center gap-2 mx-2 px-5 py-2.5 rounded-full border border-white/8 bg-white/[0.03] text-white/60 text-sm whitespace-nowrap tag-glow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative">
      <div className="gradient-orb w-[400px] h-[400px] bg-[#00D4AA] bottom-[10%] left-[-100px]" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-3" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#6C63FF] uppercase tracking-widest font-medium mb-2">03 /</p>
              <p className="text-sm text-white/40 uppercase tracking-widest">Skills</p>
            </motion.div>
          </div>

          <div className="lg:col-span-9">
            <AnimatedText
              text="My Skills"
              className="font-bold leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white/40 text-lg max-w-2xl"
            >
              I not only work with these technologies but excel in using them with best practices to deliver high-quality results.
            </motion.p>
          </div>
        </div>

        {/* Infinite marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 -mx-6 md:-mx-12 lg:-mx-20"
        >
          <MarqueeRow skills={skillsRow1} />
          <MarqueeRow skills={skillsRow2} reverse />
        </motion.div>

        {/* Skills grid */}
        <div className="lg:pl-[calc((3/12)*100%+6rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {skillGroups.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + groupIdx * 0.08 }}
                className="glow-card rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: group.color }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 bg-white/5 border border-white/8 rounded-lg text-white/70 hover:bg-[#6C63FF]/15 hover:border-[#6C63FF]/30 hover:text-[#6C63FF] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-sm text-white/30"
          >
            * Constantly updating and learning new technologies
          </motion.p>
        </div>
      </div>
    </section>
  )
}
