export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  image?: string
  github?: string
  demo?: string
  featured?: boolean
  status: 'completed' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ZYNC Platform — Real-time Messaging',
    description:
      'Real-time messaging platform (Zalo Clone) with chat, notifications, and media sharing built on microservices architecture.',
    longDescription:
      'A full-featured real-time messaging platform inspired by Zalo. Supports one-on-one and group chats, media sharing, online status, and push notifications. Built with a microservices approach using Kafka for event streaming, Redis Pub/Sub for real-time delivery, and Socket.io for persistent connections.',
    tags: ['Node.js', 'React', 'Socket.io', 'Kafka', 'Redis', 'PostgreSQL', 'Docker'],
    image: '/projects/zync-platform.png',
    featured: true,
    status: 'in-progress',
    github: 'https://github.com/minhzuu/ZYNC_PLATFORM_REAlTIME',
  },
  {
    id: 2,
    title: 'LMS Microservices Platform',
    description:
      'Learning Management System with microservices architecture, enabling course management, student dashboards, and analytics.',
    longDescription:
      'A scalable LMS built on microservices with clear bounded contexts. Features include course creation, enrollment workflows, student dashboards with progress analytics, notification services, and a CQRS-based read/write separation for high throughput.',
    tags: ['TypeScript', 'Next.js', 'Microservices', 'CQRS', 'PostgreSQL', 'Kafka'],
    image: '/projects/lms-platform.png',
    featured: true,
    status: 'in-progress',
    github: 'https://github.com/minhzuu/lms-microservices-platform',
  },
  {
    id: 3,
    title: 'Real Estate Management System',
    description:
      'Full-stack system to manage buildings, customers, transactions, and staff with advanced search and filtering.',
    longDescription:
      'A comprehensive real estate management platform built with React (Vite) on the frontend and Spring Boot on the backend. Supports building CRUD, customer management, transaction tracking, staff assignment, and advanced multi-criteria search. Containerized with Docker and backed by MySQL.',
    tags: ['React', 'Spring Boot', 'MySQL', 'Docker', 'Vite', 'Tailwind CSS'],
    image: '/projects/real-estate.png',
    featured: true,
    status: 'in-progress',
    github: 'https://github.com/minhzuu/real-estate-management',
  },
  {
    id: 4,
    title: 'Watch E-Commerce Website',
    description:
      'Modern e-commerce website for digital watches with product browsing, cart, checkout, and an admin dashboard.',
    longDescription:
      'A full-stack e-commerce platform specializing in digital watches. Features include product search with filters (price, brand, features), shopping cart, secure checkout with JWT authentication, order tracking, product reviews, and a comprehensive admin panel with revenue statistics. Built with React + Tailwind CSS frontend and Spring Boot REST API backend, powered by MariaDB.',
    tags: ['React', 'Tailwind CSS', 'Spring Boot', 'MariaDB', 'JWT', 'REST API'],
    image: '/projects/watch-store.png',
    status: 'completed',
    github: 'https://github.com/minhzuu/WebWatchStore',
  },
  {
    id: 5,
    title: 'EcommerApp — Online Shopping',
    description:
      'Online shopping application with TypeScript frontend and Django backend for product, user, and order management.',
    longDescription:
      'An e-commerce application built with TypeScript on the frontend for type safety and maintainability, and Django on the backend for robust RESTful APIs. Handles product catalog, user authentication, order processing, and aims for a smooth shopping experience with high security and flexible scalability.',
    tags: ['TypeScript', 'Django', 'Python', 'REST API', 'PostgreSQL'],
    image: '/projects/ecommer-app.png',
    status: 'completed',
    github: 'https://github.com/minhzuu/EcommerApp',
  },
  {
    id: 6,
    title: 'Pharmacy Management System',
    description:
      'Desktop pharmacy management system for medicines, inventory, invoices, and customer tracking with RMI synchronization.',
    longDescription:
      'A Java desktop application for managing pharmacy operations — including medicine inventory, purchase invoices, sales invoices, and customer records. Implements role-based access for staff, revenue tracking, and optimized sales workflows. Built with Hibernate and JPA for ORM, RMI for remote data synchronization, and MariaDB for storage.',
    tags: ['Java', 'Hibernate', 'JPA', 'RMI', 'MariaDB', 'Java Swing'],
    image: '/projects/pharmacy-system.png',
    status: 'completed',
    github: 'https://github.com/minhzuu/Java_JPA_RMI',
  },
]
