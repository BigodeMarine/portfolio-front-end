// Importa o CSS do componente
import styles from "./SkillBadge.module.css";

// Componente que recebe o nome da Skill como prop
export default function SkillBadge({ skill }) {
    return (
        <span className={styles.badge}>
            {skill}
        </span>
    );
}
