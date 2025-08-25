import { UserRound } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Search Work</Link>
        <nav className="flex gap-6">
          <Link href="/">Accueil</Link>
          <Link href="/job">Offres</Link>
          <Link href="/candidats">Candidats</Link>
          <Link href="/login">

          <UserRound/>
          </Link>
        </nav>
      </div>
    </header>
  );
}
