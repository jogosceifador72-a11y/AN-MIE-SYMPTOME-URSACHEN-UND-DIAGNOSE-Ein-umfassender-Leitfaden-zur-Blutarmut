/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { BookCover } from './components/BookCover';
import { PurchaseNotification } from './components/PurchaseNotification';
import { SocialLinks } from './components/SocialLinks';
import { LaborwerteDecoder } from './components/LaborwerteDecoder';
import { SymptomChecklist } from './components/SymptomChecklist';
import { TableOfContents } from './components/TableOfContents';
import { FAQSection } from './components/FAQSection';
import { LeseprobeModal } from './components/LeseprobeModal';

import consultationImg from './assets/images/medical_consultation_1792171326548.jpg';
import erythrocytesImg from './assets/images/erythrocytes_blood_cells_1792171325660.jpg';
import ambientMeshBg from './assets/images/deep_medical_mesh_bg_1792270802905.jpg';

const CHECKOUT_URL = 'https://pay.hotmart.com/E108024270R?checkoutMode=10';
const PRICE_DISPLAY = '25,81 €';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 flex flex-col font-sans selection:bg-rose-900 selection:text-white relative overflow-x-hidden">
      
      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-red-500 to-amber-400 origin-left z-50 shadow-[0_0_12px_rgba(244,63,94,0.8)]"
        style={{ scaleX }}
      />

      {/* Atmospheric Fixed Ambient Backdrop (No plain white background) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 mix-blend-screen">
        <img
          src={ambientMeshBg}
          alt=""
          className="w-full h-full object-cover filter blur-[2px] scale-105"
        />
      </div>

      {/* Radiant Glow Spheres & Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[70%] -left-40 w-[550px] h-[550px] bg-rose-700/15 rounded-full blur-[140px]" />
      </div>

      {/* 1. TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#050b14]/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="font-editorial-title font-extrabold text-xl sm:text-2xl tracking-widest text-white group-hover:text-rose-400 transition-colors">
              ANÄMIE
            </span>
            <span className="text-xs text-rose-400/80 font-mono hidden sm:inline">
              LEITFADEN
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('problem-loesung')}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Was löst es?
            </button>
            <button
              onClick={() => scrollToSection('symptome')}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Symptom-Check
            </button>
            <button
              onClick={() => scrollToSection('laborwerte')}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Laborwerte
            </button>
            <button
              onClick={() => scrollToSection('inhalt')}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Inhalt (30 Seiten)
            </button>
            <button
              onClick={() => scrollToSection('fuer-wen')}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Zielgruppe
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action with updated price */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CHECKOUT_URL}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-red-700 hover:from-rose-500 hover:to-red-600 rounded-xl transition-all duration-300 shadow-lg shadow-rose-950/60 hover:shadow-rose-900/80 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 glow-ruby-subtle transform hover:scale-[1.02]"
            >
              <span>Jetzt sichern</span>
              <span className="opacity-60">·</span>
              <span className="font-mono">{PRICE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        
        {/* 2. HERO SECTION WITH SCROLL REVEAL */}
        <section className="relative pt-10 sm:pt-16 pb-16 lg:pb-28 overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Headlines & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-6"
              >
                
                {/* Authority kicker */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-semibold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>30 Seiten Praxis-Leitfaden (PDF)</span>
                  <span aria-hidden="true" className="text-rose-500/50">·</span>
                  <span className="text-slate-300 font-normal">Sofortiger E-Mail-Download</span>
                </div>

                {/* Main Hero Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] text-balance">
                  Anämie verstehen, Warnsignale erkennen und Laborwerte richtig einordnen.
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
                  Schluss mit unerklärlicher Erschöpfung, Schwindel und blinder Nahrungsergänzung. Erhalten Sie auf 30 Seiten klare, fundierte Orientierung ohne Medizinstudium und ohne Fachchinesisch – verständlich, praxisnah und direkt für Ihr nächstes Arztgespräch.
                </p>

                {/* Key Benefits Bullet List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>Symptome wie Blässe & Herzrasen biologisch verstehen</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>Ferritin, MCV & Blutbild ohne Rätselraten deuten</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>Eisen-, B12- & genetische Ursachen unterscheiden</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>Gefährliche Selbstmedikation gezielt vermeiden</span>
                  </div>
                </div>

                {/* CTA Block with Updated Price */}
                <div className="pt-4 space-y-3.5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <a
                      href={CHECKOUT_URL}
                      className="px-7 py-4 bg-gradient-to-r from-rose-600 via-rose-700 to-red-600 hover:from-rose-500 hover:to-red-500 text-white rounded-xl font-bold text-sm sm:text-base text-center shadow-xl shadow-rose-950/80 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer glow-ruby"
                    >
                      <span>Leitfaden jetzt herunterladen</span>
                      <span className="opacity-70">·</span>
                      <span className="font-mono text-white">{PRICE_DISPLAY}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsPreviewOpen(true)}
                      className="px-5 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-xs sm:text-sm text-center transition-all cursor-pointer flex items-center justify-center gap-2 backdrop-blur-md"
                    >
                      <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Kostenlose Leseprobe ansehen</span>
                    </button>
                  </div>

                  {/* Trust guarantees bar */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sofortiger PDF-Download
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Sichere 256-Bit SSL-Zahlung via Hotmart
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-300">Einmalzahlung ohne Abonnement</span>
                  </div>
                </div>

              </motion.div>

              {/* Right Column: 3D Book Cover with Scroll Motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0"
              >
                <BookCover
                  size="large"
                  onOpenPreview={() => setIsPreviewOpen(true)}
                />
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. PROBLEM & SOLUTION SECTION ("Was löst es?") WITH SCROLL ANIMATIONS */}
        <section id="problem-loesung" className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-14 sm:mb-18"
            >
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                Wirkung & Klarheit
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-3 text-balance">
                Dieses E-Book räumt die häufigsten Unsicherheiten endgültig aus dem Weg
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 text-balance leading-relaxed">
                Viele Betroffene verbringen Monate mit diffusen Beschwerden oder nehmen planlos Eisenpräparate, die den Magen belasten, ohne die wahre Ursache zu kennen.
              </p>
            </motion.div>

            {/* Asymmetric 4-Card Problem Solver Grid with Staggered Scroll Reveal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-7 sm:p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-600/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold text-lg mb-5 shadow-inner">
                  01
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Unklare & diffuse Symptome
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Sie erfahren im Detail, wie <strong className="text-white">Müdigkeit, Schwindelgefühle, Blässe und plötzliches Herzklopfen</strong> direkt mit dem Sauerstoffmangel in Ihren roten Blutkörperchen zusammenhängen – und warum diese Symptome oft schleichend schlimmer werden.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-7 sm:p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-lg mb-5 shadow-inner">
                  02
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Unsicherheit bei den wirklichen Ursachen
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Nicht jede Blutarmut ist ein Eisenmangel! Der Leitfaden liefert Ihnen einen präzisen Überblick: von <strong className="text-white">Eisen-, Vitamin-B12- und Folsäuremangel</strong> bis hin zu Resorptionsstörungen und genetischen Varianten wie <strong className="text-white">Sichelzellanämie und Thalassämie</strong>.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-7 sm:p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-lg mb-5 shadow-inner">
                  03
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Unverständliche Laborwerte im Befund
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Schluss mit verwirrenden Abkürzungen: <strong className="text-white">Kleines Blutbild, MCV, MCH, Ferritin und Retikulozyten</strong> werden Schritt für Schritt in einfachen Worten aufgeschlüsselt, damit Sie Ihren Laborbericht auf Augenhöhe verstehen.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-7 sm:p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg mb-5 shadow-inner">
                  04
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Zeit- & gesundheitliche Risiken minimieren
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Sie vermeiden gefährliche Selbstdiagnosen und die <strong className="text-white">blinde Einnahme hochdosierter Präparate ohne fundierte Laborwerte</strong>. Sie wissen genau, welche Tests medizinisch sinnvoll sind und wann Sie Ihre Arztpraxis aufsuchen müssen.
                </p>
              </motion.div>

            </div>

            {/* Core Outcome Box with 25,81 € */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0d1f3c] via-[#142646] to-rose-950/60 border border-rose-500/30 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 glow-ruby-subtle"
            >
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  Das konkrete Ergebnis für Sie
                </span>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  Sie wissen nach der Lektüre exakt, worauf Sie achten müssen, welche Blutwerte essenziell sind und wie Sie optimal vorbereitet ins nächste Arztgespräch gehen.
                </p>
              </div>
              <a
                href={CHECKOUT_URL}
                className="w-full md:w-auto px-7 py-3.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold rounded-xl text-xs sm:text-sm text-center transition-all duration-300 shadow-lg shadow-rose-950/60 shrink-0 whitespace-nowrap cursor-pointer glow-ruby"
              >
                Jetzt Zugang sichern ({PRICE_DISPLAY})
              </a>
            </motion.div>

          </div>
        </section>

        {/* 4. SYMPTOM CHECKLIST SECTION WITH SCROLL REVEAL */}
        <section id="symptome" className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <SymptomChecklist onCtaClick={handleCheckout} />
            </motion.div>
          </div>
        </section>

        {/* 5. VISUAL STORYTELLING & SCIENTIFIC FOUNDATION */}
        <section className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Image asset with clean caption and glowing glass frame */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 relative"
              >
                <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 aspect-[4/3] group relative">
                  <img
                    src={erythrocytesImg}
                    alt="Mikroskopische Ansicht roter Blutkörperchen"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Mikroskopische Sauerstoffträger (Erythrozyten)
                  </span>
                  <span className="font-mono text-rose-400">Im E-Book illustriert</span>
                </div>
              </motion.div>

              {/* Text explanation */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 space-y-5"
              >
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                  Ohne Fachchinesisch
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Warum Sauerstoffmangel jede Zelle Ihres Körpers lahmlegt
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Ihre roten Blutkörperchen transportieren jede Sekunde Milliarden Sauerstoffmoleküle durch ein Gefäßnetz von über 100.000 Kilometern. Fehlt Ihnen Eisen, Vitamin B12 oder die richtige Zellstruktur, sinkt die Sauerstoffsättigung in Muskeln, Gehirn und Herz.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Auf 30 Seiten nimmt Sie dieser Leitfaden an die Hand: mit anschaulichen Grafiken, klaren Analogien und einer Struktur, die Sie ganz in Ihrem eigenen Tempo durchgehen können.
                </p>
                
                <div className="pt-3 grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white block">30</span>
                    <span className="text-xs text-slate-400 mt-1 block">Praxisseiten</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white block">100%</span>
                    <span className="text-xs text-slate-400 mt-1 block">Verständlich</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white block">PDF</span>
                    <span className="text-xs text-slate-400 mt-1 block">Universell lesbar</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 6. LABORWERTE DECODER SECTION */}
        <section id="laborwerte" className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <LaborwerteDecoder />
            </motion.div>
          </div>
        </section>

        {/* 7. MEDICAL CONSULTATION & CHECKLIST INSIGHT */}
        <section className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 order-2 lg:order-1 space-y-5"
              >
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                  Gut vorbereitet zum Arzt
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Das Arztgespräch auf Augenhöhe führen
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Ärztinnen und Ärzte haben im Praxisalltag oft nur wenige Minuten Zeit pro Patient. Wer seine Symptome präzise beschreiben kann und weiß, nach welchen Laborwerten (z. B. Ferritin statt nur Serum-Eisen) gefragt werden sollte, spart wertvolle Wochen und vermeidet Fehldiagnosen.
                </p>
                
                <div className="space-y-3.5 pt-2">
                  <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-start gap-3.5">
                    <span className="text-rose-400 font-bold text-sm bg-rose-950/80 px-2.5 py-1 rounded-lg border border-rose-500/30">01</span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      <strong className="text-white">Checkliste für das Erstgespräch:</strong> Welche Beschwerden chronologisch und konkret geschildert werden sollten.
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-start gap-3.5">
                    <span className="text-rose-400 font-bold text-sm bg-rose-950/80 px-2.5 py-1 rounded-lg border border-rose-500/30">02</span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      <strong className="text-white">Die 5 wichtigsten Laborfragen:</strong> Welche Werte bei Verdacht auf Anämie routinemäßig gefordert werden sollten.
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-start gap-3.5">
                    <span className="text-rose-400 font-bold text-sm bg-rose-950/80 px-2.5 py-1 rounded-lg border border-rose-500/30">03</span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      <strong className="text-white">Verlaufskontrolle:</strong> Wann nach einer Therapie eine Nachkontrolle im Blutbild zwingend erforderlich ist.
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 aspect-[16/9] group relative">
                  <img
                    src={consultationImg}
                    alt="Ärztliches Beratungsgespräch zur Blutbildanalyse"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Diagnose und Befundbesprechung optimal vorbereiten</span>
                  <span className="font-mono text-rose-400">Kapitel 5</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 8. TABLE OF CONTENTS / KAPITELÜBERSICHT */}
        <section id="inhalt" className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                Struktur & Aufbau
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-3">
                Was erwartet Sie auf den 30 Seiten?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Klar gegliedert in fünf logische Module – ohne langes Vorgeplänkel, direkt auf den Punkt gebracht.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
            >
              <TableOfContents />
            </motion.div>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-rose-400 hover:text-rose-300 underline decoration-rose-500/50 underline-offset-4 cursor-pointer transition-colors"
              >
                <span>Leseprobe der ersten Seiten jetzt öffnen</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* 9. ZIELGRUPPE: FÜR WEN IST ES / NICHT FÜR WEN */}
        <section id="fuer-wen" className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-14 sm:mb-18"
            >
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                Transparenz & Orientierung
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-3 text-balance">
                Für wen ist dieser Leitfaden geschrieben?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Wir legen größten Wert auf realistische Erwartungen und seriöse Gesundheitsaufklärung.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Für Sie */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 to-[#071322] backdrop-blur-xl flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-base shadow-sm">
                      ✓
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Dieser Leitfaden ist perfekt für Sie, wenn:
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold mt-0.5">●</span>
                      <span>
                        <strong className="text-white">Sie Blutarmut wirklich verstehen wollen</strong> – verständlich aufbereitet, ganz ohne Medizinstudium oder unverständliches Latein.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold mt-0.5">●</span>
                      <span>
                        <strong className="text-white">Sie Betroffene:r, Angehörige:r oder Interessierte:r sind</strong> und klare Orientierung im Dschungel aus Symptomen und Ursachen suchen.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold mt-0.5">●</span>
                      <span>
                        <strong className="text-white">Sie einen kompakten Überblick suchen</strong>, um gut vorbereitet, informiert und selbstbestimmt ins nächste Arztgespräch zu gehen.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold mt-0.5">●</span>
                      <span>
                        <strong className="text-white">Sie Ihr eigenes Lerntempo schätzen:</strong> In 30 Seiten haben Sie alles Wesentliche auf Ihrem Smartphone oder Tablet griffbereit.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-emerald-500/20">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Kompakte Orientierung & Sicherheit für Ihre Gesundheit
                  </span>
                </div>
              </motion.div>

              {/* Nicht für Sie */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-9 h-9 rounded-xl bg-white/10 text-slate-400 border border-white/20 flex items-center justify-center font-bold text-base">
                      ✕
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Nicht für Sie geeignet, wenn:
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="text-slate-500 font-bold mt-0.5">●</span>
                      <span>
                        <strong className="text-slate-200">Sie eine Wunderheilung ohne ärztliche Abklärung erwarten:</strong> Anämie erfordert stets eine saubere labordiagnostische Bestimmung.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="text-slate-500 font-bold mt-0.5">●</span>
                      <span>
                        <strong className="text-slate-200">Sie einen Arztbesuch ersetzen wollen:</strong> Der Ratgeber dient ausschließlich Informationszwecken und stellt keine medizinische Therapie dar.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="text-slate-500 font-bold mt-0.5">●</span>
                      <span>
                        <strong className="text-slate-200">Sie lange, rein wissenschaftliche Fachmonographien bevorzugen:</strong> Unser Fokus liegt auf schneller Verständlichkeit und direktem praktischem Nutzen.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <span className="text-xs font-semibold text-slate-400">
                    Seriöse wissenschaftlich fundierte Patientenaufklärung
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 10. PRICING & CONVERSION ORDER BLOCK WITH 25,81 € */}
        <section className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl border border-rose-500/40 shadow-2xl overflow-hidden p-8 sm:p-12 relative glow-ruby"
            >
              
              {/* Decorative top accent line */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-rose-600 via-red-500 to-amber-500" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                    Direkter Sofortzugang
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Starten Sie noch heute mit fundiertem Wissen
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Sichern Sie sich den 30-seitigen Praxisleitfaden als PDF. Nach Bestätigung der Zahlung erhalten Sie Ihren persönlichen Download-Link umgehend per E-Mail.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Vollständige 30 Seiten im praktischen PDF-Format</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Lesbar auf Smartphone, Tablet, PC und e-Reader</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Inklusive Laborwerte-Decoder & Checkliste fürs Arztgespräch</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Lebenslanger Zugriff ohne wiederkehrende Kosten</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-gradient-to-b from-[#0c1c38] to-[#071120] rounded-2xl p-6 sm:p-7 border border-rose-500/30 text-center flex flex-col justify-center shadow-xl">
                  <span className="text-xs text-rose-300 uppercase tracking-wider font-bold">
                    Einmalige Investition
                  </span>
                  
                  <div className="my-3.5 flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight drop-shadow-md">
                      {PRICE_DISPLAY}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-6">
                    Inkl. MwSt. · Keine versteckten Kosten · Kein Abo
                  </p>

                  <a
                    href={CHECKOUT_URL}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-rose-950/80 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer block text-center glow-ruby"
                  >
                    Jetzt bestellen & herunterladen
                  </a>

                  <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-slate-300">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Sichere SSL-Zahlung via Hotmart</span>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section id="faq" className="py-20 sm:py-28 relative border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                Häufige Fragen
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-3">
                Häufig gestellte Fragen (FAQ)
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Alles, was Sie über den Zugang, das Format und die Inhalte wissen möchten.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
            >
              <FAQSection />
            </motion.div>
          </div>
        </section>

      </main>

      {/* 12. FOOTER MIT SOCIAL MEDIA BUTTONS */}
      <footer className="bg-[#03070d] text-slate-300 pt-16 pb-12 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Social media buttons row */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
            <SocialLinks />
          </div>

          {/* Legal and Disclaimer Notice */}
          <div className="pt-8 border-t border-white/10 text-xs text-slate-400 space-y-3 leading-relaxed">
            <p className="font-bold text-slate-200">
              Wichtiger medizinischer Hinweis / Haftungsausschluss:
            </p>
            <p>
              Dieser Leitfaden dient ausschließlich der allgemeinen gesundheitlichen Information und Wissensvermittlung. Er stellt weder eine medizinische Beratung, noch eine Diagnoseempfehlung oder einen Behandlungsplan dar und kann die persönliche Untersuchung und Betreuung durch eine zugelassene Ärztin oder einen Arzt zu keinem Zeitpunkt ersetzen. Treffen Sie eigenmächtig niemals Entscheidungen über die Einnahme, Dosierung oder das Absetzen von Medikamenten oder hochdosierten Nahrungsergänzungsmitteln ohne vorherige Labordiagnostik und ärztliche Rücksprache.
            </p>
          </div>

          {/* Copyright Bar */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-editorial-title font-bold text-white tracking-wider">ANÄMIE</span>
              <span>· Leitfaden zu Symptomen, Ursachen und Diagnose</span>
            </div>
            <div>
              <span>© {new Date().getFullYear()} Karin Zeit. Alle Rechte vorbehalten.</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 13. CONFIRMED PURCHASE NOTIFICATION (Bottom-Left Toast) */}
      <PurchaseNotification />

      {/* 14. DIGITAL LESEPROBE MODAL */}
      <LeseprobeModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onOrderClick={handleCheckout}
      />

    </div>
  );
}
