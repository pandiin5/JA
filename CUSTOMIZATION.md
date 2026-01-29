# Customization Guide

This guide will help you personalize the portfolio website to match your information, style, and branding.

## 🎯 Quick Start

### 1. Personal Information Updates

#### Update Your Name and Title

**File**: `src/components/Hero.tsx`

```typescript
// Change these lines:
Hi, I'm Janallan Pandiin  // → Your Name
Full-Stack Developer & Creative Designer  // → Your Title
```

#### Update Bio

**File**: `src/components/About.tsx`

Replace the placeholder bio text with your own:
```typescript
// Line ~65-70
"I'm a passionate full-stack developer dedicated to..."
```

#### Update Social Links

**File**: `src/components/Hero.tsx` (lines ~140-155)
**File**: `src/components/Footer.tsx` (lines ~60-65)

```typescript
{ icon: Github, label: 'GitHub', href: 'https://github.com/yourusername' },
{ icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
{ icon: Mail, label: 'Email', href: 'mailto:your.email@example.com' },
```

### 2. Customize Projects

**File**: `src/components/Projects.tsx`

Update the `projects` array with your projects:

```typescript
{
  id: 1,
  title: 'Your Project Title',
  description: 'Detailed description of what your project does...',
  image: 'url-to-your-project-image',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  liveLink: 'https://your-project.com',
  githubLink: 'https://github.com/yourusername/project',
},
```

### 3. Update Skills

**File**: `src/components/Skills.tsx`

Modify skill categories and levels:

```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      // Add your skills here
    ],
  },
  // Add more categories
]
```

### 4. Update Contact Information

**File**: `src/components/Contact.tsx`

Update the contact info cards (lines ~290-310):

```typescript
{
  title: 'Email',
  value: 'your.email@example.com',  // ← Update this
  icon: '✉️',
},
{
  title: 'Phone',
  value: '+1 (555) 123-4567',  // ← Update this
  icon: '📞',
},
{
  title: 'Location',
  value: 'Your City, State',  // ← Update this
  icon: '📍',
},
```

### 5. Update Statistics

**File**: `src/components/About.tsx` (lines ~95-110)

```typescript
{
  number: '50+',  // Update stats
  label: 'Projects Completed',
},
```

## 🎨 Design Customization

### Change Color Scheme

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#f0f5ff',   // Change these hex values
    100: '#e0ebfe',
    // ... adjust all primary colors
  },
  secondary: {
    50: '#f0f9ff',   // Or change secondary colors
    // ... adjust all secondary colors
  },
}
```

### Popular Color Palettes

**Purple Theme**:
```javascript
primary: { 900: '#2d1b4e', 800: '#3d2463', 700: '#4d2c7a', ... }
secondary: { 500: '#a855f7', 600: '#9333ea', ... }
```

**Green Theme**:
```javascript
primary: { 900: '#1b3c2e', 800: '#2d5a4a', ... }
secondary: { 500: '#10b981', 600: '#059669', ... }
```

**Red/Pink Theme**:
```javascript
primary: { 900: '#3f1f2e', 800: '#5c2a3e', ... }
secondary: { 500: '#f43f5e', 600: '#e11d48', ... }
```

### Change Fonts

**File**: `index.html`

```html
<!-- Replace the Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_1:wght@400;600;700&family=YOUR_FONT_2:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**File**: `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['Your Font Name', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'system-ui', 'sans-serif'],
}
```

**Font Recommendations**:
- Sans: Inter, Poppins, Roboto, Ubuntu, Raleway
- Display: Space Grotesk, Syne, Playfair Display

## 🖼️ Adding Images and Media

### Replace Project Images

1. Replace placeholder URLs in `src/components/Projects.tsx`
2. Use services like:
   - Imgur
   - Cloudinary
   - AWS S3
   - Your own hosting

### Add Profile Picture

1. Add profile picture to the About section
2. Update the `About.tsx` component with an `<img>` tag
3. Ensure image dimensions are appropriate (e.g., 400x300 for cards)

## 📝 Content Updates

### Update Meta Tags

**File**: `index.html`

```html
<meta name="description" content="Your custom portfolio description" />
<title>Your Name | Your Title</title>
```

### Update Section Headings

Find and replace section headings throughout components:
- "Skills & Expertise" in `Skills.tsx`
- "Featured Projects" in `Projects.tsx`
- "Get In Touch" in `Contact.tsx`

## 🔗 SEO Optimization

### Add Meta Tags

**File**: `index.html`

```html
<!-- Add Open Graph tags for social sharing -->
<meta property="og:title" content="Your Portfolio" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="image-url" />
<meta property="og:url" content="your-website.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Title" />
<meta name="twitter:description" content="Description" />
```

### Add Schema Markup

Add to `index.html` in a `<script>` tag:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourportfolio.com",
  "sameAs": [
    "https://twitter.com/yourusername",
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ]
}
```

## 🚀 Deployment Configuration

### Environment Variables

Create `.env.local` file:

```
VITE_API_URL=https://api.example.com
VITE_GA_ID=your-google-analytics-id
```

### Update Base URL

If deploying to a subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/portfolio/',  // Change this for subdirectory
})
```

## 📱 Mobile Customization

### Adjust Spacing

Edit Tailwind configuration for mobile-first spacing:

```javascript
extend: {
  spacing: {
    // Add custom spacing
  }
}
```

### Update Navigation Menu

Modify mobile menu items in `src/components/Navbar.tsx`

## 🎯 Advanced Customization

### Add New Sections

1. Create new component file: `src/components/YourSection.tsx`
2. Import in `App.tsx`
3. Add to main render
4. Update navigation links in `Navbar.tsx`

### Integrate Contact Form

Update `Contact.tsx` form submission to use your backend:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Add Dark/Light Mode

Uncomment theme toggle in `App.tsx` and implement theme switching.

## ✅ Testing Customization

1. **Local Testing**: Run `npm run dev` and check changes
2. **Build Testing**: Run `npm run build` to ensure no errors
3. **Mobile Testing**: Test on actual devices
4. **Accessibility**: Use Lighthouse or WebAIM tools
5. **Performance**: Check with Lighthouse audit

## 🐛 Common Issues

### Images Not Loading
- Check image URLs are accessible
- Ensure CORS is properly configured
- Use direct image links (not relative paths for external images)

### Styles Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild project (`npm run build`)
- Check Tailwind classes are spelled correctly

### Forms Not Working
- Verify API endpoints are correct
- Check CORS settings
- Test in browser DevTools console

## 📞 Getting Help

- Check component comments in code
- Review Tailwind CSS documentation
- Refer to Framer Motion guides
- Test with browser DevTools

## 🎉 Next Steps

1. Personalize all text content
2. Add your images and media
3. Update social links
4. Test on multiple devices
5. Deploy to your hosting
6. Monitor performance with Lighthouse
7. Collect feedback and iterate

---

Remember to test thoroughly after making changes to ensure everything works correctly!
