import { useOutletContext } from 'react-router-dom';
import { FellowshipBenefits } from '../components/FellowshipBenefits';
import { FinalCTA } from '../components/FinalCTA';
import { FAQ } from '../components/FAQ';

interface OutletContext {
  onApplyClick: () => void;
}

export function FellowshipsPage() {
  const { onApplyClick } = useOutletContext<OutletContext>();

  return (
    <div className="min-h-screen pt-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="w-full" style={{ backgroundColor: '#0D1F3C' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 pt-32 md:pt-40 pb-32 md:pb-40">
          <div className="max-w-[900px]">
            <h1 className="text-[3rem] md:text-[4.5rem] leading-[1.1] tracking-[-0.02em] mb-6 font-bold" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}>
              Fellowships
            </h1>
            <p className="text-[1.25rem] md:text-[1.5rem] leading-[1.7] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}>
              A 100-day program for experts ready to become founders.
            </p>
            <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.7] max-w-[700px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255, 255, 255, 0.8)' }}>
              Fellows receive a living cost stipend, project budget, senior mentorship, and full access to the Valorian network to co-found a company in their field.
            </p>
          </div>
        </div>
      </section>

      {/* Fellowship Benefits */}
      <FellowshipBenefits />

      {/* Who Should Apply Section */}
      <section className="w-full" style={{ backgroundColor: '#F9F8F5' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-[800px]">
            <h2
              className="text-[2.25rem] md:text-[3rem] leading-[1.2] tracking-[-0.015em] mb-8"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 500,
                color: '#0D1F3C'
              }}
            >
              Who Should Apply
            </h2>
            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: '1.7', color: '#1A1A1A' }}>
              <p>
                Fellowships are designed for domain experts in economically significant but underdigitalized sectors. These are fields where technology can create transformative impact, but where founder expertise is scarce.
              </p>
              <p style={{ fontWeight: 500 }}>
                Target fields include:
              </p>
              <ul className="list-none space-y-3 ml-6">
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#355E3B' }}>•</span>
                  <strong>Healthcare:</strong> Doctors, nurses, medical administrators
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#355E3B' }}>•</span>
                  <strong>Law:</strong> Lawyers, judges, legal consultants
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#355E3B' }}>•</span>
                  <strong>Manufacturing:</strong> Industrial engineers, supply chain experts
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#355E3B' }}>•</span>
                  <strong>Public Administration:</strong> Civil servants, policy experts
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#355E3B' }}>•</span>
                  <strong>Logistics:</strong> Transportation, warehousing professionals
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#355E3B' }}>•</span>
                  <strong>Education:</strong> Teachers, administrators, curriculum designers
                </li>
              </ul>
              <p>
                The goal is simple: co-found a company in your field. You bring the domain expertise. Valorian provides the network, resources, and mentorship to turn that expertise into a technology company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA onApplyClick={onApplyClick} />
    </div>
  );
}
