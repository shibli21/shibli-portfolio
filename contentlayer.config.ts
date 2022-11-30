import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Projects = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    description: { type: "string", required: false, defaultValue: null },
    featured: {
      type: "boolean",
      required: false,
      defaultValue: false,
    },
    github: {
      type: "string",
      required: false,
    },
    tech: {
      type: "list",
      required: false,
      of: { type: "string", required: true },
    },

    external: {
      type: "string",
      required: false,
      defaultValue: null,
    },
    image: { type: "string", required: true },
    order: { type: "number", required: true },
  },

  computedFields,
}));

export default makeSource({
  documentTypes: [Projects],
  contentDirPath: "data",
});
