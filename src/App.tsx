/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Droplets, 
  Shield,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-slate overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm">
              UB
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">UB Technik GmbH</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-gray">
            <a href="#leistungen" className="hover:text-brand-orange transition-colors">Leistungen</a>
            <a href="#referenzen" className="hover:text-brand-orange transition-colors">Referenzen</a>
            <a href="#ueber-uns" className="hover:text-brand-orange transition-colors">Über uns</a>
            <a href="#kontakt" className="hover:text-brand-orange transition-colors">Kontakt</a>
          </div>

          <button className="bg-brand-orange hover:bg-[#D04B0A] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-0.5">
            Kostenlose Anfrage
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-1.5 mb-8"
          >
            <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span className="text-xs font-bold tracking-widest text-brand-slate uppercase">Ihr Experte für Estrich & Beton</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
          >
            Das perfekte Fundament für <span className="text-brand-orange italic pr-2">Ihr</span> Bauprojekt.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Spezialisten für Estrich und Unterlagsböden. Höchste Präzision, absolute Zuverlässigkeit und saubere Handwerkskunst – wir schaffen die Basis für Ihre Räume.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button className="w-full sm:w-auto bg-brand-orange hover:bg-[#D04B0A] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Jetzt Angebot einholen
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-brand-slate border border-gray-200 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-md">
              Unsere Leistungen
            </button>
          </motion.div>

          {/* Hero Image & Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/concrete/1920/1080" 
                alt="Flawlessly smooth concrete floor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating UI Card 1 */}
            <div className="absolute -left-6 md:-left-12 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-[bounce_4s_infinite]">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-brand-slate">Geprüfte Qualität</p>
                <p className="text-xs text-brand-gray">DIN-gerechte Ausführung</p>
              </div>
            </div>

            {/* Floating UI Card 2 */}
            <div className="absolute -right-6 md:-right-12 bottom-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-[bounce_5s_infinite_0.5s]">
              <div className="text-left">
                <p className="text-2xl font-black text-brand-orange">100%</p>
                <p className="text-xs font-semibold text-brand-slate">Termintreue</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="leistungen" className="py-24 bg-brand-concrete px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold tracking-widest text-brand-orange uppercase">Unsere Leistungen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Präzision in jeder Schicht.</h2>
            <p className="text-brand-gray max-w-2xl mx-auto text-lg">
              Wir bieten maßgeschneiderte Estrich- und Betonlösungen für Wohn-, Gewerbe- und Industriebauten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Zementestrich</h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Klassisch & Robust. Der bewährte Standard für nahezu alle Bodenbeläge, ideal für Feuchträume und den Außenbereich.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-slate font-semibold hover:text-brand-orange transition-colors">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fließestrich</h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Schnell & Effizient. Perfekt für Fußbodenheizungen durch optimale Wärmeleitfähigkeit und fugenarme Verlegung.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-slate font-semibold hover:text-brand-blue transition-colors">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-brand-slate" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Industrieböden</h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Für höchste Belastung. Hochfeste Spezialböden für Hallen, Werkstätten und Garagen mit extremer Langlebigkeit.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-slate font-semibold hover:text-brand-slate transition-colors">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-brand-slate rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem] pointer-events-none">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bereit für den perfekten Boden?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für eine unverbindliche Beratung und ein maßgeschneidertes Angebot für Ihr Projekt.
            </p>
            <button className="bg-brand-orange hover:bg-[#D04B0A] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
              Projekt anfragen
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-slate pt-16 pb-8 px-6 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm">
                  UB
                </div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">UB Technik GmbH</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Ihr zuverlässiger Partner für Estrich, Unterlagsböden und Betonarbeiten. Qualität und Präzision aus Meisterhand.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Musterstraße 123<br />12345 Musterstadt</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                  <a href="tel:+49123456789" className="hover:text-white transition-colors">+49 (0) 123 456 789</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                  <a href="mailto:info@ub-technik.de" className="hover:text-white transition-colors">info@ub-technik.de</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Rechtliches</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} UB Technik GmbH. Alle Rechte vorbehalten.</p>
            <p>Designed with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
