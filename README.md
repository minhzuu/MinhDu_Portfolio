# Nguyen Minh Du — Portfolio

Personal portfolio website showcasing my projects, skills, and experience as a Full-Stack Developer.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast build tool
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations & transitions
- **Lucide React** — icon library

## Features

- Dark theme with gradient accents & glassmorphism
- Interactive particle background (canvas)
- Page loading animation
- Typewriter effect in hero section
- Animated gradient text (section headings)
- Infinite marquee scroll for skills
- 3D tilt card effect on hover (projects & hero card)
- Custom cursor with hover reactions
- Scroll progress indicator
- Glow card hover effects
- Fully responsive (mobile / tablet / desktop)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.tsx
│   ├── AnimatedText.tsx
│   ├── Contact.tsx
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── PageLoader.tsx
│   ├── ParticleBackground.tsx
│   ├── Projects.tsx
│   ├── ScrollProgress.tsx
│   ├── Skills.tsx
│   ├── TypeWriter.tsx
│   └── icons/
│       └── GithubIcon.tsx
├── data/
│   └── projects.ts
├── App.tsx
├── main.tsx
└── index.css
```

## License

MIT
