// Diz ao Next.js que este componente roda no navegador
"use client";

// Importa o CSS
import styles from "./contact.module.css";

// Componente da página Contato
export default function Contact() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    }

    // Seção principal da página de contato
    return (
        <section className={styles.contact}>
            <div className={styles.card}>
                <h1>Contato</h1>

                {/* Formulário de contato */}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.field}>
                        Nome
                        <input type="text" placeholder="Seu nome" required />
                    </label>
                    <label className={styles.field}>
                        Email
                        <input type="email" placeholder="seu@email.com" required />
                    </label>
                    <label className={styles.field}>
                        Mensagem
                        <textarea placeholder="Digite sua mensagem" required />
                    </label>
                    <button type="submit">Enviar</button>
                </form>

                {/* Links para redes profissionais */}
                <div className={styles.links}>
                    <a href="https://github.com/BigodeMarine" target="_blank">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/edson-luiz-garcia-portela-b6a8362b3/" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
