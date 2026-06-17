export function CuratedIntroductions() {
  return (
    <section id="curated-introductions" className="w-full relative overflow-hidden" style={{ backgroundColor: '#F9F8F5' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28 relative z-10">
        <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-10" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#0D1F3C' }}>
          Curated Introductions
        </h2>

        <div className="max-w-[700px]">
          <p className="text-[1.0625rem] md:text-[1.125rem] leading-[1.65] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#0D1F3C' }}>
            Highly <span className="italic" style={{ color: '#0D1F3C' }}>relevant</span> connections, designed to save your time and foster meaningful relationships.
          </p>

          <p className="text-[1rem] leading-[1.65] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
            Our members are accomplished founders, investors, and executives.
            Rather than spending time on networking or outreach, we curate the most relevant introductions for you.
          </p>

          <p className="text-[1rem] leading-[1.65] mb-12" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
            Each introduction is <span className="italic">manually selected</span> by our team, based on shared context, current priorities, and mutual relevance.
          </p>

          <div className="mb-12">
            <p className="text-[0.75rem] leading-[1.6] tracking-[0.12em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
              How It Works
            </p>
            <ul className="space-y-4">
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                <span>At least one curated introduction per month</span>
              </li>
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                <span>Manual selection by the Valorian team</span>
              </li>
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                <span>Mutual opt-in on both sides</span>
              </li>
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                <span>Clear framing and context provided with every introduction</span>
              </li>
            </ul>
          </div>

          <p className="text-[1rem] leading-[1.65] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#0D1F3C' }}>
            No cold outreach. No pitching. <span className="italic" style={{ color: '#0D1F3C' }}>No obligation.</span>
          </p>

          <p className="text-[1rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
            Curated Introductions exist to create meaningful conversations, not transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
