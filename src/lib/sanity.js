import { createClient } from "@sanity/client";
import fallbackPortfolio from "../data/portfolio.json";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "fchi1qxx",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2026-03-01",
  useCdn: false,
});

const portfolioQuery = `{
  "profile": *[_type == "profile" && _id == "profile"][0]{
    name,
    initials,
    title,
    heroHeadline,
    availability,
    experienceStartDate,
    location,
    email,
    phone,
    "resumeFile": coalesce(resume.asset->url, resumeFile),
    github,
    linkedin,
    summary,
    contactItems[]{id, title, label, href, copyToClipboardButton, type},
    metrics[]{value, label},
    languages,
    hobbies
  },
  "skills": *[_type == "skillGroup"] | order(displayOrder asc){category, items},
  "experience": *[_type == "experience"] | order(displayOrder asc){company, role, period, location, description, highlights, tags},
  "projects": *[_type == "project"] | order(displayOrder asc){name, label, technologies, description, impact},
  "education": *[_type == "education"] | order(displayOrder asc){degree, institution, period, score}
}`;

function populated(value) {
  return Array.isArray(value) && value.length > 0;
}

function normalizePortfolio(result) {
  if (!result?.profile?.name) return fallbackPortfolio;

  const { profile } = result;
  const personal = {
    ...fallbackPortfolio.personal,
    name: profile.name ?? fallbackPortfolio.personal.name,
    initials: profile.initials ?? fallbackPortfolio.personal.initials,
    title: profile.title ?? fallbackPortfolio.personal.title,
    heroHeadline: profile.heroHeadline ?? fallbackPortfolio.personal.heroHeadline,
    availability: profile.availability ?? fallbackPortfolio.personal.availability,
    experienceStartDate: profile.experienceStartDate ?? fallbackPortfolio.personal.experienceStartDate,
    location: profile.location ?? fallbackPortfolio.personal.location,
    email: profile.email ?? fallbackPortfolio.personal.email,
    phone: profile.phone ?? fallbackPortfolio.personal.phone,
    resumeFile: profile.resumeFile ?? fallbackPortfolio.personal.resumeFile,
    socials: {
      github: profile.github ?? fallbackPortfolio.personal.socials.github,
      linkedin: profile.linkedin ?? fallbackPortfolio.personal.socials.linkedin,
    },
  };

  return {
    ...fallbackPortfolio,
    personal,
    summary: profile.summary ?? fallbackPortfolio.summary,
    contactItems: populated(profile.contactItems) ? profile.contactItems : fallbackPortfolio.contactItems,
    metrics: populated(profile.metrics) ? profile.metrics : fallbackPortfolio.metrics,
    skills: populated(result.skills) ? result.skills : fallbackPortfolio.skills,
    experience: populated(result.experience) ? result.experience : fallbackPortfolio.experience,
    projects: populated(result.projects) ? result.projects : fallbackPortfolio.projects,
    education: populated(result.education) ? result.education : fallbackPortfolio.education,
    languages: populated(profile.languages) ? profile.languages : fallbackPortfolio.languages,
    hobbies: populated(profile.hobbies) ? profile.hobbies : fallbackPortfolio.hobbies,
  };
}

export async function fetchPortfolio() {
  const result = await client.fetch(portfolioQuery);
  return normalizePortfolio(result);
}
