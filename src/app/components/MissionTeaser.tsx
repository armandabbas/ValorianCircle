import { Link } from 'react-router-dom';

export function MissionTeaser() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="border-l-2 border-[#D4AF37] pl-8">
        <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>A Vision for Europe</h2>
        <p className="text-xl text-[#0D1F3C]/80 font-light mb-8 max-w-3xl leading-relaxed">
          Europa braucht Macher. Wir bringen die führenden Köpfe zusammen, um nicht nur Unternehmen, sondern den Kontinent zu gestalten.
        </p>
        <Link to="/mission" className="inline-flex items-center text-[#D4AF37] hover:text-[#0D1F3C] transition-colors uppercase tracking-widest text-sm font-medium">
          Read the Mission <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
