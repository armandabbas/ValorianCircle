export function AdvisoryAreas() {
  const areas = [
    {
      title: 'Capital Allocation',
      subtitle: 'Strategic wealth management',
      items: [
        'Portfolio construction, capital deployment and personal finance architecture.',
        'All asset classes: Liquid assets, private markets, tangible holdings and alternatives.',
        'Family office structuring and succession planning.'
      ]
    },
    {
      title: 'Business Decisions',
      subtitle: 'Strategic guidance from peers',
      items: [
        'Navigate critical decisions with confidential peer counsel.',
        'M&A strategy, exit planning, and growth challenges.',
        'Board composition, talent acquisition, organisational scaling.'
      ]
    },
    {
      title: 'Personal Matters',
      subtitle: 'Life beyond business',
      items: [
        'Leveraging means to maximise quality of life.',
        'Longevity and health optimisation approaches.',
        'Legacy considerations and philanthropic ventures.'
      ]
    }
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#1A1A1A' }}>
          <em style={{ color: '#0D1F3C' }}>Personalised</em> Advice Where It Matters Most
        </h2>
        <p className="text-[1rem] md:text-[1.0625rem] leading-[1.65] mb-12 max-w-[700px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
          Exchange with peers in <span className="italic" style={{ color: '#0D1F3C' }}>similar positions</span> on strategic decisions where experience and discretion matter most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-8 transition-all hover:translate-y-[-2px] duration-200"
              style={{ backgroundColor: '#F9F8F5', border: '1px solid rgba(0, 0, 0, 0.1)' }}
            >
              <h3 className="text-[1.25rem] mb-2 tracking-[-0.01em]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
                {area.title}
              </h3>

              <p className="text-[0.875rem] mb-6 italic" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#6b6b6b', letterSpacing: '0.01em' }}>
                {area.subtitle}
              </p>

              <ul className="space-y-3">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 items-start">
                    <span className="text-[0.625rem] mt-1.5 flex-shrink-0" style={{ color: '#355E3B' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}