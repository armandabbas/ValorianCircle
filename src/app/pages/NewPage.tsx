import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, animate, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Linkedin } from 'lucide-react';
import StaggeredMenu from '../components/StaggeredMenu';
import logoImg from '../../assets/logo.png';
import circleImg from '../../assets/Group 3.svg';
import mem1 from '../../assets/members/00f0e6528337a6c8596821b53225b3472814921c 1.png';
import mem2 from '../../assets/members/03e7a8d3be5ad2614de732df648890672667be28 1.png';
import mem3 from '../../assets/members/065314ec8b141d2c6904e58b03af00b15a8cd181 1.png';
import mem4 from '../../assets/members/0b8875f4e47ba917545238466007f4c4ac404246 1.png';
import mem5 from '../../assets/members/11cc3d4d9410dab22aa5f1fc27f476ee7b0bb465 1.png';

const ScrollExitWord = ({ children, index, total, progress, outStart, outEnd, className, variants }: any) => {
  const reverseIndex = total - 1 - index;
  const staggerDuration = (outEnd - outStart) * 0.5;
  const fadeDuration = (outEnd - outStart) * 0.5;
  const staggerStep = total > 1 ? staggerDuration / (total - 1) : 0;
  
  const wordOutStart = outStart + reverseIndex * staggerStep;
  const wordOutEnd = wordOutStart + fadeDuration;
  
  const opacity = useTransform(progress, [wordOutStart, wordOutEnd], [1, 0]);
  const y = useTransform(progress, [wordOutStart, wordOutEnd], [0, -60]);
  const filter = useTransform(progress, [wordOutStart, wordOutEnd], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.span variants={variants} className={className} style={{ display: 'inline-block' }}>
      <motion.span style={{ opacity, y, filter, display: 'inline-block' }}>
        {children}
      </motion.span>
    </motion.span>
  );
};

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Mission', ariaLabel: 'Read our mission', link: '/circles' },
  { label: 'Selection', ariaLabel: 'View selection process', link: '/selection' },
  { label: 'Members', ariaLabel: 'See members', link: '/members' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Twitter', link: 'https://twitter.com' },
];

const headerLinks = [
  { label: 'Mission', link: '/circles' },
  { label: 'Members', link: '/members' },
  { label: 'Selection', link: '/selection' }
];
import { Footer } from '../components/Footer';
import { ApplicationForm } from '../components/ApplicationForm';
import { CookieBanner } from '../components/CookieBanner';

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
export const LOGO_LINES = [
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

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

function ScrollReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? undefined : 0,
        animationName: revealed ? 'valSloganFadeInChar' : 'none',
        animationDuration: '0.95s',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
}

export function NewPage() {
  const { scrollY } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [proximityGlow, setProximityGlow] = useState(0);

  const lowerHeroRef = useRef<HTMLElement>(null);

  // Track scroll position so we can return to it when clicking the logo
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('homeScrollY', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const { scrollYProgress: lowerHeroProgress } = useScroll({
    target: lowerHeroRef,
    offset: ["start end", "end start"]
  });

  // Scale from small (0.2) to big (1.2), then shrink very slowly to a smaller size (0.6) over a longer distance
  const starScale = useTransform(lowerHeroProgress, [0.1, 0.75, 1.15], [0.2, 1.2, 0.6]);
  const starY = useTransform(lowerHeroProgress, [0.1, 0.75], [700, 0]);
  const starOpacity = useTransform(lowerHeroProgress, [0.1, 0.4], [0, 1]);
  const h1Opacity = useTransform(lowerHeroProgress, [0.1, 0.3, 0.6, 0.75], [0, 1, 1, 0]);
  const h1FadeOutOpacity = useTransform(lowerHeroProgress, [0.6, 0.75], [1, 0]);
  const h1Y = useTransform(lowerHeroProgress, [0.1, 0.3, 0.6, 0.75], [50, 0, 0, -50]);
  const visionOpacity = useTransform(lowerHeroProgress, [0.45, 0.7], [0, 1]);
  const visionY = useTransform(lowerHeroProgress, [0.45, 0.7], [50, 0]);

  const [showNetwork, setShowNetwork] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useMotionValueEvent(lowerHeroProgress, "change", (latest) => {
    if (latest > 0.95 && !showNetwork) setShowNetwork(true);
    if (latest <= 0.95 && showNetwork) setShowNetwork(false);
  });

  useEffect(() => {
    let timeout: number;
    if (isLoaded) {
      timeout = window.setTimeout(() => {
        setShowScrollPrompt(true);
      }, 400);
    } else {
      setShowScrollPrompt(false);
    }
    return () => window.clearTimeout(timeout);
  }, [isLoaded]);

  const introDoneRef = useRef(sessionStorage.getItem('skipIntro') === 'true');
  const snapFiredRef = useRef(false);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('skipIntro') === 'true') {
      if (spacerRef.current) spacerRef.current.style.height = '0px';
    }
  }, []);

  const introY = useTransform(scrollY, (y) => {
    if (introDoneRef.current) return '-100vh';
    const progress = Math.min(800, Math.max(0, y)) / 800;
    return `${-progress * 100}vh`;
  });
  const introFadeOut = useTransform(scrollY, [0, 400], [1, 0]);

  const pointerEvents = useTransform(scrollY, (y) => {
    if (introDoneRef.current || y > 750) return 'none';
    return 'auto';
  });

  const promptOpacity = useTransform(scrollY, [0, 50], [showScrollPrompt ? 1 : 0, 0]);

  useEffect(() => {
    return scrollY.on('change', (y) => {
      // Once intro fully raised: collapse spacer and adjust scroll
      if (y >= window.innerHeight && !introDoneRef.current) {
        introDoneRef.current = true;
        const contentScroll = Math.max(0, y - window.innerHeight);
        if (spacerRef.current) spacerRef.current.style.height = '0px';
        requestAnimationFrame(() => {
          window.scrollTo({ top: contentScroll, behavior: 'instant' });
        });
      }
    });
  }, [scrollY]);

  const angleRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rotateElementRef = useRef<SVGGElement>(null);
  const targetGlowRef = useRef(0);
  const currentGlowRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2850);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateRotation = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      angleRef.current = (angleRef.current + 12 * (delta / 1000)) % 360;

      if (rotateElementRef.current) {
        rotateElementRef.current.setAttribute('transform', `rotate(${angleRef.current}, 20, 20)`);
      }

      currentGlowRef.current += (targetGlowRef.current - currentGlowRef.current) * 0.10;
      if (targetGlowRef.current === 0 && currentGlowRef.current < 0.002) {
        currentGlowRef.current = 0;
      }
      setProximityGlow(currentGlowRef.current);

      animationFrameId = requestAnimationFrame(updateRotation);
    };

    lastTimeRef.current = performance.now();
    animationFrameId = requestAnimationFrame(updateRotation);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Track cursor position relative to logo
  useEffect(() => {
    if (!isLoaded) {
      setProximityGlow(0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const logoCenterX = window.innerWidth / 2;
      const logoCenterY = window.innerHeight / 2;

      const dx = e.clientX - logoCenterX;
      const dy = e.clientY - logoCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDistance = 330;
      const minDistance = 45;

      if (distance > maxDistance) {
        targetGlowRef.current = 0;
      } else if (distance < minDistance) {
        targetGlowRef.current = 1;
      } else {
        const proximity = 1 - (distance - minDistance) / (maxDistance - minDistance);
        targetGlowRef.current = Math.pow(proximity, 0.9);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isLoaded]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FFFBF3]">
      <div id="intro-spacer" ref={spacerRef} style={{ height: '100vh' }} />
      <motion.div
        style={{ y: introY, opacity: introFadeOut, pointerEvents: pointerEvents as any }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFBF3] overflow-hidden"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <style dangerouslySetInnerHTML={{
            __html: `
            .val-char-v1 { animation-delay: 0.15s; }
            .val-char-v2 { animation-delay: 0.18s; }
            .val-char-v3 { animation-delay: 0.21s; }
            .val-char-v4 { animation-delay: 0.24s; }
            .val-char-v5 { animation-delay: 0.27s; }
            .val-char-v6 { animation-delay: 0.30s; }
            .val-char-v7 { animation-delay: 0.33s; }
            .val-char-v8 { animation-delay: 0.36s; }
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
            @keyframes valSloganFadeInChar {
              0% { opacity: 0; transform: translateY(6px) scale(0.96); filter: blur(2px); }
              100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
            }
            @keyframes scrollBounce {
              0%, 100% { transform: translateY(0); opacity: 0.45; }
              50% { transform: translateY(5px); opacity: 0.85; }
            }
            .val-line {
              animation: valShootSpike 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
            .val-circle {
              animation: valDrawCircle 1.25s linear both;
            }
            @keyframes valShootSpike {
              0% { opacity: 0; stroke-dashoffset: 13; }
              1% { opacity: 1; }
              100% { opacity: 1; stroke-dashoffset: 0; }
            }
            @keyframes valDrawCircle {
              from { stroke-dashoffset: 44; }
              to { stroke-dashoffset: 0; }
            }
          `}} />

          <div className="flex flex-col items-center justify-center relative select-none">
            <div
              className="w-[360px] h-[360px] flex items-center justify-center relative select-none z-30"
            >
              <div
                className={`w-full h-full flex items-center justify-center transition-all duration-1000 ${
                  !isLoaded ? 'scale-100 translate-y-0 opacity-100' : 'scale-[0.62] -translate-y-[50px] opacity-100'
                }`}
              >
                <svg
                  viewBox="0 0 260 260"
                  className="w-full h-full drop-shadow-[0_8px_24px_rgba(13,31,60,0.06)]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path id="top-text-path" d="M 18,130 A 112,112 0 0,1 242,130" fill="none" />
                    <path id="bottom-text-path" d="M 6,130 A 124,124 0 0,0 254,130" fill="none" />
                  </defs>

                  <g className="select-none pointer-events-none transition-opacity duration-[1500ms] opacity-100">
                    <text
                      className="fill-[#0D1F3C] font-light uppercase"
                      fontSize="14"
                      textAnchor="middle"
                      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", letterSpacing: "0.15em" }}
                    >
                      <textPath href="#top-text-path" startOffset="50%" textAnchor="middle">
                        <tspan className="val-char-v1">V</tspan><tspan className="val-char-v2">a</tspan><tspan className="val-char-v3">l</tspan><tspan className="val-char-v4">o</tspan><tspan className="val-char-v5">r</tspan><tspan className="val-char-v6">i</tspan><tspan className="val-char-v7">a</tspan><tspan className="val-char-v8">n</tspan>
                      </textPath>
                    </text>
                    <text
                      className="fill-[#0D1F3C] font-light uppercase"
                      fontSize="14"
                      textAnchor="middle"
                      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", letterSpacing: "0.15em" }}
                    >
                      <textPath href="#bottom-text-path" startOffset="50.8%" textAnchor="middle">
                        <tspan className="val-char-c1">C</tspan><tspan className="val-char-c2">i</tspan><tspan className="val-char-c3">r</tspan><tspan className="val-char-c4">c</tspan><tspan className="val-char-c5">l</tspan><tspan className="val-char-c6">e</tspan>
                      </textPath>
                    </text>
                  </g>

                  <g transform={`translate(130, 130) scale(${5 + proximityGlow * 0.35}) translate(-20, -20)`}>
                    <g>
                      <g ref={rotateElementRef} className="val-logo-rotate">
                        <g opacity="1">
                          {LOGO_LINES.map((line, i) => {
                            const f = ((i - 40 + 80) % 80) / 80;
                            return (
                              <line
                                key={i}
                                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                                stroke="#0D1F3C"
                                strokeWidth="0.4"
                                strokeLinecap="round"
                                className="val-line"
                                style={{
                                  strokeDasharray: 13,
                                  strokeDashoffset: 13,
                                  animationDelay: `${0.1 + f * 1.25}s`,
                                }}
                              />
                            );
                          })}
                        </g>
                        <circle
                          cx="20" cy="20" r="7"
                          fill="none"
                          strokeWidth="0.6"
                          className="val-circle"
                          transform="rotate(-180, 20, 20)"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          style={{
                            strokeDasharray: 44,
                            strokeDashoffset: 44,
                            animationDelay: "0.1s",
                            stroke: isHovered
                              ? "#D4AF37"
                              : blendColors("#0D1F3C", "#D4AF37", proximityGlow),
                            filter: isHovered
                              ? "drop-shadow(0 0 10px rgba(212, 175, 55, 0.85))"
                              : proximityGlow > 0
                                ? `drop-shadow(0 0 ${proximityGlow * 8}px rgba(212, 175, 55, ${proximityGlow * 0.7}))`
                                : undefined,
                            transition: "stroke 0.4s ease-out, filter 0.4s ease-out"
                          }}
                        />

                        <circle
                          cx="20" cy="20" r="9"
                          fill="transparent"
                          style={{ cursor: isLoaded ? 'pointer' : 'default' }}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            {isLoaded && (
              <div
                className="absolute flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none"
              >
                <div style={{ transform: "translateY(140px)", width: "95vw", maxWidth: "1400px" }}>
                  <p
                    className="text-[#0D1F3C]/85 font-light tracking-[0.04em] text-[32px] md:text-[32px] lg:text-[32px]"
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: "1.4" }}
                  >
                    {SLOGAN_CHARS.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <span
                          style={{
                            fontFamily: item.isItalic ? "'Hanken Grotesk', sans-serif" : undefined,
                            fontStyle: item.isItalic ? "italic" : undefined,
                            color: item.isBlue ? "#003399" : undefined,
                            display: "inline-block",
                            whiteSpace: item.char === " " ? "pre" : "normal",
                            animation: `valSloganFadeInChar 0.8s cubic-bezier(0.16, 1, 0.3, 1) both`,
                            animationDelay: `${0.4 + idx * 0.022}s`
                          }}
                        >
                          {item.char}
                        </span>
                        {item.isNewLineAfter && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            )}
          </div>

          <motion.div
            style={{ opacity: promptOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                letterSpacing: "0.15em",
                color: '#0D1F3C',
                opacity: 0.5,
              }}
            >
              SCROLL TO CONTINUE
            </span>
            <ChevronDown
              size={14}
              color="#0D1F3C"
              style={{
                opacity: 0.4,
                animation: 'scrollBounce 1.6s ease-in-out infinite',
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10">
        <header 
          className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${!isNavVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'} ${scrolled ? 'bg-[#FFFBF3] py-2 border-b border-[#0D1F3C]/10' : 'bg-transparent py-6'}`}
        >
          <div className="flex items-center justify-between px-6 md:px-12">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="z-50 pointer-events-auto">
              <img 
                src={logoImg} 
                alt="Valorian Circle" 
                className={`h-8 md:h-10 w-auto transition-all duration-300 hover:opacity-80 ${isNavOpen ? 'brightness-0 invert' : ''}`} 
              />
            </Link>
            
            <div className="flex items-center gap-10">
              <div className={`hidden md:flex items-center gap-10 transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none translate-y-[-10px]' : 'opacity-100 translate-y-0'}`}>
                {headerLinks.map((link, i) => (
                  <Link
                    key={link.label + i}
                    to={link.link}
                    className={`text-sm font-medium tracking-wide transition-colors ${isNavOpen ? 'text-white/80 hover:text-white' : 'text-[#0D1F3C]/70 hover:text-[#0D1F3C]'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <button 
                onClick={() => setIsNavOpen(!isNavOpen)}
                className={`z-50 pointer-events-auto flex items-center gap-3 transition-colors ${isNavOpen ? 'text-[#FFFBF3] hover:text-[#FFFBF3]/80' : 'text-[#5F5F5F] hover:text-[#5F5F5F]/80'} ${!scrolled ? 'opacity-0 pointer-events-none w-0 h-0 overflow-hidden absolute right-6 md:right-12' : 'opacity-100'}`}
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                {!isNavOpen && <span className="text-lg font-medium tracking-wide">Menu</span>}
                <div className="flex flex-col gap-[5px] w-6">
                  <span className={`h-[2px] w-full bg-current rounded-full transition-transform duration-300 origin-right ${isNavOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
                  <span className={`h-[2px] w-full bg-current rounded-full transition-opacity duration-300 ${isNavOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-[2px] w-full bg-current rounded-full transition-transform duration-300 origin-right ${isNavOpen ? 'rotate-45 translate-y-[2px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Expanding Dropdown Menu */}
          <div 
            className={`absolute top-0 left-0 w-full bg-[#003399] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isNavOpen ? 'max-h-[300px] shadow-2xl border-b border-white/10' : 'max-h-0'}`}
          >
            <div className="pt-6 pb-6 pr-20 md:pr-32 px-6 md:px-12 flex flex-col gap-2 items-end">
              {headerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.link}
                  onClick={() => { setIsNavOpen(false); window.scrollTo(0, 0); }}
                  className="text-xl md:text-2xl font-light text-[#FFFBF3]/80 hover:text-[#FFFBF3] transition-colors"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="min-h-screen bg-[#FFFBF3] overflow-x-hidden w-full" style={{ fontFamily: "\'Hanken Grotesk\', sans-serif" }}>

          <section ref={lowerHeroRef} className="relative overflow-visible flex flex-col items-center justify-center min-h-[110vh] mb-[40vh] md:mb-[60vh] pb-32">
            <div className="absolute top-[118vh] w-full h-[1px] snap-center pointer-events-none" />

            {/* Background circle of stars - Animated from bottom up and small to big */}
            <motion.div
              style={{ y: starY, scale: starScale, opacity: starOpacity, transformOrigin: "top center" }}
              className="absolute top-[80px] md:top-[100px] left-1/2 -translate-x-1/2 w-[160vw] md:w-[100vw] max-w-[1600px] pointer-events-none select-none z-0">

              {/* Actual star image */}
              <div className="relative w-full h-full">
                <img src={circleImg} alt="Valorian Circle Arc" className="w-full h-auto object-contain" />
              </div>
            </motion.div>

            {/* H1 Top Left - Sticky inside absolute wrapper to ignore flex center */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <motion.div
                className="sticky top-[12vh] px-6 md:px-12 max-w-[1200px] pointer-events-auto w-full">
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                    hidden: {}
                  }}
                  className="text-[#393939] font-bold text-[42px] md:text-[72px] leading-[1.1] mb-6 flex flex-wrap"
                >
                  {["Depth", "and", "relevant", "peers", "over", "transactional", "networking."].map((word, i) => (
                    <React.Fragment key={i}>
                      <ScrollExitWord
                        key={i}
                        index={i} total={7} progress={lowerHeroProgress} 
                        outStart={0.48} outEnd={0.63} 
                        variants={{
                          hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                          visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="inline-block mr-[0.2em]"
                      >
                        {word}
                      </ScrollExitWord>
                      {i === 3 && <div className="w-full" />}
                    </React.Fragment>
                  ))}
                </motion.div>
                
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } },
                    hidden: {}
                  }}
                  className="text-lg md:text-2xl text-[#5F5F5F] font-light max-w-[600px] flex flex-wrap"
                >
                  {["A", "curated", "community", "of", "European", "builders", "and", "visionaries."].map((word, i) => (
                    <ScrollExitWord
                      key={i}
                      index={i} total={8} progress={lowerHeroProgress} 
                      outStart={0.53} outEnd={0.68} 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </ScrollExitWord>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* The Vision Text perfectly centered in the visual ring */}
            <motion.div
              style={{ y: visionY }}
              className="absolute top-[calc(130px+80vw)] md:top-[calc(150px+50vw)] xl:top-[950px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] px-6 text-center z-30 pointer-events-auto">
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-200px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                  hidden: {}
                }}
                className="text-[42px] md:text-[72px] text-[#0D1F3C] mb-6 flex flex-wrap justify-center"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                {["A", "Vision", "for", "Europe"].map((word, i) => (
                  <ScrollExitWord
                    key={i}
                    index={i} total={4} progress={lowerHeroProgress} 
                    outStart={0.92} outEnd={1.02} 
                    variants={{
                      hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="inline-block mx-[0.1em]"
                  >
                    {word}
                  </ScrollExitWord>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-200px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.3 } },
                  hidden: {}
                }}
                className="text-lg md:text-2xl text-[#5F5F5F] font-light mb-12 flex flex-wrap justify-center"
              >
                {["Europe", "is", "entering", "a", "defining", "decade", "that", "requires", "courage", "and", "true", "builders.", "We", "bring", "together", "those", "who", "carry", "the", "responsibility", "to", "not", "only", "shape", "their", "companies", "but", "leave", "a", "lasting", "impact", "on", "the", "continent."].map((word, i) => (
                  <ScrollExitWord
                    key={i}
                    index={i} total={34} progress={lowerHeroProgress} 
                    outStart={0.87} outEnd={0.97} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </ScrollExitWord>
                ))}
              </motion.div>

              <ScrollExitWord index={0} total={1} progress={lowerHeroProgress} outStart={0.82} outEnd={0.92}>
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-200px" }}
                  onClick={() => { window.location.href = '#/circles'; window.scrollTo(0,0); }} 
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 999999 }} 
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-[#0D1F3C]/20 rounded-full text-[#0D1F3C] hover:bg-[#0D1F3C]/5 transition-colors whitespace-nowrap">
                  Read our mission <ArrowRight className="w-4 h-4" />
                </motion.button>
              </ScrollExitWord>
            </motion.div>
        </section>

          {/* OUR NETWORK & STATS */}
          <section className="py-32 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto">
              <div className="mb-16 max-w-[600px]">
                <motion.div
                  initial="hidden"
                  animate={showNetwork ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                    hidden: {}
                  }}
                  className="text-[42px] md:text-[72px] text-[#0D1F3C] mb-6 flex flex-wrap"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  {["Our", "Network"].map((word, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate={showNetwork ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.02, delayChildren: 0.4 } },
                    hidden: {}
                  }}
                  className="text-xl md:text-2xl text-[#5F5F5F] font-light leading-relaxed flex flex-wrap"
                >
                  {"The caliber of our network speaks for itself. A confidential space for individuals who already wield significant influence.".split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                initial="hidden"
                animate={showNetwork ? "visible" : "hidden"}
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
                  hidden: {}
                }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
              >
                {[
                  { value: '€2B+', label: 'Capital Raised' },
                  { value: '€5B+', label: 'Accumulated Exit Value' },
                  { value: '€15B+', label: 'Assets Under Management' },
                  { value: '€500M+', label: 'Combined ARR' },
                ].map(({ value, label }) => (
                  <motion.div 
                    key={label}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    <div className="text-4xl text-[#0D1F3C] mb-2" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>{value}</div>
                    <div className="text-sm text-[#5F5F5F] uppercase tracking-widest font-medium">{label}</div>
                  </motion.div>
                ))}
              </motion.div>

            </div>

            {/* Members Grid embedded inside Our Network */}
            <div className="mt-12 w-full max-w-[1400px] mx-auto px-6">
              


              {/* Members Grid */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-4 lg:gap-8">
                {[
                  { name: 'Dr. Michael Krause', title: 'GLOBAL HEAD OF AI, BCG', image: mem1 },
                  { name: 'Carolin Wais', title: 'PARTNER, PLUG & PLAY VC', image: mem2 },
                  { name: 'Lea Frank', title: 'FOUNDER, ANYBILL', image: mem3 },
                  { name: 'Seena Amidi', title: 'MD, PLUG AND PLAY', image: mem4 },
                  { name: 'Dr. Jonas Kahlert', title: 'SENIOR PM, GOOGLE', image: mem5 }
                ].map((member, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.15} className="flex-1 w-full">
                    <div className="bg-[#f2f2f2] aspect-square overflow-hidden mb-4 rounded-sm relative group cursor-pointer">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[#0D1F3C] font-medium text-lg leading-tight" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                        {member.name}
                      </h3>
                      <p className="text-[#888888] text-[10px] tracking-wider uppercase font-medium">
                        {member.title}
                      </p>
                      <a href="#" className="inline-flex items-center gap-1.5 text-[#0077b5] hover:text-[#005e93] transition-colors mt-1 w-fit">
                        <Linkedin className="w-3.5 h-3.5" />
                        <span className="text-[10px] uppercase tracking-wider font-semibold">LinkedIn</span>
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* View All Members Link */}
              <div className="mt-12 flex justify-end">
                <ScrollReveal>
                  <Link 
                    to="/members" 
                    className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-[#0D1F3C]/20 rounded-full text-[#0D1F3C] hover:bg-[#0D1F3C]/5 transition-colors whitespace-nowrap"
                  >
                    View selected members <ArrowRight className="w-4 h-4" />
                  </Link>
                </ScrollReveal>
              </div>

            </div>
          </section>

          {/* Motivational CTA Section */}
          <section className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto flex flex-col items-start w-full">
                <motion.h2 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, margin: "-100px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.04 } },
                    hidden: {}
                  }}
                  className="text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] mb-12 text-[#0D1F3C] flex flex-wrap w-full" 
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  {["A", "curated", "community", "thrives", "on", "the", "excellence", "of", "its", "individuals.", "We", "connect", "those", "who", "shape", "the", "future."].map((word, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block mr-[0.2em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h2>
                
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-lg md:text-xl mb-12 text-[#5F5F5F]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Discover if you meet the criteria to join our network.
                </motion.p>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  <Link 
                    to="/selection"
                    onClick={() => window.scrollTo(0, 0)}
                    className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-[#0D1F3C]/20 rounded-full text-[#0D1F3C] hover:bg-[#0D1F3C]/5 transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                  >
                    Review Selection Criteria <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
            </div>
          </section>

        </div>

        <Footer />
        <CookieBanner />
      </div>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
