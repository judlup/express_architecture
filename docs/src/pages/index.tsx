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
            Revoluciona la Documentación y Diseño de Arquitecturas
          </h1>
          <p className="hero__subtitle">
            Express Architecture: Metodología ágil, visual y colaborativa para
            equipos modernos.
          </p>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Comienza Ahora
          </Link>
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
                <strong>Express Architecture</strong> es una{" "}
                <strong>metodología ágil, colaborativa e iterativa</strong> que
                ayuda a entender el negocio y la tecnología que este utiliza de
                manera visual. Su propósito es facilitar el entendimiento
                compartido y la toma de decisiones estratégicas, integrando a
                actores técnicos y no técnicos en un proceso de alineación,
                comunicación y mejora continua.
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
                  Acelera el entendimiento y la alineación entre negocio y
                  tecnología, reduciendo tiempos y recursos en el análisis y la
                  comunicación.
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
                  técnicos y no técnicos, promoviendo una visión compartida.
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
                  Permite adaptar y evolucionar la visión del negocio y la
                  tecnología de forma ágil y continua.
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
                  Proporciona claridad visual y contexto para tomar decisiones
                  estratégicas informadas y reducir riesgos.
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
                <strong>Documentación Ágil</strong>
              </div>
              <div className={styles.principleCard}>
                <span
                  className={styles.principleIcon}
                  role="img"
                  aria-label="idea"
                >
                  💡
                </span>
                <strong>Decisiones Informadas</strong>
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
                  Herramienta visual para estructurar información de procesos y
                  sistemas de forma rápida y comprensible.
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
                  Representa la arquitectura del sistema en diferentes niveles
                  de detalle (Contexto, Contenedores, Componentes y Código).
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
                  Esquemas detallados de la infraestructura tecnológica que
                  respaldan las soluciones propuestas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Únete a la revolución visual de la arquitectura de software</h2>
            <p className="margin-bottom--md">
              “Diseñar sistemas no tiene que ser complicado; con Express
              Architecture, la claridad y la colaboración son la base del
              éxito.”
            </p>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Explora la documentación
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
