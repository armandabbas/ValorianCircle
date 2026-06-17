import { useOutletContext } from 'react-router-dom';

interface OutletContext {
  onApplyClick: () => void;
}

export function MissionPage() {
  const { onApplyClick } = useOutletContext<OutletContext>();

  return (
    <div className="w-full" style={{ fontFamily: 'Fraunces, serif' }}>
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#38574A' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-32 md:py-40 relative z-10">
          <div className="max-w-[900px] mx-auto text-center">
            <div 
              className="text-[0.75rem] uppercase tracking-[0.12em] mb-6"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#F7F5F2', opacity: 0.8 }}
            >
              Mission
            </div>
            <h1 
              className="text-[2.5rem] md:text-[3.5rem] leading-[1.15] tracking-[-0.015em] mb-6"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#F7F5F2' }}
            >
              Europe's Competitiveness Is a Leadership Question
            </h1>
            <p 
              className="text-[1.0625rem] md:text-[1.125rem] leading-[1.7] max-w-[800px] mx-auto"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#F7F5F2', opacity: 0.9 }}
            >
              Europe combines industrial depth, exceptional talent and long-term capital. Whether these strengths translate into sustained competitiveness depends on the quality of leadership — and the ability to think beyond borders and short-term incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Context */}
      <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 
                className="text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.015em]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}
              >
                The Context
              </h2>
            </div>
            <div className="md:col-span-8">
              <p 
                className="text-[1.0625rem] leading-[1.75]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}
              >
                Europe does not lack talent, capital or institutions. Yet fragmentation and short-term pressures often dilute strategic alignment. Competitiveness is shaped not only by policy or scale, but by the decisions of founders, investors and executives operating at leadership level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Contribution */}
      <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#F7F5F2' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28">
          <h2 
            className="text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.015em] mb-8"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}
          >
            Our Contribution
          </h2>
          
          <p 
            className="text-[1.0625rem] leading-[1.75] mb-12 max-w-[750px]"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}
          >
            Valorian brings together a curated group of European leaders who carry significant entrepreneurial and capital responsibility.
          </p>

          <div className="space-y-4 max-w-[900px]">
            <div 
              className="border-l-2 pl-6 py-4"
              style={{ borderColor: '#38574A' }}
            >
              <h3 
                className="text-[1.125rem] mb-2 tracking-[-0.01em]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#2B2B2B' }}
              >
                Peer-Level Strategic Exchange
              </h3>
              <p 
                className="text-[0.9375rem] leading-[1.7]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}
              >
                Confidential dialogue among individuals who understand complex trade-offs and long-term decision-making under uncertainty.
              </p>
            </div>

            <div 
              className="border-l-2 pl-6 py-4"
              style={{ borderColor: '#38574A' }}
            >
              <h3 
                className="text-[1.125rem] mb-2 tracking-[-0.01em]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#2B2B2B' }}
              >
                Cross-Border Perspective
              </h3>
              <p 
                className="text-[0.9375rem] leading-[1.7]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}
              >
                A community structured to transcend national silos and foster European-level thinking in capital allocation and business development.
              </p>
            </div>

            <div 
              className="border-l-2 pl-6 py-4"
              style={{ borderColor: '#38574A' }}
            >
              <h3 
                className="text-[1.125rem] mb-2 tracking-[-0.01em]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#2B2B2B' }}
              >
                Long-Term Capital Thinking
              </h3>
              <p 
                className="text-[0.9375rem] leading-[1.7]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}
              >
                Strategic orientation toward sustained value creation, rather than optimizing for quarterly incentives or short-cycle narratives.
              </p>
            </div>

            <div 
              className="border-l-2 pl-6 py-4"
              style={{ borderColor: '#38574A' }}
            >
              <h3 
                className="text-[1.125rem] mb-2 tracking-[-0.01em]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#2B2B2B' }}
              >
                Responsible Leadership Dialogue
              </h3>
              <p 
                className="text-[0.9375rem] leading-[1.7]"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}
              >
                Reflective conversation on the broader implications of leadership decisions, beyond purely transactional or competitive metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#38574A' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-[750px] mx-auto text-center">
            <p 
              className="text-[1.0625rem] md:text-[1.125rem] leading-[1.75] mb-8"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#F7F5F2', opacity: 0.95 }}
            >
              Europe's competitive position will be shaped by the quality of its leadership. Valorian contributes by strengthening trusted exchange among those shaping its economic future.
            </p>
            
            <button
              onClick={onApplyClick}
              className="inline-block px-8 py-3.5 transition-all hover:opacity-80"
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 500,
                fontSize: '0.9375rem',
                letterSpacing: '0.01em',
                color: '#38574A',
                backgroundColor: '#F7F5F2',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Request Invitation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}