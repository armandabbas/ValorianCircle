import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SubmittedPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#F9F8F5'
      }}
    >
      <div className="bg-white rounded-lg max-w-[500px] w-full p-8 md:p-12 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#0D1F3C' }}>
            <Check className="w-8 h-8" style={{ color: 'white' }} />
          </div>
          <h2 className="text-[2rem] md:text-[2.25rem] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
            Application <span style={{ fontStyle: 'italic' }}>Submitted</span>
          </h2>
          <p className="text-[1.0625rem] leading-[1.8] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
            Thank you for your application. You are now on our waitlist and will be contacted if your application was successful once the community launches.
          </p>
          <p className="text-[1rem] leading-[1.7] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
            Launch Date: July 1, 2026
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3.5 transition-all duration-200 hover:opacity-90 text-[0.9375rem] tracking-[0.01em]"
            style={{
              backgroundColor: '#0D1F3C',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              textDecoration: 'none',
              borderRadius: '6px'
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
