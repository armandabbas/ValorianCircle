import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TwoProductTracks() {
  return (
    <section className="w-full" style={{ backgroundColor: '#F9F8F5' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-24">
        <div className="flex justify-center">
          {/* Card 1 - Circles */}
          <div
            className="p-8 md:p-10 transition-all hover:shadow-lg max-w-[600px] w-full"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px'
            }}
          >
            <div
              className="inline-block px-3 py-1 mb-6 text-[0.6875rem] tracking-[0.1em] uppercase"
              style={{
                backgroundColor: '#0D1F3C',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                borderRadius: '4px',
                letterSpacing: '0.1em'
              }}
            >
              MEMBERSHIP
            </div>
            <h3
              className="text-[2rem] mb-4 tracking-[-0.01em]"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 500,
                color: '#0D1F3C'
              }}
            >
              Circles
            </h3>
            <p
              className="text-[1.0625rem] leading-[1.7] mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#1A1A1A'
              }}
            >
              Curated peer advisory groups of 6 to 10 members with shared background, goals, or geography. Virtual and in-person formats. Six sessions per year, facilitated by our team.
            </p>
            <Link
              to="/circles"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-70 text-[0.9375rem]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#0D1F3C',
                textDecoration: 'none'
              }}
            >
              Explore Circles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
