# 🎨 Portfolio Customization Guide

Welcome! This guide will help you customize this 3D Interactive Portfolio for yourself. Follow these steps to make it your own.

## 📋 **Step 1: Basic Information Setup**

### 1.1 Update Personal Information
Edit `src/data/config.ts` and replace the following placeholders:

```typescript
// Replace these with your information:
title: "YOUR_NAME | YOUR_TITLE"  // e.g., "John Doe | Full Stack Developer"
author: "YOUR_FULL_NAME"         // e.g., "John Doe"
email: "your.email@example.com"  // Your email address
site: "https://yourdomain.com"   // Your website URL

// Update the description
description: {
  long: "Explore the portfolio of YOUR_NAME, a YOUR_DEGREE with YOUR_EXPERIENCE experience...",
  short: "Discover the portfolio of YOUR_NAME, a YOUR_TITLE solving real life problems in YOUR_DOMAIN.",
}

// Update social media links
social: {
  twitter: "https://x.com/your_twitter_handle/",
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile/",
  instagram: "https://www.instagram.com/your_instagram_handle/",
  facebook: "https://www.facebook.com/your_facebook_profile",
  github: "https://github.com/your_github_username/",
}
```

### 1.2 Update Hero Section
Edit `src/components/sections/hero.tsx`:
- Replace `YOUR_ROLE_HERE` with your professional title (e.g., "Full Stack Developer", "DevOps Engineer")
- Replace `YOUR_RESUME_LINK_HERE` with your resume URL

## 🎯 **Step 2: Projects Customization**

### 2.1 Replace Project Screenshots
1. Add your project screenshots to `public/assets/projects-screenshots/`
2. Create folders for each project (e.g., `myproject1/`, `myproject2/`)

### 2.2 Update Projects Data
Edit `src/data/projects.tsx` and replace the existing projects with your own:

```typescript
const projects: Project[] = [
  {
    id: "your-project-1",
    category: "Web Development",
    title: "Your Project Name",
    src: "/assets/projects-screenshots/yourproject1/landing.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://your-project-live-url.com",
    github: "https://github.com/yourusername/your-project",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Your project description here...
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/yourproject1/1.png`,
            `${BASE_PATH}/yourproject1/2.png`,
          ]} />
        </div>
      );
    },
  },
  // Add more projects...
];
```

## 🛠️ **Step 3: Skills Customization**

### 3.1 Update Skills
Edit `src/data/constants.ts` to customize your skills:

```typescript
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Your custom description here! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  // Add/remove skills as needed...
};
```

## 🎨 **Step 4: Visual Customization**

### 4.1 Update Profile Picture
Replace `public/assets/me.jpg` with your profile picture

### 4.2 Update SEO Image
Replace `public/assets/seo/og-image.png` with your custom social media preview image

### 4.3 Customize Colors (Optional)
Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      // Your custom colors here
    }
  }
}
```

## 📧 **Step 5: Contact Form Setup**

### 5.1 Email Configuration
The contact form uses Resend for email delivery. Set up your email service:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Create `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 5.2 Update Email Template
Edit `src/components/email-template.tsx` to customize the email template.

## 🚀 **Step 6: Deployment**

### 6.1 Choose Your Platform
This portfolio can be deployed on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **GitHub Pages**

### 6.2 Vercel Deployment (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### 6.3 Environment Variables
Set these in your deployment platform:
- `RESEND_API_KEY`: Your Resend API key
- `UMAMI_DOMAIN`: Analytics (optional)
- `UMAMI_SITE_ID`: Analytics (optional)

## 📝 **Step 7: Content Updates**

### 7.1 About Page
Edit `src/app/about/page.tsx` to add your personal story

### 7.2 Blog Page (Optional)
Edit `src/app/blog/page.tsx` to add your blog posts

### 7.3 Footer
Edit `src/components/footer/config.ts` to customize footer links

## 🎯 **Step 8: Final Touches**

### 8.1 Update Package.json
```json
{
  "name": "your-portfolio-name",
  "version": "1.0.0",
  // ... rest of the config
}
```

### 8.2 Update README.md
Replace the existing README with your own project description

### 8.3 Test Everything
- Test the contact form
- Check all links work
- Verify responsive design
- Test on different browsers

## 🔧 **Advanced Customizations**

### Custom 3D Models
- Replace Spline models in `public/assets/`
- Update references in components

### Custom Animations
- Modify `src/components/reveal-animations.tsx`
- Customize GSAP animations

### Custom Themes
- Add new themes in `src/components/theme/`
- Update theme provider

## 📞 **Need Help?**

If you encounter any issues during customization:
1. Check the console for errors
2. Verify all file paths are correct
3. Ensure all dependencies are installed
4. Test locally before deploying

## 🎉 **You're Ready!**

Once you've completed these steps, you'll have a beautiful, personalized 3D interactive portfolio that showcases your skills and projects!

---

**Happy Customizing! 🚀**


