import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { AnimatedText } from './AnimatedText'
import TypeWriter from './TypeWriter'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(springY, [-1, 1], [10, -10])
  const rotateY = useTransform(springX, [-1, 1], [-10, 10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1
      const normY = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(normX)
      mouseY.set(normY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToAbout = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const techStack = ['React', 'Spring Boot', 'NodeJS', 'MySQL', 'MongoDB', 'Docker']
  const softSkills = ['Fast Learner', 'Team Work', 'Problem Solving']

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="gradient-orb w-[500px] h-[500px] bg-[#6C63FF] top-[-100px] left-[-100px]" />
      <div className="gradient-orb w-[400px] h-[400px] bg-[#00D4AA] bottom-[10%] right-[-50px]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-[#FF6B6B] top-[50%] left-[40%]" style={{ opacity: 0.08 }} />

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col justify-center py-12 lg:py-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
              <span className="text-sm text-white/50 tracking-wide uppercase">Software Engineering Student</span>
            </motion.div>

            {/* Main Heading */}
            <AnimatedText
              text="Nguyen <br/> MinhDu"
              className="font-bold leading-[0.9] tracking-tight mb-4"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
            />

            {/* Typewriter subtitle */}
            <div className="text-lg md:text-xl text-white/60 mb-4 max-w-xl leading-relaxed h-8">
              <TypeWriter
                words={['Full-Stack Developer', 'ReactJS & Spring Boot', 'Building Scalable Apps', 'Clean Code Enthusiast']}
                className="text-lg md:text-xl"
              />
            </div>

            <p className="text-base md:text-lg text-white/40 mb-8 max-w-xl leading-relaxed">
              Passionate about building scalable web applications and delivering exceptional user experiences.
            </p>

            {/* Tech stack tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 tag-glow"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Soft skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-[#6C63FF]"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-10 mb-12"
            >
              {[
                { num: '4+', label: 'Years of study' },
                { num: '10+', label: 'Projects completed' },
                { num: '5+', label: 'Core technologies' },
              ].map((stat, i) => (
                <div key={i} className="relative">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.num}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex items-center gap-6"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group relative px-7 py-3.5 rounded-xl text-base font-medium text-white overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#00D4AA] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">View Projects</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="text-base font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                Contact me →
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Visual element with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center relative"
            style={{ perspective: 1000, rotateX, rotateY }}
          >
            <motion.div className="relative w-full max-w-lg">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4AA]/20 rounded-3xl blur-xl" />

              {/* Main card */}
              <div className="relative glass rounded-3xl p-10 border border-white/10">
                {/* Profile circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4AA] p-[2px] mb-6 mx-auto" style={{ animation: 'pulse-glow 3s ease infinite' }}>
                  <img src="/mz.jpg" alt="Nguyen Minh Du" className="w-full h-full rounded-full object-cover" />
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-1">Nguyen Minh Du</h2>
                  <p className="text-white/50">Full-Stack Developer</p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {['React', 'Node.js', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'Docker'].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1.5 border border-white/10 rounded-full text-white/50 bg-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Availability badge */}
                <div className="flex items-center justify-center gap-2 bg-white/5 rounded-xl px-4 py-2.5 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
                  <span className="text-sm text-white/50">Looking for new opportunities</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={scrollToAbout}
          className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors cursor-pointer mb-12 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={16} />
          <span>Scroll down</span>
        </motion.button>
      </div>
    </section>
  )
}
