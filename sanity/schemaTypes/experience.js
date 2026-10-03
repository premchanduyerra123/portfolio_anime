import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({ name: "company", title: "Company", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "period", title: "Period", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 6 }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "tags", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "displayOrder", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(1) }),
  ],
  orderings: [{ title: "Portfolio order", name: "portfolioOrder", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "company", subtitle: "role" } },
});

