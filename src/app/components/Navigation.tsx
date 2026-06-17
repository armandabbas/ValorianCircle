import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onApplyClick?: () => void;
}

export function Navigation({ onApplyClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50" style={{ borderBottom: '1px solid #E8E5E0' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Sunburst Icon - organic, non-uniform rays */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-125">
            <g opacity="1">
              {/* Create sunburst rays with varying lengths and slight angle variations */}
              {Array.from({ length: 52 }).map((_, i) => {
                // Add slight randomness to angle (seeded by index for consistency)
                const baseAngle = (i * 360) / 52;
                const angleVariation = ((i * 17) % 7) - 3; // Pseudo-random variation -3 to +3 degrees
                const angle = baseAngle + angleVariation;
                const rad = (angle * Math.PI) / 180;

                const innerRadius = 7.5 + ((i * 13) % 10) * 0.1; // Slight inner variation
                // More variation in outer radius for organic look
                const lengthVariation = ((i * 23) % 30) * 0.15; // 0 to 4.5 variation
                const outerRadius = 13 + lengthVariation;

                const x1 = 16 + Math.cos(rad) * innerRadius;
                const y1 = 16 + Math.sin(rad) * innerRadius;
                const x2 = 16 + Math.cos(rad) * outerRadius;
                const y2 = 16 + Math.sin(rad) * outerRadius;

                // Vary stroke width slightly
                const strokeWidth = 0.7 + ((i * 7) % 3) * 0.1;

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#0D1F3C"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                  />
                );
              })}
              {/* Center circle with slight thickness variation */}
              <circle cx="16" cy="16" r="6.8" fill="transparent" stroke="#0D1F3C" strokeWidth="0.9" className="transition-colors duration-300 group-hover:fill-[#FACC15]" />
            </g>
          </svg>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1.25rem', color: '#0D1F3C', letterSpacing: '-0.02em' }}>
            VALORIAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-[0.9375rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#2B2B2B' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[0.9375rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#2B2B2B' }}
          >
            About
          </Link>
          <Link
            to="/circles"
            className="text-[0.9375rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#2B2B2B' }}
          >
            Circles
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              onApplyClick?.();
            }}
            className="text-[0.9375rem] px-6 py-2 transition-opacity hover:opacity-90"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: '#FFFFFF',
              backgroundColor: '#0D1F3C',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Request Invitation
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 transition-opacity hover:opacity-70"
          style={{ color: '#0D1F3C' }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white" style={{ borderTop: '1px solid #E8E5E0' }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-[0.9375rem] tracking-[0.01em] py-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#2B2B2B' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-[0.9375rem] tracking-[0.01em] py-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#2B2B2B' }}
            >
              About
            </Link>
            <Link
              to="/circles"
              onClick={() => setIsOpen(false)}
              className="text-[0.9375rem] tracking-[0.01em] py-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#2B2B2B' }}
            >
              Circles
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                onApplyClick?.();
              }}
              className="text-[0.9375rem] px-6 py-2 text-left"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#0D1F3C',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Request Invitation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}