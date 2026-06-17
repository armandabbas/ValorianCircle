interface FinalCTAProps {
  onApplyClick?: () => void;
}

export function FinalCTA({ onApplyClick }: FinalCTAProps) {
  return (
    <section className="w-full" style={{ backgroundColor: '#0D1F3C' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Headline */}
          <h2
            className="text-[2.25rem] md:text-[3rem] leading-[1.2] tracking-[-0.015em] mb-10"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 500,
              color: 'white'
            }}
          >
            Europe needs builders who lead, and leaders who build.
          </h2>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={onApplyClick}
              className="inline-block px-8 py-3.5 transition-all duration-200 text-[0.9375rem] tracking-[0.01em] cursor-pointer hover:opacity-90"
              style={{
                backgroundColor: 'white',
                color: '#0D1F3C',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                border: 'none',
                borderRadius: '6px'
              }}
            >
              Request Invitation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
