# Quick Reference Guide

A quick reference for common tasks and configurations.

## 🚀 Quick Start

```bash
# Setup
npm install

# Development
npm run dev                  # http://localhost:5173

# Build
npm run build

# Deploy
vercel                      # or netlify deploy --prod --dir=dist
```

## 📋 Customization Quick Links

| What to Change | Where | What to Edit |
|---|---|---|
| **Your Name** | `src/components/Hero.tsx` | Line ~30 |
| **Your Title** | `src/components/Hero.tsx` | Line ~35 |
| **Your Bio** | `src/components/About.tsx` | Line ~65 |
| **Add Project** | `src/components/Projects.tsx` | projects array |
| **Update Skills** | `src/components/Skills.tsx` | skillCategories array |
| **Social Links** | `src/components/Hero.tsx` | Line ~145 |
| **Colors** | `tailwind.config.js` | colors.primary/secondary |
| **Fonts** | `index.html` + `tailwind.config.js` | Google Fonts link |

## 🎨 Common Color Codes

```
Primary Blues:
#0f1535  - Background (950)
#1f2a7a  - Dark elements (900)
#4c5ced  - Buttons (600)
#5b6ef7  - Highlights (500)
#7c8efa  - Text highlights (400)

Secondary Blues:
#0ea5e9  - Main accent (500)
#38bdf8  - Light accent (400)
#7dd3fc  - Very light (300)
```

## 📝 File Template

### Adding New Section Component

```typescript
import { motion } from 'framer-motion'

interface SectionProps {
  // Add props here
}

/**
 * Section Name
 * 
 * Features:
 * - Feature description
 */
const Section: React.FC<SectionProps> = () => {
  return (
    <section id="section-id" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section content */}
      </div>
    </section>
  )
}

export default Section
```

## 🎯 Tailwind Utility Cheat Sheet

```
Spacing: px-4 py-6 m-2 gap-4
Text: text-lg font-bold text-primary-400
Color: bg-primary-900 border-primary-700
Hover: hover:bg-primary-800 hover:text-primary-300
Focus: focus-visible:outline-2 focus-visible:outline-primary-400
Responsive: md:px-8 lg:px-12 sm:text-lg
Animation: animate-fade-in animate-float
Grid: grid md:grid-cols-2 lg:grid-cols-3
```

## 🔗 Navigation IDs

```
#home      - Hero section
#about     - About section
#skills    - Skills section
#projects  - Projects section
#contact   - Contact section
```

## 🎬 Animation Classes

```
Fade: animate-fade-in
Slide Up: animate-slide-up
Float: animate-float
Pulse: animate-pulse-slow
Glow: animate-glow
```

## 📱 Responsive Classes

```
Mobile:  Default (no prefix)
Tablet:  md: (640px+)
Desktop: lg: (1024px+)

Examples:
px-4 md:px-8 lg:px-12
text-sm md:text-base lg:text-lg
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

## 🔴 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Styles not updating | Clear cache + rebuild: `npm run build` |
| Build errors | `rm -r node_modules && npm install` |
| Images not loading | Use full HTTPS URLs |
| Links not working | Check section IDs match href |
| Animations stuttering | Check GPU acceleration, reduce blur effects |
| Mobile menu overlaps | Adjust z-index or mobile padding |

## 📊 Component Sizes

| Component | Lines | Key Features |
|-----------|-------|--------------|
| Navbar | 220 | Sticky, mobile menu, theme toggle |
| Hero | 200+ | Animations, CTAs, social links |
| About | 180+ | Bio, features, stats |
| Skills | 180+ | Categories, progress bars |
| Projects | 200+ | Grid, cards, links |
| Contact | 300+ | Form, validation, success message |
| Footer | 100+ | Quick links, social media |

## 🎛️ Configuration Quick Edits

### Change Primary Color

In `tailwind.config.js`:
```javascript
primary: {
  950: '#your-color-here',
  600: '#button-color',
  // etc.
}
```

### Add New Skill

In `src/components/Skills.tsx`:
```typescript
{ name: 'Your Skill', level: 85 },
```

### Update Contact Info

In `src/components/Contact.tsx` (line ~290):
```typescript
{
  title: 'Email',
  value: 'your.email@example.com',
  icon: '✉️',
},
```

## 🧪 Testing

```bash
# Check for errors
npm run build          # Should complete without errors

# Browser testing
# 1. Desktop (Chrome, Firefox, Safari)
# 2. Mobile (iPhone, Android)
# 3. Tablet (iPad)

# Accessibility testing
# 1. Tab navigation works
# 2. Contrast meets WCAG 4.5:1
# 3. Focus indicators visible
# 4. Form errors accessible
```

## 📤 Deployment URLs

| Platform | Command | URL Pattern |
|----------|---------|-------------|
| Vercel | `vercel` | `name.vercel.app` |
| Netlify | `netlify deploy --prod --dir=dist` | `name.netlify.app` |
| GitHub Pages | `npm run deploy` | `username.github.io/repo` |

## 🔐 Environment Variables

Create `.env.production.local`:

```
VITE_API_URL=https://api.example.com
VITE_FORM_ENDPOINT=https://formspree.io/...
VITE_GA_ID=G-XXXXXXXXXX
```

Use in code:
```typescript
const API_URL = import.meta.env.VITE_API_URL
```

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `CUSTOMIZATION.md` | How to personalize |
| `DEPLOYMENT.md` | How to deploy |
| `ARCHITECTURE.md` | Project structure |
| `QUICK_REFERENCE.md` | This file |

## ⌨️ Keyboard Shortcuts (Development)

```
npm run dev      - Start dev server
Ctrl+C           - Stop server
Ctrl+S           - Save file (auto-rebuild)
F12              - Open browser DevTools
Ctrl+Shift+K     - Open browser console
```

## 🎓 Learning Paths

### Beginner Customization
1. Update personal info (Hero, About)
2. Change colors (tailwind.config.js)
3. Add projects (Projects array)
4. Update social links

### Intermediate Customization
1. Modify animations (Framer Motion)
2. Add new sections
3. Customize forms
4. Implement contact form

### Advanced Customization
1. Add backend API integration
2. Implement dark/light mode
3. Add multi-language support
4. Performance optimization

## 💡 Pro Tips

1. **Live Updates**: Changes auto-reload in dev mode
2. **Type Safety**: Let TypeScript catch errors
3. **Accessibility**: Always include focus styles
4. **Mobile First**: Test mobile design first
5. **Performance**: Use Lighthouse regularly
6. **Git Workflow**: Commit frequently
7. **Documentation**: Update docs when changing code

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Learn](https://web.dev/learn/)

## 📞 Getting Help

1. Check component comments in code
2. Review documentation files
3. Search Tailwind/React docs
4. Check browser console for errors
5. Use TypeScript for hints

---

**Last Updated**: January 2026  
**Version**: 1.0.0
