import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, FacebookIcon } from './icons/GithubIcon'
import { AnimatedText } from './AnimatedText'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+84 394 439 390', href: 'tel:+84394439390' },
    { icon: Mail, label: 'Email', value: 'Minhdusky012345@gmail.com', href: 'mailto:Minhdusky012345@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: 'https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam' },
  ]

  const socials = [
    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/minhzuu', display: 'github.com/minhzuu' },
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/du-nguy%E1%BB%85n-minh-00bb2b3ba/', display: 'linkedin.com/minhdu' },
    { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/minhh.zu.265198', display: 'facebook.com/minhdu' },
  ]

  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative">
      <div className="gradient-orb w-[400px] h-[400px] bg-[#FF6B6B] top-[20%] left-[-100px]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-[#6C63FF] bottom-[10%] right-[-50px]" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-3" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#6C63FF] uppercase tracking-widest font-medium mb-2">04 /</p>
              <p className="text-sm text-white/40 uppercase tracking-widest">Contact</p>
            </motion.div>
          </div>

          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AnimatedText
                text="Get In Touch"
                className="font-bold leading-tight tracking-tight mb-4"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
              />
              <p className="text-lg text-white/40 max-w-xl">
                Feel free to reach out if you'd like to collaborate — you are just a few clicks away!
              </p>
            </motion.div>
          </div>
        </div>

        <div className="lg:pl-[calc((3/12)*100%+6rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-[#6C63FF] mb-6">
                Get In Touch
              </p>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glow-card rounded-xl group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#6C63FF]/20 group-hover:border-[#6C63FF]/30 transition-all duration-300">
                      <Icon size={16} className="text-white/40 group-hover:text-[#6C63FF] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-[#00D4AA] mb-6">
                Follow Me
              </p>
              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, href, display }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glow-card rounded-xl group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#00D4AA]/20 group-hover:border-[#00D4AA]/30 transition-all duration-300">
                      <Icon size={16} className="text-white/40 group-hover:text-[#00D4AA] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{display}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
