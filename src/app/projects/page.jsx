// Importa os dados dos projetos e o componente Card
import { projects } from "../../data/project";
import ProjectCard from "../../components/ProjectCard";
import styles from "./projects.module.css";

// Componente da página de projetos
export default function Projects() {
    return (
        <section className={styles.projects}>
            <h1>Projetos</h1>
            <div className={styles.grid}>
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
