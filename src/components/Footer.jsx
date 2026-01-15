// Importa o CSS do Footer
import styles from "./Footer.module.css";

// Componente Footer
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {new Date().getFullYear()} Edson Garcia • Desenvolvedor Front-end
        </p>
      </div>
    </footer>
  );
}