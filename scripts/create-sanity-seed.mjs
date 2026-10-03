import { mkdir, readFile, writeFile } from "node:fs/promises";

const portfolio = JSON.parse(await readFile(new URL("../src/data/portfolio.json", import.meta.url), "utf8"));

const keyedObjects = (items, prefix) =>
  items.map((item, index) => ({ ...item, _key: `${prefix}-${index + 1}` }));

const profile = {
  _id: "profile",
  _type: "profile",
  ...portfolio.personal,
  github: portfolio.personal.socials.github,
  linkedin: portfolio.personal.socials.linkedin,
  socials: undefined,
  summary: portfolio.summary,
  contactItems: keyedObjects(portfolio.contactItems, "contact"),
  metrics: keyedObjects(portfolio.metrics, "metric"),
  languages: portfolio.languages,
  hobbies: portfolio.hobbies,
};

const documents = [
  profile,
  ...portfolio.skills.map((item, index) => ({
    _id: `skill-group-${index + 1}`,
    _type: "skillGroup",
    ...item,
    displayOrder: index + 1,
  })),
  ...portfolio.experience.map((item, index) => ({
    _id: `experience-${index + 1}`,
    _type: "experience",
    ...item,
    displayOrder: index + 1,
  })),
  ...portfolio.projects.map((item, index) => ({
    _id: `project-${index + 1}`,
    _type: "project",
    ...item,
    displayOrder: index + 1,
  })),
  ...portfolio.education.map((item, index) => ({
    _id: `education-${index + 1}`,
    _type: "education",
    ...item,
    displayOrder: index + 1,
  })),
];

await mkdir(new URL("../sanity", import.meta.url), { recursive: true });
await writeFile(
  new URL("../sanity/seed.ndjson", import.meta.url),
  `${documents.map((document) => JSON.stringify(document)).join("\n")}\n`,
);

console.log(`Created sanity/seed.ndjson with ${documents.length} documents.`);

