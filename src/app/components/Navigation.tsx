import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

interface NavigationProps {
  onApplyClick?: () => void;
}

export function Navigation({ onApplyClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      sessionStorage.setItem('skipIntro', 'true');
      const spacer = document.getElementById('intro-spacer');
      if (spacer) spacer.style.height = '0px';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    sessionStorage.setItem('skipIntro', 'true');
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen ? 'bg-transparent py-6' : (scrolled ? 'bg-[#FFFBF3]/90 backdrop-blur-md border-b border-[#0D1F3C]/5 py-4' : 'bg-transparent py-6')
      }`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center group relative z-[60]">
          <img src={logoImg} alt="Valorian Logo" className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 hover:opacity-85 ${isOpen ? 'brightness-0 invert' : ''}`} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/circles"
            className="text-sm font-medium tracking-wide text-[#0D1F3C]/70 hover:text-[#0D1F3C] transition-colors"
          >
            Mission
          </Link>
          <Link
            to="/members"
            className="text-sm font-medium tracking-wide text-[#0D1F3C]/70 hover:text-[#0D1F3C] transition-colors"
          >
            Members
          </Link>
          <Link
            to="/selection"
            className="text-sm font-medium tracking-wide text-[#0D1F3C]/70 hover:text-[#0D1F3C] transition-colors"
          >
            Selection
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 pointer-events-auto flex items-center gap-3 transition-colors ${isOpen ? 'text-[#FFFBF3] hover:text-[#FFFBF3]/80' : 'text-[#0D1F3C] hover:text-[#0D1F3C]/80'}`}
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          {!isOpen && <span className="text-lg font-medium tracking-wide">Menu</span>}
          <div className="flex flex-col gap-[5px] w-6">
            <span className={`h-[2px] w-full bg-current rounded-full transition-transform duration-300 origin-right ${isOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            <span className={`h-[2px] w-full bg-current rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-full bg-current rounded-full transition-transform duration-300 origin-right ${isOpen ? 'rotate-45 translate-y-[2px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Expanding Dropdown Menu (Matches Landing Page) */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-[#003399] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] -z-10 ${isOpen ? 'max-h-[300px] shadow-2xl border-b border-white/10' : 'max-h-0'}`}
      >
        <div className="pt-24 pb-6 px-6 flex flex-col gap-3 items-end">
          <Link
            to="/circles"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-light text-[#FFFBF3]/80 hover:text-[#FFFBF3] transition-colors"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Mission
          </Link>
          <Link
            to="/members"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-light text-[#FFFBF3]/80 hover:text-[#FFFBF3] transition-colors"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Members
          </Link>
          <Link
            to="/selection"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-light text-[#FFFBF3]/80 hover:text-[#FFFBF3] transition-colors"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Selection
          </Link>
        </div>
      </div>
    </nav>
  );
}