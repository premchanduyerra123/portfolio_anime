import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { animate, stagger, createTimeline } from "animejs";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
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
  Trophy,
} from "lucide-react";
import portfolio from "./data/portfolio.json";
import "./styles.css";

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  "Version Control": Github,
  Containerization: Layers3,
  Server: Server,
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
  const { personal, summary, metrics, skills, experience, projects, education, certifications, languages, hobbies } = portfolio;
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
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

  return (
    <main ref={rootRef} data-theme={theme}>
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
                <ul>
                  {job.highlights.slice(0, 4).map((point) => <li key={point}>{point}</li>)}
                </ul>
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
          <InfoPanel icon={Trophy} title="Certifications" items={certifications} />
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
      </footer>
    </main>
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

createRoot(document.getElementById("root")).render(<App />);
