import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ApplicationForm } from '@/app/components/ApplicationForm';
import { CookieBanner } from '@/app/components/CookieBanner';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function RootLayout() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Set favicon and meta tags
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = '/favicon.svg';
    document.head.appendChild(link);

    // Set page title
    document.title = 'Valorian';

    // Set meta tags for social media sharing
    const metaTags = [
      { property: 'og:title', content: 'Valorian' },
      { property: 'og:site_name', content: 'Valorian' },
      { property: 'og:description', content: 'An invitation-only space where Europe\'s financially independent entrepreneurs, investors, executives, and public leaders connect for meaningful dialogue, trusted counsel, and lasting relationships.' },
      { property: 'og:image', content: `${window.location.origin}/og-image.svg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Valorian' },
      { name: 'twitter:description', content: 'An invitation-only space where Europe\'s financially independent entrepreneurs, investors, executives, and public leaders connect for meaningful dialogue, trusted counsel, and lasting relationships.' },
      { name: 'twitter:image', content: `${window.location.origin}/og-image.svg` },
      { name: 'description', content: 'An invitation-only space where Europe\'s financially independent entrepreneurs, investors, executives, and public leaders connect for meaningful dialogue, trusted counsel, and lasting relationships.' }
    ];

    metaTags.forEach(({ property, name, content }) => {
      let meta = property 
        ? document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
        : document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', property);
        if (name) meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navigation onApplyClick={() => setIsFormOpen(true)} />
        <div className="flex-1">
          <Outlet context={{ onApplyClick: () => setIsFormOpen(true) }} />
        </div>
        <Footer />
        <CookieBanner />
        <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </>
  );
}