import { defineConfig } from "fumapress/config";

export default defineConfig({
  content: {
    projects: [
      {
        name: "docs",
        dir: "content/docs",
      },
    ],
  },
});
