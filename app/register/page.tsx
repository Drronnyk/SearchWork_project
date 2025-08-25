"use client";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
  const[selectedRole,setSelectedRole] =  useState<string | null>(null);
  return(
      <div className="flex items-center justify-center min-h-screen
      bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md
        p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
              Créer un compte
          </h1>
          <form action="" className="space-y-4">
            <div>
              <label htmlFor="" className="block text-sm font-medium
              mb-1">Nom</label>
              <input type="text"placeholder="Entrez votre nom" className="
              w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
            </div>
            <div>
              <label htmlFor="" 
              className="block text-sm font-medium mb-1">
                Mot de passe 

              </label>
              <input type="password" name="" id="" placeholder="Entrez votre mot de passe
              " className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-center mt-2 mb-2">Vous etes ?</h2>
              <div className="flex gap-9 ">
                <div onClick={() => setSelectedRole("candidat")}
        className={`
          flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer
          transition-transform duration-200
          ${selectedRole === "candidat" ? "border-4 border-blue-500 bg-blue-50 scale-105" : "border border-gray-300 bg-white"}
        `}>
                   <button className="flex gap-3">
                  <Briefcase className="w-12 h-12 text-green-500 mb-2"/>
                   <span className="text-lg font-semibold">Recruteur</span>
                

                   </button>
                </div>
                <div  onClick={() => setSelectedRole("recruteur")}
        className={`
          flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer
          transition-transform duration-200
          ${selectedRole === "recruteur" ? "border-4 border-green-500 bg-green-50 scale-105" : "border border-gray-300 bg-white"}
        `}>
                   <button className="flex gap-3">
                    <User className="w-12 h-12 text-green-500 mb-2"/>
                    <span className="text-lg font-semibold">Candidat</span>

                   </button>
                </div>
              </div>

            </div>
            <button type="submit" className="w-full bg-blue-500 text-white 
            py-2 rounded-lg hover:bg-blue-700 transition">

              S'inscrire
            

            </button>
          </form>
        </div>

      </div>
  )
}