import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import InstitutionalHeader from "./institutional/InstitutionalHeader";
import InstitutionalFooter from "./institutional/InstitutionalFooter";
import "./institutional/shell.css";

interface LayoutProps {
  children: ReactNode;
  variant?: "institutional";
}

export default function Layout({ children, variant }: LayoutProps) {
  if (variant === "institutional") {
    return (
      <div className="wd-institutional">
        <Helmet><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" /></Helmet>
        <a className="wd-skip-link" href="#wd-main">Ir para o conteúdo</a>
        <InstitutionalHeader />
        <main id="wd-main" className="wd-main" tabIndex={-1}>{children}</main>
        <InstitutionalFooter />
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
