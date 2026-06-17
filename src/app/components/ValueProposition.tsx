import { Award, UserCheck, ShieldCheck } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#F9F8F5' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28 relative z-10">
        <div className="mb-16">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-10" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#0D1F3C' }}>
            A <span className="italic" style={{ color: '#0D1F3C' }}>Trusted</span> Environment
          </h2>

          <ul className="space-y-5 max-w-[850px]">
            <li className="leading-[1.65] text-[1rem] flex items-start gap-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              <Award className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#0D1F3C' }} />
              <span>
                <span className="text-[0.75rem] uppercase tracking-[0.12em] block mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>Selection</span>
                Membership is reserved for individuals who meet the{' '}
                <button
                  onClick={() => {
                    document.querySelector('#eligibility')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="underline hover:opacity-70 transition-opacity cursor-pointer"
                  style={{ color: '#0D1F3C', background: 'none', border: 'none', padding: 0, fontFamily: 'inherit', fontWeight: 500 }}
                >
                  eligibility criteria
                </button>{' '}
                below.
              </span>
            </li>
            <li className="leading-[1.65] text-[1rem] flex items-start gap-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              <UserCheck className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#0D1F3C' }} />
              <span>
                <span className="text-[0.75rem] uppercase tracking-[0.12em] block mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>Invitation Only</span>
                From public launch (July 1, 2026), membership requires referral from an existing member.
              </span>
            </li>
            <li className="leading-[1.65] text-[1rem] flex items-start gap-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              <ShieldCheck className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#0D1F3C' }} />
              <span>
                <span className="text-[0.75rem] uppercase tracking-[0.12em] block mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>No Solicitation</span>
                Strict policy ensures conversations remain candid and free from commercial distraction.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#0D1F3C' }}>
            Tailored <span className="italic">Formats</span> Curated by our Expert Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-8 transition-all hover:translate-y-[-2px] duration-200"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[1.375rem] tracking-[-0.01em]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
                Curated Introductions
              </h3>
              <div
                className="px-3 py-1 text-[0.6875rem] tracking-[0.08em] uppercase"
                style={{ backgroundColor: '#F9F8F5', color: '#355E3B', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Included
              </div>
            </div>

            <ul className="space-y-4">
              <li className="leading-[1.65] text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                Each month, one <span className="italic" style={{ color: '#0D1F3C' }}>carefully selected</span> introduction to a member who shares your context
              </li>
              <li className="leading-[1.65] text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                A concierge-style service, manually curated to ensure shared relevance and mutual benefit
              </li>
            </ul>
          </div>

          <div
            className="p-8 transition-all hover:translate-y-[-2px] duration-200"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[1.375rem] tracking-[-0.01em]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
                Circles
              </h3>
              <div
                className="px-3 py-1 text-[0.6875rem] tracking-[0.08em] uppercase"
                style={{ backgroundColor: '#F9F8F5', color: '#355E3B', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Included
              </div>
            </div>

            <ul className="space-y-4">
              <li className="leading-[1.65] text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                Peer advisory group of 6-10 members with <span className="italic" style={{ color: '#0D1F3C' }}>shared background</span>, goals or geography
              </li>
              <li className="leading-[1.65] text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                Virtual or in-person meetings every two months, facilitated by our team
              </li>
            </ul>
          </div>

          <div
            className="p-8 transition-all hover:translate-y-[-2px] duration-200"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[1.375rem] tracking-[-0.01em]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
                Events
              </h3>
              <div
                className="px-3 py-1 text-[0.6875rem] tracking-[0.08em] uppercase"
                style={{ backgroundColor: '#F9F8F5', color: '#355E3B', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Included
              </div>
            </div>

            <ul className="space-y-4">
              <li className="leading-[1.65] text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                Dinners, annual retreats, and webinars with <span className="italic" style={{ color: '#0D1F3C' }}>leading figures</span> from business, politics, and academics
              </li>
            </ul>
          </div>

          <div
            className="p-8 transition-all hover:translate-y-[-2px] duration-200"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[1.375rem] tracking-[-0.01em]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
                Knowledge Hub
              </h3>
              <div
                className="px-3 py-1 text-[0.6875rem] tracking-[0.08em] uppercase"
                style={{ backgroundColor: '#F9F8F5', color: '#355E3B', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Included
              </div>
            </div>

            <ul className="space-y-4">
              <li className="leading-[1.65] text-[0.9375rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                Exclusive knowledge resources and <span className="italic" style={{ color: '#0D1F3C' }}>curated information</span> to keep you ahead
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}