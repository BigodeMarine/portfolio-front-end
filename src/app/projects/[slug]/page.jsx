// Importa a lista de projetos e o CSS
import { projects } from "../../../data/project";
import styles from "./project.module.css";

// Componente da página de detalhe do projeto
export default async function ProjectDetail({ params }) {
    const resolvedParams = await params;
    const project = projects.find(
        (item) => item.slug === resolvedParams.slug
    );

    // Caso o projeto não seja encontrado
    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        // Container principal da página
        <section className={styles.project}>
            <h1>{project.title}</h1>
            <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                className={styles.image}
            />
            <p className={styles.description}>
                {project.longDescription}
            </p>
            <ul className={styles.techList}>
                {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

            {/* Links externos */}
            <div className={styles.links}>
                <a href={project.repo} target="_blank">
                    Repositório
                </a>
            </div>

        </section>
    );
}
