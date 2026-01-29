# Deployment Guide

This guide covers deploying your portfolio to various hosting platforms.

## 🚀 Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test on multiple browsers and devices
- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Update social links
- [ ] Test form submission
- [ ] Run Lighthouse audit
- [ ] Set up custom domain (optional)

## 📋 Build Optimization

Before deploying, optimize your build:

```bash
npm run build
```

The optimized files are in the `dist/` directory.

### Check Build Size

```bash
npm run build -- --analyze
```

## 🌐 Deployment Platforms

### 1. Vercel (Recommended for Vite)

**Easiest deployment option**

#### Option A: Using Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and your site will be live!

#### Option B: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Vercel Configuration** (`vercel.json`):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "@api_url"
  }
}
```

---

### 2. Netlify

#### Option A: Using Netlify CLI

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Option B: GitHub Integration

1. Connect your GitHub account to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

**Netlify Configuration** (`netlify.toml`):

```toml
[build]
command = "npm run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

---

### 3. GitHub Pages

#### Setup Steps

1. Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/repository-name/',  // Your repo name
  plugins: [react()],
})
```

2. Update `package.json`:

```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^4.0.0"
  }
}
```

3. Deploy:

```bash
npm run deploy
```

4. Enable GitHub Pages in repository settings

---

### 4. AWS S3 + CloudFront

#### Setup

```bash
# Install AWS CLI
npm i -g @aws-amplify/cli

# Configure AWS
aws configure

# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### 5. Firebase Hosting

```bash
npm i -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

### 6. Traditional Hosting (cPanel, etc.)

1. Build project: `npm run build`
2. Connect via FTP/SFTP
3. Upload `dist/` folder contents to `public_html`
4. Configure `.htaccess` for SPA routing

**.htaccess Configuration**:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Environment Variables

### For Form Submission

Create `.env.production.local`:

```
VITE_API_URL=https://your-api.example.com
VITE_EMAIL_SERVICE=your-email-service
```

Update `Contact.tsx`:

```typescript
const API_URL = import.meta.env.VITE_API_URL
```

---

## 📊 Analytics Setup

### Google Analytics

Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Plausible Analytics

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔐 Security Checklist

- [ ] Update security headers
- [ ] Enable HTTPS (SSL certificate)
- [ ] Set up CORS properly
- [ ] Validate form inputs on backend
- [ ] Use environment variables for secrets
- [ ] Remove sensitive data from code
- [ ] Enable Content Security Policy (CSP)

### Security Headers (Netlify)

Add to `netlify.toml`:

```toml
[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "SAMEORIGIN"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "no-referrer-when-downgrade"
```

---

## 🎯 Performance Optimization

### Pre-Deployment

1. **Minify CSS/JS**: Vite does this automatically
2. **Compress Images**: Use tools like TinyPNG
3. **Code Splitting**: Vite handles this
4. **Lazy Loading**: Implement for images

### Lighthouse Audit

Run on deployed site: Chrome DevTools → Lighthouse

Target Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+

### Improve Performance

```typescript
// React.lazy() for code splitting
const Projects = React.lazy(() => import('./components/Projects'))

// Image optimization
<img src="image.jpg" loading="lazy" alt="Description" />
```

---

## 🎯 Custom Domain Setup

### Vercel
1. Go to Project Settings
2. Add Domain
3. Follow DNS configuration

### Netlify
1. Domain Settings → Custom Domain
2. Configure DNS

### GoDaddy/Namecheap DNS Settings

```
Record Type: A
Name: @
Value: Your hosting IP

Record Type: CNAME
Name: www
Value: Your domain with .
```

---

## 🚨 Troubleshooting Deployment

### Blank Page

- Check browser console for errors
- Verify base URL in vite.config.ts
- Clear browser cache
- Check dist/ folder exists

### 404 on Routes

- Configure SPA routing on server
- Update .htaccess or netlify.toml
- Ensure dist/index.html exists

### Styles Not Loading

- Check CSS file paths
- Verify base URL configuration
- Clear CSS cache
- Check for CORS issues

### Images Not Loading

- Use full URLs for images
- Check image URLs are accessible
- Verify CORS configuration
- Use CDN for better performance

---

## 📞 Post-Deployment

1. **Test thoroughly** on live URL
2. **Set up monitoring** for errors
3. **Enable analytics** to track visitors
4. **Configure backups** if using database
5. **Set up CI/CD** for auto-deployment
6. **Monitor performance** with Lighthouse
7. **Collect user feedback**

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📚 Useful Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Web Vitals Guide](https://web.dev/vitals)
- [SSL Certificate Setup](https://letsencrypt.org)

---

## ✅ Success Checklist

After deployment:

- [ ] Site loads on custom domain
- [ ] All pages and links work
- [ ] Forms submit successfully
- [ ] Images display correctly
- [ ] Mobile responsive
- [ ] Animations work smoothly
- [ ] Analytics tracking
- [ ] SSL certificate working
- [ ] Performance score > 90
- [ ] Accessibility score > 95

---

**Congratulations! Your portfolio is now live!** 🎉
