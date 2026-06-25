import React, { useState, useEffect, useRef } from 'react';
import { Link, useOutletContext, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import group3Img from '../../assets/group3.png';
import { LOGO_LINES } from './NewPage';

const CIRCLES_DATA = [
  {
    title: "Bootstrapped Founders",
    description: "This Circle brings together founders who have grown their companies without external capital. Members face unique trade-offs around capital efficiency, personal risk, cash-flow discipline, and long-term ownership versus speed. Discussions often center on scaling without dilution, founder burnout, and navigating growth while staying profitable. The shared mindset creates a highly pragmatic and execution-focused peer dynamic."
  },
  {
    title: "Expats",
    description: "Designed for internationally mobile individuals navigating life and business across borders. Members share challenges around taxation, residency, asset structuring, identity, family planning, and maintaining community while living globally. Conversations go beyond logistics into long-term life design, belonging, and decision-making in a non-rooted lifestyle. The Circle offers clarity and emotional grounding in a globally fragmented life."
  },
  {
    title: "Post-Exit Founders",
    description: "This Circle is for founders who have sold their company and are navigating the transition that follows. Members often face questions around purpose, identity, wealth management, and what to build—or not build—next. Discussions are deeply personal, touching on ambition after success, redefining fulfillment, and avoiding the common traps of post-exit restlessness. A space for honest reflection among peers who've \"been there.\""
  },
  {
    title: "HNW (2–10m+)",
    description: "For individuals who have reached high net worth and face a new category of decisions. Members discuss wealth allocation, risk management, family governance, lifestyle inflation, and long-term capital preservation. The Circle addresses the psychological shift that comes with financial independence, including boundaries, responsibility, and legacy thinking. Conversations are candid and grounded in real capital at stake."
  },
  {
    title: "Retired Early",
    description: "This Circle connects individuals who stepped away from traditional careers earlier than most. Members explore how to structure time, meaning, relationships, and ambition beyond work. Common themes include identity after exit, motivation without external pressure, and designing a life that stays intellectually and emotionally engaging. A reflective group for those redefining \"retirement\" on their own terms."
  },
  {
    title: "High-Earning Professionals",
    description: "Built for professionals with significant income but limited time and mental bandwidth. Members often face pressure around performance, lifestyle expectations, career ceilings, and transitioning from income to wealth. Discussions focus on leverage, optionality, stress management, and long-term strategy beyond salary. The Circle creates space to think beyond the next promotion."
  },
  {
    title: "Second Generation",
    description: "For individuals who grew up with wealth or family businesses and now carry inherited responsibility. Members navigate expectation, identity, stewardship, and the balance between independence and legacy. Conversations often explore governance, succession, personal ambition, and redefining success outside parental frameworks. A trusted space for nuanced, often unspoken challenges."
  },
  {
    title: "Females of Valorian",
    description: "A Circle for women navigating ambition, wealth, leadership, and personal growth in high-performance environments. Members discuss dynamics that are often underrepresented elsewhere: visibility, negotiation, boundaries, family planning, and identity shifts across life stages. The peer setting fosters openness, confidence, and shared perspective among women with comparable trajectories. Designed for depth, not networking."
  },
  {
    title: "Tech Leaders",
    description: "This Circle brings together senior technology leaders, product executives, and technical founders navigating high-impact decisions in fast-moving environments. Members face unique challenges around technical strategy, team scaling, emerging technologies, and balancing innovation with execution. Discussions explore leadership in technical contexts, career progression, equity decisions, and maintaining relevance in rapidly evolving fields. A space for strategic thinking beyond day-to-day execution."
  },
  {
    title: "VC-backed Operative Founders",
    description: "This Circle is for founders still deeply involved in day-to-day operations. Members share challenges around leadership scale, delegation, decision fatigue, and balancing growth with personal life. Discussions are tactical, immediate, and grounded in real operational pressure. The group offers clarity and perspective during intense execution phases."
  },
  {
    title: "UHNW (10m+)",
    description: "A highly confidential Circle for individuals with ultra-high net worth. Members face distinct issues around complexity, discretion, governance, intergenerational planning, and systemic risk. Conversations move beyond accumulation into preservation, influence, and legacy. The intimacy of the group enables unusually open discussions rarely possible elsewhere."
  },
  {
    title: "Executive Mothers",
    description: "Designed for mothers in senior leadership roles balancing responsibility across work and family. Members navigate time scarcity, identity shifts, guilt, ambition, and societal expectations. Discussions focus on sustainable performance, boundaries, partnership dynamics, and redefining success across life stages. A deeply supportive yet intellectually rigorous Circle."
  },
  {
    title: "Full-Time Investors",
    description: "For individuals whose primary occupation is capital allocation. Members discuss decision frameworks, portfolio construction, emotional discipline, information asymmetry, and long-term thinking. Conversations often explore loneliness in decision-making, risk psychology, and building conviction under uncertainty. A peer group for sharpening judgment, not pitching deals."
  },
  {
    title: "Breaking into Politics as a Business Person",
    description: "This Circle brings together individuals considering or actively pursuing a transition into public service or politics. Members face unique challenges around credibility, public scrutiny, value alignment, and translating private-sector thinking into political systems. Discussions explore strategy, ethics, narrative, and personal risk. A space for thoughtful preparation before stepping into the public arena."
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
            {CIRCLES_DATA.map((circle, idx) => {
              const baseAngle = 180 - (360 / CIRCLES_DATA.length) * idx;
              const itemRotation = -displayedRotation - baseAngle;

              let currentAbsoluteAngle = (baseAngle + displayedRotation) % 360;
              if (currentAbsoluteAngle < 0) currentAbsoluteAngle += 360;

              let diff = Math.abs(currentAbsoluteAngle - 180);
              if (diff > 180) diff = 360 - diff;

              // Smoother opacity drop-off using a power curve.
              // This keeps the card fully colored longer, and fades out elegantly without dropping to 40% mid-transition.
              const isActive = diff < 12;
              const opacityProgress = Math.min(diff / 22, 1);
              const opacity = 1 - Math.pow(opacityProgress, 2);

              const scaleProgress = Math.min(diff / 30, 1);
              const scale = Math.max(0.75, 1 - Math.pow(scaleProgress, 2) * 0.25);

              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${baseAngle}deg) translate(52vh) rotate(${itemRotation}deg)`,
                    opacity: opacity,
                    visibility: opacity <= 0.01 ? 'hidden' : 'visible',
                    zIndex: isActive ? 50 : 10,
                    width: "580px",
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                    // REMOVED CSS transition for opacity here to avoid fighting the 60fps React loop!
                  }}
                >
                  <div
                    className={`group p-8 md:p-10 border ${isActive ? 'bg-white/95 shadow-[0_20px_40px_rgba(13,31,60,0.1)] border-[#D4AF37]/40' : 'bg-white/60 shadow-lg border-[#0D1F3C]/10'}`}
                    style={{
                      transform: `scale(${scale})`,
                      // Only transition colors and shadows, NOT transform, to prevent jitter
                      transitionProperty: 'background-color, border-color, box-shadow',
                      transitionDuration: '300ms',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
                    <p className={`text-lg leading-relaxed font-light relative z-10 transition-colors duration-300 ${isActive ? 'text-[#0D1F3C]/80' : 'text-[#0D1F3C]/50'}`}>
                      {circle.description}
                    </p>
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
            <div className="absolute top-20 left-6 md:left-12 pointer-events-auto max-w-3xl">
              <h1 className="text-4xl md:text-5xl text-[#0D1F3C] mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Circles
              </h1>
              <p className="text-base text-[#0D1F3C]/70 font-light md:whitespace-nowrap">
                Not sure what the general purpose and structure of a Circle is?{' '}
                <a href="/members" onClick={handleLearnMore} className="text-[#D4AF37] hover:text-[#0D1F3C] transition-colors duration-300 cursor-pointer">
                  Learn more here.
                </a>
              </p>
            </div>

            {/* Dynamic Title area */}
            <div className="relative w-full max-w-2xl lg:max-w-[45%] pointer-events-auto h-[200px] flex items-center ml-8 md:ml-16 lg:ml-24">
              {CIRCLES_DATA.map((circle, idx) => {
                let activeIndex = Math.round((displayedRotation / 360) * CIRCLES_DATA.length) % CIRCLES_DATA.length;
                if (activeIndex < 0) activeIndex += CIRCLES_DATA.length;
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
                      {String(idx + 1).padStart(2, '0')} <span className="opacity-50 mx-1">/</span> {String(CIRCLES_DATA.length).padStart(2, '0')}
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-[72px] font-medium text-[#0D1F3C] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {circle.title}
                    </h2>
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
