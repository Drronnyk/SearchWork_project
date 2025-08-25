
export default function Profile_candidat() {
  return(
    <div className="flex items-center min-h-screen justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md
        p-6 m-4">
      <h1 className="text-3xl font-semibold text-center mb-9">Completez votre profil</h1>
      <form action="">
         {/*informations personnelles */}
      <div>
        <h2 className="text-center text-2xl font-semibold p-2"> Informations personnelles</h2>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Nom</label>
          <input required  type="text" placeholder="Ex: Kengne " className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
        </span>
        <span>
        <label htmlFor="" className="block text-sm font-medium
              mb-1">Prenom</label>
        <input required type="text" placeholder="Ex: Ronny "className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300" />
        </span>
        <span>
        <label htmlFor=""className="block text-sm font-medium
              mb-1">Email</label>
        <input required type="email" name="" id="" placeholder="calinronny7@gmail.com"className="w-full px-3 py-2 border rounded-lg focus:outline-none
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
      <h2 className="text-center text-2xl font-semibold p-4">Competences et experiences </h2>
        <span>
          <label htmlFor=""className="block text-sm font-medium
              mb-1">Competences</label>
          <textarea required name="" id="" placeholder="Devellopeur Fullstack"  className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"></textarea>
        </span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Annee d'experiences</label>
          <input required type="number" name="" id="" placeholder="8" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300" /> 
        </span>
        <span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">Formation</label>
          <textarea required name="" id="" placeholder="DUT genie informatique" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"></textarea >
        </span>
        </span>
      </div>
      {/*Media */}
      <div>
      <h2  className="text-center text-2xl font-semibold p-4"> Medias  </h2>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1">CV</label>
          <input required type="file" name="" id="" className="w-full px-3 py-2 border rounded-lg focus:outline-none
              focus: ring focus:ring-blue-300"/>
              
        </span>
        <span>
          <label htmlFor="" className="block text-sm font-medium
              mb-1"> Lien portfolio</label>
          <input type="url" name="" id="" className="w-full px-3 py-2 border rounded-lg focus:outline-none
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