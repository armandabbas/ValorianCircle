import { useOutletContext } from 'react-router-dom';

interface OutletContext {
  onApplyClick: () => void;
}

export function MissionPage() {
  const { onApplyClick } = useOutletContext<OutletContext>();

  return (
    <div className="w-full bg-[#FFFBF3] min-h-screen pt-24" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-transparent">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 relative z-10">
          <div className="max-w-[900px] mx-auto text-center">
            <div 
              className="text-[0.75rem] uppercase tracking-[0.12em] mb-6"
              style={{ fontWeight: 500, color: '#0D1F3C', opacity: 0.8 }}
            >
              Mission
            </div>
            <h1 
              className="text-[2.5rem] md:text-[3.5rem] leading-[1.15] tracking-[-0.015em] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: '#0D1F3C' }}
            >
              Europe's Competitiveness Is a Leadership Question
            </h1>
            <p 
              className="text-[1.0625rem] md:text-[1.125rem] leading-[1.7] max-w-[800px] mx-auto"
              style={{ fontWeight: 300, color: '#0D1F3C', opacity: 0.9 }}
            >
              Europe combines industrial depth, exceptional talent and long-term capital. Whether these strengths translate into sustained competitiveness depends on the quality of leadership — and the ability to think beyond borders and short-term incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Context */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 
                className="text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.015em]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: '#0D1F3C' }}
              >
                The Context
              </h2>
            </div>
            <div className="md:col-span-8">
              <p 
                className="text-[1.0625rem] leading-[1.75]"
                style={{ fontWeight: 300, color: '#0D1F3C', opacity: 0.8 }}
              >
                Europe does not lack talent, capital or institutions. Yet fragmentation and short-term pressures often dilute strategic alignment. Competitiveness is shaped not only by policy or scale, but by the decisions of founders, investors and executives operating at leadership level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Contribution */}
      <section className="w-full relative overflow-hidden bg-transparent">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20">
          <h2 
            className="text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.015em] mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: '#0D1F3C' }}
          >
            Our Contribution
          </h2>
          
          <p 
            className="text-[1.0625rem] leading-[1.75] mb-12 max-w-[750px]"
            style={{ fontWeight: 300, color: '#0D1F3C', opacity: 0.8 }}
          >
            Valorian brings together a curated group of European leaders who carry significant entrepreneurial and capital responsibility.
          </p>

          <div className="space-y-4 max-w-[900px]">
            <div className="border-l-2 pl-6 py-4 border-[#D4AF37]/40">
              <h3 className="text-[1.125rem] mb-2 tracking-[-0.01em] text-[#0D1F3C] font-medium">
                Peer-Level Strategic Exchange
              </h3>
              <p className="text-[0.9375rem] leading-[1.7] text-[#0D1F3C]/70 font-light">
                Confidential dialogue among individuals who understand complex trade-offs and long-term decision-making under uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
