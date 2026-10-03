import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Project name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "label", title: "Project category", type: "string" }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "description", title: "Description", type: "text", rows: 7, validation: (rule) => rule.required() }),
    defineField({ name: "impact", title: "Impact", type: "text", rows: 3 }),
    defineField({ name: "displayOrder", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(1) }),
  ],
  orderings: [{ title: "Portfolio order", name: "portfolioOrder", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "label" } },
});

