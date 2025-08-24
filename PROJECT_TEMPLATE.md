# 📁 Project Template

Use this template to add your own projects to the portfolio. Copy and modify this structure for each of your projects.

## 🎯 **Project Structure**

```typescript
{
  id: "your-project-id",
  category: "Project Category", // e.g., "Web Development", "Mobile App", "DevOps"
  title: "Your Project Name",
  src: "/assets/projects-screenshots/yourproject/landing.png", // Main thumbnail
  screenshots: ["1.png", "2.png", "3.png"], // All screenshots for slideshow
  live: "https://your-project-live-url.com", // Live demo URL
  github: "https://github.com/yourusername/your-project", // GitHub repo URL
  skills: {
    frontend: [
      PROJECT_SKILLS.js,        // JavaScript
      PROJECT_SKILLS.react,     // React
      PROJECT_SKILLS.next,      // Next.js
      PROJECT_SKILLS.tailwind,  // Tailwind CSS
      PROJECT_SKILLS.ts,        // TypeScript
      PROJECT_SKILLS.html,      // HTML5
      PROJECT_SKILLS.css,       // CSS3
      PROJECT_SKILLS.vue,       // Vue.js
      PROJECT_SKILLS.chakra,    // Chakra UI
      PROJECT_SKILLS.shadcn,    // ShadCN UI
      PROJECT_SKILLS.aceternity, // Aceternity UI
      PROJECT_SKILLS.framerMotion, // Framer Motion
      PROJECT_SKILLS.spline,    // Spline 3D
      PROJECT_SKILLS.gsap,      // GSAP
      PROJECT_SKILLS.bootstrap, // Bootstrap
      PROJECT_SKILLS.vite,      // Vite
      PROJECT_SKILLS.netlify,   // Netlify
    ],
    backend: [
      PROJECT_SKILLS.node,      // Node.js
      PROJECT_SKILLS.express,   // Express.js
      PROJECT_SKILLS.python,    // Python
      PROJECT_SKILLS.java,      // Java
      PROJECT_SKILLS.cplusplus, // C++
      PROJECT_SKILLS.arduino,   // Arduino
      PROJECT_SKILLS.mongo,     // MongoDB
      PROJECT_SKILLS.postgres,  // PostgreSQL
      PROJECT_SKILLS.firebase,  // Firebase
      PROJECT_SKILLS.supabase,  // Supabase
      PROJECT_SKILLS.prisma,    // Prisma
      PROJECT_SKILLS.docker,    // Docker
      PROJECT_SKILLS.aws,       // AWS
      PROJECT_SKILLS.maven,     // Maven
      PROJECT_SKILLS.openai,    // OpenAI
      PROJECT_SKILLS.sockerio,  // Socket.io
      PROJECT_SKILLS.reactQuery, // React Query
      PROJECT_SKILLS.sanity,    // Sanity CMS
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Your project description goes here. Write a compelling overview of what your project does, 
          the problem it solves, and why it's impressive. Make it engaging and highlight the key features!
        </TypographyP>
        
        <ProjectsLinks live={this.live} repo={this.github} />
        
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">
          Describe the main features of your project. What makes it special?
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/yourproject/1.png`,
            `${BASE_PATH}/yourproject/2.png`,
          ]}
        />
        
        <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
        <p className="font-mono mb-2">
          Explain the technical aspects, architecture decisions, and technologies used.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/yourproject/3.png`,
            `${BASE_PATH}/yourproject/4.png`,
          ]}
        />
        
        <TypographyH3 className="my-4 mt-8">Results & Impact</TypographyH3>
        <p className="font-mono mb-2">
          What were the results? Any metrics, user feedback, or business impact?
        </p>
        
        <p className="font-mono mb-2 mt-8 text-center">
          This project showcases my skills in [specific technologies] and demonstrates my ability to [specific capabilities].
        </p>
      </div>
    );
  },
}
```

## 📸 **Screenshot Guidelines**

### File Structure
```
public/assets/projects-screenshots/
├── yourproject1/
│   ├── landing.png    # Main thumbnail (1200x800px recommended)
│   ├── 1.png         # Screenshot 1
│   ├── 2.png         # Screenshot 2
│   └── 3.png         # Screenshot 3
└── yourproject2/
    ├── landing.png
    ├── 1.png
    └── 2.png
```

### Image Requirements
- **Format**: PNG or JPG
- **Size**: 1200x800px or similar aspect ratio
- **Quality**: High quality, clear screenshots
- **Content**: Show the best features of your project

## 🎨 **Project Categories**

Choose from these categories or create your own:
- **Web Development**
- **Mobile App**
- **DevOps**
- **AI/ML**
- **IoT**
- **Full Stack**
- **Frontend**
- **Backend**
- **Data Science**
- **Game Development**
- **UI/UX Design**

## 💡 **Project Description Tips**

### Structure Your Description:
1. **Hook**: Start with an engaging opening
2. **Problem**: What problem does it solve?
3. **Solution**: How does your project solve it?
4. **Features**: Key features and functionality
5. **Tech Stack**: Technologies used
6. **Results**: Impact and outcomes
7. **Learning**: What you learned

### Example Description:
```
"E-commerce Platform is a full-stack web application that revolutionizes online shopping 
by providing a seamless, personalized experience. Built with React and Node.js, it features 
real-time inventory management, secure payment processing, and AI-powered product recommendations.

The platform handles 10,000+ daily users and processes $50K+ in monthly transactions, 
demonstrating scalability and performance optimization skills."
```

## 🔧 **Adding Your Project**

1. **Create Screenshots**: Take high-quality screenshots of your project
2. **Upload Images**: Place them in `public/assets/projects-screenshots/yourproject/`
3. **Update Code**: Add your project to `src/data/projects.tsx`
4. **Test**: Make sure all links and images work correctly

## 📝 **Quick Checklist**

- [ ] Project screenshots uploaded
- [ ] Project added to projects.tsx
- [ ] Live demo URL working
- [ ] GitHub repo link working
- [ ] Skills correctly listed
- [ ] Description compelling and complete
- [ ] Images displaying correctly

---

**Happy Project Adding! 🚀**


