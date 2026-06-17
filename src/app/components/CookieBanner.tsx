import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you would initialize analytics/tracking
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
      style={{
        backgroundColor: '#F9F8F5',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#1A1A1A',
                letterSpacing: '0.005em'
              }}
            >
              We use cookies to enhance your experience on our website and to understand how our website is used.
              By continuing to use this website, you consent to the use of cookies.{' '}
              <Link
                to="/privacy"
                className="underline hover:no-underline transition-all"
                style={{ color: '#0D1F3C', fontWeight: 500 }}
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 text-sm transition-all hover:opacity-70"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#1A1A1A',
                letterSpacing: '0.01em',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: 'transparent',
                borderRadius: '6px'
              }}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 text-sm transition-all hover:opacity-90"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                backgroundColor: '#0D1F3C',
                color: 'white',
                letterSpacing: '0.01em',
                border: 'none',
                borderRadius: '6px'
              }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}