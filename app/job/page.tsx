export default function JobPage() {
  
      const jobs = [
        { id: 1, title: "Développeur Frontend", company: "TechCorp", location: "Yaoundé" },
    { id: 2, title: "Designer UI/UX", company: "DesignPro", location: "Douala" },
    { id: 3, title: "Data Analyst", company: "DataWorks", location: "En ligne" },
    { id: 4, title: "Développeur Backend", company: "SoftDev", location: "Yaoundé" },
    { id: 5, title: "Administrateur Systèmes", company: "NetSolutions", location: "Douala" },
    { id: 6, title: "Chef de projet IT", company: "ProManage", location: "Yaoundé" },
    { id: 7, title: "Rédacteur Web", company: "ContentHub", location: "En ligne" },
    { id: 8, title: "Community Manager", company: "SocialBuzz", location: "Douala" },
    { id: 9, title: "Ingénieur DevOps", company: "CloudTech", location: "Yaoundé" },
    { id: 10, title: "Consultant Cybersécurité", company: "SecureIT", location: "Yaoundé" },
    { id: 11, title: "Développeur Mobile", company: "AppWorks", location: "Douala" },
    { id: 12, title: "Analyste Financier IT", company: "FinTech", location: "En ligne" },
    { id: 13, title: "Professeur Informatique", company: "UnivTech", location: "Yaoundé" },
    { id: 14, title: "Technicien Réseaux", company: "NetCom", location: "Douala" },
    { id: 15, title: "Spécialiste SEO", company: "RankBoost", location: "En ligne" },
    { id: 16, title: "Game Developer", company: "PlayStudio", location: "Yaoundé" },
    { id: 17, title: "Graphiste 3D", company: "ArtVision", location: "Douala" },
    { id: 18, title: "Support Technique", company: "HelpDesk", location: "En ligne" },
    { id: 19, title: "Administrateur Base de données", company: "DataSecure", location: "Yaoundé" },
    { id: 20, title: "Chargé de Marketing Digital", company: "AdBoost", location: "Douala" },
  
      ];
  return(
    <div className="max-w-5xl mx-auto p-6">
       <h1 className="text-3xl font-bold mb-6">Offres d'emploi (20)</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {jobs.map((job) => (
      <div key={job.id} className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p className="text-gray-600">{job.company} — {job.location}</p>
        <a href="/job_id"
            className="text-blue-600 hover:underline mt-2 inline-block">
             Voir l’offre →
         </a>

       </div>

       ))  }
    </div>

</div>
  );
}