<!-- .github/copilot-instructions.md -->

# Portfolio Website Development Guidelines

## Project Overview

This is a professional, modern portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion. The project follows best practices for accessibility (WCAG 2.1 AA), performance, and responsive design.

## Key Technologies

- **React 18.2**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Vite 5.0**: Ultra-fast build tool
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **Framer Motion 10.x**: Professional animations
- **Lucide React**: Beautiful SVG icons

## Project Structure

```
src/
├── components/          # All UI components
│   ├── Navbar.tsx       # Navigation (220 lines)
│   ├── Hero.tsx         # Hero section (200+ lines)
│   ├── About.tsx        # About section (180+ lines)
│   ├── Skills.tsx       # Skills showcase (180+ lines)
│   ├── Projects.tsx     # Portfolio projects (200+ lines)
│   ├── Contact.tsx      # Contact form (300+ lines)
│   ├── Footer.tsx       # Footer (100+ lines)
│   └── AnimatedBackground.tsx  # Background effects (30+ lines)
├── App.tsx              # Main component
├── main.tsx             # Entry point
└── index.css            # Global styles (80+ lines)
```

## Development Workflow

### Getting Started

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Files to Customize

| Section | File | Key Content |
|---------|------|-------------|
| Personal Info | Hero.tsx | Name, title, bio |
| Bio & Stats | About.tsx | About text, statistics |
| Skills | Skills.tsx | Skill categories and levels |
| Projects | Projects.tsx | Project array with details |
| Contact Info | Contact.tsx | Email, phone, address |
| Social Links | Navbar.tsx, Footer.tsx | GitHub, LinkedIn URLs |
| Colors | tailwind.config.js | Color palette |

## Code Style Guidelines

### Component Pattern

```typescript
interface ComponentProps {
  prop1: string
  prop2?: boolean
}

/**
 * Component description
 * 
 * Features:
 * - Feature list
 * - Feature list
 */
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    <section className="space-y-4">
      {/* Component JSX */}
    </section>
  )
}

export default Component
```

### Naming Conventions

- **Components**: PascalCase (Hero.tsx)
- **Props/Variables**: camelCase (isDarkMode)
- **Constants**: UPPER_CASE
- **CSS Classes**: Tailwind utility classes
- **Files**: PascalCase for components, lowercase for utilities

## Accessibility Standards

All components follow WCAG 2.1 Level AA standards:

- ✅ **Contrast Ratio**: Minimum 4.5:1 for text
- ✅ **Keyboard Navigation**: Full Tab and Enter support
- ✅ **Focus States**: Visible outlines on all interactive elements
- ✅ **ARIA Labels**: Proper labels and descriptions
- ✅ **Semantic HTML**: Proper heading hierarchy
- ✅ **Screen Readers**: Compatible with NVDA, VoiceOver

### Accessibility Checklist

When creating new components:
- [ ] Add ARIA labels to buttons
- [ ] Ensure 4.5:1 color contrast
- [ ] Include focus-visible states
- [ ] Use semantic HTML tags
- [ ] Add role attributes where needed
- [ ] Test with keyboard navigation

## Animation Standards

### Framer Motion Usage

```typescript
// Container for staggered children
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Children with itemVariants */}
</motion.div>
```

### Tailwind Animations

Use custom animations from `tailwind.config.js`:
- `animate-fade-in`: Fade in effect
- `animate-slide-up`: Slide up animation
- `animate-float`: Floating effect
- `animate-pulse-slow`: Slow pulse
- `animate-glow`: Glow effect

## Responsive Design

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach

```typescript
// Always use mobile-first in Tailwind
<div className="px-4 md:px-8 lg:px-12">
  {/* Mobile padding: 1rem, Tablet: 2rem, Desktop: 3rem */}
</div>
```

## Common Tasks

### Adding a New Project

1. Open `src/components/Projects.tsx`
2. Add to projects array:

```typescript
{
  id: 7,
  title: 'Project Name',
  description: 'Project description...',
  image: 'https://image-url.com',
  technologies: ['React', 'Node.js'],
  liveLink: 'https://project.com',
  githubLink: 'https://github.com/username/repo',
}
```

### Updating Skills

1. Open `src/components/Skills.tsx`
2. Modify `skillCategories` array
3. Update skill names and levels (0-100)

### Changing Colors

1. Open `tailwind.config.js`
2. Update color hex values
3. Run `npm run dev` to see changes

### Customizing Fonts

1. Update Google Fonts link in `index.html`
2. Update font names in `tailwind.config.js`
3. Apply via utility classes

## Performance Guidelines

### Best Practices

- Use Tailwind CSS instead of custom CSS
- Implement lazy loading for images
- Minimize external dependencies
- Use production builds for deployment
- Monitor Lighthouse scores

### Lighthouse Targets

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+

## Testing Checklist

Before committing code:

- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] Test on mobile devices
- [ ] Keyboard navigation works
- [ ] Links are functional
- [ ] Form validation works
- [ ] Lighthouse audit passes

## Deployment Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Test all forms and links
- [ ] Update social media links
- [ ] Run production build
- [ ] Test on live URL
- [ ] Monitor analytics

### Quick Deploy Commands

```bash
# Vercel
vercel

# Netlify
netlify deploy --prod --dir=dist

# GitHub Pages
npm run deploy
```

## Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -r node_modules
npm install

# Rebuild
npm run build
```

### Styles Not Updating

1. Clear browser cache (Ctrl+Shift+Delete)
2. Rebuild: `npm run build`
3. Check Tailwind class names are correct

### Component Not Rendering

1. Check import statement is correct
2. Verify component is exported
3. Check for syntax errors
4. Look at browser console for errors

## Important Files

- **README.md**: Project overview and setup
- **CUSTOMIZATION.md**: How to personalize the portfolio
- **DEPLOYMENT.md**: Deployment guides for various platforms
- **ARCHITECTURE.md**: Detailed project structure and design system

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview build locally

# Maintenance
npm audit            # Check for vulnerabilities
npm update           # Update dependencies
npm list             # List installed packages
```

## Code Quality Standards

### TypeScript

- Strict mode enabled
- Type all component props
- No `any` types without justification
- Use interfaces for object shapes

### React

- Functional components with hooks
- Proper dependency arrays in useEffect
- Memoization where needed
- Avoid prop drilling (consider context if needed)

### CSS

- Use Tailwind utilities only
- Follow utility-first approach
- Use custom animations from config
- Avoid inline styles

## Collaboration Guidelines

When working with others:

1. Follow the established code style
2. Write clear commit messages
3. Test before pushing
4. Update documentation if adding features
5. Request code review before merging

## Security Guidelines

- Never commit API keys or secrets
- Use environment variables (.env.local)
- Validate form inputs on frontend AND backend
- Sanitize user input
- Keep dependencies updated
- Use HTTPS for all external requests

## Documentation Standards

Each component should have:

```typescript
/**
 * Component Name
 * 
 * Features:
 * - Feature one
 * - Feature two
 */
```

## Future Enhancements

Potential additions to consider:

- [ ] Blog section
- [ ] Project filtering/search
- [ ] Multi-language support
- [ ] Case study pages
- [ ] Timeline for experience
- [ ] Newsletter signup
- [ ] Dark/light mode toggle
- [ ] Analytics integration

## Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Support & Questions

For issues or questions:

1. Check the documentation files
2. Review component comments
3. Check TypeScript errors
4. Use browser DevTools
5. Refer to library documentation

---

**Happy coding!** Build amazing portfolios! 🚀
