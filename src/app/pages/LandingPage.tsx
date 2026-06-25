import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, Lock, Users, Target, Shield, ArrowUpRight, Plus, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface OutletContext {
  onApplyClick: () => void;
}

export function LandingPage() {
  const context = useOutletContext<OutletContext>();
  const handleApplyClick = context?.onApplyClick;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/10 bg-white/50 backdrop-blur-sm mb-8">
            <Lock className="w-3.5 h-3.5 text-[#0D1F3C]/60" />
            <span className="text-xs font-medium tracking-wide text-[#0D1F3C]/80 uppercase">Invite-only</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight text-[#0D1F3C] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tiefe und relevante Peers statt transaktionalem Networking.
          </h1>
          
          <p className="text-lg md:text-xl text-[#0D1F3C]/70 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Eine kuratierte, einladungsbasierte Peer-Community accomplished europäischer Gründer, Investoren und Executives. 
            Gemeinsame europäische Macher-Identität.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleApplyClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#0D1F3C] text-white rounded-full font-medium tracking-wide hover:bg-[#0D1F3C]/90 transition-all flex items-center justify-center gap-2"
            >
              Request Invitation <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-sm text-[#0D1F3C]/50">
              Nur auf Empfehlung oder über unseren{' '}
              <Link to="/selection" className="text-[#0D1F3C] underline underline-offset-4 hover:text-[#0D1F3C]/70 transition-colors">
                Auswahlprozess
              </Link>.
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION TEASER */}
      <section className="py-24 px-6 md:px-12 border-t border-[#0D1F3C]/10 bg-white/30">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#0D1F3C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Vision for Europe
          </h2>
          <p className="text-lg text-[#0D1F3C]/70 leading-relaxed mb-8 font-light">
            Europa befindet sich in einem entscheidenden Jahrzehnt, das Mut und echte Macher erfordert. 
            Wir bündeln die Kraft jener, die Verantwortung tragen, um nicht nur Unternehmen, sondern den Kontinent nachhaltig zu prägen.
          </p>
          <Link to="/mission" className="inline-flex items-center gap-2 text-[#0D1F3C] font-medium hover:opacity-70 transition-opacity">
            Unsere Mission lesen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. SELECTED MEMBERS & STATS */}
      <section className="py-32 px-6 md:px-12 border-t border-[#0D1F3C]/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-[600px]">
              <h2 className="text-4xl md:text-5xl text-[#0D1F3C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Selected Members
              </h2>
              <p className="text-lg text-[#0D1F3C]/70 font-light">
                Das Kaliber unseres Netzwerks spricht für sich. Ein vertraulicher Raum für Individuen, die bereits signifikanten Einfluss ausüben.
              </p>
            </div>
            <Link to="/members" className="inline-flex items-center gap-2 px-6 py-3 border border-[#0D1F3C]/20 rounded-full text-[#0D1F3C] hover:bg-[#0D1F3C]/5 transition-colors whitespace-nowrap">
              All Members <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <div className="text-4xl text-[#0D1F3C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>€2B+</div>
              <div className="text-sm text-[#0D1F3C]/60 uppercase tracking-widest font-medium">Capital Raised</div>
            </div>
            <div>
              <div className="text-4xl text-[#0D1F3C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>€5B+</div>
              <div className="text-sm text-[#0D1F3C]/60 uppercase tracking-widest font-medium">Accumulated Exit Value</div>
            </div>
            <div>
              <div className="text-4xl text-[#0D1F3C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>€15B+</div>
              <div className="text-sm text-[#0D1F3C]/60 uppercase tracking-widest font-medium">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl text-[#0D1F3C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>€500M+</div>
              <div className="text-sm text-[#0D1F3C]/60 uppercase tracking-widest font-medium">Combined ARR</div>
            </div>
          </div>

          <div className="bg-white/50 border border-[#0D1F3C]/10 p-8 md:p-12">
            <h3 className="text-lg font-medium text-[#0D1F3C] mb-8 uppercase tracking-wide">Netzwerk-Verteilung</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {[
                'Post-Exit Founders',
                'Operative Founders',
                'Investors & VCs',
                'Executives',
                'Public Figures'
              ].map((role) => (
                <div key={role} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C]/40" />
                  <span className="text-[#0D1F3C]/80 font-light">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THEMEN (What we talk about) */}
      <section className="py-32 px-6 md:px-12 bg-[#0D1F3C] text-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            What we talk about
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <h3 className="text-2xl mb-4 font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>Capital Allocation</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Zugang zu Opportunities, Marktkenntnis und tiefe Allokations-Erfahrung über Branchen und Märkte hinweg. Echte Insights fernab von Standard-Pitches.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>Personal Matters</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Familie, Gesundheit, Sinn: die entscheidenden persönlichen Fragen, die extremer Erfolg mit sich bringt. Ein geschützter Raum ohne Urteil.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>Business Decisions</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Ein vertrauensvolles Sounding Board für strategische Weichenstellungen, Krisenmanagement sowie komplexe Exit-, Rückzugs- und Identitätsfragen.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>The Bigger Picture</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Gemeinsam EU-Regulierung navigieren, eine starke Vision für Europa entwickeln und Standortfragen strategisch beantworten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORMATE (How it works) */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-[#0D1F3C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              How it works
            </h2>
            <p className="text-lg text-[#0D1F3C]/70 font-light max-w-2xl mx-auto">
              Unser White-Glove-Versprechen: Maximaler Wert bei minimalem Zeitaufwand. 
              Valorian übernimmt Kuratierung und Organisation, Sie investieren kaum Zeit.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Circles",
                outcome: "Durchgehende Tiefe statt Einmal-Begegnungen",
                mechanic: "Feste, kleine Peer-Gruppen (6-8 Personen), individuell kuratiert nach Profil und Präferenzen, die sich regelmäßig treffen und sich über die Zeit wirklich kennenlernen."
              },
              {
                title: "Member Directory",
                outcome: "Den richtigen Peer gezielt finden",
                mechanic: "Ein durchsuchbares, exklusives Verzeichnis nach Branche, Standort, Erfahrung und Themen."
              },
              {
                title: "1-on-1 Introductions",
                outcome: "Wertvolle Beziehungen ohne Eigenrecherche",
                mechanic: "Eine handverlesene Vorstellung pro Monat, exakt abgestimmt auf aktuelle Fragen oder Interessen. Valorian wählt aus, der Member sagt nur Ja."
              },
              {
                title: "Events",
                outcome: "Sich im echten Rahmen begegnen",
                mechanic: "Kuratierte, intime Formate (z.B. exklusive Dinners, Retreats, Off-Sites) in streng begrenzter Runde. Qualität der Gespräche steht weit vor der Größe des Events."
              },
              {
                title: "Knowledge Hub",
                outcome: "Von Erfahrungen profitieren, statt Fehler selbst zu machen",
                mechanic: "Kuratierte Playbooks, Insights und gebündelte Ressourcen direkt aus dem exklusiven Netzwerk."
              },
              {
                title: "Digital Community",
                outcome: "Laufender Austausch zwischen den Treffen",
                mechanic: "Der geschützte digitale Raum, in dem wichtige Fragen, Empfehlungen und strategische Gespräche jederzeit vertraulich weiterlaufen können."
              }
            ].map((format, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-[#0D1F3C]/10 pb-12 last:border-0">
                <div className="md:w-1/3">
                  <h3 className="text-2xl text-[#0D1F3C]" style={{ fontFamily: "'Playfair Display', serif" }}>{format.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <div className="text-lg font-medium text-[#0D1F3C] mb-2">{format.outcome}</div>
                  <p className="text-[#0D1F3C]/70 font-light leading-relaxed">{format.mechanic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-32 px-6 md:px-12 bg-white/30 border-t border-[#0D1F3C]/10">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#0D1F3C] mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "Wer qualifiziert sich für eine Mitgliedschaft?", a: "Die Mitgliedschaft ist streng limitiert auf europäische Gründer (Post-Exit oder signifikante operative Traktion), ausgewählte Investoren und führende Executives. Details finden Sie auf der Selection-Seite." },
              { q: "Wie läuft der Bewerbungsprozess ab?", a: "Der Prozess beginnt mit einer Einladung durch ein bestehendes Mitglied oder einer direkten Bewerbung. Nach einem ersten Screening folgen kurze persönliche Interviews, um den Fit für die Community sicherzustellen." },
              { q: "Wie viel Zeit muss ich investieren?", a: "Unser White-Glove-Ansatz bedeutet, dass Sie entscheiden, wie intensiv Sie das Netzwerk nutzen. Die Teilnahme an einem Circle erfordert etwa 2 Stunden alle zwei Monate. Alle anderen Formate sind optional." },
              { q: "Wie wird Vertraulichkeit sichergestellt?", a: "Valorian operiert unter strengen Chatham House Rules. Die kleine, stark kuratierte Gruppengröße und unser rigoroses Vetting-Verfahren garantieren einen sicheren Raum für hochsensible Themen." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-[#0D1F3C]/10 bg-white/50 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/80 transition-colors"
                >
                  <span className="font-medium text-[#0D1F3C] pr-8">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronDown className="w-5 h-5 text-[#0D1F3C]/50 transform rotate-180 transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0D1F3C]/50 transition-transform" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-[#0D1F3C]/70 font-light leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
