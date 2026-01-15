// Layout da Home
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Olá me chamo Edson sou
        </h1>
        <h2>Desenvolvedor Front-end</h2>

        <p>
          Crio interfaces modernas, organizadas e responsivas,
          com foco em boas práticas e experiência de usuário.
        </p>

        <div className={styles.actions}>
          <a href="/projects" className={styles.primary}>
            Ver Projetos
          </a>

          <a href="/contact" className={styles.secondary}>
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
