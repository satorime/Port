const cfg = window.PORTFOLIO_CONFIG || {};

function createEl(tag, className, content) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (typeof content === "string") el.textContent = content;
  return el;
}

// Soft following light that appears on empty background areas
function initCursorLight() {
  const light = document.createElement("div");
  light.className = "cursor-light";
  document.body.appendChild(light);

  function isOverContent(target) {
    if (!target) return false;
    return !!target.closest(
      "a, button, .btn, .nav, .brand, .main, .project-card, .cert-card, .skill-card, .profile-card, .about, .skills, .certs, .edu-card"
    );
  }

  document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";

    if (isOverContent(e.target)) {
      light.classList.remove("is-visible");
    } else {
      light.classList.add("is-visible");
    }
  });
}

// Small word-rotator for hero badge
function initIntroRotator(el) {
  if (!el || el.dataset.rotatorInit === "1") return;
  el.dataset.rotatorInit = "1";

  const words = ["Website", "Application", "Software", "Develop"];
  let index = 0;

  el.textContent = words[0];

  setInterval(() => {
    index = (index + 1) % words.length;

    el.style.opacity = "0";
    el.style.transform = "translateY(4px)";

    setTimeout(() => {
      el.textContent = words[index];
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 220);
  }, 2200);
}

// Rotating brand text for DEV PORTFOLIO in multiple languages
function initBrandRotator(el) {
  if (!el || el.dataset.rotatorInit === "1") return;
  el.dataset.rotatorInit = "1";

  const words = [
    "Developer Portfolio",
    "Portfolio Développeur",
    "Portfolio Sviluppatore",
    "開発者ポートフォリオ",
    "개발자 포트폴리오",
    "開發者作品集",
    "ملف أعمال المطور",
    "Entwickler-Portfolio",
  ];

  let index = 0;
  el.textContent = words[0];

  setInterval(() => {
    index = (index + 1) % words.length;

    el.style.opacity = "0";
    el.style.transform = "translateY(4px)";

    setTimeout(() => {
      el.textContent = words[index];
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 220);
  }, 2600);
}

// Lightweight animated network background for aesthetic effect
function initNetworkBackground() {
  const canvas = document.getElementById("network-bg");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  let width = 0;
  let height = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener("resize", resize);

  const NODE_COUNT = 60;
  const LINK_DISTANCE = 140;
  const MAX_SPEED = 0.2;

  const nodes = [];
  const mouse = { x: null, y: null };

  function resetNode(n) {
    n.x = Math.random() * width;
    n.y = Math.random() * height;
    n.vx = (Math.random() - 0.5) * MAX_SPEED;
    n.vy = (Math.random() - 0.5) * MAX_SPEED;
    n.phase = Math.random() * Math.PI * 2;
    n.size = 1.2 + Math.random() * 0.8;
  }

  for (let i = 0; i < NODE_COUNT; i++) {
    const n = {};
    resetNode(n);
    nodes.push(n);
  }

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = mouse.y = null;
  });

  function step() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw nodes
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      n.phase += 0.03;

      // Wrap around edges
      if (n.x < -20) n.x = width + 20;
      if (n.x > width + 20) n.x = -20;
      if (n.y < -20) n.y = height + 20;
      if (n.y > height + 20) n.y = -20;

      // Gentle mouse influence
      if (mouse.x !== null) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        const radius = 220;
        if (dist2 < radius * radius && dist2 > 0.001) {
          const force = -0.00008;
          const invDist = 1 / Math.sqrt(dist2);
          n.vx += (dx * invDist) * force;
          n.vy += (dy * invDist) * force;
        }
      }

      const pulse = 0.4 * Math.sin(n.phase) + 0.6;
      const r = n.size * pulse;

      ctx.beginPath();
      ctx.fillStyle = "rgba(160, 196, 255, 0.8)";
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw links
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DISTANCE) {
          const alpha = 1 - dist / LINK_DISTANCE;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(120, 180, 255, ${alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function renderHome(main) {
  main.className = "main main--home";
  main.innerHTML = "";

  const leftCol = createEl("section", "left-col");

  const introBadge = createEl("div", "intro-badge");
  const introIcon = createEl("div", "intro-badge-icon", "{ }");
  const introText = createEl(
    "div",
    "intro-badge-text intro-rotator",
    ""
  );
  introBadge.appendChild(introIcon);
  introBadge.appendChild(introText);
  initIntroRotator(introText);

  const heroTitle = createEl("h1", "hero-title");
  const heroTitleTop = createEl("span", "", (cfg.nameFirst || "Your").toUpperCase());
  heroTitleTop.classList.add("hero-title-main");
  const heroTitleBottom = createEl(
    "span",
    "hero-title-last",
    (cfg.nameLast || "Name").toUpperCase()
  );
  heroTitle.appendChild(heroTitleTop);
  heroTitle.appendChild(heroTitleBottom);

  const heroSubtitleRow = createEl("div", "hero-subtitle-row");
  const primaryTag = createEl(
    "div",
    "tag-pill primary",
    (cfg.headlinePrimary || "Full Stack Developer").toUpperCase()
  );
  const secondaryTag = createEl(
    "div",
    "tag-pill secondary",
    (cfg.headlineSecondary || "AI Enthusiast").toUpperCase()
  );
  heroSubtitleRow.appendChild(primaryTag);
  heroSubtitleRow.appendChild(secondaryTag);

  const heroText = createEl("p", "hero-text");
  heroText.innerHTML = (cfg.aboutText ||
    "Creating efficient web experiences tailored to real-world business needs.") // fallback
    .replace(/(\bweb\b|\bbusiness\b)/gi, "<strong>$1</strong>");

  const ctaRow = createEl("div", "cta-row");

  if (cfg.primaryCta) {
    const a = createEl("a", "btn btn-primary");
    a.href = cfg.primaryCta.href || "#";
    a.innerHTML = `<span>${cfg.primaryCta.label || "View Projects"}</span><span class="icon">↗</span>`;
    ctaRow.appendChild(a);
  }

  if (cfg.secondaryCta) {
    const a2 = createEl("a", "btn btn-secondary");
    a2.href = cfg.secondaryCta.href || "#";
    a2.textContent = cfg.secondaryCta.label || "Schedule Meeting";
    ctaRow.appendChild(a2);
  }

  if (cfg.tertiaryCta) {
    const a3 = createEl("a", "btn btn-ghost");
    a3.href = cfg.tertiaryCta.href || "#";
    a3.textContent = cfg.tertiaryCta.label || "Resume";
    ctaRow.appendChild(a3);
  }

  const metaRow = createEl("div", "meta-row");

  const metaYears = createEl("div", "meta-item");
  const metaDot = createEl("div", "meta-dot");
  const metaLabel = createEl(
    "span",
    "",
    cfg.meta?.yearsExperienceLabel || "Years of building for the web"
  );
  const metaStrong = createEl("span", "meta-strong", cfg.meta?.yearsNumber || "3+");
  metaYears.appendChild(metaDot);
  metaYears.appendChild(metaStrong);
  metaYears.appendChild(document.createTextNode(" " + metaLabel.textContent));

  const metaTz = createEl("div", "meta-item");
  metaTz.textContent = `${cfg.meta?.timezoneLabel || "Local time"} • ${
    cfg.meta?.timezoneValue || "GMT+8"
  }`;

  metaRow.appendChild(metaYears);
  metaRow.appendChild(metaTz);

  leftCol.appendChild(introBadge);
  leftCol.appendChild(heroTitle);
  leftCol.appendChild(heroSubtitleRow);
  leftCol.appendChild(heroText);
  leftCol.appendChild(ctaRow);
  leftCol.appendChild(metaRow);

  const rightCol = createEl("aside", "right-col");
  const profileCard = createEl("div", "profile-card");

  const profileFrame = createEl("div", "profile-frame");
  const profileInner = createEl("div", "profile-inner");

  const profileImage = createEl("div", "profile-image");
  profileImage.style.backgroundImage = `url("${
    cfg.profileImage ||
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
  }")`;

  const profileLocation = createEl(
    "div",
    "profile-location",
    cfg.locationLabel || "Your City, Country"
  );

  const profileBadge = createEl("div", "profile-badge");
  const badgeIcon = createEl("span", "icon", cfg.badgeIcon || "🏆");
  const badgeText = createEl("span", "", cfg.badgeLabel || "3rd Prize Winner");
  profileBadge.appendChild(badgeIcon);
  profileBadge.appendChild(badgeText);

  profileInner.appendChild(profileImage);
  profileInner.appendChild(profileLocation);
  profileInner.appendChild(profileBadge);
  profileFrame.appendChild(profileInner);

  const profileFooter = createEl("div", "profile-footer");
  const profileCaption = createEl(
    "div",
    "profile-caption",
    "Let’s build something remarkable together."
  );
  const profileSocials = createEl("div", "profile-socials");

  (cfg.socials || []).forEach((s) => {
    const btn = createEl("a", "icon-btn");
    btn.href = s.href || "#";

    // Only open non-email links in a new tab
    if (s.type && s.type !== "email") {
      btn.target = "_blank";
      btn.rel = "noreferrer";
    }

    if (s.iconSrc) {
      const img = document.createElement("img");
      img.src = s.iconSrc;
      img.alt = s.type ? `${s.type} icon` : "social icon";
      img.className = "icon-img";
      btn.appendChild(img);
    } else {
      let icon = "↗";
      if (s.type === "github") icon = "GH";
      if (s.type === "linkedin") icon = "in";
      if (s.type === "email") icon = "✉";
      btn.textContent = icon;
    }

    profileSocials.appendChild(btn);
  });

  profileFooter.appendChild(profileCaption);
  profileFooter.appendChild(profileSocials);

  profileCard.appendChild(profileFrame);
  profileCard.appendChild(profileFooter);
  rightCol.appendChild(profileCard);

  main.appendChild(leftCol);
  main.appendChild(rightCol);
}

function renderAbout(main) {
  main.className = "main main--about";
  main.innerHTML = "";

  const aboutCfg = cfg.aboutEducation;

  const wrapper = createEl("section", "about");

  const header = createEl("header", "about-header");
  const titleBadge = createEl("div", "about-badge", "ABOUT ME");
  const title = createEl("h2", "about-title", aboutCfg?.title || "About Me");
  const subtitle = createEl(
    "p",
    "about-subtitle",
    aboutCfg?.subtitle || "My journey and experience"
  );
  header.appendChild(titleBadge);
  header.appendChild(title);
  header.appendChild(subtitle);

  const eduTabs = createEl("div", "about-tabs");
  const eduTab = createEl("button", "about-tab is-active", "EDUCATION");
  eduTabs.appendChild(eduTab);

  const eduList = createEl("div", "edu-list");

  (aboutCfg?.entries || []).forEach((entry, index) => {
    const card = createEl("article", "edu-card");
    if (index === 0) card.classList.add("edu-card--primary");

    const topRow = createEl("div", "edu-top-row");
    const pill = createEl("div", "edu-pill", entry.level || "");
    const period = createEl("div", "edu-period", entry.period || "");
    topRow.appendChild(pill);
    topRow.appendChild(period);

    const program = createEl("h3", "edu-program", entry.highlight || entry.program || "");
    const institution = createEl(
      "p",
      "edu-institution",
      entry.institution || ""
    );
    const location = createEl("p", "edu-location", entry.location || "");

    card.appendChild(topRow);
    card.appendChild(program);
    card.appendChild(institution);
    card.appendChild(location);
    eduList.appendChild(card);
  });

  wrapper.appendChild(header);
  wrapper.appendChild(eduTabs);
  wrapper.appendChild(eduList);

  main.appendChild(wrapper);
}

function renderSkills(main) {
  main.className = "main main--skills";
  main.innerHTML = "";

  const skillsCfg = cfg.skills || {};
  const wrapper = createEl("section", "skills");

  const header = createEl("header", "skills-header");
  const badge = createEl("div", "skills-badge", "SKILLS");
  const title = createEl("h2", "skills-title", "Tech Stack");
  const subtitle = createEl(
    "p",
    "skills-subtitle",
    "Technologies I work with across the stack."
  );
  header.appendChild(badge);
  header.appendChild(title);
  header.appendChild(subtitle);

  const filtersRow = createEl("div", "skills-filters");
  const grid = createEl("div", "skills-grid");
  let activeFilter = "all";

  function renderGrid() {
    grid.innerHTML = "";

    const items = (skillsCfg.items || []).filter((item) => {
      if (activeFilter === "all") return true;
      return (item.categories || []).includes(activeFilter);
    });

    items.forEach((item) => {
      const card = createEl("article", "skill-card");
      const icon = createEl("div", "skill-icon");

      if (item.iconSrc) {
        const img = document.createElement("img");
        img.src = item.iconSrc;
        img.alt = item.name + " logo";
        img.className = "skill-icon-img";
        icon.appendChild(img);
      } else {
        icon.textContent = item.short || item.name[0] || "?";
      }

      const name = createEl("div", "skill-name", item.name);
      card.appendChild(icon);
      card.appendChild(name);
      grid.appendChild(card);
    });
  }

  (skillsCfg.filters || []).forEach((filter, index) => {
    const btn = createEl("button", "skills-filter", filter.label);
    btn.dataset.filter = filter.id;
    if (index === 0) btn.classList.add("is-active");
    btn.addEventListener("click", () => {
      activeFilter = filter.id;
      Array.from(filtersRow.children).forEach((child) => {
        child.classList.toggle("is-active", child.dataset.filter === activeFilter);
      });
      renderGrid();
    });
    filtersRow.appendChild(btn);
  });

  renderGrid();

  wrapper.appendChild(header);
  wrapper.appendChild(filtersRow);
  wrapper.appendChild(grid);

  main.appendChild(wrapper);
}

function renderProjects(main) {
  main.className = "main main--projects";
  main.innerHTML = "";

  const projectsCfg = cfg.projects || {};
  const wrapper = createEl("section", "projects");

  const header = createEl("header", "projects-header");
  const badge = createEl("div", "projects-badge", "PROJECTS");
  const title = createEl("h2", "projects-title", "Projects");
  const subtitle = createEl(
    "p",
    "projects-subtitle",
    "Real-world applications built with modern technologies."
  );
  header.appendChild(badge);
  header.appendChild(title);
  header.appendChild(subtitle);

  const filtersRow = createEl("div", "projects-filters");
  const grid = createEl("div", "projects-grid");
  let activeFilter = "all";

  function renderGrid() {
    grid.innerHTML = "";

    const items = (projectsCfg.items || []).filter((item) => {
      if (activeFilter === "all") return true;
      return (item.kind || "side") === activeFilter;
    });

    items.forEach((item) => {
      const card = createEl("article", "project-card");
      // enable scroll animation similar to 'Onze diensten'
      card.dataset.reveal = "service";
      if (item.featured) card.classList.add("project-card--featured");

      const top = createEl("div", "project-top");

      if (item.badgeLabel) {
        const badge = createEl("div", "project-featured-badge", item.badgeLabel);
        top.appendChild(badge);
      }

      const thumb = createEl("div", "project-thumb");
      if (item.imageSrc) {
        thumb.style.backgroundImage = `url("${item.imageSrc}")`;
        thumb.classList.add("project-thumb--image");
      } else {
        const thumbTitle = createEl("div", "project-thumb-title", item.title);
        thumb.appendChild(thumbTitle);
      }

      top.appendChild(thumb);

      const body = createEl("div", "project-body");
      const projTitle = createEl("h3", "project-name", item.title);
      const role = createEl("p", "project-role", item.role || "");
      const summary = createEl("p", "project-summary", item.summary || "");
      body.appendChild(projTitle);
      body.appendChild(role);
      body.appendChild(summary);

      const footer = createEl("div", "project-footer");

      const tagsWrap = createEl("div", "project-tags");
      (item.tags || []).forEach((tag) => {
        const tagPill = createEl("span", "project-tag-pill", tag);
        tagsWrap.appendChild(tagPill);
      });

      const ctas = createEl("div", "project-ctas");
      if (item.links?.live) {
        const live = createEl("a", "project-cta project-cta--live", "Live");
        live.href = item.links.live;
        live.target = "_blank";
        live.rel = "noreferrer";
        ctas.appendChild(live);
      }
      if (item.links?.repo) {
        const code = createEl("a", "project-cta project-cta--code", "Code");
        code.href = item.links.repo;
        code.target = "_blank";
        code.rel = "noreferrer";
        ctas.appendChild(code);
      }

      footer.appendChild(tagsWrap);
      footer.appendChild(ctas);

      card.appendChild(top);
      card.appendChild(body);
      card.appendChild(footer);

      grid.appendChild(card);
    });
  }

  (projectsCfg.filters || []).forEach((filter, index) => {
    const btn = createEl("button", "projects-filter", filter.label);
    btn.dataset.filter = filter.id;
    if (index === 0) btn.classList.add("is-active");
    btn.addEventListener("click", () => {
      activeFilter = filter.id;
      Array.from(filtersRow.children).forEach((child) => {
        child.classList.toggle("is-active", child.dataset.filter === activeFilter);
      });
      renderGrid();
    });
    filtersRow.appendChild(btn);
  });

  renderGrid();

  wrapper.appendChild(header);
  wrapper.appendChild(filtersRow);
  wrapper.appendChild(grid);

  main.appendChild(wrapper);
}

function renderCertificates(main) {
  main.className = "main main--certificates";
  main.innerHTML = "";

  const certCfg = cfg.certificates || {};
  const wrapper = createEl("section", "certs");

  const header = createEl("header", "certs-header");
  const badge = createEl("div", "certs-badge", "CERTIFICATIONS");
  const title = createEl("h2", "certs-title", "Certificates");
  const subtitle = createEl(
    "p",
    "certs-subtitle",
    certCfg.summary ||
      "Professional credentials validating technical expertise and problem-solving."
  );
  header.appendChild(badge);
  header.appendChild(title);
  header.appendChild(subtitle);

  const grid = createEl("div", "certs-grid");

  (certCfg.items || []).forEach((item) => {
    const card = createEl("article", "cert-card");
    // enable scroll animation similar to 'Onze diensten'
    card.dataset.reveal = "service";

    const inner = createEl("div", "cert-inner");

    const topRow = createEl("div", "cert-top-row");
    if (item.imageSrc) {
      const thumb = createEl("div", "cert-thumb");
      thumb.style.backgroundImage = `url("${item.imageSrc}")`;
      topRow.appendChild(thumb);
    }
    const mainTitle = createEl("h3", "cert-title", item.title);
    topRow.appendChild(mainTitle);

    const org = createEl(
      "p",
      "cert-issuer",
      item.issuer ? item.issuer : ""
    );

    const metaRow = createEl("div", "cert-meta-row");
    const issued = createEl(
      "div",
      "cert-issued",
      item.issued ? item.issued : ""
    );
    metaRow.appendChild(issued);

    const desc = createEl(
      "p",
      "cert-description",
      item.description || ""
    );

    const actions = createEl("div", "cert-actions");
    if (item.verifyUrl) {
      const btn = createEl("a", "cert-verify-btn", "Verify Certificate");
      btn.href = item.verifyUrl;
      btn.target = "_blank";
      btn.rel = "noreferrer";
      actions.appendChild(btn);
    }

    inner.appendChild(topRow);
    inner.appendChild(org);
    inner.appendChild(metaRow);
    inner.appendChild(desc);
    inner.appendChild(actions);

    card.appendChild(inner);
    grid.appendChild(card);
  });

  const footer = createEl(
    "div",
    "certs-footer",
    `${(certCfg.items || []).length} verified certifications`
  );

  wrapper.appendChild(header);
  wrapper.appendChild(grid);
  wrapper.appendChild(footer);

  main.appendChild(wrapper);
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const shell = createEl("div", "shell");

  const nav = createEl("header", "nav");
  // Brand
  const brand = createEl("div", "brand");
  const brandPill = createEl("div", "brand-pill");
  const brandLogo = document.createElement("img");
  brandLogo.src = "resources/Certificates/Logo.png";
  brandLogo.alt = "Logo";
  brandLogo.className = "brand-logo";
  brandPill.appendChild(brandLogo);
  const brandText = createEl("span", "brand-text-rotator", "");
  brand.appendChild(brandPill);
  brand.appendChild(brandText);
  initBrandRotator(brandText);

  // Nav links container
  const navLinks = createEl("div", "nav-links");
  const sectionIds = ["home", "about", "skills", "projects", "certificates"];

  sectionIds.forEach((id, index) => {
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    const btn = createEl("button", "nav-link", label);
    if (index === 0) btn.classList.add("is-active");
    btn.dataset.section = id;
    navLinks.appendChild(btn);
  });

  // Mobile burger toggle
  const navToggle = document.createElement("button");
  navToggle.className = "nav-toggle";
  navToggle.setAttribute("aria-label", "Toggle navigation");
  navToggle.setAttribute("aria-expanded", "false");
  for (let i = 0; i < 3; i++) {
    const line = document.createElement("span");
    navToggle.appendChild(line);
  }

  nav.appendChild(brand);
  nav.appendChild(navToggle);
  nav.appendChild(navLinks);

  const page = createEl("div", "page");

  // Build stacked sections
  const sectionsMap = {};
  const sectionEls = {};
  sectionIds.forEach((id) => {
    const section = createEl("section", "page-section page-section--" + id);
    section.id = id;
    // mark for scroll reveal animation
    section.dataset.reveal = "up";
    const innerMain = createEl("div", "main main--" + id);
    section.appendChild(innerMain);
    page.appendChild(section);
    sectionsMap[id] = innerMain;
    sectionEls[id] = section;
  });

  // Render content into each section
  renderHome(sectionsMap.home);
  renderAbout(sectionsMap.about);
  renderSkills(sectionsMap.skills);
  renderProjects(sectionsMap.projects);
  renderCertificates(sectionsMap.certificates);

  // Helper to set active nav item
  function setActiveNav(sectionId) {
    Array.from(navLinks.children).forEach((b) => {
      b.classList.toggle("is-active", b.dataset.section === sectionId);
    });
  }

  // Nav click scrolls to section
  Array.from(navLinks.children).forEach((btn) => {
    btn.addEventListener("click", () => {
      const sectionId = btn.dataset.section || "home";
      const target = sectionEls[sectionId];
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Close mobile nav after clicking a link
      if (window.innerWidth <= 880) {
        nav.classList.remove("nav--open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Toggle burger menu on small screens
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Ensure nav is reset when resizing back to desktop layout
  function handleResizeForNav() {
    if (window.innerWidth > 880 && nav.classList.contains("nav--open")) {
      nav.classList.remove("nav--open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  }
  window.addEventListener("resize", handleResizeForNav);

  // Update active nav based on scroll position (section closest to viewport center)
  function syncActiveNavWithScroll() {
    const centerY = window.scrollY + window.innerHeight / 2;
    let bestId = "home";
    let bestDist = Infinity;

    sectionIds.forEach((id) => {
      const el = sectionEls[id];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionCenter = rect.top + window.scrollY + rect.height / 2;
      const dist = Math.abs(sectionCenter - centerY);
      if (dist < bestDist) {
        bestDist = dist;
        bestId = id;
      }
    });

    setActiveNav(bestId);
  }

  window.addEventListener("scroll", syncActiveNavWithScroll, { passive: true });
  syncActiveNavWithScroll();

  shell.appendChild(nav);
  shell.appendChild(page);
  app.appendChild(shell);
}

// Simple scroll-based reveal animations (similar feel to Brix Studio)
function initScrollAnimations() {
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (!revealEls.length) return;

  // Fallback: if IntersectionObserver not supported, just show everything
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initNetworkBackground();
  initCursorLight();
  render();
  initScrollAnimations();
});

