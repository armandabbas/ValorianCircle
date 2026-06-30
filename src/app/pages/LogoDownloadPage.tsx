import { Download } from 'lucide-react';
import { LogoIcon, LogoWithWordmark } from '../components/Logo';
import { useRef, useEffect, useState } from 'react';

export function LogoDownloadPage() {
  const logoRef = useRef<SVGSVGElement>(null);
  const wordmarkRef = useRef<SVGSVGElement>(null);
  const [logoSvgString, setLogoSvgString] = useState<string>('');
  const [wordmarkSvgString, setWordmarkSvgString] = useState<string>('');

  useEffect(() => {
    // Capture the SVG as a string once it's rendered
    if (logoRef.current) {
      const svgElement = logoRef.current;
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      setLogoSvgString(svgString);
    }
    if (wordmarkRef.current) {
      const svgElement = wordmarkRef.current;
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      setWordmarkSvgString(svgString);
    }
  }, []);

  const downloadSVG = () => {
    if (!logoSvgString) return;
    
    const blob = new Blob([logoSvgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'valorian-circle-logo.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPNG = (size: number) => {
    if (!logoSvgString) return;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const img = new Image();
      const svgBlob = new Blob([logoSvgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob((blob) => {
          if (blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = `valorian-circle-logo-${size}px.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
          }
        }, 'image/png');
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    }
  };

  const downloadSocialPNG = () => {
    if (!logoSvgString) return;

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const img = new Image();
      const svgBlob = new Blob([logoSvgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        // Center the logo (400x400) in the social media image
        const logoSize = 400;
        const x = (1200 - logoSize) / 2;
        const y = (630 - logoSize) / 2;
        ctx.drawImage(img, x, y, logoSize, logoSize);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'valorian-circle-social-1200x630.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
          }
        }, 'image/png');
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    }
  };

  const downloadJPG = (size: number) => {
    if (!logoSvgString) return;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const img = new Image();
      const svgBlob = new Blob([logoSvgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        // Fill background with brand color
        ctx.fillStyle = '#F7F5F2';
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob((blob) => {
          if (blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = `valorian-circle-logo-${size}px.jpg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
          }
        }, 'image/jpeg', 0.95);
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    }
  };

  // Wordmark download functions
  const downloadWordmarkSVG = () => {
    if (!wordmarkSvgString) return;
    
    const blob = new Blob([wordmarkSvgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'valorian-circle-wordmark.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadWordmarkPNG = (width: number, height: number) => {
    if (!wordmarkSvgString) return;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const img = new Image();
      const svgBlob = new Blob([wordmarkSvgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          if (blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = `valorian-circle-wordmark-${width}x${height}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
          }
        }, 'image/png');
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    }
  };

  const downloadWordmarkSocialPNG = () => {
    if (!wordmarkSvgString) return;

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const img = new Image();
      const svgBlob = new Blob([wordmarkSvgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        // Center the wordmark in the social media image
        const wordmarkWidth = 900;
        const wordmarkHeight = 180;
        const x = (1200 - wordmarkWidth) / 2;
        const y = (630 - wordmarkHeight) / 2;
        ctx.drawImage(img, x, y, wordmarkWidth, wordmarkHeight);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'valorian-circle-wordmark-social-1200x630.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
          }
        }, 'image/png');
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    }
  };

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden" style={{ backgroundColor: '#F9F8F5' }}>
      {/* Decorative circle */}
      <div className="absolute top-40 right-[400px] opacity-[0.08] pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#0D1F3C" strokeWidth="1.0" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-32 relative z-10">
        <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.2] tracking-[-0.015em] mb-8 font-bold" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0D1F3C' }}>
          Logo <span style={{ fontStyle: 'italic' }}>Downloads</span>
        </h1>

        <p className="leading-[1.65] text-[1rem] mb-16 max-w-[800px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
          Download the Valorian logo in various formats and sizes for your needs.
        </p>

        {/* Logo Preview */}
        <div className="mb-16 p-12 max-w-[600px]" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
          <div className="flex justify-center mb-6">
            <LogoIcon ref={logoRef} className="w-48 h-48" />
          </div>
          <p className="text-center text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
            <span style={{ fontStyle: 'italic' }}>Nur Icon</span>
          </p>
        </div>

        {/* Wordmark Preview */}
        <div className="mb-16 p-12" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
          <div className="flex justify-center mb-6">
            <LogoWithWordmark ref={wordmarkRef} className="h-16" />
          </div>
          <p className="text-center text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
            <span style={{ fontStyle: 'italic' }}>Icon + Schriftzug</span>
          </p>
        </div>

        {/* Download Options */}
        <div className="space-y-12">
          {/* SVG Format */}
          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <h2 className="text-[1.375rem] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
              SVG <span style={{ fontStyle: 'italic' }}>Format</span>
            </h2>
            <p className="leading-[1.65] text-[0.9375rem] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Vektorformat, skalierbar auf jede Größe ohne Qualitätsverlust. Perfekt für Print und Web.
            </p>
            <button
              onClick={downloadSVG}
              className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
            >
              <Download className="w-4 h-4" />
              Icon SVG Download
            </button>
          </div>

          {/* PNG Format */}
          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <h2 className="text-[1.375rem] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
              PNG <span style={{ fontStyle: 'italic' }}>Format</span> - Icon
            </h2>
            <p className="leading-[1.65] text-[0.9375rem] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Rasterformat mit Transparenz. Verfügbar in mehreren Größen.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => downloadPNG(48)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                48×48 px <span style={{ fontStyle: 'italic' }}>(Favicon)</span>
              </button>
              <button
                onClick={() => downloadPNG(512)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                512×512 px
              </button>
              <button
                onClick={() => downloadPNG(1024)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                1024×1024 px
              </button>
              <button
                onClick={() => downloadPNG(2048)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                2048×2048 px
              </button>
              <button
                onClick={downloadSocialPNG}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                Social Media 1200×630 px
              </button>
            </div>
          </div>

          {/* JPG Format */}
          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <h2 className="text-[1.375rem] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
              JPG <span style={{ fontStyle: 'italic' }}>Format</span> - Icon
            </h2>
            <p className="leading-[1.65] text-[0.9375rem] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Komprimiertes Rasterformat, kleinere Dateigröße. Ideal für Web ohne Transparenz.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => downloadJPG(512)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                512×512 px
              </button>
              <button
                onClick={() => downloadJPG(1024)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                1024×1024 px
              </button>
              <button
                onClick={() => downloadJPG(2048)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                2048×2048 px
              </button>
            </div>
          </div>

          {/* Wordmark SVG Format */}
          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <h2 className="text-[1.375rem] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
              Icon + <span style={{ fontStyle: 'italic' }}>Schriftzug</span> - SVG Format
            </h2>
            <p className="leading-[1.65] text-[0.9375rem] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Logo mit vollständigem Schriftzug als skalierbare Vektorgrafik.
            </p>
            <button
              onClick={downloadWordmarkSVG}
              className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
            >
              <Download className="w-4 h-4" />
              Icon + Schriftzug SVG
            </button>
          </div>

          {/* Wordmark PNG Format */}
          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <h2 className="text-[1.375rem] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
              Icon + <span style={{ fontStyle: 'italic' }}>Schriftzug</span> - PNG Format
            </h2>
            <p className="leading-[1.65] text-[0.9375rem] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Logo mit vollständigem Schriftzug in verschiedenen Größen.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => downloadWordmarkPNG(1000, 200)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                1000×200 px
              </button>
              <button
                onClick={() => downloadWordmarkPNG(2000, 400)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                2000×400 px
              </button>
              <button
                onClick={() => downloadWordmarkPNG(3000, 600)}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                3000×600 px
              </button>
              <button
                onClick={downloadWordmarkSocialPNG}
                className="inline-flex items-center gap-3 px-6 py-2.5 transition-opacity hover:opacity-90 text-[0.9375rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, backgroundColor: '#0D1F3C', color: '#FFFFFF', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Download className="w-4 h-4" />
                Social Media 1200×630 px
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}