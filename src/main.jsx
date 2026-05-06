import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { animate, stagger, createTimeline } from "animejs";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Layers3,
  Mail,
  MapPin,
  Moon,
  Phone,
  Rocket,
  Server,
  Sparkles,
  Sun,
} from "lucide-react";
import portfolio from "./data/portfolio.json";
import "./styles.css";

const iconMap = {
  Frontend: Code2,
  "Frontend Stack": Code2,
  Backend: Server,
  "Backend Stack": Server,
  Databases: Database,
  "Core Capabilities": Sparkles,
  "Version Control": Github,
  Containerization: Layers3,
  Server: Server,
  Tools: Layers3,
  Languages: Mail,
  Interests: Sparkles,
  Other: Sparkles,
};

function calculateYearsExperience(startDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const now = new Date();
  const years = (now.getTime() - start.getTime()) / (365.2425 * 24 * 60 * 60 * 1000);
  return Math.max(0, years).toFixed(1);
}

function hydrateDynamicText(value, replacements) {
  if (typeof value !== "string") return value;
  return value.replace(/\{\{yearsExperience\}\}/g, replacements.yearsExperience);
}

function usePortfolioAnimations() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const animatedCards = root.querySelectorAll(".magnetic-card");

    createTimeline({ defaults: { ease: "outExpo" } })
      .add(".nav", { opacity: [0, 1], translateY: [-16, 0], duration: 800 })
      .add(".hero-copy > *", { opacity: [0, 1], translateY: [34, 0], duration: 950, delay: stagger(85) }, "-=450")
      .add(".orbit-card", { opacity: [0, 1], scale: [0.88, 1], rotate: [-3, 0], duration: 1100, delay: stagger(90) }, "-=650")
      .add(".metric", { opacity: [0, 1], translateY: [18, 0], duration: 700, delay: stagger(75) }, "-=550");

    animate(".orbital-ring", {
      rotate: "1turn",
      duration: 26000,
      loop: true,
      ease: "linear",
    });

    animate(".pulse-dot", {
      scale: [1, 1.8, 1],
      opacity: [0.95, 0.2, 0.95],
      duration: 2200,
      loop: true,
      delay: stagger(250),
      ease: "inOutSine",
    });

    animate(".float-shard", {
      translateY: ["0rem", "-2.2rem", "0rem"],
      translateX: ["0rem", "1.2rem", "0rem"],
      rotate: ["0deg", "18deg", "0deg"],
      duration: 5200,
      loop: true,
      delay: stagger(380),
      ease: "inOutSine",
    });

    animate(".code-stream span", {
      translateY: ["110vh", "-18vh"],
      opacity: [0, 0.45, 0],
      duration: 9000,
      loop: true,
      delay: stagger(620),
      ease: "linear",
    });

    animate(".profile-core", {
      translateY: ["-0.35rem", "0.35rem"],
      duration: 2800,
      loop: true,
      direction: "alternate",
      ease: "inOutSine",
    });

    animate(".orbit-card", {
      translateY: ["-0.35rem", "0.35rem"],
      duration: 2600,
      loop: true,
      direction: "alternate",
      delay: stagger(240),
      ease: "inOutSine",
    });

    createTimeline({ defaults: { ease: "outExpo" } })
      .add(".laptop-scene", { opacity: [0, 1], rotateX: [18, 0], rotateY: [-24, -10], translateY: [42, 0], duration: 1200 })
      .add(".screen-layer", { opacity: [0, 1], translateZ: [-90, 0], translateY: [22, 0], duration: 900, delay: stagger(85) }, "-=650")
      .add(".tech-cube", { opacity: [0, 1], scale: [0.2, 1], rotateX: [90, 0], rotateY: [-90, 0], duration: 950, delay: stagger(110) }, "-=620")
      .add(".laptop-key", { opacity: [0, 1], translateY: [8, 0], duration: 420, delay: stagger(12) }, "-=520");

    animate(".laptop-scene", {
      rotateY: ["-13deg", "13deg"],
      rotateX: ["4deg", "-3deg"],
      translateY: ["-0.5rem", "0.5rem"],
      duration: 6800,
      loop: true,
      direction: "alternate",
      ease: "inOutSine",
    });

    animate(".screen-layer", {
      translateZ: ["0px", "34px"],
      duration: 3200,
      loop: true,
      direction: "alternate",
      delay: stagger(260),
      ease: "inOutSine",
    });

    animate(".tech-cube", {
      rotateX: "1turn",
      rotateY: "1turn",
      translateY: ["-0.75rem", "0.75rem"],
      duration: 6200,
      loop: true,
      delay: stagger(420),
      ease: "inOutSine",
    });

    animate(".screen-line", {
      scaleX: [0.22, 1, 0.42],
      opacity: [0.35, 1, 0.55],
      duration: 2200,
      loop: true,
      delay: stagger(130),
      ease: "inOutSine",
    });

    animate(".screen-scan", {
      translateY: ["-120%", "320%"],
      opacity: [0, 0.85, 0],
      duration: 2800,
      loop: true,
      ease: "inOutQuad",
    });

    animate(".scene-ring", {
      rotate: "1turn",
      duration: 18000,
      loop: true,
      delay: stagger(900),
      ease: "linear",
    });

    animate(".planet-orbit", {
      rotate: "1turn",
      duration: (_, index) => 9000 + index * 3600,
      loop: true,
      delay: stagger(300),
      ease: "linear",
    });

    animate(".planet", {
      scale: [1, 1.18, 1],
      boxShadow: [
        "0 0 12px rgba(94, 234, 212, 0.2)",
        "0 0 26px rgba(94, 234, 212, 0.55)",
        "0 0 12px rgba(94, 234, 212, 0.2)",
      ],
      duration: 2400,
      loop: true,
      delay: stagger(260),
      ease: "inOutSine",
    });

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      animate(".scroll-progress", {
        scaleX: progress,
        duration: 220,
        ease: "outQuad",
      });
    };

    const hoverHandlers = [];
    animatedCards.forEach((card) => {
      const handleMove = (event) => {
        const bounds = card.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const rotateY = (x / bounds.width - 0.5) * 7;
        const rotateX = (0.5 - y / bounds.height) * 7;
        card.style.setProperty("--spot-x", `${x}px`);
        card.style.setProperty("--spot-y", `${y}px`);
        animate(card, {
          rotateX,
          rotateY,
          translateY: -8,
          duration: 360,
          ease: "outQuad",
        });
      };

      const handleLeave = () => {
        animate(card, {
          rotateX: 0,
          rotateY: 0,
          translateY: 0,
          duration: 520,
          ease: "outElastic(1, .6)",
        });
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
      hoverHandlers.push([card, handleMove, handleLeave]);
    });

    const chipHandlers = [];
    root.querySelectorAll(".chips span").forEach((chip) => {
      const handleEnter = () => {
        animate(chip, {
          scale: [1, 1.08, 1],
          translateY: [0, -3, 0],
          duration: 520,
          ease: "outElastic(1, .55)",
        });
      };
      chip.addEventListener("mouseenter", handleEnter);
      chipHandlers.push([chip, handleEnter]);
    });

    const heroVisual = root.querySelector(".hero-visual");
    const laptopScene = root.querySelector(".laptop-scene");
    const handleHeroMove = (event) => {
      if (!heroVisual || !laptopScene) return;
      const bounds = heroVisual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      animate(laptopScene, {
        rotateY: x * 24,
        rotateX: -y * 12,
        duration: 420,
        ease: "outQuad",
      });
      root.querySelectorAll(".tech-cube").forEach((cube, index) => {
        animate(cube, {
          translateX: x * (18 + index * 6),
          translateY: y * (14 + index * 4),
          duration: 520,
          ease: "outQuad",
        });
      });
    };

    const handleHeroLeave = () => {
      if (!laptopScene) return;
      animate(laptopScene, {
        rotateY: 0,
        rotateX: 0,
        duration: 720,
        ease: "outElastic(1, .65)",
      });
    };

    heroVisual?.addEventListener("mousemove", handleHeroMove);
    heroVisual?.addEventListener("mouseleave", handleHeroLeave);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(entry.target.querySelectorAll(".reveal-item"), {
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.98, 1],
            duration: 760,
            delay: stagger(70),
            ease: "outExpo",
          });
          animate(entry.target.querySelectorAll(".section-head h2"), {
            backgroundPosition: ["100% 50%", "0% 50%"],
            duration: 1200,
            ease: "outExpo",
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    root.querySelectorAll(".reveal-section").forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      hoverHandlers.forEach(([card, handleMove, handleLeave]) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
      chipHandlers.forEach(([chip, handleEnter]) => chip.removeEventListener("mouseenter", handleEnter));
      heroVisual?.removeEventListener("mousemove", handleHeroMove);
      heroVisual?.removeEventListener("mouseleave", handleHeroLeave);
    };
  }, []);

  return rootRef;
}

function App() {
  const rootRef = usePortfolioAnimations();
  const { personal, contactItems, summary, metrics, skills, experience, projects, education, languages, hobbies } = portfolio;
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);
  const yearsExperience = calculateYearsExperience(personal.experienceStartDate);
  const dynamicPersonal = { ...personal, yearsExperience: `${yearsExperience}+` };
  const dynamicSummary = hydrateDynamicText(summary, { yearsExperience });
  const dynamicMetrics = metrics.map((metric) => ({
    ...metric,
    value: hydrateDynamicText(metric.value, { yearsExperience }),
  }));

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Show loader for exactly 3s, then fade out over 0.5s, then reveal portfolio
    const fadeTimer = window.setTimeout(() => setIsFading(true), 3000);
    const hideTimer = window.setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 3500);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  // Animate portfolio entrance after loader exits
  useEffect(() => {
    if (!isVisible) return;
    const tl = createTimeline({ defaults: { ease: "outExpo" } });
    tl
      // Whole page slides up from slightly below
      .add("main", {
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 700,
        ease: "outExpo",
      })
      // Nav bar drops in
      .add(".nav", {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 600,
      }, 100)
      // Hero text lines cascade up
      .add(".hero-copy > *", {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        delay: stagger(70),
      }, 250)
      // Hero visual scales in
      .add(".hero-visual", {
        opacity: [0, 1],
        scale: [0.92, 1],
        duration: 900,
        ease: "outBack(1.2)",
      }, 300)
      // Metrics count up from below
      .add(".metric", {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 600,
        delay: stagger(60),
      }, 500);
  }, [isVisible]);

  return (
    <>
      {isLoading && <Loader personal={dynamicPersonal} fading={isFading} />}
      <main ref={rootRef} data-theme={theme} style={{ opacity: 0 }}>
        <div className="scroll-progress" aria-hidden="true" />
        <AmbientMotion />
      <SocialBar personal={dynamicPersonal} />
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Home">
          <span>{dynamicPersonal.initials}</span>
          {dynamicPersonal.name}
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" type="button" onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <h1>{dynamicPersonal.heroHeadline}</h1>
          <p className="summary">{dynamicSummary}</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              <Rocket size={18} />
              View Projects
            </a>
            <a className="ghost-btn strong" href={`mailto:${dynamicPersonal.email}`}>
              <Mail size={18} />
              Contact Me
            </a>
            <a className="ghost-btn" href={dynamicPersonal.resumeFile} target="_blank" rel="noreferrer">
              <Download size={18} />
              Resume
            </a>
          </div>
          <div className="contact-strip">
            <span><MapPin size={16} />{dynamicPersonal.location}</span>
            <span><Phone size={16} />{dynamicPersonal.phone}</span>
            <span><Mail size={16} />{dynamicPersonal.email}</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <LaptopScene skills={skills.slice(0, 4)} personal={dynamicPersonal} />
        </div>
      </section>

      <section className="metrics" aria-label="Career highlights">
        {dynamicMetrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <Section id="skills" eyebrow="Technical Stack" title="Built across frontend, backend, data, and delivery.">
        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = iconMap[group.category] || Sparkles;
            return (
              <article className="skill-card reveal-item magnetic-card" key={group.category}>
                <div className="skill-head">
                  <Icon size={22} />
                  <h3>{group.category}</h3>
                </div>
                <div className="chips">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="work" eyebrow="Work Experience" title="Recent roles and responsibilities.">
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item reveal-item magnetic-card" key={`${job.company}-${job.role}`}>
              <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
              <div>
                <div className="item-topline">
                  <h3>{job.company}</h3>
                  <span>{job.period}</span>
                </div>
                <p className="role">{job.role}</p>
                {job.description && <p className="job-description">{job.description}</p>}
                <ul>
                  {job.highlights.slice(0, 4).map((point) => <li key={point}>{point}</li>)}
                </ul>
                {job.tags?.length > 0 && (
                  <div className="chips compact">
                    {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {featuredProject && (
        <Section id="featured" eyebrow="Featured Project" title="WelHire leads the portfolio because it shows current enterprise impact.">
          <FeaturedProject project={featuredProject} />
        </Section>
      )}

      <Section id="projects" eyebrow="Featured Projects" title="Business platforms shipped with Java, React, and Spring.">
        <div className="project-grid">
          {otherProjects.map((project) => (
            <article className="project-card reveal-item magnetic-card" key={project.name}>
              <div className="project-card-top">
                <div className="project-icon"><Rocket size={22} /></div>
                <span className="project-label">{project.label}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chips compact">
                {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <p className="impact">{project.impact}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Education & More" title="Foundation, certifications, languages, and interests.">
        <div className="info-grid">
          <InfoPanel icon={GraduationCap} title="Education" items={education.map((item) => `${item.degree} - ${item.institution} (${item.period}) ${item.score ? item.score : ""}`)} />
          <InfoPanel icon={Mail} title="Languages" items={languages} />
          <InfoPanel icon={Sparkles} title="Hobbies" items={hobbies} />
        </div>
      </Section>

      <footer id="contact" className="footer reveal-section">
        <div className="reveal-item">
          <span className="eyebrow">Contact</span>
          <h2>Let's build polished web platforms.</h2>
          <p>{dynamicPersonal.email} - {dynamicPersonal.phone}</p>
        </div>
        <a className="primary-btn reveal-item" href={`mailto:${dynamicPersonal.email}`}>
          <ArrowUpRight size={18} />
          Start Conversation
        </a>
        <ContactCards items={contactItems} />
      </footer>
    </main>
    </>
  );
}

function ContactCards({ items = [] }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (item) => {
    await navigator.clipboard.writeText(item.label);
    setCopiedId(item.id);
    window.setTimeout(() => setCopiedId(null), 1400);
  };

  return (
    <div className="contact-cards reveal-item">
      {items.map((item) => {
        const Icon = item.type === "phone" ? Phone : item.type === "email" ? Mail : item.type === "linkedin" ? Linkedin : Github;
        return (
          <article className="contact-card magnetic-card" key={item.id}>
            <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} aria-label={item.title}>
              <Icon size={20} />
              <span>{item.title}</span>
              <strong>{item.label}</strong>
            </a>
            {item.copyToClipboardButton && (
              <button type="button" onClick={() => handleCopy(item)} aria-label={`Copy ${item.title}`}>
                {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
              </button>
            )}
          </article>
        );
      })}
    </div>
  );
}

function SocialBar({ personal }) {
  const links = [
    { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
    { label: "Phone", href: `tel:${personal.phone.replace(/\s/g, "")}`, icon: Phone },
    personal.socials?.github ? { label: "GitHub", href: personal.socials.github, icon: Github } : null,
    personal.socials?.linkedin ? { label: "LinkedIn", href: personal.socials.linkedin, icon: Linkedin } : null,
  ].filter(Boolean);

  return (
    <aside className="social-bar" aria-label="Quick contact links">
      {links.map(({ label, href, icon: Icon }) => (
        <a href={href} key={label} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
          <Icon size={18} />
        </a>
      ))}
    </aside>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="featured-project reveal-item magnetic-card">
      <div className="featured-copy">
        <span className="project-label">{project.label}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p className="impact">{project.impact}</p>
      </div>
      <div className="featured-panel" aria-hidden="true">
        <div className="featured-orbit" />
        <Rocket size={42} />
        <span>AI scoring</span>
        <span>CV parsing</span>
        <span>Scheduling</span>
      </div>
      <div className="chips compact">
        {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
    </article>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section reveal-section">
      <div className="section-head reveal-item">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function InfoPanel({ icon: Icon, title, items }) {
  return (
    <article className="info-panel reveal-item magnetic-card">
      <div className="skill-head">
        <Icon size={22} />
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

function LaptopScene({ skills, personal }) {
  const keys = ["J", "A", "V", "A", "R", "E", "A", "C", "T", "S", "Q", "L", "A", "P", "I", "{", "}", "/", ">", "_"];
  const layers = [
    { label: "React UI", value: "Atomic Components", tone: "mint" },
    { label: "Spring APIs", value: "Secure Microservices", tone: "gold" },
    { label: "Data Layer", value: "PostgreSQL + MongoDB", tone: "coral" },
  ];

  return (
    <div className="laptop-stage">
      <div className="laptop-scene">
        <div className="laptop-screen">
          <div className="screen-bezel">
            <div className="screen-scan" />
            <div className="screen-topbar">
              <span />
              <span />
              <span />
              <strong>{personal.initials}.dev</strong>
            </div>
            <div className="screen-grid">
              <div className="screen-profile">
                <span>{personal.initials}</span>
                <strong>{personal.yearsExperience}</strong>
                <small>Years</small>
              </div>
              <div className="screen-code">
                <i className="screen-line line-wide" />
                <i className="screen-line" />
                <i className="screen-line line-short" />
                <i className="screen-line line-mid" />
              </div>
            </div>
            {layers.map((layer, index) => (
              <div className={`screen-layer layer-${index + 1} ${layer.tone}`} key={layer.label}>
                <span>{layer.label}</span>
                <strong>{layer.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="laptop-hinge" />
        <div className="laptop-base">
          <div className="keyboard">
            {keys.map((key, index) => <span className="laptop-key" key={`${key}-${index}`}>{key}</span>)}
          </div>
          <div className="trackpad" />
        </div>
      </div>

      {skills.map((skill, index) => (
        <div className={`tech-cube cube-${index + 1}`} key={skill.category}>
          <span>{skill.category}</span>
        </div>
      ))}
      <span className="scene-ring ring-one" />
      <div className="solar-system">
        <span className="planet-orbit orbit-path-one"><i className="planet planet-one" /></span>
        <span className="planet-orbit orbit-path-two"><i className="planet planet-two" /></span>
      </div>
    </div>
  );
}

function AmbientMotion() {
  const symbols = ["React", "Spring", "JWT", "API", "SQL", "Docker", "MUI", "Java"];

  return (
    <div className="ambient" aria-hidden="true">
      <span className="float-shard shard-one" />
      <span className="float-shard shard-two" />
      <span className="float-shard shard-three" />
      <span className="float-shard shard-four" />
      <div className="code-stream">
        {symbols.map((symbol) => <span key={symbol}>{symbol}</span>)}
      </div>
    </div>
  );
}

function Loader({ personal, fading }) {
  const loaderRef = useRef(null);

  // Portfolio palette
  const MINT  = "#5eead4";
  const CORAL = "#fb7185";
  const GOLD  = "#facc15";
  const BLUE  = "#60a5fa";

  const SIZE    = 420;
  const CX      = SIZE / 2;
  const CY      = SIZE / 2;
  const R_OUTER = 188;
  const R_TICK  = 174;
  const R_INNER = 156;

  // Arc segments using portfolio colors
  const arcSegments = [
    { color: MINT,  start: 195, end: 268 },
    { color: GOLD,  start: 270, end: 343 },
    { color: CORAL, start: 345, end: 58  },
    { color: BLUE,  start: 60,  end: 118 },
    { color: MINT,  start: 120, end: 163 },
  ];

  function polarToXY(cx, cy, r, deg) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(cx, cy, r, startDeg, endDeg) {
    let s = startDeg, e = endDeg;
    if (e < s) e += 360;
    const large = e - s > 180 ? 1 : 0;
    const p1 = polarToXY(cx, cy, r, s);
    const p2 = polarToXY(cx, cy, r, e);
    return `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${large} 1 ${p2.x} ${p2.y}`;
  }

  function arcLength(r, startDeg, endDeg) {
    let s = startDeg, e = endDeg;
    if (e < s) e += 360;
    return ((e - s) / 360) * 2 * Math.PI * r;
  }

  // Tick marks
  const ticks = Array.from({ length: 120 }, (_, i) => {
    const deg = (i / 120) * 360;
    const isMajor = i % 10 === 0;
    const r1 = R_OUTER - 2;
    const r2 = isMajor ? R_TICK - 6 : R_TICK;
    const p1 = polarToXY(CX, CY, r1, deg);
    const p2 = polarToXY(CX, CY, r2, deg);
    return { p1, p2, isMajor };
  });

  // Diamond scan lines
  const DIAMOND_W = 128;
  const DIAMOND_H = 158;
  const diamondLines = Array.from({ length: 40 }, (_, i) => {
    const t = i / 39;
    const y = CY - DIAMOND_H / 2 + t * DIAMOND_H;
    const halfW = (DIAMOND_W / 2) * (1 - Math.abs(t * 2 - 1));
    return { x1: CX - halfW, x2: CX + halfW, y };
  });

  // Easing curve dots — inOutExpo shape
  const easingDots = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    const ease = t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
    return {
      x: CX - 88 + t * 196,
      y: CY + 88 - ease * 196,
    };
  });

  // Concentric trail arcs (bottom-right)
  const trailArcs = [
    { r: 98,  start: 28, end: 102 },
    { r: 113, start: 22, end: 96  },
    { r: 128, start: 16, end: 90  },
    { r: 143, start: 10, end: 84  },
  ];

  // ── anime.js animations ──────────────────────────────────────────────────
  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;

    // 1. Outer ring arcs draw in with accelerate (inExpo) — feels like engine revving
    animate(el.querySelectorAll(".hud-ring-progress"), {
      strokeDashoffset: (node) => {
        const total = parseFloat(node.getAttribute("data-total") || 0);
        return [total, 0];
      },
      duration: 2200,
      delay: stagger(120, { easing: "inExpo" }), // accelerating stagger
      ease: "inOutExpo",
    });

    // 2. Tick marks flash in with accelerating stagger
    animate(el.querySelectorAll(".hud-tick"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      duration: 600,
      delay: stagger(8, { easing: "inExpo" }),
      ease: "outExpo",
    });

    // 3. Diamond lines sweep in from center — accelerate outward
    animate(el.querySelectorAll(".hud-diamond-line"), {
      scaleX: [0, 1],
      opacity: [0, 0.9],
      duration: 900,
      delay: stagger(28, { from: "center", easing: "inExpo" }),
      ease: "outExpo",
    });

    // 4. Easing curve dots pop in with accelerating stagger
    animate(el.querySelectorAll(".hud-dot"), {
      opacity: [0, 1],
      scale: [0, 1],
      duration: 500,
      delay: stagger(55, { easing: "inExpo" }),
      ease: "outBack(2.2)",
    });

    // 5. Trail arcs draw in
    animate(el.querySelectorAll(".hud-arc"), {
      strokeDashoffset: (node) => {
        const total = parseFloat(node.getAttribute("data-total") || 0);
        return [total, 0];
      },
      opacity: [0, 0.65],
      duration: 800,
      delay: stagger(100),
      ease: "outExpo",
    });

    // 6. Center initials fade up
    createTimeline({ defaults: { ease: "outExpo" } })
      .add(el.querySelectorAll(".hud-initials"), {
        opacity: [0, 1],
        scale: [0.6, 1],
        duration: 700,
      }, 300);

    // 7. Pulse glow on the ring — breathes with inOutSine
    animate(el.querySelectorAll(".hud-ring-progress"), {
      opacity: [1, 0.6, 1],
      duration: 1200,
      delay: stagger(80),
      loop: true,
      ease: "inOutSine",
    });
  }, []);

  return (
    <div
      className="loader-wrapper"
      ref={loaderRef}
      aria-hidden="true"
      style={{ opacity: fading ? 0 : 1, transition: "opacity 0.5s ease" }}
    >
      <div className="loader-hud">
        <svg
          className="hud-svg"
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base circle */}
          <circle cx={CX} cy={CY} r={R_OUTER} fill="#0a0f18" />
          <circle cx={CX} cy={CY} r={R_OUTER} fill="url(#hudGrad)" />

          {/* Tick marks */}
          {ticks.map((t, i) => (
            <line
              key={i}
              className="hud-tick"
              x1={t.p1.x} y1={t.p1.y}
              x2={t.p2.x} y2={t.p2.y}
              stroke={t.isMajor ? `${MINT}66` : `${MINT}28`}
              strokeWidth={t.isMajor ? 1.5 : 0.7}
              opacity={0}
              style={{ transformOrigin: `${t.p1.x}px ${t.p1.y}px` }}
            />
          ))}

          {/* Ring base track */}
          <circle
            cx={CX} cy={CY} r={R_OUTER - 6}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={10}
            fill="none"
          />

          {/* Colored arc segments */}
          {arcSegments.map((seg, i) => {
            const d   = arcPath(CX, CY, R_OUTER - 6, seg.start, seg.end);
            const len = arcLength(R_OUTER - 6, seg.start, seg.end);
            return (
              <path
                key={i}
                className="hud-ring-progress"
                d={d}
                stroke={seg.color}
                strokeWidth={10}
                strokeLinecap="round"
                strokeDasharray={len}
                strokeDashoffset={len}
                data-total={len}
                style={{ filter: `drop-shadow(0 0 8px ${seg.color}aa)` }}
              />
            );
          })}

          {/* Inner circle */}
          <circle cx={CX} cy={CY} r={R_INNER} fill="#0a0f18" />
          <circle cx={CX} cy={CY} r={R_INNER} fill="url(#innerGrad)" />

          {/* Diamond scan lines */}
          {diamondLines.map((l, i) => (
            <line
              key={i}
              className="hud-diamond-line"
              x1={l.x1} y1={l.y} x2={l.x2} y2={l.y}
              stroke={CORAL}
              strokeWidth={1.1}
              opacity={0}
              style={{ transformOrigin: `${CX}px ${l.y}px` }}
            />
          ))}

          {/* Diamond outline */}
          <polygon
            points={`${CX},${CY - DIAMOND_H / 2} ${CX + DIAMOND_W / 2},${CY} ${CX},${CY + DIAMOND_H / 2} ${CX - DIAMOND_W / 2},${CY}`}
            stroke={CORAL}
            strokeWidth={1.5}
            fill="none"
            opacity={0.5}
          />

          {/* Easing curve dots */}
          {easingDots.map((d, i) => (
            <circle
              key={i}
              className="hud-dot"
              cx={d.x} cy={d.y}
              r={i === 0 || i === easingDots.length - 1 ? 5 : 3.2}
              fill={CORAL}
              opacity={0}
            />
          ))}

          {/* Concentric trail arcs */}
          {trailArcs.map((arc, i) => {
            const d   = arcPath(CX, CY, arc.r, arc.start, arc.end);
            const len = arcLength(arc.r, arc.start, arc.end);
            return (
              <path
                key={i}
                className="hud-arc"
                d={d}
                stroke={GOLD}
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeDasharray={len}
                strokeDashoffset={len}
                data-total={len}
                opacity={0}
              />
            );
          })}

          <defs>
            <radialGradient id="hudGrad" cx="38%" cy="32%" r="68%">
              <stop offset="0%"   stopColor="#5eead4" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#0a0f18" stopOpacity="1"    />
            </radialGradient>
            <radialGradient id="innerGrad" cx="38%" cy="32%" r="68%">
              <stop offset="0%"   stopColor="#fb7185" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#0a0f18" stopOpacity="1"    />
            </radialGradient>
          </defs>
        </svg>

        {/* Center label — counter-rotates so text stays upright */}
        <div className="hud-center-label">
          <span className="hud-initials" style={{ opacity: 0 }}>{personal.initials}</span>
          <LoaderCaption />
        </div>
      </div>
    </div>
  );
}

function LoaderCaption() {
  const captions = [
    "Compiling genius...",
    "Bribing the servers 💸",
    "Turning coffee → code ☕",
    "git push --force 😈",
    "Almost hired already 🚀",
    "Stack Overflow is open 🤫",
    "Deleting node_modules...",
    "It works on my machine 🤷",
    "sudo make me a portfolio",
    "404: Sleep not found 😴",
  ];

  // Pick one random caption on mount — never changes
  const caption = useRef(captions[Math.floor(Math.random() * captions.length)]).current;
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    animate(el, { opacity: [0, 1], translateY: [12, 0], duration: 600, ease: "outExpo" });
  }, []);

  return (
    <span ref={spanRef} className="hud-subtitle" style={{ opacity: 0 }}>
      {caption}
    </span>
  );
}

createRoot(document.getElementById("root")).render(<App />);
