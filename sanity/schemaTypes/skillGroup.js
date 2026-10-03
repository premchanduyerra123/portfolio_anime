import { defineField, defineType } from "sanity";

export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  fields: [
    defineField({ name: "category", title: "Category", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "items", title: "Skills", type: "array", of: [{ type: "string" }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: "displayOrder", title: "Display order", type: "number", validation: (rule) => rule.required().integer().min(1) }),
  ],
  orderings: [{ title: "Portfolio order", name: "portfolioOrder", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "category", skills: "items" }, prepare: ({ title, skills }) => ({ title, subtitle: `${skills?.length || 0} skills` }) },
});

