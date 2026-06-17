export function Members() {
  const memberTypes = [
    {
      category: 'Financial Independence',
      description: 'Individuals who have achieved financial independence through entrepreneurship, investments, or wealth accumulation'
    },
    {
      category: 'Economic Responsibility',
      description: 'Professionals in positions of significant economic responsibility, including executives, founders, and family office leaders'
    }
  ];

  return (
    <section className="w-full" style={{ backgroundColor: '#F2F3EE' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-32">
        <h2 className="text-[1.75rem] md:text-[2rem] tracking-[-0.01em] mb-12 md:mb-16" style={{ color: '#1B1B1B' }}>
          Who joins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {memberTypes.map((type, index) => (
            <div key={index}>
              <h3 className="text-[1.125rem] tracking-[0.01em] mb-4" style={{ color: '#1B1B1B' }}>
                {type.category}
              </h3>
              <p className="text-[0.9375rem] leading-[1.6] tracking-[0.005em]" style={{ color: '#4A4A4A' }}>
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
