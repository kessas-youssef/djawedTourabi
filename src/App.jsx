import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Phone, ExternalLink, Play, Users, Star, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import affichePrincipale from './assets/djawedTourabi/djawed affiche sans text.jpg'
import afficheSecond from './assets/djawedTourabi/djawed affiche second.jpg'

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const tourDates = [
    {
      id: 1,
      place: "Opéra d'Alger",
      city: "Alger",
      date: "15 Novembre 2025",
      time: "20h30",
      phone: "+213 21 73 39 04",
      reservationLink: "#reservation1"
    },
    {
      id: 2,
      place: "Théâtre National d'Oran",
      city: "Oran",
      date: "22 Novembre 2025",
      time: "19h00",
      phone: "+213 41 33 25 17",
      reservationLink: "#reservation2"
    },
    {
      id: 3,
      place: "Palais de la Culture",
      city: "Constantine",
      date: "2 Décembre 2025",
      time: "20h00",
      phone: "+213 31 92 14 58",
      reservationLink: "#reservation3"
    },
    {
      id: 4,
      place: "Centre Culturel",
      city: "Annaba",
      date: "10 Décembre 2025",
      time: "19h30",
      phone: "+213 38 86 27 41",
      reservationLink: "#reservation4"
    },
    {
      id: 5,
      place: "Salle Ibn Zeydoun",
      city: "Sétif",
      date: "18 Décembre 2025",
      time: "20h15",
      phone: "+213 36 84 12 93",
      reservationLink: "#reservation5"
    },
    {
      id: 6,
      place: "Maison de la Culture",
      city: "Tlemcen",
      date: "28 Décembre 2025",
      time: "19h45",
      phone: "+213 43 27 58 36",
      reservationLink: "#reservation6"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Belhadj",
      text: "Un spectacle hilarant du début à la fin ! Djawed a un talent incroyable pour nous faire rire de nous-mêmes.",
      rating: 5
    },
    {
      name: "Karim Mansouri",
      text: "Enfin un humoriste qui parle notre langue ! Intelligent, drôle et authentique.",
      rating: 5
    },
    {
      name: "Amina Cherif",
      text: "J'ai rarement autant ri ! Djawed maîtrise parfaitement son art. Bravo !",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen"
    style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${afficheSecond})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
    >
      {/* Landing Section */}
      <section
        className="relative h-screen flex items-start justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${affichePrincipale}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white z-10 max-w-4xl px-6 h-full flex flex-col justify-evenly">
          <h1 style={{ textShadow: '1px 1px 5px black' }} className="text-6xl md:text-8xl font-bold mb-6 text-[#657874]">
            DJAWED TOURABI
          </h1>

          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl mb-4 text-gray-400 courier-prime-bold">
                "Andi Swalah Ngoulhoum"
              </h2>
              
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                  <Play className="inline mr-2" size={20} />
                  Voir le Trailer
              </button>
              <a href='#dateTournee' className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                <Calendar className="inline mr-2" size={20} />
                Voir les Dates
              </a>
            </div>
          </div>
        </div>

        {/* Floating elements animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-yellow-400 text-6xl animate-bounce">😂</div>
          <div className="absolute top-40 right-20 text-orange-400 text-4xl animate-pulse">🎭</div>
          <div className="absolute bottom-32 left-20 text-purple-400 text-5xl animate-bounce">🤣</div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">À Propos de Djawed</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Djawed Tourabi est l'une des voix les plus fraîches de l'humour algérien.
                Avec son style unique qui mélange observations du quotidien et anecdotes personnelles,
                il arrive à nous faire rire de nos petites manies et de nos grands défauts.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Son nouveau spectacle "Andi Swalah Ngoulhoum" est un voyage hilarant à travers
                les situations les plus cocasses de la vie quotidienne, racontées avec l'art
                et la finesse qui caractérisent ce talentueux humoriste.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-gray-400">Spectacles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100K+</div>
                  <div className="text-gray-400">Spectateurs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">15+</div>
                  <div className="text-gray-400">Villes</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x700/1f2937/ffffff?text=Djawed+Portrait"
                alt="Djawed Tourabi"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-full">
                <Users size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates Section */}
      <section
        className="py-20 relative"
        
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4" id='dateTournee'>Dates de Tournée</h2>
            <p className="text-xl text-gray-300">Ne ratez pas "Andi Swalah Ngoulhoum" dans votre ville !</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourDates.map((show) => (
              <div
                key={show.id}
                className="bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedDate(show.id === selectedDate ? null : show.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{show.city}</h3>
                  <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    BIENTÔT
                  </div>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-yellow-500" size={18} />
                    <span>{show.place}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-3 text-yellow-500" size={18} />
                    <span>{show.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-3 text-yellow-500" size={18} />
                    <span>{show.time}</span>
                  </div>
                </div>

                {selectedDate === show.id && (
                  <div className="mt-6 pt-4 border-t border-gray-600">
                    <div className="flex items-center mb-3 text-gray-300">
                      <Phone className="mr-3 text-green-500" size={18} />
                      <span>{show.phone}</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center">
                      <ExternalLink className="mr-2" size={18} />
                      Réserver Maintenant
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ce Que Disent les Spectateurs</h2>
            <p className="text-xl text-gray-400">Des rires garantis à chaque représentation !</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-yellow-400 font-semibold">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Galerie</h2>
            <p className="text-xl text-gray-400">Quelques moments magiques sur scène</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative group cursor-pointer">
                <img
                  src={`https://via.placeholder.com/300x300/4c1d95/ffffff?text=Photo+${i}`}
                  alt={`Gallery ${i}`}
                  className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Play className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Restons en Contact</h2>
          <p className="text-xl text-gray-300 mb-12">
            Suivez Djawed pour ne rien rater de ses prochains spectacles et de ses actualités !
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Youtube size={24} />
            </a>
            <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Professionnel</h3>
            <p className="text-gray-300 mb-4">Pour toute demande de booking ou collaboration :</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <Mail className="mr-2 text-yellow-500" size={18} />
                <span>booking@djawedtourabi.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-2 text-yellow-500" size={18} />
                <span>+213 XX XX XX XX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4">© 2025 Djawed Tourabi. Tous droits réservés.</p>
          <p className="text-gray-600 text-sm">
            Merci de faire partie de cette aventure comique extraordinaire ! 🎭
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;