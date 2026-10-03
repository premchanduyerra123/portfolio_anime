import { defineArrayMember, defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "initials", title: "Initials", type: "string", validation: (rule) => rule.required().max(4) }),
    defineField({ name: "title", title: "Professional title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "availability", title: "Availability label", type: "string" }),
    defineField({ name: "experienceStartDate", title: "Career start date", type: "date", validation: (rule) => rule.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "email", title: "Email", type: "email", validation: (rule) => rule.required() }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({
      name: "resume",
      title: "Resume PDF",
      description: "Upload the PDF opened by the Resume button on the portfolio.",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "resumeFile",
      title: "Legacy resume path",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "summary", title: "Professional summary", type: "text", rows: 7 }),
    defineField({
      name: "contactItems",
      title: "Contact links",
      type: "array",
      of: [
        defineArrayMember({
          name: "contactItem",
          title: "Contact link",
          type: "object",
          fields: [
            defineField({ name: "id", title: "Order", type: "number", validation: (rule) => rule.required().integer().positive() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "label", title: "Display label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "href", title: "Link", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              options: { list: ["phone", "email", "linkedin", "github"] },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "copyToClipboardButton", title: "Show copy button", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "title", subtitle: "label" } },
        }),
      ],
    }),
    defineField({
      name: "metrics",
      title: "Career highlights",
      type: "array",
      of: [
        defineArrayMember({
          name: "metric",
          title: "Highlight",
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "label", title: "Description", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    defineField({ name: "languages", title: "Languages", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "hobbies", title: "Hobbies", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "name", subtitle: "title" } },
});
