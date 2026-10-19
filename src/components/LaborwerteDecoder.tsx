import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LabParameter {
  id: string;
  name: string;
  short: string;
  standardNorm: string;
  role: string;
  anemiaClue: string;
  ebookExplanation: string;
}

const LAB_PARAMETERS: LabParameter[] = [
  {
    id: 'ferritin',
    name: 'Ferritin (Eisenspeicher)',
    short: 'Ferritin',
    standardNorm: '30 – 300 µg/l (variiert je nach Geschlecht)',
    role: 'Spiegelt die wahren Eisenvorräte in Leber und Knochenmark wider – nicht nur das flüchtige Eisen im Blut.',
    anemiaClue: 'Niedrige Werte zeigen bereits ein Eisenentleerungsstadium, noch bevor das Hämoglobin sinkt.',
    ebookExplanation: 'Kapitel 4 erklärt ausführlich, warum der reine Serumeisenwert trügerisch ist und warum Ärzte zwingend Ferritin und Entzündungswerte (CRP) gemeinsam betrachten müssen.',
  },
  {
    id: 'mcv',
    name: 'MCV (Mittleres Erythrozytenvolumen)',
    short: 'MCV',
    standardNorm: '80 – 96 fl',
    role: 'Gibt die durchschnittliche Größe der einzelnen roten Blutkörperchen an.',
    anemiaClue: 'Unter 80 fl deutet auf Eisenmangel (mikrozytär); über 96 fl typischerweise auf B12- oder Folsäuremangel (makrozytär).',
    ebookExplanation: 'Der Leitfaden liefert Ihnen ein klares Flussdiagramm: So ordnen Sie den MCV-Wert zusammen mit Ihrem Arzt in wenigen Sekunden der richtigen Anämieform zu.',
  },
  {
    id: 'hb',
    name: 'Hämoglobin (Hb-Wert)',
    short: 'Hb',
    standardNorm: 'Frauen: 12–16 g/dl · Männer: 13,5–17,5 g/dl',
    role: 'Der rote Blutfarbstoff, der den lebenswichtigen Sauerstoff von der Lunge in alle Organe transportiert.',
    anemiaClue: 'Fällt der Wert unter die Referenz, spricht die Medizin offiziell von einer manifesten Anämie.',
    ebookExplanation: 'Im E-Book erfahren Sie, warum Symptome oft schon lange vor einem deutlichen Hb-Abfall auftreten (stiller Eisenmangel).',
  },
  {
    id: 'retikulozyten',
    name: 'Retikulozyten (Junge rote Blutzellen)',
    short: 'Retis',
    standardNorm: '0,5 – 2,0 % (bzw. 20 – 80 /nl)',
    role: 'Frisch aus dem Knochenmark ins Blut entlassene Vorstufen der roten Blutkörperchen.',
    anemiaClue: 'Zeigt sofort, ob das Knochenmark noch fleißig nachproduziert oder ob die Blutbildung gehemmt ist.',
    ebookExplanation: 'Verstehen Sie auf einen Blick, ob der Körper Blut verliert/abbaut (hyperregenerativ) oder ob der Nachschub stockt (hyporegenerativ).',
  },
  {
    id: 'b12_folat',
    name: 'Vitamin B12 & Holo-TC / Folsäure',
    short: 'B12 / Folat',
    standardNorm: 'B12: > 200–300 pg/ml · Holo-TC: > 50 pmol/l',
    role: 'Essenzielle Co-Faktoren für die DNS-Synthese und Zellteilung im blutbildenden Knochenmark.',
    anemiaClue: 'Mangel führt zu Reifungsstörungen und vergrößerten roten Blutkörperchen (perniziöse/megaloblastäre Anämie).',
    ebookExplanation: 'Lernen Sie, weshalb ein normaler Serum-B12-Wert eine Mangelversorgung verschleiern kann und welcher moderne Test (Holo-Transcobalamin) Klarheit bringt.',
  },
];

export const LaborwerteDecoder: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('ferritin');

  const activeParam = LAB_PARAMETERS.find((p) => p.id === activeId) || LAB_PARAMETERS[0];

  return (
    <div className="w-full glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow in dark medical aesthetic */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl relative z-10">
        <span className="text-xs font-bold tracking-wider text-rose-400 uppercase">
          Interaktiver Labor-Kompass
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
          Laborwerte verstehen statt im Dunkeln tappen
        </h3>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          Klicken Sie auf einen Parameter, um zu sehen, welche Schlüsselrolle er im Blutkreislauf spielt und wie das E-Book Befunde verständlich entschlüsselt:
        </p>
      </div>

      {/* Tabs / Buttons */}
      <div className="flex flex-wrap gap-2 mt-8 pb-3 border-b border-white/10 relative z-10">
        {LAB_PARAMETERS.map((param) => {
          const isActive = param.id === activeId;
          return (
            <button
              key={param.id}
              onClick={() => setActiveId(param.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40 border border-rose-400/50 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {param.short}
            </button>
          );
        })}
      </div>

      {/* Active parameter panel with motion transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeParam.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch relative z-10"
        >
          <div className="md:col-span-7 space-y-5 bg-white/[0.03] border border-white/10 p-6 rounded-2xl">
            <div>
              <span className="text-xs text-rose-400 font-medium uppercase tracking-wider">Laborparameter</span>
              <h4 className="text-xl font-bold text-white mt-0.5">{activeParam.name}</h4>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Typischer Referenzbereich (Orientierung):
              </span>
              <p className="text-sm sm:text-base font-mono text-emerald-400 tabular-nums font-bold">
                {activeParam.standardNorm}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Bedeutung für Ihren Körper:
              </h5>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeParam.role}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Warnsignal bei Abweichung:
              </h5>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeParam.anemiaClue}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-gradient-to-br from-rose-950/50 via-slate-900/80 to-[#0c182e] p-6 rounded-2xl border border-rose-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-3 text-rose-300 font-bold text-xs uppercase tracking-wider">
                <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Im Leitfaden auf den Punkt gebracht</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {activeParam.ebookExplanation}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-500/20 flex items-center justify-between text-xs text-rose-300/90">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Verständlich ohne Fachchinesisch
              </span>
              <span className="font-mono font-bold text-white">30 Seiten PDF</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
