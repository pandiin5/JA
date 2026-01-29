import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

/**
 * Footer Component
 * 
 * Features:
 * - Social media links
 * - Copyright information
 * - Quick navigation
 * - Responsive design
 * - Accessible link design
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-primary-950/50 border-t border-primary-800/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Crafting beautiful digital experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-primary-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-primary-300 mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-primary-900/30 border border-primary-700/50 text-primary-400 hover:text-primary-200 hover:bg-primary-900/50 hover:border-primary-600 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-800/30 py-8" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Alex Johnson
          </p>
          <p>
            &copy; {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
