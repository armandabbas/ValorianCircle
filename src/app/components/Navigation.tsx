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
        scrolled ? 'bg-[#FFFBF3]/90 backdrop-blur-md border-b border-[#0D1F3C]/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center group">
          <img src={logoImg} alt="Valorian Logo" className="h-8 md:h-10 w-auto object-contain transition-opacity hover:opacity-85" />
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
          className="md:hidden text-[#0D1F3C] transition-opacity hover:opacity-70"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#0D1F3C]/10 shadow-lg">
          <div className="px-6 py-8 flex flex-col gap-6">
            <Link
              to="/circles"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-wide text-[#0D1F3C]/80"
            >
              Mission
            </Link>
            <Link
              to="/members"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-wide text-[#0D1F3C]/80"
            >
              Members
            </Link>
            <Link
              to="/selection"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-wide text-[#0D1F3C]/80"
            >
              Selection
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}