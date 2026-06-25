interface HeroProps {
  onApplyClick?: () => void;
}

export function Hero({ onApplyClick }: HeroProps) {
  // EU-style 5-pointed star path
  const starPath = "M0,-1 L0.224,-0.309 L0.951,-0.309 L0.363,0.118 L0.588,0.809 L0,0.382 L-0.588,0.809 L-0.363,0.118 L-0.951,-0.309 L-0.224,-0.309 Z";

  const apexAngleDeg = 180; // Left-most point

  const stars = Array.from({ length: 12 }).map((_, i) => {
    const angleDeg = (i * 360) / 12;
    const angleRad = (angleDeg * Math.PI) / 180;

    // Position on circle (49% radius to account for stroke)
    const x = 50 + 49 * Math.cos(angleRad);
    const y = 50 + 49 * Math.sin(angleRad);

    // Size taper: apex star largest (24px), opposite smallest (16px)
    const dApex = Math.min(Math.abs(angleDeg - apexAngleDeg), 360 - Math.abs(angleDeg - apexAngleDeg));
    const size = 24 - (dApex / 180) * (24 - 16);

    // Animation timing (varied per star)
    const duration = 7 + (i % 4) * 0.8;
    const delay = 0.4 + (i % 5) * 0.35;

    const isApex = angleDeg === apexAngleDeg;

    return { i, x, y, size, duration, delay, isApex, angleDeg };
  });

  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#0E1F3F' }}>
      {/* Subtle topographic texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)`
      }} />

      {/* Star ring - positioned to the right with half visible */}
      <div
        className="absolute hidden md:block"
        style={{
          position: 'absolute',
          aspectRatio: '1 / 1',
          height: '100%',
          top: '50%',
          right: '-25%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        {/* Soft halo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle 38% at 50% 50%, rgba(232,223,200,0.13) 0%, rgba(232,223,200,0) 62%)'
          }}
        />

        {/* Hairline ring */}
        <svg
          viewBox="0 0 100 100"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0
          }}
          preserveAspectRatio="none"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="#E8DFC8"
            strokeOpacity="0.32"
            strokeWidth="0.75"
            vectorEffect="non-scaling-stroke"
            style={{
              animation: 'ringFadeIn 2.6s ease-out 0.2s both'
            }}
          />
        </svg>

        {/* 12 Stars on ring */}
        {stars.map(({ i, x, y, size, duration, delay, isApex }) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0,
              animation: `starPulse ${duration}s ease-in-out ${delay}s infinite`,
            }}
          >
            {/* Apex star halo */}
            {isApex && (
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${size * 3.2}px`,
                  height: `${size * 3.2}px`,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(232,223,200,0.30) 0%, rgba(232,223,200,0) 70%)',
                  zIndex: -1
                }}
              />
            )}

            {/* Star SVG */}
            <svg
              viewBox="-1 -1 2 2"
              style={{
                width: '100%',
                height: '100%'
              }}
            >
              <path
                d={starPath}
                fill="#E8DFC8"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-12 pt-32 md:pt-40 pb-32 md:pb-40 relative z-10">
        <div className="max-w-[900px]">
          {/* Primary headline */}
          <h1 className="text-[3rem] md:text-[4.5rem] leading-[1.05] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#F4EFE2', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Invite-only <br/>
            Peer-to-Peer Community
          </h1>

          {/* Subtitle 1 (Outcome) */}
          <p className="text-[1.125rem] md:text-[1.25rem] leading-[1.6] mb-4 max-w-[700px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#F4EFE2' }}>
            Tiefe und relevante Peers statt transaktionalem Networking, gemeinsame europäische Macher-Identität.
          </p>

          {/* Subtitle 2 (Format) */}
          <p className="text-[1rem] md:text-[1.125rem] leading-[1.6] mb-10 max-w-[700px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(244, 239, 226, 0.8)' }}>
            Eine kuratierte, einladungsbasierte Peer-Community accomplished europäischer Gründer, Investoren und Executives.
          </p>

          {/* CTA Area */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button
              onClick={() => {
                document.getElementById('selected-members')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3.5 transition-all duration-300 text-[0.9375rem] tracking-[0.02em] uppercase font-medium hover:bg-white hover:text-[#0E1F3F] group"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '2px'
              }}
            >
              Member Auswahl ansehen
              <span className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity">↓</span>
            </button>
            <div className="text-[0.8125rem] leading-[1.6]" style={{ color: 'rgba(244, 239, 226, 0.5)' }}>
              Aufnahme primär durch Empfehlung <br/>bestehender Member.
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes ringFadeIn {
          from {
            stroke-dasharray: 0 1000;
            opacity: 0;
          }
          to {
            stroke-dasharray: 1000 0;
            opacity: 0.32;
          }
        }

        @keyframes starPulse {
          0%, 100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.12);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
