import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

/**
 * Projects Component
 * 
 * Features:
 * - Animated project cards with hover effects
 * - Project images with overlay information
 * - Technology tags for each project
 * - Links to live projects and GitHub repos
 * - Responsive grid layout
 * - WCAG compliant buttons and focus states
 */
const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://via.placeholder.com/400x300?text=E-Commerce+Platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team features, and analytics dashboard using WebSockets.',
      image: 'https://via.placeholder.com/400x300?text=Task+Management',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'WebSockets'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'AI Chat Interface',
      description: 'An intelligent chat application powered by machine learning with natural language processing and context awareness.',
      image: 'https://via.placeholder.com/400x300?text=AI+Chat+Interface',
      technologies: ['React', 'Python', 'TensorFlow', 'Express'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects, skills, and experiences with smooth animations and modern design.',
      image: 'https://via.placeholder.com/400x300?text=Portfolio+Website',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based data, detailed forecasts, and interactive maps.',
      image: 'https://via.placeholder.com/400x300?text=Weather+Dashboard',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Learning Platform',
      description: 'Online learning platform with video streaming, progress tracking, quizzes, and certificate generation.',
      image: 'https://via.placeholder.com/400x300?text=Learning+Platform',
      technologies: ['Next.js', 'MongoDB', 'AWS', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing diverse technologies and problem-solving approaches
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-primary-900/20 border border-primary-700/30 rounded-xl overflow-hidden hover:border-primary-600/50 transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-primary-950">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveLink}
                      className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-800/30 border border-primary-600/50 text-primary-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#"
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg hover:shadow-primary-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
