import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * AnimatedBackground Component
 *
 * Creates a dynamic, animated background with floating particles
 * and gradient animations. Provides visual interest without
 * affecting readability or accessibility.
 */
const AnimatedBackground = () => {
    return (_jsxs("div", { className: "fixed inset-0 -z-20 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" }), _jsx("div", { className: "absolute inset-0 animated-gradient opacity-30" }), _jsx("div", { className: "absolute top-20 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" }), _jsx("div", { className: "absolute -top-40 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" }), _jsx("div", { className: "absolute -bottom-40 -left-20 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-pulse-slow" }), _jsx("div", { className: "absolute bottom-10 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" }), _jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-5" })] }));
};
export default AnimatedBackground;
