import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    "manifesto/index",
    "faq",
    "contact",
    {
      type: "category",
      label: "Artefacts",
      items: [
        "artefacts/index",
        "artefacts/architectural-canvas/index",
        "artefacts/infrastructural-diagram/index",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/index"],
    },
    {
      type: "category",
      label: "Use Cases",
      items: ["use-cases/index"],
    },
    // 'mydoc', // Eliminado porque ya no existe
  ],
}

export default sidebars
