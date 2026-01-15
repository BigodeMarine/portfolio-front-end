// Imports do Link e Css
import Link from "next/link";
import styles from "./Header.module.css";

// Componente do Header
export default function Header() {
    return (
        // Aplica a classe CSS
        <header className={styles.header}>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">Sobre</Link>
                <Link href="/projects">Projetos</Link>
                <Link href="/skills">Habilidades</Link>
                <Link href="/contact">Contato</Link>
            </nav>
        </header>
    );
}
