// Arquivo: src/App.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Gamepad2, Flag, Trophy } from "lucide-react";

const banners = [
  {
    img: "/banner.png",
    alt: "Banner Principal - 4 Rodas Virtual",
  },
  {
    img: "/produto1.jpg",
    alt: "Volante de Simulação",
  },
  {
    img: "/produto2.jpg",
    alt: "Cockpit de Corrida Virtual",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <header className="mb-10 bg-white text-black p-4 rounded-xl">
        <nav className="flex justify-between items-center mb-6">
          <img src="/logo-4-rodas.png" alt="Logo 4 Rodas Virtual" className="h-12" />
          <ul className="flex gap-4 text-sm sm:text-base">
            <li><a href="#noticias" className="hover:text-yellow-400">Notícias</a></li>
            <li><a href="#simracing" className="hover:text-yellow-400">Sim Racing</a></li>
            <li><a href="#calendario" className="hover:text-yellow-400">Calendário</a></li>
            <li className="relative group">
              <button className="hover:text-yellow-400">Campeonatos ▾</button>
              <ul className="absolute hidden group-hover:block bg-zinc-800 text-white p-2 mt-1 rounded shadow-lg">
                <li><a href="#ams2" className="block px-4 py-1 hover:bg-zinc-700">AMS 2</a></li>
                <li><a href="#lmu" className="block px-4 py-1 hover:bg-zinc-700">LMU</a></li>
                <li><a href="#iracing" className="block px-4 py-1 hover:bg-zinc-700">iRacing</a></li>
                <li><a href="#acc" className="block px-4 py-1 hover:bg-zinc-700">ACC</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <p className="text-lg text-red-600 text-center">Automobilismo Real e Virtual em um só lugar</p>
      </header>

      {/* Banner Rotativo */}
      <section className="mb-10">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl h-64">
          <div className="w-full h-full animate-fade-slide">
            {banners.map((banner, index) => (
              <img
                key={index}
                src={banner.img}
                alt={banner.alt}
                className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 5}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="noticias" className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border-zinc-700">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Flag size={40} className="mb-4" />
            <h2 className="text-xl font-semibold">Notícias e Resultados</h2>
            <p className="text-sm text-gray-400 mt-2">Acompanhe o mundo da F1, Stock Car, Endurance e mais.</p>
          </CardContent>
        </Card>

        <Card id="simracing" className="bg-zinc-900 border-zinc-700">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Gamepad2 size={40} className="mb-4" />
            <h2 className="text-xl font-semibold">Sim Racing</h2>
            <p className="text-sm text-gray-400 mt-2">Guias, campeonatos, equipamentos e dicas para pilotos virtuais.</p>
          </CardContent>
        </Card>

        <Card id="calendario" className="bg-zinc-900 border-zinc-700">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <CalendarDays size={40} className="mb-4" />
            <h2 className="text-xl font-semibold">Calendário de Corridas</h2>
            <p className="text-sm text-gray-400 mt-2">Fique por dentro das datas de eventos reais e virtuais.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">Pódio dos Campeões</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-center">
          <div className="bg-zinc-800 p-4 rounded-2xl shadow-md">
            <p className="text-sm text-gray-400">2º Lugar</p>
            <img src="/piloto2.jpg" alt="Piloto 2" className="w-24 h-24 mx-auto rounded-full mt-2" />
            <h3 className="mt-2 text-lg font-semibold">Piloto 2</h3>
          </div>

          <div className="bg-zinc-700 p-6 rounded-2xl shadow-lg transform scale-110">
            <p className="text-sm text-yellow-400">🏆 1º Lugar</p>
            <img src="/piloto1.jpg" alt="Piloto 1" className="w-28 h-28 mx-auto rounded-full mt-2" />
            <h3 className="mt-2 text-xl font-bold">Piloto 1</h3>
          </div>

          <div className="bg-zinc-800 p-4 rounded-2xl shadow-md">
            <p className="text-sm text-gray-400">3º Lugar</p>
            <img src="/piloto3.jpg" alt="Piloto 3" className="w-24 h-24 mx-auto rounded-full mt-2" />
            <h3 className="mt-2 text-lg font-semibold">Piloto 3</h3>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">Últimas Corridas no YouTube</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-xl shadow p-4">
            <img
              src="https://img.youtube.com/vi/kEk62QsEoUI/hqdefault.jpg"
              alt="Corrida AMS2 - Interlagos"
              className="w-full rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold text-white mb-1">Corrida AMS2 - Grande Prêmio de Interlagos</h3>
            <a
              href="https://www.youtube.com/watch?v=kEk62QsEoUI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              Assistir agora
            </a>
          </div>
          <div className="bg-zinc-900 rounded-xl shadow p-4">
            <img
              src="https://img.youtube.com/vi/buxEmYcmggY/hqdefault.jpg"
              alt="Corrida ACC - Spa"
              className="w-full rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold text-white mb-1">Corrida ACC - Circuito de Spa-Francorchamps</h3>
            <a
              href="https://www.youtube.com/watch?v=buxEmYcmggY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              Assistir agora
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.youtube.com/@SeuCanalAqui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2 rounded-xl shadow"
          >
            Ver mais no YouTube
          </a>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 4 Rodas Racing. Todos os direitos reservados.
      </footer>
    </main>
  );
}
