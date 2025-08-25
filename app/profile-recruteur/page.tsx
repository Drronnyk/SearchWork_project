
export default function profile_recruteur() {
  return(
    <div className="flex items-center min-h-screen justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md
        p-6 m-4">
      <h1 className="text-3xl font-semibold text-center mb-9">Completez le profil de votre entreprise</h1>
      <form action="">
         {/*informations personnelles */}
      <div>
        <h2 className="text-center text-2xl font-semibold p-2"> Informations personnelles</h2>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Nom</label>
          <input required  type="text" placeholder="Ex: Innova Tech " className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
        </span>
        <span>
        <label htmlFor=""className="block text-sm font-medium
              mb-1">Email</label>
        <input required type="email" name="" id="" placeholder="calinronny7@gmail.com"className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
        </span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">statut entreprise</label>
          <input required type="text" name="" id="" placeholder="Sarl" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
        </span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Telephone</label>
          <input required type="text" name="" id="" placeholder="690076856" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
        </span>
      </div>

      <div>
      <h2 className="text-center text-2xl font-semibold p-4">Description de l'entreprise </h2>
        <span>
          <label htmlFor=""className="block text-sm font-medium
              mb-1">Description de l'entreprise</label>
          <textarea required name="" id="" placeholder="entreprise de devellopement de saas"  className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"></textarea>
        </span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Adresse de l'entreprise</label>
          <input required type="text" name="" id="" placeholder="Mboppi-bar" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300" /> 
        </span>
        <span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Description du poste</label>
          <textarea required name="" id="" placeholder="devellopeur fullstack" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"></textarea >
        </span>
        </span>
      </div>
      {/*Media */}
      <div>
      <h2  className="text-center text-2xl font-semibold p-4"> Medias  </h2>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Logo entreprise</label>
          <input required type="file" name="" id="" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
              
        </span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1"> Salaire</label>
          <input type="text" name="" id="" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
        </span>

      </div>
      <button type="submit" className="w-full bg-blue-500 text-white 
            py-2 mt-4 rounded-lg hover:bg-blue-700 transition">

              Soumettre


      </button> 
 

      </form> 
      </div>
     </div>
   
  )
}