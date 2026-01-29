import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
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
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { icon: Github, label: 'GitHub', href: '#' },
        { icon: Linkedin, label: 'LinkedIn', href: '#' },
        { icon: Mail, label: 'Email', href: '#' },
    ];
    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];
    return (_jsx("footer", { className: "relative bg-primary-950/50 border-t border-primary-800/30 backdrop-blur-sm", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx("h3", { className: "text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2", children: "Portfolio" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Crafting beautiful digital experiences with modern technologies." })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, viewport: { once: true }, children: [_jsx("h4", { className: "text-sm font-semibold text-primary-300 mb-4", children: "Quick Links" }), _jsx("ul", { className: "space-y-2", children: quickLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-gray-400 hover:text-primary-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded px-1", children: link.label }) }, link.label))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, children: [_jsx("h4", { className: "text-sm font-semibold text-primary-300 mb-4", children: "Follow Me" }), _jsx("div", { className: "flex gap-4", children: socialLinks.map((social) => (_jsx(motion.a, { href: social.href, "aria-label": social.label, className: "p-2 rounded-lg bg-primary-900/30 border border-primary-700/50 text-primary-400 hover:text-primary-200 hover:bg-primary-900/50 hover:border-primary-600 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileHover: { scale: 1.1, y: -4 }, whileTap: { scale: 0.95 }, children: _jsx(social.icon, { size: 20 }) }, social.label))) })] })] }), _jsx("div", { className: "border-t border-primary-800/30 py-8" }), _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400", children: [_jsxs("p", { className: "flex items-center gap-1", children: ["Made with ", _jsx(Heart, { size: 16, className: "text-red-500 fill-red-500" }), " by Alex Johnson"] }), _jsxs("p", { children: ["\u00A9 ", currentYear, " All rights reserved."] })] })] }) }));
};
export default Footer;
