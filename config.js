// Central configuration for your portfolio content.
// Edit the values in this object to change text, links, and skills.
window.PORTFOLIO_CONFIG = {
  nameFirst: "Brix",
  nameLast: "Bitayo",
  headlinePrimary: "Full Stack Developer",
  headlineSecondary: "Software Engineer",
  locationLabel: "Cebu City, Philippines",
  badgeLabel: "Available for Freelance Work",
  badgeIcon: "🏆",
  introKicker: "<hello world />",
  aboutText:
    "I create efficient web experiences tailored to real business needs. Based in Cebu City and open to freelance work in web development, automation, and custom projects.",

  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Schedule Meeting",
    href: "mailto:brix.bitayo@cit.edu?subject=Project%20Inquiry",
  },
  tertiaryCta: {
    label: "Resume",
    href: "resources/Resume - Bitayo.pdf",
  },

  aboutEducation: {
    title: "About Me",
    subtitle: "My journey and experience",
    entries: [
      {
        level: "College",
        program: "BS Computer Science",
        institution: "Cebu Institute of Technology - University",
        location: "Cebu City, Philippines",
        period: "2022 - Present",
        highlight: "BS COMPUTER SCIENCE",
      },
      {
        level: "Senior High School",
        program: "STEM",
        institution: "University of Cebu Lapu-Lapu and Mandaue",
        location: "Mandaue City, Philippines",
        period: "2020 - 2022",
        highlight: "SENIOR HIGH SCHOOL - STEM",
      },
    ],
  },

  skills: {
    filters: [
      { id: "all", label: "All" },
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "database", label: "Database" },
      { id: "ai", label: "AI" },
      { id: "tools", label: "Tools" },
    ],
    items: [
      // Frontend
      { name: "JavaScript", short: "JS", categories: ["frontend"],
        iconSrc: "resources/Skills Logo/javascript.png"},
      { name: "TypeScript", short: "TS", categories: ["frontend"],
        iconSrc: "resources/Skills Logo/typescript.png" },
      { name: "React", short: "React", categories: ["frontend"],
        iconSrc: "resources/Skills Logo/react.png" },
      { name: "Next.js", short: "Next", categories: ["frontend", "backend"],
        iconSrc: "resources/Skills Logo/next-js.png" },
      { name: "Tailwind CSS", short: "Tailwind", categories: ["frontend"],
        iconSrc: "resources/Skills Logo/tailwind.png" },
      { name: "React Native / Expo", short: "Expo", categories: ["frontend"],
        iconSrc: "resources/Skills Logo/react-expo.png" },

      // Backend
      { name: "Node.js", short: "Node", categories: ["backend"],
        iconSrc: "resources/Skills Logo/nodejs.png" },
      { name: "Express.js", short: "Express", categories: ["backend"],
        iconSrc: "resources/Skills Logo/express.jpg" },
      { name: "NestJS", short: "Nest", categories: ["backend"],
        iconSrc: "resources/Skills Logo/nestjs.png" },
      {
        name: "Django",
        short: "Django",
        categories: ["backend"],
        iconSrc: "resources/Skills%20Logo/django.svg",
      },
      { name: "FastAPI", short: "FastAPI", categories: ["backend"],
        iconSrc: "resources/Skills Logo/fastapi.png" },

      // Database
      { name: "MySQL", short: "MySQL", categories: ["database"],
        iconSrc: "resources/Skills Logo/mysql.png" },
      {
        name: "PostgreSQL",
        short: "Postgres",
        categories: ["database"],
        iconSrc: "resources/Skills%20Logo/Postgresql.svg",
      },
      { name: "MongoDB", short: "MongoDB", categories: ["database"],
        iconSrc: "resources/Skills Logo/mongodb.png" },
      { name: "Supabase", short: "Supabase", categories: ["database"],
        iconSrc: "resources/Skills Logo/supabase.png" },

      // AI / ML
      { name: "PyTorch", short: "PyTorch", categories: ["ai"],
        iconSrc: "resources/Skills Logo/pytorch.png" },
      { name: "Keras", short: "Keras", categories: ["ai"],
        iconSrc: "resources/Skills Logo/keras.png" },

      // Tools
      { name: "Git", short: "Git", categories: ["tools"],
        iconSrc: "resources/Skills Logo/git.png" },
      { name: "Docker", short: "Docker", categories: ["tools"],
        iconSrc: "resources/Skills Logo/docker.png" },
      { name: "AWS", short: "AWS", categories: ["tools"],
        iconSrc: "resources/Skills Logo/aws.png" },
      { name: "Postman", short: "Postman", categories: ["tools"],
        iconSrc: "resources/Skills Logo/postman.png" },
    ],
  },

  projects: {
    filters: [
      { id: "all", label: "All" },
      { id: "school", label: "School Projects" },
      { id: "side", label: "Side Projects" },
    ],
    items: [
      {
        id: "moodlequest",
        title: "MoodleQuest",
        kind: "school",
        featured: true,
        role: "Frontend • Head Researcher",
        summary:
          "A gamified companion system designed to improve student participation in asynchronous Moodle courses while preserving transparency and institutional trust. Prior studies indicate that timely engagement cues, visible rewards, and structured incentives can enhance learner motivation and course persistence.",
        tags: ["React", "Moodle API", "Realtime Data"],
        badgeLabel: "Featured",
        statusLabel: "Live",
        imageSrc: "resources/moodlequest.png",
        links: {
          repo: "https://github.com/Jethrr/moodlequest",
        },
      },
      {
        id: "tracker",
        title: "GPTA-Bankal Tracker",
        kind: "side",
        featured: true,
        role: "Full Stack • Workflow Automation",
        summary:
          "Full-stack application for managing student payment requirements and collections. Built with Next.js App Router, Tailwind CSS, Supabase (Postgres + Auth), and React Query.",
        tags: ["Typescript", "Next.js", "PostgreSQL", "React Query","Tailwind CSS"],
        badgeLabel: "Featured",
        statusLabel: "Prototype",
        imageSrc: "resources/gpta.jpg",
        links: {
          live: "https://gpta-bankal.netlify.app/",
          repo: "https://github.com/satorime/GPTA-Bankal/tree/new-feature",
        },
      },
      {
        id: "discordbot",
        title: "Discord Bot",
        kind: "side",
        featured: false,
        role: "Side Project • Workflow Automation",
        summary:
          "Personal automation hub connecting APIs and services using n8n, reducing repetitive tasks and manual work.",
        tags: ["JavaScript", "Discord.js"],
        badgeLabel: null,
        statusLabel: "In Progress",
        imageSrc: "resources/discordbot.jpg",
        links: {
          repo: "https://github.com/satorime/discord-bot",
        },
      },
    ],
  },

  certificates: {
    summary:
      "Professional credentials validating technical expertise and strong engineering fundamentals.",
    items: [
      {
        id: "cloudfoundations",
        title: "AWS Academy Graduate - Cloud Foundations",
        issuer: "AWS Academy",
        location: "Philippines",
        issued: "Issued Oct 2025",
        imageSrc: "resources/Certificates/CloudFoundations.png",
        description:
          "Professional certification validating practical competency in information and communications technoEarned through AWS Academy, this certification validates foundational knowledge of cloud computing concepts and core Amazon Web Services (AWS) offerings. It covers cloud architecture principles, key AWS services, pricing models, and support structures. Demonstrates the ability to understand and communicate cloud value propositions and basic AWS solutions in real-world business and technical contexts.logy.",
        verifyUrl: "https://www.credly.com/badges/3dce662d-ae36-4de2-b0c8-c55a96454e1b/public_url",
      },
      {
        id: "cloudarchitecting",
        title: "AWS Academy Graduate – Cloud Architecting",
        issuer: "AWS Academy",
        location: "Philippines",
        issued: "Issued Dec 2025",
        imageSrc: "resources/Certificates/CloudArchitecting.png",
        description:
          "This certification demonstrates applied knowledge in designing and deploying scalable, secure, and cost-efficient cloud architectures using Amazon Web Services (AWS). It covers core architectural best practices, networking, storage, compute, database solutions, and high-availability design patterns. Validates the ability to architect cloud solutions aligned with business and technical requirements following AWS Well-Architected principles.",
        verifyUrl: "https://www.credly.com/badges/4166f1dc-42b5-46ca-8523-eb4828049b7e/public_url",
      },
    ],
  },

  meta: {
    yearsExperienceLabel: "Years of building for the web",
    yearsNumber: "3+",
    timezoneLabel: "Local time",
    timezoneValue: "GMT+8",
  },

  // Path or URL to your profile image
  profileImage: "resources/profile.jpg",

  // Social links and icons
  socials: [
    {
      type: "github",
      href: "https://github.com/satorime",
      iconSrc: "resources/github_logo_icon_229278.png",
    },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/brix-bitayo-b2358a334/",
      iconSrc: "resources/linkedinlogo.jpg",
    },
    {
      type: "email",
      href: "mailto:brix.bitayo@cit.edu",
    },
  ],
};

