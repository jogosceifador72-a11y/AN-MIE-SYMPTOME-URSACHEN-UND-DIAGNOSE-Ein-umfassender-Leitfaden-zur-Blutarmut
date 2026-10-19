import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Chapter {
  number: string;
  title: string;
  pages: string;
  highlights: string[];
}

const CHAPTERS: Chapter[] = [
  {
    number: '01',
    title: 'Was ist Anämie? Biologie & Sauerstofftransport',
    pages: 'Seiten 1–6',
    highlights: [
      'Die Rolle von Hämoglobin und Erythrozyten im Organismus',
      'Wie Gewebe und Gehirn auf mangelnde Sauerstoffversorgung reagieren',
      'Unterschied zwischen akutem Blutverlust und chronischer Mangelanämie',
    ],
  },
  {
    number: '02',
    title: 'Die 4 Stadien der Symptome & Warnsignale',
    pages: 'Seiten 7–12',
    highlights: [
      'Frühsymptome: Unerklärliche Müdigkeit, Antriebslosigkeit und Kältegefühl',
      'Fortgeschrittene Anzeichen: Blässe, Schwindel, Atemnot und Tachykardie',
      'Körperliche Mangelsignale: Haarausfall, Rillen in den Nägeln & Zungenbrennen',
    ],
  },
  {
    number: '03',
    title: 'Ursachen-Matrix: Eisen, B12, Folsäure & Genetik',
    pages: 'Seiten 13–19',
    highlights: [
      'Eisenmangelanämie: Blutverluste, Resorption im Darm, pflanzliche Ernährung',
      'Megaloblastäre Anämien: Vitamin B12, Intrinsic Factor & Folsäuredefizite',
      'Genetische Sonderformen: Sichelzellanämie und Thalassämie im Überblick',
      'Anämie bei chronischen Erkrankungen (ACD) und Niereninsuffizienz',
    ],
  },
  {
    number: '04',
    title: 'Laborwerte richtig einordnen & verstehen',
    pages: 'Seiten 20–25',
    highlights: [
      'Das kleine und große Blutbild: Erythrozytenzahl, Hämatokrit & Leukozyten',
      'Erythrozytenindizes: Was bedeuten MCV, MCH und MCHC konkret?',
      'Ferritin vs. freies Eisen vs. Transferrinsättigung: Die Tücken verstehen',
      'Retikulozyten: Arbeitet Ihr Knochenmark wie es soll?',
    ],
  },
  {
    number: '05',
    title: 'Handlungsleitfaden & das Arztgespräch',
    pages: 'Seiten 26–30',
    highlights: [
      'Wann ist ein dringender Arztbesuch unverzichtbar?',
      'Warum blinde Nahrungsergänzung ohne Laborwerte gefährlich sein kann',
      'Praktische Checkliste für das Arztgespräch: Die 5 wichtigsten Fragen',
      'Verlaufskontrolle: Wann welche Werte erneut bestimmt werden sollten',
    ],
  },
];

export const TableOfContents: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <div className="space-y-3.5">
        {CHAPTERS.map((chapter, idx) => {
          const isOpen = expandedIndex === idx;
          return (
            <div
              key={chapter.number}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#0f1f3d]/90 border-rose-500/40 shadow-xl shadow-black/40 ring-1 ring-rose-500/20'
                  : 'bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              <button
                type="button"
                onClick={() => setExpandedIndex(isOpen ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xl sm:text-2xl font-serif-display font-bold text-rose-400 w-8">
                    {chapter.number}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {chapter.title}
                    </h4>
                    <span className="text-xs text-slate-400 mt-0.5 block">
                      {chapter.pages}
                    </span>
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-rose-600 text-white' : 'bg-white/10 text-slate-400'
                }`}>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/10 bg-black/20">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-2.5">
                        Schwerpunkte in diesem Kapitel:
                      </span>
                      <ul className="space-y-2">
                        {chapter.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                            <span className="text-rose-400 font-bold mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
