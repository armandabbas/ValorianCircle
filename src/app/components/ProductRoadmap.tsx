import { MessageCircle, Users, Plane, Handshake, Video, MapPin, Sparkles, MessageSquare, Tag, TrendingUp, Search } from 'lucide-react';

export function ProductRoadmap() {
  const modules = [
    {
      name: 'Link',
      offerings: [
        { name: 'Messaging', availability: 'Launched', price: 'Included in membership', icon: MessageCircle },
        { name: 'Member Directory', availability: 'Launched', price: 'Included in membership', icon: Users },
        { name: 'Annual Retreat', availability: 'Launched', price: 'To be announced', icon: Plane }
      ]
    },
    {
      name: 'Learn',
      offerings: [
        { name: 'Curated Introductions', availability: 'Launched', price: 'Included in membership', icon: Handshake },
        { name: 'Virtual topic-based Circles', availability: 'Launched', price: 'Included in membership', icon: Video },
        { name: 'High-Profile Events', availability: 'Coming soon', price: 'Included in membership', icon: Sparkles },
        { name: 'Forum', availability: 'Coming soon', price: 'Included in membership', icon: MessageSquare }
      ]
    },
    {
      name: 'Leverage',
      offerings: [
        { name: 'Exclusive Discounts', availability: 'Coming soon', price: 'Included in membership', icon: Tag },
        { name: 'Exclusive Dealflow', availability: 'Coming soon', price: 'Included in membership', icon: TrendingUp },
        { name: 'Job Search (min. 200k € p.a.)', availability: 'Coming soon', price: 'Included in membership', icon: Search }
      ]
    }
  ];

  return (
    <section id="benefits-fees" className="w-full" style={{ backgroundColor: '#F9F8F5' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28">
        <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#0D1F3C' }}>
          Benefits & Fees
        </h2>

        <div className="mb-12">
          <h3 className="text-[1.125rem] tracking-[0.005em] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
            Fees
          </h3>
          <p className="text-[1rem] leading-[1.65] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
            We charge a yearly membership fee of <strong style={{ fontWeight: 500, color: '#355E3B' }}>€ 2,950</strong> (€ 2,500 excl. VAT) plus a one-time onboarding fee of <strong style={{ fontWeight: 500, color: '#355E3B' }}>€ 1,000</strong>.
          </p>
          <p className="text-[1rem] leading-[1.65] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
            For all applications submitted before <strong style={{ fontWeight: 500, color: '#0D1F3C' }}>July 1, 2026</strong>, the onboarding fee will be <span className="italic" style={{ color: '#0D1F3C' }}>fully waived</span>.
          </p>
          <p className="text-[1rem] leading-[1.65] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
            Most members expense this via their business or employer.
          </p>
          <p className="text-[1rem] leading-[1.65] mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
            Considering the caliber of our members and the scale at which they operate, typically <span className="italic" style={{ color: '#0D1F3C' }}>one meaningful introduction</span> provides immediate value.
          </p>

          <h3 className="text-[1.125rem] tracking-[0.005em] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}>
            Benefits
          </h3>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: '1px solid #E8E5E0' }}>
                <th className="text-left py-4 px-4 text-[0.875rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                  Module
                </th>
                <th className="text-left py-4 px-4 text-[0.875rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                  Offering
                </th>
                <th className="text-left py-4 px-4 text-[0.875rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                  Availability
                </th>
                <th className="text-left py-4 px-4 text-[0.875rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, moduleIndex) => (
                module.offerings.map((offering, offeringIndex) => (
                  <tr
                    key={`${moduleIndex}-${offeringIndex}`}
                    style={{ borderBottom: '1px solid #E8E5E0' }}
                  >
                    {offeringIndex === 0 && (
                      <td
                        className="py-4 px-4 text-[0.9375rem] tracking-[0.005em] align-top"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C' }}
                        rowSpan={module.offerings.length}
                      >
                        {module.name}
                      </td>
                    )}
                    <td className="py-4 px-4 text-[0.9375rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
                      <div className="flex items-center gap-2">
                        <offering.icon className="w-4 h-4" style={{ color: '#0D1F3C', opacity: 0.6 }} />
                        <span>{offering.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[0.9375rem] tracking-[0.005em]" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: offering.availability.includes('Coming soon') ? '#8A8A8A' : '#0D1F3C'
                    }}>
                      {offering.availability}
                    </td>
                    <td className="py-4 px-4 text-[0.9375rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
                      {offering.price}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-8">
          {modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className="space-y-4">
              <h3 className="text-[1.125rem] tracking-[0.005em] pb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#0D1F3C', borderBottom: '1px solid #E8E5E0' }}>
                {module.name}
              </h3>
              {module.offerings.map((offering, offeringIndex) => (
                <div
                  key={offeringIndex}
                  className="py-4 space-y-2"
                  style={{ borderBottom: '1px solid #E8E5E0' }}
                >
                  <div className="text-[0.9375rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#0D1F3C' }}>
                    <div className="flex items-center gap-2">
                      <offering.icon className="w-4 h-4" style={{ color: '#0D1F3C', opacity: 0.6 }} />
                      <span>{offering.name}</span>
                    </div>
                  </div>
                  <div className="text-[0.875rem] tracking-[0.005em] italic" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    color: offering.availability.includes('Coming soon') ? '#8A8A8A' : '#0D1F3C'
                  }}>
                    {offering.availability}
                  </div>
                  <div className="text-[0.875rem] tracking-[0.005em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#1A1A1A' }}>
                    {offering.price}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}