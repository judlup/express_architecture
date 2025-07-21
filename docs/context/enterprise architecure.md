# Enterprise Architecture

BCM : Business Capability Map

[Business Capability Canvas](https://www.notion.so/Business-Capability-Canvas-209cb202af1c80729755ed2a9e5e17a0?pvs=21)

EAM : Enterprise Architecture Map

[Enterprise Architecture Canvas](https://www.notion.so/Enterprise-Architecture-Canvas-209cb202af1c80739027e6538cc699a8?pvs=21)

### Pasos para generar el BCM y el EAM

- Decide si será para toda la empresa, una unidad de negocio específica o una región.
- Ejecutivos, líderes de áreas, responsables de procesos, arquitectos de soluciones y técnicos.
- Utiliza sesiones de trabajo (workshops) colaborativas.
- Identifica sistemas (CRM, ERP, HRIS, etc.) que apoyan cada capacidad.
- Documenta qué software se utiliza para qué capacidades específicas.
- Diagramas claros que muestren interacciones (APIs, conexiones manuales, automatizaciones).
- Utiliza diagramas simples como cajas y flechas que indiquen flujos principales.
- Vincula cada capacidad con los procesos de negocio específicos (utiliza BPMN o similares para procesos).
- Documenta cómo la ejecución de estos procesos habilita o apoya cada capacidad.

### **Clasifica estado actual vs deseado (Gap Analysis):**

- Indica qué capacidades existen, cuáles faltan o deben fortalecerse.
- Establece prioridades para el desarrollo de capacidades faltantes.

## Mapa de Capacidades empresariales (Business capability map)

Lo que se busca luego de generar los diagramas es tener un mapa de capacidades empresariales, que es el "qué", agrupado en categorías:

- **Nivel 1:** Capacidades estratégicas (pocas, esenciales, alineadas con objetivos empresariales).
- **Nivel 2:** Capacidades tácticas (agrupan capacidades operativas, más detalladas).
- **Nivel 3:** Capacidades operativas (más específicas, claramente ejecutables).

```jsx
Ventas y Marketing (Estratégico)
└── Gestión de Clientes (Táctico)
    ├── Gestión de Relación con el Cliente (Operativo)
    └── Soporte Postventa (Operativo)
```

## Mapa de arquitectura empresarial (Enterprise architecture mapping)

Luego de los diagramas se debe hacer  un Mapa de arquitectura empresarial, que es el "cómo", este último se basa en el mapa de capacidades empresariales para especificar los procesos, software y manera en que se comunican.

| Capacidad Estratégica | Área Asociada    | Software   | Procesos Principales              | Comunicación                       |
| --------------------- | ---------------- | ---------- | --------------------------------- | ---------------------------------- |
| Gestión Financiera    | Finanzas         | SAP        | Gestión Contable, Presupuestos    | API interna, integración bancaria  |
| Gestión Comercial     | Ventas           | Salesforce | Captación, CRM, Gestión Comercial | API pública, sistemas internos     |
| Gestión de RRHH       | Recursos Humanos | Workday    | Reclutamiento, Nómina, Formación  | Comunicación interna, portales web |
