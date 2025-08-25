import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SearchWork",
  description: "Application de Mise en Relation de Candidats et de Recruteurs",
};

export default function RootLayout({ 
  children
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className= "flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4"> {children}  
        </main>
        <Footer/>
      </body>
    </html>
  );
}
