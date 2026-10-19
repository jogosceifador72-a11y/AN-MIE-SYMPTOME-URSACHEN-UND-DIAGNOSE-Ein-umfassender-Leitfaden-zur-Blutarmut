import React, { useState } from 'react';

interface SymptomItem {
  id: string;
  title: string;
  description: string;
}

const SYMPTOMS: SymptomItem[] = [
  {
    id: 'fatigue',
    title: 'Chronische Müdigkeit & Abgeschlagenheit',
    description: 'Selbst nach ausreichend Schlaf fühlen Sie sich energielos und dauerhaft erschöpft.',
  },
  {
    id: 'dizziness',
    title: 'Schwindelgefühl & Benommenheit',
    description: 'Häufiges Schwarzwerden vor den Augen beim Aufstehen oder allgemeine Gangunsicherheit.',
  },
  {
    id: 'paleness',
    title: 'Auffallende Blässe der Haut & Schleimhäute',
    description: 'Besonders gut sichtbar an der Innenseite der Augenlider, Lippen und im Nagelbett.',
  },
  {
    id: 'palpitations',
    title: 'Herzklopfen & Kurzatmigkeit bei Alltagsbelastung',
    description: 'Treppensteigen oder schnelles Gehen lässt das Herz unverhältnismäßig rasen.',
  },
  {
    id: 'coldness',
    title: 'Erhöhte Kälteempfindlichkeit',
    description: 'Ständig eiskalte Hände und Füße, selbst bei sommerlicher oder warmer Raumtemperatur.',
  },
  {
    id: 'nails_hair',
    title: 'Brüchige Nägel & diffuser Haarausfall',
    description: 'Ebenso schmerzhaft eingerissene Mundwinkel (Mundwinkelrhagaden) als Mangelsignal.',
  },
  {
    id: 'concentration',
    title: 'Konzentrationsschwäche & Leistungsabfall',
    description: 'Geringere mentale Belastbarkeit („Brain Fog”) durch gedrosselten Sauerstofftransport ins Gehirn.',
  },
  {
    id: 'restless',
    title: 'Unruhige Beine am Abend (Restless Legs)',
    description: 'Kribbeln oder quälender Zwang, die Beine in Ruhephasen ständig zu bewegen.',
  },
];

export const SymptomChecklist: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['fatigue', 'dizziness']);

  const toggleSymptom = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const count = selectedIds.length;

  return (
    <div className="w-full glass-panel text-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative border border-white/10">
      {/* Dynamic ambient glowing spheres */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <span className="text-xs font-bold tracking-wider text-rose-400 uppercase">
          Selbstüberprüfung
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
          Erkennen Sie diese Warnsignale bei sich oder Angehörigen?
        </h3>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          Klicken Sie auf die Symptome, die Ihnen bekannt vorkommen. Blutarmut entwickelt sich oft schleichend, sodass der Körper den Sauerstoffmangel zunächst kompensiert, bevor es zum Leistungseinbruch kommt.
        </p>
      </div>

      {/* Symptom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 relative z-10">
        {SYMPTOMS.map((symptom) => {
          const isChecked = selectedIds.includes(symptom.id);
          return (
            <button
              key={symptom.id}
              type="button"
              onClick={() => toggleSymptom(symptom.id)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                isChecked
                  ? 'bg-rose-950/40 border-rose-500/70 shadow-lg shadow-rose-950/40 scale-[1.01]'
                  : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                  isChecked
                    ? 'bg-rose-600 border-rose-500 text-white shadow-sm shadow-rose-500/50'
                    : 'border-slate-500 bg-transparent'
                }`}
              >
                {isChecked && (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <span className={`text-sm font-bold block ${isChecked ? 'text-white' : 'text-slate-200'}`}>
                  {symptom.title}
                </span>
                <span className="text-xs text-slate-300 block mt-1 leading-relaxed">
                  {symptom.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Result feedback box */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0c182e] to-rose-950/40 border border-white/15 backdrop-blur-md relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-bold text-rose-300">
              {count} von {SYMPTOMS.length} Anzeichen ausgewählt
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
            {count === 0
              ? 'Wählen Sie Ihre Symptome aus, um zu erfahren, wie unser Leitfaden die biologischen Ursachen im Körper erklärt.'
              : count <= 2
              ? 'Selbst vereinzelte Anzeichen können frühe Vorboten eines beginnenden Speicher-Eisenmangels oder Vitamin-B12-Defizits sein.'
              : 'Mehrere übereinstimmende Symptome deuten auf eine spürbare Sauerstoffunterversorgung hin. Im E-Book erfahren Sie genau, welche Blutwerte jetzt Vorrang haben.'}
          </p>
        </div>

        <button
          onClick={onCtaClick}
          type="button"
          className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-lg shadow-rose-900/50 hover:shadow-rose-900/80 cursor-pointer whitespace-nowrap glow-ruby"
        >
          Leitfaden sichern (25,81 €)
        </button>
      </div>
    </div>
  );
};
