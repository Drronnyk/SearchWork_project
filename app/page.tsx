import { Search } from "lucide-react";
import { UserSearch } from "lucide-react";
import { Download } from "lucide-react";
import 'animate.css';
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <section className="relative max-w-full h-[80vh] flex item-center justify-items-center text-center 
            text-white">
        <Image src="/banner-image.jpeg" alt="image baniere de mon app"
        fill  className="object-cover brightness-50" priority/>

        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center 
        animate__animated animate__fadeInDown">
          
          <h1 className="text-4xl font-bold text-blue-600 animate__animated
          animated__bounceIn">
            Bienvenue sur SearchWork</h1>

          <p className="mt-4 text-lg text-white animate__animated animate__FadeInUp animate__delay-2s">
            Trouvez le candidat ou le Job qu'il vous faut en quelques clics
          </p>
          <a href="/profile-recruteur" className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Voir les offres</a>  
          <div className="flex   mt-7  shadow-2xl rounded-lg ">
            <input type="search" placeholder="Rechercher un Job..." className= "flex   grow outline-none px-6 bg-white text-black"/>
            <Search className="text-black  bg-white "/>
        </div>
        </div>
        
            </section>
     <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-center font-bold mb-8">Offres Récentes</h2>

        <div className="grid md:grid-cols-3 gap-6 ">

            <div className="bg-white shadow-lg rounded-xl p-6 mb-2.5 hover:scale-105 transition-transform animate__animated animate__fadeInUp animate__delay-[0.2s]">
                <h3 className="text-xl font-semibold">

                    Devellopeur Web

                </h3>
                <p className="text-gray-600">TechCorp - Douala</p>
                <button className="mt-4 bg-blue-600 text-white px-4
                py-2 rounded-lg hover:bg-blue-700">Postuler</button>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 mb-2.5  hover:scale-105 transition-transform animate__animated animate__fadeInUp animate__delay-[0.2s]">
                <h3 className="text-xl font-semibold">

                    Secretaire de Direction

                </h3>
                <p className="text-gray-600">Cristal5 - Bertoua</p>
                <button className="mt-4 bg-blue-600 text-white px-4
                py-2 rounded-lg hover:bg-blue-700">Postuler</button>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 mb-2.5 hover:scale-105 transition-transform animate__animated animate__fadeInUp animate__delay-[0.2s]">
                <h3 className="text-xl font-semibold">

                    Community Manager

                </h3>
                <p className="text-gray-600">IDAO - Yaounde</p>
                <button className="mt-4 bg-blue-600 text-white px-4
                py-2 rounded-lg hover:bg-blue-700">Postuler</button>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">

<div className="bg-white shadow-lg rounded-xl p-6 mb-2.5 hover:scale-105 transition-transform animate__animated animate__fadeInUp animate__delay-[0.2s]">
    <h3 className="text-xl font-semibold">

        Traducteur Allemand

    </h3>
    <p className="text-gray-600">Minrex - Douala</p>
    <button className="mt-4 bg-blue-600 text-white px-4
    py-2 rounded-lg hover:bg-blue-700">Postuler</button>
</div>
<div className="bg-white shadow-lg rounded-xl p-6 mb-2.5  hover:scale-105 transition-transform animate__animated animate__fadeInUp animate__delay-[0.2s]">
    <h3 className="text-xl font-semibold">

        Data Scientist

    </h3>
    <p className="text-gray-600">Innova - Bertoua</p>
    <button className="mt-4 bg-blue-600 text-white px-4
    py-2 rounded-lg hover:bg-blue-700">Postuler</button>
</div>
<div className="bg-white shadow-lg rounded-xl p-6 mb-2.5  hover:scale-105 transition-transform animate__animated animate__fadeInUp animate__delay-[0.2s]">
    <h3 className="text-xl font-semibold">

        Designer UI/UX

    </h3>
    <p className="text-gray-600">RitaTech - Yaounde</p>
    <button className="mt-4 bg-blue-600 text-white px-4
    py-2 rounded-lg hover:bg-blue-700">Postuler</button>
</div>
</div>

</section>
    <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
            Rejoignez SearchWork des maintenant 
        </h2>
        <p className="text-xl mb-8 text-lg">

            Que vous soyez candidat ou recruteur, <strong>SearchWork 

            </strong> est ce qu'il vous faut 

        </p>
        <div className="flex justify-center gap-6">
            <a href="/job" className="bg-white text-blue-600
            px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 scale-105 flex animate__animated animate__zoomIn" >
                <UserSearch className="w-9"/>

                Trouver un emploi
            </a>
            <a href="/job" className="bg-white text-blue-600
            px-6 py-3 rounded-lg flex font-semibold hover:bg-gray-100 scale-105 
            animate__animated animate__zoomIn">
                 <Download className="w-9"/>
                Deposer votre CV
            </a>

        </div>

    </section>

      </div>
    );
  }