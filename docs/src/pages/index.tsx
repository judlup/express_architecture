import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import styles from "./index.module.css"

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="Metodología ágil, visual y colaborativa para documentar arquitecturas de software."
    >
      {/* Hero Section */}
      <header className={styles.heroBanner + " hero hero--primary"}>
        <div className="container text--center">
          <img
            src="/img/logo.png"
            alt="Logo Express Architecture"
            style={{ maxWidth: 180, marginBottom: 24 }}
          />
          <h1 className="hero__title">
            Express Architecture — Metodología ligera y visual
          </h1>
          <p className="hero__subtitle">
            Metodología en evolución (Design Science Research) que emplea
            Información Mínima Suficiente para apoyar decisiones
            organizacionales.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/index"
            >
              Guía rápida
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/express-architecture/index"
            >
              Más sobre Express Architecture
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ¿Qué es Express Architecture? */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="text--center">¿Qué es Express Architecture?</h2>
            <div
              style={{
                maxWidth: 900,
                margin: "0 auto",
                textAlign: "left",
                fontSize: "1.1rem",
              }}
            >
              <p>
                <strong>Express Architecture</strong> es un metodolog�a ligero,
                visual e iterativo desarrollado en el marco de una investigación
                doctoral (Design Science Research). Su objetivo es apoyar la
                toma de decisiones organizacionales mediante la captura y
                comunicación de{" "}
                <strong>Información Mínima Suficiente (IMS)</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section
          className={styles.section}
          style={{ background: "var(--ifm-color-primary-lightest)" }}
        >
          <div className="container">
            <h2 className="text--center">Beneficios</h2>
            <div className={styles.principlesGrid}>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="eficiencia"
                >
                  ⚡
                </span>
                <strong>Rapidez y eficiencia</strong>
                <p className={styles.benefitDescription}>
                  Reduce tiempos de análisis y facilita la alineación entre
                  negocio y tecnología, priorizando la información útil para la
                  decisión.
                </p>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="colaboración"
                >
                  🤝
                </span>
                <strong>Colaboración real</strong>
                <p className={styles.benefitDescription}>
                  Facilita la participación activa y el diálogo entre perfiles
                  técnicos y no técnicos, apoyando la construcción de una visión
                  compartida.
                </p>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="flexibilidad"
                >
                  🔄
                </span>
                <strong>Flexibilidad e iteración</strong>
                <p className={styles.benefitDescription}>
                  Permite adaptar e iterar artefactos de forma ágil según
                  evidencia recogida en contexto.
                </p>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="decisiones"
                >
                  💡
                </span>
                <strong>Mejor toma de decisiones</strong>
                <p className={styles.benefitDescription}>
                  Hace visible relaciones y dependencias, y apoya decisiones
                  mejor fundamentadas reduciendo incertidumbre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="text--center">Aplicaciones</h2>
            <div className={styles.artefactGrid}>
              <div className={styles.artefactCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="equipo"
                >
                  👨‍💻
                </span>
                <strong>
                  Equipos que buscan alinear visión de negocio y tecnología
                </strong>
              </div>
              <div className={styles.artefactCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="empresa"
                >
                  🏢
                </span>
                <strong>
                  Organizaciones que desean facilitar la comunicación y el
                  entendimiento entre áreas
                </strong>
              </div>
              <div className={styles.artefactCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="innovación"
                >
                  🚀
                </span>
                <strong>
                  Proyectos donde la toma de decisiones informada y visual es
                  clave
                </strong>
              </div>
              <div className={styles.artefactCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="alineación"
                >
                  🎯
                </span>
                <strong>
                  Iniciativas que requieren colaboración ágil entre negocio y
                  tecnología
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* Principios Fundamentales */}
        <section
          className={styles.section}
          style={{ background: "var(--ifm-color-primary-lightest)" }}
        >
          <div className="container">
            <h2 className="text--center">Principios Fundamentales</h2>
            <div className={styles.principlesGrid}>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="ojo"
                >
                  👁️
                </span>
                <strong>Agilidad Visual</strong>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="equipo"
                >
                  🤝
                </span>
                <strong>Colaboración Multidisciplinaria</strong>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="ciclo"
                >
                  🔄
                </span>
                <strong>Iteración Rápida</strong>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="documento"
                >
                  📄
                </span>
                <strong>Información Mínima Suficiente (IMS)</strong>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="idea"
                >
                  💡
                </span>
                <strong>Decisiones Informadas y Trazabilidad</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Artefactos Clave */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="text--center">Artefactos Clave</h2>
            <div className={styles.artefactGrid}>
              <div className={styles.artefactCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="canvas"
                >
                  🗂️
                </span>
                <h3>System Architecture Canvas</h3>
                <p>
                  Artefacto visual para estructurar información de procesos y
                  sistemas con IMS.
                </p>
              </div>
              <div className={styles.artefactCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="modelo c4"
                >
                  🧩
                </span>
                <h3>Modelo C4</h3>
                <p>
                  Representa la arquitectura en diferentes niveles, adaptado a
                  IMS.
                </p>
              </div>
              <div className={styles.artefactCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="infraestructura"
                >
                  🖧
                </span>
                <h3>Diagrama de Infraestructura</h3>
                <p>
                  Esquemas de infraestructura que complementan los artefactos
                  operativos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Comienza: guía rápida y artefactos</h2>
            <p className="margin-bottom--md">
              Express Architecture es una metodología en construcción. Aquí
              encontrarás guías, artefactos y ejemplos aplicados que reducen la
              fricción en la toma de decisiones y facilitan el análisis en
              contexto.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/index"
              >
                Comenzar guía rápida
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/express-architecture/index"
              >
                Leer sobre la metodología
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

