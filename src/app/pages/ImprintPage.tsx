export function ImprintPage() {
  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: '#F7F5F2' }}>
      <div className="mx-auto max-w-[800px] px-6 md:px-12 py-20 md:py-32">
        <h1 className="text-[2.25rem] md:text-[2.75rem] leading-[1.2] tracking-[-0.015em] mb-12" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>
          Legal Notice
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              Information pursuant to Section 5 of the German Telemedia Act (TMG)
            </h2>
            <p className="text-[1rem] leading-[1.65] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
              Valorian Circle GmbH i.G.
            </p>
            <p className="text-[1rem] leading-[1.65] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
              Represented by Managing Director Leon Szeli
            </p>
            <p className="text-[1rem] leading-[1.65] tracking-[0.005em] mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>
              Registered Office / Address:
            </p>
            <p className="text-[1rem] leading-[1.65] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
              Valorian Circle GmbH i.G., Krenmoostraße 65, 85757 Karlsfeld, Germany
            </p>
            <p className="text-[1rem] leading-[1.65] tracking-[0.005em] mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#2B2B2B' }}>
              Contact:
            </p>
            <p className="text-[1rem] leading-[1.65] tracking-[0.005em]" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
              Email: info@valoriancircle.com<br />
              Phone: +4917634600105
            </p>
          </section>

          <section>
            <h2 className="text-[1.375rem] tracking-[0.005em] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#38574A' }}>
              Responsible for Content (if applicable)
            </h2>
            <p className="text-[1rem] leading-[1.65] tracking-[0.005em]" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, color: '#5A5A5A' }}>
              Responsible for content pursuant to Section 18 (2) of the German Interstate Media Treaty (MStV):<br />
              Valorian Circle GmbH i.G., Krenmoostraße 65, 85757 Karlsfeld, Germany
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}