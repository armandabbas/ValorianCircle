export function Topics() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>What we talk about</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Capital Allocation */}
          <div className="p-8 border border-[#0D1F3C]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-medium mb-4">Capital Allocation</h3>
            <p className="text-[#0D1F3C]/70">Zugang zu Opportunities, Marktkenntnis und Allokations-Erfahrung über Branchen und Märkte hinweg.</p>
          </div>
          {/* Personal Matters */}
          <div className="p-8 border border-[#0D1F3C]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-medium mb-4">Personal Matters</h3>
            <p className="text-[#0D1F3C]/70">Familie, Gesundheit, Sinn: die persönlichen Fragen, die Erfolg mit sich bringt.</p>
          </div>
          {/* Business Decisions */}
          <div className="p-8 border border-[#0D1F3C]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-medium mb-4">Business Decisions</h3>
            <p className="text-[#0D1F3C]/70">Sounding Board inkl. Exit-/Rückzugs- und Identitätsfragen.</p>
          </div>
          {/* The Bigger Picture */}
          <div className="p-8 border border-[#0D1F3C]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-medium mb-4">The Bigger Picture</h3>
            <p className="text-[#0D1F3C]/70">EU-Regulierung navigieren, Vision für Europa, Standortfragen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
