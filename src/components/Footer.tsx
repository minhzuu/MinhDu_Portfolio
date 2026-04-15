import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/GithubIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative">
      {/* Gradient line separator */}
      <div className="gradient-line" />

      <div className="py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {year} <span className="gradient-text">Nguyen Minh Du</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: GithubIcon, href: 'https://github.com/minhzuu', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/du-nguy%E1%BB%85n-minh-00bb2b3ba/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:Minhdusky012345@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/30 hover:text-[#6C63FF] transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-white/30 hover:text-[#6C63FF] transition-colors cursor-pointer"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
