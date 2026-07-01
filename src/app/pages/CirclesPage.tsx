import React, { useState, useEffect, useRef } from 'react';
import { Link, useOutletContext, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import group3Img from '../../assets/group3.png';
import { LOGO_LINES } from './NewPage';

const CIRCLES_DATA = [
  {
    title: "Capital\nAllocation",
    description: [
      "Direct access to opportunities, market insights, and deep allocation experience across sectors. Real knowledge far away from standard pitches.",
      "Our members share deal flow, co-invest with trust, and navigate complex markets together. Backed by the kind of candour that only genuine peer relationships can produce."
    ]
  },
  {
    title: "Personal\nMatters",
    description: [
      "Family, health, and purpose. The crucial personal questions that come with extreme success. A quiet space without judgment.",
      "Carrying significant responsibility can be isolating. Valorian offers a rare environment where vulnerability is protected and the most human conversations can finally take place."
    ]
  },
  {
    title: "Business\nDecisions",
    description: [
      "A trusted sounding board for strategic moves, crisis management, complex exits, and questions of identity.",
      "Whether you are navigating a founder transition, weighing a major acquisition, or rethinking your next chapter, your circle has seen it before and will tell you the truth."
    ]
  },
  {
    title: "The Bigger\nPicture",
    description: [
      "Navigating European regulations together, developing a shared vision for the continent, and answering strategic location questions.",
      "Europe's most consequential decisions are shaped by those in the room. Valorian ensures that room is filled with people who think in decades, not quarters."
    ]
  }
];

export function CirclesPage({ isEmbedded, onApplyClick }: { isEmbedded?: boolean; onApplyClick?: () => void }) {
  let context: any = null;
  try {
    context = useOutletContext();
  } catch (e) {
    // Ignore error if not in router outlet context
  }
  const handleApplyClick = onApplyClick || context?.onApplyClick;
  const location = useLocation();
  const navigate = useNavigate();
  const fromStart = location.state?.fromStart === true;
  
  const [animate, setAnimate] = useState(() => {
    // Force animation if coming smoothly from the start page
    if (fromStart) return false;
    
    if (typeof window !== 'undefined') {
      return localStorage.getItem('circlesAnimationPlayed') === 'true';
    }
    return false;
  });

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setAnimate(false);
    setTimeout(() => {
      navigate('/members', { state: { fromCircles: true } });
    }, 1000);
  };

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
      localStorage.setItem('circlesAnimationPlayed', 'true');
    }, 50);
    return () => clearTimeout(timeout);
  }, [animate]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Lerp Animation Loop for buttery smooth scrolling and magnetic snapping
  useEffect(() => {
    let animationFrameId: number;
    let lastRenderedRotation = 0;

    const updateLoop = () => {
      // Fast lerp when user is actively scrolling, slow elegant lerp when snapping
      const lerpFactor = isUserScrolling.current ? 0.25 : 0.08;
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
        // Snap to nearest item (360 / 14 = 25.714 deg per item)
        const step = 360 / CIRCLES_DATA.length;
        targetRotation.current = Math.round(targetRotation.current / step) * step;
      }, 150);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Stop page scroll
      targetRotation.current += e.deltaY * 0.08;
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
    <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: isEmbedded ? 'transparent' : '#FFFBF3' }}>
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
            height: isMobile ? "80vh" : "100vh",
            width: isMobile ? "80vh" : "100vh",
            opacity: animate ? 1 : 0, // Smoothly fade in on mount
            transform: animate
              ? `translate(${isMobile ? "60%" : "50%"}, -50%) scale(1)`
              : `translate(${isMobile ? "60%" : "50%"}, -50%) scale(0.95)`,
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
            {CIRCLES_DATA.map((circle, idx) => {
              const baseAngle = 180 - (360 / CIRCLES_DATA.length) * idx;
              const itemRotation = -displayedRotation - baseAngle;

              let currentAbsoluteAngle = (baseAngle + displayedRotation) % 360;
              if (currentAbsoluteAngle < 0) currentAbsoluteAngle += 360;

              let diff = Math.abs(currentAbsoluteAngle - 180);
              if (diff > 180) diff = 360 - diff;

              // Smoother opacity drop-off using a power curve.
              // This keeps the card fully colored longer, and fades out elegantly without dropping to 40% mid-transition.
              const isActive = diff < 25;
              const opacityProgress = Math.min(diff / 35, 1);
              const opacity = 1 - Math.pow(opacityProgress, 2);

              const scaleProgress = Math.min(diff / 45, 1);
              const scale = Math.max(0.75, 1 - Math.pow(scaleProgress, 2) * 0.25);

              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${baseAngle}deg) translate(${isMobile ? 38 : 52}vh) rotate(${itemRotation}deg)`,
                    opacity: opacity,
                    visibility: opacity <= 0.01 ? 'hidden' : 'visible',
                    zIndex: isActive ? 50 : 10,
                    width: isMobile ? "300px" : "580px",
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                    // REMOVED CSS transition for opacity here to avoid fighting the 60fps React loop!
                  }}
                >
                  <div
                    className={`group ${isMobile ? 'p-6 rounded-3xl' : 'p-8 md:p-10 rounded-[2rem]'} border ${isActive ? 'bg-white/95 shadow-[0_20px_40px_rgba(13,31,60,0.1)] border-transparent' : 'bg-white/60 shadow-lg border-[#0D1F3C]/10'}`}
                    style={{
                      transform: `scale(${scale})`,
                      // Only transition colors and shadows, NOT transform, to prevent jitter
                      transitionProperty: 'background-color, border-color, box-shadow',
                      transitionDuration: '300ms',
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${isMobile ? 'rounded-3xl' : 'rounded-2xl'}`} />
                    {Array.isArray(circle.description) ? (
                      circle.description.map((p, pIdx) => (
                        <p key={pIdx} className={`${isMobile ? 'text-sm' : 'text-lg'} leading-relaxed font-light relative z-10 transition-colors duration-300 mb-4 last:mb-0 ${isActive ? 'text-[#0D1F3C]/80' : 'text-[#0D1F3C]/50'}`}>
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className={`${isMobile ? 'text-sm' : 'text-lg'} leading-relaxed font-light relative z-10 transition-colors duration-300 ${isActive ? 'text-[#0D1F3C]/80' : 'text-[#0D1F3C]/50'}`}>
                        {circle.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom headers removed to rely on global Navigation component from RootLayout */}

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
            <div className="absolute top-20 md:top-32 left-6 md:left-12 pointer-events-auto max-w-3xl">
              <h1 className="text-4xl md:text-5xl text-[#0D1F3C] mb-4 tracking-tight" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Our Mission
              </h1>
              <p className="text-base text-[#0D1F3C]/70 font-light max-w-[240px] md:max-w-xl">
                The conversations that matter most happen inside Valorian. Candid, confidential, and among true peers.
              </p>
            </div>

            {/* Dynamic Title area */}
            <div className="absolute bottom-12 md:bottom-auto md:relative w-[calc(100%-3rem)] md:w-full max-w-2xl lg:max-w-[45%] pointer-events-auto h-auto md:h-[200px] flex items-end md:items-center left-6 md:left-0 md:ml-16 lg:ml-24 z-30">
              {CIRCLES_DATA.map((circle, idx) => {
                let activeIndex = Math.round((displayedRotation / 360) * CIRCLES_DATA.length) % CIRCLES_DATA.length;
                if (activeIndex < 0) activeIndex += CIRCLES_DATA.length;
                const isTitleActive = activeIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`absolute left-0 bottom-0 md:bottom-auto w-full transition-all flex flex-col justify-end md:justify-center bg-gradient-to-t from-[#FFFBF3] via-[#FFFBF3]/80 to-transparent pt-12 md:pt-0 md:bg-none ${
                      isTitleActive
                        ? 'opacity-100 translate-y-0 pointer-events-auto duration-500 delay-100 ease-[cubic-bezier(0.2,0.8,0.2,1)]'
                        : 'opacity-0 translate-y-4 pointer-events-none duration-200 ease-in'
                    }`}
                  >
                    {/* Indicator removed */}
                    <h2 className="text-3xl md:text-6xl lg:text-[72px] font-medium text-[#0D1F3C] leading-tight whitespace-pre-line" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                      {circle.title}
                    </h2>
                  </div>
                );
              })}
            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex absolute bottom-24 left-6 md:left-12 items-center space-x-6 opacity-60">
              <div className="w-16 h-[1px] bg-[#0D1F3C]/40"></div>
              <span className="text-[#0D1F3C] tracking-[0.2em] text-sm uppercase font-medium">Scroll to explore</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
