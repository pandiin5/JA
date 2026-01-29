import { motion } from 'framer-motion'

/**
 * Skills Component
 * 
 * Features:
 * - Animated skill cards with progress visualization
 * - Organized by categories (Frontend, Backend, Tools)
 * - Responsive grid layout
 * - Smooth entrance and hover animations
 * - WCAG compliant color contrast
 */
const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Figma', level: 88 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Webpack', level: 85 },
        { name: 'Testing', level: 82 },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and tools I work with
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary-300 border-b border-primary-700/30 pb-4">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-primary-950/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full shadow-lg shadow-primary-500/50"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-primary-900/20 border border-primary-700/30 rounded-xl"
        >
          <h3 className="text-xl font-bold text-primary-300 mb-6">Also Familiar With</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Vue.js',
              'Next.js',
              'Python',
              'Typescript',
              'SASS',
              'Redux',
              'REST',
              'WebSockets',
              'Linux',
              'CI/CD',
              'Agile',
              'Firebase',
            ].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-primary-800/30 border border-primary-600/50 text-primary-300 rounded-lg text-sm font-medium hover:bg-primary-800/50 hover:border-primary-500 transition-all cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
