import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';
/**
 * About Component
 *
 * Features:
 * - Engaging bio section with animated cards
 * - Highlights key expertise areas
 * - Responsive grid layout
 * - Smooth entrance animations
 */
const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };
    const features = [
        {
            icon: Code2,
            title: 'Full-Stack Development',
            description: 'Expert in React, TypeScript, Node.js, and modern web frameworks',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Creating beautiful, intuitive interfaces with Figma and CSS',
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Building fast, efficient applications with excellent user experience',
        },
    ];
    return (_jsxs("section", { id: "about", className: "relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [_jsx("div", { className: "absolute left-0 top-1/2 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -z-10" }), _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl sm:text-5xl font-bold mb-4", children: _jsx("span", { className: "bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent", children: "About Me" }) }), _jsx("p", { className: "text-gray-400 text-lg max-w-2xl mx-auto", children: "Passionate developer with 5+ years of experience building web applications" })] }), _jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "grid md:grid-cols-2 gap-12 mb-16 items-center", children: [_jsxs(motion.div, { variants: itemVariants, className: "space-y-6", children: [_jsx("p", { className: "text-gray-300 text-lg leading-relaxed", children: "I'm a passionate full-stack developer dedicated to creating beautiful, functional digital experiences. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life with clean, efficient code." }), _jsx("p", { className: "text-gray-300 text-lg leading-relaxed", children: "My journey in tech started with a curiosity about how things work. Today, I leverage that curiosity to solve complex problems and build applications that make a real impact." }), _jsxs("div", { className: "pt-4", children: [_jsx("p", { className: "text-primary-400 font-semibold mb-3", children: "Currently working with:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (_jsx("span", { className: "px-4 py-2 bg-primary-900/30 border border-primary-700/50 text-primary-300 rounded-lg text-sm font-medium", children: tech }, tech))) })] })] }), _jsx(motion.div, { variants: containerVariants, className: "grid grid-cols-1 gap-4", children: features.map((feature) => (_jsxs(motion.div, { variants: itemVariants, className: "p-6 bg-primary-900/20 border border-primary-700/30 rounded-xl hover:bg-primary-900/40 hover:border-primary-600/50 transition-all group cursor-default", children: [_jsx(feature.icon, { className: "w-8 h-8 text-primary-400 mb-3 group-hover:text-primary-300 transition-colors" }), _jsx("h3", { className: "font-semibold text-lg mb-2 text-white group-hover:text-primary-300 transition-colors", children: feature.title }), _jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: feature.description })] }, feature.title))) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, viewport: { once: true }, className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                            { number: '50+', label: 'Projects Completed' },
                            { number: '30+', label: 'Happy Clients' },
                            { number: '5+', label: 'Years Experience' },
                            { number: '100%', label: 'Satisfaction Rate' },
                        ].map((stat) => (_jsxs("div", { className: "p-6 bg-primary-900/20 border border-primary-700/30 rounded-xl text-center hover:bg-primary-900/40 hover:border-primary-600/50 transition-all", children: [_jsx("div", { className: "text-3xl font-bold text-primary-400 mb-2", children: stat.number }), _jsx("p", { className: "text-gray-400 text-sm", children: stat.label })] }, stat.label))) })] })] }));
};
export default About;
