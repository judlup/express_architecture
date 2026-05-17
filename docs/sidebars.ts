import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "index",
    "manifesto/index",
    {
      type: "category",
      label: "Express Architecture",
      items: ["express-architecture/index"],
    },
    {
      type: "category",
      label: "Fundamentos",
      items: [
        "fundamentos/index",
        "fundamentos/que-es-express-architecture",
        "fundamentos/informacion-minima-suficiente",
      ],
    },
    {
      type: "category",
      label: "Guía de Implementación",
      items: [
        "guia-implementacion/index",
        {
          type: "category",
          label: "Pasos",
          items: [
            "guia-implementacion/antes-de-empezar",
            "guia-implementacion/flujo-general",
            "guia-implementacion/captura-estructurada",
            "guia-implementacion/seleccion-del-artefacto",
            "guia-implementacion/construccion-del-artefacto",
            "guia-implementacion/validacion",
            "guia-implementacion/checklist",
          ],
        },
      ],
    },
    "faq",
    "contact",
    {
      type: "category",
      label: "Artefactos",
      items: [
        "artefactos/index",
        "artefactos/catalogo-variables",
        "artefactos/mapa-actores",
        "artefactos/mapa-procesos",
        "artefactos/swimlane-bpmn-simplificado",
        "artefactos/matriz-proceso-sistema",
        "artefactos/matriz-proceso-herramienta",
        "artefactos/mapa-dependencias",
        "artefactos/business-capability-canvas",
        "artefactos/solution-architecture-canvas",
        "artefactos/enterprise-architecture-canvas",
        "artefactos/infrastructure-canvas",
        "artefactos/dashboard-operativo",
        "artefactos/scorecard-tablero-ejecutivo",
        "artefactos/matriz-priorizacion",
        "artefactos/mini-adr",
        "artefactos/architectural-canvas/index",
        "artefactos/infrastructural-diagram/index",
      ],
    },
    {
      type: "category",
      label: "Guía rápida",
      items: ["getting-started/index"],
    },
    {
      type: "category",
      label: "Casos de uso",
      items: ["casos-de-uso/index"],
    },
    {
      type: "category",
      label: "Investigación (DSR)",
      items: [
        "investigacion-dsr/vision-general",
        "investigacion-dsr/design-science-research",
        "investigacion-dsr/revision-sistematica-literatura",
        "investigacion-dsr/gap-identificado",
        "investigacion-dsr/metodologia-investigacion",
        "investigacion-dsr/fases-investigacion",
        "investigacion-dsr/criterios-evaluacion",
        "investigacion-dsr/victorias-tempranas",
      ],
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
