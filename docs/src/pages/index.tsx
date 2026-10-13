import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import {
  TargetIcon,
  ScaleIcon,
  NetworkIcon,
  CompassIcon,
  UsersIcon,
  BrainIcon,
  PuzzleIcon,
  BridgeIcon,
  GitBranchIcon,
  ShieldCheckIcon,
  BuildingIcon,
  UserCheckIcon,
  RefreshCwIcon,
  CheckSquareIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  TableIcon,
  FileTextIcon,
} from "@site/src/components/Icons"

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="Prácticas de arquitectura empresarial orientadas a la decisión: de una lógica documental a artefactos para apoyar la deliberación organizacional."
    >
      {/* Hero Section */}
      <header className={styles.heroBanner + " hero hero--primary"}>
        <div className="container text--center">
          <img
            src="/img/icono_azul_oscuro.png"
            alt="Logo Express Architecture"
            style={{ maxWidth: 170, marginBottom: 20 }}
          />
          <h1 className="hero__title">
            Express Architecture
          </h1>
          <p className="hero__subtitle" style={{ maxWidth: 880, margin: "0 auto 1.5rem", fontSize: "1.25rem", lineHeight: 1.5 }}>
            Prácticas de arquitectura empresarial orientadas a apoyar la toma de decisiones mediante <strong>Información Mínima Suficiente (IMS)</strong> y <strong>artefactos de decisión</strong>.
          </p>
          <p style={{ opacity: 0.9, maxWidth: 760, margin: "0 auto 2rem", fontSize: "1rem" }}>
            Investigación doctoral desarrollada mediante <em>Action Design Research (ADR)</em> en la Universidad de los Andes, en intervención empírica con Rena Ware International.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/fundamentos"
            >
              Explorar Fundamentos
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/investigacion-dsr/vision-general"
            >
              Marco de Investigación (ADR)
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/express-architecture"
            >
              Configuración Experimental
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* El Cambio de Enfoque */}
        <section className={styles.section + " " + styles.sectionWithGrayBg}>
          <div className="container">
            <h2 className="text--center" style={{ marginBottom: "1rem" }}>
              El Cambio de Enfoque: De la Lógica Documental a los Artefactos de Decisión
            </h2>
            <div
              style={{
                maxWidth: 920,
                margin: "0 auto",
                textAlign: "left",
                fontSize: "1.08rem",
                lineHeight: 1.7,
              }}
            >
              <p>
                En organizaciones con alta dependencia tecnológica, la toma de decisiones exige entender cómo se articulan personas, procesos, sistemas e información. Sin embargo, <strong>disponer de sistemas, documentación o datos no garantiza una comprensión suficiente para decidir</strong>. La información suele encontrarse distribuida, incompleta o en silos de conocimiento, mientras que las relaciones y dependencias críticas permanecen tácitas.
              </p>
              <p>
                Ante este desafío, la literatura sobre sobrecarga informacional advierte que acumular más datos o generar levantamientos exhaustivos no necesariamente conduce a mejores decisiones si la información no puede ser procesada y valorada con pertinencia. Por ello, esta investigación plantea una transformación central:
              </p>
              <div
                style={{
                  background: "#fff",
                  borderLeft: "5px solid #00B2B9",
                  padding: "1.2rem 1.5rem",
                  margin: "1.5rem 0",
                  borderRadius: "0 8px 8px 0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <p style={{ margin: 0, fontWeight: 600, color: "#0F1B2A" }}>
                  Pasar de una lógica predominantemente documental a una lógica orientada a artefactos de decisión.
                </p>
                <p style={{ margin: "0.5rem 0 0", fontSize: "0.98rem", color: "#4a5568" }}>
                  Esto no implica descartar la documentación tradicional, sino comprender cómo el conocimiento arquitectónico puede estructurarse y representarse en función de una necesidad concreta de decisión.
                </p>
              </div>
              <p>
                A partir de este planteamiento, la pregunta central de la investigación doctoral es: <strong>¿Cómo deben ser las prácticas de arquitectura empresarial para apoyar la toma de decisiones?</strong> En este marco, <em>Express Architecture</em> funciona como una configuración experimental provisional para materializar y refinar dichas prácticas mediante ciclos de intervención en contextos organizacionales reales.
              </p>
            </div>
          </div>
        </section>

        {/* Lógica Operacional de las Prácticas */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="text--center">Lógica Operacional de las Prácticas</h2>
            <p className="text--center" style={{ maxWidth: 760, margin: "0 auto 1.5rem", color: "#4a5568" }}>
              Las prácticas de arquitectura empresarial se entienden como acciones situadas que transforman progresivamente una necesidad de decisión en un artefacto estructurado para apoyar la deliberación.
            </p>
            <div className={styles.principlesGrid}>
              <div className={styles.principleCard}>
                <span className={styles.principleIcon} aria-label="Caracterizar la Decisión">
                  <TargetIcon size={26} />
                </span>
                <strong>1. Caracterizar la Decisión</strong>
                <p className={styles.benefitDescription}>
                  Punto de partida situado: precisar qué se necesita decidir, el alcance, los actores involucrados, las restricciones organizacionales y el nivel de incertidumbre, evitando plantillas predeterminadas a ciegas.
                </p>
              </div>
              <div className={styles.principleCard}>
                <span className={styles.principleIcon} aria-label="Determinar la IMS">
                  <ScaleIcon size={26} />
                </span>
                <strong>2. Determinar la IMS</strong>
                <p className={styles.benefitDescription}>
                  Aplicar la <em>Información Mínima Suficiente</em> como principio informacional y regla de parada: establecer qué información es necesaria y suficiente para comprender la situación sin recurrir a levantamientos exhaustivos.
                </p>
              </div>
              <div className={styles.principleCard}>
                <span className={styles.principleIcon} aria-label="Estructurar y Relacionar">
                  <NetworkIcon size={26} />
                </span>
                <strong>3. Estructurar y Relacionar</strong>
                <p className={styles.benefitDescription}>
                  Hacer explícitas las dependencias y relaciones socio-técnicas entre procesos, sistemas, actores, métricas y capacidades, garantizando trazabilidad para el análisis de impacto.
                </p>
              </div>
              <div className={styles.principleCard}>
                <span className={styles.principleIcon} aria-label="Configurar el Artefacto">
                  <CompassIcon size={26} />
                </span>
                <strong>4. Configurar el Artefacto</strong>
                <p className={styles.benefitDescription}>
                  Traducir la información en una representación estructurada adaptada a la tarea (<em>Cognitive Fit</em>) que actúe como objeto frontera (<em>Boundary Object</em>) para soportar la deliberación entre negocio y tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares Teóricos */}
        <section className={styles.section + " " + styles.sectionWithGrayBg}>
          <div className="container">
            <h2 className="text--center">Fundamentos Teóricos del Modelo</h2>
            <p className="text--center" style={{ maxWidth: 780, margin: "0 auto 1.5rem", color: "#4a5568" }}>
              La investigación articula corrientes teóricas clave para explicar la relación entre decisión, prácticas, información y artefactos.
            </p>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitCard}>
                <span className={styles.principleIcon} aria-label="Prácticas Situadas">
                  <UsersIcon size={26} />
                </span>
                <strong>Prácticas Situadas (Practice Lens)</strong>
                <p className={styles.benefitDescription}>
                  Con base en Orlikowski (2000) y Kotusev et al., se distingue con claridad entre la <em>práctica</em> (acción situada de los actores), el <em>artefacto</em> (representación estructurada) y la <em>herramienta</em> (mecanismo técnico de ejecución).
                </p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.principleIcon} aria-label="Racionalidad Limitada">
                  <BrainIcon size={26} />
                </span>
                <strong>Racionalidad Limitada & Lógica de Parada</strong>
                <p className={styles.benefitDescription}>
                  Fundamentado en Simon (1955) y Qi, Han & Hansen (2024): detener la búsqueda de información cuando el costo marginal de continuar recopilando supera el beneficio esperado para la decisión analizada.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.principleIcon} aria-label="Ajuste Cognitivo">
                  <PuzzleIcon size={26} />
                </span>
                <strong>Ajuste Cognitivo (Cognitive Fit)</strong>
                <p className={styles.benefitDescription}>
                  Propuesto por Vessey (1991): la efectividad mejora cuando hay correspondencia entre las propiedades de la tarea y la representación visual. Por ello, el estudio no prescribe un formato gráfico único para todo escenario.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.principleIcon} aria-label="Objetos Frontera">
                  <BridgeIcon size={26} />
                </span>
                <strong>Objetos Frontera (Boundary Objects)</strong>
                <p className={styles.benefitDescription}>
                  Siguiendo a Kotusev, Kurnia & Dilnutt (2023): los artefactos de arquitectura empresarial median entre comunidades diversas (negocio, TI, operaciones), posibilitando un lenguaje y visión compartidos para deliberar.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.principleIcon} aria-label="Trazabilidad Socio-Técnica">
                  <GitBranchIcon size={26} />
                </span>
                <strong>Trazabilidad Socio-Técnica</strong>
                <p className={styles.benefitDescription}>
                  Atendiendo a Bidmeshk et al. (2025): las relaciones muchos-a-muchos entre actividades operativas y tareas de sistemas demandan trazabilidad explícita para entender las dependencias críticas sin dispersión.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.principleIcon} aria-label="Apoyo Acotado a la Decisión">
                  <ShieldCheckIcon size={26} />
                </span>
                <strong>Apoyo Acotado a la Decisión</strong>
                <p className={styles.benefitDescription}>
                  El alcance se delimita a la comprensión de la situación, visibilidad de relaciones, trazabilidad y soporte a la deliberación, sin pretensiones causales simplistas sobre el desempeño organizacional posterior.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marco Metodológico ADR */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="text--center">Estrategia Metodológica: Action Design Research (ADR)</h2>
            <div
              style={{
                maxWidth: 900,
                margin: "0 auto",
                textAlign: "left",
                fontSize: "1.05rem",
                lineHeight: 1.7,
              }}
            >
              <p>
                La investigación adopta el enfoque de <strong>Action Design Research (ADR)</strong> (Sein et al., 2011), idóneo para construir y refinar prácticas de arquitectura empresarial mientras se interviene en un contexto organizacional real:
              </p>
              <div className={styles.artefactGrid} style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                <div className={styles.artefactCard}>
                  <span className={styles.principleIcon} aria-label="Contexto Empírico Real">
                    <BuildingIcon size={26} />
                  </span>
                  <strong>Contexto Empírico Real</strong>
                  <p style={{ fontSize: "0.92rem", color: "#4a5568", marginTop: "0.5rem" }}>
                    Desarrollado en <strong>Rena Ware International</strong>, con foco inicial en el área de <strong>Servicio al Cliente</strong> y sus interfaces críticas con procesos, sistemas y mercados en estandarización.
                  </p>
                </div>
                <div className={styles.artefactCard}>
                  <span className={styles.principleIcon} aria-label="Investigador Embebido">
                    <UserCheckIcon size={26} />
                  </span>
                  <strong>Investigador Embebido</strong>
                  <p style={{ fontSize: "0.92rem", color: "#4a5568", marginTop: "0.5rem" }}>
                    Participación activa en iniciativas reales de arquitectura y estandarización, manteniendo mecanismos sistemáticos de reflexividad y trazabilidad de decisiones de diseño.
                  </p>
                </div>
                <div className={styles.artefactCard}>
                  <span className={styles.principleIcon} aria-label="Episodios de Decisión">
                    <RefreshCwIcon size={26} />
                  </span>
                  <strong>Episodios de Decisión (BIE)</strong>
                  <p style={{ fontSize: "0.92rem", color: "#4a5568", marginTop: "0.5rem" }}>
                    Unidades embebidas de análisis donde se configuran, aplican y evalúan concurrentemente las prácticas y los artefactos producidos ante problemas situados.
                  </p>
                </div>
                <div className={styles.artefactCard}>
                  <span className={styles.principleIcon} aria-label="Evaluación en Dos Niveles">
                    <CheckSquareIcon size={26} />
                  </span>
                  <strong>Evaluación en Dos Niveles</strong>
                  <p style={{ fontSize: "0.92rem", color: "#4a5568", marginTop: "0.5rem" }}>
                    Evaluación de las <em>prácticas</em> (aplicabilidad, adaptabilidad, esfuerzo) y de los <em>resultados</em> (comprensión, trazabilidad, suficiencia informacional y deliberación).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rol de Express Architecture y Artefactos de Trabajo */}
        <section className={styles.section + " " + styles.sectionWithGrayBg}>
          <div className="container">
            <h2 className="text--center">Artefactos de Trabajo y Configuración Experimental</h2>
            <p className="text--center" style={{ maxWidth: 800, margin: "0 auto 1.5rem", color: "#4a5568" }}>
              En este proyecto, <strong>Express Architecture</strong> actúa como una configuración experimental provisional para materializar prácticas, instrumentos y representaciones durante los ciclos de intervención.
            </p>
            <div className={styles.artefactGrid}>
              <div className={styles.artefactCard}>
                <span className={styles.principleIcon} aria-label="Fichas & Criterios IMS">
                  <ClipboardListIcon size={26} />
                </span>
                <h3>Fichas & Criterios IMS</h3>
                <p>
                  Instrumentos para caracterizar la decisión y definir criterios operativos de suficiencia informacional antes de iniciar representaciones gráficas.
                </p>
              </div>
              <div className={styles.artefactCard}>
                <span className={styles.principleIcon} aria-label="Solution Architecture Canvas">
                  <LayoutDashboardIcon size={26} />
                </span>
                <h3>Solution Architecture Canvas</h3>
                <p>
                  Representación prototípica para estructurar y relacionar procesos, sistemas y actores según la necesidad analizada en contexto.
                </p>
              </div>
              <div className={styles.artefactCard}>
                <span className={styles.principleIcon} aria-label="Matrices de Trazabilidad">
                  <TableIcon size={26} />
                </span>
                <h3>Matrices de Trazabilidad</h3>
                <p>
                  Conexión explícita entre actividades de procesos, herramientas, sistemas y métricas para visibilizar impactos y dependencias críticas.
                </p>
              </div>
              <div className={styles.artefactCard}>
                <span className={styles.principleIcon} aria-label="Mini ADR & Acuerdos">
                  <FileTextIcon size={26} />
                </span>
                <h3>Mini ADR & Acuerdos</h3>
                <p>
                  Registros ligeros para capturar el razonamiento arquitectónico, alternativas valoradas y compromisos derivados de la deliberación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Explora la Documentación y el Marco Teórico</h2>
            <p className="margin-bottom--md">
              Conoce los fundamentos conceptuales, el protocolo metodológico de investigación y el catálogo de artefactos e instrumentos desarrollados para apoyar la toma de decisiones organizacionales.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                className="button button--primary button--lg"
                to="/docs/fundamentos"
              >
                Conocer los Fundamentos
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/investigacion-dsr/vision-general"
              >
                Ver Investigación Doctoral
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/docs/artefactos"
              >
                Catálogo de Artefactos
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}


