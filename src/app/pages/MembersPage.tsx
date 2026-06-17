import React, { useState, useEffect, useRef } from 'react';
import { Link, useOutletContext, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import group3Img from '../../assets/group3.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import member17 from 'figma:asset/99c9e66240d89360e5210853376a3e2522129ea5.png';
import member24 from 'figma:asset/42eea9ab55994baa6e5420d463610569c41241d0.png';
import member19 from 'figma:asset/ee993a9cdcb8d8d7c15105e815a9fab5be468336.png';
import member20 from 'figma:asset/3903cab1cc753a736891cd06ff28bd56229947a6.png';
import member23 from 'figma:asset/8dd432eb780e74be0dfb63cad7130b6e0abbd340.png';
import member4 from 'figma:asset/b988e4eecb863e87f861e5b602bdffd7abe1d43e.png';
import member10 from 'figma:asset/11cc3d4d9410dab22aa5f1fc27f476ee7b0bb465.png';
import member12 from 'figma:asset/d1eeaa6f1540dbaadf5082445d41c11779ee7ce4.png';
import member7 from 'figma:asset/0b8875f4e47ba917545238466007f4c4ac404246.png';
import member1 from 'figma:asset/c8d85246ef3bad1d6e5f95fab53d5d407b2b61e5.png';
import member15 from 'figma:asset/5eb933aa3b8b6b2d340c75dfa45c7b1f9548d458.png';
import member21 from 'figma:asset/19de7866575126f62dbd19f6fbea923f1b88f942.png';
import member6 from 'figma:asset/9de6be44988cda7cad71ab08360e2b41d0b92e35.png';
import member2 from 'figma:asset/63e47bd0836e773747df275a6cc6405b77e0ad30.png';

const MEMBERS_DATA = [
  {
    title: "Irene Klemm",
    description: "Founder Edurino (€31.5m raised, over 2m products sold)",
    bio: "Gestaltet die Zukunft der digitalen Bildung für Kinder mit innovativen und spielerischen Lernkonzepten.",
    image: member17
  },
  {
    title: "Lisa Gradow",
    description: "Serial Founder (Usercentrics with over 100m ARR, Fides (exit))",
    bio: "Expertin für LegalTech und Datenschutz, die Innovationen an der Schnittstelle von Recht und Technologie vorantreibt.",
    image: member24
  },
  {
    title: "Alexander Kölpin",
    description: "General Partner at seed+speed Ventures (€90m seed fund)",
    bio: "Unterstützt herausragende B2B-Software-Startups mit einem starken strategischen Fokus auf Vertrieb und Skalierung.",
    image: member19
  },
  {
    title: "Seena Amidi",
    description: "Managing Director at Plug and Play Tech Center (over $1B AUM)",
    bio: "Verbindet als global agierender Investor die vielversprechendsten Startups weltweit mit führenden Industrieunternehmen.",
    image: member20
  },
  {
    title: "Patrick Eden",
    description: "Exited Serial Founder (1x Exit to Cisco, 1x still operative)",
    bio: "Leidenschaftlicher Tech-Unternehmer und erfahrener Stratege mit einem scharfen Blick für skalierbare B2B-Lösungen.",
    image: member23
  },
  {
    title: "Leon Szeli",
    description: "Founder Presize (acq. by Meta for $100m)",
    bio: "Pionier im Bereich Computer Vision und künstlicher Intelligenz, der den mobilen E-Commerce revolutioniert hat.",
    image: member4
  },
  {
    title: "Dr. Jonas Kahlert",
    description: "Senior Product Manager at Google, Stanford & HSG Alum",
    bio: "Gestaltet wegweisende Produkte bei Google und vereint tiefe technologische Expertise mit exzellenter Product Strategy.",
    image: member10
  },
  {
    title: "Jakob Schreyer",
    description: "Founder Orderbird (€100m Exit)",
    bio: "Revolutionierte die digitalen Gastronomie-Kassensysteme in Europa und teilt seine Erfahrung nun als aktiver Angel Investor.",
    image: member12
  },
  {
    title: "Ingmar Klein",
    description: "Founder Huzzle ($5m ARR in 15 months)",
    bio: "Baut mit rasantem Wachstum Europas führendes Karriere-Netzwerk für ambitionierte Studenten und Young Professionals auf.",
    image: member7
  },
  {
    title: "Michael Bonacina",
    description: "3x Exited Founder, e.g. Virtual Staging (acq. by Zillow, $5m ARR in 18 months)",
    bio: "Erfolgreicher Seriengründer mit einem herausragenden Track-Record beim rasanten Skalieren von PropTech- und KI-Unternehmen.",
    image: member1
  },
  {
    title: "Johannes Hussak",
    description: "Founder Kertos - $20m funding, grew 4x, 3x, 3x YoY",
    bio: "Automatisiert komplexe Datenschutz- und Compliance-Prozesse und ermöglicht Tech-Unternehmen unbeschwertes Wachstum.",
    image: member15
  },
  {
    title: "Marco Maier",
    description: "Founder Viscopic (acquired by Teamviewer), VP Sales Engineering at Teamviewer",
    bio: "Absoluter Fachexperte für Augmented Reality und die nahtlose Integration von komplexen Enterprise-Software-Lösungen.",
    image: member21
  },
  {
    title: "Tomislav Tomov",
    description: "Tech Lead - Gen AI Team at Meta, founder (exited)",
    bio: "Treibt als technischer Visionär die Entwicklung und Skalierung modernster Generativer KI-Modelle im Silicon Valley maßgeblich voran.",
    image: member6
  },
  {
    title: "Fabian Sedlmayr",
    description: "Founder WH1, McCloy Fellow & MPP at Harvard",
    bio: "Verbindet tiefgreifende technologische Innovationen mit herausragender politischer und strategischer Leadership-Expertise.",
    image: member2
  }
];

export function MembersPage({ isEmbedded, onApplyClick }: { isEmbedded?: boolean; onApplyClick?: () => void }) {
  let context: any = null;
  try {
    context = useOutletContext();
  } catch (e) {
    // Ignore error if not in router outlet context
  }
  const handleApplyClick = onApplyClick || context?.onApplyClick;
  const location = useLocation();
  const fromStart = location.state?.fromStart === true;
  
  const [animate, setAnimate] = useState(() => {
    // Force animation if coming smoothly from the start page
    if (fromStart) return false;
    
    // Force animation if coming from Circles page cross-fade
    if (location.state?.fromCircles === true) return false;
    
    if (typeof window !== 'undefined') {
      return localStorage.getItem('membersAnimationPlayed') === 'true';
    }
    return false;
  });
  const [hasError, setHasError] = useState(false);

  const [displayedRotation, setDisplayedRotation] = useState(0);
  const targetRotation = useRef(0);
  const isUserScrolling = useRef(false);
  const snapTimeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // Trigger entrance animation reliably on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (animate) return;

    const timeout = setTimeout(() => {
      setAnimate(true);
      localStorage.setItem('membersAnimationPlayed', 'true');
    }, 50);
    return () => clearTimeout(timeout);
  }, [animate]);

  // Lerp Animation Loop for buttery smooth scrolling and magnetic snapping
  useEffect(() => {
    let animationFrameId: number;
    let lastRenderedRotation = 0;

    const updateLoop = () => {
      // Very low lerp during scroll to glide smoothly over mouse wheel notches
      // Very high lerp during snap to lock in extremely fast
      const lerpFactor = isUserScrolling.current ? 0.05 : 0.35;
      const diff = targetRotation.current - lastRenderedRotation;

      if (Math.abs(diff) > 0.01) {
        lastRenderedRotation += diff * lerpFactor;
        setDisplayedRotation(lastRenderedRotation);
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Event Listeners for Wheel / Touch
  useEffect(() => {
    let lastTouchY = 0;

    const handleScrollAction = () => {
      isUserScrolling.current = true;
      if (snapTimeout.current) clearTimeout(snapTimeout.current);

      snapTimeout.current = setTimeout(() => {
        isUserScrolling.current = false;
        // Snap to nearest item
        const step = 360 / MEMBERS_DATA.length;
        targetRotation.current = Math.round(targetRotation.current / step) * step;
      }, 30); // Instant snap decision
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Stop page scroll
      targetRotation.current += e.deltaY * 0.08; // slightly higher sensitivity to compensate for lower lerp
      handleScrollAction();
    };

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0].clientY;
      handleScrollAction();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const delta = lastTouchY - touchY;
      lastTouchY = touchY;
      targetRotation.current += delta * 0.2;
      handleScrollAction();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      }
      if (snapTimeout.current) clearTimeout(snapTimeout.current);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: isEmbedded ? 'transparent' : '#FFF8E7' }}>
      <div className={`w-full h-full relative ${isEmbedded ? 'pt-0' : 'pt-0'}`} style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* Decorative premium radial gradient to add depth (anchored to the right) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 z-0"
          style={{
            background: "radial-gradient(circle at 100% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(255, 248, 231, 0) 60%)",
          }}
        />

        {/* The Semicircle on the Right Side of the Screen */}
        <div
          className="absolute right-0 top-1/2 z-10"
          style={{
            height: "100vh",
            width: "100vh",
            opacity: animate ? 1 : 0, // Smoothly fade in on mount
            transform: animate
              ? "translate(50%, -50%) scale(1)"
              : "translate(50%, -50%) scale(0.95)",
            transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform, opacity",
          }}
        >
          {/* Shared Rotation Container */}
          <div
            ref={circleRef}
            className="w-full h-full relative"
            style={{
              transformOrigin: "center center",
              willChange: "transform",
              transform: `rotate(${displayedRotation}deg)`,
            }}
          >
            <img
              src={group3Img}
              alt="Group 3"
              onLoad={() => console.log("group3.png loaded")}
              onError={() => setHasError(true)}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              style={{
                filter: "drop-shadow(0 15px 35px rgba(13, 31, 60, 0.08))",
                zIndex: 1,
              }}
            />

            {/* The Circle Items */}
            {MEMBERS_DATA.map((member, idx) => {
              const baseAngle = 180 - (360 / MEMBERS_DATA.length) * idx;
              const itemRotation = -displayedRotation - baseAngle;

              let currentAbsoluteAngle = (baseAngle + displayedRotation) % 360;
              if (currentAbsoluteAngle < 0) currentAbsoluteAngle += 360;

              let diff = Math.abs(currentAbsoluteAngle - 180);
              if (diff > 180) diff = 360 - diff;

              // Smooth opacity drop-off
              const isActive = diff < 25; // Widen active window so it triggers earlier
              const opacityProgress = Math.min(diff / 25, 1);
              const opacity = 1 - Math.pow(opacityProgress, 2);

              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${baseAngle}deg) translate(42.5vh) rotate(${itemRotation}deg)`,
                    opacity: opacity,
                    visibility: opacity <= 0.01 ? 'hidden' : 'visible',
                    zIndex: isActive ? 50 : 10,
                    width: "320px",
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className={`w-64 h-64 rounded-full overflow-hidden border-4 ${isActive ? 'border-[#D4AF37] shadow-[0_20px_40px_rgba(13,31,60,0.2)]' : 'border-white shadow-lg'}`}
                    style={{
                      transform: `scale(${isActive ? 1.4 : 0.75})`,
                      transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s, box-shadow 0.3s'
                    }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'saturate(0.3) contrast(1.05) brightness(1.02)' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Header Row for embedded view */}
        {isEmbedded && (
          <div className="absolute top-2 sm:top-3 left-0 right-0 w-full pl-3 sm:pl-4 pr-3 sm:pr-4 z-40 flex justify-between items-center">
            <Link to="/" className="transition-opacity hover:opacity-85">
              <img src={logoImg} alt="Valorian Logo" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            {handleApplyClick && (
              <button
                onClick={handleApplyClick}
                className="text-[0.9375rem] px-8 py-3 transition-opacity hover:opacity-90 font-medium"
                style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF', backgroundColor: '#0D1F3C', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                Request Invitation
              </button>
            )}
          </div>
        )}

        {/* Header Row for standalone view */}
        {!isEmbedded && (
          <div 
            className="absolute top-4 left-0 right-0 w-full px-6 md:px-12 z-40 flex justify-between items-center"
            style={{
              opacity: animate ? 1 : 0,
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Link to="/" className="transition-opacity hover:opacity-85 flex items-center gap-3">
              <img src={logoImg} alt="Valorian Logo" className="h-7 md:h-8 w-auto object-contain" />
            </Link>
            {handleApplyClick && (
              <button
                onClick={handleApplyClick}
                className="text-[0.9375rem] px-8 py-3 transition-opacity hover:opacity-90 font-medium"
                style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF', backgroundColor: '#0D1F3C', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                Request Invitation
              </button>
            )}
          </div>
        )}

        {/* Static Title Content Section */}
        <div 
          className="absolute left-0 top-0 w-full h-full pointer-events-none z-30"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="w-full h-full px-6 md:px-12 flex flex-col justify-center relative">

            {/* Header pushed up */}
            <div className="absolute top-20 left-6 md:left-12 pointer-events-auto max-w-3xl">
              <h1 className="text-4xl md:text-5xl text-[#0D1F3C] mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Selected Members
              </h1>
              <p className="text-base text-[#0D1F3C]/70 font-light md:whitespace-nowrap">
                A curated community of European leaders shaping technology, business, and innovation.
              </p>
            </div>

            {/* Dynamic Title area */}
            <div className="relative w-full max-w-2xl lg:max-w-[45%] pointer-events-auto h-[250px] flex items-center ml-8 md:ml-16 lg:ml-24">
              {MEMBERS_DATA.map((member, idx) => {
                let activeIndex = Math.round((displayedRotation / 360) * MEMBERS_DATA.length) % MEMBERS_DATA.length;
                if (activeIndex < 0) activeIndex += MEMBERS_DATA.length;
                const isTitleActive = activeIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`absolute left-0 w-full transition-all flex flex-col justify-center ${
                      isTitleActive
                        ? 'opacity-100 translate-y-0 pointer-events-auto duration-500 delay-100 ease-[cubic-bezier(0.2,0.8,0.2,1)]'
                        : 'opacity-0 translate-y-4 pointer-events-none duration-200 ease-in'
                    }`}
                  >
                    <div className="text-[#D4AF37] font-medium tracking-[0.2em] text-sm mb-4">
                      {String(idx + 1).padStart(2, '0')} <span className="opacity-50 mx-1">/</span> {String(MEMBERS_DATA.length).padStart(2, '0')}
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-[72px] font-medium text-[#0D1F3C] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {member.title}
                    </h2>
                    <p className="text-xl md:text-2xl mt-4 text-[#0D1F3C]/70 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {member.description}
                    </p>
                    <p className="text-base md:text-lg mt-6 text-[#0D1F3C]/50 font-light leading-relaxed max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {member.bio}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-24 left-6 md:left-12 flex items-center space-x-6 opacity-60">
              <div className="w-16 h-[1px] bg-[#0D1F3C]/40"></div>
              <span className="text-[#0D1F3C] tracking-[0.2em] text-sm uppercase font-medium">Scroll to explore</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
