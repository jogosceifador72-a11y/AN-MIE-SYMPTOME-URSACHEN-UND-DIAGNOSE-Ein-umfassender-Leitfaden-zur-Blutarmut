import React from 'react';
import coverArtImg from '../assets/images/anemia_cover_art_1792171325228.jpg';

interface BookCoverProps {
  onOpenPreview?: () => void;
  className?: string;
  size?: 'normal' | 'large' | 'compact';
}

export const BookCover: React.FC<BookCoverProps> = ({
  onOpenPreview,
  className = '',
  size = 'normal',
}) => {
  const isLarge = size === 'large';
  const isCompact = size === 'compact';

  return (
    <div className={`relative group select-none ${className}`}>
      {/* Dynamic ambient back-glow in rich ruby & sapphire */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-rose-600/30 via-red-500/15 to-blue-600/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 animate-pulse-glow" />

      {/* 3D Book wrapper with subtle floating animation and hover tilt */}
      <div className="relative transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-1 animate-float-gentle">
        
        {/* Book shadow & edge perspective */}
        <div className="absolute -inset-2 bg-black/80 rounded-lg blur-2xl transform translate-y-8 scale-90 opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* Realistic Book Pages Edge (Right and Bottom page thickness) */}
        <div 
          className="absolute -right-3 top-2 bottom-2 w-3.5 bg-gradient-to-r from-amber-100 via-stone-200 to-amber-50 rounded-r-sm shadow-inner z-0 border-y border-stone-400/40"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #d6d3d1 0px, #f5f5f4 2px, #e7e5e4 4px)'
          }}
        />
        <div 
          className="absolute left-2 -bottom-2.5 right-1 h-3 bg-gradient-to-b from-stone-300 to-stone-400 rounded-b-sm shadow-inner z-0 border-x border-stone-500/40"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #d6d3d1 0px, #f5f5f4 2px, #e7e5e4 4px)'
          }}
        />

        {/* Book Cover Container with exact aspect ratio */}
        <div className={`relative bg-white rounded-md overflow-hidden book-shadow-3d border border-white/40 flex flex-col z-10 ${
          isLarge ? 'w-[310px] sm:w-[360px] md:w-[400px]' : isCompact ? 'w-[220px] sm:w-[250px]' : 'w-[270px] sm:w-[320px]'
        } aspect-[1/1.414]`}>
          
          {/* Realistic Spine Depth Overlay */}
          <div className="absolute inset-y-0 left-0 w-8 pointer-events-none book-spine-depth z-30" />

          {/* Book Inner Border (Burgundy/Crimson fine line matching original cover) */}
          <div className="absolute inset-3 border border-rose-950/20 pointer-events-none z-20" />

          {/* Top Header Area */}
          <div className="pt-8 sm:pt-9 px-6 sm:px-8 text-center flex flex-col items-center z-10">
            {/* Title */}
            <h1 className="font-editorial-title text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-widest text-[#0c2340] leading-none mb-2">
              ANÄMIE
            </h1>

            {/* Subtitle */}
            <p className="font-semibold text-xs sm:text-sm md:text-[14px] text-[#0f2d52] tracking-wide mt-1">
              Symptome, Ursachen und Diagnose
            </p>

            {/* Thin divider */}
            <div className="w-14 h-[1.5px] bg-slate-300 my-3 sm:my-3.5" />

            {/* Description */}
            <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed max-w-[240px]">
              Ein medizinischer Leitfaden für ein besseres Verständnis der Blutarmut.
            </p>
          </div>

          {/* Center Visual: The Laboratory Slide with Blood Drop */}
          <div className="flex-1 flex items-center justify-center p-3 relative overflow-hidden">
            <div className="relative w-full h-full max-h-[180px] sm:max-h-[220px] flex items-center justify-center">
              <img
                src={coverArtImg}
                alt="Blutstropfen auf Objektträger"
                className="w-full h-full object-contain filter contrast-[1.08] drop-shadow-md transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bottom Page Number Mark */}
          <div className="pb-4 sm:pb-5 text-center text-rose-900/70 text-xs font-mono tracking-widest z-10">
            — 1 —
          </div>

          {/* High-end glossy sheen reflection overlay across diagonal */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.04] via-transparent to-white/50 pointer-events-none z-20" />
        </div>

        {/* Interactive "Leseprobe" Floating Button on Book */}
        {onOpenPreview && (
          <button
            onClick={onOpenPreview}
            type="button"
            className="absolute bottom-5 right-5 z-30 bg-[#0c2340]/90 hover:bg-rose-700 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xl border border-white/20 transition-all duration-300 flex items-center gap-1.5 group-hover:scale-105 cursor-pointer glow-ruby-subtle"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Leseprobe öffnen</span>
          </button>
        )}
      </div>

      {/* Meta indicators beneath book */}
      <div className="mt-5 flex items-center justify-center gap-3 text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-300">
          <svg className="w-3.5 h-3.5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          30 Seiten Praxis-Leitfaden (PDF)
        </span>
        <span aria-hidden="true" className="text-slate-600">·</span>
        <span className="text-emerald-400 font-medium">Sofort-Download</span>
      </div>
    </div>
  );
};
