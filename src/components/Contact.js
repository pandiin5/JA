import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
/**
 * Contact Component
 *
 * Features:
 * - Contact form with validation
 * - Email integration using EmailJS
 * - Success and error feedback messages
 * - Accessible form inputs with labels
 * - WCAG compliant styling
 * - Smooth form animations
 */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState(null);
    // Initialize EmailJS on component mount
    useEffect(() => {
        // Replace with your EmailJS public key (get it from emailjs.com)
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
        if (PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
            emailjs.init(PUBLIC_KEY);
        }
    }, []);
    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // Form validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);
        if (!validateForm()) {
            return;
        }
        setIsLoading(true);
        try {
            // Get EmailJS credentials from environment variables
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
            const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL || 'your-email@example.com';
            // Prepare email parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                to_email: RECIPIENT_EMAIL,
                subject: formData.subject,
                message: formData.message,
                reply_to: formData.email,
            };
            // Send email using EmailJS
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
            if (response.status === 200) {
                // Success
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            }
        }
        catch (error) {
            console.error('Email sending failed:', error);
            setSubmitError('Failed to send email. Please try again or contact us directly.');
        }
        finally {
            setIsLoading(false);
        }
    };
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };
    return (_jsxs("section", { id: "contact", className: "relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [_jsx("div", { className: "absolute right-0 top-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10" }), _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl sm:text-5xl font-bold mb-4", children: _jsx("span", { className: "bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent", children: "Get In Touch" }) }), _jsx("p", { className: "text-gray-400 text-lg max-w-2xl mx-auto", children: "I'm always open to new opportunities and collaborations. Feel free to reach out!" })] }), _jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "bg-primary-900/20 border border-primary-700/30 rounded-xl p-8 sm:p-12", children: [isSubmitted && (_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, className: "mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3", role: "status", "aria-live": "polite", children: [_jsx(CheckCircle, { size: 24, className: "text-green-400" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-green-300", children: "Message sent successfully!" }), _jsx("p", { className: "text-sm text-green-200", children: "I'll get back to you as soon as possible." })] })] })), submitError && (_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, className: "mb-8 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3", role: "alert", "aria-live": "assertive", children: [_jsx(AlertCircle, { size: 24, className: "text-red-400" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-red-300", children: "Error sending message" }), _jsx("p", { className: "text-sm text-red-200", children: submitError })] })] })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs(motion.div, { variants: itemVariants, children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-300 mb-2", children: "Full Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, className: `w-full px-4 py-3 bg-primary-950/50 border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 ${errors.name ? 'border-red-500' : 'border-primary-700/50'}`, placeholder: "Your name", "aria-invalid": !!errors.name, "aria-describedby": errors.name ? 'name-error' : undefined }), errors.name && (_jsx("p", { id: "name-error", className: "text-red-400 text-sm mt-1", role: "alert", children: errors.name }))] }), _jsxs(motion.div, { variants: itemVariants, children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-300 mb-2", children: "Email Address" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, className: `w-full px-4 py-3 bg-primary-950/50 border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 ${errors.email ? 'border-red-500' : 'border-primary-700/50'}`, placeholder: "your.email@example.com", "aria-invalid": !!errors.email, "aria-describedby": errors.email ? 'email-error' : undefined }), errors.email && (_jsx("p", { id: "email-error", className: "text-red-400 text-sm mt-1", role: "alert", children: errors.email }))] }), _jsxs(motion.div, { variants: itemVariants, children: [_jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-300 mb-2", children: "Subject" }), _jsx("input", { type: "text", id: "subject", name: "subject", value: formData.subject, onChange: handleChange, className: `w-full px-4 py-3 bg-primary-950/50 border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 ${errors.subject ? 'border-red-500' : 'border-primary-700/50'}`, placeholder: "What is this about?", "aria-invalid": !!errors.subject, "aria-describedby": errors.subject ? 'subject-error' : undefined }), errors.subject && (_jsx("p", { id: "subject-error", className: "text-red-400 text-sm mt-1", role: "alert", children: errors.subject }))] }), _jsxs(motion.div, { variants: itemVariants, children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-300 mb-2", children: "Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, rows: 6, className: `w-full px-4 py-3 bg-primary-950/50 border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 resize-none ${errors.message ? 'border-red-500' : 'border-primary-700/50'}`, placeholder: "Tell me about your project or inquiry...", "aria-invalid": !!errors.message, "aria-describedby": errors.message ? 'message-error' : undefined }), errors.message && (_jsx("p", { id: "message-error", className: "text-red-400 text-sm mt-1", role: "alert", children: errors.message }))] }), _jsx(motion.button, { variants: itemVariants, type: "submit", disabled: isLoading, className: "w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-primary-400 disabled:from-gray-600 disabled:to-gray-500 transition-all shadow-lg hover:shadow-primary-500/50 disabled:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400", whileHover: { scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }, whileTap: { scale: 0.98 }, children: isLoading ? (_jsxs(_Fragment, { children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: 'linear' }, className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { size: 20 }), "Send Message"] })) })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, viewport: { once: true }, className: "grid md:grid-cols-3 gap-6 mt-12", children: [
                            {
                                title: 'Email',
                                value: 'hello@example.com',
                                icon: '✉️',
                            },
                            {
                                title: 'Phone',
                                value: '+1 (555) 123-4567',
                                icon: '📞',
                            },
                            {
                                title: 'Location',
                                value: 'San Francisco, CA',
                                icon: '📍',
                            },
                        ].map((info) => (_jsxs(motion.div, { className: "p-6 bg-primary-900/20 border border-primary-700/30 rounded-lg text-center hover:bg-primary-900/40 hover:border-primary-600/50 transition-all", whileHover: { y: -4 }, children: [_jsx("div", { className: "text-3xl mb-3", children: info.icon }), _jsx("p", { className: "text-gray-400 text-sm mb-2", children: info.title }), _jsx("p", { className: "text-primary-300 font-semibold", children: info.value })] }, info.title))) })] })] }));
};
export default Contact;
