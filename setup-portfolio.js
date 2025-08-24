#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎨 Welcome to Portfolio Customization Setup!');
console.log('This script will help you quickly customize your portfolio.\n');

const questions = [
  {
    name: 'fullName',
    question: 'What is your full name? (e.g., John Doe): ',
    default: 'YOUR_FULL_NAME'
  },
  {
    name: 'title',
    question: 'What is your professional title? (e.g., Full Stack Developer): ',
    default: 'YOUR_TITLE'
  },
  {
    name: 'email',
    question: 'What is your email address?: ',
    default: 'your.email@example.com'
  },
  {
    name: 'website',
    question: 'What is your website URL? (e.g., https://yourname.com): ',
    default: 'https://yourdomain.com'
  },
  {
    name: 'github',
    question: 'What is your GitHub profile URL?: ',
    default: 'https://github.com/your_github_username/'
  },
  {
    name: 'linkedin',
    question: 'What is your LinkedIn profile URL?: ',
    default: 'https://www.linkedin.com/in/your-linkedin-profile/'
  },
  {
    name: 'twitter',
    question: 'What is your Twitter/X profile URL?: ',
    default: 'https://x.com/your_twitter_handle/'
  },
  {
    name: 'instagram',
    question: 'What is your Instagram profile URL?: ',
    default: 'https://www.instagram.com/your_instagram_handle/'
  },
  {
    name: 'facebook',
    question: 'What is your Facebook profile URL?: ',
    default: 'https://www.facebook.com/your_facebook_profile'
  },
  {
    name: 'resume',
    question: 'What is your resume URL?: ',
    default: 'YOUR_RESUME_LINK_HERE'
  },
  {
    name: 'role',
    question: 'What role/title should appear in the hero section?: ',
    default: 'YOUR_ROLE_HERE'
  }
];

const answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    updateFiles();
    return;
  }

  const q = questions[index];
  rl.question(q.question, (answer) => {
    answers[q.name] = answer || q.default;
    askQuestion(index + 1);
  });
}

function updateFiles() {
  console.log('\n📝 Updating your portfolio files...\n');

  // Update config.ts
  const configPath = path.join(__dirname, 'src', 'data', 'config.ts');
  let configContent = fs.readFileSync(configPath, 'utf8');

  configContent = configContent
    .replace(/YOUR_NAME \| YOUR_TITLE/g, `${answers.fullName} | ${answers.title}`)
    .replace(/YOUR_FULL_NAME/g, answers.fullName)
    .replace(/your\.email@example\.com/g, answers.email)
    .replace(/https:\/\/yourdomain\.com/g, answers.website)
    .replace(/https:\/\/x\.com\/your_twitter_handle\//g, answers.twitter)
    .replace(/https:\/\/www\.linkedin\.com\/in\/your-linkedin-profile\//g, answers.linkedin)
    .replace(/https:\/\/www\.instagram\.com\/your_instagram_handle\//g, answers.instagram)
    .replace(/https:\/\/www\.facebook\.com\/your_facebook_profile/g, answers.facebook)
    .replace(/https:\/\/github\.com\/your_github_username\//g, answers.github);

  fs.writeFileSync(configPath, configContent);
  console.log('✅ Updated src/data/config.ts');

  // Update hero.tsx
  const heroPath = path.join(__dirname, 'src', 'components', 'sections', 'hero.tsx');
  let heroContent = fs.readFileSync(heroPath, 'utf8');

  heroContent = heroContent
    .replace(/YOUR_ROLE_HERE/g, answers.role)
    .replace(/YOUR_RESUME_LINK_HERE/g, answers.resume);

  fs.writeFileSync(heroPath, heroContent);
  console.log('✅ Updated src/components/sections/hero.tsx');

  // Update package.json
  const packagePath = path.join(__dirname, 'package.json');
  let packageContent = fs.readFileSync(packagePath, 'utf8');
  const packageJson = JSON.parse(packageContent);
  
  packageJson.name = `${answers.fullName.toLowerCase().replace(/\s+/g, '-')}-portfolio`;
  packageJson.version = '1.0.0';
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json');

  console.log('\n🎉 Portfolio customization complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Replace project screenshots in public/assets/projects-screenshots/');
  console.log('2. Update your projects in src/data/projects.tsx');
  console.log('3. Add your profile picture as public/assets/me.jpg');
  console.log('4. Set up your email service (Resend) for the contact form');
  console.log('5. Deploy to Vercel or your preferred platform');
  console.log('\n📖 Check CUSTOMIZATION_GUIDE.md for detailed instructions!');
  
  rl.close();
}

askQuestion(0);


