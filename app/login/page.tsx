export default function LoginPage() {
  return(
    <div className="flex items-center justify-center min-h-screen
    bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md
      p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
            Se connecter 
        </h1>
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="" className="block text-sm font-medium
            mb-1">Email</label>
            <input type="email" placeholder="Entrez votre nom" className="
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
          <button type="submit" className="w-full bg-blue-500 text-white 
          py-2 rounded-lg hover:bg-blue-700 ">

            Connexion

          </button>
          
        </form>
        <p className="text-center text-sm mt-4">
          Pas encore insrit ? <a href="/register" className="text-blue-600
          hover:underline">Creez un compte</a>

        </p>
      </div>

    </div>
  )
}