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
        level: "Senior High",
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
        id: "discere",
        title: "Discere Flashcards",
        kind: "school",
        featured: false,
        role: "Full Stack • Study Companion",
        summary:
          "A flashcard and quiz platform that helps students study more efficiently with organized decks, interactive quizzes, and progress tracking.",
        tags: ["HTML", "CSS", "JavaScript", "Django", "SQLite"],
        badgeLabel: null,
        statusLabel: "In Progress",
        imageSrc: "resources/Discere.jpg",
        links: {
          repo: "https://github.com/y4na/Discere",
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
      {
        id: "commitsensei",
        title: "CommitSensei",
        kind: "side",
        featured: false,
        role: "Side Project • Developer Tooling",
        summary:
          "Analyze any GitHub profile and get a clear picture of what a developer has built, what languages they use, and how active they are — all in one page.",
        tags: ["HTML", "CSS", "JavaScript"],
        badgeLabel: null,
        statusLabel: "Live",
        imageSrc: "resources/commitsensei.jpg",
        links: {
          live: "https://commitsensei.netlify.app/",
          repo: "https://github.com/satorime/CommitSensei",
        },
      },
      {
        id: "dataexplorer",
        title: "DataExplorer",
        kind: "side",
        featured: false,
        role: "Side Project • Data Visualization",
        summary:
          "A fully client-side platform for uploading, exploring, and visualizing CSV or JSON datasets directly in the browser. Offers instant column summaries, interactive charts, and one-click data export — no backend, no setup, just drop in your data and go.",
        tags: ["HTML", "CSS", "JavaScript"],
        badgeLabel: null,
        statusLabel: "Live",
        imageSrc: "resources/DataExplorer.jpg",
        links: {
          live: "https://dataexplo.netlify.app/",
          repo: "https://github.com/satorime/DataExplorer",
        },
      },
      {
        id: "rrlfinder",
        title: "RRLFinder",
        kind: "side",
        featured: false,
        role: "Side Project • Research Tool",
        summary:
          "A research assistant tool that helps students and academics quickly find and organize related review of literature (RRL) sources. Streamlines the research process by surfacing relevant academic references in one place.",
        tags: ["HTML", "CSS", "JavaScript"],
        badgeLabel: null,
        statusLabel: "Live",
        imageSrc: "resources/RRLFinder.png",
        links: {
          live: "https://rrl-finder.vercel.app/",
          repo: "https://github.com/satorime/RRLFinder",
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

  publications: {
    title: "Research Publications",
    subtitle: "Academic research and conference presentations",
    items: [
      {
        id: "moodlequest-paper",
        title: "MoodleQuest: Gamified Engagement for Asynchronous Learning",
        conference: "12th International Conference on Education and Training Technologies",
        year: "2026",
        pdfUrl: "resources/Abstract/MoodleQuest.pdf",
        overview: "A gamified companion system designed to improve student participation in asynchronous Moodle courses. Combines quests, experience points (XP), badges, leaderboards, and virtual pets with real-time analytics. Built with Next.js and FastAPI, the system integrates securely with Moodle via SSO while maintaining privacy. Student evaluation (32 participants) showed strong learning impact (4.58/5) and engagement (4.38/5), though usability improvements were identified.",
      },
      {
        id: "sepsis-paper",
        title: "Uncertainty-Aware Temporal Transformer Modeling with Masked Self-Attention and Missingness Encoding for Early Sepsis Risk Stratification from ICU Time-Series Data",
        conference: "26th Philippine Computing Science Congress",
        year: "2026",
        pdfUrl: "resources/Abstract/Early Sepsis Risk Stratification from ICU Time-Series Data.pdf",
        overview: "An advanced deep learning framework for early sepsis detection in ICU settings using Transformer neural networks. Features masked self-attention and explicit missingness encoding to handle irregular, sparse clinical data. Incorporates uncertainty estimation via Monte Carlo Dropout for reliable clinical decision support. Evaluated on PhysioNet 2019 dataset with focus on clinical utility rather than accuracy alone, emphasizing early intervention and real-world ICU deployment.",
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

