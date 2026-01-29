import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
/**
 * Main App Component
 *
 * Serves as the root component for the portfolio website.
 * Manages overall layout, theme state, and component composition.
 * Implements a component-based architecture with smooth animations
 * and responsive design across all screen sizes.
 */
function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    // Prevent scroll during initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs("div", { className: `${isDarkMode ? 'dark' : 'light'} min-h-screen`, children: [_jsx(AnimatedBackground, {}), _jsxs("div", { className: "relative z-10", children: [_jsx(Navbar, { isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode }), _jsxs("main", { className: "relative", children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] })] }));
}
export default App;
