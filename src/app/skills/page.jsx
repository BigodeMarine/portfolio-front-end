// Importa os dados das Skills, componente e o Css
import { skills } from "../../data/skills";
import SkillBadge from "../../components/SkillBadge";
import styles from "./skills.module.css";

// Componente da página Skills
export default function Skills() {
    return (
        <section className={styles.skills}>
            <h1>Habilidades</h1>
            <div className={styles.list}>
                {skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
            </div>

        </section>
    );
}
