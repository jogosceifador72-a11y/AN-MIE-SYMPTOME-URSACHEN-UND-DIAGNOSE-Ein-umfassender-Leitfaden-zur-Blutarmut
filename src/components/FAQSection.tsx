import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Wie erhalte ich den Leitfaden nach dem Kauf?',
    answer:
      'Direkt nach der Bestätigung Ihrer Zahlung auf Hotmart erhalten Sie eine E-Mail mit Ihrem persönlichen Download-Link für die vollständige 30-seitige PDF-Datei. Sie können sofort ohne Wartezeit mit dem Lesen beginnen.',
  },
  {
    question: 'Auf welchen Geräten kann ich das E-Book lesen?',
    answer:
      'Die PDF-Datei ist universell lesbar und optimiert: Sie lässt sich bequem auf allen Smartphones (iPhone & Android), Tablets (iPad, Samsung etc.), E-Readern mit PDF-Unterstützung sowie Mac- und Windows-Computern öffnen und bei Bedarf auch ausdrucken.',
  },
  {
    question: 'Ersetzt dieses Buch den Besuch bei einer Ärztin oder einem Arzt?',
    answer:
      'Nein. Der Ratgeber dient ausschließlich Informations- und Bildungszwecken. Er ersetzt keine ärztliche Untersuchung, Diagnose oder Therapie. Er befähigt Sie jedoch, Ihre Symptome und Laborwerte selbst zu verstehen und auf Augenhöhe die richtigen Fragen in der Praxis zu stellen.',
  },
  {
    question: 'Brauche ich Vorkenntnisse in Medizin oder Biologie?',
    answer:
      'Überhaupt nicht! Das Werk wurde gezielt so verfasst, dass alle physiologischen Mechanismen, Blutwerte und Diagnoseverfahren ohne medizinisches Vorwissen und ohne unverständliches Fachchinesisch sofort verständlich sind.',
  },
  {
    question: 'Warum sollte ich vor Nahrungsergänzungsmitteln Laborwerte bestimmen lassen?',
    answer:
      'Weil eine unbedachte Einnahme von hochdosiertem Eisen zu Magen-Darm-Schäden oder einer gefährlichen Eisenüberladung führen kann und bei anderen Ursachen (z. B. Vitamin-B12-Mangel oder Thalassämie) wirkungslos ist. Unser Leitfaden erklärt genau, welche Werte vor jeder Einnahme bestimmt werden sollten.',
  },
  {
    question: 'Welche Zahlungsmethoden stehen zur Verfügung und wie sicher ist der Kauf?',
    answer:
      'Die Zahlungsabwicklung erfolgt über die internationale, PCI-DSS- und TÜV-geprüfte Plattform Hotmart mit modernster 256-Bit-SSL-Verschlüsselung. Sie können bequem per PayPal, Kreditkarte, Klarna oder Sofortüberweisung bezahlen.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {FAQS.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-[#0f1f3d]/90 border-rose-500/40 shadow-xl'
                : 'bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
            >
              <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                {item.question}
              </span>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isOpen ? 'bg-rose-600 text-white' : 'bg-white/10 text-slate-400'
              }`}>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
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
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-black/20">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
