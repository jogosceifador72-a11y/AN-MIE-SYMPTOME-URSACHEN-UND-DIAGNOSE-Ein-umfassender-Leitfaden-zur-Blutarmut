import React, { useState } from 'react';
import coverArtImg from '../assets/images/anemia_cover_art_1792171325228.jpg';

interface LeseprobeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderClick: () => void;
}

export const LeseprobeModal: React.FC<LeseprobeModalProps> = ({
  isOpen,
  onClose,
  onOrderClick,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0b172a] rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-rose-500/30 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              Digitale Leseprobe
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Seite {currentPage} von 3
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content / Page Viewer */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#070e1b]">
          {currentPage === 1 && (
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-2xl border border-slate-300 text-center text-slate-900">
              <h2 className="font-editorial-title text-3xl font-extrabold text-[#0c2340] tracking-widest">
                ANÄMIE
              </h2>
              <p className="text-sm font-semibold text-[#0f2d52] mt-1">
                Symptome, Ursachen und Diagnose
              </p>
              <div className="w-12 h-[1px] bg-slate-300 mx-auto my-3" />
              <p className="text-xs text-slate-600 mb-6">
                Ein medizinischer Leitfaden für ein besseres Verständnis der Blutarmut.
              </p>

              <div className="my-6 max-h-[170px] flex items-center justify-center">
                <img
                  src={coverArtImg}
                  alt="Objektträger mit Blutstropfen"
                  className="max-h-[170px] object-contain rounded"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-xs text-slate-400 font-mono mt-6">— 1 —</p>
            </div>
          )}

          {currentPage === 2 && (
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-2xl border border-slate-300 text-slate-900">
              <span className="text-xs font-mono text-rose-800 uppercase block mb-1 font-bold">
                Kapitel 1 · Einführung
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Was geschieht bei einer Anämie im Körper?
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Blutarmut bedeutet nicht, dass Sie buchstäblich "zu wenig Blut" in Ihren Adern haben. Ihr Blutvolumen bleibt in der Regel völlig konstant. Doch die Zusammensetzung hat sich drastisch verschoben:
              </p>
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-md my-4">
                <p className="text-xs text-rose-950 font-medium">
                  Entweder fehlen vitale rote Blutkörperchen (Erythrozyten) oder ihr lebenswichtiger roter Blutfarbstoff (Hämoglobin) reicht nicht aus, um Sauerstoff zu binden.
                </p>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Jedes Organ – vom Gehirn über das Herz bis zur Muskulatur – hungert in diesem Moment nach Sauerstoff. Die typischen Warnsignale wie bleierne Müdigkeit oder Herzklopfen sind schlichtweg die Hilferufe Ihrer Zellen.
              </p>
              <p className="text-xs text-slate-400 font-mono mt-6 text-center">— 2 —</p>
            </div>
          )}

          {currentPage === 3 && (
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-2xl border border-slate-300 text-slate-900">
              <span className="text-xs font-mono text-rose-800 uppercase block mb-1 font-bold">
                Kapitel 4 · Labor-Übersicht
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Das Laborwerte-Flussdiagramm
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Ein einfaches kleines Blutbild liefert erste entscheidende Anhaltspunkte. Der Schlüsselparameter für die Differenzierung ist der <strong>MCV-Wert</strong>:
              </p>
              <ul className="text-xs text-slate-800 space-y-2.5 my-4">
                <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <span className="font-bold text-slate-950">MCV &lt; 80 fl (Mikrozytär):</span> Häufigster Grund ist Eisenmangel oder Thalassämie.
                </li>
                <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <span className="font-bold text-slate-950">MCV 80–96 fl (Normozytär):</span> Chronische Entzündungen (ACD), akuter Blutverlust oder Nierenleiden.
                </li>
                <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <span className="font-bold text-slate-950">MCV &gt; 96 fl (Makrozytär):</span> Typisch für Vitamin B12- oder Folsäuremangel.
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic mt-3">
                [... 27 weitere praxisorientierte Seiten im vollständigen Leitfaden ...]
              </p>
              <p className="text-xs text-slate-400 font-mono mt-6 text-center">— 3 —</p>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/10 bg-white/5 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 cursor-pointer"
            >
              ← Zurück
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
              disabled={currentPage === 3}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/10 bg-white/5 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 cursor-pointer"
            >
              Weiter →
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOrderClick();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold transition-all shadow-lg shadow-rose-900/40 cursor-pointer whitespace-nowrap glow-ruby"
          >
            Vollständigen Leitfaden kaufen (25,81 €)
          </button>
        </div>
      </div>
    </div>
  );
};
