import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Phone, ExternalLink, Play, Users, Star, Mail, Instagram, Facebook, Youtube, LucideMousePointerClick, Info } from 'lucide-react';
import affichePrincipale from './assets/djawedTourabi/djawed affiche sans text.webp'
import afficheSecond from './assets/djawedTourabi/djawed affiche second.webp'
import visage from './assets/djawedTourabi/visage.webp'
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import TrueFocus from './TrueFocus';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const tourDates = [
    {
      id: 1,
      place: "Théâtre la Fourmi",
      city: "Oran",
      date: "09 Octobre 2025",
      time: "19h00",
      phone: "0560 76 54 06",
      reservationLink: "https://theatre-la-fourmi-liberte.spectacles-dz.com/fr?fbclid=PAb21jcANBTghleHRuA2FlbQIxMQABp-L0LdjRrqP-mW2HG_XfQyujzXQhR-8aX0ZsLc06dNG_2vEUQEgTbOUwDCaJ_aem_u0vCU-PyoULmdAA-ns0uYg"
    },
    {
      id: 2,
      place: "Artissimo",
      city: "Alger",
      date: "23 Octobre 2025",
      time: "20h00",
      phone: "070 49 28 41"
    },
    {
      id: 3,
      place: "Théâtre la Fourmi",
      city: "Oran",
      date: "13 Novembre 2025",
      time: "18h30",
      phone: "0560 76 54 06",
      reservationLink: "https://theatre-la-fourmi-liberte.spectacles-dz.com/fr?fbclid=PAb21jcANBTghleHRuA2FlbQIxMQABp-L0LdjRrqP-mW2HG_XfQyujzXQhR-8aX0ZsLc06dNG_2vEUQEgTbOUwDCaJ_aem_u0vCU-PyoULmdAA-ns0uYg "
    },
    {
      id: 4,
      place: "Hôtel Ibis",
      city: "Tlemcen",
      date: "20 Novembre 2025",
      time: "18h00",
      phone: "07 ** ** ** **"
    },
    {
      id: 5,
      place: "Artissimo",
      city: "Alger",
      date: "27 Novembre 2025",
      time: "20h00",
      phone: "0770 49 28 41"
    },
    {
      id: 6,
      place: "Théâtre la Fourmi",
      city: "Oran",
      date: "18 Décembre 2025",
      time: "18h00",
      phone: "0560 76 54 06",
      reservationLink: "https://theatre-la-fourmi-liberte.spectacles-dz.com/fr?fbclid=PAb21jcANBTghleHRuA2FlbQIxMQABp-L0LdjRrqP-mW2HG_XfQyujzXQhR-8aX0ZsLc06dNG_2vEUQEgTbOUwDCaJ_aem_u0vCU-PyoULmdAA-ns0uYg "
    }
  ];


  const testimonials = [
    {
      name: "Kessas Youcef",
      text: "Un spectacle hilarant du début à la fin ! Djawed a un talent incroyable pour nous faire rire de nous-mêmes.",
      rating: 5
    },
    {
      name: "Anonyme",
      text: "Enfin un humoriste qui parle notre langue ! Intelligent, drôle et authentique.",
      rating: 5
    },
    {
      name: "Anonyme",
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
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${affichePrincipale}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white z-10 max-w-4xl px-6 h-full flex gap-[40vh] flex-col justify-evenly">
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
              {/* Trailer Button */}
              {/* <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                <Play className="inline mr-2" size={20} />
                Voir le Trailer
              </button> */}
              <a href='#apropos' className=" hidden border-2 border-[#FDF0D5] text-[#FDF0D5] hover:bg-[#FDF0D5] hover:text-black px-4 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 md:flex justify-center items-center">
                <Info className="inline" size={20} />
              </a>
              <a href='#dateTournee' className="border-2 text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex justify-center items-center">
                <Calendar className="inline mr-2" size={20} />
                Voir les Dates
              </a>
              <a href='#galery' className=" hidden border-2 border-[#C6D8D3] text-[#C6D8D3] hover:bg-[#C6D8D3] hover:text-black px-4 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 md:flex justify-center items-center">
                <Youtube className="inline" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Floating elements animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden">
          <div className="absolute top-20 left-10 text-yellow-400 text-6xl animate-bounce">😂</div>
          <div className="absolute top-40 right-20 text-orange-400 text-4xl animate-pulse">🎭</div>
          <div className="absolute bottom-32 left-20 text-purple-400 text-5xl animate-bounce">🤣</div>
        </div>
      </section>

      {/* About Section */}
      <section id='apropos' className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* <h2 className="text-4xl font-bold text-white mb-6">À Propos de Djawed</h2> */}
              <TrueFocus sentence='À Propos de Djawed' borderColor='oklch(85.2% 0.199 91.936)' />
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Djawed Tourabi est humoriste et comédien de stand-up. Depuis 2022, il monte sur scène pour partager son regard aiguisé – et souvent drôle – sur la société et sur lui-même.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Son premier spectacle, “Machi la faute ta3i”, a affiché complet pendant deux années consécutives. Avec son humour sincère et sans filtre, Djawed a su créer un lien unique avec le public, oscillant entre rires francs et réflexions profondes.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                En 2025, il revient avec un nouveau spectacle : “3andi swala7 ngoulhoum” (j'ai des choses à dire). Un stand-up plus intime, où il explore cette fois son monde intérieur, ses contradictions et ses vérités… toujours avec le sourire et l'autodérision qui le caractérisent.
                Djawed Tourabi, c'est un humour qui parle à tout le monde : parfois piquant, parfois tendre, mais toujours authentique
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
                src={visage}
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
                    {show.reservationLink ? 'Reserver En ligne' : 'Par Telephone'}
                  </div>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-yellow-500" size={18} />
                    <span>{show.place}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-3 text-yellow-500" size={18} />
                    <span className='mr-3'>{show.date}</span>
                    <LucideMousePointerClick className='animate-pulse w-1/3' />
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
                      <a href={`tel:${show.phone}`} target='_blank'>{show.phone}</a>
                    </div>
                    {
                      show.reservationLink
                      &&
                      <a target='_blank' href={show.reservationLink} className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center">
                        <ExternalLink className="mr-2" size={18} />
                        Réserver Maintenant
                      </a>
                    }
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
      <section className="py-20" id='galery'>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Galerie</h2>
            <p className="text-xl text-gray-400">Quelques moments magiques sur scène</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['Xc7lI4IjDgg', 'Quelques moments volés de la dernière date "Machi la faute taعi"'],
              ['XVtcj_eOtnY', 'Quand ta femme te surprend...'],
              ['ZOEVud8htPE', 'ولدي ما بغاش يقرى و السبب'],
              ['2KQ2IEV7r8M', 'Show time'],
              ['ElPVqfgENJw', 'ادخلو بكري للدار الله يهديكم 😅😅'],
              ['F9acFnGhy4Q', 'Soupe de poisson plat mélange'],
              ['MtQyvglSy4o', 'زوج شاشرة'],
              ['Ow19FdmCdYY', 'Il était très chelou le mec']
            ].map((i) => (
              <div key={i} className="relative group rounded-xl overflow-clip">
                <LiteYouTubeEmbed
                  id={i[0]}
                  title={i[1]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#657874] to--800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Restons en Contact</h2>
          <p className="text-xl text-gray-300 mb-12">
            Suivez Djawed pour ne rien rater de ses prochains spectacles et de ses actualités !
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a target='_blank' href="https://www.instagram.com/djawed_tourabi" className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a target='_blank' href="https://www.facebook.com/p/Djawed-Tourabi-100088958334746/" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a target='_blank' href="https://www.youtube.com/@djawedtourabi" className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Youtube size={24} />
            </a>
            <a target='_blank' href="mailto:tourabi.djawed@gmail.com" className="bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Professionnel</h3>
            <p className="text-gray-300 mb-4">Pour toute demande de booking ou collaboration :</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <Mail className="mr-2 text-yellow-500" size={18} />
                <a target='_blank' href='mailto:tourabi.djawed@gmail.com'>tourabi.djawed@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-2 text-yellow-500" size={18} />
                <a target='_blank' href='tel:+213541135746'>+213 541 13 57 46</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4">© {new Date().getFullYear()} Djawed Tourabi. Tous droits réservés. Developé par <a className='font-bold' target='_blank' href='https://www.oranwebbrains.com'>Oran Web Brains</a></p>
          <p className="text-gray-600 text-sm">
            Merci de faire partie de cette aventure comique extraordinaire ! 🎭
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;