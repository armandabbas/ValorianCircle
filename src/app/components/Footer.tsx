import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden" style={{ backgroundColor: '#0D1F3C' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-12 relative z-10">
        {/* Tagline */}
        <div className="text-center mb-8">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 500, color: '#FFFFFF', letterSpacing: '0.01em' }}>
            Valorian — A Vision for Europe.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            to="/"
            className="text-[0.875rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#FFFFFF' }}
          >
            Home
          </Link>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
          <Link
            to="/about"
            className="text-[0.875rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#FFFFFF' }}
          >
            About
          </Link>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
          <Link
            to="/circles"
            className="text-[0.875rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#FFFFFF' }}
          >
            Circles
          </Link>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
          <Link
            to="/privacy"
            className="text-[0.875rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#FFFFFF' }}
          >
            Privacy
          </Link>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
          <Link
            to="/imprint"
            className="text-[0.875rem] tracking-[0.01em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#FFFFFF' }}
          >
            Imprint
          </Link>
        </div>
      </div>
    </footer>
  );
}