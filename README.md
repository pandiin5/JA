# Professional Portfolio Website

A modern, responsive, and accessible portfolio website built with React.js, TypeScript, and Tailwind CSS. Features smooth animations, a professional design, and WCAG-compliant accessibility standards.

## 🎯 Features

### Design & UI
- **Modern Blue Color Palette**: Navy, royal blue, and sky blue with smooth gradients
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Professional Aesthetic**: Clean, minimal design with consistent spacing and typography
- **Modern Fonts**: Inter for body text and Poppins for headers
- **Dark Mode**: Elegant dark theme with light accents

### Animations & Motion
- **Smooth Page Transitions**: CSS animations for fade-in and slide effects
- **Framer Motion**: Advanced animations for interactive elements
- **Hover Effects**: Smooth hover animations on buttons, cards, and links
- **Animated Background**: Floating gradient orbs and animated background elements
- **Loading States**: Animated loading spinners for form submissions

### Accessibility (WCAG Compliant)
- **Contrast Standards**: All buttons and text meet 4.5:1 contrast ratio minimum
- **Keyboard Navigation**: Full keyboard support with visible focus states
- **ARIA Labels**: Proper ARIA labels and descriptions for all interactive elements
- **Screen Reader Support**: Semantic HTML and proper heading hierarchy
- **Error Messages**: Accessible form validation with error alerts
- **Focus Indicators**: Clear outline and offset for keyboard navigation

### Portfolio Sections
1. **Hero Section**: Eye-catching introduction with CTA buttons
2. **About Me**: Bio with feature highlights and statistics
3. **Skills & Tech Stack**: Organized skill categories with progress visualization
4. **Projects**: Featured projects with hover effects and project links
5. **Contact Form**: Validated contact form with accessibility features
6. **Sticky Navigation**: Smooth scrolling navigation with mobile menu

## 🛠 Tech Stack

### Core Technologies
- **React 18.2**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework

### Animation & Interaction
- **Framer Motion**: Professional animations and transitions
- **Lucide React**: Beautiful SVG icon library
- **React Icons**: Additional icon options

### Development
- **PostCSS**: CSS processing with Tailwind
- **Autoprefixer**: Automatic vendor prefixes

## 📋 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Navigation with theme toggle
│   ├── Hero.tsx                # Hero section with CTAs
│   ├── About.tsx               # About section with stats
│   ├── Skills.tsx              # Skills showcase
│   ├── Projects.tsx            # Portfolio projects
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Footer section
│   └── AnimatedBackground.tsx  # Animated background
├── App.tsx                     # Main app component
├── main.tsx                    # React entry point
└── index.css                   # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## ⚙️ Configuration

### Tailwind CSS
Customize colors in `tailwind.config.js`:
- Primary colors: Blue-based palette
- Secondary colors: Sky blue accents
- Custom animations: Fade-in, slide-up, float effects

### Theme Colors
The portfolio uses a custom color palette defined in `tailwind.config.js`:
- **Primary 950**: `#0f1535` - Main background
- **Primary 600**: `#4c5ced` - Buttons
- **Secondary 500**: `#0ea5e9` - Accents

## 🎨 Customization

### Personal Information
Update the following in component files:
- **Hero.tsx**: Name, title, and introduction text
- **About.tsx**: Bio and feature highlights
- **Projects.tsx**: Project details and links
- **Contact.tsx**: Contact information
- **Footer.tsx**: Social media links

### Colors
Edit the Tailwind configuration in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Blue palette */ },
  secondary: { /* Sky blue palette */ }
}
```

### Fonts
Google Fonts are already imported in `index.html`. Fonts used:
- **Inter**: Body text
- **Poppins**: Headers

## ♿ Accessibility Features

### WCAG 2.1 Level AA Compliance
- ✅ Minimum 4.5:1 contrast ratio for all text
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus indicators on all interactive elements
- ✅ Semantic HTML structure
- ✅ ARIA labels for buttons and form inputs
- ✅ Error messages linked to form fields
- ✅ Focus management in modals and menus

### Testing Accessibility
1. **Keyboard Navigation**: Use Tab to navigate, Enter/Space to activate
2. **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
3. **Color Contrast**: Verify with WCAG contrast checkers
4. **Focus Indicators**: Check visible focus states on all elements

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Tested and optimized for:
- iPhone 12/13/14/15
- iPad Air/Pro
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## 🎯 Performance Optimizations

- **Code Splitting**: Lazy loading with Vite
- **Image Optimization**: Placeholder images ready for replacement
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Smooth Scrolling**: Native browser smooth scroll
- **Efficient Animations**: GPU-accelerated with Framer Motion

## 🔒 SEO & Meta Tags

- **Semantic HTML**: Proper heading hierarchy and structure
- **Meta Descriptions**: Included in `index.html`
- **Open Graph Tags**: Ready for social sharing
- **Schema Markup**: Structured data ready to implement

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "react-icons": "^5.0.1",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "tailwindcss": "^3.3.6",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16"
  }
}
```

## 🚨 Important Notes

### Customization Required
Before deploying, update:
1. **Portfolio Images**: Replace placeholder images in `Projects.tsx`
2. **Social Links**: Update GitHub, LinkedIn, and email links
3. **Contact Information**: Replace example email and phone number
4. **Personal Data**: Update name, bio, and experience in components

### API Integration
The contact form is currently set up with local validation. To send emails:
1. Connect to a backend service (Firebase, Nodemailer, SendGrid, etc.)
2. Update the form submission logic in `Contact.tsx`
3. Add environment variables for API endpoints

### Deployment
Ready to deploy to:
- Vercel (recommended for Vite)
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref)

## 📝 License

This project is free to use and modify for personal and commercial purposes.

## 🤝 Support

For questions or issues:
1. Check the component documentation in code comments
2. Review Tailwind CSS and Framer Motion documentation
3. Verify accessibility standards with WebAIM tools

## ✨ Future Enhancements

Potential additions:
- Blog section with markdown support
- Project filtering and search
- Dark/light theme toggle (CSS variables)
- Multi-language support (i18n)
- Analytics integration
- Newsletter signup
- Case studies with detailed project pages
- Timeline for experience/education

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
