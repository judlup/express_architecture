import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    "manifesto/index",
    {
      type: "category",
      label: "Express Architecture",
      items: ["express-architecture/index"],
    },
    {
      type: "category",
      label: "Fundamentos",
      items: ["fundamentals/index"],
    },
    {
      type: "category",
      label: "Guía de Implementación",
      items: ["implementation/index"],
    },
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
    {
      type: "category",
      label: "Investigación (DSR)",
      items: ["research-dsr/index"],
    },
    {
      type: "category",
      label: "Glosario y Changelog",
      items: ["glossary/index", "changelog/index"],
    },
    // 'mydoc', // Eliminado porque ya no existe
  ],
}

export default sidebars
