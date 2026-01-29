import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
/**
 * Navbar Component
 *
 * Features:
 * - Sticky navigation with smooth scrolling
 * - Mobile-responsive hamburger menu
 * - Theme toggle (dark/light mode)
 * - Smooth animations and transitions
 * - WCAG compliant with proper ARIA labels and focus states
 */
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // Track scroll position for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Navigation links
    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];
    // Handle smooth scrolling
    const handleScrollTo = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };
    return (_jsx(motion.nav, { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 }, className: `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-primary-950/80 backdrop-blur-xl shadow-lg border-b border-primary-800/20'
            : 'bg-transparent'}`, role: "navigation", "aria-label": "Main navigation", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx(motion.a, { href: "#home", className: "text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent hover:from-primary-300 hover:to-secondary-300 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: (e) => handleScrollTo(e, '#home'), "aria-label": "Portfolio Home", children: "Portfolio" }), _jsx("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link, index) => (_jsxs(motion.a, { href: link.href, onClick: (e) => handleScrollTo(e, link.href), className: "text-gray-300 hover:text-primary-400 transition-colors relative group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded px-2 py-1", initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1, duration: 0.3 }, children: [link.label, _jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300" })] }, link.label))) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(motion.button, { onClick: () => setIsDarkMode(!isDarkMode), className: "p-2 rounded-lg bg-primary-800/30 hover:bg-primary-700/50 text-primary-300 hover:text-primary-200 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, "aria-label": `Switch to ${isDarkMode ? 'light' : 'dark'} mode`, children: isDarkMode ? _jsx(Sun, { size: 20 }) : _jsx(Moon, { size: 20 }) }), _jsx(motion.button, { onClick: () => setIsOpen(!isOpen), className: "md:hidden p-2 rounded-lg bg-primary-800/30 hover:bg-primary-700/50 text-primary-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileTap: { scale: 0.95 }, "aria-label": "Toggle mobile menu", "aria-expanded": isOpen, children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] })] }), _jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }, transition: { duration: 0.3 }, className: "md:hidden overflow-hidden", children: _jsx("div", { className: "px-2 pt-2 pb-4 space-y-2 border-t border-primary-800/20", children: navLinks.map((link) => (_jsx(motion.a, { href: link.href, onClick: (e) => handleScrollTo(e, link.href), className: "block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-primary-800/30 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileHover: { x: 4 }, children: link.label }, link.label))) }) })] }) }));
};
export default Navbar;
