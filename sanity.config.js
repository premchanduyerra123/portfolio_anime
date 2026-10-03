import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes/index.js";

const portfolioStructure = (S) =>
  S.list()
    .title("Portfolio content")
    .items([
      S.listItem()
        .title("Profile")
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== "profile"),
    ]);

export default defineConfig({
  name: "portfolio",
  title: "Prem Chandu Portfolio",
  projectId: "fchi1qxx",
  dataset: "production",
  plugins: [structureTool({ structure: portfolioStructure }), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => schemaType !== "profile"),
  },
});
