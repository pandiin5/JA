# Project Structure & Architecture

## 📁 Directory Organization

```
portfolio/
├── .github/
│   └── workflows/                 # CI/CD workflows (optional)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation bar with theme toggle
│   │   ├── Hero.tsx              # Hero/welcome section
│   │   ├── About.tsx             # About me section
│   │   ├── Skills.tsx            # Skills showcase
│   │   ├── Projects.tsx          # Portfolio projects
│   │   ├── Contact.tsx           # Contact form
│   │   ├── Footer.tsx            # Footer section
│   │   └── AnimatedBackground.tsx # Animated background
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                        # Static assets (optional)
├── dist/                          # Production build output
├── index.html                     # HTML template
├── package.json                   # Project dependencies
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── .gitignore                     # Git ignore rules
├── README.md                      # Project documentation
├── CUSTOMIZATION.md               # Customization guide
└── DEPLOYMENT.md                  # Deployment guide
```

## 🏗️ Component Architecture

### Component Hierarchy

```
App (Root)
├── Navbar
│   ├── Navigation Links
│   ├── Theme Toggle
│   └── Mobile Menu
├── AnimatedBackground
├── Hero
│   ├── CTA Buttons
│   └── Social Links
├── About
│   ├── Bio Section
│   ├── Feature Cards
│   └── Stats
├── Skills
│   ├── Skill Categories
│   └── Progress Bars
├── Projects
│   ├── Project Cards
│   ├── Project Images
│   └── Project Links
├── Contact
│   ├── Contact Form
│   ├── Form Validation
│   └── Contact Info
└── Footer
    ├── Quick Links
    └── Social Links
```

## 📄 File Descriptions

### Root Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build tool configuration |
| `tsconfig.json` | TypeScript compiler options |
| `tsconfig.node.json` | TypeScript config for Node.js files |
| `tailwind.config.js` | Tailwind CSS theme and plugins |
| `postcss.config.js` | CSS post-processing configuration |
| `package.json` | Project metadata and dependencies |
| `index.html` | HTML entry point |
| `.gitignore` | Git ignore patterns |

### Source Files

#### Components

**`src/components/Navbar.tsx`**
- Sticky navigation bar
- Mobile hamburger menu
- Theme toggle button
- Smooth scroll navigation
- 220 lines of code

**`src/components/Hero.tsx`**
- Eye-catching hero section
- Animated text and buttons
- Call-to-action elements
- Social media links
- Scroll indicator
- 200+ lines of code

**`src/components/About.tsx`**
- About me section
- Feature highlights
- Statistics cards
- Responsive grid layout
- 180+ lines of code

**`src/components/Skills.tsx`**
- Skill categories (Frontend, Backend, Tools)
- Animated progress bars
- Skill level indicators
- Technology tags
- 180+ lines of code

**`src/components/Projects.tsx`**
- Project showcase grid
- Project cards with hover effects
- Technology tags
- Links to live projects and GitHub
- 200+ lines of code

**`src/components/Contact.tsx`**
- Contact form with validation
- Form error handling
- Success message
- Contact information
- Accessible form design
- 300+ lines of code

**`src/components/Footer.tsx`**
- Footer navigation
- Social media links
- Copyright information
- Quick navigation
- 100+ lines of code

**`src/components/AnimatedBackground.tsx`**
- Animated background elements
- Floating gradient orbs
- Visual effects
- 30+ lines of code

#### Global Files

**`src/App.tsx`**
- Main app component
- Component composition
- Theme state management
- 45 lines of code

**`src/main.tsx`**
- React app initialization
- DOM rendering
- Style imports
- 10 lines of code

**`src/index.css`**
- Global styles
- Tailwind directives
- Custom animations
- Scrollbar styling
- Focus states
- 80+ lines of code

## 🎨 Design System

### Color Palette

```typescript
// Primary Blues (Dark Theme)
primary-950:  #0f1535  // Main background
primary-900:  #1f2a7a  // Darker elements
primary-800:  #2d3eb5  // Cards
primary-700:  #3d4ddd  // Borders
primary-600:  #4c5ced  // Buttons (primary)
primary-500:  #5b6ef7  // Interactive elements
primary-400:  #7c8efa  // Text highlights
primary-300:  #a4b8fc  // Hover states
primary-200:  #c7d7fd
primary-100:  #e0ebfe
primary-50:   #f0f5ff

// Secondary Sky Blues (Accents)
secondary-900: #0c4a6e // Darkest
secondary-800: #075985
secondary-700: #0369a1
secondary-600: #0284c7
secondary-500: #0ea5e9 // Main accent
secondary-400: #38bdf8
secondary-300: #7dd3fc
// ...lighter shades
```

### Typography

```
Font Family:
- Body: Inter (system fallback)
- Display: Poppins (system fallback)

Font Sizes:
- Hero Title: 5xl (3rem) - 7xl (4.5rem)
- Section Heading: 4xl (2.25rem) - 5xl (3rem)
- Subheading: 2xl (1.5rem)
- Body: lg (1.125rem)
- Small: sm (0.875rem)

Font Weights:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extra Bold: 800
```

### Spacing Scale

```
xs:  0.5rem   (8px)
sm:  1rem     (16px)
md:  1.5rem   (24px)
lg:  2rem     (32px)
xl:  2.5rem   (40px)
2xl: 3rem     (48px)
3xl: 3.75rem  (60px)
```

## 🎬 Animation System

### Custom Animations

```javascript
// Tailwind animation definitions
'fade-in':      'fadeIn 0.6s ease-in-out'
'slide-up':     'slideUp 0.6s ease-out'
'slide-down':   'slideDown 0.6s ease-out'
'pulse-slow':   'pulse 3s ease-in-out infinite'
'float':        'float 3s ease-in-out infinite'
'glow':         'glow 2s ease-in-out infinite'
```

### Framer Motion

- **Variant Animations**: Staggered children animations
- **Gesture Animations**: Hover and tap effects
- **Scroll Animations**: Trigger on viewport entry
- **Page Transitions**: Smooth element appearance

## 🔄 Data Flow

### Component Data Flow

```
App (State)
  ↓
  ├─ isDarkMode (boolean)
  ├─ setIsDarkMode (function)
  └─ Passes to Navbar
        ↓
        ├─ Navbar manages:
        │   ├─ isOpen (mobile menu)
        │   ├─ isScrolled (navbar position)
        │   └─ navLinks (array of navigation items)
        └─ Other sections are stateless
```

### Contact Form Data Flow

```
User Input
  ↓
handleChange (updates state)
  ↓
Form State: { name, email, subject, message }
  ↓
handleSubmit
  ↓
validateForm
  ↓
isValid → Send (API call simulation)
  ↓
isSubmitted → Show success message
```

## 🛠️ Technologies Used

### Core Framework
- **React 18.2**: UI library
- **TypeScript**: Type safety
- **JSX**: Component templates

### Build Tools
- **Vite 5.0**: Fast build tool
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

### Styling
- **Tailwind CSS 3.3**: Utility-first CSS
- **Custom Animations**: CSS keyframes

### Animation
- **Framer Motion 10.x**: Advanced animations
- **CSS Animations**: Built-in animations

### Icons & UI
- **Lucide React**: SVG icons
- **React Icons**: Alternative icons

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.16",
  "react-icons": "^5.0.1",
  "lucide-react": "^0.294.0"
}
```

### Development Dependencies
```json
{
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.2.0",
  "typescript": "^5.2.2",
  "vite": "^5.0.8",
  "tailwindcss": "^3.3.6",
  "postcss": "^8.4.31",
  "autoprefixer": "^10.4.16"
}
```

## 🎯 Code Standards

### Naming Conventions

- **Components**: PascalCase (Hero.tsx)
- **Functions**: camelCase (handleSubmit)
- **Variables**: camelCase (isDarkMode)
- **Constants**: UPPER_CASE (MAX_SIZE)
- **Files**: PascalCase.tsx

### TypeScript Patterns

```typescript
// Interface for props
interface ComponentProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

// Functional component with TypeScript
const Component: React.FC<ComponentProps> = ({ isDarkMode, setIsDarkMode }) => {
  // Component code
}
```

### React Patterns

- **Hooks**: useState, useEffect for state management
- **Fragment**: <> for multiple elements
- **Conditional Rendering**: Ternary operators
- **Array Mapping**: For lists and repeated elements
- **Prop Drilling**: Limited by component design

## 🔍 Code Quality

### Accessibility Features

- ARIA labels on buttons and forms
- Semantic HTML (section, nav, main)
- Focus management (focus-visible states)
- Color contrast (4.5:1 minimum)
- Keyboard navigation support

### Performance Considerations

- Lazy loading for images
- Code splitting with Vite
- CSS purging with Tailwind
- Smooth animations (GPU-accelerated)
- Minimal re-renders

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Build Pipeline

```
Source Code (src/)
  ↓
TypeScript Check (tsc -b)
  ↓
Vite Build
  ├─ HTML processing
  ├─ JSX/TSX transformation
  ├─ CSS processing (Tailwind)
  ├─ Image optimization
  └─ Code minification
  ↓
Output (dist/)
  ├─ dist/index.html
  ├─ dist/assets/index-*.css
  └─ dist/assets/index-*.js
```

## 📊 Project Statistics

- **Total Components**: 8
- **Lines of Code**: 1500+
- **CSS Classes Used**: 200+
- **Tailwind Colors**: 60+ shades
- **Custom Animations**: 6
- **Responsive Breakpoints**: 3 (mobile, tablet, desktop)
- **TypeScript Files**: 9
- **Accessibility Features**: 15+

## 🔗 External Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

This architecture provides a scalable, maintainable, and professional foundation for your portfolio.
