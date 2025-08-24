# 🚀 Deployment Guide

This guide covers deploying your portfolio to different platforms.

## 📋 Prerequisites

1. **GitHub Repository**: Push your code to GitHub
2. **Environment Variables**: Set up your `.env.local` file
3. **Build Test**: Ensure `npm run build` works locally

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Pros**: 
- Zero configuration
- Automatic deployments
- Built-in analytics
- Edge functions support

**Steps**:
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   ```
   RESEND_API_KEY=your_api_key
   RESEND_FROM_EMAIL=your_email@domain.com
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```
6. Click "Deploy"

**Custom Domain**:
- Add custom domain in Vercel dashboard
- Update `NEXT_PUBLIC_SITE_URL` in environment variables

### Option 2: Netlify

**Pros**:
- Free tier available
- Form handling
- Easy custom domains

**Steps**:
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in site settings
7. Deploy

### Option 3: GitHub Pages

**Pros**:
- Free hosting
- Direct integration with GitHub

**Steps**:
1. Update `next.config.mjs`:
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true },
     basePath: '/your-repo-name',
     assetPrefix: '/your-repo-name/',
   };
   ```

2. Update `package.json` scripts:
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "npm run export && touch out/.nojekyll"
     }
   }
   ```

3. Create GitHub Actions workflow (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

4. Enable GitHub Pages in repository settings
5. Set source to "GitHub Actions"

## 🔧 Environment Variables

Create `.env.local` for local development:

```env
# Email Service (Resend)
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=your_verified_email@domain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WS_URL=wss://your-websocket-server.com

# Analytics (Optional)
UMAMI_DOMAIN=https://your-analytics.com/script.js
UMAMI_SITE_ID=your_site_id
```

## 📊 Performance Optimization

### Before Deployment:
1. **Run Lighthouse Audit**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit for Performance, Accessibility, SEO, Best Practices

2. **Optimize Images**:
   - Use WebP format
   - Compress images
   - Use Next.js Image component

3. **Bundle Analysis**:
   ```bash
   npm run analyze
   ```

### Post-Deployment:
1. **Monitor Performance**:
   - Use Vercel Analytics
   - Set up Google Analytics
   - Monitor Core Web Vitals

2. **SEO Check**:
   - Test meta tags
   - Verify Open Graph images
   - Check structured data

## 🔍 Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check environment variables
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Images Not Loading**:
   - Verify image paths
   - Check if using `next/image` correctly
   - Ensure images are in `public` folder

3. **Email Not Working**:
   - Verify Resend API key
   - Check email domain verification
   - Test with Resend dashboard

4. **3D Elements Not Loading**:
   - Check Spline embed URLs
   - Verify internet connection
   - Check browser console for errors

## 📈 Analytics Setup

### Google Analytics:
1. Create GA4 property
2. Add tracking code to `layout.tsx`
3. Set up goals and events

### Vercel Analytics:
1. Enable in Vercel dashboard
2. No code changes needed
3. View insights in dashboard

## 🔐 Security

1. **Environment Variables**: Never commit `.env.local`
2. **API Keys**: Use environment variables
3. **HTTPS**: Enable SSL certificates
4. **CORS**: Configure if needed

## 📱 Mobile Optimization

1. **Test Responsiveness**: Use Chrome DevTools
2. **Touch Interactions**: Test on real devices
3. **Performance**: Optimize for mobile networks

---

**Need Help?** Check the [Next.js documentation](https://nextjs.org/docs) or create an issue in the repository.
