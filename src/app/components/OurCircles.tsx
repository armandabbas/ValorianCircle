import { Link } from 'react-router-dom';

export function OurCircles() {
  return (
    <section id="our-circles" className="w-full bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28 relative z-10">
        <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-10" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>
          Meaningful Circles for Lasting Relationships
        </h2>
        
        <div className="max-w-[700px]">
          <p className="text-[1.0625rem] md:text-[1.125rem] leading-[1.65] mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>
            <span className="italic" style={{ color: '#38574A' }}>Intimate</span> peer groups, structured yet discreet. Designed to foster lasting connections.
          </p>
          
          <p className="text-[1.0625rem] md:text-[1.125rem] leading-[1.65] mb-12" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>
            A Circle is a curated peer advisory group of 6–10 members with comparable backgrounds, challenges, and goals.
          </p>
          
          <div className="mb-12">
            <p className="text-[0.75rem] leading-[1.6] tracking-[0.12em] uppercase mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              Typical Structure
            </p>
            <ul className="space-y-4">
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#38574A' }}>●</span>
                <span>Six sessions per year (virtual or in-person).</span>
              </li>
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#38574A' }}>●</span>
                <span>Ongoing exchange via private chat.</span>
              </li>
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#38574A' }}>●</span>
                <span>One optional in-person gathering per year.</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-12">
            <p className="text-[0.75rem] leading-[1.6] tracking-[0.12em] uppercase mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              Participants
            </p>
            
            <ul className="space-y-4">
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#38574A' }}>●</span>
                <span>All participants are <span className="italic">personally vetted</span>. Each Circle is tailored by life stage and context to foster highly relevant discussions.</span>
              </li>
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#38574A' }}>●</span>
                <span>Each Circle is facilitated by a trained moderator.</span>
              </li>
              <li className="text-[1rem] leading-[1.65] flex items-start gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#38574A' }}>●</span>
                <span>Participation is entirely optional, ensuring <span className="italic">highly engaged</span> and committed members.</span>
              </li>
            </ul>
          </div>
          
          <p className="text-[1rem] leading-[1.65]" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
            <Link 
              to="/circles#circles-list" 
              className="transition-opacity hover:opacity-70 underline" 
              style={{ color: '#38574A', fontWeight: 400 }}
            >
              View
            </Link> concrete examples of current and upcoming Circles.
          </p>
        </div>
      </div>
    </section>
  );
}