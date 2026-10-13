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

        {/* Lógica Operacional de las Prácticas (4 columnas equilibradas) */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="text--center">Lógica Operacional de las Prácticas</h2>
            <p className="text--center" style={{ maxWidth: 760, margin: "0 auto 1.5rem", color: "#4a5568" }}>
              Las prácticas de arquitectura empresarial se entienden como acciones situadas que transforman progresivamente una necesidad de decisión en un artefacto estructurado para apoyar la deliberación.
            </p>
            <div className={styles.grid4Cols}>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Caracterizar la Decisión">
                  <TargetIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>1. Caracterizar la Decisión</strong>
                <p className={styles.cardDescription}>
                  Punto de partida situado: precisar qué se necesita decidir, el alcance, los actores involucrados, las restricciones organizacionales y el nivel de incertidumbre.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Determinar la IMS">
                  <ScaleIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>2. Determinar la IMS</strong>
                <p className={styles.cardDescription}>
                  Aplicar la <em>Información Mínima Suficiente</em> como principio informacional y regla de parada para comprender la situación sin levantamientos exhaustivos.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Estructurar y Relacionar">
                  <NetworkIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>3. Estructurar y Relacionar</strong>
                <p className={styles.cardDescription}>
                  Hacer explícitas las dependencias y relaciones socio-técnicas entre procesos, sistemas, actores, métricas y capacidades, garantizando trazabilidad.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Configurar el Artefacto">
                  <CompassIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>4. Configurar el Artefacto</strong>
                <p className={styles.cardDescription}>
                  Traducir la información en una representación adaptada a la tarea (<em>Cognitive Fit</em>) que actúe como objeto frontera (<em>Boundary Object</em>) para deliberar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares Teóricos (3 columnas x 2 filas simétrico y balanceado) */}
        <section className={styles.section + " " + styles.sectionWithGrayBg}>
          <div className="container">
            <h2 className="text--center">Fundamentos Teóricos del Modelo</h2>
            <p className="text--center" style={{ maxWidth: 780, margin: "0 auto 1.5rem", color: "#4a5568" }}>
              La investigación articula corrientes teóricas clave para explicar la relación entre decisión, prácticas, información y artefactos.
            </p>
            <div className={styles.grid3Cols}>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Prácticas Situadas">
                  <UsersIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Prácticas Situadas (Practice Lens)</strong>
                <p className={styles.cardDescription}>
                  Con base en Orlikowski (2000) y Kotusev et al., se distingue con claridad entre la <em>práctica</em> (acción situada), el <em>artefacto</em> (representación estructurada) y la <em>herramienta</em> (mecanismo técnico).
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Racionalidad Limitada">
                  <BrainIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Racionalidad Limitada & Parada</strong>
                <p className={styles.cardDescription}>
                  Fundamentado en Simon (1955) y Qi, Han & Hansen (2024): detener la búsqueda de datos cuando el costo marginal de continuar recopilando supera el beneficio esperado para la decisión.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Ajuste Cognitivo">
                  <PuzzleIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Ajuste Cognitivo (Cognitive Fit)</strong>
                <p className={styles.cardDescription}>
                  Propuesto por Vessey (1991): la efectividad mejora cuando hay correspondencia entre las propiedades de la tarea y la representación visual, evitando formatos únicos universales.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Objetos Frontera">
                  <BridgeIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Objetos Frontera (Boundary Objects)</strong>
                <p className={styles.cardDescription}>
                  Siguiendo a Kotusev, Kurnia & Dilnutt (2023): los artefactos de arquitectura empresarial median entre comunidades diversas (negocio, TI, operaciones), posibilitando diálogo y visión compartida.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Trazabilidad Socio-Técnica">
                  <GitBranchIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Trazabilidad Socio-Técnica</strong>
                <p className={styles.cardDescription}>
                  Atendiendo a Bidmeshk et al. (2025): las relaciones muchos-a-muchos ($M:N$) entre actividades operativas y tareas de sistemas demandan trazabilidad explícita para visibilizar dependencias.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Apoyo Acotado a la Decisión">
                  <ShieldCheckIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Apoyo Acotado a la Decisión</strong>
                <p className={styles.cardDescription}>
                  El alcance se delimita a la comprensión de la situación, visibilidad de relaciones, trazabilidad y deliberación, sin pretensiones causales simplistas sobre el desempeño organizacional posterior.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marco Metodológico ADR (4 columnas equilibradas) */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="text--center">Estrategia Metodológica: Action Design Research (ADR)</h2>
            <p className="text--center" style={{ maxWidth: 860, margin: "0 auto 1.5rem", color: "#4a5568", fontSize: "1.05rem", lineHeight: 1.7 }}>
              La investigación adopta el enfoque de <strong>Action Design Research (ADR)</strong> (Sein et al., 2011), idóneo para construir y refinar prácticas de arquitectura empresarial mientras se interviene en un contexto organizacional real:
            </p>
            <div className={styles.grid4Cols}>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Contexto Empírico Real">
                  <BuildingIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Contexto Empírico Real</strong>
                <p className={styles.cardDescription}>
                  Desarrollado en <strong>Rena Ware International</strong>, con foco inicial en el área de <strong>Servicio al Cliente</strong> y sus interfaces críticas con procesos y sistemas en estandarización.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Investigador Embebido">
                  <UserCheckIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Investigador Embebido</strong>
                <p className={styles.cardDescription}>
                  Participación activa en iniciativas reales de arquitectura y estandarización, manteniendo mecanismos sistemáticos de reflexividad y trazabilidad de decisiones de diseño.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Episodios de Decisión">
                  <RefreshCwIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Episodios de Decisión (BIE)</strong>
                <p className={styles.cardDescription}>
                  Unidades embebidas de análisis donde se configuran, aplican y evalúan concurrentemente las prácticas y los artefactos producidos ante problemas situados.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Evaluación en Dos Niveles">
                  <CheckSquareIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Evaluación en Dos Niveles</strong>
                <p className={styles.cardDescription}>
                  Evaluación de las <em>prácticas</em> (aplicabilidad, adaptabilidad, esfuerzo) y de los <em>resultados</em> (comprensión, trazabilidad, suficiencia informacional y deliberación).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rol de Express Architecture y Artefactos de Trabajo (4 columnas equilibradas) */}
        <section className={styles.section + " " + styles.sectionWithGrayBg}>
          <div className="container">
            <h2 className="text--center">Artefactos de Trabajo y Configuración Experimental</h2>
            <p className="text--center" style={{ maxWidth: 800, margin: "0 auto 1.5rem", color: "#4a5568" }}>
              En este proyecto, <strong>Express Architecture</strong> actúa como una configuración experimental provisional para materializar prácticas, instrumentos y representaciones durante los ciclos de intervención.
            </p>
            <div className={styles.grid4Cols}>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Fichas & Criterios IMS">
                  <ClipboardListIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Fichas & Criterios IMS</strong>
                <p className={styles.cardDescription}>
                  Instrumentos para caracterizar la decisión y definir criterios operativos de suficiencia informacional antes de iniciar representaciones gráficas.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Solution Architecture Canvas">
                  <LayoutDashboardIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Solution Architecture Canvas</strong>
                <p className={styles.cardDescription}>
                  Representación prototípica para estructurar y relacionar procesos, sistemas y actores según la necesidad analizada en contexto.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Matrices de Trazabilidad">
                  <TableIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Matrices de Trazabilidad</strong>
                <p className={styles.cardDescription}>
                  Conexión explícita entre actividades de procesos, herramientas, sistemas y métricas para visibilizar impactos y dependencias críticas.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.principleIcon} aria-label="Mini ADR & Acuerdos">
                  <FileTextIcon size={26} />
                </span>
                <strong className={styles.cardTitle}>Mini ADR & Acuerdos</strong>
                <p className={styles.cardDescription}>
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
