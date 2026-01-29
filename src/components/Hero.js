import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
/**
 * Hero Component
 *
 * Features:
 * - Eye-catching hero section with animated text
 * - Call-to-action buttons with hover animations
 * - Accessible button design with WCAG contrast
 * - Responsive layout for all screen sizes
 * - Smooth fade-in animations
 */
const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };
    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        },
    };
    return (_jsxs("section", { id: "home", className: "min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20", children: [_jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" }), _jsx("div", { className: "absolute bottom-20 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" }), _jsxs(motion.div, { className: "relative z-10 max-w-4xl mx-auto text-center", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, className: "inline-block mb-6", children: _jsx("div", { className: "px-4 py-2 bg-primary-900/30 border border-primary-700/50 rounded-full backdrop-blur-sm hover:bg-primary-900/50 transition-all", children: _jsx("p", { className: "text-sm font-medium text-primary-300", children: "\uD83D\uDC4B Welcome to my portfolio" }) }) }), _jsx(motion.h1, { variants: itemVariants, className: "text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300 bg-clip-text text-transparent", children: "Hi, I'm Janallan Pandiin" }) }), _jsx(motion.h2, { variants: itemVariants, className: "text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light", children: "Full-Stack IT Developer & Creative Designer" }), _jsx(motion.p, { variants: itemVariants, className: "text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed", children: "Crafting beautiful, functional digital experiences with modern technologies. Specializing in React, TypeScript, and responsive web design." }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [_jsxs(motion.a, { href: "#projects", className: "inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg hover:shadow-primary-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 }, children: ["View My Projects", _jsx(ArrowRight, { size: 20, className: "ml-2" })] }), _jsxs(motion.a, { href: "#contact", className: "inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 hover:text-primary-300 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 }, children: ["Get In Touch", _jsx(Mail, { size: 20, className: "ml-2" })] })] }), _jsxs(motion.a, { href: "#", className: "inline-flex items-center justify-center px-6 py-3 text-primary-400 font-medium hover:text-primary-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded", variants: itemVariants, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(Download, { size: 20, className: "mr-2" }), "Download My CV"] }), _jsx(motion.div, { variants: itemVariants, className: "flex gap-6 justify-center mt-12", children: [
                            { icon: Github, label: 'GitHub', href: '#' },
                            { icon: Linkedin, label: 'LinkedIn', href: '#' },
                            { icon: Mail, label: 'Email', href: '#' },
                        ].map((social, index) => (_jsx(motion.a, { href: social.href, "aria-label": social.label, className: "p-3 rounded-lg bg-primary-900/30 border border-primary-700/50 text-primary-400 hover:text-primary-200 hover:bg-primary-900/50 hover:border-primary-600 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileHover: { scale: 1.2, y: -4 }, whileTap: { scale: 0.95 }, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 + index * 0.1, duration: 0.5 }, children: _jsx(social.icon, { size: 24 }) }, social.label))) })] }), _jsx(motion.div, { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2", variants: floatingVariants, animate: "animate", children: _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx("p", { className: "text-sm text-gray-400", children: "Scroll to explore" }), _jsx("div", { className: "w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center", children: _jsx(motion.div, { className: "w-1 h-2 bg-primary-500 rounded-full mt-2", animate: { y: [0, 8, 0] }, transition: { duration: 1.5, repeat: Infinity } }) })] }) })] }));
};
export default Hero;
