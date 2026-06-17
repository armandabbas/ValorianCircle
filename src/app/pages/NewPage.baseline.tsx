import React, { useState, useEffect, useRef } from 'react';

interface SloganChar {
  char: string;
  isItalic?: boolean;
  isBlue?: boolean;
  isNewLineAfter?: boolean;
}

const SLOGAN_CHARS: SloganChar[] = [
  // "A sovereign network"
  { char: "A" }, { char: " " }, { char: "s" }, { char: "o" }, { char: "v" },
  { char: "e" }, { char: "r" }, { char: "e" }, { char: "i" }, { char: "g" },
  { char: "n" }, { char: " " }, { char: "n" }, { char: "e" }, { char: "t" },
  { char: "w" }, { char: "o" }, { char: "r" }, { char: "k", isNewLineAfter: true },

  // " for "
  { char: " " }, { char: "f" }, { char: "o" }, { char: "r" }, { char: " " },

  // "European" (Italic, Blue)
  { char: "E", isItalic: true, isBlue: true },
  { char: "u", isItalic: true, isBlue: true },
  { char: "r", isItalic: true, isBlue: true },
  { char: "o", isItalic: true, isBlue: true },
  { char: "p", isItalic: true, isBlue: true },
  { char: "e", isItalic: true, isBlue: true },
  { char: "a", isItalic: true, isBlue: true },
  { char: "n", isItalic: true, isBlue: true },

  // " technology leadership."
  { char: " " }, { char: "t" }, { char: "e" }, { char: "c" }, { char: "h" },
  { char: "n" }, { char: "o" }, { char: "l" }, { char: "o" }, { char: "g" },
  { char: "y" }, { char: " " }, { char: "l" }, { char: "e" }, { char: "a" },
  { char: "d" }, { char: "e" }, { char: "r" }, { char: "s" }, { char: "h" },
  { char: "i" }, { char: "p" }, { char: "." }
];

// Exact parsed static lines from /Users/armandabbas/Desktop/valorian-circle-logo.svg
const LOGO_LINES = [
  { x1: 27, y1: 20, x2: 39.42437684636158, y2: 20 },
  { x1: 26.978421336131895, y1: 20.549213670094915, x2: 37.53700709980833, y2: 21.380192391350366 },
  { x1: 26.913818384165964, y1: 21.095041255281615, x2: 40.1861918407464, y2: 23.19717869698034 },
  { x1: 26.806589442783736, y1: 21.634117546991337, x2: 38.53161108889607, y2: 24.449046193977487 },
  { x1: 26.657395614066075, y1: 22.163118960624633, x2: 37.716037470013006, y2: 25.756289513207413 },
  { x1: 26.467156727579006, y1: 22.67878402655563, x2: 39.02465507876664, y2: 27.880270153095328 },
  { x1: 26.237045669318576, y1: 23.177933498176827, x2: 37.212747109631366, y2: 28.77033270806885 },
  { x1: 25.968481150478645, y1: 23.65748995301164, x2: 35.19068958988066, y2: 29.30886655306793 },
  { x1: 25.663118960624633, y1: 24.11449676604731, x2: 36.455353611814175, y2: 31.955514212349613 },
  { x1: 25.322841759200216, y1: 24.546136338311285, x2: 34.89500927071058, y2: 32.72153972791318 },
  { x1: 24.949747468305834, y1: 24.94974746830583, x2: 34.235149162093904, y2: 34.235149162093904 },
  { x1: 24.546136338311285, y1: 25.322841759200216, x2: 33.496394427806514, y2: 35.80224755988095 },
  { x1: 24.11449676604731, y1: 25.663118960624633, x2: 31.540912256085324, y2: 35.88470297502002 },
  { x1: 23.65748995301164, y1: 25.968481150478645, x2: 29.93404358676472, y2: 36.21088578707294 },
  { x1: 23.177933498176827, y1: 26.237045669318576, x2: 28.835320058286378, y2: 37.34029196589323 },
  { x1: 22.67878402655563, y1: 26.467156727579006, x2: 27.219747179953643, y2: 37.43001155874899 },
  { x1: 22.163118960624633, y1: 26.657395614066075, x2: 25.937129903438432, y2: 38.272606961883355 },
  { x1: 21.634117546991337, y1: 26.806589442783736, x2: 24.015818881085607, y2: 36.72708946211064 },
  { x1: 21.095041255281615, y1: 26.913818384165964, x2: 22.861609693009374, y2: 38.06749253364673 },
  { x1: 20.549213670094915, y1: 26.978421336131895, x2: 21.583572583367896, y2: 40.12119745886557 },
  { x1: 20, y1: 27, x2: 20, y2: 38.775575028059976 },
  { x1: 19.450786329905085, y1: 26.978421336131895, x2: 18.385661332173875, y2: 40.51211762692229 },
  { x1: 18.904958744718382, y1: 26.913818384165964, x2: 16.836813931634875, y2: 39.971570830339274 },
  { x1: 18.365882453008663, y1: 26.806589442783736, x2: 15.514984066955517, y2: 38.68143583476207 },
  { x1: 17.83688103937537, y1: 26.657395614066075, x2: 14.173340860406773, y2: 37.93261291065781 },
  { x1: 17.32121597344437, y1: 26.467156727579006, x2: 12.704069494380139, y2: 37.613934376799065 },
  { x1: 16.822066501823173, y1: 26.237045669318576, x2: 11.281142675565244, y2: 37.111720980936184 },
  { x1: 16.34251004698836, y1: 25.968481150478645, x2: 10.009656523079075, y2: 36.302758857809515 },
  { x1: 15.88550323395269, y1: 25.663118960624633, x2: 9.648308415376981, y2: 34.247881143368716 },
  { x1: 15.453863661688715, y1: 25.322841759200216, x2: 8.479059883358044, y2: 33.489287736778785 },
  { x1: 15.050252531694168, y1: 24.949747468305834, x2: 6.518062195938956, y2: 33.48193780406105 },
  { x1: 14.677158240799784, y1: 24.546136338311285, x2: 5.46831841831936, y2: 32.41122856621864 },
  { x1: 14.336881039375369, y1: 24.114496766047314, x2: 4.627091648170046, y2: 31.169071696733262 },
  { x1: 14.031518849521355, y1: 23.65748995301164, x2: 2.9193671945596833, y2: 30.467025245102604 },
  { x1: 13.762954330681426, y1: 23.177933498176827, x2: 4.477774977780351, y2: 27.90896868160014 },
  { x1: 13.532843272420994, y1: 22.67878402655563, x2: 1.4575037245049565, y2: 27.68055343756265 },
  { x1: 13.342604385933925, y1: 22.163118960624633, x2: 2.703264591561645, y2: 25.620050014730747 },
  { x1: 13.193410557216264, y1: 21.634117546991337, x2: -0.1480401205465256, y2: 24.837116470037206 },
  { x1: 13.086181615834036, y1: 21.095041255281618, x2: 2.0336562850122384, y2: 22.845589293976587 },
  { x1: 13.021578663868105, y1: 20.549213670094915, x2: 1.1966094061284345, y2: 21.47985893382767 },
  { x1: 13, y1: 20, x2: -0.22582097699049797, y2: 20.000000000000004 },
  { x1: 13.021578663868103, y1: 19.45078632990509, x2: 1.8721524459380028, y2: 18.573307456438847 },
  { x1: 13.086181615834036, y1: 18.904958744718385, x2: 2.4981736721926353, y2: 17.227983032413 },
  { x1: 13.193410557216264, y1: 18.365882453008663, x2: 2.880546601592993, y2: 15.889982871980573 },
  { x1: 13.342604385933925, y1: 17.836881039375367, x2: 2.4204062455554087, y2: 14.28804373740796 },
  { x1: 13.532843272420992, y1: 17.32121597344437, x2: 1.8754801918808255, y2: 12.492578083977234 },
  { x1: 13.762954330681424, y1: 16.822066501823176, x2: 4.037333245738424, y2: 11.866615046905107 },
  { x1: 14.031518849521355, y1: 16.34251004698836, x2: 4.329505104938686, y2: 10.39710837776365 },
  { x1: 14.336881039375367, y1: 15.88550323395269, x2: 5.517193805089061, y2: 9.477625374537709 },
  { x1: 14.677158240799784, y1: 15.453863661688713, x2: 6.733269975933961, y2: 8.669142127186918 },
  { x1: 15.050252531694166, y1: 15.050252531694168, x2: 5.997403542052135, y2: 5.9974035420521385 },
  { x1: 15.453863661688711, y1: 14.677158240799786, x2: 8.098351412040095, y2: 6.0649599147632465 },
  { x1: 15.885503233952686, y1: 14.336881039375369, x2: 9.877517252142683, y2: 6.067597755567828 },
  { x1: 16.342510046988355, y1: 14.031518849521357, x2: 10.233827203558935, y2: 4.063054445336377 },
  { x1: 16.822066501823173, y1: 13.762954330681426, x2: 10.842650183930472, y2: 2.02768904839629 },
  { x1: 17.321215973444367, y1: 13.532843272420994, x2: 13.09165388902877, y2: 3.321777125325859 },
  { x1: 17.836881039375367, y1: 13.342604385933925, x2: 13.89334399021504, y2: 1.2056453314925122 },
  { x1: 18.365882453008663, y1: 13.193410557216264, x2: 15.531538617911325, y2: 1.3875188325281123 },
  { x1: 18.904958744718382, y1: 13.086181615834036, x2: 17.019798684850688, y2: 1.183749432439491 },
  { x1: 19.45078632990509, y1: 13.021578663868105, x2: 18.56425779220779, y2: 1.7571655594246351 },
  { x1: 20, y1: 13, x2: 19.999999999999996, y2: 1.3756360082070813 },
  { x1: 20.54921367009491, y1: 13.021578663868103, x2: 21.46549995551394, y2: 1.3790575243848124 },
  { x1: 21.095041255281615, y1: 13.086181615834036, x2: 23.008527022590403, y2: 1.0049079541790285 },
  { x1: 21.634117546991334, y1: 13.193410557216263, x2: 24.07215733742436, y2: 3.038243978654254 },
  { x1: 22.16311896062463, y1: 13.342604385933925, x2: 26.017778657306813, y2: 1.479181696042211 },
  { x1: 22.67878402655563, y1: 13.532843272420994, x2: 27.53638371051865, y2: 1.805560234818227 },
  { x1: 23.177933498176827, y1: 13.762954330681424, x2: 29.278650254963466, y2: 1.7896235327006522 },
  { x1: 23.65748995301164, y1: 14.031518849521355, x2: 30.780374484008874, y2: 2.4080277103899697 },
  { x1: 24.11449676604731, y1: 14.336881039375367, x2: 30.636515222584734, y2: 5.360092750817943 },
  { x1: 24.546136338311285, y1: 14.677158240799784, x2: 31.82963184319516, y2: 6.149280689123877 },
  { x1: 24.94974746830583, y1: 15.050252531694166, x2: 32.944295046872504, y2: 7.05570495312749 },
  { x1: 25.322841759200212, y1: 15.453863661688711, x2: 34.89086334278542, y2: 7.282001229051 },
  { x1: 25.66311896062463, y1: 15.885503233952686, x2: 36.61943663430866, y2: 7.9252724936844725 },
  { x1: 25.96848115047864, y1: 16.34251004698835, x2: 37.29789458750261, y2: 9.399836563616917 },
  { x1: 26.237045669318576, y1: 16.822066501823173, x2: 37.37777501567769, y2: 11.145581373923765 },
  { x1: 26.467156727579006, y1: 17.321215973444367, x2: 38.92018278174457, y2: 12.16300368922347 },
  { x1: 26.657395614066075, y1: 17.836881039375367, x2: 37.2158629020425, y2: 14.406227055480983 },
  { x1: 26.806589442783736, y1: 18.365882453008663, x2: 38.49464062603374, y2: 15.559829628869124 },
  { x1: 26.913818384165964, y1: 18.904958744718382, x2: 38.61626663372455, y2: 17.05147302828519 },
  { x1: 26.978421336131895, y1: 19.450786329905085, x2: 38.460196887893765, y2: 18.547150996604255 },
];

// Helper to blend two hex colors based on proximity percentage
const blendColors = (color1: string, color2: string, percentage: number) => {
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * percentage);
  const g = Math.round(g1 + (g2 - g1) * percentage);
  const b = Math.round(b1 + (b2 - b1) * percentage);

  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
};

export function NewPage() {
  const [key, setKey] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLogoMovedUp, setIsLogoMovedUp] = useState(false);
  const [proximityGlow, setProximityGlow] = useState(0);

  const angleRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const currentSpeedRef = useRef(12.0); // Decoupled starting speed (deg/sec)
  const rotateElementRef = useRef<SVGGElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  const handleReplay = () => {
    angleRef.current = 0;
    currentSpeedRef.current = 12.0;
    lastTimeRef.current = performance.now();
    setIsLogoMovedUp(false);
    setKey((prev) => prev + 1);
  };

  const handleLogoClick = () => {
    if (isLoaded && !isClicked) {
      setIsClicked(true);
      setTimeout(() => {
        setIsLogoMovedUp(true);
      }, 1250); // Slogan takes 1.1s (delay) + 0.35s (duration) to fade. At 1.25s it is virtually gone, then logo starts moving.
    }
  };

  useEffect(() => {
    setIsLoaded(false);
    setIsClicked(false);
    setIsLogoMovedUp(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2850); // 1.35s roll-up duration + 1.5s pause before slide-up
    return () => clearTimeout(timer);
  }, [key]);

  useEffect(() => {
    let animationFrameId: number;

    const updateRotation = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // Speed up elegantly when active (clicked), else run at stable constant speed
      let targetSpeed = 0;
      if (isClicked) {
        targetSpeed = 4;
      } else {
        targetSpeed = 12;
      }

      // High-end dampening (inertia) for ultra-premium floating fluidity
      currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * 0.05;

      // Increment rotation angle: angle = angle + speed * (delta / 1000)
      angleRef.current = (angleRef.current + currentSpeedRef.current * (delta / 1000)) % 360;

      // Direct hardware-accelerated DOM writing bypasses React re-render cycle (perfect 120Hz)
      if (rotateElementRef.current) {
        rotateElementRef.current.setAttribute('transform', `rotate(${angleRef.current}, 130, 130)`);
      }

      animationFrameId = requestAnimationFrame(updateRotation);
    };

    lastTimeRef.current = performance.now();
    animationFrameId = requestAnimationFrame(updateRotation);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [key, isClicked]);

  // Track cursor position relative to logo to light up the circle
  useEffect(() => {
    if (!isLoaded || isClicked) {
      setProximityGlow(0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!logoContainerRef.current) return;
      const rect = logoContainerRef.current.getBoundingClientRect();
      const logoCenterX = rect.left + rect.width / 2;
      const logoCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - logoCenterX;
      const dy = e.clientY - logoCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Define proximity boundaries (starts glowing at 350px away, max at 45px away)
      const maxDistance = 350;
      const minDistance = 45;

      if (distance > maxDistance) {
        setProximityGlow(0);
      } else if (distance < minDistance) {
        setProximityGlow(1);
      } else {
        const glow = 1 - (distance - minDistance) / (maxDistance - minDistance);
        setProximityGlow(glow);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLoaded, isClicked]);

  return (
    <div
      className="min-h-screen w-full bg-[#FFF8E7] flex flex-col items-center justify-center relative overflow-y-scroll select-none"
    >
      {/* Dynamic inline styles for logo animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes valShootSpike {
          0% {
            opacity: 0;
            stroke-dashoffset: 13;
          }
          1% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }

        @keyframes valDrawCircle {
          from {
            stroke-dashoffset: 44;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .val-line {
          stroke-linecap: round;
          stroke-dasharray: 13;
          stroke-dashoffset: 13;
          opacity: 0;
          animation: valShootSpike 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .val-circle {
          stroke-linecap: round;
          stroke-dasharray: 44;
          stroke-dashoffset: 44;
          animation: valDrawCircle 1.25s linear forwards;
          animation-delay: 0.1s;
        }

        .val-logo-rotate {
          will-change: transform;
        }

        @keyframes valFadeChar {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .val-char-v1, .val-char-v2, .val-char-v3, .val-char-v4,
        .val-char-v5, .val-char-v6, .val-char-v7, .val-char-v8,
        .val-char-c1, .val-char-c2, .val-char-c3, .val-char-c4,
        .val-char-c5, .val-char-c6 {
          opacity: 0;
          animation: valFadeChar 0.18s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Valorian Clockwise Sweep (9:00 Start -> swept at t = 0.35s to 0.56s) */
        .val-char-v1 { animation-delay: 0.35s; }
        .val-char-v2 { animation-delay: 0.38s; }
        .val-char-v3 { animation-delay: 0.41s; }
        .val-char-v4 { animation-delay: 0.44s; }
        .val-char-v5 { animation-delay: 0.47s; }
        .val-char-v6 { animation-delay: 0.50s; }
        .val-char-v7 { animation-delay: 0.53s; }
        .val-char-v8 { animation-delay: 0.56s; }

        /* Circle Sweep -> Unroll from Right-to-Left (t = 0.95s to 1.10s) */
        .val-char-c6 { animation-delay: 0.95s; }
        .val-char-c5 { animation-delay: 0.98s; }
        .val-char-c4 { animation-delay: 1.01s; }
        .val-char-c3 { animation-delay: 1.04s; }
        .val-char-c2 { animation-delay: 1.07s; }
        .val-char-c1 { animation-delay: 1.10s; }

        .val-circle-loaded {
          cursor: pointer !important;
          pointer-events: auto !important;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }



        .val-circle-clicked {
          stroke: #D4AF37 !important;
          filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.85)) !important;
          pointer-events: none !important;
          transition: all 0.6s ease-out;
        }

        @keyframes bentoSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .bento-container {
          animation: bentoSlideUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes valSloganFadeInChar {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.96);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes valSloganFadeOut {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(-8px) scale(0.9);
            filter: blur(2px);
          }
        }
      `}} />

      {/* Center Brand Column */}
      <div className="flex flex-col items-center justify-center relative select-none">

        {/* Center Brand Seal (Browser Company of NY Style) */}
        <div
          ref={logoContainerRef}
          key={key}
          onClick={handleLogoClick}
          className={`w-[360px] h-[360px] flex items-center justify-center relative select-none transition-all ease-[cubic-bezier(0.15,0.85,0.2,1)] duration-[3000ms] ${
            isLoaded && !isClicked ? 'cursor-pointer' : ''
          } ${isLogoMovedUp
            ? 'transform scale-[0.48] -translate-y-[340px]'
            : isLoaded
              ? 'transform scale-[0.62] -translate-y-[230px]'
              : 'transform scale-100 translate-y-0'
            }`}
        >
          <svg
            viewBox="0 0 260 260"
            className="w-full h-full drop-shadow-[0_8px_24px_rgba(13,31,60,0.06)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Curved Path definitions for text */}
            <defs>
              {/* Top arc: radius 112, centered at (130, 130) */}
              <path id="top-text-path" d="M 18,130 A 112,112 0 0,1 242,130" fill="none" />
              {/* Bottom arc: radius 124, centered at (130, 130), left-to-right via bottom so text is right side up */}
              <path id="bottom-text-path" d="M 6,130 A 124,124 0 0,0 254,130" fill="none" />
            </defs>

            {/* Static Curved Brand Typography (Does NOT rotate) */}
            <g className="select-none pointer-events-none">
              {/* Top Curved Text: VALORIAN */}
              <text
                className="fill-[#0D1F3C] font-light uppercase"
                fontSize="14"
                textAnchor="middle"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  letterSpacing: "0.28em",
                }}
              >
                <textPath href="#top-text-path" startOffset="50%" textAnchor="middle">
                  <tspan className="val-char-v1">V</tspan><tspan className="val-char-v2">a</tspan><tspan className="val-char-v3">l</tspan><tspan className="val-char-v4">o</tspan><tspan className="val-char-v5">r</tspan><tspan className="val-char-v6">i</tspan><tspan className="val-char-v7">a</tspan><tspan className="val-char-v8">n</tspan>
                </textPath>
              </text>

              {/* Bottom Curved Text: CIRCLE */}
              <text
                className="fill-[#0D1F3C] font-light uppercase"
                fontSize="14"
                textAnchor="middle"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  letterSpacing: "0.28em",
                }}
              >
                <textPath href="#bottom-text-path" startOffset="50.8%" textAnchor="middle">
                  <tspan className="val-char-c1">C</tspan><tspan className="val-char-c2">i</tspan><tspan className="val-char-c3">r</tspan><tspan className="val-char-c4">c</tspan><tspan className="val-char-c5">l</tspan><tspan className="val-char-c6">e</tspan>
                </textPath>
              </text>
            </g>

            {/* Rotating Sunburst Logo Group */}
            <g
              ref={rotateElementRef}
              className="val-logo-rotate"
            >
              {/* Central Sunburst Icon Group (Centered perfectly at 130, 130) */}
              <g transform="translate(130, 130) scale(5) translate(-20, -20)">
                {/* Exactly rebuilt 80 lines from /Users/armandabbas/Desktop/valorian-circle-logo.svg */}
                <g opacity="1">
                  {LOGO_LINES.map((line, i) => (
                    <line
                      key={i}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="#0D1F3C"
                      strokeWidth="0.4"
                      strokeLinecap="round"
                      className="val-line"
                      style={{
                        // Sweep starting at 9 o'clock (index 40) and unrolling clockwise
                        animationDelay: `${0.1 + (((i - 40 + 80) % 80) / 80) * 1.25}s`,
                      }}
                    />
                  ))}
                </g>

                {/* Exactly rebuilt center circle, rotated to start unrolling at 9 o'clock */}
                <circle
                  cx="20"
                  cy="20"
                  r="7"
                  fill="none"
                  strokeWidth="0.6"
                  className={`val-circle ${isLoaded ? 'val-circle-loaded' : ''} ${isClicked ? 'val-circle-clicked' : ''}`}
                  onClick={handleLogoClick}
                  transform="rotate(-180, 20, 20)"
                  style={{
                    stroke: isClicked
                      ? "#D4AF37"
                      : blendColors("#0D1F3C", "#D4AF37", proximityGlow),
                    filter: isClicked
                      ? "drop-shadow(0 0 10px rgba(212, 175, 55, 0.85))"
                      : proximityGlow > 0
                        ? `drop-shadow(0 0 ${proximityGlow * 8}px rgba(212, 175, 55, ${proximityGlow * 0.7}))`
                        : undefined,
                    transition: isClicked
                      ? "stroke 0.6s ease-out, filter 0.6s ease-out"
                      : "stroke 0.1s ease-out, filter 0.1s ease-out"
                  }}
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Slogan visible when logo has moved up, fades in letter-by-letter from left, and exit fades letter-by-letter from right when clicked */}
        {isLoaded && (
          <div
            className="absolute flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none"
            style={{
              top: "140px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "95vw",
              maxWidth: "1400px"
            }}
          >
            <p
              className="text-[#0D1F3C]/85 font-light tracking-[0.04em] text-[32px] md:text-[32px] lg:text-[32px]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                lineHeight: "1.4"
              }}
            >
              {SLOGAN_CHARS.map((item, idx) => {
                const isNewLine = item.isNewLineAfter;
                return (
                  <React.Fragment key={idx}>
                    <span
                      style={{
                        fontFamily: item.isItalic ? "'Playfair Display', serif" : undefined,
                        fontStyle: item.isItalic ? "italic" : undefined,
                        color: item.isBlue ? "#003399" : undefined,
                        display: "inline-block",
                        whiteSpace: item.char === " " ? "pre" : "normal",
                        animation: isClicked
                          ? `valSloganFadeOut 0.35s cubic-bezier(0.25, 1, 0.5, 1) forwards`
                          : `valSloganFadeInChar 0.8s cubic-bezier(0.16, 1, 0.3, 1) both`,
                        animationDelay: isClicked
                          ? `${(SLOGAN_CHARS.length - 1 - idx) * 0.022}s`
                          : `${0.8 + idx * 0.022}s`
                      }}
                    >
                      {item.char}
                    </span>
                    {isNewLine && <br />}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        )}

        {/* Unlocked Bento Dashboard Portal - Left empty for new content */}
        {isLogoMovedUp && (
          <div className="w-full max-w-[800px] mt-8 px-4 md:px-0 flex flex-col items-center justify-center select-none min-h-[300px] bento-container">
            {/* Left empty for new exclusive content */}
          </div>
        )}
      </div>
    </div>
  );
}


