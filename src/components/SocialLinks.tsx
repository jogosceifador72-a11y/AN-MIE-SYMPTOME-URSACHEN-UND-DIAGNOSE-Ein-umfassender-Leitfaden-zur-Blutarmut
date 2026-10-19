import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  subtitle: string;
  styleClass: string;
}

export const SocialLinks: React.FC = () => {
  const links: SocialLink[] = [
    {
      name: 'Instagram',
      subtitle: '@karinzeit',
      url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
      styleClass: 'hover:border-pink-500/60 hover:bg-pink-950/20 hover:text-pink-400',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      subtitle: '@karinzeit',
      url: 'https://www.tiktok.com/@karinzeit',
      styleClass: 'hover:border-cyan-400/60 hover:bg-cyan-950/20 hover:text-cyan-300',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.49V8.62a8.27 8.27 0 0 0 4.82 1.53v-3.46z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      subtitle: '@karinzeit',
      url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
      styleClass: 'hover:border-red-500/60 hover:bg-red-950/20 hover:text-red-400',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Threads',
      subtitle: '@karinzeit',
      url: 'https://www.threads.com/@karinzeit',
      styleClass: 'hover:border-purple-400/60 hover:bg-purple-950/20 hover:text-purple-300',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.87 14.28c-.89 1.05-2.23 1.63-3.87 1.63-3.14 0-5.46-2.07-5.46-5.88 0-3.91 2.5-6.03 5.57-6.03 2.92 0 5.17 1.83 5.17 5.09 0 2.87-1.57 4.54-3.69 4.54-1.12 0-1.89-.6-1.89-1.63 0-.08.01-.18.03-.27.53-2.15 1.06-4.32 1.06-4.32l-1.92-.38-.72 2.96c-.24-.48-.68-.82-1.33-.82-1.44 0-2.43 1.4-2.43 3.32 0 1.77.89 2.89 2.21 2.89 1.18 0 1.95-.78 2.22-1.68.32.99 1.15 1.68 2.37 1.68 2.25 0 4.19-1.87 4.19-5.32 0-3.88-2.65-6.09-6.06-6.09-3.79 0-6.7 2.65-6.7 6.94 0 4.41 2.89 6.89 6.57 6.89 1.92 0 3.51-.67 4.63-1.87l-1.14-.75z" />
        </svg>
      ),
    },
    {
      name: 'Facebook Profil',
      subtitle: 'Karin Zeit',
      url: 'https://www.facebook.com/share/1c8J76URqe/',
      styleClass: 'hover:border-blue-500/60 hover:bg-blue-950/20 hover:text-blue-400',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Facebook Seite',
      subtitle: 'Offizielle Seite',
      url: 'https://www.facebook.com/share/1DzZyfFWRL/',
      styleClass: 'hover:border-blue-600/60 hover:bg-blue-950/20 hover:text-blue-300',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V7h2v3z"/>
        </svg>
      ),
    },
    {
      name: 'Kwai',
      subtitle: '@kariningrid673',
      url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
      styleClass: 'hover:border-orange-500/60 hover:bg-orange-950/20 hover:text-orange-400',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm3.5-3.5L13 15v-6l1.5 1.5 1.5-1.5V15l-1.5-1.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-base font-bold text-white tracking-tight">
          Folgen & Kontakt
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Erhalten Sie weitere Gesundheitstipps & Neuigkeiten direkt auf Ihren Lieblingsplattformen
        </p>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${link.styleClass}`}
          >
            <div className="p-2 rounded-lg bg-white/10 text-slate-200 transition-colors group-hover:bg-white/20">
              {link.icon}
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-xs font-bold text-white truncate">
                {link.name}
              </span>
              <span className="text-[11px] text-slate-400 truncate group-hover:text-slate-200">
                {link.subtitle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
