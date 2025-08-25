"use client";
import { UserCircle } from "lucide-react";
import { motion} from "framer-motion";
export default function CandidatPage() {
  const candidats = [
    { id: 1, nom: "Arnaud Nkoum", métier: "Développeur Web", expérience: "2 ans" },
    { id: 2, nom: "Brigitte Ndongo", métier: "Designer Graphique", expérience: "4 ans" },
    { id: 3, nom: "Cédric Fomen", métier: "Data Scientist", expérience: "3 ans" },
    { id: 4, nom: "Delphine Etoa", métier: "Chargée de Communication", expérience: "5 ans" },
    { id: 5, nom: "Emmanuel Abouem", métier: "Ingénieur Réseaux", expérience: "6 ans" },
    { id: 6, nom: "Flore Ngo Belinga", métier: "Développeuse Mobile", expérience: "2 ans" },
    { id: 7, nom: "Gaston Talla", métier: "Comptable", expérience: "7 ans" },
    { id: 8, nom: "Hélène Mbarga", métier: "Assistante RH", expérience: "3 ans" },
    { id: 9, nom: "Isaac Njoya", métier: "Technicien Support IT", expérience: "4 ans" },
    { id: 10, nom: "Josiane Nkeng", métier: "Consultante Marketing", expérience: "5 ans" },
  ];

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6 text-center ">
        Liste des candidats 
      </h1>
      <ul className="space-y-4">
        {candidats.map((c) => (  
          <motion.li
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: c.id * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
           className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg 
           shadow hover:bg-gray-200 transition">
            
            <motion.div
            whileHover={{rotate:15, scale:1.2}}
            className="w-12 h-12"
            >
              
              

           <UserCircle className="w-full h-full text-blue-400"/>

           </motion.div>

            <div>
              <h2 className="text-xl font-semibold">{c.nom}</h2>
              <p> 
                {c.métier}--{c.expérience} d'experience
              </p>
              <motion.a href="/profile" 
              
             className="text-blue-600 underline hover:text-blue-800
              transition-colors"
              whileHover={{x:5}}>
              Voir le profil
              </motion.a>
            </div>

          </motion.li>

        ))}
      </ul>
    </main>
    
     
  );
}