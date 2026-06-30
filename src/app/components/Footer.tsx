import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { useState, useEffect } from 'react';

export function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dayString = time.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const timeString = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
    <footer className="w-full relative overflow-hidden bg-[#003399] text-[#FFFBF3]/80 pt-12 pb-4 px-6 md:px-12 border-t border-white/5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row justify-between items-stretch gap-12 md:gap-8 min-h-[240px]">
        
        {/* Left: Logo */}
        <div className="w-full md:w-1/3 flex items-start">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoImg} alt="Valorian" className="h-8 md:h-10 object-contain transition-opacity hover:opacity-80" style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>
        </div>

        {/* Center: Info & Links */}
        <div className="w-full md:w-1/3 flex flex-col justify-between gap-12 h-full">
          <div className="text-xs tracking-wider leading-relaxed font-light">
            <p>Based in Europe</p>
            <p>By Invitation Only</p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-xs tracking-wider font-light">
            <div className="flex flex-col gap-4">
              <Link to="/mission" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFFBF3] transition-colors w-fit">Mission</Link>
              <Link to="/members" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFFBF3] transition-colors w-fit">Members</Link>
              <Link to="/selection" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFFBF3] transition-colors w-fit">Selection</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFFBF3] transition-colors w-fit">Privacy Policy</Link>
              <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFFBF3] transition-colors w-fit">Terms of Service</Link>
              <Link to="/imprint" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFFBF3] transition-colors w-fit">Imprint</Link>
              <Link to="/faq" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFFBF3] transition-colors w-fit">FAQ</Link>
            </div>
          </div>
        </div>

        {/* Right: Time & Copyright */}
        <div className="w-full md:w-1/3 flex flex-col justify-between items-start md:items-end gap-12 h-full">
          <div className="text-left md:text-right text-xs tracking-wider leading-relaxed font-light">
            <p className="uppercase">{dayString}</p>
            <p>{timeString}</p>
          </div>
          
          <div className="mt-auto text-left md:text-right text-[10px] md:text-xs tracking-wider font-light pt-12 md:pt-0">
            <p>&copy; {new Date().getFullYear()} Valorian. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}