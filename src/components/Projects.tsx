import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { AnimatedText } from './AnimatedText'
import { projects, type Project } from '../data/projects'
import { GithubIcon } from './icons/GithubIcon'

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    completed: { label: 'Completed', class: 'bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/20' },
    'in-progress': { label: 'In Progress', class: 'bg-[#6C63FF]/10 text-[#6C63FF] border-[#6C63FF]/20' },
    planned: { label: 'Planned', class: 'bg-[#FF6B6B]/10 text-[#FF6B6B] border-[#FF6B6B]/20' },
  }
  const s = map[status]
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${s.class}`}>
      {s.label}
    </span>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX / rect.width - 0.5 - rect.left / rect.width)
    y.set(e.clientY / rect.height - 0.5 - rect.top / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group glow-card rounded-2xl overflow-hidden relative"
    >
      {/* Image / Placeholder */}
      <div className="relative aspect-video bg-[#111]/60 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 to-[#00D4AA]/5" />
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold gradient-text">{project.title[0]}</span>
              </div>
              <p className="text-white/20 text-sm">Project Preview</p>
            </div>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] text-white text-xs px-3 py-1 rounded-full font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold leading-tight text-white group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 border border-white/8 rounded-full text-white/40 bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-xs px-2.5 py-1 text-white/30">+{project.tags.length - 5}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/40 hover:text-[#6C63FF] transition-colors"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/40 hover:text-[#00D4AA] transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {(project.demo || project.github) && (
            <a
              href={project.demo ?? project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm text-white/30 group-hover:text-[#6C63FF] transition-colors flex items-center gap-1"
            >
              Details <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | Project['status']>('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.status === filter)

  return (
    <section id="projects" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative">
      <div className="gradient-orb w-[500px] h-[500px] bg-[#6C63FF] top-[30%] right-[-200px]" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-3" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#6C63FF] uppercase tracking-widest font-medium mb-2">02 /</p>
              <p className="text-sm text-white/40 uppercase tracking-widest">Projects</p>
            </motion.div>
          </div>

          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
            >
              <div>
                <AnimatedText
                  text="Featured Projects"
                  className="font-bold leading-tight tracking-tight mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
                />
                <p className="text-white/40 text-base max-w-lg">
                  Explore my recent projects showcasing fullstack development with Spring Boot, ReactJS, and modern web technologies.
                </p>
              </div>

              {/* Filter */}
              <div className="flex gap-2 flex-wrap">
                {(['all', 'completed', 'in-progress'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`text-sm px-4 py-2 rounded-full border transition-all cursor-pointer ${
                      filter === f
                        ? 'bg-[#6C63FF] text-white border-[#6C63FF]'
                        : 'border-white/10 text-white/40 hover:border-[#6C63FF]/40 hover:text-white/70'
                    }`}
                  >
                    {f === 'all' ? 'All' : f === 'completed' ? 'Completed' : 'In Progress'}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <div className="lg:pl-[calc((3/12)*100%+6rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
