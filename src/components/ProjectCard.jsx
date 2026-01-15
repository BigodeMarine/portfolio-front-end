// Importa Link e CSS Module
import Link from "next/link";
import styles from "./ProjectCard.module.css";

// Componente que recebe um projeto como prop
export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      
      {/* Conteúdo textual */}
      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <Link
          href={`/projects/${project.slug}`}
          className={styles.link}
        >
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
