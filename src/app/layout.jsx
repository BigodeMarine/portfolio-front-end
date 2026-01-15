// Imports dos componentes
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Metadados da aplicação
export const metadata = {
  title: "Portfólio - Edson",
  description: "Portfólio desenvolvido com Next.js e React",
};

// Componente raiz do layout
export default function RootLayout({ children }) {
  return (
    // Define o idioma da página como português do Brasil
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
