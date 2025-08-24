const config = {
  title: "Niket Kumar | Portfolio",
  description: {
    long: "Explore the portfolio of Niket Kumar, a B.Tech CSE student at IIIT Agartala passionate about full-stack development, competitive programming, and building impactful projects.",
    short:
      "Discover the portfolio of Niket Kumar, a Full-Stack Developer and Competitive Programmer solving real life problems with technology.",
  },
  keywords: [
    "Niket Kumar",
    "Niket Kumar Portfolio",
    "niket224",
    "niket224.github.io/portfolio",
    "Niket Kumar portfolio",
    "portfolio",
    "Full-Stack Developer",
    "Competitive Programmer",
    "Web Development",
    "React",
    "Node.js",
    "Python",
    "C++",
    "Data Structures",
    "Algorithms",
    "IIIT Agartala",
    "Computer Science",
    "Software Engineering",
    "creative technologist",
    "web development",
    "interactive websites",
  ],
  author: "Niket Kumar",
  email: "niketkumar2304@gmail.com",
  site: process.env.NEXT_PUBLIC_SITE_URL || "https://niket224.github.io/portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/niket-kumar-iiita",
    instagram: "",
    facebook: "",
    github: "https://github.com/Niket224",
  },
};
export { config };
