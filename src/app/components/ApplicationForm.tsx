import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  useEffect(() => {
    if (isOpen) {
      // Load Tally embed script
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        const scripts = document.querySelectorAll('script[src="https://tally.so/widgets/embed.js"]');
        scripts.forEach(s => s.remove());
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      style={{
        backgroundColor: '#F7F5F2'
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 z-50 transition-opacity hover:opacity-70 bg-white rounded-full shadow-lg"
        style={{ color: '#2B2B2B' }}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Tally iframe */}
      <iframe
        data-tally-src="https://tally.so/r/44oDJk?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Valorian Application"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0
        }}
      />
    </div>
  );
}
