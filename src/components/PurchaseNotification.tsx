import React, { useState, useEffect } from 'react';

interface PurchaseEvent {
  timeAgo: string;
}

const EVENTS: PurchaseEvent[] = [
  { timeAgo: 'Vor wenigen Augenblicken' },
  { timeAgo: 'Vor 2 Minuten' },
  { timeAgo: 'Vor 5 Minuten' },
  { timeAgo: 'Vor 9 Minuten' },
  { timeAgo: 'Vor 14 Minuten' },
  { timeAgo: 'Vor 19 Minuten' },
];

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay of 2.2 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2200);

    // Interval to cycle show & hide
    const cycleInterval = setInterval(() => {
      setIsVisible((prev) => {
        if (prev) {
          return false;
        } else {
          setCurrentIndex((idx) => (idx + 1) % EVENTS.length);
          return true;
        }
      });
    }, 6800);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentEvent = EVENTS[currentIndex];

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-[#0c182e]/95 backdrop-blur-xl border border-emerald-500/30 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6)] rounded-xl p-3.5 pr-8 flex items-center gap-3.5 max-w-sm text-slate-100 relative">
        {/* Verification Icon with green glow */}
        <div className="w-9 h-9 rounded-full bg-emerald-950/80 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Text Details (Sem nomes conforme solicitado) */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white tracking-tight">
              Kauf erfolgreich bestätigt
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
            Leitfaden «Anämie: Symptome & Diagnose» (PDF)
          </p>
          <span className="text-[10px] text-emerald-400 font-medium mt-0.5">
            {currentEvent.timeAgo} · Sofortzugang per E-Mail
          </span>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
          aria-label="Benachrichtigung schließen"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
