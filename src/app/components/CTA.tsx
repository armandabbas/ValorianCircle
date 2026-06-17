interface CTAProps {
  onApplyClick?: () => void;
}

export function CTA({ onApplyClick }: CTAProps) {
  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#38574A' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28 relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-8" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#F7F5F2' }}>
            Join our <span className="italic">private-member</span> community
          </h2>
          <button 
            onClick={onApplyClick}
            className="px-8 py-3.5 transition-all duration-200 hover:opacity-90 text-[0.9375rem] tracking-[0.02em] cursor-pointer"
            style={{ 
              backgroundColor: '#F7F5F2',
              color: '#38574A',
              fontFamily: 'Fraunces, serif',
              fontWeight: 500,
              border: 'none'
            }}
          >
            Request Invitation
          </button>
        </div>
      </div>
    </section>
  );
}