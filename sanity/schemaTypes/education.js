import { defineField, defineType } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "degree", title: "Degree or qualification", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "institution", title: "Institution", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "period", title: "Period", type: "string" }),
    defineField({ name: "score", title: "Score", type: "string" }),
    defineField({ name: "displayOrder", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(1) }),
  ],
  orderings: [{ title: "Portfolio order", name: "portfolioOrder", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "degree", subtitle: "institution" } },
});

